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
const MONTH_FULL_ES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const DOW_FULL_ES=['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];

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
  //
  // Real bug found in production: this call previously had NO error
  // checking at all — real signups were silently keeping the placeholder
  // "Vecino" name and a null phone while still reporting success to the
  // person signing up. Retries once against an explicitly re-fetched
  // session before giving up, since even after refreshSession() above,
  // the very next request can still occasionally race against the
  // refreshed token actually being live client-side — the same class of
  // issue refreshSession() itself exists to guard against.
  let {error:profileErr}=await sb.from('profiles').update({display_name:displayName,phone}).eq('id',data.user.id);
  if(profileErr){
    await sb.auth.getSession();
    ({error:profileErr}=await sb.from('profiles').update({display_name:displayName,phone}).eq('id',data.user.id));
  }
  if(profileErr)return {error:profileErr};
  return {error:null};
};

MC.signIn=async function(email,password){
  const {data,error}=await sb.auth.signInWithPassword({email,password});
  if(!error&&data.user)MC.ready=Promise.resolve(data.user.id);
  return {error};
};

/* Login is by phone number. Supabase Auth is still email+password
   underneath, so resolve the typed phone to the account's email first
   (email_for_phone RPC — digits-only match), then sign in normally. */
MC.emailForPhone=async function(phone){
  const {data,error}=await sb.rpc('email_for_phone',{p_phone:phone});
  if(error){console.error('email_for_phone failed:',error);return null;}
  return data||null;
};

MC.signInWithPhone=async function(phone,password){
  const email=await MC.emailForPhone(phone);
  if(!email)return {error:{message:'no_account_for_phone'}};
  return MC.signIn(email,password);
};

MC.signOut=async function(){
  await sb.auth.signOut();
  MC.ready=ensureSession(); // immediately re-establish anonymous browsing, same as a fresh visit
  await MC.ready;
};

/* Password reset — genuinely requires real email delivery to work
   (Supabase's built-in sender only reaches pre-authorized team members,
   same limitation already documented for signup confirmation). This is
   built and ready; it just can't actually deliver anything until real
   SMTP is configured in the Supabase dashboard, which isn't something
   reachable through this connector — that's a founder-side step. */
MC.requestPasswordReset=async function(email){
  return sb.auth.resetPasswordForEmail(email,{redirectTo:window.location.origin+window.location.pathname});
};

MC.setNewPassword=async function(newPassword){
  return sb.auth.updateUser({password:newPassword});
};

/* Supabase's password-recovery link redirects back here carrying a
   special recovery session; the client library detects it automatically
   and fires this event — no URL parsing needed on our side. */
sb.auth.onAuthStateChange((event)=>{
  if(event==='PASSWORD_RECOVERY'&&typeof openSetNewPassword==='function')openSetNewPassword();
});

/* ── WhatsApp-mediated password reset — no email required ──
   Every step is a narrowly-scoped SECURITY DEFINER database function,
   never a raw client-side auth.users write. request/complete are
   callable with no session at all (that's the whole point — the person
   can't log in); approve/reject check is_admin internally. See the
   'whatsapp_password_reset' migration for the real security properties
   (30-minute code expiry, 5-attempt lockout, generic failure messages
   that never reveal which specific check failed). */
MC.requestPasswordResetWhatsApp=async function(email){
  return sb.rpc('request_password_reset',{p_email:email});
};

MC.completePasswordResetWhatsApp=async function(email,code,newPassword){
  return sb.rpc('complete_password_reset',{p_email:email,p_code:code,p_new_password:newPassword});
};

MC.fetchPasswordResetRequests=async function(){
  // Real bug found in production: password_reset_requests has TWO foreign
  // keys to profiles (profile_id and approved_by) — a plain "profiles(...)"
  // embed is ambiguous to PostgREST and fails outright, which is why this
  // admin list was silently showing nothing despite real pending requests
  // existing. profiles!profile_id explicitly names which relationship to embed.
  const {data,error}=await sb.from('password_reset_requests').select('*, profiles!profile_id(display_name,phone)').eq('status','pending').order('requested_at',{ascending:true});
  if(error){console.error(error);return [];}
  return (data||[]).map(r=>({
    id:r.id,claimedEmail:r.claimed_email,requestedAt:r.requested_at,
    matchedName:(r.profiles&&r.profiles.display_name)||null,
    matchedPhone:(r.profiles&&r.profiles.phone)||null
  }));
};

MC.approvePasswordReset=async function(requestId){
  return sb.rpc('approve_password_reset',{p_request_id:requestId});
};

