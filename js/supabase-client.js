/* ══════════════ SUPABASE CLIENT + DATA LAYER ══════════════
   Bridges the real MiCampeche Supabase project to the existing render
   pipeline in app.js. Every fetch function below returns data reshaped
   into the SAME object shape the old mock arrays used — so the render
   functions in app.js didn't need to be rewritten, only re-fed.

   Every visitor gets an anonymous Supabase Auth session automatically.
   There's no signup/login form yet (that's separate, later work) — but
   this still gives every submission a real, stable auth.uid() so RLS and
   the per-day/per-person limits (1 Aviso/day, 1 Clasificado/person, 1
   Oferta slot/day) are enforced for real, not just in UI copy. The same
   anonymous identity persists across visits on this device via Supabase's
   own localStorage session handling. */

const SUPABASE_URL = 'https://fszvefihkjrqkxysencc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_IcHEUw51NvrFHmTfhquivA_n_uvJt0K';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* ── Small date helpers used by both this file and app.js.
   Defined once here (loaded first) rather than in app.js, since classic
   <script> tags share one global scope and re-declaring a const/function
   name across files throws. ── */
function dToDs(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
const TODAY_DS=dToDs(new Date());
const MONTH_ABBR_ES=['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];

const MC={};

/* ── SESSION BOOTSTRAP ──
   Resolves to the current user's id, creating an anonymous session on
   first visit. A named function (not just an inline IIFE) so sign-out can
   call it again to re-establish a fresh anonymous session afterward. */
async function ensureSession(){
  try{
    const {data:{session}}=await sb.auth.getSession();
    if(session)return session.user.id;
    const {data,error}=await sb.auth.signInAnonymously();
    if(error){console.error('Anonymous sign-in failed:',error);return null;}
    return data.user.id;
  }catch(err){console.error('Session bootstrap failed:',err);return null;}
}
MC.ready=ensureSession();

/* ── REAL ACCOUNTS ──
   Every visitor already has an anonymous session (see above). Signing up
   converts that SAME session into a permanent one — same auth.uid(), same
   profile row, same submissions — rather than starting over, so nothing
   someone did before creating an account gets orphaned. Signing in on a
   different device replaces the local anonymous identity with the real
   one tied to that email. */
MC.signUp=async function(email,password,displayName,phone){
  const {data,error}=await sb.auth.updateUser({email,password,data:{display_name:displayName}});
  if(error)return {error};
  // updateUser() converts the anonymous account to a real one server-side,
  // but the CURRENT session's JWT still carries the old is_anonymous:true
  // claim until explicitly refreshed — every request made with the stale
  // token afterward (verifying a business, submitting anything) silently
  // behaves as if still anonymous. This affects every brand-new signup,
  // not an edge case, so it's not optional.
  await sb.auth.refreshSession();
  MC.ready=Promise.resolve(data.user.id); // same uid, but keeps this in sync defensively
  // The profile row already exists (created by the trigger back when the
  // anonymous session first started) — this just fills in the real name
  // and phone. Phone is required at signup (per the founder's own call —
  // more durably useful than email for this community, and it's what
  // makes contact-info auto-fill on posts possible).
  await sb.from('profiles').update({display_name:displayName,phone}).eq('id',data.user.id);
  return {error:null};
};

MC.signIn=async function(email,password){
  const {data,error}=await sb.auth.signInWithPassword({email,password});
  if(!error&&data.user)MC.ready=Promise.resolve(data.user.id);
  return {error};
};

MC.signOut=async function(){
  await sb.auth.signOut();
  MC.ready=ensureSession(); // immediately re-establish anonymous browsing, same as a fresh visit
  await MC.ready;
};

MC.currentAccount=async function(){
  const {data:{session}}=await sb.auth.getSession();
  if(!session||session.user.is_anonymous)return {signedIn:false};
  const {data:prof}=await sb.from('profiles').select('display_name,phone,is_admin').eq('id',session.user.id).single();
  const business=await MC.myBusiness();
  return {signedIn:true,email:session.user.email,displayName:(prof&&prof.display_name)||'Vecino',phone:(prof&&prof.phone)||null,isAdmin:!!(prof&&prof.is_admin),business};
};

MC.myProfile=async function(){
  const uid=await MC.ready;
  if(!uid)return {display_name:'Vecino',phone:null};
  const {data}=await sb.from('profiles').select('display_name,phone').eq('id',uid).single();
  return data||{display_name:'Vecino',phone:null};
};

/* ── BUSINESS VERIFICATION ──
   A business is something an ACCOUNT HAS, not a different kind of
   account — any personal account can verify one business (enforced by a
   unique constraint on businesses.profile_id) and immediately gains
   Tienda/Ofertas access at the free tier. Verification itself is
   instant/self-serve; the individual products/ofertas they then post
   still go through the same admin review as everything else, so there's
   still a real checkpoint before anything's actually public. */
MC.myBusiness=async function(){
  const uid=await MC.ready;
  if(!uid)return null;
  const {data}=await sb.from('businesses').select('*').eq('profile_id',uid).maybeSingle();
  return data||null;
};

MC.verifyBusiness=async function(d){
  const uid=await MC.ready;
  return sb.from('businesses').insert({
    profile_id:uid,business_name:d.name,address:d.address,phone:d.phone,category:d.cat,rfc:d.rfc||null
  });
};

/* ── HELPERS ── */
function relTimeEs(iso){
  const diffMs=Date.now()-new Date(iso).getTime();
  const mins=Math.floor(diffMs/60000);
  if(mins<1)return 'Hace un momento';
  if(mins<60)return `Hace ${mins} minuto${mins===1?'':'s'}`;
  const hours=Math.floor(mins/60);
  if(hours<24)return `Hace ${hours} hora${hours===1?'':'s'}`;
  const days=Math.floor(hours/24);
  if(days===1)return 'Ayer';
  if(days<7)return `Hace ${days} días`;
  const weeks=Math.floor(days/7);
  return weeks===1?'Hace 1 semana':`Hace ${weeks} semanas`;
}
function fmtMXN(n){return (n===null||n===undefined)?'':'$'+Math.round(Number(n)).toLocaleString('es-MX');}
function parseMoney(s){
  if(s===null||s===undefined||s==='')return null;
  const n=parseFloat(String(s).replace(/[^0-9.]/g,''));
  return isNaN(n)?null:n;
}
function dsToDayMon(ds){
  const d=new Date(ds+'T12:00:00');
  return {day:String(d.getDate()),mon:MONTH_ABBR_ES[d.getMonth()]};
}
/* Turns a Postgres error into a specific, friendly Spanish toast message —
   falls back to a generic one for anything not explicitly recognized. */
function pgErrorToast(error,fallback){
  if(!error)return fallback||'Algo salió mal. Intenta de nuevo.';
  if(error.code==='23505'){
    const m=error.message||'';
    if(m.includes('one_aviso_per_person_per_day'))return 'Ya publicaste un aviso hoy — puedes publicar otro mañana.';
    if(m.includes('one_clasificado_per_person'))return 'Ya tienes un artículo publicado en Clasificados (uno por persona).';
    if(m.includes('ofertas_bookings_booked_date_key'))return 'Ese día ya fue reservado por otro negocio — intenta con otro.';
    if(m.includes('one_claim_per_person_per_oferta'))return 'Ya habías reclamado esta oferta.';
    if(m.includes('reportes_confirmations'))return 'Ya habías confirmado este reporte.';
    if(m.includes('businesses_profile_id_key'))return 'Ya tienes un negocio verificado en esta cuenta.';
    return 'Ya existe un registro con esos datos.';
  }
  if(error.code==='P0001'){
    const m=error.message||'';
    if(m.includes('product_cap_reached'))return 'Llegaste al límite de productos en Tienda para tu plan actual.';
    if(m.includes('oferta_concurrent_slot_cap_reached'))return 'Ya tienes el máximo de espacios reservados para tu plan. Espera a que pase la fecha de uno, o actualiza a Premium para tener hasta 3 a la vez.';
  }
  if(error.code==='42501')return 'No tienes permiso para hacer esto — intenta de nuevo en un momento.';
  console.error('Supabase error:',error);
  return fallback||'Algo salió mal. Intenta de nuevo.';
}

function authErrorToast(error){
  if(!error)return null;
  const m=(error.message||'').toLowerCase();
  if(m.includes('already registered')||m.includes('already exists'))return 'Ya existe una cuenta con ese correo — intenta iniciar sesión en vez de crear una nueva.';
  if(m.includes('invalid login credentials'))return 'Correo o contraseña incorrectos.';
  if(m.includes('password')&&(m.includes('6 character')||m.includes('at least')))return 'La contraseña debe tener al menos 6 caracteres.';
  if(m.includes('invalid') && m.includes('email'))return 'Ese correo no parece válido — revísalo e intenta de nuevo.';
  if(m.includes('email not confirmed'))return 'Este correo aún no está confirmado.';
  console.error('Auth error:',error);
  return 'No se pudo completar. Intenta de nuevo.';
}

/* ══════════════ ADMIN: moderation queue ══════════════
   Reads rely on the "admin read all" RLS policy already in place since
   Phase 1 (is_admin can SELECT regardless of status) — nothing new needed
   there. Approve/reject reuse the existing "admin update (moderation)"
   policy too. Only real gap this closes: pulling all 9 tables' pending
   rows into one unified list instead of clicking through Studio's Table
   Editor nine times. */
const CONTENT_TABLES=[
  {table:'noticias',label:'Noticia',titleField:'headline'},
  {table:'eventos',label:'Evento',titleField:'title'},
  {table:'productos',label:'Producto (Tienda)',titleField:'title'},
  {table:'clasificados',label:'Clasificado',titleField:'title'},
  {table:'ofertas',label:'Oferta',titleField:'title'},
  {table:'perdidos',label:'Perdido/Encontrado',titleField:'title'},
  {table:'empleos',label:'Empleo',titleField:'title'},
  {table:'reportes',label:'Reporte',titleField:'title'},
  {table:'avisos',label:'Aviso',titleField:'title'},
  {table:'businesses',label:'Verificación de negocio',titleField:'business_name'}
];

MC.fetchPendingQueue=async function(){
  const results=await Promise.all(CONTENT_TABLES.map(async ({table,label,titleField})=>{
    const {data,error}=await sb.from(table).select('*, profiles(display_name)').eq('status','pending').order('created_at',{ascending:true});
    if(error){console.error(error);return [];}
    return (data||[]).map(r=>({
      table,label,id:r.id,
      title:r[titleField]||'(sin título)',
      submittedBy:(r.profiles&&r.profiles.display_name)||'Vecino',
      createdAt:r.created_at
    }));
  }));
  return results.flat().sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt));
};

