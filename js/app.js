/* ══════════════ ICONS ══════════════ */
const ICO={
  home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  news:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/>',
  eventos:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>',
  tienda:'<path d="M4 8l1.5-4h13L20 8"/><path d="M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8z"/><path d="M9 12a3 3 0 0 0 6 0"/>',
  perdidos:'<path d="M12 21s-7-4.6-9.3-9A5 5 0 0 1 12 6a5 5 0 0 1 9.3 6c-2.3 4.4-9.3 9-9.3 9z"/>',
  alertas:'<path d="M12 3L2 20h20L12 3z"/><path d="M12 10v4M12 17h.01"/>',
  empleos:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/>',
  reportar:'<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9L2.5 17a1.6 1.6 0 0 0 1.4 2.4h16.2a1.6 1.6 0 0 0 1.4-2.4L13.7 3.9a1.6 1.6 0 0 0-2.8 0z"/>',
  chevronR:'<path d="M9 6l6 6-6 6"/>',
  sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  cloudy:'<path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-1.5A4.5 4.5 0 0 0 6.5 19h11z"/>',
  partlyCloudy:'<circle cx="8" cy="8" r="3.2"/><path d="M8 2.5v1.4M3.5 8H5M8 12.5v-1.4M4.4 4.4l1 1M18 20a4 4 0 0 0 0-8 5.3 5.3 0 0 0-9.9-1.6A4 4 0 0 0 7 20h11z"/>',
  rain:'<path d="M16.5 17a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-1.5A4.5 4.5 0 0 0 5.5 17h11z"/><path d="M8 20l-1 2M12 20l-1 2M16 20l-1 2"/>',
  close:'<path d="M18 6L6 18M6 6l12 12"/>',
  checkBadge:'<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.5 2.9.6a2 2 0 0 1 1.8 2.1z"/>',
  camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  download:'<path d="M12 3v13m0 0l-4-4m4 4l4-4"/><path d="M4 18v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  message:'<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  pin:'<path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  droplet:'<path d="M12 2s6 7.5 6 12a6 6 0 0 1-12 0c0-4.5 6-12 6-12z"/>',
  bolt:'<path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/>',
  thumb:'<path d="M7 22V11M2 13v7a2 2 0 0 0 2 2h11.6a2 2 0 0 0 2-1.6l1.2-6A2 2 0 0 0 16.8 12H14V6a2 2 0 0 0-2-2L9 11v11H7"/>',
  external:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14L21 3"/>'
};
function svgIco(name,cls){return `<svg class="ico ${cls||''}" viewBox="0 0 24 24">${ICO[name]||''}</svg>`;}

/* ══════════════ HEADER WEATHER (icon+temp button, global) + LIGHTBOX ══════════════ */
function renderHeaderWeather(){
  const w=WEATHER;
  const btn=document.getElementById('tb-weather');
  btn.innerHTML=`${svgIco(w.condCode||'sun')}<span class="tb-wx-temp">${w.temp}°</span>${w.alert?'<span class="tb-wx-dot" title="Aviso activo"></span>':''}`;
  btn.classList.toggle('has-alert',!!w.alert);
}
/* ══════════════ HAMBURGER MENU DRAWER ══════════════ */
// TODO: replace with the real MiCampeche WhatsApp business number once set up
const MICAMPECHE_WHATSAPP='529810000000';
function openMenu(){document.getElementById('menu-bg').classList.add('on');}
function closeMenu(){document.getElementById('menu-bg').classList.remove('on');}
function goToServicios(){closeMenu();nav('servicios');}
function goToInfo(){closeMenu();nav('info');}
function contactUs(){
  closeMenu();
  window.open('https://wa.me/'+MICAMPECHE_WHATSAPP+'?text='+encodeURIComponent('Hola, tengo una pregunta sobre MiCampeche'));
}

/* Install prompt — Android/Chrome exposes a real beforeinstallprompt event
   once this page is served with a proper manifest.json; we capture it the
   moment it fires and reuse it on demand. iOS never fires this event at
   all, so there we always fall back to manual instructions. */
let deferredInstallPrompt=null;
window.addEventListener('beforeinstallprompt',(e)=>{
  e.preventDefault();
  deferredInstallPrompt=e;
});
function triggerInstall(){
  closeMenu();
  if(deferredInstallPrompt){
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then(()=>{deferredInstallPrompt=null;});
    return;
  }
  const isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent);
  toast(isIOS
    ? 'Toca Compartir y luego "Agregar a inicio" ✓'
    : 'Abre el menú de tu navegador y elige "Instalar app" ✓');
}

function openWeatherLightbox(){
  const w=WEATHER;
  document.getElementById('wx-lb').innerHTML=`
    <div class="wx-lb-hero">
      <button class="wx-lb-close" onclick="closeWeatherLightbox()">${svgIco('close')}</button>
      <div class="wx-lb-city">${e(w.city)}</div>
      <div class="wx-lb-cond">${e(w.cond)}</div>
      <div class="wx-lb-temp-row">
        <span class="wx-lb-temp">${w.temp}°</span>
        ${svgIco(w.condCode||'sun','wx-lb-ico')}
      </div>
      <div class="wx-lb-range">Sensación térmica ${w.feelsLike}° · Máx ${w.hi}° · Mín ${w.lo}°</div>
      ${w.alert?`<div class="wx-lb-alert">${svgIco(w.condCode||'sun')}${e(w.alert)}</div>`:''}
    </div>
    <div class="wx-lb-stats">
      <div class="wx-lb-stat"><div class="wx-lb-stat-val">${w.humidity}%</div><div class="wx-lb-stat-lbl">Humedad</div></div>
      <div class="wx-lb-stat"><div class="wx-lb-stat-val">${w.wind}</div><div class="wx-lb-stat-lbl">Viento km/h</div></div>
      <div class="wx-lb-stat"><div class="wx-lb-stat-val">${w.feelsLike}°</div><div class="wx-lb-stat-lbl">Sensación</div></div>
    </div>
    <div class="wx-lb-foot">
      <div class="wx-lb-source">Datos de ${e(w.source)}</div>
      <a class="wx-lb-link" href="${w.sourceUrl}" target="_blank" rel="noopener">Ver pronóstico completo${svgIco('external')}</a>
    </div>
  `;
  document.getElementById('wx-lb-bg').classList.add('on');
}
function closeWeatherLightbox(){document.getElementById('wx-lb-bg').classList.remove('on');}

/* ══════════════ PHOTO UPLOAD LIGHTBOX (in-app Google Form embed) ══════════════
   Opens the business's photo-upload Google Form inside an iframe so they never
   leave the app. The form itself deposits the image straight into a Drive
   folder — MiCampeche never touches the file. "Ya subí mi foto" is a manual
   confirmation since a cross-origin iframe can't tell us the form was submitted. */