MC.rejectPasswordReset=async function(requestId,reason){
  return sb.rpc('reject_password_reset',{p_request_id:requestId,p_reason:reason});
};

MC.currentAccount=async function(){
  const {data:{session}}=await sb.auth.getSession();
  if(!session||session.user.is_anonymous)return {signedIn:false};
  const uid=session.user.id;
  // profile + business are independent — fetch them together, not in series.
  const [{data:prof},{data:business}]=await Promise.all([
    sb.from('profiles').select('display_name,phone,is_admin,phone_verification_status,phone_verification_reason').eq('id',uid).single(),
    sb.from('businesses').select('*').eq('profile_id',uid).maybeSingle()
  ]);
  return {
    signedIn:true,email:session.user.email,displayName:(prof&&prof.display_name)||'Vecino',phone:(prof&&prof.phone)||null,
    isAdmin:!!(prof&&prof.is_admin),business:business||null,
    phoneVerificationStatus:(prof&&prof.phone_verification_status)||'pending',
    phoneVerificationReason:(prof&&prof.phone_verification_reason)||null
  };
};

MC.myProfile=async function(){
  const uid=await MC.ready;
  if(!uid)return {display_name:'Vecino',phone:null};
  const {data}=await sb.from('profiles').select('display_name,phone').eq('id',uid).single();
  return data||{display_name:'Vecino',phone:null};
};

/* ── PHONE VERIFICATION (WhatsApp-mediated, security signal only — does
   NOT gate login or posting, per the founder's own call. Login stays
   normal email+password on any device; this only affects the account's
   verified badge and the uniqueness guarantee below.) ──
   The founder receives a WhatsApp from the number claimed at signup and
   compares it manually — same human-review pattern as everything else
   here. Editing your own phone (see updateMyAccount below) resets this
   to pending automatically via a real DB trigger, not app logic, so it
   can't be bypassed by skipping this function. */
MC.updateMyAccount=async function(d){
  const uid=await MC.ready;
  return sb.from('profiles').update({display_name:d.name,phone:d.phone}).eq('id',uid);
};

/* Early, friendly check before someone goes through the whole WhatsApp
   verification dance for a number that could never actually be verified
   (the database's partial unique index on verified phones is the real,
   final backstop against two accounts sharing a number — this just
   catches the common case earlier, with a clearer message, rather than
   letting the request fail silently at approval time much later). Fails
   open (returns false) on a query error so a transient issue never
   blocks a real signup — the database constraint still protects the
   actual guarantee either way. */
MC.isPhoneAlreadyVerified=async function(phone){
  const {data,error}=await sb.from('profiles').select('id').eq('phone',phone).eq('phone_verification_status','verified').limit(1);
  if(error){console.error('Phone uniqueness check failed:',error);return false;}
  return !!(data&&data.length);
};

MC.fetchPendingPhoneVerifications=async function(){
  const {data,error}=await sb.from('profiles').select('id,display_name,phone,created_at').eq('phone_verification_status','pending').not('phone','is',null).order('created_at',{ascending:true});
  if(error){console.error(error);return [];}
  return data||[];
};

MC.approvePhoneVerification=async function(profileId){
  return sb.from('profiles').update({phone_verification_status:'verified'}).eq('id',profileId);
};