MC.moderatePost=async function(table,id,newStatus){
  return sb.from(table).update({status:newStatus}).eq('id',id);
};

MC.fetchNoticias=async function(){
  const {data,error}=await sb.from('noticias').select('*')
    .eq('status','published').order('published_at',{ascending:false}).limit(30);
  if(error){console.error(error);return [];}
  return data.map(r=>({id:r.id,source:r.source_name,title:r.headline,desc:r.summary,img:r.thumbnail_url||'',time:relTimeEs(r.published_at),url:r.source_url}));
};

MC.fetchEventos=async function(){
  const {data,error}=await sb.from('eventos').select('*')
    .eq('status','published').gte('event_date',TODAY_DS).order('event_date',{ascending:true}).limit(60);
  if(error){console.error(error);return [];}
  return data.map(r=>{
    const {day,mon}=dsToDayMon(r.event_date);
    return {id:r.id,cat:r.category||'Otro',name:r.title,ds:r.event_date,day,mon,time:r.event_time||'',loc:r.location||''};
  });
};

MC.fetchTienda=async function(){
  const [prod,clas]=await Promise.all([
    sb.from('productos').select('*').eq('status','published').order('created_at',{ascending:false}).limit(60),
    sb.from('clasificados').select('*, profiles(display_name)').eq('status','published').order('created_at',{ascending:false}).limit(60)
  ]);
  if(prod.error)console.error(prod.error);
  if(clas.error)console.error(clas.error);
  const negocios=(prod.data||[]).map(r=>({id:r.id,cat:r.category||'Otro',name:r.title,price:fmtMXN(r.price_mxn),seller:r.business_name_snapshot,img:r.image_url||'',featured:!!r.featured,sellerType:'negocio'}));
  const personales=(clas.data||[]).map(r=>({id:r.id,cat:r.category||'Otro',name:r.title,price:fmtMXN(r.price_mxn),seller:(r.profiles&&r.profiles.display_name)||'Vecino',img:r.image_url||'',featured:false,sellerType:'personal'}));
  return [...negocios,...personales];
};