/* ══════════════ PHOTO UPLOAD LIGHTBOX (in-app Google Form embed) ══════════════
   Opens the business's photo-upload Google Form inside an iframe so they never
   leave the app. The form itself deposits the image straight into a Drive
   folder — MiCampeche never touches the file. "Ya subí mi foto" is a manual
   confirmation since a cross-origin iframe can't tell us the form was submitted.
   activePhotoFieldKey tracks which form field triggered the lightbox, so the
   correct button updates even if a future form uses a different field key. */
let activePhotoFieldKey=null;
function openPhotoUploadLightbox(fieldKey){
  activePhotoFieldKey=fieldKey;
  document.getElementById('photo-lb-frame').src=OFERTA_PHOTO_FORM_URL;
  document.getElementById('photo-lb-bg').classList.add('on');
}
function closePhotoUploadLightbox(){
  document.getElementById('photo-lb-bg').classList.remove('on');
  document.getElementById('photo-lb-frame').src='';
}
function confirmPhotoUploaded(){
  photoUploadConfirmed=true;
  const btn=document.getElementById('pf-'+activePhotoFieldKey);
  if(btn){
    btn.classList.add('done');
    const lbl=btn.querySelector('.photo-upload-lbl');
    if(lbl)lbl.textContent='Foto subida ✓';
  }
  closePhotoUploadLightbox();
  toast('¡Gracias! Tu foto quedó registrada ✓');
}

/* ══════════════ REAL DATA LAYER (Supabase) ══════════════
   These start empty and are populated by loadAllData() during init().
   Every render function below is otherwise UNCHANGED from the mock-data
   version — it just reads whatever these variables currently hold. */
const WEATHER={city:'Campeche',temp:31,cond:'Soleado',condCode:'sun',feelsLike:35,humidity:64,wind:18,hi:33,lo:26,alert:'Aviso de calor — hidrátate entre 12pm y 4pm',source:'Servicio Meteorológico Nacional (Conagua)',sourceUrl:'https://smn.conagua.gob.mx/es/pronosticos/pronostico-por-ciudad/campeche'};
// STILL MOCK, deliberately — real weather (current + hourly via Open-Meteo)
// is separate, later work per the Codex (Sections 5 & 8).

let NOTICIAS=[];
let EVENTOS=[];
let TIENDA=[];
let PERDIDOS=[];
let ALERTAS=[];
let EMPLEOS=[];
let REPORTES=[];
let AVISOS=[];

/* OFERTAS — a deal STAYS VISIBLE for up to OFERTA_LIFESPAN_DAYS or until
   its quantity sells out, whichever happens first (see Codex Section 6). */
const OFERTA_LIFESPAN_DAYS=7;
let OFERTAS=[];
function ofertaAgeDays(o){
  const posted=new Date(o.postedDs+'T00:00:00');
  return Math.floor((Date.now()-posted.getTime())/86400000);
}

/* Ofertas booking calendar — 1 slot/day, $99 MXN, 14-day visible window,
   enforced for real by a unique constraint on ofertas_bookings.booked_date
   (not just implied by this Set, which is only a display cache). */
const SLOT_FEE_MXN=99;
// TODO: replace with the real Google Form URL once created (one field: image upload,
// destination: your own Drive folder). Google Forms supports iframe embedding by default.
const OFERTA_PHOTO_FORM_URL='https://forms.google.com/PLACEHOLDER-REPLACE-WITH-REAL-FORM-LINK';
const SLOT_WINDOW_DAYS=14;
let bookedDates=new Set();

const SERVICIOS_UTILES=[
  {id:'cfe',name:'CFE — pagar recibo de luz',sub:'Portal oficial · app.cfe.mx',url:'https://app.cfe.mx/Aplicaciones/CCFE/MiEspacio/login.aspx',ico:'bolt'},
  {id:'agua',name:'JAPAY — pagar recibo de agua',sub:'Junta de Agua Potable de Campeche',url:'https://www.japay.gob.mx/',ico:'droplet'}
];

/* Pulls every content type from Supabase in parallel, seeds the local
   optimistic claim/confirm caches from what's actually true in the
   database (see claimedByMe/confirmedByMe further down), then hands off
   to the same render pipeline that used to run against mock arrays. */
async function loadAllData(){
  await MC.ready;
  const [noticias,eventos,tienda,ofertas,perdidos,alertas,empleos,reportes,avisos,booked]=await Promise.all([
    MC.fetchNoticias(),MC.fetchEventos(),MC.fetchTienda(),MC.fetchOfertas(),MC.fetchPerdidos(),
    MC.fetchAlertas(),MC.fetchEmpleos(),MC.fetchReportes(),MC.fetchAvisos(),MC.fetchBookedDates()
  ]);
  NOTICIAS=noticias;EVENTOS=eventos;TIENDA=tienda;OFERTAS=ofertas;PERDIDOS=perdidos;
  ALERTAS=alertas;EMPLEOS=empleos;REPORTES=reportes;AVISOS=avisos;bookedDates=booked;
  OFERTAS.forEach(o=>{if(o.iClaimedReal)claimedByMe[o.id]=true;});
  REPORTES.forEach(r=>{if(r.iConfirmedReal)confirmedByMe[r.id]=true;});
}


/* ══════════════ BOTTOM NAV (4 primary tabs) ══════════════ */
const TAB_DEFS=[
  {k:'inicio',lbl:'Inicio',ico:'home'},
  {k:'tienda',lbl:'Tienda',ico:'tienda'},
  {k:'anuncios',lbl:'Anuncios',ico:'eventos'},
  {k:'reportar',lbl:'Vecinos',ico:'reportar'}
];
const TABS=TAB_DEFS.map(t=>t.k);
let curTab='inicio';

function renderBottomNav(){
  document.getElementById('bottom-nav').innerHTML=TAB_DEFS.map(t=>
    `<button class="bn${t.k===curTab?' on':''}" data-tab="${t.k}" onclick="nav('${t.k}')">${svgIco(t.ico)}<span>${t.lbl}</span></button>`
  ).join('');
}

function nav(tab){
  document.querySelectorAll('.scr').forEach(s=>s.classList.remove('on'));
  const target=document.getElementById('scr-'+tab);
  if(!target)return;
  target.classList.add('on');
  if(TABS.indexOf(tab)>-1){curTab=tab;}
  renderBottomNav();
  target.scrollTop=0;
}