MC.rejectPhoneVerification=async function(profileId,reason){
  return sb.from('profiles').update({phone_verification_status:'rejected',phone_verification_reason:reason}).eq('id',profileId);
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

/* Shared map from the negocio_verificar form payload to business columns,
   used by both insert (verify) and update (edit) so the two never drift.
   payment_methods arrives as an array from the multi-select; delivers as
   the 'si'/'no' string from the seg control. */
function businessPayloadFromForm(d){
  return {
    business_name:d.name,description:d.desc,address:d.address,phone:d.phone,category:d.cat,
    business_image_url:d.photo||null,hours:d.hours||null,social_url:d.social||null,rfc:d.rfc||null,
    payment_methods:Array.isArray(d.payment_methods)?d.payment_methods:[],
    delivers:d.delivers===true||d.delivers==='si',
    delivery_info:d.delivery_info||null,
    pickup_address:d.pickup_address||null
  };
}

MC.verifyBusiness=async function(d){
  const uid=await MC.ready;
  return sb.from('businesses').insert({profile_id:uid,...businessPayloadFromForm(d)});
};

/* Editing an existing business — a real DB trigger (not this function)
   forces status back to 'pending' and clears any old rejection reason on
   any owner-driven update, so this never needs to touch status itself;
   it also can't be bypassed by sending status in the payload anyway. */
MC.updateBusiness=async function(id,d){
  return sb.from('businesses').update(businessPayloadFromForm(d)).eq('id',id);
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
// "sábado 21 de noviembre de 2026" — full, human date for the event detail screen
function dsToLongEs(ds){
  if(!ds)return '';
  const d=new Date(ds+'T12:00:00');
  return `${DOW_FULL_ES[d.getDay()]} ${d.getDate()} de ${MONTH_FULL_ES[d.getMonth()]} de ${d.getFullYear()}`;
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
    if(m.includes('reportes_resolution_votes'))return 'Ya habías marcado este reporte como resuelto.';
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
  if(m.includes('no_account_for_phone'))return 'No encontramos una cuenta con ese número. Si creaste tu cuenta antes, escríbenos por WhatsApp.';
  if(m.includes('already registered')||m.includes('already exists'))return 'Ya existe una cuenta con ese correo — intenta iniciar sesión en vez de crear una nueva.';
  if(m.includes('invalid login credentials'))return 'Número o contraseña incorrectos.';
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
   policy too. Only real gap this closes: pulling every moderated table's
   pending rows into one unified list instead of clicking through Studio's
   Table Editor one table at a time. */
const CONTENT_TABLES=[
  {table:'noticias',label:'Noticia',titleField:'headline',ownerField:'submitted_by'},
  {table:'eventos',label:'Evento',titleField:'title',ownerField:'submitted_by'},
  {table:'productos',label:'Producto (Tienda)',titleField:'title',ownerField:'submitted_by'},
  {table:'clasificados',label:'Clasificado',titleField:'title',ownerField:'submitted_by'},
  {table:'ofertas',label:'Oferta',titleField:'title',ownerField:'submitted_by'},
  {table:'perdidos',label:'Perdido/Encontrado',titleField:'title',ownerField:'submitted_by'},
  {table:'empleos',label:'Empleo',titleField:'title',ownerField:'submitted_by'},
  {table:'reportes',label:'Reporte',titleField:'title',ownerField:'submitted_by'},
  {table:'avisos',label:'Aviso',titleField:'title',ownerField:'submitted_by'},
  {table:'alertas',label:'Alerta',titleField:'title',ownerField:null},
  {table:'businesses',label:'Verificación de negocio',titleField:'business_name',ownerField:'profile_id'}
];

/* Detail-view fields per table — label + which raw column to show, in
   display order. Used to render the FULL submission before an admin
   decides, instead of approving/rejecting blind. */
const MODERATION_DETAIL_FIELDS={
  noticias:[], // rendered by renderNoticiaModerationFields() in app.js instead — needs an editable summary box, not just a field dump
  eventos:[['title','Título'],['category','Categoría'],['event_date','Fecha'],['event_time','Hora'],['location','Ubicación'],['price_text','Precio'],['website','Sitio web'],['contact_phone','Tel. de contacto'],['description','Descripción'],['image_url','Imagen']],
  productos:[['title','Producto'],['category','Categoría'],['item_condition','Estado'],['price_text','Precio'],['price_mxn','Precio (MXN)'],['availability','Disponibilidad'],['lead_time','Anticipación'],['fulfillment','Entrega'],['description','Descripción'],['image_url','Imagen'],['seller_phone','Tel. de contacto'],['contact_methods','Formas de contacto'],['featured','Destacado']],
  clasificados:[['title','Artículo'],['category','Categoría'],['item_condition','Estado'],['price_text','Precio'],['price_mxn','Precio (MXN)'],['zone','Zona'],['fulfillment','Entrega'],['description','Descripción'],['image_url','Imagen'],['contact_phone','Tel. de contacto'],['contact_methods','Formas de contacto']],
  ofertas:[['title','Oferta'],['business_name_snapshot','Negocio'],['description','Descripción'],['terms','Condiciones'],['price_was','Precio normal'],['price_now','Precio con descuento'],['quantity_total','Cantidad disponible'],['image_url','Imagen']],
  perdidos:[['title','Título'],['report_type','Tipo'],['location','Zona'],['description','Descripción'],['image_url','Imagen'],['contact_info','Contacto'],['contact_phone','Tel. de contacto'],['contact_methods','Formas de contacto']],
  empleos:[['title','Puesto'],['company','Negocio'],['pay','Pago'],['description','Descripción'],['tags','Etiquetas'],['contact_info','Contacto'],['contact_phone','Tel. de contacto'],['contact_methods','Formas de contacto']],
  reportes:[['title','Título'],['category','Categoría'],['location_text','Ubicación'],['description','Descripción'],['image_url','Imagen']],
  avisos:[['title','Título'],['category','Categoría'],['description','Mensaje'],['contact_info','Contacto'],['contact_phone','Tel. de contacto'],['contact_methods','Formas de contacto'],['anonymous','Anónimo']],
  alertas:[['title','Título'],['alert_type','Tipo'],['zone','Zona'],['description','Descripción'],['source','Fuente']],
  businesses:[['business_name','Nombre del negocio'],['description','Descripción'],['business_image_url','Logo o foto'],['address','Dirección'],['phone','Teléfono'],['category','Categoría'],['hours','Horario'],['social_url','Red social / sitio web'],['rfc','RFC'],['payment_methods','Métodos de pago'],['delivers','Entrega a domicilio'],['delivery_info','Zonas y costo de entrega'],['pickup_address','Dirección para recoger']]
};

MC.fetchPendingQueue=async function(){
  const results=await Promise.all(CONTENT_TABLES.map(async ({table,label,titleField,ownerField})=>{
    // Owner-less tables (e.g. alertas, fed by an automated pipeline with no
    // submitter) have no FK to profiles — a "profiles(display_name)" embed
    // on them is a hard PostgREST error, so only ask for it where it exists.
    const sel=ownerField?'*, profiles(display_name)':'*';
    const {data,error}=await sb.from(table).select(sel).eq('status','pending').order('created_at',{ascending:true});
    if(error){console.error(error);return [];}
    return (data||[]).map(r=>({
      table,label,id:r.id,
      title:r[titleField]||'(sin título)',
      submittedBy:(r.profiles&&r.profiles.display_name)||(ownerField?'Vecino':'Automático'),
      createdAt:r.created_at,
      raw:r // full row, for the detail view — nothing hidden from the reviewer
    }));
  }));
  return results.flat().sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt));
};

/* For the moderation detail view of a pending event: every OTHER event on
   the same calendar day (published or still pending), so the reviewer can
   eyeball whether the submission duplicates something already in the
   system. Admin "read all" RLS covers reading non-published rows. */
MC.fetchEventosOnDate=async function(ds,excludeId){
  if(!ds)return [];
  const {data,error}=await sb.from('eventos')
    .select('id,title,event_date,event_time,location,status')
    .eq('event_date',ds).in('status',['published','pending'])
    .order('event_time',{ascending:true});
  if(error){console.error(error);return [];}
  return (data||[])
    .filter(r=>r.event_date===ds&&r.id!==excludeId)
    .map(r=>({id:r.id,title:r.title||'(sin título)',time:r.event_time||'',loc:r.location||'',status:r.status}));
};

/* For the header badge — combines all three "waiting on the founder"
   sources into one count, same three sources openPending() itself
   fetches. A little redundant when Pendiente is actually opened right
   after, but simple and this app's scale makes that redundancy cheap. */
MC.fetchPendingCount=async function(){
  const [content,phone,password]=await Promise.all([
    MC.fetchPendingQueue(),
    MC.fetchPendingPhoneVerifications(),
    MC.fetchPasswordResetRequests()
  ]);
  return content.length+phone.length+password.length;
};

MC.moderatePost=async function(table,id,newStatus,reason,extraPatch){
  const patch={status:newStatus,...(extraPatch||{})};
  if(newStatus==='rejected')patch.rejection_reason=reason||null;
  return sb.from(table).update(patch).eq('id',id);
};

/* Weather — the one live data source that isn't Supabase. Open-Meteo:
   free, no API key, CORS-open. San Francisco de Campeche coords. Two
   forecast days so the hourly strip can still fill past midnight. */
MC.fetchWeather=async function(){
  const qs='latitude=19.8454&longitude=-90.5237'
    +'&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day'
    +'&hourly=temperature_2m,weather_code,precipitation_probability,is_day'
    +'&daily=temperature_2m_max,temperature_2m_min'
    +'&timezone=auto&forecast_days=2';
  const r=await fetch('https://api.open-meteo.com/v1/forecast?'+qs);
  if(!r.ok)throw new Error('open-meteo '+r.status);
  return r.json();
};

/* The tables a resident can see and self-edit their own rows in — the
   ones the DB self-edit triggers + "owner update own" RLS cover. Derived
   from CONTENT_TABLES (for the labels/titleField) minus: alertas
   (owner-less), businesses (its own dedicated profile/edit view — showing
   it here too would just duplicate it), and noticias/ofertas (no
   resident self-edit path). Every row in "Mis publicaciones" is therefore
   tappable straight into an edit form. */
const SELF_EDIT_TABLES=['eventos','productos','clasificados','perdidos','empleos','reportes','avisos'];
const MY_POST_TABLES=CONTENT_TABLES.filter(t=>t.ownerField&&SELF_EDIT_TABLES.includes(t.table));

/* So a rejection reason isn't just stored and forgotten — a submitter can
   see their own rejected items and why. Feeds the "N no aprobadas" count
   on the "Mis publicaciones" button in the account view. */
MC.fetchMyRejections=async function(){
  const uid=await MC.ready;
  if(!uid)return [];
  const results=await Promise.all(MY_POST_TABLES.map(async ({table,label,titleField,ownerField})=>{
    // No longer filters out a rejected row just because rejection_reason
    // is null (e.g. an admin used the long-press "Quitar" action without
    // typing the optional message) — that's still a real rejection and
    // should still count toward "N no aprobadas". A null reason just
    // means the reason line downstream shows nothing.
    const {data,error}=await sb.from(table).select('*').eq(ownerField,uid).eq('status','rejected');
    if(error){console.error(error);return [];}
    return (data||[]).map(r=>({table,label,id:r.id,title:r[titleField]||'(sin título)',reason:r.rejection_reason,createdAt:r.created_at}));
  }));
  return results.flat().sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
};

/* Every one of the current user's own submissions, any status, across the
   self-editable tables — powers the "Mis publicaciones" view. Same
   per-table-fetch-scoped-by-owner shape as fetchMyRejections, just without
   the status/reason filters. status + rejectionReason ride along so the UI
   can badge each row and show the reason inline when it was rejected. */
MC.fetchMyPosts=async function(){
  const uid=await MC.ready;
  if(!uid)return [];
  const results=await Promise.all(MY_POST_TABLES.map(async ({table,label,titleField,ownerField})=>{
    const {data,error}=await sb.from(table).select('*').eq(ownerField,uid).order('created_at',{ascending:false});
    if(error){console.error(error);return [];}
    return (data||[]).map(r=>({
      table,label,id:r.id,
      title:r[titleField]||'(sin título)',
      status:r.status||'pending',
      rejectionReason:r.rejection_reason||null,
      createdAt:r.created_at,
      raw:r
    }));
  }));
  return results.flat().sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
};

MC.fetchNoticias=async function(){
  const {data,error}=await sb.from('noticias').select('*')
    .eq('status','published').order('published_at',{ascending:false}).limit(30);
  if(error){console.error(error);return [];}
  return data.map(r=>({id:r.id,source:r.source_name,title:r.headline,desc:r.summary,img:r.thumbnail_url||'',time:relTimeEs(r.published_at),url:r.source_url}));
};

MC.fetchEventos=async function(){
  // Widen the lower bound to 7 days back (from "today onward") so a
  // finished event stays fetchable — and filterable via the new
  // "Pasados" date chip — for the same ~7-day window the daily
  // cleanup-expired-eventos job keeps it in the DB before deleting it.
  // The default/upcoming date filters (Todas las fechas, Hoy, Esta
  // semana, Próximamente) still only show what hasn't finished yet —
  // see evtFinished()/evtInDateRange() in js/app.js, which exclude a
  // finished event from every bucket except Pasados.
  const sevenDaysAgo=dToDs(new Date(Date.now()-7*86400000));
  const {data,error}=await sb.from('eventos').select('*')
    .eq('status','published').gte('event_date',sevenDaysAgo).order('event_date',{ascending:true}).limit(60);
  if(error){console.error(error);return [];}
  return data.map(r=>{
    const {day,mon}=dsToDayMon(r.event_date);
    const hasRange=r.end_date&&r.end_date!==r.event_date;
    return {
      id:r.id,cat:r.category||'Otro',name:r.title,ds:r.event_date,endDs:r.end_date||r.event_date,day,mon,
      time:r.event_time||'',loc:r.location||'',
      desc:r.description||'',img:r.image_url||'',
      website:r.website||'',phone:r.contact_phone||'',
      price:(r.price_text||'').trim(),
      source:r.source||'',
      dateLong:hasRange?`Del ${dsToLongEs(r.event_date)} al ${dsToLongEs(r.end_date)}`:dsToLongEs(r.event_date)
    };
  });
};

MC.fetchTienda=async function(){
  const [prod,clas]=await Promise.all([
    sb.from('productos').select('*').eq('status','published').order('created_at',{ascending:false}).limit(60),
    sb.from('clasificados').select('*, profiles(display_name)').eq('status','published').order('created_at',{ascending:false}).limit(60)
  ]);
  if(prod.error)console.error(prod.error);
  if(clas.error)console.error(clas.error);
  const negocios=(prod.data||[]).map(r=>({
    id:r.id,cat:r.category||'Otro',name:r.title,price:r.price_text||fmtMXN(r.price_mxn),
    seller:r.business_name_snapshot,img:r.image_url||'',featured:!!r.featured,sellerType:'negocio',
    desc:r.description||'',condition:r.item_condition||'nuevo',availability:r.availability||'ahora',leadTime:r.lead_time||'',
    fulfillment:r.fulfillment||'',phone:r.seller_phone||'',contactMethods:r.contact_methods||[]
  }));
  const personales=(clas.data||[]).map(r=>({
    id:r.id,cat:r.category||'Otro',name:r.title,price:r.price_text||fmtMXN(r.price_mxn),
    seller:(r.profiles&&r.profiles.display_name)||'Vecino',img:r.image_url||'',featured:false,sellerType:'personal',
    desc:r.description||'',condition:r.item_condition||'nuevo',availability:'ahora',leadTime:'',
    fulfillment:r.fulfillment||'',zone:r.zone||'',phone:r.contact_phone||'',contactMethods:r.contact_methods||[]
  }));
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
  return data.map(r=>({id:r.id,tag:r.report_type,name:r.title,desc:r.description||'',loc:r.location||'',img:r.image_url||'',
    contact:r.contact_info||'',contactPhone:r.contact_phone||'',contactMethods:r.contact_methods||[]}));
};

MC.fetchAlertas=async function(){
  const {data,error}=await sb.from('alertas').select('*')
    .eq('status','published').order('created_at',{ascending:false}).limit(30);
  if(error){console.error(error);return [];}
  return data.map(r=>({
    id:r.id,title:r.title||'',type:r.alert_type,cls:r.resolved?'resolved':'',
    zone:r.zone||'',desc:r.description||'',
    // published_at is when the source actually posted it (Facebook/RSS
    // bridge); created_at is only when our sync picked it up. Prefer the
    // real event time, fall back for older/manual rows that have no
    // published_at.
    time:relTimeEs(r.published_at||r.created_at),
    sourceUrl:r.source_url||null
  }));
};

MC.fetchEmpleos=async function(){
  const {data,error}=await sb.from('empleos').select('*')
    .eq('status','published').order('created_at',{ascending:false}).limit(60);
  if(error){console.error(error);return [];}
  return data.map(r=>({id:r.id,title:r.title,co:r.company||'',pay:r.pay||'A convenir',tags:r.tags||[],desc:r.description||'',
    contact:r.contact_info||'',contactPhone:r.contact_phone||'',contactMethods:r.contact_methods||[]}));
};

MC.fetchReportes=async function(){
  const {data,error}=await sb.from('reportes').select('*')
    .eq('status','published').order('created_at',{ascending:false}).limit(60);
  if(error){console.error(error);return [];}
  const ids=data.map(r=>r.id);
  let countsById={};
  let resolveCountsById={};
  if(ids.length){
    const {data:confs}=await sb.from('reportes_confirmations').select('reporte_id').in('reporte_id',ids);
    (confs||[]).forEach(c=>{countsById[c.reporte_id]=(countsById[c.reporte_id]||0)+1;});
    const {data:rvotes}=await sb.from('reportes_resolution_votes').select('reporte_id').in('reporte_id',ids);
    (rvotes||[]).forEach(c=>{resolveCountsById[c.reporte_id]=(resolveCountsById[c.reporte_id]||0)+1;});
  }
  const uid=await MC.ready;
  let mine=new Set();
  let myResolveVotes=new Set();
  if(uid&&ids.length){
    const {data:myConfs}=await sb.from('reportes_confirmations').select('reporte_id').eq('confirmed_by',uid).in('reporte_id',ids);
    (myConfs||[]).forEach(r=>mine.add(r.reporte_id));
    const {data:myRVotes}=await sb.from('reportes_resolution_votes').select('reporte_id').eq('voted_by',uid).in('reporte_id',ids);
    (myRVotes||[]).forEach(r=>myResolveVotes.add(r.reporte_id));
  }
  return data.map(r=>{
    const iConfirmed=mine.has(r.id);
    const total=countsById[r.id]||0;
    const iVotedResolved=myResolveVotes.has(r.id);
    const resolveTotal=resolveCountsById[r.id]||0;
    return {id:r.id,cat:r.category||'Otro',title:r.title,loc:r.location_text||'',desc:r.description||'',
      confirms:iConfirmed?Math.max(0,total-1):total,status:r.resolved?'resuelto':'abierto',
      // net of my own vote, same "base count + 1 if me" convention as confirms
      resolveVotes:iVotedResolved?Math.max(0,resolveTotal-1):resolveTotal,
      time:relTimeEs(r.created_at),img:r.image_url||'',
      iConfirmedReal:iConfirmed,iVotedResolvedReal:iVotedResolved};
  });
};

MC.fetchAvisos=async function(){
  const {data,error}=await sb.from('avisos').select('*, profiles(display_name)')
    .eq('status','published').order('created_at',{ascending:false}).limit(60);
  if(error){console.error(error);return [];}
  return data.map(r=>({id:r.id,cat:r.category||'Otro',title:r.title,desc:r.description||'',img:r.image_url||'',
    author:r.anonymous?'Vecino anónimo':((r.profiles&&r.profiles.display_name)||'Vecino'),
    contact:r.contact_info||'',contactPhone:r.contact_phone||'',contactMethods:r.contact_methods||[],
    time:relTimeEs(r.created_at)}));
};

/* ══════════════ SUBMIT: writes real rows, always as status='pending' by table default ══════════════ */

/* Contact is opt-in on Avisos / Empleos / Perdidos: the "¿dejar un número?"
   toggle (d.want_contact) decides whether anything is attached. When it's
   on, the poster also picks which channels they're reachable by — same
   contact_phone (text) + contact_methods (text[]) shape Productos and
   Clasificados already use. The legacy contact_info column is left null on
   new posts and only read as a fallback for pre-existing ones. */
function optContactFields(d){
  if(d.want_contact!=='si')return {contact_phone:null,contact_methods:null};
  const phone=(d.contact_phone||'').trim()||null;
  if(!phone)return {contact_phone:null,contact_methods:null};
  const methods=(Array.isArray(d.contact_methods)&&d.contact_methods.length)?d.contact_methods:['whatsapp','llamada','sms'];
  return {contact_phone:phone,contact_methods:methods};
}
function defaultContactMethods(d){
  return (Array.isArray(d.contact_methods)&&d.contact_methods.length)?d.contact_methods:['whatsapp','llamada','sms'];
}

/* Maps a POST_FORMS form-data object to the editable content columns of
   each self-editable table. Shared by the INSERT path (the submit
   wrappers below) and the self-edit UPDATE path (MC.updatePost), so the
   two can never drift — same idea as businessPayloadFromForm. Never
   includes submitted_by / status / snapshot columns: the INSERT wrappers
   add those, and the per-table DB edit triggers (enforce_*_edit) protect
   id / submitted_by / created_at / status / rejection_reason (and
   business_id / featured / resolved / source) server-side regardless. */
const CONTENT_PAYLOAD={
  eventos:(d)=>({
    title:d.name,category:d.cat||null,event_date:d.date||null,event_time:d.time||null,
    location:d.loc||null,description:d.desc||null,image_url:d.photo||null,
    website:(d.website||'').trim()||null,contact_phone:(d.phone||'').trim()||null,
    price_text:(d.price||'').trim()||null
  }),
  avisos:(d)=>({category:d.cat||null,title:d.title,description:d.desc||null,image_url:d.photo||null,...optContactFields(d),anonymous:d.anon==='si'}),
  empleos:(d)=>({title:d.title,company:(d.co||'').trim()||null,pay:d.pay||null,description:d.desc||null,...optContactFields(d)}),
  perdidos:(d)=>({report_type:d.tag||'perdido',title:d.name,location:d.loc||null,description:d.desc||null,image_url:d.photo||null,...optContactFields(d)}),
  reportes:(d)=>({category:d.cat||null,title:d.title,location_text:d.loc||null,description:d.desc||null,image_url:d.photo||null}),
  productos:(d)=>{
    const onOrder=d.availability==='pedido';
    return {
      title:d.name,category:d.cat||null,price_mxn:parseMoney(d.price),price_text:d.price||null,
      description:d.desc||null,image_url:d.photo||null,
      availability:onOrder?'pedido':'ahora',lead_time:onOrder?(d.lead_time||null):null,
      fulfillment:d.fulfillment||null,item_condition:d.item_condition==='usado'?'usado':'nuevo',
      contact_methods:defaultContactMethods(d)
    };
  },
  clasificados:(d)=>({
    title:d.name,category:d.cat||null,price_mxn:parseMoney(d.price),price_text:d.price||null,
    description:d.desc||null,image_url:d.photo||null,
    fulfillment:d.fulfillment||null,zone:d.zone||null,item_condition:d.item_condition==='usado'?'usado':'nuevo',
    contact_phone:d.contact_phone||null,contact_methods:defaultContactMethods(d)
  })
};

MC.submitEvento=async function(d){
  const uid=await MC.ready;
  return sb.from('eventos').insert({...CONTENT_PAYLOAD.eventos(d),submitted_by:uid});
};

/* Selling in Tienda requires a verified business — the FAB in app.js
   routes here only when the Mercado sub-tab is active. If somehow called
   without one (shouldn't happen given app.js's own gate, but defense in
   depth), returns needsBusiness so the UI can show the verify prompt. */
MC.submitProducto=async function(d){
  const uid=await MC.ready;
  const biz=await MC.myBusiness();
  if(!biz)return {needsBusiness:true};
  return sb.from('productos').insert({
    ...CONTENT_PAYLOAD.productos(d),
    business_id:biz.id,business_name_snapshot:biz.business_name,seller_phone:biz.phone||null,
    submitted_by:uid
  });
};

/* Clasificados stays open to every account — no business needed, matches
   the "personal listing" spirit (1 free item/person, enforced by the
   existing unique index). */
MC.submitClasificado=async function(d){
  const uid=await MC.ready;
  return sb.from('clasificados').insert({...CONTENT_PAYLOAD.clasificados(d),submitted_by:uid});
};

MC.submitPerdido=async function(d){
  const uid=await MC.ready;
  return sb.from('perdidos').insert({...CONTENT_PAYLOAD.perdidos(d),submitted_by:uid});
};

MC.submitEmpleo=async function(d){
  const uid=await MC.ready;
  return sb.from('empleos').insert({...CONTENT_PAYLOAD.empleos(d),submitted_by:uid});
};

MC.submitReporte=async function(d){
  const uid=await MC.ready;
  return sb.from('reportes').insert({...CONTENT_PAYLOAD.reportes(d),submitted_by:uid});
};

MC.submitAviso=async function(d){
  const uid=await MC.ready;
  return sb.from('avisos').insert({...CONTENT_PAYLOAD.avisos(d),submitted_by:uid});
};

/* Self-edit: a resident updating one of their own already-submitted posts.
   Sends only the editable content columns (via the shared CONTENT_PAYLOAD
   map); the per-table DB trigger forces status back to 'pending' and
   clears rejection_reason, and RLS ("<table> owner update own") restricts
   it to the row's owner. `table` is a raw table name from MY_POST_TABLES. */
MC.updatePost=async function(table,id,d){
  const build=CONTENT_PAYLOAD[table];
  if(!build)return {error:{message:'unsupported_table_for_edit'}};
  // Explicitly set status back to 'pending' and clear any prior rejection
  // reason as part of the payload itself — don't rely solely on the
  // per-table edit trigger (enforce_simple_content_edit / _eventos_edit /
  // _reportes_edit) to force this. Those triggers deliberately skip ALL
  // enforcement when the acting session is a genuine admin (so that
  // MC.moderatePost's approve/reject actions aren't stomped on by this
  // same trigger) — which means if an admin account self-edits their OWN
  // post through this same form, the trigger alone would leave it
  // published instead of queuing it for review. Setting status/rejection
  // here ensures self-edit always re-queues the item for review,
  // regardless of whether the editor happens to be an admin. For a
  // non-admin owner this is redundant with what the trigger already
  // does — harmless.
  return sb.from(table).update({...build(d),status:'pending',rejection_reason:null}).eq('id',id);
};

/* "Descartar" on a rejected post — a real DELETE, not another status
   change. Backed by a real RLS policy (owner can delete their own row,
   ONLY while status='rejected' — already applied and verified live). No
   trigger involved: unlike self-edit UPDATE, a DELETE has no columns to
   protect, it either removes exactly the targeted row or the policy
   blocks it outright. */
MC.deleteMyPost=async function(table,id){
  return sb.from(table).delete().eq('id',id);
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

/* "Ya no está" — a resident says the problem is gone. Same social-proof
   shape as confirmations (own row, unique per person, public read); a DB
   trigger flips reportes.resolved once 2 distinct people vote, so this
   never touches the moderation queue. */
MC.voteReporteResolved=async function(reporteId){
  const uid=await MC.ready;
  return sb.from('reportes_resolution_votes').insert({reporte_id:reporteId,voted_by:uid});
};
MC.unvoteReporteResolved=async function(reporteId){
  const uid=await MC.ready;
  return sb.from('reportes_resolution_votes').delete().eq('reporte_id',reporteId).eq('voted_by',uid);
};