MC.fetchOfertas=async function(){
  const {data,error}=await sb.from('ofertas').select('*, ofertas_bookings(booked_date)')
    .eq('status','published').order('created_at',{ascending:false}).limit(30);
  if(error){console.error(error);return [];}
  const ids=data.map(r=>r.id);
  let countsById={};
  if(ids.length){
    const {data:counts,error:cErr}=await sb.rpc('get_ofertas_claim_counts',{p_oferta_ids:ids});
    if(cErr)console.error(cErr);
    (counts||[]).forEach(c=>{countsById[c.oferta_id]=Number(c.claimed);});
  }
  const uid=await MC.ready;
  let myClaims=new Set();
  if(uid&&ids.length){
    const {data:mine}=await sb.from('ofertas_redemptions').select('oferta_id').eq('claimed_by',uid).in('oferta_id',ids);
    (mine||[]).forEach(r=>myClaims.add(r.oferta_id));
  }
  return data.map(r=>{
    const booking=(r.ofertas_bookings&&r.ofertas_bookings[0])||null;
    const postedDs=booking?booking.booked_date:dToDs(new Date(r.created_at));
    // total count includes everyone; the mock UI adds "+1 if claimedByMe"
    // on top of a base count that excludes the current user, so subtract
    // the current user's own claim back out here to keep that math intact.
    const totalClaimed=countsById[r.id]||0;
    const iClaimed=myClaims.has(r.id);
    return {
      id:r.id,seller:r.business_name_snapshot,tier:r.is_premium?'premium':'free',name:r.title,
      priceWas:Number(r.price_was)||0,priceNow:Number(r.price_now)||0,img:r.image_url||'',
      claimed:iClaimed?Math.max(0,totalClaimed-1):totalClaimed,total:r.quantity_total||1,
      postedDs,iClaimedReal:iClaimed
    };
  });
};