/* ══════════════ RENDER: INICIO (DASHBOARD / HUB) ══════════════ */
const WELCOME_TAGLINES=[
  'La ciudad amurallada te espera hoy.',
  'Entre el mar y la muralla, algo nuevo pasa cada día.',
  'Lo que pasa en Campeche, primero aquí.',
  'Tu ciudad, un solo lugar.'
];
function renderWelcomeHero(){
  const hour=new Date().getHours();
  // Buenos días: 3am–11:59am · Buenas tardes: 12pm–6:59pm · Buenas noches: 7pm–2:59am (wraps past midnight)
  const greet=(hour>=3&&hour<12)?'Buenos días':(hour>=12&&hour<19)?'Buenas tardes':'Buenas noches';
  const tagline=WELCOME_TAGLINES[new Date().getDate()%WELCOME_TAGLINES.length];
  document.getElementById('welcome-hero').innerHTML=`
    <div class="welcome-greet">${greet} 👋</div>
    <div class="welcome-city">San Francisco de Campeche</div>
    <div class="welcome-tag">${tagline}</div>
    <div class="welcome-crenel"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
  `;
}
/* ══════════════ KANBAN STAT STRIP ══════════════ */
function renderStatStrip(){
  const vacantes=EMPLEOS.length;
  const alertasActivas=ALERTAS.filter(a=>a.cls!=='resolved').length;
  const reportesAbiertos=REPORTES.filter(r=>r.status==='abierto').length;
  document.getElementById('stat-strip').innerHTML=`
    <div class="stat-tile" onclick="openAnunciosTo('empleos')">
      <div class="stat-tile-val">${vacantes}</div>
      <div class="stat-tile-lbl">Vacantes</div>
    </div>
    <div class="stat-tile" onclick="openReportarTo('alertas')">
      <div class="stat-tile-val${alertasActivas?' alert':''}">${alertasActivas}</div>
      <div class="stat-tile-lbl">Alertas activas</div>
    </div>
    <div class="stat-tile" onclick="openReportarTo('reportes')">
      <div class="stat-tile-val${reportesAbiertos?' alert':''}">${reportesAbiertos}</div>
      <div class="stat-tile-lbl">Reportes abiertos</div>
    </div>
  `;
}

/* ══════════════ EVENTOS DE HOY (Inicio only — today's events, 2 random, re-rolled every 5 min) ══════════════ */
let eventosRotationTimer=null;
function startEventosRotation(){
  clearInterval(eventosRotationTimer);
  eventosRotationTimer=setInterval(renderEventosHoySection,5*60*1000);
}
function renderEventosHoySection(){
  const slot=document.getElementById('dash-eventos-hoy');
  if(!slot)return; // Inicio isn't the active screen (or hasn't rendered yet) — nothing to update
  const today=EVENTOS.filter(x=>x.ds===TODAY_DS);
  if(!today.length){slot.innerHTML='';return;}
  const picks=shuffle(today.slice()).slice(0,2);
  slot.innerHTML=dashSection('eventos','Eventos de hoy','anuncios', picks.map(x=>`
    <div class="dash-card dc-evt" onclick="openAnunciosTo('eventos')">
      <div class="dc-evt-date"><div class="dc-evt-day">${x.day}</div><div class="dc-evt-mon">${x.mon}</div></div>
      <div><div class="dc-evt-name">${e(x.name)}</div><div class="dc-evt-meta">${x.time} · ${e(x.loc)}</div></div>
    </div>
  `).join(''));
}
function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}

function renderInicio(){
  const w=WEATHER;
  renderWelcomeHero();
  renderStatStrip();
  startEventosRotation();

  const topNews=NOTICIAS.slice(0,2);

  let h='';

  const availableOffers=OFERTAS.filter(o=>{
    const claimed=o.claimed+(claimedByMe[o.id]?1:0);
    return claimed<o.total&&ofertaAgeDays(o)<OFERTA_LIFESPAN_DAYS;
  }).sort((a,b)=>(a.tier==='premium'?-1:0)-(b.tier==='premium'?-1:0));
  if(availableOffers.length){
    const o=availableOffers[0]; // Inicio shows only the single newest live deal, no carousel
    const claimed=o.claimed+(claimedByMe[o.id]?1:0);
    const pct=Math.round((1-o.priceNow/o.priceWas)*100);
    h+=dashSection('tienda','Oferta del día','tienda', `
      <div class="dash-card dc-of" onclick="nav('tienda')">
        <div class="dc-of-img" style="background-image:url('${o.img}')"></div>
        <div class="dc-of-body">
          <div class="dc-of-name">${e(o.name)}</div>
          <div class="dc-of-price">$${o.priceNow} <span>en vez de $${o.priceWas}</span></div>
        </div>
        <span class="dc-of-pct">-${pct}%</span>
      </div>
    `);
  }

  h+=dashSection('news','Noticias de hoy','noticias', topNews.map(n=>`
    <div class="dash-card dc-news" onclick="showNoticia('${n.id}')">
      <div class="dc-news-thumb" style="background-image:url('${n.img}')"></div>
      <div class="dc-news-body"><div class="dc-news-src">${e(n.source)}</div><div class="dc-news-title">${e(n.title)}</div></div>
    </div>
  `).join(''));

  h+=`<div id="dash-eventos-hoy"></div>`;

  h+=`<div style="height:24px"></div>`;
  document.getElementById('dash-body').innerHTML=h;
  renderEventosHoySection();
}
function dashSection(ico,label,goTab,cardsHtml){
  const bgMap={news:'var(--gulf)',eventos:'var(--wall-dk)',tienda:'var(--palm)',empleos:'var(--gulf-dk)',alertas:'var(--signal)',reportar:'var(--signal)'};
  return `
    <div class="dash-section">
      <div class="dash-hdr">
        <div class="dash-hdr-lft">
          <div class="dash-hdr-ico" style="background:${bgMap[ico]||'var(--night)'};color:#fff">${svgIco(ico)}</div>
          <h3>${label}</h3>
        </div>
        <button class="dash-more" onclick="nav('${goTab}')">Ver todo${svgIco('chevronR')}</button>
      </div>
      ${cardsHtml}
    </div>
  `;
}
// Jump into a tab AND pre-select its sub-toggle in one action, used by dashboard cards
function openAnunciosTo(mode){nav('anuncios');setAnunciosMode(mode);}
function openReportarTo(mode){nav('reportar');setReportarMode(mode);}

/* ══════════════ RENDER: NOTICIAS (now a plain full page, no toggle) ══════════════ */
function renderNoticias(){
  const el=document.getElementById('news-list');
  el.innerHTML=NOTICIAS.map(n=>`
    <div class="news-card" onclick="showNoticia('${n.id}')">
      <div class="news-thumb" style="background-image:url('${n.img}')"></div>
      <div class="news-body">
        <div class="news-src">${e(n.source)}</div>
        <div class="news-head">${e(n.title)}</div>
        <div class="news-desc">${e(n.desc)}</div>
        <div class="news-meta">${n.time}</div>
      </div>
    </div>
  `).join('');
}
function showNoticia(id){
  const n=NOTICIAS.find(x=>x.id===id);if(!n)return;
  document.getElementById('noticia-detail-body').innerHTML=`
    <div class="detail-hero" style="background-image:url('${n.img}')"></div>
    <div class="detail-body">
      <div class="detail-src">${e(n.source)}</div>
      <div class="detail-head">${e(n.title)}</div>
      <div class="detail-meta">${n.time}</div>
      <div class="detail-desc">${e(n.desc)}</div>
      <a class="detail-link" href="${n.url}" target="_blank" rel="noopener">
        <div><div class="detail-link-lbl">Leer la publicación original de</div><div class="detail-link-name">${e(n.source.split('·')[0].trim())}</div></div>
        ${svgIco('chevronR','detail-arr')}
      </a>
    </div>
  `;
  nav('noticia-detail');
}