MC.fetchBookedDates=async function(){
  const {data,error}=await sb.from('ofertas_bookings').select('booked_date').gte('booked_date',TODAY_DS);
  if(error){console.error(error);return new Set();}
  return new Set(data.map(r=>r.booked_date));
};

MC.fetchPerdidos=async function(){
  const {data,error}=await sb.from('perdidos').select('*')
    .eq('status','published').order('created_at',{ascending:false}).limit(60);
  if(error){console.error(error);return [];}
  return data.map(r=>({id:r.id,tag:r.report_type,name:r.title,desc:r.description||'',loc:r.location||'',img:r.image_url||''}));
};

MC.fetchAlertas=async function(){
  const {data,error}=await sb.from('alertas').select('*')
    .eq('status','published').order('created_at',{ascending:false}).limit(30);
  if(error){console.error(error);return [];}
  return data.map(r=>({id:r.id,type:r.alert_type,cls:r.resolved?'resolved':'',zone:r.zone||'',desc:r.description||'',time:relTimeEs(r.created_at)}));
};

MC.fetchEmpleos=async function(){
  const {data,error}=await sb.from('empleos').select('*')
    .eq('status','published').order('created_at',{ascending:false}).limit(60);
  if(error){console.error(error);return [];}
  return data.map(r=>({id:r.id,title:r.title,co:r.company,pay:r.pay||'A convenir',tags:r.tags||[]}));
};

MC.fetchReportes=async function(){
  const {data,error}=await sb.from('reportes').select('*')
    .eq('status','published').order('created_at',{ascending:false}).limit(60);
  if(error){console.error(error);return [];}
  const ids=data.map(r=>r.id);
  let countsById={};
  if(ids.length){
    const {data:confs}=await sb.from('reportes_confirmations').select('reporte_id').in('reporte_id',ids);
    (confs||[]).forEach(c=>{countsById[c.reporte_id]=(countsById[c.reporte_id]||0)+1;});
  }
  const uid=await MC.ready;
  let mine=new Set();
  if(uid&&ids.length){
    const {data:myConfs}=await sb.from('reportes_confirmations').select('reporte_id').eq('confirmed_by',uid).in('reporte_id',ids);
    (myConfs||[]).forEach(r=>mine.add(r.reporte_id));
  }
  return data.map(r=>{
    const iConfirmed=mine.has(r.id);
    const total=countsById[r.id]||0;
    return {id:r.id,cat:r.category||'Otro',title:r.title,loc:r.location_text||'',desc:r.description||'',
      confirms:iConfirmed?Math.max(0,total-1):total,status:r.resolved?'resuelto':'abierto',
      time:relTimeEs(r.created_at),img:r.image_url||'',iConfirmedReal:iConfirmed};
  });
};

MC.fetchAvisos=async function(){
  const {data,error}=await sb.from('avisos').select('*, profiles(display_name)')
    .eq('status','published').order('created_at',{ascending:false}).limit(60);
  if(error){console.error(error);return [];}
  return data.map(r=>({id:r.id,cat:r.category||'Otro',title:r.title,desc:r.description||'',
    author:(r.profiles&&r.profiles.display_name)||'Vecino',contact:r.contact_info||'',time:relTimeEs(r.created_at)}));
};

/* ══════════════ SUBMIT: writes real rows, always as status='pending' by table default ══════════════ */

MC.submitEvento=async function(d){
  const uid=await MC.ready;
  return sb.from('eventos').insert({title:d.name,category:d.cat||null,event_date:d.date||null,event_time:d.time||null,location:d.loc||null,description:d.desc||null,submitted_by:uid});
};

/* Selling in Tienda requires a verified business — the FAB in app.js
   routes here only when the Mercado sub-tab is active. If somehow called
   without one (shouldn't happen given app.js's own gate, but defense in
   depth), returns needsBusiness so the UI can show the verify prompt. */
MC.submitProducto=async function(d){
  const uid=await MC.ready;
  const biz=await MC.myBusiness();
  if(!biz)return {needsBusiness:true};
  return sb.from('productos').insert({business_id:biz.id,business_name_snapshot:biz.business_name,title:d.name,category:d.cat||null,price_mxn:parseMoney(d.price),description:d.desc||null,image_url:d.photo||null,submitted_by:uid});
};

/* Clasificados stays open to every account — no business needed, matches
   the "personal listing" spirit (1 free item/person, enforced by the
   existing unique index). */
MC.submitClasificado=async function(d){
  const uid=await MC.ready;
  return sb.from('clasificados').insert({title:d.name,category:d.cat||null,price_mxn:parseMoney(d.price),description:d.desc||null,image_url:d.photo||null,submitted_by:uid});
};

/* Perdidos/Empleos have no manual contact field in the UI — phone is now
   required at signup, so pulling it from the profile is more reliable
   than asking again on every post. Anonymous (not-yet-signed-up)
   visitors simply won't have one yet, same as before this existed. */
MC.submitPerdido=async function(d){
  const uid=await MC.ready;
  const prof=await MC.myProfile();
  return sb.from('perdidos').insert({report_type:d.tag||'perdido',title:d.name,location:d.loc||null,description:d.desc||null,image_url:d.photo||null,contact_info:prof.phone||null,submitted_by:uid});
};