/* ══════════════ RENDER: EVENTOS (sub-view inside Anuncios) ══════════════ */
let evtFilter='all';
function renderEvtChips(){
  const cats=['all',...new Set(EVENTOS.map(x=>x.cat))];
  document.getElementById('evt-chips').innerHTML=cats.map(c=>
    `<button class="chip${c===evtFilter?' on':''}" onclick="setEvtFilter('${c}')">${c==='all'?'Todos':c}</button>`
  ).join('');
}
function setEvtFilter(c){evtFilter=c;renderEvtChips();renderEventos();}
function renderEventos(){
  const list=EVENTOS.filter(x=>evtFilter==='all'||x.cat===evtFilter);
  const el=document.getElementById('evt-list');
  if(!list.length){el.innerHTML=emptyState('eventos','Nada por aquí todavía','Sé el primero en publicar un evento en esta categoría.');return;}
  el.innerHTML=list.map(x=>`
    <div class="evt-card">
      <div class="evt-date"><div class="evt-date-day">${x.day}</div><div class="evt-date-mon">${x.mon}</div></div>
      <div class="evt-info">
        <div class="evt-cat">${e(x.cat)}</div>
        <div class="evt-name">${e(x.name)}</div>
        <div class="evt-meta">${svgIco('clock')} ${x.time} · ${e(x.loc)}</div>
      </div>
    </div>
  `).join('');
}

/* ══════════════ RENDER: ANUNCIOS (Productos ⇄ Empleos) ══════════════ */
let anunciosMode='eventos';
function setAnunciosMode(mode){
  anunciosMode=mode;
  document.querySelectorAll('#scr-anuncios .subtog-btn').forEach(b=>b.classList.toggle('on',b.dataset.v===mode));
  document.getElementById('anuncios-eventos').style.display=mode==='eventos'?'block':'none';
  document.getElementById('anuncios-perdidos').style.display=mode==='perdidos'?'block':'none';
  document.getElementById('anuncios-empleos').style.display=mode==='empleos'?'block':'none';
}

let tiendaMode='mercado';
function setTiendaMode(mode){
  tiendaMode=mode;
  document.querySelectorAll('#scr-tienda .subtog-btn').forEach(b=>b.classList.toggle('on',b.dataset.v===mode));
  document.getElementById('tienda-mercado').style.display=mode==='mercado'?'block':'none';
  document.getElementById('tienda-clasificados').style.display=mode==='clasificados'?'block':'none';
  document.getElementById('tienda-fab').onclick=function(){openPost('tienda');};
}

/* Shared card markup for both Mercado and Clasificados grids — same visual
   language, different underlying filter (sellerType negocio vs personal). */
function prodCardHtml(x){
  return `
    <div class="prod-wrap">
      ${x.featured?'<span class="prod-badge">Destacado</span>':''}
      <div class="prod-card" onclick="toast('Vista de producto — próximamente')">
        <div class="prod-img" style="background-image:url('${x.img}')"></div>
        <div class="prod-body">
          <div class="prod-name">${e(x.name)}</div>
          <div class="prod-price">${x.price}</div>
          <div class="prod-seller">${e(x.seller)}</div>
        </div>
      </div>
    </div>
  `;
}

let mktFilter='all';
function renderMktChips(){
  const negocios=TIENDA.filter(x=>x.sellerType==='negocio');
  const cats=['all',...new Set(negocios.map(x=>x.cat))];
  document.getElementById('mkt-chips').innerHTML=cats.map(c=>
    `<button class="chip${c===mktFilter?' on':''}" onclick="setMktFilter('${c}')">${c==='all'?'Todo':c}</button>`
  ).join('');
}
function setMktFilter(c){mktFilter=c;renderMktChips();renderMercado();}
function renderMercado(){
  const list=TIENDA.filter(x=>x.sellerType==='negocio'&&(mktFilter==='all'||x.cat===mktFilter));
  const el=document.getElementById('mkt-grid');
  if(!list.length){el.innerHTML=emptyState('tienda','Nada por aquí todavía','Sé el primero en publicar en esta categoría.');return;}
  el.innerHTML=list.map(prodCardHtml).join('');
}

let clasFilter='all';
function renderClasChips(){
  const personales=TIENDA.filter(x=>x.sellerType==='personal');
  const cats=['all',...new Set(personales.map(x=>x.cat))];
  document.getElementById('clas-chips').innerHTML=cats.map(c=>
    `<button class="chip${c===clasFilter?' on':''}" onclick="setClasFilter('${c}')">${c==='all'?'Todo':c}</button>`
  ).join('');
}
function setClasFilter(c){clasFilter=c;renderClasChips();renderClasificados();}
function renderClasificados(){
  const list=TIENDA.filter(x=>x.sellerType==='personal'&&(clasFilter==='all'||x.cat===clasFilter));
  const el=document.getElementById('clas-grid');
  if(!list.length){el.innerHTML=emptyState('tienda','Nada por aquí todavía','Sé el primero en publicar algo por aquí.');return;}
  el.innerHTML=list.map(prodCardHtml).join('');
}

/* ══════════════ RENDER: OFERTAS (daily deal drop) ══════════════ */
const claimedByMe={}; // mock — real version ties this to the logged-in user's account
function renderOfertas(){
  const el=document.getElementById('of-list');
  // A deal stays visible while within its 7-day display window, even once
  // sold out (so it shows the Agotado state) — it only disappears once its
  // window has actually expired.
  const visible=OFERTAS.filter(o=>ofertaAgeDays(o)<OFERTA_LIFESPAN_DAYS);
  if(!visible.length){el.innerHTML=emptyState('tienda','Sin ofertas hoy','Vuelve mañana por la mañana — las ofertas se renuevan cada día.');return;}
  el.innerHTML=visible.map(o=>{
    const claimed=o.claimed+(claimedByMe[o.id]?1:0);
    const soldOut=claimed>=o.total;
    const pct=Math.min(100,Math.round((claimed/o.total)*100));
    const discountPct=Math.round((1-o.priceNow/o.priceWas)*100);
    const iClaimed=!!claimedByMe[o.id];
    return `
    <div class="of-card${soldOut?' sold-out':''}">
      ${soldOut?'<div class="of-soldout-ribbon">Agotado</div>':''}
      <div class="of-top">
        <div class="of-img" style="background-image:url('${o.img}')"></div>
        <div class="of-body">
          <div class="of-seller">${e(o.seller)}${o.tier==='premium'?`<span class="of-badge-premium">${svgIco('checkBadge')}Verificado</span>`:''}</div>
          <div class="of-name">${e(o.name)}</div>
          <div class="of-price-row">
            <span class="of-price-now">$${o.priceNow}</span>
            <span class="of-price-was">$${o.priceWas}</span>
            <span class="of-pct">-${discountPct}%</span>
          </div>
        </div>
      </div>
      <div class="of-bottom">
        <div class="of-progress-track"><div class="of-progress-fill" style="width:${pct}%"></div></div>
        <div class="of-claim-row">
          <span class="of-claimed-txt">${claimed} de ${o.total} reclamados</span>
          ${soldOut
            ? `<button class="of-claim-btn" disabled style="opacity:.5;cursor:default">Agotado</button>`
            : iClaimed
              ? `<button class="of-claim-btn claimed" onclick="toggleClaim('${o.id}')">✓ Reclamado</button>`
              : `<button class="of-claim-btn" onclick="toggleClaim('${o.id}')">Reclamar</button>`
          }
        </div>
      </div>
    </div>
  `;}).join('');
}
async function toggleClaim(id){
  const o=OFERTAS.find(x=>x.id===id);if(!o)return;
  const alreadyClaimed=o.claimed+(claimedByMe[id]?1:0)>=o.total;
  if(!claimedByMe[id]&&alreadyClaimed){toast('Esta oferta ya se agotó');renderOfertas();return;}
  // Optimistic: flip the UI immediately, then confirm against Supabase —
  // roll back and explain if the real write fails (e.g. someone else
  // claimed the last spot in the meantime).
  const wasClaimed=!!claimedByMe[id];
  claimedByMe[id]=!wasClaimed;
  renderOfertas();
  const {error}=wasClaimed?await MC.unclaimOferta(id):await MC.claimOferta(id);
  if(error){
    claimedByMe[id]=wasClaimed;
    renderOfertas();
    toast(pgErrorToast(error,'No se pudo actualizar tu reclamo.'));
    return;
  }
  toast(claimedByMe[id]?'¡Reclamado! Muestra esto en el negocio':'Reclamo cancelado');
}

function renderEmpleos(){
  const el=document.getElementById('job-list');
  el.innerHTML=EMPLEOS.map(x=>`
    <div class="job-card">
      <div class="job-top"><div class="job-title">${e(x.title)}</div><div class="job-pay">${e(x.pay)}</div></div>
      <div class="job-co">${e(x.co)}</div>
      <div class="job-tags">${x.tags.map(t=>`<span class="job-tag">${e(t)}</span>`).join('')}</div>
    </div>
  `).join('');
}

/* ══════════════ RENDER: PERDIDOS (full page) ══════════════ */
let pfFilter='all';
function renderPfChips(){
  const opts=[['all','Todos'],['perdido','Perdidos'],['encontrado','Encontrados']];
  document.getElementById('pf-chips').innerHTML=opts.map(([v,l])=>
    `<button class="chip${v===pfFilter?' on':''}" onclick="setPfFilter('${v}')">${l}</button>`
  ).join('');
}
function setPfFilter(v){pfFilter=v;renderPfChips();renderPerdidos();}
function renderPerdidos(){
  const list=PERDIDOS.filter(x=>pfFilter==='all'||x.tag===pfFilter);
  const el=document.getElementById('pf-list');
  if(!list.length){el.innerHTML=emptyState('perdidos','Nada por aquí todavía','No hay reportes en esta categoría por ahora.');return;}
  el.innerHTML=list.map(x=>`
    <div class="pf-card">
      <div class="pf-img" style="${x.img?`background-image:url('${x.img}')`:''}">${!x.img?svgIco('pin'):''}</div>
      <div class="pf-body">
        <span class="pf-tag ${x.tag}">${x.tag==='perdido'?'Perdido':'Encontrado'}</span>
        <div class="pf-name">${e(x.name)}</div>
        <div class="pf-desc">${e(x.desc)}</div>
        <div class="pf-loc">${svgIco('pin')} ${e(x.loc)}</div>
      </div>
    </div>
  `).join('');
}

/* ══════════════ RENDER: REPORTAR (Reportes ⇄ Alertas) ══════════════ */
let reportarMode='avisos';
function setReportarMode(mode){
  reportarMode=mode;
  document.querySelectorAll('#scr-reportar .subtog-btn').forEach(b=>b.classList.toggle('on',b.dataset.v===mode));
  document.getElementById('reportar-reportes').style.display=mode==='reportes'?'block':'none';
  document.getElementById('reportar-avisos').style.display=mode==='avisos'?'block':'none';
  document.getElementById('reportar-alertas').style.display=mode==='alertas'?'block':'none';
  document.getElementById('reportar-fab').style.display=mode==='alertas'?'none':'flex';
}
let repFilter='all';
const confirmedByMe={};
function renderRepChips(){
  const cats=['all',...new Set(REPORTES.map(x=>x.cat))];
  document.getElementById('rep-chips').innerHTML=cats.map(c=>
    `<button class="chip${c===repFilter?' on':''}" onclick="setRepFilter('${c}')">${c==='all'?'Todos':c}</button>`
  ).join('');
}
function setRepFilter(c){repFilter=c;renderRepChips();renderReportes();}
function renderReportes(){
  const list=REPORTES.filter(x=>repFilter==='all'||x.cat===repFilter);
  const el=document.getElementById('rep-list');
  if(!list.length){el.innerHTML=emptyState('reportar','Nada por aquí todavía','No hay reportes en esta categoría por ahora.');return;}
  el.innerHTML=list.map(x=>{
    const isResolved=x.status==='resuelto';
    const iConfirmed=!!confirmedByMe[x.id];
    return `
    <div class="rep-card">
      <div class="rep-top">
        <div class="rep-img" style="${x.img?`background-image:url('${x.img}')`:''}">${!x.img?svgIco('pin'):''}</div>
        <div class="rep-body">
          <span class="rep-cat">${e(x.cat)}</span>
          <div class="rep-title">${e(x.title)}</div>
          <div class="rep-loc">${e(x.loc)}</div>
        </div>
      </div>
      <div class="rep-desc">${e(x.desc)}</div>
      <div class="rep-bottom">
        ${isResolved
          ? `<span class="rep-resolved-badge">${svgIco('thumb')} Resuelto</span>`
          : `<button class="rep-confirm-btn${iConfirmed?' on':''}" onclick="toggleConfirm('${x.id}')">${svgIco('thumb')} ${x.confirms+(iConfirmed?1:0)} confirmaron</button>`
        }
        <span class="rep-time">${x.time}</span>
      </div>
    </div>
  `;}).join('');
}
async function toggleConfirm(id){
  const wasConfirmed=!!confirmedByMe[id];
  confirmedByMe[id]=!wasConfirmed;
  renderReportes();
  const {error}=wasConfirmed?await MC.unconfirmReporte(id):await MC.confirmReporte(id);
  if(error){
    confirmedByMe[id]=wasConfirmed;
    renderReportes();
    toast(pgErrorToast(error,'No se pudo actualizar tu confirmación.'));
  }
}
function renderAvisos(){
  const el=document.getElementById('av-list');
  if(!AVISOS.length){el.innerHTML=emptyState('reportar','Nada por aquí todavía','Sé el primero en publicar un aviso para tus vecinos.');return;}
  el.innerHTML=AVISOS.map(a=>`
    <div class="av-card">
      <div class="av-top"><span class="av-cat">${e(a.cat)}</span><span class="av-time">${a.time}</span></div>
      <div class="av-title">${e(a.title)}</div>
      <div class="av-desc">${e(a.desc)}</div>
      <div class="av-foot">
        <span class="av-author">${e(a.author)}</span>
        <a class="av-contact-btn" href="${telHref(a.contact)}">${svgIco('phone')}Contactar</a>
      </div>
    </div>
  `).join('');
}
function renderAlertas(){
  const el=document.getElementById('alert-list');
  el.innerHTML=ALERTAS.map(x=>`
    <div class="alert-card ${x.cls}">
      <div class="alert-top"><span class="alert-type">${x.cls==='resolved'?'✓ Resuelto — ':''}${e(x.type)}</span><span class="alert-time">${x.time}</span></div>
      <div class="alert-zone">${e(x.zone)}</div>
      <div class="alert-desc">${e(x.desc)}</div>
    </div>
  `).join('');
}
function renderServiciosUtiles(){
  const el=document.getElementById('su-list');
  el.innerHTML=SERVICIOS_UTILES.map(s=>`
    <a class="su-card" href="${s.url}" target="_blank" rel="noopener">
      <div class="su-ico">${svgIco(s.ico)}</div>
      <div class="su-body"><div class="su-name">${e(s.name)}</div><div class="su-sub">${e(s.sub)}</div></div>
      ${svgIco('external','su-ext')}
    </a>
  `).join('') + `<div class="su-note">Te llevamos directo al sitio oficial — MiCampeche nunca procesa el pago ni ve tus datos bancarios.</div>`;
}