MC.submitEmpleo=async function(d){
  const uid=await MC.ready;
  const prof=await MC.myProfile();
  return sb.from('empleos').insert({title:d.title,company:d.co,pay:d.pay||null,description:d.desc||null,contact_info:prof.phone||null,submitted_by:uid});
};

MC.submitReporte=async function(d){
  const uid=await MC.ready;
  return sb.from('reportes').insert({category:d.cat||null,title:d.title,location_text:d.loc||null,description:d.desc||null,image_url:d.photo||null,submitted_by:uid});
};

MC.submitAviso=async function(d){
  const uid=await MC.ready;
  return sb.from('avisos').insert({category:d.cat||null,title:d.title,description:d.desc||null,contact_info:d.contact||null,submitted_by:uid});
};

/* Ofertas is two writes: the deal itself, then either a booking (day free)
   or a waitlist entry (day full) — mirrors the existing slotCalendarHtml
   free/full branching in app.js exactly, just against real tables now.
   Requires a verified business (same needsBusiness fallback as Productos).
   Pricing/scheduling ($99/slot, 1/day, 2-week window) is IDENTICAL
   regardless of premium — only the concurrent-slot cap (enforced by a real
   DB trigger, not here) differs by tier. */
MC.submitOferta=async function(d,slotDs,isFull){
  const uid=await MC.ready;
  const biz=await MC.myBusiness();
  if(!biz)return {needsBusiness:true};
  if(isFull){
    const {error}=await sb.from('ofertas_waitlist').insert({business_name:biz.business_name,requested_date:slotDs,submitted_by:uid});
    return {waitlisted:true,error};
  }
  const priceWas=parseMoney(d.priceWas),priceNow=parseMoney(d.priceNow);
  const discountPct=(priceWas&&priceNow&&priceWas>0)?Math.max(1,Math.min(75,Math.round((1-priceNow/priceWas)*100))):null;
  const {data:oferta,error:ofErr}=await sb.from('ofertas').insert({
    business_id:biz.id,business_name_snapshot:biz.business_name,is_premium:biz.is_premium,
    title:d.item||'Oferta',description:d.desc||null,terms:d.terms||null,image_url:d.photo||null,
    price_was:priceWas,price_now:priceNow,
    quantity_total:parseInt(d.qty,10)||1,discount_pct:discountPct,submitted_by:uid
  }).select().single();
  if(ofErr)return {error:ofErr};
  const {error:bookErr}=await sb.from('ofertas_bookings').insert({oferta_id:oferta.id,booked_date:slotDs});
  return {error:bookErr,oferta};
};

/* Real image upload — replaces the Google Form placeholder that never
   actually worked (image_url was never populated by any real submission
   before this). Resizing happens client-side in app.js before this is
   called; this just handles the actual Storage write. Files are scoped
   to the uploader's own folder (uid/...), matching the bucket's RLS. */
MC.uploadImage=async function(blob,ext){
  const uid=await MC.ready;
  if(!uid)throw new Error('No hay sesión activa');
  const path=`${uid}/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${ext}`;
  const {error}=await sb.storage.from('uploads').upload(path,blob,{contentType:'image/'+ext,upsert:false});
  if(error)throw error;
  const {data}=sb.storage.from('uploads').getPublicUrl(path);
  return data.publicUrl;
};

MC.claimOferta=async function(ofertaId){
  const uid=await MC.ready;
  return sb.from('ofertas_redemptions').insert({oferta_id:ofertaId,claimed_by:uid});
};
MC.unclaimOferta=async function(ofertaId){
  const uid=await MC.ready;
  return sb.from('ofertas_redemptions').delete().eq('oferta_id',ofertaId).eq('claimed_by',uid);
};

MC.confirmReporte=async function(reporteId){
  const uid=await MC.ready;
  return sb.from('reportes_confirmations').insert({reporte_id:reporteId,confirmed_by:uid});
};
MC.unconfirmReporte=async function(reporteId){
  const uid=await MC.ready;
  return sb.from('reportes_confirmations').delete().eq('reporte_id',reporteId).eq('confirmed_by',uid);
};