/* ══════════════ POST / SUBMIT MODAL ══════════════ */
const POST_FORMS={
  eventos:{title:'Publicar un evento',fields:[
    {k:'name',lbl:'Nombre del evento',type:'text',ph:'Ej. Tianguis nocturno'},
    {k:'cat',lbl:'Categoría',type:'select',opts:['Mercado','Cultura','Deporte','Comunidad','Música','Otro']},
    {k:'date',lbl:'Fecha',type:'date'},
    {k:'time',lbl:'Hora',type:'time'},
    {k:'loc',lbl:'Lugar',type:'text',ph:'Dirección o punto de referencia'},
    {k:'photo',lbl:'Foto o cartel del evento',type:'imgupload'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Cuéntanos más...'}
  ]},
  tienda:{title:'Publicar un producto',fields:[
    {k:'name',lbl:'¿Qué vendes?',type:'text',ph:'Ej. Pastel de tres leches'},
    {k:'cat',lbl:'Categoría',type:'select',opts:['Comida','Ropa','Hogar','Belleza','Otro']},
    {k:'price',lbl:'Precio',type:'text',ph:'$'},
    {k:'photo',lbl:'Foto del producto',type:'imgupload'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Detalles, tamaño, disponibilidad...'}
  ]},
  perdidos:{title:'Reportar perdido o encontrado',fields:[
    {k:'tag',lbl:'Tipo de reporte',type:'seg',opts:[['perdido','Perdido'],['encontrado','Encontrado']]},
    {k:'name',lbl:'¿Qué se perdió / encontró?',type:'text',ph:'Ej. Gato atigrado'},
    {k:'loc',lbl:'Zona',type:'text',ph:'Colonia o punto de referencia'},
    {k:'photo',lbl:'Foto',type:'imgupload'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Detalles que ayuden a identificarlo...'}
  ]},
  empleos:{title:'Publicar una vacante',fields:[
    {k:'title',lbl:'Puesto',type:'text',ph:'Ej. Mesero(a) con experiencia'},
    {k:'co',lbl:'Negocio',type:'text',ph:'Nombre del negocio'},
    {k:'pay',lbl:'Pago',type:'text',ph:'Ej. $350/día + propinas'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Requisitos, horario...'}
  ]},
  reportar:{title:'Reportar un problema',fields:[
    {k:'cat',lbl:'Tipo de problema',type:'select',opts:['Bache','Semáforo','Árbol caído','Alumbrado','Fuga de agua','Basura acumulada','Otro']},
    {k:'title',lbl:'Título breve',type:'text',ph:'Ej. Bache grande sobre Calle 10'},
    {k:'loc',lbl:'Ubicación',type:'text',ph:'Calle, colonia o punto de referencia'},
    {k:'photo',lbl:'Foto del problema',type:'imgupload'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Cuéntanos más sobre el problema...'}
  ]},
  avisos:{title:'Publicar un aviso',note:'Un aviso por persona al día. Todas las publicaciones se revisan antes de mostrarse a los demás.',fields:[
    {k:'cat',lbl:'Tipo de aviso',type:'select',opts:['Familia','Comunidad','Seguridad','Otro']},
    {k:'title',lbl:'Título breve',type:'text',ph:'Ej. Buscamos a un familiar'},
    {k:'desc',lbl:'Mensaje',type:'textarea',ph:'Cuenta los detalles a tus vecinos...'},
    {k:'contact',lbl:'Tu número de contacto',type:'tel',ph:'981 000 0000'}
  ]},
  oferta:{title:'Publicar una Oferta',note:'Negocios Premium tienen 2 espacios garantizados a la semana, sin costo. Para negocios sin Premium: $99 MXN por reserva, sujeto a disponibilidad.',fields:[
    {k:'name',lbl:'Nombre del negocio',type:'text',ph:'Ej. Repostería Tsuk Tun'},
    {k:'item',lbl:'¿Qué vas a ofrecer?',type:'text',ph:'Ej. Pastel de tres leches entero'},
    {k:'photo',lbl:'Foto del producto o servicio',type:'imgupload'},
    {k:'priceWas',lbl:'Precio normal',type:'text',ph:'$'},
    {k:'priceNow',lbl:'Precio con descuento',type:'text',ph:'$'},
    {k:'qty',lbl:'Cantidad disponible',type:'number',ph:'Ej. 10'},
    {k:'slot',lbl:'Elige el día',type:'calendar'}
  ]}
};

let selectedSlotDate=null; // set by pickSlotDay(), read by submitPost() for kind==='oferta'
let photoUploadConfirmed=false; // set by confirmPhotoUploaded(), read by submitPost()

async function openPost(kind){
  const form=POST_FORMS[kind];if(!form)return;
  // Refresh which days are actually booked right before showing the
  // calendar — bookedDates from initial load could already be stale by
  // the time someone opens this form.
  if(kind==='oferta')bookedDates=await MC.fetchBookedDates();
  document.getElementById('modal-title').textContent=form.title;
  let h='';
  form.fields.forEach(f=>{
    h+=`<div><label class="fl">${f.lbl}</label>`;
    if(f.type==='textarea')h+=`<textarea class="ft" id="pf-${f.k}" placeholder="${f.ph||''}"></textarea>`;
    else if(f.type==='select')h+=`<select class="fs" id="pf-${f.k}"><option value="">Selecciona...</option>${f.opts.map(o=>`<option>${o}</option>`).join('')}</select>`;
    else if(f.type==='seg')h+=`<div class="seg" id="pf-${f.k}">${f.opts.map((o,i)=>`<div class="seg-btn${i===0?' on':''}" data-v="${o[0]}" onclick="segPick(this)">${o[1]}</div>`).join('')}</div>`;
    else if(f.type==='calendar')h+=`<div id="pf-${f.k}">${slotCalendarHtml()}</div>`;
    else if(f.type==='imgupload')h+=`<button type="button" class="photo-upload-btn" id="pf-${f.k}" data-field-key="${f.k}" onclick="openPhotoUploadLightbox('${f.k}')">${svgIco('camera')}<span class="photo-upload-lbl">Subir foto</span></button>`;
    else h+=`<input class="fi" id="pf-${f.k}" type="${f.type}" placeholder="${f.ph||''}">`;
    h+=`</div>`;
  });
  h+=`<div class="submit-note">${svgIco('alertas')}${form.note||'Todas las publicaciones se revisan antes de mostrarse a los demás, para mantener MiCampeche libre de spam.'}</div>`;
  h+=`<button class="submit-btn" id="post-submit-btn" onclick="submitPost('${kind}')"${kind==='oferta'?' disabled style="opacity:.4;cursor:default"':''}>${kind==='oferta'?'Selecciona un día para continuar':'Enviar para revisión'}</button>`;
  document.getElementById('modal-body').innerHTML=h;
  document.getElementById('modal-bg').classList.add('on');
  selectedSlotDate=null;
  photoUploadConfirmed=false;
  if(kind==='avisos'){
    // Convenience only — anonymous visitors without an account yet can
    // still type their own contact info manually; this just saves a real
    // account holder from retyping their phone on every post.
    const acct=await MC.currentAccount();
    if(acct.signedIn&&acct.phone){
      const contactEl=document.getElementById('pf-contact');
      if(contactEl)contactEl.value=acct.phone;
    }
  }
}

/* ══════════════ OFERTAS SLOT CALENDAR (business-facing booking picker) ══════════════
   Renders only inside the "Publicar una Oferta" form, at the moment a business
   is choosing a day. 1 slot/day, $99 MXN, 14-day visible window.
   A full day shows "Unirme a la lista de espera" instead of a book button. */
function slotCalendarHtml(){
  const today=new Date();
  const days=[];
  for(let i=0;i<SLOT_WINDOW_DAYS;i++){
    const d=new Date(today);d.setDate(d.getDate()+i);
    days.push(d);
  }
  const dayNames=['dom','lun','mar','mié','jue','vie','sáb'];
  const monthNames=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  let h=`<div class="slot-cal-note">${svgIco('clock')}1 espacio por día · $${SLOT_FEE_MXN} MXN por reserva</div><div class="slot-cal-grid">`;
  days.forEach(d=>{
    const ds=dToDs(d);
    const isFull=bookedDates.has(ds);
    const isToday=ds===dToDs(today);
    h+=`<div class="slot-day${isFull?' full':''}" data-ds="${ds}" onclick="pickSlotDay(this,${isFull})">
      <div class="slot-day-dow">${dayNames[d.getDay()]}${isToday?' · hoy':''}</div>
      <div class="slot-day-num">${d.getDate()}</div>
      <div class="slot-day-mon">${monthNames[d.getMonth()]}</div>
      <div class="slot-day-status">${isFull?'Ocupado':'Libre'}</div>
    </div>`;
  });
  h+=`</div><div class="slot-cal-selected" id="slot-cal-selected"></div>`;
  return h;
}
function pickSlotDay(el,isFull){
  document.querySelectorAll('.slot-day').forEach(d=>d.classList.remove('sel'));
  el.classList.add('sel');
  const ds=el.dataset.ds;
  selectedSlotDate=ds;
  const d=new Date(ds+'T12:00:00');
  const monthNames=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const label=`${d.getDate()} de ${monthNames[d.getMonth()]}`;
  const btn=document.getElementById('post-submit-btn');
  const sel=document.getElementById('slot-cal-selected');
  if(isFull){
    sel.innerHTML=`<div class="slot-cal-full-msg">${svgIco('clock')}El ${label} ya está ocupado. Puedes unirte a la lista de espera y te avisamos si se libera.</div>`;
    btn.textContent='Unirme a la lista de espera';
    btn.disabled=false;btn.style.opacity='';btn.style.cursor='';
  } else {
    sel.innerHTML=`<div class="slot-cal-ok-msg">${svgIco('checkBadge')}Reservarás el ${label} por $${SLOT_FEE_MXN} MXN.</div>`;
    btn.textContent=`Pagar $${SLOT_FEE_MXN} y reservar`;
    btn.disabled=false;btn.style.opacity='';btn.style.cursor='';
  }
}
function segPick(el){
  el.parentElement.querySelectorAll('.seg-btn').forEach(b=>b.classList.remove('on'));
  el.classList.add('on');
}
function closeModal(){document.getElementById('modal-bg').classList.remove('on');}

/* ══════════════ ACCOUNT (login / signup / signed-in view) ══════════════
   Reuses the same #modal-bg/#modal-body infrastructure as the content
   submission forms above — same visual language, no new UI invented.
   Every visitor already has an anonymous session; signing up upgrades
   that SAME session in place (see MC.signUp), so nothing already
   submitted gets orphaned. */
let accountMode='signup';
async function openAccount(){
  const acct=await MC.currentAccount();
  if(acct.signedIn){renderAccountSignedIn(acct);return;}
  accountMode='signup';
  renderAccountForm();
}
function renderAccountSignedIn(acct){
  const TIER_LABEL={personal:'Personal',negocio:'Negocio',negocio_premium:'Negocio Premium'};
  document.getElementById('modal-title').textContent='Tu cuenta';
  document.getElementById('modal-body').innerHTML=`
    <div style="text-align:center;padding:8px 0 4px">
      <div style="width:56px;height:56px;border-radius:50%;background:var(--gulf);color:#fff;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:22px;font-weight:700">${e((acct.displayName||'V')[0].toUpperCase())}</div>
      <div style="font-weight:700;font-size:16px">${e(acct.displayName)}</div>
      <div style="color:var(--ink3);font-size:13px;margin-top:2px">${e(acct.email)}</div>
      <div style="color:var(--ink3);font-size:13px;margin-top:1px">${e(acct.phone||'')}</div>
      <div style="color:var(--ink3);font-size:12px;margin-top:6px">Cuenta ${e(TIER_LABEL[acct.tier]||'Personal')}</div>
    </div>
    <button class="submit-btn" style="background:var(--paper2);color:var(--ink)" onclick="doSignOut()">Cerrar sesión</button>
  `;
  document.getElementById('modal-bg').classList.add('on');
}
function renderAccountForm(){
  const isSignup=accountMode==='signup';
  document.getElementById('modal-title').textContent=isSignup?'Crear cuenta':'Iniciar sesión';
  let h=`<div class="subtog">
    <button class="subtog-btn${isSignup?' on':''}" onclick="setAccountMode('signup')">Crear cuenta</button>
    <button class="subtog-btn${isSignup?'':' on'}" onclick="setAccountMode('login')">Iniciar sesión</button>
  </div>`;
  if(isSignup)h+=`<div><label class="fl">Tu nombre</label><input class="fi" id="acct-name" type="text" placeholder="Ej. Ricardo Martín"></div>`;
  h+=`<div><label class="fl">Correo</label><input class="fi" id="acct-email" type="email" placeholder="tu@correo.com"></div>`;
  if(isSignup)h+=`<div><label class="fl">Teléfono / WhatsApp</label><input class="fi" id="acct-phone" type="tel" placeholder="981 000 0000"></div>`;
  h+=`<div><label class="fl">Contraseña</label><input class="fi" id="acct-password" type="password" placeholder="Mínimo 6 caracteres"></div>`;
  h+=`<div class="submit-note">${svgIco('alertas')}${isSignup?'Usamos tu teléfono para tus publicaciones (contacto) y avisos importantes — nunca lo compartimos ni lo vendemos.':'Usa el correo y contraseña con los que creaste tu cuenta.'}</div>`;
  h+=`<button class="submit-btn" id="acct-submit-btn" onclick="submitAuth()">${isSignup?'Crear cuenta':'Iniciar sesión'}</button>`;
  document.getElementById('modal-body').innerHTML=h;
  document.getElementById('modal-bg').classList.add('on');
}
function setAccountMode(mode){accountMode=mode;renderAccountForm();}

async function submitAuth(){
  const email=(document.getElementById('acct-email').value||'').trim();
  const password=document.getElementById('acct-password').value||'';
  if(!email||!password){toast('Completa correo y contraseña');return;}
  const btn=document.getElementById('acct-submit-btn');
  const original=btn.textContent;
  let result;
  if(accountMode==='signup'){
    const name=(document.getElementById('acct-name').value||'').trim()||'Vecino';
    const phoneRaw=(document.getElementById('acct-phone').value||'').trim();
    const phoneDigits=phoneRaw.replace(/\D/g,'');
    if(phoneDigits.length<10){toast('Ingresa un número de teléfono válido (10 dígitos)');return;}
    btn.disabled=true;btn.textContent='Un momento…';
    result=await MC.signUp(email,password,name,phoneDigits);
  } else {
    btn.disabled=true;btn.textContent='Un momento…';
    result=await MC.signIn(email,password);
  }
  btn.disabled=false;btn.textContent=original;
  if(result.error){toast(authErrorToast(result.error));return;}
  closeModal();
  toast(accountMode==='signup'?'¡Cuenta creada! Ya tienes sesión iniciada ✓':'Sesión iniciada ✓');
}
async function doSignOut(){
  await MC.signOut();
  closeModal();
  toast('Sesión cerrada ✓');
}


const SUBMIT_HANDLERS={
  eventos:MC.submitEvento, tienda:MC.submitTienda, perdidos:MC.submitPerdido,
  empleos:MC.submitEmpleo, reportar:MC.submitReporte, avisos:MC.submitAviso
};

async function submitPost(kind){
  const form=POST_FORMS[kind];
  const data={};
  form.fields.forEach(f=>{
    if(f.type==='seg'){const sel=document.querySelector(`#pf-${f.k} .seg-btn.on`);data[f.k]=sel?sel.dataset.v:'';}
    else if(f.type==='calendar'){data[f.k]=selectedSlotDate;}
    else if(f.type==='imgupload'){data[f.k]=photoUploadConfirmed?'(confirmado por el negocio)':'(sin foto)';}
    else{const el=document.getElementById('pf-'+f.k);data[f.k]=el?el.value:'';}
  });

  const btn=document.getElementById('post-submit-btn');
  const originalLabel=btn?btn.textContent:'';
  if(btn){btn.disabled=true;btn.textContent='Enviando…';}

  if(kind==='oferta'){
    if(!selectedSlotDate){toast('Selecciona un día primero');if(btn){btn.disabled=false;btn.textContent=originalLabel;}return;}
    const isFull=bookedDates.has(selectedSlotDate);
    const result=await MC.submitOferta(data,selectedSlotDate,isFull);
    if(result.error){
      if(btn){btn.disabled=false;btn.textContent=originalLabel;}
      toast(pgErrorToast(result.error,'No se pudo completar la reserva.'));
      // Someone else may have just taken this slot — refresh so the
      // calendar reflects reality instead of leaving a stale "Libre".
      if(!isFull){bookedDates=await MC.fetchBookedDates();}
      return;
    }
    closeModal();
    toast(result.waitlisted?'Estás en la lista de espera — te avisaremos ✓':'¡Reservado! En revisión antes de publicarse ✓');
    return;
  }

  const handler=SUBMIT_HANDLERS[kind];
  if(!handler){closeModal();return;} // unrecognized kind — nothing to send
  const {error}=await handler(data);
  if(btn){btn.disabled=false;btn.textContent=originalLabel;}
  if(error){
    toast(pgErrorToast(error,'No se pudo enviar tu publicación.'));
    return;
  }
  closeModal();
  toast('Enviado — en revisión antes de publicarse ✓');
}

/* ══════════════ HELPERS ══════════════ */
function e(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function telHref(phone){return 'tel:+52'+String(phone||'').replace(/\D/g,'');}
function emptyState(icoName,title,sub){return `<div class="empty">${svgIco(icoName,'empty-ico')}<p><b>${title}</b><br>${sub}</p></div>`;}
let toastTimer=null;
function toast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('on'),2400);
}

/* ══════════════ DESKTOP GATE DETECTION ══════════════ */
function isMobile(){
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth<700;
}
async function init(){
  if(isMobile()){document.getElementById('app').classList.add('on');}
  else{document.getElementById('desktop-gate').classList.add('on');}
  renderBottomNav();
  renderHeaderWeather();
  await loadAllData();
  renderInicio();
  renderNoticias();
  renderMktChips();renderMercado();renderClasChips();renderClasificados();renderOfertas();setTiendaMode('mercado');
  renderEvtChips();renderEventos();renderPfChips();renderPerdidos();renderEmpleos();setAnunciosMode('eventos');
  renderRepChips();renderReportes();renderAvisos();renderAlertas();renderServiciosUtiles();setReportarMode('avisos');
}
init();
