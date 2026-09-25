window.MC_BUILD='0ae3a46f78';
/* ══════════════ ICONS ══════════════ */
const ICO={
  account:'<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="8" r="4"/>',
  mandaditos:'<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
  home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  news:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/>',
  eventos:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>',
  tienda:'<path d="M4 8l1.5-4h13L20 8"/><path d="M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8z"/><path d="M9 12a3 3 0 0 0 6 0"/>',
  perdidos:'<path d="M12 21s-7-4.6-9.3-9A5 5 0 0 1 12 6a5 5 0 0 1 9.3 6c-2.3 4.4-9.3 9-9.3 9z"/>',
  paw:'<circle cx="6.5" cy="10" r="1.8"/><circle cx="10" cy="6.2" r="1.8"/><circle cx="14" cy="6.2" r="1.8"/><circle cx="17.5" cy="10" r="1.8"/><path d="M12 12c-2.6 0-5 2.6-5 4.6 0 1.6 1.4 2.4 2.8 2.4 1 0 1.5-.4 2.2-.4s1.2.4 2.2.4c1.4 0 2.8-.8 2.8-2.4 0-2-2.4-4.6-5-4.6z"/>',
  alertas:'<path d="M12 3L2 20h20L12 3z"/><path d="M12 10v4M12 17h.01"/>',
  bus:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M3 12h18"/><circle cx="7.5" cy="18" r="1.5"/><circle cx="16.5" cy="18" r="1.5"/><path d="M6 4v4M18 4v4"/>',
  empleos:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/>',
  reportar:'<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9L2.5 17a1.6 1.6 0 0 0 1.4 2.4h16.2a1.6 1.6 0 0 0 1.4-2.4L13.7 3.9a1.6 1.6 0 0 0-2.8 0z"/>',
  chevronR:'<path d="M9 6l6 6-6 6"/>',
  sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  fog:'<path d="M5 11h14a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.6 1.5A3.5 3.5 0 0 0 5 11z"/><path d="M4 15h16M6 19h12"/>',
  cloudy:'<path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-1.5A4.5 4.5 0 0 0 6.5 19h11z"/>',
  partlyCloudy:'<circle cx="8" cy="8" r="3.2"/><path d="M8 2.5v1.4M3.5 8H5M8 12.5v-1.4M4.4 4.4l1 1M18 20a4 4 0 0 0 0-8 5.3 5.3 0 0 0-9.9-1.6A4 4 0 0 0 7 20h11z"/>',
  rain:'<path d="M16.5 17a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-1.5A4.5 4.5 0 0 0 5.5 17h11z"/><path d="M8 20l-1 2M12 20l-1 2M16 20l-1 2"/>',
  close:'<path d="M18 6L6 18M6 6l12 12"/>',
  checkBadge:'<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>',
  trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z"/><path d="M10 11v6M14 11v6"/>',
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
  check:'<path d="M20 6L9 17l-5-5"/>',
  external:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14L21 3"/>',
  bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>'
};
function svgIco(name,cls){return `<svg class="ico ${cls||''}" viewBox="0 0 24 24">${ICO[name]||''}</svg>`;}

/* ══════════════ HEADER WEATHER (icon+temp button, global) + LIGHTBOX ══════════════
   Live from Open-Meteo (see MC.fetchWeather + loadWeather below). Starts
   blank — header shows just the icon until the first fetch lands. */
function renderHeaderWeather(){
  const w=WEATHER;
  const btn=document.getElementById('tb-weather');
  if(!btn)return;
  btn.innerHTML=`${svgIco(w.condCode||'sun')}${w.temp!=null?`<span class="tb-wx-temp">${w.temp}°</span>`:''}${w.alert?'<span class="tb-wx-dot" title="Aviso activo"></span>':''}`;
  btn.classList.toggle('has-alert',!!w.alert);
}

/* WMO weather_code → Spanish label + one of our icon keys. isDay picks
   sun vs moon for the clear-sky codes. */
function wmoInfo(code,isDay){
  const day=isDay!==0;
  if(code<=1)return {cond:'Despejado',ico:day?'sun':'moon'};
  if(code===2)return {cond:'Parcialmente nublado',ico:'partlyCloudy'};
  if(code===3)return {cond:'Nublado',ico:'cloudy'};
  if(code===45||code===48)return {cond:'Niebla',ico:'fog'};
  if(code>=51&&code<=57)return {cond:'Llovizna',ico:'rain'};
  if(code>=61&&code<=67)return {cond:'Lluvia',ico:'rain'};
  if(code>=71&&code<=77)return {cond:'Nieve',ico:'cloudy'};
  if(code>=80&&code<=82)return {cond:'Chubascos',ico:'rain'};
  if(code===85||code===86)return {cond:'Chubascos de nieve',ico:'cloudy'};
  if(code>=95)return {cond:'Tormenta eléctrica',ico:'bolt'};
  return {cond:'—',ico:'cloudy'};
}

async function loadWeather(){
  if(typeof fetch!=='function')return; // e.g. the jsdom test env
  try{
    const d=await MC.fetchWeather();
    const c=d.current||{};
    if(typeof c.temperature_2m!=='number')throw new Error('unexpected payload');
    const cur=wmoInfo(c.weather_code,c.is_day);
    Object.assign(WEATHER,{
      temp:Math.round(c.temperature_2m),
      feelsLike:Math.round(c.apparent_temperature),
      humidity:Math.round(c.relative_humidity_2m),
      wind:Math.round(c.wind_speed_10m),
      cond:cur.cond, condCode:cur.ico,
      hi:Math.round((d.daily&&d.daily.temperature_2m_max||[])[0]),
      lo:Math.round((d.daily&&d.daily.temperature_2m_min||[])[0]),
      loaded:true, failed:false
    });
    const H=d.hourly||{}, times=H.time||[], nowMs=Date.now();
    let start=times.findIndex(t=>new Date(t).getTime()>=nowMs-3600e3);
    if(start<0)start=0;
    WEATHER.hourly=[];
    for(let i=start;i<Math.min(start+12,times.length);i++){
      const info=wmoInfo((H.weather_code||[])[i],(H.is_day||[])[i]);
      WEATHER.hourly.push({
        label:i===start?'Ahora':new Date(times[i]).getHours()+' h',
        temp:Math.round((H.temperature_2m||[])[i]),
        ico:info.ico,
        pop:Math.round((H.precipitation_probability||[])[i]||0)
      });
    }
  }catch(err){
    console.error('Weather load failed:',err);
    WEATHER.failed=true;
  }
  renderHeaderWeather();
  const bg=document.getElementById('wx-lb-bg');
  if(bg&&bg.classList.contains('on'))openWeatherLightbox();
}
/* ══════════════ HAMBURGER MENU DRAWER ══════════════ */
// TODO: replace with the real MiCampeche WhatsApp business number once set up
// Real number, but used sparingly on purpose — in-app contact is preferred
// for now; this is a fallback path only (Contacto menu item), not the
// default flow for anything else.
const MICAMPECHE_WHATSAPP='529811269854';
// Email fallback only — used by the guest screen of Contacto (a signed-in
// account messages the admin in-app instead; see openContactForm). WhatsApp
// above is kept for phone verification only, not general contact.
const MICAMPECHE_EMAIL='hola@micampeche.app';

/* Real, live Stripe Payment Links. ?locale=es-419 forces Mexican Spanish
   on Stripe's hosted checkout regardless of the visitor's own browser
   language — without it, Stripe auto-detects and can show English. */
const STRIPE_LINK_OFERTA='https://buy.stripe.com/eVq28sguZ7uxcEqgr54F200?locale=es-419';
const STRIPE_LINK_PREMIUM='https://buy.stripe.com/bJe5kE7YteWZcEq0s74F201?locale=es-419';
const STRIPE_LINK_EVENTO_FEATURE='https://buy.stripe.com/9B69AUfqV4il7k64In4F202?locale=es-419';
const EVENTO_FEATURE_FEE_MXN=99;
const STRIPE_LINK_BUSINESS_SETUP='https://buy.stripe.com/28E3cw2E98yB47UdeT4F203?locale=es-419';
const BUSINESS_SETUP_FEE_MXN=99;
const STRIPE_LINK_BUSINESS_PREMIUM_UPGRADE='https://buy.stripe.com/9B6fZiceJ1698oaeiX4F204?locale=es-419';
const BUSINESS_PREMIUM_UPGRADE_FEE_MXN=499;
const STRIPE_LINK_MANDADITO_BOOST='https://buy.stripe.com/6oU14o1A59CFgUGeiX4F205?locale=es-419';
const MANDADITO_BOOST_FEE_MXN=99;
function openMenu(){menuOpenSection=null;renderMenuBody();document.getElementById('menu-bg').classList.add('on');}
function closeMenu(){document.getElementById('menu-bg').classList.remove('on');}

/* ══════════════ BURGER MENU: single-open accordion ══════════════
   One parent section open at a time (Cuenta/Comercio/Anuncios/Vecinos),
   collapsed by default every time the menu is (re)opened — see openMenu()
   above, which resets menuOpenSection before rendering, matching how the
   old flat menu had no persistent state either. */
let menuOpenSection=null;
function toggleMenuSection(key){
  menuOpenSection=(menuOpenSection===key)?null:key;
  renderMenuBody();
}
async function renderMenuBody(){
  const acct=await MC.currentAccount();
  const unread=acct.signedIn?await MC.countMyUnreadMessages():0;
  const parent=(key,ico,bg,lbl,sub,children)=>`
    <button class="menu-item" onclick="toggleMenuSection('${key}')" style="border:1.5px solid var(--line2);margin-bottom:4px">
      <span class="menu-item-ico" style="background:${bg}">${ico}</span>
      <span class="menu-item-txt"><span class="menu-item-lbl">${lbl}</span><span class="menu-item-sub">${sub}</span></span>
      <svg class="ico menu-item-arr${menuOpenSection===key?' open':''}" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
    </button>
    <div class="menu-submenu${menuOpenSection===key?' open':''}">${children}</div>
  `;
  const child=(onclick,lbl)=>`<button class="menu-item menu-item-child" onclick="${onclick}"><span class="menu-item-txt"><span class="menu-item-lbl">${lbl}</span></span></button>`;
  const leaf=(ico,bg,lbl,sub,onclick)=>`
    <button class="menu-item" onclick="${onclick}" style="border:1.5px solid var(--line2);margin-bottom:4px">
      <span class="menu-item-ico" style="background:${bg}">${ico}</span>
      <span class="menu-item-txt"><span class="menu-item-lbl">${lbl}</span><span class="menu-item-sub">${sub}</span></span>
      <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
    </button>
  `;

  // "Negocio(s)" deliberately isn't a flat openMyBusinesses() call: that
  // screen (and its "Mis negocios (N)" title) assumes it's only ever
  // reached the way the old account view reached it — never with zero or
  // exactly one non-Premium business — and renders a genuinely blank
  // screen otherwise (an empty .map().join('') with neither of its own
  // fallback messages matching). This mirrors renderAccountSignedIn's own
  // real branch exactly, just relocated, so a guest or a business-less
  // account lands on a real screen instead of a dead end. A signed-out
  // tap still works: openPost('negocio_verificar') has its own runWriteGate
  // and redirects to sign-in, the same as every other write action.
  const biz=acct.business,bizList=acct.businesses||[];
  const negocioChild=(bizList.length>1||(biz&&biz.is_primary&&biz.is_premium))
    ?child(`closeMenu();openMyBusinesses()`,'Negocio(s)')
    :biz
      ?child(`closeMenu();openBusinessProfile('${biz.id}')`,'Mi negocio')
      :child(`closeMenu();editingBusinessId=null;openPost('negocio_verificar')`,'Verificar mi negocio');

  const cuentaChildren=[
    child(`closeMenu();openAccount()`,'Perfil'),
    negocioChild,
    child(`closeMenu();openMyPosts()`,'Publicaciones'),
    acct.signedIn?child(`closeMenu();openMyMessages()`,'Mensajes'+(unread?` <span class="menu-pill">${unread}</span>`:'')):'',
    child(`closeMenu();openPreferences()`,'Preferencias'),
    // Unlike every other row here, this deliberately DOES close the menu
    // first too (the prompt's original draft left it open, layered under
    // the chooser modal — but .menu-bg's z-index:240 sits above
    // .modal-bg's z-index:200, so the chooser would actually render
    // invisible, hidden behind the still-open menu's dark backdrop).
    acct.isAdmin?child(`closeMenu();openAdminChooser()`,'Admin'):'',
    acct.signedIn?child(`closeMenu();doSignOut()`,'Cerrar sesión'):child(`closeMenu();openAccount()`,'Entrar')
  ].join('');

  document.getElementById('menu-body').innerHTML=
    parent('cuenta',svgIco('account'),'var(--night)','Cuenta',unread?(unread+(unread===1?' mensaje nuevo':' mensajes nuevos')):'Perfil, negocio y publicaciones',cuentaChildren)
    + leaf(svgIco('news'),'var(--gulf)','Noticias','Lo último de Campeche',`closeMenu();nav('noticias')`)
    + parent('comercio',svgIco('tienda'),'var(--palm)','Comercio','Mercado, clasificados y mandaditos',[
        child(`closeMenu();nav('tienda');setTiendaMode('mercado')`,'Mercado'),
        child(`closeMenu();nav('tienda');setTiendaMode('clasificados')`,'Clasificados'),
        child(`closeMenu();nav('tienda');setTiendaMode('mandaditos')`,'Mandaditos')
      ].join(''))
    + parent('anuncios',svgIco('eventos'),'var(--wall-dk)','Anuncios','Eventos, empleos y alertas',[
        child(`closeMenu();nav('anuncios');setAnunciosMode('eventos')`,'Eventos'),
        child(`closeMenu();nav('anuncios');setAnunciosMode('empleos')`,'Empleos'),
        child(`closeMenu();nav('anuncios');setAnunciosMode('alertas')`,'Alertas')
      ].join(''))
    + parent('vecinos',svgIco('reportar'),'var(--signal)','Vecinos','Avisos, reportes y mascotas',[
        child(`closeMenu();nav('reportar');setReportarMode('avisos')`,'Avisos'),
        child(`closeMenu();nav('reportar');setReportarMode('reportes')`,'Reportes'),
        child(`closeMenu();nav('reportar');setReportarMode('mascotas')`,'Mascotas')
      ].join(''))
    + leaf(svgIco('bus'),'var(--gulf)',"Transporte (Ko'ox)",'Rutas, tarifas y apps en tiempo real','goToKoox()')
    + leaf('<svg class="ico" viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/></svg>','var(--palm)','Sugerencias','Cuéntanos qué mejorar',`closeMenu();openSuggestionForm('menu')`)
    + leaf('<svg class="ico" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>','var(--signal)','Contacto','Escríbenos un mensaje','closeMenu();openContactForm()')
    + leaf('<svg class="ico" viewBox="0 0 24 24"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>','var(--ink3)','Aviso de privacidad y Términos','Cómo tratamos tus datos',`closeMenu();nav('privacidad')`);
}
/* The one leaf that isn't a nested accordion level — Admin opens a small
   two-option chooser modal instead. Both options close the menu again
   (harmless — openAdminChooser's own caller already did) and the chooser
   modal itself, before opening the real admin screen. */
function openAdminChooser(){
  document.getElementById('modal-title').textContent='Admin';
  document.getElementById('modal-body').innerHTML=`
    <button class="menu-item" onclick="closeMenu();closeModal();openAdminUsers()" style="border:1.5px solid var(--line2);margin-bottom:8px">
      <span class="menu-item-txt"><span class="menu-item-lbl">Usuarios</span><span class="menu-item-sub">Buscar cuentas y sus negocios</span></span>
    </button>
    <button class="menu-item" onclick="closeMenu();closeModal();openPending()" style="border:1.5px solid var(--line2);margin-bottom:8px">
      <span class="menu-item-txt"><span class="menu-item-lbl">Pendiente</span></span>
    </button>
    <button class="menu-item" onclick="closeMenu();closeModal();openAdminSuggestions()" style="border:1.5px solid var(--line2)">
      <span class="menu-item-txt"><span class="menu-item-lbl">Bandeja</span><span class="menu-item-sub">Contacto y sugerencias de usuarios</span></span>
    </button>
  `;
  document.getElementById('modal-bg').classList.add('on');
}
function goToServicios(){closeMenu();nav('servicios');}
function goToKoox(){closeMenu();nav('koox');}
function openMandaditoSignup(){closeMenu();editingBusinessId=null;nav('tienda');setTiendaMode('mandaditos');openPost('mandadito');}
/* Static reference only — no live data. Ko'ox's routes have changed
   repeatedly since launch (transbordo eliminations, rerouting to the
   Mercado, fare collection starting Feb 2026), so we deliberately don't
   publish our own route list here — it would go stale and mislead
   people. Ko'ox Contigo is the real official app (ARTEC itself, package
   mx.gob.campeche.kooxcontigo) so it's the primary link; Muévete Ya is
   independent but covers combis and other municipal routes Ko'ox
   Contigo doesn't. */
function renderKooxApps(){
  const isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent);
  const kooxContigoUrl=isIOS
    ?'https://apps.apple.com/mx/app/koox-contigo/id6755553527'
    :'https://play.google.com/store/apps/details?id=mx.gob.campeche.kooxcontigo';
  const el=document.getElementById('koox-apps-list');
  if(!el)return;
  el.innerHTML=`
    <a class="su-card" href="${kooxContigoUrl}" target="_blank" rel="noopener">
      <div class="su-ico">${svgIco('bus')}</div>
      <div class="su-body"><div class="su-name">Ko'ox Contigo</div><div class="su-sub">App oficial (ARTEC) · rutas, ubicación en tiempo real, saldo de tarjeta</div></div>
      ${svgIco('external','su-ext')}
    </a>
    <a class="su-card" href="https://app.muevete.site/go/" target="_blank" rel="noopener">
      <div class="su-ico">${svgIco('bus')}</div>
      <div class="su-body"><div class="su-name">Muévete Ya</div><div class="su-sub">Independiente · Ko'ox, combis y rutas municipales en tiempo real</div></div>
      ${svgIco('external','su-ext')}
    </a>
    <a class="su-card" href="https://campeche.gob.mx/koox/" target="_blank" rel="noopener">
      <div class="su-ico">${svgIco('info')}</div>
      <div class="su-body"><div class="su-name">Rutas y tarifas oficiales</div><div class="su-sub">Portal del Gobierno de Campeche</div></div>
      ${svgIco('external','su-ext')}
    </a>
  `+`<div class="su-note">MiCampeche no rastrea autobuses ni publica un mapa de rutas — te llevamos directo a las apps que sí lo hacen en tiempo real.</div>`;
}
function contactUs(){
  closeMenu();
  window.open('mailto:'+MICAMPECHE_EMAIL+'?subject='+encodeURIComponent('Pregunta sobre MiCampeche'));
}

/* ══════════════ PULL TO REFRESH ══════════════
   Standard mobile pattern: pull down while already at the top of the
   active screen, release past a threshold, and it refreshes BOTH the
   app's content (real Supabase data) and checks for a new app version —
   reusing refreshContent() and checkForUpdates() exactly as they already
   exist, not a separate implementation of either.
   Not unit-tested: real touch gestures aren't meaningfully simulatable in
   the jsdom test environment (no real finger, no real rendering engine
   to verify the visual pull). Verified by code review here; wants a real
   on-device check after deploying. */
let pullStartX=0,pullStartY=0,pullActive=false,pullDistance=0,pullRefreshing=false,pullEl=null;
const PULL_THRESHOLD=70,PULL_MAX=100;

/* The layer actually visible+scrollable right now. #search-panel is a
   separate absolutely-positioned overlay with its own overflow-y:auto
   (Global Search) — while it's open, the .scr underneath it is not what
   the finger is scrolling, and its scrollTop stays 0 the whole time. Using
   .scr.on unconditionally made "scroll back up through search results"
   read as "already at the top" from the first pixel, firing a pull no
   matter how far down the list actually was. */
function pullScrollTarget(){
  const sp=document.getElementById('search-panel');
  if(sp&&sp.classList.contains('on'))return sp;
  return document.querySelector('.scr.on');
}

function initPullToRefresh(){
  const screens=document.querySelector('.screens');
  const indicator=document.getElementById('pull-indicator');
  if(!screens||!indicator)return;

  screens.addEventListener('touchstart',e=>{
    if(pullRefreshing)return;
    const target=pullScrollTarget();
    if(!target||target.scrollTop>0)return;
    pullEl=target;
    pullStartX=e.touches[0].clientX;
    pullStartY=e.touches[0].clientY;
    pullActive=true;
    pullEl.classList.add('pull-active');
    pullEl.classList.remove('pull-snap');
  },{passive:true});

  screens.addEventListener('touchmove',e=>{
    if(!pullActive||pullRefreshing)return;
    const activeScr=pullEl;
    if(!activeScr||!activeScr.isConnected){pullActive=false;return;}
    if(activeScr.scrollTop>0){ // scrolled away from the top mid-gesture
      pullActive=false;
      activeScr.style.transform='';
      indicator.style.opacity=0;
      pullDistance=0;
      return;
    }
    const dx=e.touches[0].clientX-pullStartX;
    const dy=e.touches[0].clientY-pullStartY;
    // A real finger swipe is never perfectly axis-aligned — a horizontal
    // drag across a nested scroller (e.g. the Anuncios filter .chiprow)
    // almost always carries a small incidental dy too. Left unchecked,
    // that dy alone was enough to apply the translateY pull transform,
    // which per spec makes any position:fixed descendant (the FAB) fixed
    // relative to THIS element instead of the viewport — it visibly jumps
    // with the transform, then snaps back on touchend. Bail out of
    // pull-mode entirely (not just skip this one event) the moment
    // horizontal movement dominates, so the browser's native horizontal
    // scroll on the nested element can take over cleanly, and a swipe that
    // starts diagonal-ish can't re-engage pull-mode later just because it
    // straightens out vertically.
    if(Math.abs(dx)>Math.abs(dy)){
      pullActive=false;
      activeScr.style.transform='';
      indicator.style.opacity=0;
      pullDistance=0;
      return;
    }
    if(dy<=0){
      pullDistance=0;activeScr.style.transform='';indicator.style.opacity=0;
      return;
    }
    e.preventDefault(); // stop native overscroll/bounce fighting the custom pull
    pullDistance=Math.min(dy*0.45,PULL_MAX);
    activeScr.style.transform=`translateY(${pullDistance}px)`;
    const progress=Math.min(pullDistance/PULL_THRESHOLD,1);
    indicator.style.opacity=String(progress);
    indicator.style.transform=`translate(-50%,-50%) scale(${(0.6+0.4*progress).toFixed(2)}) rotate(${Math.round(progress*180)}deg)`;
  },{passive:false});

  screens.addEventListener('touchend',async()=>{
    if(!pullActive)return;
    pullActive=false;
    const activeScr=pullEl;
    if(!activeScr)return;
    activeScr.classList.add('pull-snap');
    if(pullDistance>=PULL_THRESHOLD){
      pullRefreshing=true;
      // Previously snapped straight to PULL_THRESHOLD here regardless of
      // how far past it the finger actually pulled — a visible backward
      // jump any time someone overpulled (the common case, since people
      // tend to pull past the point they feel confident it'll trigger).
      // The transform is already sitting at the real pulled-to distance
      // from the last touchmove (capped at PULL_MAX) — just leave it
      // there through the refresh instead of resetting it.
      indicator.classList.add('spinning');
      indicator.style.opacity='1';
      indicator.style.transform='translate(-50%,-50%) scale(1) rotate(0deg)';
      try{
        await Promise.all([refreshContent(),checkForUpdates()]);
      } finally {
        activeScr.style.transform='';
        indicator.classList.remove('spinning');
        indicator.style.opacity='0';
        pullRefreshing=false;
        pullDistance=0;
      }
    } else {
      activeScr.style.transform='';
      indicator.style.opacity='0';
      pullDistance=0;
    }
  });
}

/* Forces an update check immediately and reports what it found. Updates
   normally apply on their own (skipWaiting in sw.js + the controllerchange
   handler in index.html); this just brings the check forward. The
   standalone "Buscar actualizaciones" menu item is gone (pull-to-refresh
   covers the "did I miss something" itch) — pull-to-refresh is now the
   only caller (see the PULL TO REFRESH block above). */
async function checkForUpdates(){
  closeMenu();
  if(!('serviceWorker' in navigator)){toast('Este navegador no soporta actualizaciones automáticas');return;}
  const reg=await navigator.serviceWorker.getRegistration();
  if(!reg){toast('No se pudo verificar — intenta recargar la página primero');return;}
  toast('Buscando actualizaciones…');
  let found=false;
  const onUpdateFound=()=>{found=true;};
  reg.addEventListener('updatefound',onUpdateFound);
  try{
    await reg.update();
  }catch(err){
    console.error('Update check failed:',err);
    toast('No se pudo buscar actualizaciones — revisa tu conexión');
    reg.removeEventListener('updatefound',onUpdateFound);
    return;
  }
  setTimeout(()=>{
    reg.removeEventListener('updatefound',onUpdateFound);
    toast(found?'Actualizando a la versión más reciente…':'Ya tienes la versión más reciente ✓');
  },1500);
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
window.addEventListener('appinstalled',()=>{
  deferredInstallPrompt=null;
  const g=document.getElementById('install-gate');
  if(g)g.classList.remove('on');
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

/* ══════════════ INSTALL GATE (mobile browser) ══════════════
   Shown to mobile visitors who are still in a browser tab rather than the
   installed app. Not a hard wall — there's a plain "seguir en el
   navegador" link — but the default path is to install, so updates,
   offline use and instant delivery all just work. Skipped entirely once
   the app runs standalone. Founder bypass: localStorage mc_skip_install_gate=1. */
function isStandalone(){
  return (window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches)
      || window.navigator.standalone===true
      || document.referrer.startsWith('android-app://');
}
/* A brief, self-dismissing nudge toward installing the PWA — lighter
   than the full install-gate (shown once per browser session on cold
   load), reinforced specifically right after a real sign-in and right
   after an app update finishes applying, since those are two moments
   someone's freshly invested in the app. No-ops entirely once actually
   running installed. */
function maybeNudgeInstall(){
  if(isStandalone())return;
  setTimeout(()=>toast('💡 Instala MiCampeche desde el menú ☰ para que se abra más rápido'),2800);
}
const GATE_ICO={
  share:'<svg viewBox="0 0 24 24"><path d="M12 15V3"/><path d="M8 7l4-4 4 4"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></svg>',
  plus:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/></svg>',
  check:'<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>'
};
function installGateHighlightsHtml(){
  return `<div class="gate-highlights">
    <span class="gate-highlight">${svgIco('news')}Noticias</span>
    <span class="gate-highlight">${svgIco('eventos')}Eventos</span>
    <span class="gate-highlight">${svgIco('tienda')}Tienda</span>
    <span class="gate-highlight">${svgIco('alertas')}Alertas</span>
  </div>`;
}
function iosAddToHomeStepsHtml(){
  return `<div class="gate-steps">
    <div class="gate-step"><span class="gate-step-ico">${GATE_ICO.share}</span><span>Toca <b>Compartir</b> en la barra de Safari — el cuadro con la flecha hacia arriba.</span></div>
    <div class="gate-step"><span class="gate-step-ico">${GATE_ICO.plus}</span><span>Desliza y elige <b>Agregar a inicio de pantalla</b>.</span></div>
    <div class="gate-step"><span class="gate-step-ico">${GATE_ICO.check}</span><span>Toca <b>Agregar</b>. Abre MiCampeche desde el nuevo ícono.</span></div>
  </div>`;
}
function showInstallGate(){
  const ua=navigator.userAgent;
  const isIOS=/iPad|iPhone|iPod/.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  const iosNoInstall=isIOS&&/CriOS|FxiOS|EdgiOS|OPiOS|GSA|FBAN|FBAV|Instagram|Line|Twitter/.test(ua);
  const icon='<img class="gate-icon" src="assets/icons/MiCampeche-app-icon.png" alt="MiCampeche">';
  const escape=`<button class="gate-escape" onclick="dismissInstallGate()">Seguir en el navegador por ahora</button>`;
  let body;
  if(iosNoInstall){
    body=`<h1>Ábrelo en Safari para instalarlo</h1>
      <p>En iPhone, MiCampeche solo se puede instalar desde Safari. Abre <b>micampeche.app</b> en Safari y luego:</p>
      ${installGateHighlightsHtml()}
      ${iosAddToHomeStepsHtml()}`;
  }else if(isIOS){
    body=`<h1>Instala MiCampeche en tu iPhone</h1>
      <p>Se abre más rápido, funciona sin conexión y te llega todo al instante. Toma unos segundos:</p>
      ${installGateHighlightsHtml()}
      ${iosAddToHomeStepsHtml()}`;
  }else{
    body=`<h1>Instala MiCampeche</h1>
      <p>Se abre más rápido, funciona sin conexión y te llega todo al instante.</p>
      ${installGateHighlightsHtml()}
      <button class="gate-btn" onclick="gateInstall()">Instalar la app</button>
      <div class="gate-fallback">¿No aparece la opción? Abre el menú de tu navegador y elige <b>Instalar app</b> o <b>Agregar a pantalla principal</b>.</div>`;
  }
  document.getElementById('install-gate-card').innerHTML=icon+body+escape;
  document.getElementById('install-gate').classList.add('on');
}
function dismissInstallGate(){
  try{sessionStorage.setItem('mc_gate_dismissed','1');}catch(e){}
  document.getElementById('install-gate').classList.remove('on');
}
function gateInstall(){
  if(!deferredInstallPrompt){toast('Abre el menú de tu navegador y elige "Instalar app"');return;}
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(()=>{deferredInstallPrompt=null;});
}

function openWeatherLightbox(){
  const w=WEATHER;
  // Date + time the modal was opened — hand-rolled for the same reason the
  // rest of the app avoids toLocale*: consistent Spanish, no ICU surprises.
  const nowD=new Date();
  const when=(()=>{
    const long=dsToLongEs(dToDs(nowD)).replace(/ de \d{4}$/,''); // "sábado 31 de agosto"
    const h=nowD.getHours(),m=nowD.getMinutes();
    const t=(h%12||12)+':'+String(m).padStart(2,'0')+' '+(h<12?'a.m.':'p.m.');
    return long.charAt(0).toUpperCase()+long.slice(1)+' · '+t;
  })();
  const hours=(w.hourly&&w.hourly.length)?`
    <div class="wx-lb-hours">
      ${w.hourly.map(h=>`<div class="wx-hr">
        <div class="wx-hr-t">${e(h.label)}</div>
        ${svgIco(h.ico,'wx-hr-ico')}
        <div class="wx-hr-pop${h.pop>=10?'':' none'}">${h.pop>=10?h.pop+'%':''}</div>
        <div class="wx-hr-temp">${h.temp}°</div>
      </div>`).join('')}
    </div>`:'';
  const hero=w.loaded?`
    <div class="wx-lb-hero">
      <button class="wx-lb-close" onclick="closeWeatherLightbox()">${svgIco('close')}</button>
      <div class="wx-lb-city">${e(w.city)}</div>
      <div class="wx-lb-when">${e(when)}</div>
      <div class="wx-lb-cond">${e(w.cond)}</div>
      <div class="wx-lb-temp-row">
        <span class="wx-lb-temp">${w.temp}°</span>
        ${svgIco(w.condCode||'sun','wx-lb-ico')}
      </div>
      <div class="wx-lb-range">Sensación ${w.feelsLike}° · Máx ${w.hi}° · Mín ${w.lo}°</div>
    </div>
    ${hours}
    <div class="wx-lb-stats">
      <div class="wx-lb-stat"><div class="wx-lb-stat-val">${w.humidity}%</div><div class="wx-lb-stat-lbl">Humedad</div></div>
      <div class="wx-lb-stat"><div class="wx-lb-stat-val">${w.wind}</div><div class="wx-lb-stat-lbl">Viento km/h</div></div>
      <div class="wx-lb-stat"><div class="wx-lb-stat-val">${w.feelsLike}°</div><div class="wx-lb-stat-lbl">Sensación</div></div>
    </div>`:`
    <div class="wx-lb-hero">
      <button class="wx-lb-close" onclick="closeWeatherLightbox()">${svgIco('close')}</button>
      <div class="wx-lb-city">${e(w.city)}</div>
      <div class="wx-lb-when">${e(when)}</div>
      <div class="wx-lb-cond" style="margin-top:8px">${w.failed?'No pudimos cargar el clima':'Cargando el clima…'}</div>
      ${w.failed?`<button class="wx-lb-retry" onclick="loadWeather()">Reintentar</button>`:''}
    </div>`;
  document.getElementById('wx-lb').innerHTML=hero+`
    <div class="wx-lb-foot">
      <div class="wx-lb-source">Datos de <a href="${w.sourceUrl}" target="_blank" rel="noopener">Open-Meteo</a></div>
    </div>
  `;
  document.getElementById('wx-lb-bg').classList.add('on');
  if(!w.loaded&&!w.failed)loadWeather();
}
function closeWeatherLightbox(){document.getElementById('wx-lb-bg').classList.remove('on');}

/* ══════════════ REAL IMAGE UPLOAD ══════════════
   Replaces the old Google Form / Drive placeholder, which never actually
   worked — image_url was never populated by any real submission before
   this. Resizes client-side (max 1200px on the long side, JPEG ~80%
   quality) before uploading, to keep Storage usage small. uploadedImageUrls
   is keyed by form field key so multiple photo fields could coexist,
   though every current form only has one. */
let uploadedImageUrls={};
let uploadedImageUrlsMulti={}; // {fieldKey: [url, ...]} — Producto/Clasificado only
let uploadedImageUrlsMultiMax={}; // {fieldKey: max}, set once per field when its form opens

function resizeImageToBlob(file,maxDim=1200,quality=0.8){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onerror=()=>reject(new Error('No se pudo leer el archivo'));
    reader.onload=e=>{
      const img=new Image();
      img.onerror=()=>reject(new Error('No se pudo leer la imagen'));
      img.onload=()=>{
        let {width,height}=img;
        if(width>maxDim||height>maxDim){
          if(width>=height){height=Math.round(height*maxDim/width);width=maxDim;}
          else{width=Math.round(width*maxDim/height);height=maxDim;}
        }
        const canvas=document.createElement('canvas');
        canvas.width=width;canvas.height=height;
        canvas.getContext('2d').drawImage(img,0,0,width,height);
        canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('No se pudo procesar la imagen')),'image/jpeg',quality);
      };
      img.src=e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

async function handlePhotoSelect(input,fieldKey){
  const file=input.files&&input.files[0];
  if(!file)return;
  if(!file.type.startsWith('image/')){toast('Selecciona un archivo de imagen');input.value='';return;}
  const wrap=document.getElementById('pf-'+fieldKey+'-wrap');
  if(!wrap)return;
  wrap.innerHTML=`<div class="photo-upload-btn" style="opacity:.55;pointer-events:none">${svgIco('camera')}<span class="photo-upload-lbl">Subiendo…</span></div>`;
  try{
    const blob=await resizeImageToBlob(file);
    const url=await MC.uploadImage(blob,'jpg');
    uploadedImageUrls[fieldKey]=url;
    wrap.innerHTML=`<div style="position:relative;display:inline-block">
      <img src="${url}" style="width:72px;height:72px;object-fit:cover;border-radius:var(--rs);display:block">
      <button type="button" onclick="removePhotoSelection('${fieldKey}')" aria-label="Quitar foto"
        style="position:absolute;top:-7px;right:-7px;background:#fff;border-radius:50%;width:22px;height:22px;border:1.5px solid var(--line2);font-size:13px;line-height:1;cursor:pointer">✕</button>
    </div>`;
  }catch(err){
    console.error('Photo upload failed:',err);
    toast('No se pudo subir la foto — intenta de nuevo');
    renderPhotoUploadButton(fieldKey);
  }
}
function removePhotoSelection(fieldKey){
  delete uploadedImageUrls[fieldKey];
  renderPhotoUploadButton(fieldKey);
}
function renderPhotoUploadButton(fieldKey){
  const wrap=document.getElementById('pf-'+fieldKey+'-wrap');
  if(!wrap)return;
  wrap.innerHTML=`<button type="button" class="photo-upload-btn" onclick="document.getElementById('pf-${fieldKey}-input').click()">${svgIco('camera')}<span class="photo-upload-lbl">Subir foto</span></button>
    <input type="file" accept="image/*" id="pf-${fieldKey}-input" style="display:none" onchange="handlePhotoSelect(this,'${fieldKey}')">`;
}
function renderPhotoUploadButtonMulti(fieldKey){
  const wrap=document.getElementById('pf-'+fieldKey+'-wrap');
  if(!wrap)return;
  const urls=uploadedImageUrlsMulti[fieldKey]||[];
  const max=uploadedImageUrlsMultiMax[fieldKey]||5;
  const thumbs=urls.map((url,i)=>`
    <div style="position:relative;display:inline-block">
      <img src="${url}" style="width:72px;height:72px;object-fit:cover;border-radius:var(--rs);display:block">
      <button type="button" onclick="removePhotoSelectionMulti('${fieldKey}',${i})" aria-label="Quitar foto"
        style="position:absolute;top:-7px;right:-7px;background:#fff;border-radius:50%;width:22px;height:22px;border:1.5px solid var(--line2);font-size:13px;line-height:1;cursor:pointer">✕</button>
    </div>`).join('');
  const addBtn=urls.length<max?`
    <button type="button" class="photo-upload-btn-sm" onclick="document.getElementById('pf-${fieldKey}-input').click()">${svgIco('camera')}</button>
    <input type="file" accept="image/*" id="pf-${fieldKey}-input" style="display:none" onchange="handlePhotoSelectMulti(this,'${fieldKey}')">
  `:'';
  wrap.innerHTML=`<div style="display:flex;gap:8px;flex-wrap:wrap">${thumbs}${addBtn}</div>`;
}
async function handlePhotoSelectMulti(input,fieldKey){
  const file=input.files&&input.files[0];
  input.value=''; // lets the same file be re-picked later if removed and re-added
  if(!file)return;
  if(!file.type.startsWith('image/')){toast('Selecciona un archivo de imagen');return;}
  const max=uploadedImageUrlsMultiMax[fieldKey]||5;
  const urls=uploadedImageUrlsMulti[fieldKey]||(uploadedImageUrlsMulti[fieldKey]=[]);
  if(urls.length>=max)return; // the add-tile is already hidden at cap; this is just a guard
  const wrap=document.getElementById('pf-'+fieldKey+'-wrap');
  if(wrap)wrap.insertAdjacentHTML('beforeend',`<div style="width:72px;height:72px;border-radius:var(--rs);background:var(--paper2);display:flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.6">${svgIco('camera')}</div>`);
  try{
    const blob=await resizeImageToBlob(file);
    const url=await MC.uploadImage(blob,'jpg');
    urls.push(url);
  }catch(err){
    console.error('Photo upload failed:',err);
    toast('No se pudo subir la foto — intenta de nuevo');
  }
  renderPhotoUploadButtonMulti(fieldKey);
}
function removePhotoSelectionMulti(fieldKey,index){
  const urls=uploadedImageUrlsMulti[fieldKey]||[];
  urls.splice(index,1);
  renderPhotoUploadButtonMulti(fieldKey);
}

/* ══════════════ REAL DATA LAYER (Supabase) ══════════════
   These start empty and are populated by loadAllData() during init().
   Every render function below is otherwise UNCHANGED from the mock-data
   version — it just reads whatever these variables currently hold. */
/* Live — filled by loadWeather() from Open-Meteo. Renders read whatever's
   here; before the first fetch, temp is null and the header shows only the
   icon. sourceUrl credits the data provider. The modal is a quick glance at
   today only — no "full forecast" link (everyone has a weather app). */
const WEATHER={city:'Campeche',temp:null,cond:'',condCode:'sun',feelsLike:null,humidity:null,wind:null,hi:null,lo:null,alert:null,
  hourly:[],loaded:false,failed:false,
  sourceUrl:'https://open-meteo.com/'};

let NOTICIAS=[];
let EVENTOS=[];
let FEATURED_BOOKINGS=[]; // raw {event_id,start_date,end_date} rows with an active or upcoming window — see activeFeaturedEventIds()
let TIENDA=[];
let MASCOTAS=[];
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
const SLOT_WINDOW_DAYS=14;
let bookedDates=new Set();
let featuredBookingCounts={}; // ds -> how many active feature windows cover that day, for the feature calendar's full/available cells
let selectedFeatureStart=null; // set by pickFeatureDay(), read by submitPost() for kind==='eventos'

const SERVICIOS_UTILES=[
  {id:'cfe',name:'CFE — pagar recibo de luz',sub:'Portal oficial · app.cfe.mx',url:'https://app.cfe.mx/Aplicaciones/CCFE/MiEspacio/login.aspx',ico:'bolt'},
  {id:'agua',name:'JAPAY — pagar recibo de agua',sub:'Junta de Agua Potable de Campeche',url:'https://www.japay.gob.mx/',ico:'droplet'}
];

/* Pulls every content type from Supabase in parallel, seeds the local
   optimistic confirm caches from what's actually true in the database
   (see confirmedByMe/resolvedByMe further down), then hands off to the
   same render pipeline that used to run against mock arrays. */
/* Random order every load — no seller gets an advantage from being
   newest, oldest, or alphabetically first. Destacado/discount-flagged
   products are the one deliberate exception: shuffled among themselves,
   but always placed ahead of everyone else — on top of, not instead of,
   their own separate Destacados carousel. Clasificados items never have
   featured/discountActive set, so they always land in the second group
   and get pure random order with no exception at all. Runs once per
   loadAllData() call (initial load + pull-to-refresh), not on every
   filter/search interaction — re-shuffling on every keystroke would feel
   broken, not random.  */
function shuffleArray(arr){
  const a=arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function shuffleTiendaForDisplay(list){
  const featured=list.filter(x=>x.featured||x.discountActive);
  const rest=list.filter(x=>!(x.featured||x.discountActive));
  return [...shuffleArray(featured),...shuffleArray(rest)];
}
async function loadAllData(){
  await MC.ready;
  const [noticias,eventos,tienda,ofertas,mascotas,alertas,empleos,reportes,avisos,booked,featuredBookings,mandaditos]=await Promise.all([
    MC.fetchNoticias(),MC.fetchEventos(),MC.fetchTienda(),MC.fetchOfertas(),MC.fetchMascotas(),
    MC.fetchAlertas(),MC.fetchEmpleos(),MC.fetchReportes(),MC.fetchAvisos(),MC.fetchBookedDates(),MC.fetchFeaturedBookings(),MC.fetchMandaditos()
  ]);
  NOTICIAS=noticias;EVENTOS=eventos;TIENDA=shuffleTiendaForDisplay(tienda);OFERTAS=ofertas;MASCOTAS=mascotas;MANDADITOS=mandaditos;
  ALERTAS=alertas;EMPLEOS=empleos;REPORTES=reportes;AVISOS=avisos;bookedDates=booked;FEATURED_BOOKINGS=featuredBookings;
  alertasExpanded=false; // a fresh data load (incl. pull-to-refresh) collapses Alertas back to the top 10
  REPORTES.forEach(r=>{
    if(r.iConfirmedReal)confirmedByMe[r.id]=true;
    if(r.iVotedResolvedReal)resolvedByMe[r.id]=true;
  });
}


/* ══════════════ BOTTOM NAV (4 primary tabs) ══════════════ */
const TAB_DEFS=[
  {k:'tienda',lbl:'Comercio',ico:'tienda'},
  {k:'anuncios',lbl:'Anuncios',ico:'eventos'},
  {k:'reportar',lbl:'Vecinos',ico:'reportar'},
  {k:'perfil',lbl:'Perfil',ico:'account'}
];
const TABS=TAB_DEFS.map(t=>t.k);
let curTab=null; // no bottom-nav tab represents Inicio any more — home is reached via the header logo, so nothing should show as "active" while there

// renderBottomNav() rebuilds #bottom-nav's innerHTML from scratch on every
// tab switch (nav() calls it unconditionally) — unlike the old header
// button, which lived outside that markup and never got wiped. The Perfil
// tab's label and admin-pending badge are both real, already-fetched state
// (refreshHeaderAccount/refreshPendingBadge), not something to re-derive
// from TAB_DEFS's static default each redraw — so their last-known values
// are cached here and reapplied synchronously after every rebuild, instead
// of re-querying Supabase (MC.currentAccount() is a real multi-query round
// trip) on every single tap between tabs.
let lastKnownSignedIn=null; // null = not resolved yet (first paint, before refreshHeaderAccount() has ever run)
let lastPendingBadgeText='';

function renderBottomNav(){
  document.getElementById('bottom-nav').innerHTML=TAB_DEFS.map(t=>{
    if(t.k==='perfil'){
      return `<button class="bn" id="bn-perfil" onclick="openAccount()" aria-label="Mi cuenta">${svgIco(t.ico)}<span id="bn-perfil-lbl">${t.lbl}</span><span class="bn-badge" id="bn-perfil-badge"></span></button>`;
    }
    return `<button class="bn${t.k===curTab?' on':''}" data-tab="${t.k}" onclick="nav('${t.k}')">${svgIco(t.ico)}<span>${t.lbl}</span></button>`;
  }).join('');
  const perfilBtn=document.getElementById('bn-perfil');
  if(perfilBtn){
    if(lastKnownSignedIn!==null){
      perfilBtn.classList.toggle('signin',!lastKnownSignedIn);
      const lbl=document.getElementById('bn-perfil-lbl');
      if(lbl)lbl.textContent=lastKnownSignedIn?'Perfil':'Entrar';
    }
    const badge=document.getElementById('bn-perfil-badge');
    if(badge){badge.textContent=lastPendingBadgeText;badge.classList.toggle('on',!!lastPendingBadgeText);}
  }
}

let curScreen='inicio';        // the actual visible .scr (tabs AND detail screens)
let mcScreenStack=[];          // breadcrumb trail for the hardware back button
/* Umami tracks real URL changes automatically, but this whole app lives on
   one URL — every screen change is JS state, not navigation. This computes
   a virtual path/title for whatever's on screen right now, called from
   nav() and the three sub-tab switchers (setTiendaMode/setAnunciosMode/
   setReportarMode) so "top pages" in Umami actually means something. */
function analyticsPageInfo(){
  if(curScreen==='tienda')return {path:'/comercio/'+tiendaMode,title:'Comercio · '+tiendaMode};
  if(curScreen==='anuncios')return {path:'/anuncios/'+anunciosMode,title:'Anuncios · '+anunciosMode};
  if(curScreen==='reportar')return {path:'/vecinos/'+reportarMode,title:'Vecinos · '+reportarMode};
  return {path:'/'+curScreen,title:curScreen};
}
function trackPage(){
  try{
    if(typeof umami==='undefined')return;
    const info=analyticsPageInfo();
    umami.track(props=>({...props,url:info.path,title:info.title}));
  }catch(e){}
}
function nav(tab,fromBack){
  if(searchOpen)closeSearch();
  document.querySelectorAll('.scr').forEach(s=>s.classList.remove('on'));
  const target=document.getElementById('scr-'+tab);
  if(!target)return;
  target.classList.add('on');
  // 'inicio' is no longer one of the 4 bottom-nav tabs, so it needs its own
  // branch here too — otherwise curTab would just keep whatever tab was
  // last active, leaving it visibly (and wrongly) highlighted after tapping
  // the header logo back to Inicio.
  if(TABS.indexOf(tab)>-1){curTab=tab;}
  else if(tab==='inicio'){curTab=null;}
  renderBottomNav();
  target.scrollTop=0;
  if(!fromBack&&tab!==curScreen){
    if(tab==='anuncios')maybeShowTipGate(anunciosMode);
    else if(tab==='reportar')maybeShowTipGate(reportarMode);
    else if(tab==='tienda')maybeShowTipGate(tiendaMode);
    if(tab==='inicio')mcScreenStack=[];
    // A peer bottom-nav tab is a lateral move, not "deeper" — back from any
    // of them returns to Inicio, and bouncing between tabs never piles up.
    else if(TABS.indexOf(tab)>-1)mcScreenStack=['inicio'];
    else{
      // A sub-screen (detail view, "Cómo funciona", "Pagar servicios").
      // Landing on one already in the trail = stepping back up it; anything
      // else is going deeper, so remember where we came from.
      const i=mcScreenStack.lastIndexOf(tab);
      if(i>-1)mcScreenStack.length=i;
      else mcScreenStack.push(curScreen);
    }
  }
  curScreen=tab;
  if(tab!=='tienda')stopDestacadosRotation();
  // Additional fix beyond the stop-on-leave rule above: renderInicio()
  // (which itself calls startDestacadosRotation()) only runs on an actual
  // data load, not on every plain nav('inicio') — so without this, the
  // carousel would render correctly once, then sit frozen (not actively
  // rotating) after the very first trip away from Inicio and back, until
  // the next pull-to-refresh. Cheap and idempotent (stops/re-renders
  // itself first) even if called redundantly.
  if(tab==='inicio')startDestacadosRotation();
  mcSyncBackTrap();
  trackPage();
}

/* ══════════════ HARDWARE BACK BUTTON (Android / installed PWA) ══════════════
   Without this, the system back button / gesture walks straight out of the
   PWA on the first press — even with a menu or modal open, or two screens
   deep. We keep exactly one synthetic history entry alive whenever *any*
   dismissible layer is showing (open modal, open menu, open weather card,
   or a screen that isn't Inicio). Each back press then peels one layer via
   mcCloseTopLayer(); only a press with nothing left to peel exits the app.
   Dormant on desktop (isMobile() false) — nothing there "closes the app". */
let mcHistoryOn=false,mcBackWired=false,mcSelfPop=false,mcSyncQueued=false;

function mcTopLayer(){
  const on=id=>{const el=document.getElementById(id);return el&&el.classList.contains('on');};
  if(on('modal-bg'))return 'modal';
  if(on('menu-bg'))return 'menu';
  if(on('wx-lb-bg'))return 'weather';
  if(on('search-panel'))return 'search';
  if(curScreen!=='inicio')return 'screen';
  return null;
}

// Peel exactly one layer. Returns false when there was nothing to peel
// (the caller / OS may then let the app exit). Pure UI — no history.
function mcCloseTopLayer(){
  switch(mcTopLayer()){
    case 'modal':mcModalBack();return true;   // steps back through nested modal views, then closes
    case 'menu':document.getElementById('menu-bg').classList.remove('on');return true;
    case 'weather':document.getElementById('wx-lb-bg').classList.remove('on');return true;
    case 'search':closeSearch();return true;
    case 'screen':nav(mcScreenStack.pop()||'inicio',true);return true;
    default:return false;
  }
}

// In-app back affordances (the "‹" back-bars) route here too, so the
// synthetic history entry is unwound in lock-step with the OS button.
function mcGoBack(){
  const peeled=mcCloseTopLayer();
  if(peeled&&mcHistoryOn){mcSelfPop=true;history.back();}
  return peeled;
}

// Re-arm (or release) the single trap entry to match the current UI depth.
// Debounced to a microtask so a burst of sync UI changes (closeMenu();
// openAccount()) collapses into one decision.
function mcSyncBackTrap(){
  if(!mcHistoryOn||mcSyncQueued)return;
  mcSyncQueued=true;
  Promise.resolve().then(()=>{
    mcSyncQueued=false;
    const deep=mcTopLayer()!==null;
    const trapped=!!(history.state&&history.state.mcTrap);
    if(deep&&!trapped)history.pushState({mcTrap:true},'');
    else if(!deep&&trapped){mcSelfPop=true;history.back();}
  });
}

function mcBackInit(){
  if(mcBackWired||!isMobile())return;
  mcBackWired=mcHistoryOn=true;
  if(!history.state||!history.state.mcTrap)history.replaceState({mcRoot:true},'');
  const obs=new MutationObserver(()=>mcSyncBackTrap());
  ['modal-bg','menu-bg','wx-lb-bg','search-panel'].forEach(id=>{
    const el=document.getElementById(id);
    if(el)obs.observe(el,{attributes:true,attributeFilter:['class']});
  });
  window.addEventListener('popstate',()=>{
    if(!mcHistoryOn)return;
    if(mcSelfPop){mcSelfPop=false;return;}   // our own history.back() — UI already updated
    if(mcCloseTopLayer())mcSyncBackTrap();    // real back press: peel a layer, then re-arm
    // nothing to peel → don't re-push; the next press exits, as intended
  });
}

/* ══════════════ RENDER: INICIO (DASHBOARD / HUB) ══════════════ */
const WELCOME_TAGLINES=[
  'La ciudad amurallada te espera hoy.',
  'Entre el mar y la muralla, algo nuevo pasa cada día.',
  'Lo que pasa en Campeche, primero aquí.',
  'Tu ciudad, un solo lugar.'
];
/* The hero photo cycles with the same greeting/time-of-day bucket
   computed below — one real photo per part of the day, not an autoplay
   carousel. See .wh-am/.wh-pm/.wh-noche .wh-photo in css/styles.css. */
function renderWelcomeHero(){
  const hour=new Date().getHours();
  // Buenos días: 3am–11:59am · Buenas tardes: 12pm–6:59pm · Buenas noches: 7pm–2:59am (wraps past midnight)
  const isAm=hour>=3&&hour<12,isPm=hour>=12&&hour<19;
  const greet=isAm?'Buenos días':(isPm?'Buenas tardes':'Buenas noches');
  const heroCls=isAm?'wh-am':(isPm?'wh-pm':'wh-noche');
  const tagline=WELCOME_TAGLINES[new Date().getDate()%WELCOME_TAGLINES.length];
  const hero=document.getElementById('welcome-hero');
  hero.className='welcome-hero '+heroCls;
  hero.innerHTML=`
    <div class="wh-photo" role="img" aria-label="San Francisco de Campeche"></div>
    <div class="wh-sheet">
      <div class="wh-greet">${greet} 👋</div>
      <div class="wh-city">San Francisco de Campeche</div>
      <div class="wh-tag">${tagline}</div>
    </div>
  `;
}

/* ══════════════ FEATURED EVENTOS ROTATION ══════════════
   Up to 4 bookings can have an active window right now (today falls
   within start_date..end_date) — enforced by the capacity trigger on
   eventos_featured_bookings. Of whichever are active, only `count` are
   actually shown, rotating hourly: pass 2 for the Eventos section, 1 for
   Inicio. Both use the same starting index (current hour mod however
   many are active), so Inicio's one always matches the first of the
   Eventos section's two — purely computed client-side, nothing stored
   or scheduled server-side. */
function activeFeaturedEventIds(count){
  const active=FEATURED_BOOKINGS.filter(b=>b.start_date<=TODAY_DS&&b.end_date>=TODAY_DS)
    .sort((a,b)=>a.start_date<b.start_date?-1:a.start_date>b.start_date?1:String(a.event_id).localeCompare(String(b.event_id)));
  if(!active.length)return [];
  const n=active.length;
  const startIdx=new Date().getHours()%n;
  const ids=[];
  for(let i=0;i<Math.min(count,n);i++){
    const id=active[(startIdx+i)%n].event_id;
    if(!ids.includes(String(id)))ids.push(String(id));
  }
  return ids;
}
/* ══════════════ EVENTO ON INICIO — one slot, three-tier fallback ══════
   1. Active Destacado bookings (paid), resolved to their real events and
      sorted so ones whose event.ds is actually today come first — a
      booking can be actively running today for an event that itself
      happens later, and today-dated ones should win the rotation.
   2. No active Destacado at all → today's events, any.
   3. No Destacado and nothing today → all upcoming events.
   Should only ever render empty if literally no event exists in any of
   the three pools — re-rendered every 5 min to pick up the hourly
   rotation reasonably promptly, same cadence as before. */
let eventosRotationTimer=null;
function startEventosRotation(){
  clearInterval(eventosRotationTimer);
  eventosRotationTimer=setInterval(renderHomeEventoSlot,5*60*1000);
}
function homeEventoPool(){
  const activeBookings=FEATURED_BOOKINGS.filter(b=>b.start_date<=TODAY_DS&&b.end_date>=TODAY_DS);
  const seen=new Set();
  const destacado=activeBookings
    .map(b=>EVENTOS.find(ev=>String(ev.id)===String(b.event_id)))
    .filter(ev=>{if(!ev||seen.has(ev.id))return false;seen.add(ev.id);return true;})
    .sort((a,b)=>(a.ds===TODAY_DS?-1:0)-(b.ds===TODAY_DS?-1:0));
  if(destacado.length)return destacado;
  const today=EVENTOS.filter(x=>x.ds===TODAY_DS);
  if(today.length)return today;
  return EVENTOS.filter(x=>x.ds>TODAY_DS);
}
/* Leading header for a half-width Row 1 column on Inicio: title on top,
   "Ver todo ›" beneath (two-line stack — a one-line layout doesn't fit ~155px). */
function dashColHdr(label,onclick){
  return `<div class="dash-col-hdr"><h3>${label}</h3><button class="dash-more" onclick="${onclick}">Ver todo${svgIco('chevronR')}</button></div>`;
}
function renderHomeEventoSlot(){
  const slot=document.getElementById('dash-evento-slot');
  if(!slot)return;
  const pool=homeEventoPool();
  if(!pool.length){slot.innerHTML='';syncDashRow1Width();return;} // the one true empty case: no events anywhere in the system
  const x=pool[new Date().getHours()%pool.length];
  slot.innerHTML=`
    ${dashColHdr('Eventos',"nav('anuncios');setAnunciosMode('eventos')")}
    <div class="dash-card dc-ev-hero" onclick="openEvento('${x.id}')">
      ${x.img?`<div class="dc-ev-hero-img" style="background-image:url('${x.img}')"></div>`:''}
      <span class="dc-ev-hero-date"><b>${x.day}</b><i>${e(x.mon)}</i></span>
      <div class="dc-ev-hero-overlay">
        <div class="dc-ev-hero-name">${e(x.name)}</div>
        <div class="dc-ev-hero-meta">${x.time?e(x.time)+' · ':''}${e(x.loc)}</div>
      </div>
    </div>
  `;
  syncDashRow1Width();
}

/* Inicio's Special Slot — a single admin-managed card, invisible unless a
   row in home_special_slot is flagged active (which it isn't right now —
   the table is empty). Full-width, sits above everything else. */
async function renderSpecialSlot(){
  const el=document.getElementById('dash-special-slot');
  if(!el)return;
  const slot=await MC.fetchHomeSpecialSlot();
  if(!slot){el.innerHTML='';el.style.display='none';return;}
  el.style.display='block';
  el.innerHTML=`
    <div class="dash-card dc-special"${slot.link_url?` onclick="location.href='${e(slot.link_url)}'"`:''}>
      ${slot.image_url?`<div class="dc-special-img" style="background-image:url('${e(slot.image_url)}')"></div>`:''}
      ${(slot.title||slot.subtitle)?`<div class="dc-special-body">
        ${slot.title?`<div class="dc-special-title">${e(slot.title)}</div>`:''}
        ${slot.subtitle?`<div class="dc-special-sub">${e(slot.subtitle)}</div>`:''}
      </div>`:''}
    </div>
  `;
}

/* Below-hero row of 4 quick-nav shortcuts — scrolls away with the rest of
   Inicio (normal document flow, no fixed/sticky), not a persistent nav
   bar. avisos reuses ICO.bell directly (identical path data already
   exists there) rather than duplicating it under a second key. */
function renderInicioQuickNav(){
  const el=document.getElementById('inicio-quicknav');
  if(!el)return;
  const tile=(ico,lbl,onclick)=>`
    <button class="qn-tile" onclick="${onclick}">
      <span class="qn-tile-ico">${svgIco(ico)}</span>
      <span class="qn-tile-lbl">${lbl}</span>
    </button>
  `;
  el.innerHTML=
    tile('tienda','Mercado',`nav('tienda');setTiendaMode('mercado')`)
    +tile('eventos','Eventos',`nav('anuncios');setAnunciosMode('eventos')`)
    +tile('mandaditos','Mandaditos',`nav('tienda');setTiendaMode('mandaditos')`)
    +tile('bell','Avisos',`nav('reportar');setReportarMode('avisos')`);
}

/* Oferta del día on Inicio — three tiers, never empty unless no ofertas exist:
   1. real live ofertas that went live today; 2. any real live oferta;
   3. examples (exempt from the 7-day lifespan, same as the Ofertas tab).
   Random within the tier, slight bias (2:1) toward premium sellers. */
function homeOfertaPool(){
  const live=o=>o.sold<o.total;
  const real=OFERTAS.filter(o=>!o.isExample&&live(o)&&ofertaAgeDays(o)<OFERTA_LIFESPAN_DAYS);
  const todays=real.filter(o=>o.postedDs===TODAY_DS);
  if(todays.length)return todays;
  if(real.length)return real;
  return OFERTAS.filter(o=>o.isExample&&live(o));
}
function pickHomeOferta(pool,rand=Math.random){
  if(!pool.length)return null;
  const w=o=>o.tier==='premium'?2:1;
  let r=rand()*pool.reduce((s,o)=>s+w(o),0);
  for(const o of pool){r-=w(o);if(r<0)return o;}
  return pool[pool.length-1];
}

function renderInicio(){
  renderWelcomeHero();
  renderInicioQuickNav();
  startEventosRotation();

  const topNews=NOTICIAS.slice(0,2);
  const o=pickHomeOferta(homeOfertaPool());

  let h='<div id="dash-special-slot" style="display:none"></div>';

  h+='<div class="dash-row-pair" id="dash-row1">';
  if(o){
    const pct=o.priceWas>o.priceNow?Math.round((1-o.priceNow/o.priceWas)*100):0;
    h+=`
      <div class="dash-col">
        ${dashColHdr('Oferta del día',"nav('tienda')")}
        <div class="dash-card dc-of-hero" onclick="nav('tienda')">
          <div class="dc-of-hero-img" style="background-image:url('${o.img}')"></div>
          ${o.isExample?'<span class="dc-row-kicker">Ejemplo</span>':''}
          <div class="dc-of-hero-overlay">
            <div class="dc-of-hero-name">${e(o.name)}</div>
            <div class="dc-of-hero-price">$${o.priceNow}${pct>0?`<em class="dc-of-hero-pct">-${pct}%</em>`:''}${o.priceWas>o.priceNow?`<span>en vez de $${o.priceWas}</span>`:''}</div>
          </div>
        </div>
      </div>
    `;
  }
  h+='<div id="dash-evento-slot" class="dash-col"></div>';
  h+='</div>';

  h+=`<div id="inicio-destacados-wrap" style="display:none">
    <div class="destacados-hdr">Destacados</div>
    <div class="tienda-grid" id="inicio-destacados-grid"></div>
  </div>`;

  h+=dashSection('news','Noticias de hoy','noticias', `<div class="dash-row-pair">${topNews.map(n=>`
    <div class="dash-card dc-news" onclick="showNoticia('${n.id}')">
      <div class="dc-news-thumb" style="background-image:url('${n.img}')"></div>
      <div class="dc-news-body"><div class="dc-news-src">${e(n.source)}</div><div class="dc-news-title">${e(n.title)}</div></div>
    </div>
  `).join('')}</div>`);

  h+=`<div style="height:24px"></div>`;
  document.getElementById('dash-body').innerHTML=h;
  renderSpecialSlot();
  renderHomeEventoSlot();
  syncDashRow1Width();
  startDestacadosRotation();
}
/* Row 1 collapses to a single full-width column if only one side ended up
   with content — o being null (no live offers at all) or homeEventoPool()
   coming back empty (rare, only when literally no event exists anywhere)
   are both technically possible. renderHomeEventoSlot() already calls this
   itself after populating its side; called once more right after Row 1's
   HTML lands in the DOM in case o was null and that call fired first. */
function syncDashRow1Width(){
  const row=document.getElementById('dash-row1');
  if(!row)return;
  const filled=[...row.children].filter(c=>c.innerHTML.trim()).length;
  row.classList.toggle('solo',filled<=1);
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

/* ══════════════ RENDER: NOTICIAS (now a plain full page, no toggle) ══════════════ */
function renderNoticias(){
  const el=document.getElementById('news-list');
  el.innerHTML=NOTICIAS.map(n=>`
    <div class="news-card" ${admRm('noticias',n.id,n.title)} onclick="showNoticia('${n.id}')">
      <div class="news-thumb" style="background-image:url('${n.img}')"></div>
      <div class="news-body">
        <div class="news-src">${e(n.source)}</div>
        <div class="news-head">${e(n.title)}</div>
        ${n.desc?`<div class="news-desc">${e(n.desc)}</div>`:''}
        <div class="news-meta">${n.time}</div>
      </div>
    </div>
  `).join('');
  wireAdminRemove(el);
}
function showNoticia(id){
  const n=NOTICIAS.find(x=>x.id===id);if(!n)return;
  document.getElementById('noticia-detail-body').innerHTML=`
    <div class="detail-hero" style="background-image:url('${n.img}')"></div>
    <div class="detail-body">
      <div class="detail-src">${e(n.source)}</div>
      <div class="detail-head">${e(n.title)}</div>
      <div class="detail-meta">${n.time}</div>
      ${n.desc?`<div class="detail-desc">${e(n.desc)}</div>`:''}
      <a class="detail-link" href="${n.url}" target="_blank" rel="noopener">
        <div><div class="detail-link-lbl">Leer la publicación original de</div><div class="detail-link-name">${e(n.source.split('·')[0].trim())}</div></div>
        ${svgIco('chevronR','detail-arr')}
      </a>
    </div>
  `;
  nav('noticia-detail');
}

/* ══════════════ TIP GATES (per-section onboarding, once per device) ══════════════
   Replaces the old inline "onboard card" with a real blocking overlay,
   shown once (per device) the first time a section becomes visible, then
   never again unless reset from Preferencias. Reuses .onboard-card's
   inner markup/CSS, just wrapped in a full-screen dismiss-to-continue
   overlay instead of being pinned inline atop the list. */
const SECTION_TIPS={
  inicio:['info','Bienvenido a MiCampeche',
    'Noticias, ofertas, la tienda local, avisos y reportes de tu comunidad — todo junto, revisado a mano antes de publicarse. Hecho en Campeche, para Campeche.',
    null,
    null,null],
  eventos:['eventos','Publica tu propio evento',
    '¿Organizas algo en Campeche? Compártelo aquí, gratis.',
    ['Toca el botón <b>+</b> abajo a la derecha.',
     'Escribe nombre, fecha, hora y lugar.',
     'Agrega una foto o cartel, precio y contacto (opcional).',
     'Envíalo: lo revisamos y se publica para toda la ciudad.'],
    'Publicar un evento',"openPost('eventos')"],
  empleos:['empleos','¿Ofreces trabajo? Publícalo aquí',
    'Llega a vecinos que buscan empleo en Campeche.',
    ['Toca el botón <b>+</b> abajo a la derecha.',
     'Escribe el puesto, el negocio y el pago.',
     'Agrega el horario y los requisitos.',
     'Envíalo: quien busca trabajo te contacta directo.'],
    'Publicar una vacante',"openPost('empleos')"],
  alertas:['alertas','Qué son las Alertas',
    'Aquí verás <b>alertas oficiales</b> para toda la ciudad — cortes de agua, clima fuerte, cierres de calles, emergencias. Las publica MiCampeche; tú solo revisa aquí cuando algo esté pasando. ¿Un problema de tu calle (bache, fuga, alumbrado)? Eso va en <b>Reportes</b>.',
    null,
    'Ir a Reportes',"setReportarMode('reportes')"],
  reportes:['reportar','Reporta un problema de tu calle',
    'Bache, fuga de agua, alumbrado, árbol caído, basura acumulada…',
    ['Toca el botón <b>+</b> abajo a la derecha.',
     'Elige el tipo de problema y dónde está.',
     'Agrega una foto para que se entienda mejor.',
     'Envíalo: otros vecinos lo confirman para darle peso.'],
    'Reportar un problema',"openPost('reportar')"],
  avisos:['message','Avísale a tu colonia',
    'Se busca a un familiar, junta vecinal, cuidado con un perro suelto, objetos perdidos…',
    ['Toca el botón <b>+</b> abajo a la derecha.',
     'Elige el tipo de aviso y escribe tu mensaje.',
     'Deja un número de contacto.',
     'Envíalo: un aviso por persona al día, revisado antes de publicarse.'],
    'Publicar un aviso',"openPost('avisos')"],
  mascotas:['paw','Mascotas en Campeche',
    'Adopciones, mascotas perdidas o encontradas, campañas de esterilización y negocios para tu mascota — todo en un lugar.',
    ['Toca el botón <b>+</b> abajo a la derecha.',
     'Elige <b>Adopción</b>, <b>Perdido</b>, <b>Encontrado</b> o <b>Campaña</b>.',
     'Agrega fotos y describe a la mascota, con la zona donde está.',
     'Envíalo: lo revisamos y aparece aquí. Las adopciones son siempre gratuitas.'],
    'Publicar en Mascotas',"openPost('mascotas')"],
  mandaditos:['tienda','¿Tienes moto y quieres hacer mandados?',
    'Regístrate como mandadito y aparece en el directorio para que vecinos y negocios te contacten.',
    ['Completa tu perfil: foto, vehículo y zona que cubres.',
     'Te pediremos confirmar tu identidad por WhatsApp — es rápido.',
     'Una vez aprobado, apareces en el directorio.',
     'Quien necesite un mandado te contacta directo — el trato y el pago quedan entre ustedes.'],
    'Quiero ser mandadito',"openMandaditoSignup()"]
};
let tipGateShownThisSession=new Set();
function tipsEnabled(){
  try{return localStorage.getItem('mc_tips_enabled')!=='0';}catch(_){return true;}
}
function themePref(){
  try{return localStorage.getItem('mc_theme')||'light';}catch(_){return 'light';}
}
function resolveTheme(pref){
  if(pref==='auto'){
    try{return (window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';}catch(_){return 'light';}
  }
  return pref;
}
function applyTheme(){
  document.documentElement.setAttribute('data-theme',resolveTheme(themePref()));
}
function setThemePref(pref){
  try{localStorage.setItem('mc_theme',pref);}catch(_){}
  applyTheme();
  document.getElementById('modal-body').innerHTML=renderPreferencesBody();
}
// Keeps "Automático" in sync if the OS-level setting changes while the app
// is open — only actually re-applies when the saved preference is 'auto'.
try{
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{
    if(themePref()==='auto')applyTheme();
  });
}catch(_){}
function maybeShowTipGate(key){
  if(tipGateShownThisSession.has(key))return;
  tipGateShownThisSession.add(key);
  if(!tipsEnabled())return;
  try{if(localStorage.getItem('mc_onboard_'+key)==='1')return;}catch(_){}
  const t=SECTION_TIPS[key];
  if(!t)return;
  const [icoName,title,lead,steps,ctaLabel,ctaOnclick]=t;
  document.getElementById('tip-gate-card').innerHTML=`
    <button class="onboard-card-x" aria-label="Cerrar" onclick="dismissTipGate('${key}')">${svgIco('close')}</button>
    <div class="onboard-card-hd">
      <div class="onboard-card-ico">${svgIco(icoName)}</div>
      <div class="onboard-card-ttl">${title}</div>
    </div>
    ${lead?`<div class="onboard-card-lead">${lead}</div>`:''}
    ${(steps&&steps.length)?`<ol class="onboard-steps">${steps.map(s=>`<li><span>${s}</span></li>`).join('')}</ol>`:''}
    ${ctaLabel?`<button class="onboard-card-cta" onclick="dismissTipGate('${key}');${ctaOnclick}">${ctaLabel}${svgIco('chevronR')}</button>`:''}
  `;
  document.getElementById('tip-gate').classList.add('on');
}
function dismissTipGate(key){
  try{localStorage.setItem('mc_onboard_'+key,'1');}catch(_){}
  document.getElementById('tip-gate').classList.remove('on');
}
function openPreferences(){
  closeMenu();
  document.getElementById('modal-title').textContent='Preferencias';
  document.getElementById('modal-body').innerHTML=renderPreferencesBody();
  document.getElementById('modal-bg').classList.add('on');
}
function renderPreferencesBody(){
  const on=tipsEnabled();
  const theme=themePref();
  return `
    <div style="margin-bottom:14px">
      <div class="fl" style="margin-bottom:8px">Tema</div>
      <div style="display:flex;gap:8px">
        <button class="chip${theme==='light'?' on':''}" onclick="setThemePref('light')">Claro</button>
        <button class="chip${theme==='dark'?' on':''}" onclick="setThemePref('dark')">Oscuro</button>
        <button class="chip${theme==='auto'?' on':''}" onclick="setThemePref('auto')">Automático</button>
      </div>
    </div>
    <div style="margin-bottom:14px">
      <div class="fl" style="margin-bottom:8px">Consejos al entrar a una sección</div>
      <div style="display:flex;gap:8px">
        <button class="chip${on?' on':''}" onclick="setTipsEnabled(true)">Activados</button>
        <button class="chip${on?'':' on'}" onclick="setTipsEnabled(false)">Desactivados</button>
      </div>
    </div>
    ${isStandalone()?'':`
      <button class="menu-item" onclick="triggerInstall()" style="border:1.5px solid var(--line2);justify-content:center;margin-top:6px">
        <span class="menu-item-lbl">Instalar la app</span>
      </button>
    `}
  `;
}
function setTipsEnabled(on){
  try{localStorage.setItem('mc_tips_enabled',on?'1':'0');}catch(_){}
  if(on){
    Object.keys(SECTION_TIPS).forEach(k=>{try{localStorage.removeItem('mc_onboard_'+k);}catch(_){}});
    tipGateShownThisSession=new Set();
  }
  document.getElementById('modal-body').innerHTML=renderPreferencesBody();
}

/* ══════════════ RENDER: EVENTOS (sub-view inside Anuncios) ══════════════ */
let evtFilter='all';
let evtColonia='';
function setEvtColonia(v){evtColonia=v.trim();renderEventos();}
let evtDateFilter='all';
function renderEvtChips(){
  const cats=['all',...new Set(EVENTOS.map(x=>x.cat))];
  const sel=document.getElementById('evt-cat-select');
  if(!sel)return;
  sel.innerHTML=cats.map(c=>
    `<option value="${c}"${c===evtFilter?' selected':''}>${c==='all'?'Todas las categorías':c}</option>`
  ).join('');
}
function setEvtFilter(c){evtFilter=c;renderEvtChips();renderEventos();}
/* Quick date filter — same chip control as the category row, just a
   separate scroll row above it (#evt-date-chips). "Pasados" is the odd
   one out: every other option is implicitly upcoming-only (see
   evtInDateRange below) — Pasados is the sole way to see an event whose
   last day has already passed. */
const EVT_DATE_OPTS=[['all','Todas las fechas'],['hoy','Hoy'],['semana','Esta semana'],['proximamente','Próximamente'],['pasados','Pasados']];
function renderEvtDateChips(){
  const el=document.getElementById('evt-date-select');
  if(!el)return;
  el.innerHTML=EVT_DATE_OPTS.map(([v,l])=>
    `<option value="${v}"${v===evtDateFilter?' selected':''}>${l}</option>`
  ).join('');
}
function setEvtDateFilter(v){evtDateFilter=v;renderEvtDateChips();renderEventos();}
/* An event is "finished" once its last day (endDs — end_date, falling
   back to event_date for single-day events) is before today — the same
   boundary the daily cleanup-expired-eventos job uses, and the same one
   "Mis publicaciones" uses for its Finalizado tab. MC.fetchEventos now
   fetches back to 7 days ago (matching that job's own grace window)
   specifically so this filter has something to show. */
function evtFinished(x){return !!x.endDs&&x.endDs<TODAY_DS;}
/* MC.fetchEventos's window is now [7 days ago .. future], but every
   bucket except "Pasados" should still mean "hasn't finished yet". */
function evtInDateRange(x){
  const finished=evtFinished(x);
  if(evtDateFilter==='pasados')return finished;
  if(finished)return false;
  if(evtDateFilter==='all'||!x.ds)return true;
  if(evtDateFilter==='hoy')return x.ds===TODAY_DS;
  const diffDays=Math.round((new Date(x.ds+'T12:00:00')-new Date(TODAY_DS+'T12:00:00'))/86400000);
  if(evtDateFilter==='semana')return diffDays>=0&&diffDays<=6;
  if(evtDateFilter==='proximamente')return diffDays>6;
  return true;
}
function renderEventos(){
  renderEvtDateChips();
  const list=EVENTOS.filter(x=>(evtFilter==='all'||x.cat===evtFilter)&&(!evtColonia||x.colonia===evtColonia)&&evtInDateRange(x));
  const el=document.getElementById('evt-list');
  if(!list.length){
    const sub=(evtFilter!=='all'||evtDateFilter!=='all')
      ? 'No hay eventos que coincidan con este filtro. Prueba con otro.'
      : 'Sé el primero en publicar un evento en Campeche.';
    el.innerHTML=emptyState('eventos','Nada por aquí todavía',sub);return;
  }
  const featuredIds=activeFeaturedEventIds(2);
  const featured=list.filter(x=>featuredIds.includes(String(x.id)));
  const regular=list.filter(x=>!featuredIds.includes(String(x.id)));

  const featuredHtml=featured.map(x=>`
    <div class="evt-card" ${admRm('eventos',x.id,x.name)} onclick="openEvento('${x.id}')">
      ${x.img?`<div class="evt-thumb" style="background-image:url('${x.img}')"></div>`:''}
      <div class="evt-body">
        <div class="evt-date"><div class="evt-date-day">${x.day}</div><div class="evt-date-mon">${x.mon}</div></div>
        <div class="evt-info">
          <div class="evt-cat">${e(x.cat)}</div>
          <div class="evt-name">${e(x.name)}</div>
          <div class="evt-meta">${svgIco('clock')} ${x.time?e(x.time)+' · ':''}${e(x.loc)}</div>
          ${x.price?`<div class="evt-price">${e(x.price)}</div>`:''}
        </div>
        ${svgIco('chevronR','evt-arr')}
      </div>
      <span class="evt-featured-badge">Destacado</span>
    </div>
  `).join('');

  // regular is still in event_date-ascending order (list already is, and
  // filtering preserves order) so grouping just has to watch for the
  // date changing as it walks through, not re-sort anything.
  let groupsHtml='';
  let lastDs=null;
  regular.forEach(x=>{
    if(x.ds!==lastDs){
      lastDs=x.ds;
      const label=dsToLongEs(x.ds);
      groupsHtml+=`<div class="evt-group-hdr">${label.charAt(0).toUpperCase()+label.slice(1)}</div>`;
    }
    groupsHtml+=`
      <div class="evt-list-item" ${admRm('eventos',x.id,x.name)} onclick="openEvento('${x.id}')">
        <div class="evt-list-thumb" style="background-image:url('${x.img}')"></div>
        <div class="evt-list-body">
          <div class="evt-list-name">${e(x.name)}</div>
          <div class="evt-list-meta">${x.time?e(x.time)+' · ':''}${e(x.loc)}</div>
        </div>
        ${svgIco('chevronR','evt-arr')}
      </div>
    `;
  });

  el.innerHTML=featuredHtml+groupsHtml;
  wireAdminRemove(el);
}

/* Turn bare URLs in already-HTML-escaped text into real links — event
   descriptions (esp. the scraped ones) often carry the ticket link inline
   as plain text. */
function linkifyEscaped(s){
  return String(s).replace(/(https?:\/\/[^\s<]+)/g,u=>{
    const href=u.replace(/&amp;/g,'&');
    return `<a href="${href}" target="_blank" rel="noopener">${u}</a>`;
  });
}

/* Full event view — image, full date/time/place, description, and the
   organizer's own website + phone. Like Tienda's listing view, MiCampeche
   is never in the loop: the website link and call/WhatsApp buttons hand
   straight off to the organizer. */
function openEvento(id){
  const x=EVENTOS.find(i=>String(i.id)===String(id));
  if(!x)return;
  const rows=[];
  rows.push(['Cuándo',x.time?`${x.dateLong} · ${x.time}`:x.dateLong]);
  if(x.loc)rows.push(['Dónde',x.loc]);
  if(x.price)rows.push(['Precio',x.price]);
  const num=digitsOnly(x.phone);
  const intl=num?(num.length===10?'52'+num:num):'';
  const waMsg=contactMsgParam(`Hola, vi el evento "${x.name}" en MiCampeche y quiero más información.`);
  let links='';
  const site=/^https?:\/\//i.test(x.website||'')?x.website:(x.website?'https://'+x.website:'');
  if(site){
    links+=`<a class="detail-link" href="${e(site)}" target="_blank" rel="noopener">
      <div><div class="detail-link-lbl">Sitio del evento</div><div class="detail-link-name">Abrir página oficial</div></div>
      ${svgIco('external','detail-arr')}
    </a>`;
  }
  if(intl){
    links+=`<a class="detail-link" href="javascript:void(0)" onclick="event.preventDefault();guardedContact('https://wa.me/${intl}?text=${waMsg}')">
      <div><div class="detail-link-lbl">Contacto del organizador</div><div class="detail-link-name">WhatsApp</div></div>
      ${svgIco('message','detail-arr')}
    </a>
    <a class="detail-link" href="javascript:void(0)" onclick="event.preventDefault();guardedContact('tel:+${intl}')">
      <div><div class="detail-link-lbl">Contacto del organizador</div><div class="detail-link-name">Llamar</div></div>
      ${svgIco('phone','detail-arr')}
    </a>`;
  }
  if(!links)links=`<div class="field-note">El organizador no dejó sitio web ni teléfono de contacto.</div>`;
  document.getElementById('evento-detail-body').innerHTML=`
    ${x.img?`<img class="evt-hero-img" src="${e(x.img)}" alt="">`:''}
    <div class="detail-body">
      <div class="detail-src">${e(x.cat)}</div>
      <div class="detail-head">${e(x.name)}</div>
      <div class="detail-meta">${e(x.dateLong)}${x.time?' · '+e(x.time):''}</div>
      <div class="detail-rows">${rows.map(r=>`<div class="detail-row"><span>${e(r[0])}</span><b>${e(r[1])}</b></div>`).join('')}</div>
      ${x.desc?`<div class="detail-desc">${linkifyEscaped(e(x.desc))}</div>`:''}
      ${links}
    </div>
  `;
  nav('evento-detail');
}

/* ══════════════ RENDER: ANUNCIOS (Productos ⇄ Empleos) ══════════════ */
let anunciosMode='eventos';
function setAnunciosMode(mode){
  anunciosMode=mode;
  document.querySelectorAll('#scr-anuncios .subtog-btn').forEach(b=>b.classList.toggle('on',b.dataset.v===mode));
  document.getElementById('anuncios-eventos').style.display=mode==='eventos'?'block':'none';
  document.getElementById('anuncios-empleos').style.display=mode==='empleos'?'block':'none';
  document.getElementById('anuncios-alertas').style.display=mode==='alertas'?'block':'none';
  document.getElementById('anuncios-fab').style.display=mode==='alertas'?'none':'flex';
  if(curScreen==='anuncios'){maybeShowTipGate(mode);trackPage();}
}

let tiendaMode='mercado';
function setTiendaMode(mode){
  tiendaMode=mode;
  document.querySelectorAll('#scr-tienda .subtog-btn').forEach(b=>b.classList.toggle('on',b.dataset.v===mode));
  document.getElementById('tienda-mercado').style.display=mode==='mercado'?'block':'none';
  document.getElementById('tienda-clasificados').style.display=mode==='clasificados'?'block':'none';
  document.getElementById('tienda-mandaditos').style.display=mode==='mandaditos'?'block':'none';
  document.getElementById('tienda-fab').style.display=mode==='mandaditos'?'none':'flex';
  document.getElementById('tienda-fab').onclick=function(){openPost(mode==='mercado'?'producto':'clasificado');};
  if(mode==='mandaditos')refreshMandaditoTabCta();
  if(mode==='mercado')startDestacadosRotation();else stopDestacadosRotation();
  if(curScreen==='tienda'){maybeShowTipGate(mode);trackPage();}
}

/* Shared card markup for both Mercado and Clasificados grids — same visual
   language, different underlying filter (sellerType negocio vs personal). */
const FULFILLMENT_LABEL={entrega:'Entrega a domicilio',recoger:'Recoger',ambos:'Entrega o recoger'};
function prodCardHtml(x){
  const tags=[];
  if(x.condition==='usado')tags.push('<span class="prod-tag">Usado</span>');
  if(x.availability==='pedido')tags.push('<span class="prod-tag">Sobre pedido</span>');
  if(FULFILLMENT_LABEL[x.fulfillment])tags.push(`<span class="prod-tag">${FULFILLMENT_LABEL[x.fulfillment]}</span>`);
  return `
    <div class="prod-wrap" ${admRm(x.sellerType==='negocio'?'productos':'clasificados',x.id,x.name)}>
      ${x.discountActive?'<span class="prod-badge-discount">¡Descuento!</span>':(x.featured?'<span class="prod-badge">Destacado</span>':'')}
      <div class="prod-card" onclick="openProdView('${x.sellerType}','${e(String(x.id))}')">
        <div class="prod-img" style="background-image:url('${x.img}')"></div>
        <div class="prod-body">
          <div class="prod-name">${e(x.name)}${x.isExample?'<span class="example-pill">Ejemplo</span>':''}</div>
          <div class="prod-price">${x.discountActive&&x.discountPrice?`<span class="prod-price-was">${e(x.price)}</span>${e(x.discountPrice)}`:e(x.price)}</div>
          ${x.sellerType==='negocio'?`<div class="prod-seller">${e(x.seller)}</div>`:''}
          ${tags.length?`<div class="prod-tags">${tags.join('')}</div>`:''}
        </div>
      </div>
    </div>
  `;
}

/* Product/Clasificado detail carousel. Real <img> tags with object-fit:contain
   so the WHOLE photo is always visible (letterboxed on a light background,
   never cropped). 1 image = same stage, no controls. 2+ = swipeable
   scroll-snap track + "n / N" counter + dots; arrow buttons appear only on
   hover-capable (desktop) pointers. */
function pvCarouselHtml(imgs){
  if(!imgs||!imgs.length)return '';
  const n=imgs.length;
  const slides=imgs.map((u,i)=>`<div class="pv-car-slide"><img src="${e(u)}" alt="" draggable="false" loading="${i?'lazy':'eager'}"></div>`).join('');
  if(n===1)return `<div class="pv-carousel"><div class="pv-car-track">${slides}</div></div>`;
  return `<div class="pv-carousel">
    <div class="pv-car-track" onscroll="pvCarScroll(this)">${slides}</div>
    <span class="pv-car-count">1 / ${n}</span>
    <button type="button" class="pv-car-nav prev" onclick="pvCarGo(this,-1)" aria-label="Foto anterior">${svgIco('chevronR')}</button>
    <button type="button" class="pv-car-nav next" onclick="pvCarGo(this,1)" aria-label="Foto siguiente">${svgIco('chevronR')}</button>
    <div class="pv-car-dots">${imgs.map((_,i)=>`<button type="button" class="pv-car-dot${i?'':' on'}" onclick="pvCarTo(this,${i})" aria-label="Foto ${i+1}"></button>`).join('')}</div>
  </div>`;
}
function pvCarIdx(track){
  return Math.max(0,Math.min(track.children.length-1,Math.round(track.scrollLeft/(track.clientWidth||1))));
}
function pvCarScroll(track){
  const root=track.parentElement,i=pvCarIdx(track);
  const c=root.querySelector('.pv-car-count');
  if(c)c.textContent=(i+1)+' / '+track.children.length;
  root.querySelectorAll('.pv-car-dot').forEach((d,k)=>d.classList.toggle('on',k===i));
}
function pvCarTo(el,i){
  const t=el.closest('.pv-carousel').querySelector('.pv-car-track');
  t.scrollTo({left:i*t.clientWidth,behavior:'smooth'});
}
function pvCarGo(el,d){
  const t=el.closest('.pv-carousel').querySelector('.pv-car-track');
  pvCarTo(el,Math.max(0,Math.min(t.children.length-1,pvCarIdx(t)+d)));
}

/* Full listing view — replaces the old "próximamente" stub. Shows the
   description and every transaction detail, then the direct-contact CTAs
   the seller opted into. MiCampeche is never in the loop: WhatsApp / call
   / SMS all hand straight off to the seller's own number. */
function openProdView(sellerType,id){
  const x=TIENDA.find(i=>i.sellerType===sellerType&&String(i.id)===String(id));
  if(!x)return;
  const rows=[];
  if(x.condition==='usado')rows.push(['Estado','Usado']);
  if(x.availability==='pedido')rows.push(['Disponibilidad',x.leadTime?`Sobre pedido · ${x.leadTime}`:'Sobre pedido']);
  if(FULFILLMENT_LABEL[x.fulfillment])rows.push(['Entrega',FULFILLMENT_LABEL[x.fulfillment]]);
  if(x.zone)rows.push(['Zona',x.zone]);
  const num=digitsOnly(x.phone);
  const intl=num?(num.length===10?'52'+num:num):'';
  const methods=Array.isArray(x.contactMethods)?x.contactMethods:[];
  const noun=sellerType==='negocio'?'producto':'anuncio';
  const msg=contactMsgParam(`Hola, vi tu ${noun} "${x.name}" en MiCampeche y me interesa.`);
  let cta='';
  if(intl&&methods.length){
    if(methods.includes('whatsapp'))cta+=`<a class="submit-btn" style="text-decoration:none;text-align:center" href="javascript:void(0)" onclick="event.preventDefault();guardedContact('https://wa.me/${intl}?text=${msg}')">Contactar por WhatsApp</a>`;
    if(methods.includes('llamada'))cta+=`<a class="submit-btn" style="text-decoration:none;text-align:center;background:var(--paper2);color:var(--ink)" href="javascript:void(0)" onclick="event.preventDefault();guardedContact('tel:+${intl}')">Llamar</a>`;
    if(methods.includes('sms'))cta+=`<a class="submit-btn" style="text-decoration:none;text-align:center;background:var(--paper2);color:var(--ink)" href="javascript:void(0)" onclick="event.preventDefault();guardedContact('sms:+${intl}')">Enviar mensaje</a>`;
  }else{
    cta=`<div class="field-note">Este vendedor no dejó datos de contacto.</div>`;
  }
  const galleryImgs=(x.imgs&&x.imgs.length)?x.imgs:(x.img?[x.img]:[]);
  const galleryHtml=pvCarouselHtml(galleryImgs);
  document.getElementById('modal-title').textContent=x.name;
  document.getElementById('modal-body').innerHTML=`
    ${galleryHtml}
    <div style="font-size:20px;font-weight:800;color:var(--palm)">${x.discountActive&&x.discountPrice?`<span style="font-size:14px;color:var(--ink3);text-decoration:line-through;margin-right:8px;font-weight:600">${e(x.price||'')}</span>${e(x.discountPrice)}`:e(x.price||'')}</div>
    ${x.sellerType==='negocio'?`<div style="font-size:13px;color:var(--ink3)">${e(x.seller)}</div>`:''}
    ${x.desc?`<div style="font-size:14px;line-height:1.55;white-space:pre-wrap">${e(x.desc)}</div>`:''}
    ${rows.length?`<div class="pv-rows">${rows.map(r=>`<div class="pv-row"><span>${e(r[0])}</span><b>${e(r[1])}</b></div>`).join('')}</div>`:''}
    ${cta}
  `;
  document.getElementById('modal-bg').classList.add('on');
}

let mktFilter='all';
let mktColonia='';
let mktSearch='';
function setMktColonia(v){mktColonia=v.trim();renderMercado();}
function setMktSearch(v){mktSearch=v.trim().toLowerCase();renderMercado();}
// Kept the old function name (renderMktChips) even though it now populates
// a <select> rather than literal chips, so nothing else that calls it
// needs to change.
function renderMktChips(){
  const negocios=TIENDA.filter(x=>x.sellerType==='negocio');
  const cats=['all',...new Set(negocios.map(x=>x.cat))];
  const sel=document.getElementById('mkt-cat-select');
  if(!sel)return;
  const prev=cats.includes(mktFilter)?mktFilter:'all';
  sel.innerHTML=cats.map(c=>`<option value="${c}">${c==='all'?'Todas':e(c)}</option>`).join('');
  sel.value=prev;
  mktFilter=prev;
}
function setMktFilter(c){mktFilter=c;renderMercado();}
function renderMercado(){
  const list=TIENDA.filter(x=>x.sellerType==='negocio'
    &&(mktFilter==='all'||x.cat===mktFilter)
    &&(!mktColonia||x.colonia===mktColonia)
    &&(!mktSearch||x.name.toLowerCase().includes(mktSearch)));
  const el=document.getElementById('mkt-grid');
  if(!list.length){
    const filtered=mktFilter!=='all'||mktColonia||mktSearch;
    el.innerHTML=emptyState('tienda','Nada por aquí todavía',filtered?'Nada coincide con este filtro.':'Sé el primero en publicar en esta categoría.');
    return;
  }
  el.innerHTML=list.map(prodCardHtml).join('');
  wireAdminRemove(el);
}

/* ══════════════ RENDER: DESTACADOS (rotating cross-business promo strip) ══════════════
   Premium businesses can flag up to 2 products each as Destacado/Descuento
   (see enforce_producto_promo_cap — that per-business cap is unchanged).
   With more than one Premium business now live, the eligible pool across
   ALL of them can exceed the 2 slots this strip shows at once, so when it
   does, it rotates through the pool 2 at a time on a timer instead of
   raising any cap. Reuses prodCardHtml exactly — same look, same tap-
   through, same admin remove — this is not a new card type. */
let destacadosRotationTimer=null;
let destacadosRotationIndex=0;
function eligibleDestacados(){
  return TIENDA.filter(x=>x.sellerType==='negocio'&&(x.featured||x.discountActive))
    .sort((a,b)=>String(a.id).localeCompare(String(b.id))); // stable order across re-renders/rotations
}
function renderDestacadosCarousel(){
  const mounts=[
    {wrap:document.getElementById('destacados-wrap'),grid:document.getElementById('destacados-grid')},
    {wrap:document.getElementById('inicio-destacados-wrap'),grid:document.getElementById('inicio-destacados-grid')}
  ].filter(m=>m.wrap&&m.grid);
  if(!mounts.length)return;
  const pool=eligibleDestacados();
  if(!pool.length){
    mounts.forEach(m=>m.wrap.style.display='none');
    if(destacadosRotationTimer){clearInterval(destacadosRotationTimer);destacadosRotationTimer=null;}
    return;
  }
  const showN=Math.min(2,pool.length);
  const start=destacadosRotationIndex%pool.length;
  const slice=[];
  for(let i=0;i<showN;i++)slice.push(pool[(start+i)%pool.length]);
  mounts.forEach(m=>{
    m.wrap.style.display='block';
    m.grid.innerHTML=slice.map(prodCardHtml).join('');
    wireAdminRemove(m.grid);
  });
}
/* Timer only runs while Mercado is the visible sub-tab (see setTiendaMode
   below), and only when there are actually more than 2 eligible items to
   rotate through — 2 or fewer just render once and sit still. */
function startDestacadosRotation(){
  stopDestacadosRotation();
  renderDestacadosCarousel();
  if(eligibleDestacados().length>2){
    destacadosRotationTimer=setInterval(()=>{
      const pool=eligibleDestacados();
      destacadosRotationIndex=(destacadosRotationIndex+2)%(pool.length||1);
      renderDestacadosCarousel();
    },7000);
  }
}
function stopDestacadosRotation(){
  if(destacadosRotationTimer){clearInterval(destacadosRotationTimer);destacadosRotationTimer=null;}
}

let clasFilter='all';
let clasColonia='';
let clasSearch='';
function setClasColonia(v){clasColonia=v.trim();renderClasificados();}
function setClasSearch(v){clasSearch=v.trim().toLowerCase();renderClasificados();}
function renderClasChips(){
  const personales=TIENDA.filter(x=>x.sellerType==='personal');
  const cats=['all',...new Set(personales.map(x=>x.cat))];
  const sel=document.getElementById('clas-cat-select');
  if(!sel)return;
  const prev=cats.includes(clasFilter)?clasFilter:'all';
  sel.innerHTML=cats.map(c=>`<option value="${c}">${c==='all'?'Todas':e(c)}</option>`).join('');
  sel.value=prev;
  clasFilter=prev;
}
function setClasFilter(c){clasFilter=c;renderClasificados();}
function renderClasificados(){
  const list=TIENDA.filter(x=>x.sellerType==='personal'
    &&(clasFilter==='all'||x.cat===clasFilter)
    &&(!clasColonia||x.colonia===clasColonia)
    &&(!clasSearch||x.name.toLowerCase().includes(clasSearch)));
  const el=document.getElementById('clas-grid');
  if(!list.length){
    const filtered=clasFilter!=='all'||clasColonia||clasSearch;
    el.innerHTML=emptyState('tienda','Nada por aquí todavía',filtered?'Nada coincide con este filtro.':'Sé el primero en publicar algo por aquí.');
    return;
  }
  el.innerHTML=list.map(prodCardHtml).join('');
  wireAdminRemove(el);
}

/* ══════════════ RENDER: MANDADITOS (courier directory) ══════════════
   A directory, not a job board — no task posting, no in-app acceptance,
   no status tracking. A customer browses profiles and contacts a
   mandadito directly by WhatsApp; the deal and payment happen entirely
   outside the app (same as Tienda/Clasificados). This distinction is
   deliberate and load-bearing — see the Master Codex. */
let MANDADITOS=[];
let myMandaditoStatus=null; // cached account mandadito row, refreshed each time the Mandaditos tab is opened — powers the persistent CTA below
async function refreshMandaditoTabCta(){
  myMandaditoStatus=await MC.myMandadito();
  renderMandaditoTabCta();
}
function renderMandaditoTabCta(){
  const el=document.getElementById('mandaditos-cta');
  if(!el)return;
  if(myMandaditoStatus&&myMandaditoStatus.status==='published'){el.innerHTML='';return;}
  const label=(myMandaditoStatus&&myMandaditoStatus.status==='rejected')?'Volver a intentar como mandadito':'Quiero ser mandadito';
  const sub=myMandaditoStatus
    ? (myMandaditoStatus.status==='pending'?'Tu registro está en revisión':(myMandaditoStatus.rejection_reason||'No se aprobó tu registro anterior'))
    : 'Regístrate en el directorio para que vecinos y negocios te contacten';
  el.innerHTML=`
    <button class="menu-item" onclick="openMandaditoSignup()" style="border:1.5px solid var(--line2);margin-bottom:14px">
      <span class="menu-item-ico" style="background:var(--wall)"><svg class="ico" viewBox="0 0 24 24"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2m9-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/></svg></span>
      <span class="menu-item-txt">
        <span class="menu-item-lbl">${label}</span>
        <span class="menu-item-sub">${sub}</span>
      </span>
      <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
    </button>`;
}
/* Two static example cards so the grid never looks like a broken empty
   list while real signups are still growing. Clearly labeled "Ejemplo",
   no working WhatsApp button (nothing real to contact), no admin
   long-press wiring (not a real row). This is a plain array, not tied to
   any threshold — delete entries here whenever you want fewer/none. */
const MANDADITO_EXAMPLES=[
  {name:'Ejemplo: Juan Canul',vehicle:'Motocicleta',img:'/assets/images/Mandadito-Ejemplo-1.png'},
  {name:'Ejemplo: María Chan',vehicle:'Bicicleta',img:'/assets/images/Mandadito-Ejemplo-2.png'}
];
function mandaditoCardHtml(m,isExample){
  const num=isExample?'':digitsOnly(m.phone);
  const intl=num?(num.length===10?'52'+num:num):'';
  const msg=encodeURIComponent(`Hola, vi tu perfil de mandadito en MiCampeche y necesito que muevas algo.`);
  const wrapAttrs=isExample?'':' '+admRm('mandaditos',m.id,m.name);
  return `
    <div class="prod-wrap"${wrapAttrs}>
      ${isExample?'<span class="prod-badge-example">Ejemplo</span>':''}
      <div class="prod-card" ${isExample?'style="cursor:default"':`onclick="openMandaditoView('${m.id}')"`}>
        <div class="prod-img" style="background-image:url('${m.img}')"></div>
        <div class="prod-body">
          <div class="prod-name">${e(m.name)}</div>
          ${m.vehicle?`<div class="prod-seller">${e(m.vehicle)}</div>`:''}
          ${!isExample&&m.desc?`<div style="font-size:12.5px;color:var(--ink2);margin-top:4px">${e(m.desc)}</div>`:''}
          ${isExample
            ?'<div class="field-note" style="text-align:center;margin-top:8px">Así se ve una tarjeta de mandadito</div>'
            :(intl?`<a class="submit-btn" style="margin-top:8px;padding:9px;font-size:13px;text-decoration:none;text-align:center;display:block" href="javascript:void(0)" onclick="event.stopPropagation();event.preventDefault();guardedContact('https://wa.me/${intl}?text=${msg}').then(ok=>{if(ok)logMandaditoContact('${m.id}')})">Contactar por WhatsApp</a>`
                  :'<div class="field-note">Sin WhatsApp registrado.</div>')}
          ${isExample?'':`<div style="text-align:center;margin-top:6px"><span style="font-size:11px;color:var(--ink3);text-decoration:underline;cursor:pointer" onclick="event.stopPropagation();openMandaditoReportForm('${m.id}')">Reportar</span></div>`}
        </div>
      </div>
    </div>`;
}
function openMandaditoView(id){
  const m=MANDADITOS.find(x=>String(x.id)===String(id));
  if(!m)return;
  const num=digitsOnly(m.phone);
  const intl=num?(num.length===10?'52'+num:num):'';
  const msg=encodeURIComponent(`Hola, vi tu perfil de mandadito en MiCampeche y necesito que muevas algo.`);
  document.getElementById('modal-title').textContent=m.name;
  document.getElementById('modal-body').innerHTML=`
    <div class="pv-hero" style="background-image:url('${e(m.img)}')"></div>
    ${m.vehicle?`<div style="font-size:13px;color:var(--ink3);margin-top:8px">${e(m.vehicle)}</div>`:''}
    ${m.desc?`<div style="font-size:14px;line-height:1.55;white-space:pre-wrap;margin-top:6px">${e(m.desc)}</div>`:'<div class="field-note" style="margin-top:6px">Este mandadito no dejó más detalles.</div>'}
    ${intl?`<a class="submit-btn" style="text-decoration:none;text-align:center;margin-top:14px;display:block" href="javascript:void(0)" onclick="event.preventDefault();guardedContact('https://wa.me/${intl}?text=${msg}').then(ok=>{if(ok)logMandaditoContact('${m.id}')})">Contactar por WhatsApp</a>`:'<div class="field-note" style="margin-top:14px">Sin WhatsApp registrado.</div>'}
    <div style="text-align:center;margin-top:10px"><span style="font-size:12px;color:var(--ink3);text-decoration:underline;cursor:pointer" onclick="closeModal();openMandaditoReportForm('${m.id}')">Reportar</span></div>
  `;
  document.getElementById('modal-bg').classList.add('on');
}
function renderMandaditos(){
  const el=document.getElementById('mandaditos-list');
  if(!MANDADITOS.length&&!MANDADITO_EXAMPLES.length){el.innerHTML=emptyState('tienda','Nadie registrado todavía','Sé el primero en registrarte como mandadito.');return;}
  el.innerHTML=`<div class="tienda-grid">`
    +MANDADITOS.map(m=>mandaditoCardHtml(m,false)).join('')
    +MANDADITO_EXAMPLES.map(m=>mandaditoCardHtml(m,true)).join('')
    +`</div><div class="su-note">MiCampeche solo conecta — el trato, el precio y el pago quedan entre ustedes.</div>`;
  wireAdminRemove(el);
}

/* Best-effort — never blocks the WhatsApp link. If the visitor isn't
   signed in the insert is rejected by RLS; that's fine, there's nothing
   meaningful to log for an unidentified visitor anyway. */
async function logMandaditoContact(mandaditoId){
  try{await MC.logMandaditoContact(mandaditoId);}catch(_){}
}

/* Standalone report — always available on a profile, not tied to any
   particular contact. Looked up by id rather than passed through the
   onclick chain, same reasoning as confirmDiscardMyPost (free-text names
   can contain a quote that breaks e()'s escaping in a JS-string arg). */
function openMandaditoReportForm(mandaditoId){
  const m=MANDADITOS.find(x=>x.id===mandaditoId);
  if(!m)return;
  document.getElementById('modal-title').textContent='Reportar a '+m.name;
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--ink3);font-size:13px;margin-bottom:10px;line-height:1.5">Esto queda privado entre tú y MiCampeche — nunca se lo mostramos al mandadito.</div>
    <textarea class="ft" id="mandadito-report-note" placeholder="¿Qué pasó?"></textarea>
    <button class="submit-btn" id="mandadito-report-submit-btn" onclick="submitMandaditoReport('${mandaditoId}')">Enviar reporte</button>
  `;
  document.getElementById('modal-bg').classList.add('on');
}
async function submitMandaditoReport(mandaditoId){
  const acct=await MC.currentAccount();
  if(!runWriteGate(acct,null))return;
  const note=document.getElementById('mandadito-report-note').value.trim();
  if(!note){toast('Escribe qué pasó');return;}
  const btn=document.getElementById('mandadito-report-submit-btn');
  if(btn){btn.disabled=true;btn.textContent='Enviando…';}
  const {error}=await MC.reportMandadito(mandaditoId,note,'manual');
  if(error){toast(pgErrorToast(error,'No se pudo enviar.'));if(btn){btn.disabled=false;btn.textContent='Enviar reporte';}return;}
  closeModal();
  toast('Gracias — lo revisaremos');
}

/* ══════════════ RENDER: OFERTAS (daily deal drop) ══════════════ */
/* No claim state at all anymore — "Contactar" just opens WhatsApp, same
   as Tienda already does. The count is real: quantity_sold only ever
   moves when the business themselves confirms a real payment (see
   confirmOfertaSaleStep2 further down), so there's no more "claimed but
   never showed up" gap. */
function renderOfertas(){
  const el=document.getElementById('of-list');
  // Example ofertas are exempt from the normal 7-day lifespan (so they
  // actually persist, per how they're meant to be used) and are always
  // sorted after every real oferta — a real business's real deal claims
  // the hero-banner spot (i===0 below) whenever at least one real oferta
  // exists; an example one only lands there if there are zero real ones.
  const visible=OFERTAS.filter(o=>o.isExample||ofertaAgeDays(o)<OFERTA_LIFESPAN_DAYS)
    .sort((a,b)=>(a.isExample===b.isExample)?0:(a.isExample?1:-1));
  if(!visible.length){el.innerHTML=emptyState('tienda','Sin ofertas hoy','Vuelve mañana por la mañana — las ofertas se renuevan cada día.');return;}
  el.innerHTML=visible.map((o)=>{
    const soldOut=o.sold>=o.total;
    const pct=Math.min(100,Math.round((o.sold/o.total)*100));
    const discountPct=Math.round((1-o.priceNow/o.priceWas)*100);
    const num=digitsOnly(o.phone);
    const intl=num?(num.length===10?'52'+num:num):'';
    const msg=contactMsgParam(`Hola, quiero tu oferta "${o.name}" en MiCampeche.`);
    const claimBtn=soldOut
      ? `<button class="of-claim-btn" disabled style="opacity:.5;cursor:default">Agotado</button>`
      : intl
        ? `<a class="of-claim-btn" style="text-decoration:none;display:inline-flex;align-items:center;justify-content:center" href="javascript:void(0)" onclick="event.stopPropagation();event.preventDefault();guardedContact('https://wa.me/${intl}?text=${msg}')">Contactar</a>`
        : `<button class="of-claim-btn" disabled style="opacity:.5;cursor:default">Sin contacto</button>`;
    const bottomHtml=`
      <div class="of-bottom">
        <div class="of-progress-track"><div class="of-progress-fill" style="width:${pct}%"></div></div>
        <div class="of-claim-row">
          <span class="of-claimed-txt">${o.sold} de ${o.total} vendidos</span>
          ${claimBtn}
        </div>
      </div>`;
    return `
    <div class="of-card${soldOut?' sold-out':''}" onclick="toggleOfertaFlip(this)" ${admRm('ofertas',o.id,o.name)}>
      <div class="of-flip-inner">
        <div class="of-flip-front">
          <div class="of-hero-wrap">
            ${soldOut?'<div class="of-soldout-ribbon">Agotado</div>':''}
            <div class="of-flip-hint"><svg viewBox="0 0 24 24"><path d="M17 2l4 4-4 4M7 22l-4-4 4-4M3 6h13a4 4 0 0 1 4 4v1M21 18H8a4 4 0 0 1-4-4v-1"/></svg></div>
            <div class="of-hero-img" style="background-image:url('${o.img}')"></div>
            <div class="of-hero-overlay">
              <div class="of-seller">${e(o.seller)}${o.tier==='premium'?`<span class="of-badge-premium">${svgIco('checkBadge')}Verificado</span>`:''}</div>
              <div class="of-name">${e(o.name)}${o.isExample?'<span class="example-pill">Ejemplo</span>':''}</div>
              <div class="of-price-row">
                <span class="of-price-now">$${o.priceNow}</span>
                <span class="of-price-was">$${o.priceWas}</span>
                <span class="of-pct">-${discountPct}%</span>
              </div>
            </div>
          </div>
          ${bottomHtml}
        </div>
        <div class="of-flip-back">
          <div class="of-back-seller">${e(o.seller)}</div>
          <div class="of-back-title">${e(o.name)}${o.isExample?'<span class="example-pill">Ejemplo</span>':''}</div>
          ${o.desc?`<div class="of-back-text">${e(o.desc)}</div>`:'<div class="of-back-text" style="color:var(--ink3)">Sin descripción adicional.</div>'}
          ${o.terms?`<div class="of-back-section-lbl">Condiciones</div><div class="of-back-text">${e(o.terms)}</div>`:''}
          ${bottomHtml}
        </div>
      </div>
    </div>
  `;}).join('');
  wireAdminRemove(el);
}
function toggleOfertaFlip(el){el.classList.toggle('flipped');}

let empColonia='';
function setEmpColonia(v){empColonia=v.trim();renderEmpleos();}
function renderEmpleos(){
  const list=EMPLEOS.filter(x=>!empColonia||x.colonia===empColonia);
  const el=document.getElementById('job-list');
  if(!list.length){el.innerHTML=emptyState('empleos','Nada por aquí todavía','No hay vacantes en esta colonia por ahora.');return;}
  el.innerHTML=list.map(x=>`
    <div class="job-card" style="cursor:pointer" onclick="openEmpleo('${x.id}')" ${admRm('empleos',x.id,x.title)}>
      <div class="job-top"><div class="job-title">${e(x.title)}</div><div class="job-pay">${e(x.pay)}</div></div>
      ${x.co?`<div class="job-co">${e(x.co)}</div>`:''}
      ${x.tags.length?`<div class="job-tags">${x.tags.map(t=>`<span class="job-tag">${e(t)}</span>`).join('')}</div>`:''}
      ${contactCtaRow(x,`Hola, vi la vacante "${x.title}" en MiCampeche y me interesa.`)}
    </div>
  `).join('');
  wireAdminRemove(el);
}
/* Full job detail — modal-based, same pattern as openProdView (Tienda),
   not a dedicated screen: job content is short enough not to need one.
   The description residents type in the submission form is stored but
   was never fetched or displayed anywhere before this — that's the core
   thing this adds. */
function openEmpleo(id){
  const x=EMPLEOS.find(i=>String(i.id)===String(id));
  if(!x)return;
  document.getElementById('modal-title').textContent=x.title;
  document.getElementById('modal-body').innerHTML=`
    <div style="font-size:16px;font-weight:800;color:var(--signal)">${e(x.pay)}</div>
    ${x.co?`<div style="font-size:13px;color:var(--ink3)">${e(x.co)}</div>`:''}
    ${x.tags.length?`<div class="job-tags" style="margin-top:8px">${x.tags.map(t=>`<span class="job-tag">${e(t)}</span>`).join('')}</div>`:''}
    ${x.desc?`<div style="font-size:14px;line-height:1.55;white-space:pre-wrap;margin-top:12px">${e(x.desc)}</div>`:''}
    <div style="margin-top:14px">${contactCtaRow(x,`Hola, vi la vacante "${x.title}" en MiCampeche y me interesa.`)}</div>
  `;
  document.getElementById('modal-bg').classList.add('on');
}

/* ══════════════ RENDER: MASCOTAS (Vecinos ▸ Mascotas) ══════════════
   One section for everything pet-related: adoption, lost/found pets, campaigns
   (community posts, table `mascotas`) + a "Negocios" chip that shows Mercado
   products in the 'Mascotas' category (vets, groomers, pet stores). */
const MASCOTA_TYPE_LABEL={adopcion:'Adopción',perdido:'Perdido',encontrado:'Encontrado',campana:'Campaña'};
const MASCOTA_SPECIES_LABEL={perro:'Perro',gato:'Gato',otro:'Otro'};
const MS_CHIPS=[['all','Todos'],['adopcion','Adopción'],['perdido','Perdidos'],['encontrado','Encontrados'],['campana','Campañas'],['negocios','Negocios']];
let msFilter='all';
let msColonia='';
function mascotaVisible(x){
  if(x.resolvedAt)return false;                                   // adopted / found / resolved by its owner
  if(x.type==='campana'&&x.eventDate&&x.eventDate<TODAY_DS)return false; // campaign already happened
  return true;
}
function mascotaMeta(x){
  const b=[];
  if(x.species)b.push(MASCOTA_SPECIES_LABEL[x.species]||x.species);
  if(x.sex)b.push(x.sex==='macho'?'Macho':'Hembra');
  if(x.age)b.push(x.age);
  if(x.type==='adopcion'&&x.sterilized===true)b.push('Esterilizado');
  if(x.type==='adopcion'&&x.sterilized===false)b.push('Sin esterilizar');
  return b.join(' · ');
}
function renderMsChips(){
  const el=document.getElementById('ms-chips');
  if(!el)return;
  el.innerHTML=MS_CHIPS.map(([v,l])=>`<button class="chip${v===msFilter?' on':''}" onclick="setMsFilter('${v}')">${l}</button>`).join('');
  const row=document.getElementById('ms-colonia-row');
  if(row)row.style.display=msFilter==='negocios'?'none':'';
}
function setMsFilter(v){msFilter=v;renderMsChips();renderMascotas();}
function setMsColonia(v){msColonia=v.trim();renderMascotas();}
function goToMercadoCategory(cat){
  nav('tienda');setTiendaMode('mercado');
  mktFilter=cat;
  const sel=document.getElementById('mkt-cat-select');
  if(sel)sel.value=cat;
  renderMercado();
}
function renderMascotasNegocios(){
  const wrap=document.getElementById('ms-negocios');
  if(!wrap)return;
  const list=TIENDA.filter(x=>x.sellerType==='negocio'&&x.cat==='Mascotas');
  const hdr=`<div class="of-hdr"><div class="of-hdr-txt">Veterinarias, estéticas y tiendas de mascotas · de Mercado</div></div>`;
  if(!list.length){
    wrap.innerHTML=hdr+emptyState('tienda','Aún no hay negocios de mascotas','¿Tienes una veterinaria, estética canina o tienda? Publica tus productos o servicios en Mercado con la categoría Mascotas.')
      +`<div style="padding:0 18px 40px"><button class="submit-btn" onclick="openPost('producto')">Publicar en Mercado</button></div>`;
    return;
  }
  wrap.innerHTML=hdr+`<div class="tienda-grid">${list.map(prodCardHtml).join('')}</div>`
    +`<div style="padding:6px 18px 40px"><button class="chip" onclick="goToMercadoCategory('Mascotas')">Ver todo en Mercado${svgIco('chevronR')}</button></div>`;
  wireAdminRemove(wrap);
}
function renderMascotas(){
  const el=document.getElementById('ms-list');
  const neg=document.getElementById('ms-negocios');
  if(!el||!neg)return;
  if(msFilter==='negocios'){el.style.display='none';neg.style.display='block';renderMascotasNegocios();return;}
  neg.style.display='none';el.style.display='';
  let list=MASCOTAS.filter(mascotaVisible).filter(x=>(msFilter==='all'||x.type===msFilter)&&(!msColonia||x.colonia===msColonia));
  if(msFilter==='campana')list=[...list].sort((a,b)=>String(a.eventDate).localeCompare(String(b.eventDate))); // soonest first
  if(!list.length){
    const emptyMsg={adopcion:'Aún no hay mascotas en adopción.',perdido:'No hay mascotas perdidas por ahora.',encontrado:'No hay mascotas encontradas por ahora.',campana:'No hay campañas próximas por ahora.'};
    el.innerHTML=emptyState('paw','Nada por aquí todavía',msColonia?'No hay publicaciones en esta colonia por ahora.':(emptyMsg[msFilter]||'Sé el primero en publicar en Mascotas.'));
    return;
  }
  el.innerHTML=list.map(x=>{
    const meta=mascotaMeta(x);
    const where=x.type==='campana'&&x.eventDate?dsToLongEs(x.eventDate):(x.loc||x.colonia);
    return `
    <div class="pf-card" style="cursor:pointer" onclick="if(!event.target.closest('.contact-cta-row'))openMascotaView('${e(String(x.id))}')" ${admRm('mascotas',x.id,x.name)}>
      <div class="pf-img" style="${x.img?`background-image:url('${e(x.img)}')`:''}">${!x.img?svgIco('paw'):''}${x.imgs.length>1?`<span class="ms-count">${x.imgs.length}</span>`:''}</div>
      <div class="pf-body">
        <span class="pf-tag ${x.type}">${MASCOTA_TYPE_LABEL[x.type]||x.type}</span>${x.isExample?'<span class="example-pill">Ejemplo</span>':''}
        <div class="pf-name">${e(x.name)}</div>
        ${meta?`<div class="pf-desc" style="font-weight:600">${e(meta)}</div>`:''}
        ${x.desc?`<div class="pf-desc">${e(x.desc)}</div>`:''}
        ${where?`<div class="pf-loc">${svgIco(x.type==='campana'?'clock':'pin')} ${e(where)}</div>`:''}
        ${contactCtaRow(x,`Hola, vi tu publicación "${x.name}" en MiCampeche.`)}
      </div>
    </div>`;
  }).join('');
  wireAdminRemove(el);
}
function openMascotaView(id){
  const x=MASCOTAS.find(m=>String(m.id)===String(id));
  if(!x)return;
  const meta=mascotaMeta(x);
  const rows=[];
  if(x.type==='campana'&&x.eventDate)rows.push(['Fecha',dsToLongEs(x.eventDate)]);
  if(x.loc)rows.push([x.type==='campana'?'Lugar':'Punto de referencia',x.loc]);
  if(x.colonia)rows.push(['Colonia',x.colonia]);
  document.getElementById('modal-title').textContent=x.name;
  document.getElementById('modal-body').innerHTML=`
    ${pvCarouselHtml(x.imgs)}
    <div><span class="pf-tag ${x.type}">${MASCOTA_TYPE_LABEL[x.type]||x.type}</span>${x.isExample?'<span class="example-pill">Ejemplo</span>':''}</div>
    ${meta?`<div style="font-size:14px;font-weight:700">${e(meta)}</div>`:''}
    ${x.desc?`<div style="font-size:14px;line-height:1.55;white-space:pre-wrap">${e(x.desc)}</div>`:''}
    ${rows.length?`<div class="pv-rows">${rows.map(r=>`<div class="pv-row"><span>${e(r[0])}</span><b>${e(r[1])}</b></div>`).join('')}</div>`:''}
    ${contactCtaRow(x,`Hola, vi tu publicación "${x.name}" en MiCampeche.`)}
  `;
  document.getElementById('modal-bg').classList.add('on');
}

/* ══════════════ RENDER: REPORTAR (Reportes ⇄ Alertas) ══════════════ */
let reportarMode='avisos';
function setReportarMode(mode){
  reportarMode=mode;
  document.querySelectorAll('#scr-reportar .subtog-btn').forEach(b=>b.classList.toggle('on',b.dataset.v===mode));
  document.getElementById('reportar-reportes').style.display=mode==='reportes'?'block':'none';
  document.getElementById('reportar-avisos').style.display=mode==='avisos'?'block':'none';
  document.getElementById('reportar-mascotas').style.display=mode==='mascotas'?'block':'none';
  if(curScreen==='reportar'){maybeShowTipGate(mode);trackPage();}
}
let repFilter='all';
let repColonia='';
function setRepColonia(v){repColonia=v.trim();renderReportes();}
const confirmedByMe={};
const resolvedByMe={};
function renderRepChips(){
  const cats=['all',...new Set(REPORTES.map(x=>x.cat))];
  document.getElementById('rep-chips').innerHTML=cats.map(c=>
    `<button class="chip${c===repFilter?' on':''}" onclick="setRepFilter('${c}')">${c==='all'?'Todos':c}</button>`
  ).join('');
}
function setRepFilter(c){repFilter=c;renderRepChips();renderReportes();}
function renderReportes(){
  const list=REPORTES.filter(x=>(repFilter==='all'||x.cat===repFilter)&&(!repColonia||x.loc_colonia===repColonia));
  const el=document.getElementById('rep-list');
  if(!list.length){el.innerHTML=emptyState('reportar','Nada por aquí todavía','No hay reportes en esta categoría por ahora.');return;}
  el.innerHTML=list.map(x=>{
    const isResolved=x.status==='resuelto';
    const iConfirmed=!!confirmedByMe[x.id];
    const iVotedResolved=!!resolvedByMe[x.id];
    return `
    <div class="rep-card" ${admRm('reportes',x.id,x.title)}>
      <div class="rep-top">
        <div class="rep-img" style="${x.img?`background-image:url('${x.img}')`:''}">${!x.img?svgIco('pin'):''}</div>
        <div class="rep-body">
          <span class="rep-cat">${e(x.cat)}</span>
          <div class="rep-title">${e(x.title)}${x.isExample?'<span class="example-pill">Ejemplo</span>':''}</div>
          <div class="rep-loc">${e(x.loc)}</div>
        </div>
      </div>
      <div class="rep-desc">${e(x.desc)}</div>
      <div class="rep-bottom">
        ${isResolved
          ? `<span class="rep-resolved-badge">${svgIco('thumb')} Resuelto</span>`
          : `<div class="rep-actions">
               <button class="rep-confirm-btn${iConfirmed?' on':''}" onclick="toggleConfirm('${x.id}')">${svgIco('thumb')} ${x.confirms+(iConfirmed?1:0)} confirmaron</button>
               <button class="rep-resolve-btn${iVotedResolved?' on':''}" onclick="toggleResolveVote('${x.id}')">${svgIco('check')} Ya no está</button>
             </div>`
        }
        <span class="rep-time">${x.time}</span>
      </div>
    </div>
  `;}).join('');
  wireAdminRemove(el);
}
async function toggleConfirm(id){
  const acct=await MC.currentAccount();
  if(!runWriteGate(acct,null))return;
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
/* "Ya no está" vote — same optimistic/rollback shape as toggleConfirm.
   Deliberately kept separate from confirming so a resident can't conflate
   "this problem is real" with "this problem is fixed". After a successful
   new vote we re-pull Reportes: the 2nd distinct vote auto-resolves the
   report via a DB trigger, and we want the card to flip to "Resuelto" now
   rather than at the next natural refresh. */
async function toggleResolveVote(id){
  const acct=await MC.currentAccount();
  if(!runWriteGate(acct,null))return;
  const wasVoted=!!resolvedByMe[id];
  resolvedByMe[id]=!wasVoted;
  renderReportes();
  const {error}=wasVoted?await MC.unvoteReporteResolved(id):await MC.voteReporteResolved(id);
  if(error){
    resolvedByMe[id]=wasVoted;
    renderReportes();
    toast(pgErrorToast(error,'No se pudo actualizar tu voto.'));
    return;
  }
  if(!wasVoted){
    REPORTES=await MC.fetchReportes();
    REPORTES.forEach(r=>{
      if(r.iConfirmedReal)confirmedByMe[r.id]=true;
      if(r.iVotedResolvedReal)resolvedByMe[r.id]=true;
    });
    renderReportes();
  }
}
let avColonia='';
let avFilter='all';
function setAvColonia(v){avColonia=v.trim();renderAvisos();}
function renderAvChips(){const el=document.getElementById('av-chips');if(!el)return;const cats=['all',...new Set(AVISOS.map(a=>a.cat))];if(avFilter!=='all'&&!cats.includes(avFilter))avFilter='all';el.innerHTML=cats.map(c=>`<button class="chip${c===avFilter?' on':''}" onclick="setAvFilter('${e(c)}')">${c==='all'?'Todos':e(c)}</button>`).join('');}
function setAvFilter(c){avFilter=c;renderAvChips();renderAvisos();}
function renderAvisos(){
  const list=AVISOS.filter(a=>(avFilter==='all'||a.cat===avFilter)&&(!avColonia||a.colonia===avColonia));
  const el=document.getElementById('av-list');
  if(!list.length){el.innerHTML=emptyState('reportar','Nada por aquí todavía',avColonia?'No hay avisos en esta colonia por ahora.':'Sé el primero en publicar un aviso para tus vecinos.');return;}
  el.innerHTML=list.map(a=>`
    <div class="av-card" ${admRm('avisos',a.id,a.title)}>
      <div class="av-top"><span class="av-cat">${e(a.cat)}</span><span class="av-time">${a.time}</span></div>
      <div class="av-main">
        ${a.img?`<div class="av-img" style="background-image:url('${e(a.img)}')"></div>`:''}
        <div class="av-main-body">
          <div class="av-title">${e(a.title)}${a.isExample?'<span class="example-pill">Ejemplo</span>':''}</div>
          <div class="av-desc">${e(a.desc)}</div>
        </div>
      </div>
      ${contactCtaRow(a,`Hola, vi tu aviso "${a.title}" en MiCampeche.`)}
      <div class="av-foot">
        <span class="av-author">${e(a.author)}</span>
      </div>
    </div>
  `).join('');
  wireAdminRemove(el);
}
const ALERTAS_PAGE_SIZE=10;
let alertasExpanded=false;
function renderAlertas(){
  const el=document.getElementById('alert-list');
  const visible=alertasExpanded?ALERTAS:ALERTAS.slice(0,ALERTAS_PAGE_SIZE);
  const cards=visible.map(x=>{
    // One-line teaser: first paragraph only, hard-capped so the row stays
    // one line even before CSS truncation kicks in. Full text lives in the
    // detail modal.
    const firstLine=x.desc.split('\n')[0]||'';
    const preview=firstLine.slice(0,100);
    const truncated=x.desc.length>preview.length;
    return `
    <div class="alert-card ${x.cls}" role="button" tabindex="0" onclick="openAlertaDetail('${x.id}')" ${admRm('alertas',x.id,x.title||x.type)}>
      <div class="alert-thumb" style="background-image:url('${e(x.img)}')"></div>
      <div class="alert-body">
        <div class="alert-top"><span class="alert-type">${x.cls==='resolved'?'✓ Resuelto — ':''}${e(x.type)}</span><span class="alert-time">${x.time}</span></div>
        ${x.title?`<div class="alert-headline">${e(x.title)}</div>`:''}
        ${x.zone?`<div class="alert-zone">${e(x.zone)}</div>`:''}
        ${preview?`<div class="alert-preview">${e(preview)}${truncated?'…':''}</div>`:''}
      </div>
    </div>
  `}).join('');
  const more=(!alertasExpanded&&ALERTAS.length>ALERTAS_PAGE_SIZE)
    ?`<button class="menu-item" style="justify-content:center;margin-top:4px" onclick="showAllAlertas()">Ver más</button>`
    :'';
  el.innerHTML=cards+more;
  wireAdminRemove(el);
}
function showAllAlertas(){alertasExpanded=true;renderAlertas();}
/* Resident-facing detail modal — mirrors openProdView (a content card on a
   screen opening the shared #modal-bg), NOT openModerationDetail (which is
   admin-only and opened from inside an already-open modal, so it pushes a
   view). Single view: no mcModalPushView, so ✕ / backdrop / hardware-back
   closes it outright. */
function openAlertaDetail(id){
  const a=ALERTAS.find(x=>x.id===id);
  if(!a)return;
  document.getElementById('modal-title').textContent=a.type||'Alerta';
  document.getElementById('modal-body').innerHTML=`
    <div style="width:100%;height:150px;border-radius:var(--rs);background-size:cover;background-position:center;background-color:var(--paper2);background-image:url('${e(a.img)}');margin-bottom:12px"></div>
    ${a.cls==='resolved'?`<div class="alert-type" style="color:var(--palm);margin-bottom:8px">✓ Resuelto</div>`:''}
    ${a.title?`<div class="alert-headline" style="white-space:normal;margin-bottom:8px">${e(a.title)}</div>`:''}
    ${a.zone?`<div class="alert-zone" style="margin-bottom:10px">${e(a.zone)}</div>`:''}
    <div style="font-size:11px;color:var(--ink3);margin-bottom:12px">${a.time}</div>
    <div class="alert-desc">${e(a.desc)}</div>
    ${a.sourceUrl?`<a href="${e(a.sourceUrl)}" target="_blank" rel="noopener" class="menu-item" style="margin-top:16px;justify-content:center">${svgIco('external')}<span class="menu-item-lbl">Ver publicación original</span></a>`:''}
  `;
  document.getElementById('modal-bg').classList.add('on');
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
    // Must match public.evento_categories() in Supabase (a trigger enforces it; anything else is auto-classified).
    {k:'cat',lbl:'Categoría',type:'select',opts:['Música','Cultura','Exposición','Infantil y familiar','Comunidad','Deporte','Gastronomía','Mercado','Religioso','Educativo','Negocios y congresos','Otro']},
    {k:'date',lbl:'Fecha',type:'monthcal'},
    {k:'time',lbl:'Hora',type:'time'},
    {k:'loc',lbl:'Lugar',type:'text',ph:'Dirección o punto de referencia'},
    {k:'colonia',lbl:'Colonia',type:'colonia',ph:'Escribe tu colonia...'},
    {k:'price',lbl:'Precio de entrada',type:'text',ph:'Ej. Gratis, $150, $150–$300',note:'Opcional — déjalo en blanco si no aplica.'},
    {k:'website',lbl:'Sitio web o página del evento',type:'url',ph:'https://...',note:'Opcional — página oficial, boletos o red social del evento.'},
    {k:'phone',lbl:'Teléfono de contacto',type:'tel',ph:'981 000 0000',note:'Opcional — se muestra como botón de llamada y WhatsApp.'},
    {k:'photo',lbl:'Foto o cartel del evento',type:'imgupload'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Cuéntanos más...'},
    {k:'want_feature',lbl:'¿Quieres destacar tu evento?',type:'seg',opts:[['no','No, gracias'],['si',`Sí, destacar por $${EVENTO_FEATURE_FEE_MXN} MXN`]]},
    {k:'feature_start',lbl:'Elige tu ventana de 3 días',type:'featurecal',showIf:{field:'want_feature',val:'si'},note:'Hasta 4 eventos pueden estar destacados a la vez; se turnan cada hora para que todos tengan visibilidad pareja.'}
  ]},
  producto:{title:'Publicar un producto',fields:[
    {k:'name',lbl:'¿Qué vendes?',type:'text',ph:'Ej. Pastel de tres leches'},
    {k:'cat',lbl:'Categoría',type:'select',opts:['Comida/Bebida','Ropa','Hogar','Belleza','Electrónica','Mascotas','Deportes','Vehículos','Servicios','Otro']},
    {k:'item_condition',lbl:'Estado',type:'seg',opts:[['nuevo','Nuevo'],['usado','Usado']]},
    {k:'price',lbl:'Precio',type:'money',ph:'150'},
    {k:'featured',lbl:'Destacado',type:'seg',opts:[['no','No'],['si','Sí']],premiumOnly:true,note:'Aparece resaltado en Mercado. Tu negocio puede tener hasta 2 productos destacados o en descuento a la vez.'},
    {k:'discount_active',lbl:'Descuento',type:'seg',opts:[['no','No'],['si','Sí']],premiumOnly:true},
    {k:'discount_price',lbl:'Precio con descuento',type:'money',ph:'120',showIf:{field:'discount_active',val:'si'},note:'El precio de arriba se mostrará tachado; este es el nuevo precio.'},
    {k:'availability',lbl:'Disponibilidad',type:'seg',opts:[['ahora','Disponible ahora'],['pedido','Sobre pedido']]},
    {k:'lead_time',lbl:'¿Con cuánta anticipación?',type:'text',ph:'Ej. 2 días',showIf:{field:'availability',val:'pedido'}},
    {k:'fulfillment',lbl:'¿Cómo lo entregas?',type:'seg',opts:[['recoger','Recoger'],['entrega','Entrega a domicilio'],['ambos','Ambos']]},
    {k:'contact_methods',lbl:'¿Cómo quieres que te contacten?',type:'multi',opts:[['whatsapp','WhatsApp'],['llamada','Llamada'],['sms','Mensaje de texto']],def:[],note:'Elige al menos una — así sabemos cómo prefieres que te contacten.'},
    {k:'photo',lbl:'Fotos del producto',type:'imgupload-multi',max:5,note:'Puedes agregar hasta 5 fotos. La primera es la que se ve en la lista — usa buena luz y muestra bien lo que vendes.'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Detalles, tamaño, disponibilidad...'}
  ]},
  clasificado:{title:'Publicar en Clasificados',note:'Un artículo por persona. Todas las publicaciones se revisan antes de mostrarse a los demás.',fields:[
    {k:'name',lbl:'¿Qué vendes?',type:'text',ph:'Ej. Bicicleta usada'},
    {k:'cat',lbl:'Categoría',type:'select',opts:['Comida/Bebida','Ropa','Hogar','Belleza','Electrónica','Mascotas','Deportes','Vehículos','Servicios','Otro']},
    {k:'item_condition',lbl:'Estado',type:'seg',opts:[['nuevo','Nuevo'],['usado','Usado']]},
    {k:'price',lbl:'Precio',type:'money',ph:'150'},
    {k:'fulfillment',lbl:'¿Cómo lo entregas?',type:'seg',opts:[['recoger','Recoger'],['entrega','Entrega'],['ambos','Ambos']]},
    {k:'colonia',lbl:'Colonia',type:'colonia',ph:'Escribe tu colonia...'},
    {k:'contact_phone',lbl:'Tu número de contacto (WhatsApp)',type:'tel',ph:'981 000 0000',note:'Los interesados te contactarán a este número por los medios que elijas.'},
    {k:'contact_methods',lbl:'¿Cómo quieres que te contacten?',type:'multi',opts:[['whatsapp','WhatsApp'],['llamada','Llamada'],['sms','Mensaje de texto']],def:[],note:'Elige al menos una — así sabemos cómo prefieres que te contacten.'},
    {k:'photo',lbl:'Fotos del artículo',type:'imgupload-multi',max:5,note:'Puedes agregar hasta 5 fotos. La primera es la que se ve en la lista.'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Detalles, estado, disponibilidad...'}
  ]},
  mandadito:{title:'Registrarme como mandadito',note:'Revisamos cada registro antes de que aparezcas en el directorio. Al enviar este formulario te pediremos, por WhatsApp, una foto de tu identificación, una selfie, la placa de tu vehículo y tu licencia vigente — ten esas fotos a la mano.',fields:[
    {k:'vehicle_type',lbl:'¿Cómo te mueves?',type:'select',opts:['Motocicleta','Bicicleta','A pie','Auto']},
    {k:'photo',lbl:'Tu foto',type:'imgupload',note:'Que se vea tu cara centrada y de frente, de los hombros hacia arriba, con buena luz — así se ve bien en tu tarjeta aunque la recortemos.'},
    {k:'desc',lbl:'Cuéntale a la gente sobre ti (opcional)',type:'textarea',ph:'Cuánto tiempo llevas haciendo mandados, qué tipo de cosas puedes mover...'}
  ]},
  mascotas:{title:'Publicar en Mascotas',note:'Todas las publicaciones se revisan antes de mostrarse.',fields:[
    {k:'tipo',lbl:'¿Qué vas a publicar?',type:'seg',opts:[['adopcion','Adopción'],['perdido','Perdido'],['encontrado','Encontrado'],['campana','Campaña']]},
    {k:'adopt_note',type:'note',text:'Las adopciones son siempre gratuitas. No se permite vender animales: si piden dinero por el animal, la publicación se rechaza.',showIf:{field:'tipo',val:'adopcion'}},
    {k:'name',lbl:'Nombre o título',type:'text',ph:'Ej. Cachorro mestizo en adopción, Gato atigrado perdido, Campaña de esterilización'},
    {k:'species',lbl:'Especie',type:'seg',opts:[['perro','Perro'],['gato','Gato'],['otro','Otro']],showIf:{field:'tipo',val:['adopcion','perdido','encontrado']}},
    {k:'sex',lbl:'Sexo',type:'seg',opts:[['','No sé'],['macho','Macho'],['hembra','Hembra']],showIf:{field:'tipo',val:['adopcion','perdido','encontrado']}},
    {k:'age',lbl:'Edad (aprox.)',type:'text',ph:'Ej. 3 meses, 2 años',showIf:{field:'tipo',val:'adopcion'}},
    {k:'sterilized',lbl:'¿Está esterilizado?',type:'seg',opts:[['nose','No sé'],['si','Sí'],['no','No']],showIf:{field:'tipo',val:'adopcion'}},
    {k:'cdate',lbl:'Fecha de la campaña',type:'monthcal',showIf:{field:'tipo',val:'campana'}},
    {k:'loc',lbl:'Punto de referencia / lugar',type:'text',ph:'Ej. Cerca del parque, o dirección de la campaña',showIf:{field:'tipo',val:['perdido','encontrado','campana']}},
    {k:'colonia',lbl:'Colonia',type:'colonia',ph:'Escribe tu colonia...'},
    {k:'photo',lbl:'Fotos',type:'imgupload-multi',max:5,note:'Hasta 5 fotos. La primera es la que se ve en la lista.'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Carácter, vacunas, señas que ayuden a identificarlo, requisitos de la campaña...'},
    {k:'want_contact',lbl:'¿Dejar un número para que te contacten?',type:'seg',opts:[['si','Sí, que me contacten'],['no','No hace falta']]},
    {k:'contact_phone',lbl:'Tu número de contacto (WhatsApp)',type:'tel',ph:'981 000 0000',showIf:{field:'want_contact',val:'si'},note:'Quien lo vea te contactará por los medios que elijas.'},
    {k:'contact_methods',lbl:'¿Cómo quieres que te contacten?',type:'multi',opts:[['whatsapp','WhatsApp'],['llamada','Llamada'],['sms','Mensaje de texto']],def:[],note:'Elige al menos una — así sabemos cómo prefieres que te contacten.',showIf:{field:'want_contact',val:'si'}}
  ]},
  empleos:{title:'Publicar una vacante',fields:[
    {k:'title',lbl:'Puesto',type:'text',ph:'Ej. Mesero(a) con experiencia'},
    {k:'co',lbl:'Negocio (opcional)',type:'text',ph:'Ej. Repostería Tsuk Tun, o "restaurante concurrido en el Centro"'},
    {k:'pay',lbl:'Pago',type:'text',ph:'Ej. $350/día + propinas'},
    {k:'colonia',lbl:'Colonia',type:'colonia',ph:'Escribe tu colonia...'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Requisitos, horario...'},
    {k:'want_contact',lbl:'¿Dejar un número para que te contacten?',type:'seg',opts:[['si','Sí, que me contacten'],['no','En la descripción']]},
    {k:'contact_phone',lbl:'Número de contacto (WhatsApp)',type:'tel',ph:'981 000 0000',showIf:{field:'want_contact',val:'si'},note:'Quien busca trabajo te contactará por los medios que elijas.'},
    {k:'contact_methods',lbl:'¿Cómo quieres que te contacten?',type:'multi',opts:[['whatsapp','WhatsApp'],['llamada','Llamada'],['sms','Mensaje de texto']],def:[],note:'Elige al menos una — así sabemos cómo prefieres que te contacten.',showIf:{field:'want_contact',val:'si'}}
  ]},
  reportar:{title:'Reportar un problema',fields:[
    {k:'cat',lbl:'Tipo de problema',type:'select',opts:['Bache','Semáforo','Árbol caído','Alumbrado','Fuga de agua','Basura acumulada','Otro']},
    {k:'title',lbl:'Título breve',type:'text',ph:'Ej. Bache grande sobre Calle 10'},
    {k:'loc',lbl:'Ubicación',type:'text',ph:'Calle o punto de referencia'},
    {k:'colonia',lbl:'Colonia',type:'colonia',ph:'Escribe tu colonia...'},
    {k:'photo',lbl:'Foto del problema',type:'imgupload'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Cuéntanos más sobre el problema...'}
  ]},
  avisos:{title:'Publicar un aviso',note:'Un aviso por persona al día (los de Perdido y Encontrado no cuentan). Todas las publicaciones se revisan antes de mostrarse a los demás.',fields:[
    {k:'cat',lbl:'Tipo de aviso',type:'select',opts:['Comunidad','Seguridad','Perdido','Encontrado','Eventos vecinales','Otro']},
    {k:'colonia',lbl:'Colonia',type:'colonia',ph:'Escribe tu colonia...'},
    {k:'title',lbl:'Título breve',type:'text',ph:'Ej. Buscamos a un familiar'},
    {k:'photo',lbl:'Foto (opcional)',type:'imgupload'},
    {k:'desc',lbl:'Mensaje',type:'textarea',ph:'Cuenta los detalles a tus vecinos...'},
    {k:'anon',lbl:'¿Cómo lo firmas?',type:'seg',opts:[['no','Con mi nombre'],['si','Anónimo']]},
    {k:'want_contact',lbl:'¿Dejar un número para que te contacten?',type:'seg',opts:[['no','No hace falta'],['si','Sí, que me contacten']]},
    {k:'contact_phone',lbl:'Tu número de contacto (WhatsApp)',type:'tel',ph:'981 000 0000',showIf:{field:'want_contact',val:'si'},note:'Los vecinos te contactarán por los medios que elijas.'},
    {k:'contact_methods',lbl:'¿Cómo quieres que te contacten?',type:'multi',opts:[['whatsapp','WhatsApp'],['llamada','Llamada'],['sms','Mensaje de texto']],def:[],note:'Elige al menos una — así sabemos cómo prefieres que te contacten.',showIf:{field:'want_contact',val:'si'}}
  ]},
  oferta:{title:'Publicar una Oferta',note:'$99 MXN por espacio · 1 espacio disponible por día · reserva hasta con 2 semanas de anticipación. Cuentas Negocio (gratis) pueden tener 1 espacio reservado a la vez; cuentas Premium hasta 3 a la vez. Premium incluye tu primera oferta de cada ciclo sin costo.',fields:[
    {k:'item',lbl:'¿Qué vas a ofrecer?',type:'text',ph:'Ej. Pastel de tres leches entero'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Cuéntale a la gente qué incluye esta oferta...'},
    {k:'photo',lbl:'Foto del producto o servicio',type:'imgupload',note:'Usa buena luz y muestra bien lo que ofreces — no podrás editar esta oferta ni pedir un reembolso después de enviarla, así que revisa todo con cuidado antes de continuar.'},
    {k:'priceWas',lbl:'Precio normal',type:'money',ph:'200'},
    {k:'priceNow',lbl:'Precio con descuento',type:'money',ph:'150'},
    {k:'qty',lbl:'Cantidad disponible',type:'number',ph:'Ej. 10'},
    {k:'terms',lbl:'Condiciones (opcional)',type:'textarea',ph:'Ej. Válido de lunes a viernes, no aplica con otras promociones...'},
    {k:'slot',lbl:'Elige el día',type:'calendar'}
  ]},
  negocio_verificar:{title:'Verifica tu negocio',note:'Esta información se guarda en tu cuenta — no necesitas volver a escribirla en cada publicación.',fields:[
    {k:'name',lbl:'Nombre del negocio',type:'text',ph:'Ej. Repostería Tsuk Tun'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'¿Qué venden o qué servicio ofrecen?'},
    {k:'photo',lbl:'Logo o foto del negocio',type:'imgupload'},
    {k:'address',lbl:'Dirección',type:'text',ph:'Calle y número'},
    {k:'colonia',lbl:'Colonia',type:'colonia',ph:'Escribe tu colonia...'},
    {k:'phone',lbl:'Teléfono del negocio',type:'tel',ph:'981 000 0000'},
    {k:'payment_methods',lbl:'Métodos de pago que aceptas',type:'multi',opts:[['efectivo','Efectivo'],['transferencia','Transferencia'],['terminal','Terminal']],def:[]},
    {k:'delivers',lbl:'¿Entregas a domicilio?',type:'seg',opts:[['no','No'],['si','Sí']]},
    {k:'delivery_info',lbl:'Zonas y costo de entrega',type:'text',ph:'Ej. Centro y San Román · $30, gratis desde $300',showIf:{field:'delivers',val:'si'}},
    {k:'pickup_address',lbl:'Dirección para recoger',type:'text',ph:'Si es distinta a la dirección de tu negocio'},
    {k:'cat',lbl:'Categoría',type:'select',opts:['Comida/Bebida','Ropa','Hogar','Belleza','Electrónica','Mascotas','Deportes','Vehículos','Servicios','Otro']},
    {k:'hours',lbl:'Horario de atención',type:'text',ph:'Ej. Lun-Sáb 9am-8pm'},
    {k:'social',lbl:'Red social o sitio web',type:'text',ph:'Ej. instagram.com/tunegocio'},
    {k:'rfc',lbl:'RFC',type:'text',ph:''}
  ]}
};

let selectedSlotDate=null; // set by pickSlotDay(), read by submitPost() for kind==='oferta'
let editingPost=null; // {table,id} while the post form is in self-edit mode; set by openMyPostEdit() AFTER openPost() renders, read by submitPost()
let creatingAdditionalBusiness=false; // set by openAdditionalBusinessForm() AFTER openPost() renders, read by submitPost()'s negocio_verificar branch
let postBusinessOptions=[]; // this account's published businesses eligible for a new producto/oferta — set inside openPost() itself, just below
let selectedPostBusinessId=null; // which one the picker (if shown) currently has selected

async function openPost(kind){
  const form=POST_FORMS[kind];if(!form)return;
  editingPost=null; // any fresh form start clears a stale edit target; openMyPostEdit re-sets it after this returns
  creatingAdditionalBusiness=false; // same reasoning — openAdditionalBusinessForm re-sets it after this returns
  monthCalSelected={};monthCalView={}; // reset so a fresh form always starts on the current month with nothing picked; applyPostEditFill overwrites both for a self-edit
  // A real account is required for ANY write, and its phone must already
  // be verified — both enforced at the database layer too (is_verified_writer
  // RLS), not just here for UX. Comes first, before the business check
  // below, since verifying a business is itself a gated write.
  const acct=await MC.currentAccount();
  if(!runWriteGate(acct,kind))return;
  // Selling in Tienda or posting an Oferta requires a verified AND
  // admin-approved business — verification alone used to be enough
  // (instant self-serve), but now goes through the same moderation queue
  // as everything else, same as any other submission. An account can
  // now own more than one — postBusinessOptions/selectedPostBusinessId
  // (below) track which one this particular submission is for.
  postBusinessOptions=[];
  selectedPostBusinessId=null;
  if(kind==='producto'||kind==='oferta'){
    const owned=acct.businesses||[];
    if(!owned.length){openBusinessPrompt(kind);return;}
    postBusinessOptions=owned.filter(b=>b.status==='published');
    if(!postBusinessOptions.length){openBusinessStatusPrompt(acct.business||owned[0]);return;}
    const defaultBiz=postBusinessOptions.find(b=>b.is_primary)||postBusinessOptions[0];
    selectedPostBusinessId=defaultBiz.id;
  }
  // Refresh which days are actually booked right before showing the
  // calendar — bookedDates from initial load could already be stale by
  // the time someone opens this form.
  if(kind==='oferta')bookedDates=await MC.fetchBookedDates();
  if(kind==='eventos')featuredBookingCounts=computeFeatureDayCounts(await MC.fetchFeaturedBookings());
  document.getElementById('modal-title').textContent=form.title;
  let h='';
  if((kind==='producto'||kind==='oferta')&&postBusinessOptions.length>1){
    h+=`<div class="form-row" id="row-post-business">
      <label class="fl">¿Cuál negocio?</label>
      <div class="seg" id="pf-post-business">${postBusinessOptions.map((b,i)=>`<div class="seg-btn${b.id===selectedPostBusinessId?' on':''}" data-v="${b.id}" onclick="segPick(this);selectedPostBusinessId=this.dataset.v;const _b=postBusinessOptions.find(x=>String(x.id)===this.dataset.v);if('${kind}'==='producto'){applyProductoBusinessHints(_b);}if('${kind}'==='oferta'){applyOfertaBusinessHints(_b);}">${e(b.business_name)}</div>`).join('')}</div>
    </div>`;
  }
  form.fields.forEach(f=>{
    if(f.type==='note'){h+=`<div class="field-note" id="row-${f.k}">${f.text||''}</div>`;return;}
    h+=`<div class="form-row" id="row-${f.k}"><label class="fl">${f.lbl}</label>`;
    if(f.type==='textarea')h+=`<textarea class="ft" id="pf-${f.k}" placeholder="${f.ph||''}"></textarea>`;
    else if(f.type==='select')h+=`<select class="fs" id="pf-${f.k}"><option value="">Selecciona...</option>${f.opts.map(o=>`<option>${o}</option>`).join('')}</select>`;
    else if(f.type==='seg')h+=`<div class="seg" id="pf-${f.k}">${f.opts.map((o,i)=>`<div class="seg-btn${i===0?' on':''}" data-v="${o[0]}" onclick="segPick(this)">${o[1]}</div>`).join('')}</div>`;
    else if(f.type==='multi')h+=`<div class="fmulti" id="pf-${f.k}">${f.opts.map(o=>`<button type="button" class="mchip${(f.def||[]).includes(o[0])?' on':''}" data-v="${o[0]}" onclick="multiPick(this)">${o[1]}</button>`).join('')}</div>`;
    else if(f.type==='calendar')h+=`<div id="pf-${f.k}">${slotCalendarHtml()}</div>`;
    else if(f.type==='featurecal')h+=`<div id="pf-${f.k}">${featureCalendarHtml()}</div>`;
    else if(f.type==='monthcal'){
      monthCalView[f.k]=monthCalView[f.k]||{year:new Date().getFullYear(),month:new Date().getMonth()};
      h+=`<div id="pf-${f.k}-cal">${monthCalHtml(f.k)}</div>`;
    }
    else if(f.type==='money')h+=`<div class="fi-money-wrap"><span class="fi-money-prefix">$</span><input class="fi fi-money" id="pf-${f.k}" type="text" inputmode="decimal" placeholder="${f.ph||''}"></div>`;
    else if(f.type==='colonia')h+=`<input class="fi" id="pf-${f.k}" type="text" list="colonia-datalist" autocomplete="off" placeholder="${f.ph||'Escribe tu colonia...'}">`;
    else if(f.type==='imgupload-multi')h+=`<div id="pf-${f.k}-wrap"></div>`;
    else if(f.type==='imgupload')h+=`<div id="pf-${f.k}-wrap"></div>`;
    else h+=`<input class="fi" id="pf-${f.k}" type="${f.type}" placeholder="${f.ph||''}">`;
    if(f.note)h+=`<div class="field-note">${f.note}</div>`;
    h+=`</div>`;
  });
  h+=`<div class="submit-note" id="post-submit-note">${svgIco('alertas')}${form.note||'Todas las publicaciones se revisan antes de mostrarse a los demás, para mantener MiCampeche libre de spam.'}</div>`;
  h+=`<button class="submit-btn" id="post-submit-btn" onclick="submitPost('${kind}')"${kind==='oferta'?' disabled style="opacity:.4;cursor:default"':''}>${kind==='oferta'?'Selecciona un día para continuar':'Enviar para revisión'}</button>`;
  document.getElementById('modal-body').innerHTML=h;
  document.getElementById('modal-bg').classList.add('on');
  selectedSlotDate=null;
  selectedFeatureStart=null;
  uploadedImageUrls={};
  uploadedImageUrlsMulti={};
  uploadedImageUrlsMultiMax={};
  form.fields.forEach(f=>{
    if(f.type==='imgupload')renderPhotoUploadButton(f.k);
    else if(f.type==='imgupload-multi'){uploadedImageUrlsMultiMax[f.k]=f.max||5;uploadedImageUrlsMulti[f.k]=[];renderPhotoUploadButtonMulti(f.k);}
  });
  applyConditionalRows(form);
  if(kind==='producto'){
    applyProductoBusinessHints(postBusinessOptions.find(b=>String(b.id)===String(selectedPostBusinessId)));
  }
  if(kind==='oferta'){
    applyOfertaBusinessHints(postBusinessOptions.find(b=>String(b.id)===String(selectedPostBusinessId)));
  }
  if(kind==='clasificado'||kind==='avisos'||kind==='mascotas'||kind==='empleos'){
    // Prefill the contact number from the account so a signed-in poster
    // doesn't retype it (they can still overwrite it for this one post).
    // For avisos/mascotas/empleos the "¿dejar un número?" toggle still
    // decides whether it's actually attached; this only pre-fills the field.
    if(acct.signedIn&&acct.phone){
      const cp=document.getElementById('pf-contact_phone');
      if(cp&&!cp.value)cp.value=acct.phone;
    }
  }
}
/* A business can only offer fulfillment methods it actually supports —
   disable the delivery options if it doesn't deliver, and point back to
   its profile to change that. Buyers also reach a business on its own
   business line, not a per-post number. Called once at initial render
   AND again from the business-picker's onclick above, so switching
   which business a producto is for keeps these hints in sync rather
   than showing stale info from whichever business was selected first. */
function applyProductoBusinessHints(biz){
  document.querySelectorAll('#pf-fulfillment .seg-btn').forEach(b=>b.classList.remove('seg-btn-off'));
  const existingFrNote=document.querySelector('#row-fulfillment .field-note');
  if(existingFrNote)existingFrNote.remove();
  if(biz&&!biz.delivers){
    document.querySelectorAll('#pf-fulfillment .seg-btn').forEach(b=>{
      if(b.dataset.v==='entrega'||b.dataset.v==='ambos')b.classList.add('seg-btn-off');
    });
    const fr=document.getElementById('row-fulfillment');
    if(fr)fr.insertAdjacentHTML('beforeend','<div class="field-note">Activa la entrega a domicilio en el perfil de tu negocio para ofrecerla aquí.</div>');
  }
  const cr=document.getElementById('row-contact_methods');
  if(cr){
    const existingCrNote=cr.querySelector('.field-note');
    if(existingCrNote)existingCrNote.remove();
    if(biz&&biz.phone)cr.insertAdjacentHTML('beforeend',`<div class="field-note">Los clientes te contactarán al número de tu negocio: ${e(biz.phone)}.</div>`);
  }
  const isPremium=!!(biz&&biz.is_premium);
  ['row-featured','row-discount_active','row-discount_price'].forEach(id=>{
    const row=document.getElementById(id);
    if(row)row.style.display=isPremium?'':'none';
  });
  if(!isPremium){
    // Force both toggles back to "No" when hidden, so a business that
    // loses Premium mid-edit (or switches to a non-Premium business in a
    // multi-business account) can't silently submit stale si/si values.
    ['featured','discount_active'].forEach(k=>{
      const noBtn=document.querySelector(`#pf-${k} .seg-btn[data-v="no"]`);
      if(noBtn)segPick(noBtn);
    });
  }
}
/* Oferta's equivalent of applyProductoBusinessHints — updates the
   submit-note to reflect real eligibility for the SELECTED business
   whenever it changes (initial render and the picker's onclick above).
   Async because it needs a live DB answer; fires and forgets rather than
   blocking the click handler, since this is informational text, not a
   gate on anything. */
async function applyOfertaBusinessHints(biz){
  const noteEl=document.getElementById('post-submit-note');
  if(!noteEl)return;
  const defaultNote=svgIco('alertas')+POST_FORMS.oferta.note;
  if(!biz||!biz.is_premium){noteEl.innerHTML=defaultNote;return;}
  const free=await MC.checkFreeOfertaEligible(biz.id);
  noteEl.innerHTML=free
    ? svgIco('alertas')+'Esta oferta va incluida con tu Premium este ciclo — sin costo. La siguiente en este mismo ciclo ya sigue el precio normal ($99 MXN).'
    : defaultNote;
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
/* ══════════════ FEATURE CALENDAR (the 'featurecal' field type) ══════════════
   Like slotCalendarHtml (Ofertas), but picks a connected 3-day WINDOW
   instead of a single day, and "full" means picking that day as the
   START would push some day in the 3-day span to the 4-booking cap —
   not a simple per-day exact match. featuredBookingCounts is a ds->count
   map built by computeFeatureDayCounts() from MC.fetchFeaturedBookings(),
   refreshed each time the form opens. */
function computeFeatureDayCounts(bookings){
  const counts={};
  bookings.forEach(b=>{
    const end=new Date(b.end_date+'T12:00:00');
    for(let d=new Date(b.start_date+'T12:00:00');d<=end;d.setDate(d.getDate()+1)){
      const ds=dToDs(d);
      counts[ds]=(counts[ds]||0)+1;
    }
  });
  return counts;
}
function featureWindowWouldBeFull(startDs){
  const start=new Date(startDs+'T12:00:00');
  for(let i=0;i<3;i++){
    const d=new Date(start);d.setDate(d.getDate()+i);
    if((featuredBookingCounts[dToDs(d)]||0)>=4)return true;
  }
  return false;
}
function featureCalendarHtml(){
  const today=new Date();
  const days=[];
  for(let i=0;i<SLOT_WINDOW_DAYS;i++){
    const d=new Date(today);d.setDate(d.getDate()+i);
    days.push(d);
  }
  const dayNames=['dom','lun','mar','mié','jue','vie','sáb'];
  const monthNames=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  let h=`<div class="slot-cal-note">${svgIco('clock')}Ventana de 3 días · $${EVENTO_FEATURE_FEE_MXN} MXN</div><div class="slot-cal-grid">`;
  days.forEach(d=>{
    const ds=dToDs(d);
    const isFull=featureWindowWouldBeFull(ds);
    const isToday=ds===dToDs(today);
    let selCls='';
    if(selectedFeatureStart){
      const start=new Date(selectedFeatureStart+'T12:00:00');
      const diffDays=Math.round((d-start)/86400000);
      if(diffDays===0)selCls=' sel';
      else if(diffDays===1||diffDays===2)selCls=' sel-mid';
    }
    h+=`<div class="slot-day${isFull?' full':''}${selCls}" data-ds="${ds}" onclick="pickFeatureDay(this,${isFull})">
      <div class="slot-day-dow">${dayNames[d.getDay()]}${isToday?' · hoy':''}</div>
      <div class="slot-day-num">${d.getDate()}</div>
      <div class="slot-day-mon">${monthNames[d.getMonth()]}</div>
      <div class="slot-day-status">${isFull?'Ocupado':'Libre'}</div>
    </div>`;
  });
  h+=`</div><div class="slot-cal-selected" id="feature-cal-selected"></div>`;
  return h;
}
function pickFeatureDay(el,isFull){
  if(isFull)return; // unlike Ofertas there's no waitlist concept here — just pick a different window
  selectedFeatureStart=el.dataset.ds;
  document.getElementById(el.closest('.form-row').id).innerHTML=featureCalendarHtml();
  const start=new Date(selectedFeatureStart+'T12:00:00');
  const end=new Date(start);end.setDate(end.getDate()+2);
  const monthNamesLong=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const label=`${start.getDate()} al ${end.getDate()} de ${monthNamesLong[end.getMonth()]}`;
  document.getElementById('feature-cal-selected').innerHTML=`<div class="slot-cal-ok-msg">${svgIco('checkBadge')}Destacarás tu evento del ${label} por $${EVENTO_FEATURE_FEE_MXN} MXN.</div>`;
}

/* ══════════════ MANDADITOS BOOST (7-day / cap-2 / $99, with waitlist) ══════════════
   Mirrors featureCalendarHtml exactly — just a 7-day window, cap 2, and
   the Ofertas-style waitlist behavior (join a list when full) rather than
   Evento Destacado's "pick a different window, no waitlist". */
let mandaditoBoostCounts={};
let selectedMandaditoBoostStart=null;
function computeMandaditoBoostDayCounts(bookings){
  const counts={};
  bookings.forEach(b=>{
    const end=new Date(b.end_date+'T12:00:00');
    for(let d=new Date(b.start_date+'T12:00:00');d<=end;d.setDate(d.getDate()+1)){
      const ds=dToDs(d);
      counts[ds]=(counts[ds]||0)+1;
    }
  });
  return counts;
}
function mandaditoBoostWindowWouldBeFull(startDs){
  const start=new Date(startDs+'T12:00:00');
  for(let i=0;i<7;i++){
    const d=new Date(start);d.setDate(d.getDate()+i);
    if((mandaditoBoostCounts[dToDs(d)]||0)>=2)return true;
  }
  return false;
}
function mandaditoBoostCalendarHtml(){
  const today=new Date();
  const days=[];
  for(let i=0;i<SLOT_WINDOW_DAYS;i++){
    const d=new Date(today);d.setDate(d.getDate()+i);
    days.push(d);
  }
  const dayNames=['dom','lun','mar','mié','jue','vie','sáb'];
  const monthNames=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  let h=`<div class="slot-cal-note">${svgIco('clock')}Ventana de 7 días · $${MANDADITO_BOOST_FEE_MXN} MXN</div><div class="slot-cal-grid">`;
  days.forEach(d=>{
    const ds=dToDs(d);
    const isFull=mandaditoBoostWindowWouldBeFull(ds);
    const isToday=ds===dToDs(today);
    h+=`<div class="slot-day${isFull?' full':''}" data-ds="${ds}" onclick="pickMandaditoBoostDay(this,${isFull})">
      <div class="slot-day-dow">${dayNames[d.getDay()]}${isToday?' · hoy':''}</div>
      <div class="slot-day-num">${d.getDate()}</div>
      <div class="slot-day-mon">${monthNames[d.getMonth()]}</div>
      <div class="slot-day-status">${isFull?'Ocupado':'Libre'}</div>
    </div>`;
  });
  h+=`</div><div class="slot-cal-selected" id="mandadito-boost-selected"></div>`;
  return h;
}
function pickMandaditoBoostDay(el,isFull){
  document.querySelectorAll('#mandadito-boost-cal .slot-day').forEach(d=>d.classList.remove('sel'));
  el.classList.add('sel');
  const ds=el.dataset.ds;
  selectedMandaditoBoostStart=ds;
  const start=new Date(ds+'T12:00:00');
  const end=new Date(start);end.setDate(end.getDate()+6);
  const monthNamesLong=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const label=`${start.getDate()} al ${end.getDate()} de ${monthNamesLong[end.getMonth()]}`;
  const sel=document.getElementById('mandadito-boost-selected');
  if(isFull){
    sel.innerHTML=`<div class="slot-cal-full-msg">${svgIco('clock')}Esa semana ya está ocupada. Puedes unirte a la lista de espera y te avisamos si se libera.</div>
      <button class="submit-btn" onclick="confirmMandaditoBoost(true)">Unirme a la lista de espera</button>`;
  } else {
    sel.innerHTML=`<div class="slot-cal-ok-msg">${svgIco('checkBadge')}Impulsarás tu perfil del ${label} por $${MANDADITO_BOOST_FEE_MXN} MXN.</div>
      <button class="submit-btn" onclick="confirmMandaditoBoost(false)">Pagar $${MANDADITO_BOOST_FEE_MXN} e impulsar</button>`;
  }
}
async function confirmMandaditoBoost(isFull){
  if(!selectedMandaditoBoostStart)return;
  // MC.currentAccount() doesn't carry the mandadito profile (only the
  // account-view's own Promise.all does) — look it up directly here.
  const mine=await MC.myMandadito();
  if(!mine){toast('No encontramos tu perfil de mandadito.');return;}
  if(isFull){
    const {error}=await MC.joinMandaditoBoostWaitlist(mine.id,selectedMandaditoBoostStart);
    if(error){toast(pgErrorToast(error,'No se pudo unir a la lista de espera.'));return;}
    closeModal();
    toast('Estás en la lista de espera — te avisaremos ✓');
    return;
  }
  const acct=await MC.currentAccount();
  if(acct.isAdmin){
    const {error}=await MC.submitMandaditoBoost(mine.id,selectedMandaditoBoostStart);
    if(error){toast(pgErrorToast(error,'No se pudo impulsar.'));return;}
    closeModal();
    toast('Impulsado sin pago (cuenta admin) ✓');
    return;
  }
  sessionStorage.setItem('mc_pending_mandadito_boost',JSON.stringify({mandaditoId:mine.id,startDs:selectedMandaditoBoostStart}));
  window.location.href=STRIPE_LINK_MANDADITO_BOOST;
}
async function openMandaditoBoost(){
  if(document.getElementById('modal-bg').classList.contains('on'))mcModalPushView('account');
  document.getElementById('modal-title').textContent='Impulsar mi perfil';
  document.getElementById('modal-body').innerHTML=`<div style="padding:44px 0;text-align:center;color:var(--ink3);font-size:13px">Cargando…</div>`;
  document.getElementById('modal-bg').classList.add('on');
  const bookings=await MC.fetchMandaditoBoosts();
  mandaditoBoostCounts=computeMandaditoBoostDayCounts(bookings);
  selectedMandaditoBoostStart=null;
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--ink3);font-size:13px;line-height:1.5;margin-bottom:10px">Tu perfil aparece primero en el directorio de Mandaditos durante 7 días. Solo hay 2 espacios disponibles a la vez — si tu semana ya está ocupada, puedes unirte a la lista de espera.</div>
    <div id="mandadito-boost-cal">${mandaditoBoostCalendarHtml()}</div>
  `;
}

/* ══════════════ MONTH CALENDAR (the 'monthcal' field type) ══════════════
   Unlike slotCalendarHtml() (Ofertas' rolling-future-only, occupied/free
   day picker), this is a real month-grid with prev/next navigation and
   NO availability concept — every day is selectable, including the past.
   monthCalView tracks which month is currently displayed per field key;
   monthCalSelected tracks the picked date per field key. Both reset to
   defaults at the top of openPost() and are overwritten by
   applyPostEditFill() for a self-edit. */
let monthCalView={};
let monthCalSelected={};
const CAMPECHE_COLONIAS=["18 de Marzo","20 de Noviembre","2da Ampliación Kalá","4 Caminos","Adolfo López Mateos (SUTERM)","Ah-kim-pech","Alameda","Altamira","Altavista","Ampliación Ciudad Concordia","Ampliación Esperanza","Ampliación Invasión Esperanza","Ampliación Jardines","Ampliación Josefa Ortiz de Domínguez","Ampliación Kalá","Ampliación Polvorín I","Ampliación Polvorín II","Ampliación San Antonio","Ampliación San Rafael","Aviación","Belén I","Belén II","Bellavista","Bello Horizonte","Benito Juárez","Bicentenario I","Bicentenario II","Bosques de Campeche","Buenavista","Buenos Aires","Bugambilias","Burócratas Federales (San Cayetano)","Burócratas Pensiones","Caminero","Camino Real","Campeche 1","Candelaria","Caribe","Casa Blanca","Centro SCT Campeche","Cerro de La Eminencia","Ciudad Concordia","Ciudad Militar","Cocotero de las Palmas","Colinas del Sur","Colonial Campeche","Colonial Campeche Sección Maquiladora","Colonial Campeche Sección Maquiladora II","Colonial Campeche Sección Maquiladora III","Colonia México","Cuatro Caminos 2da Ampliación","Cumbres I y II","Diana Laura","Dzarbay","Eduardo J. Lavalle Urbina","El Carmelo","El Doral","El Polvorín","El Vergel","Elvia María Pérez de González","Emiliano Zapata","Ernesto Zedillo","Esmeralda I","Esmeralda II","Esperanza","Fátima","Fénix","Ferrocarrilera","Fidel Velázquez","Flor de Limón","Flor de Liz","Fracciorama 2000","Girasoles","Granjas","Guadalajara","Guadalupe","Guadalupe Victoria","Hacienda Real Campeche","Hacienda San Antonio","Hacienda Santa María","Héroe de Nacozari","Héroes de Chapultepec (FOVI)","Hollywood","Huanal","Ignacio Zaragoza","Independencia","Infonavit Samula","Insurgentes","Invasión Esperanza","Invasión San Arturo","Jardines","Jardines del Pedregal","Josefa Ortiz de Domínguez","Justicia Social","Justo Sierra Méndez I y II","Kalá","Kalá II","Kaniste","La Ermita","La Huerta","La Paz","Las Arboledas","Las Campanillas","Las Flores","Las Quintas","Las Rosas","La Vista","Lazareto","Lázaro Cárdenas","Leovigildo Gómez","Lindavista C.T.M.","Lomas","Lomas de las Flores","Lomas de las Flores II","Lomas del Castillo","Lomas Delicias","Lomas del Polvorín","Lomas de San Rafael","Lomas de Zaragoza","Los Álamos","Los Cedros","Los Laureles","Los Reyes","Los Sauces","Luis Donaldo Colosio","Mártires de Río Blanco","Miguel Hidalgo","Minas","Mirador","Miramar","Montebello","Montecristo","Monte Verde","Morelos I","Morelos II","Morelos III","Multunchac","Murallas FSTSE","Nachi Cocom","Naval Campeche III","Nueva Era","Pablo García","Palma Real","Palmas I","Palmas II","Palmas III","Parque Residencial La Noria","Paseo de Campeche","Peña","Prado","Presidentes de México","Privada Exhacienda Kalá","Privada Guadalupana","Privada Narciso Mendoza","Privada Residencial Colonial","Quinta de los Españoles","Quinta Hermosa","Ramón Espínola Blanco I","Ramón Espínola Blanco II","Ramón Espínola Blanco III","Reforma","Reforma Agraria","Residencial Bugambilias","Residencial Campestre","Residencial del Bosque","Residencial Delicias","Residencial La Arboleda","Residencial La Hacienda","Residencial Los Almendros","Residencial Pedregal I","Residencial Pedregal II","Residencial Pedregal III","Residencial Resurgimiento","Residencial San Rafael","Revolución","Rinconada del Valle","Rinconada Samula","Samula","San Andrés","San Antonio","San Arturo","San Caralampio","San Francisco","San Francisco de Campeche Centro","San Joaquín","San José","San José el Alto","San Miguel","San Rafael","San Román","Santa Ana","Santa Bárbara I y II","Santa Cecilia","Santa Lucía","Sascalum","Siglo XXI","Solidaridad Nacional","Solidaridad Urbana","Sotavento","Tabachines","Tacubaya","Tepeyac","Terranova","Tomás Aznar","Tula","Tula II","Tula III","Tula IV","Unidad y Esperanza","Unidad y Trabajo Plan-Chac","Valle del Sol","Valle Dorado","Vicente Guerrero","Villa Dalias","Villa del Río","Villa Jazmín","Villa Laureles","Villa Laureles II","Villa Luisa","Villamar","Villa Mercedes","Villareal","Villas de Ah-kim-Pech","Villas de Kalá","Villas de Monte Real","Villas de Samula","Villas la Hacienda","Villas Residencial (Ix-Lol-Be)","Villas Universidad","Villa Turquesa","Vista Hermosa","VIVAH","Viveros"];
const MCAL_MONTHS_ES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const MCAL_DOW_ES=['D','L','M','M','J','V','S'];
function monthCalHtml(fieldKey){
  const v=monthCalView[fieldKey];
  const daysInMonth=new Date(v.year,v.month+1,0).getDate();
  const leadBlanks=new Date(v.year,v.month,1).getDay();
  let cells='';
  for(let i=0;i<leadBlanks;i++)cells+=`<div class="mcal-day empty"></div>`;
  for(let d=1;d<=daysInMonth;d++){
    const ds=`${v.year}-${String(v.month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isToday=ds===TODAY_DS;
    const isSel=monthCalSelected[fieldKey]===ds;
    cells+=`<div class="mcal-day${isToday?' today':''}${isSel?' sel':''}" onclick="pickMonthCalDay('${fieldKey}','${ds}')">${d}</div>`;
  }
  return `
    <div class="mcal-wrap">
      <div class="mcal-hdr">
        <button type="button" class="mcal-nav mcal-prev" onclick="shiftMonthCal('${fieldKey}',-1)">${svgIco('chevronR')}</button>
        <span class="mcal-label">${MCAL_MONTHS_ES[v.month]} ${v.year}</span>
        <button type="button" class="mcal-nav" onclick="shiftMonthCal('${fieldKey}',1)">${svgIco('chevronR')}</button>
      </div>
      <div class="mcal-dow">${MCAL_DOW_ES.map(d=>`<span>${d}</span>`).join('')}</div>
      <div class="mcal-grid">${cells}</div>
    </div>
  `;
}
function shiftMonthCal(fieldKey,delta){
  const v=monthCalView[fieldKey];
  let m=v.month+delta,y=v.year;
  if(m<0){m=11;y--;} else if(m>11){m=0;y++;}
  monthCalView[fieldKey]={year:y,month:m};
  document.getElementById(`pf-${fieldKey}-cal`).innerHTML=monthCalHtml(fieldKey);
}
function pickMonthCalDay(fieldKey,ds){
  monthCalSelected[fieldKey]=ds;
  document.getElementById(`pf-${fieldKey}-cal`).innerHTML=monthCalHtml(fieldKey);
}
function segPick(el){
  if(el.classList.contains('seg-btn-off'))return;
  el.parentElement.querySelectorAll('.seg-btn').forEach(b=>b.classList.remove('on'));
  el.classList.add('on');
}
/* Multi-select chips (payment_methods, contact_methods) — just a visual
   toggle; submitPost() reads the .on set into an array. */
function multiPick(el){el.classList.toggle('on');}

/* Rows flagged with showIf:{field,val} appear only while the controlling
   seg holds that value (val may be a single value or an array of values),
   and re-sync whenever it changes. Safe to call for any form — a no-op
   when nothing is conditional. */
function applyConditionalRows(form){
  const conds=(form.fields||[]).filter(f=>f.showIf);
  if(!conds.length)return;
  const sync=()=>conds.forEach(f=>{
    const on=document.querySelector(`#pf-${f.showIf.field} .seg-btn.on`);
    const row=document.getElementById('row-'+f.k);
    const vals=[].concat(f.showIf.val);
    if(row)row.style.display=(on&&vals.includes(on.dataset.v))?'':'none';
  });
  sync();
  [...new Set(conds.map(f=>f.showIf.field))].forEach(fk=>{
    const seg=document.getElementById('pf-'+fk);
    if(seg)seg.addEventListener('click',sync);
  });
}
function digitsOnly(p){return String(p||'').replace(/\D/g,'');}

/* Direct WhatsApp / call / SMS buttons from a phone + the channels the
   poster opted into ('whatsapp' | 'llamada' | 'sms' — same vocabulary as
   Tienda's contact_methods). Inline pill style, shared by the Avisos /
   Empleos / Mascotas cards. Returns '' when there's no usable number or no
   selected method, so callers can fall back to the legacy contact_info. */
function contactCtaButtons(phone,methods,messageText){
  const num=digitsOnly(phone);
  const intl=num?(num.length===10?'52'+num:num):'';
  const ms=Array.isArray(methods)?methods:[];
  if(!intl||!ms.length)return '';
  const msg=contactMsgParam(messageText||'Hola, te contacto desde MiCampeche.');
  const secondary='style="background:var(--paper2);color:var(--ink)"';
  let h='';
  if(ms.includes('whatsapp'))h+=`<a class="av-contact-btn" href="javascript:void(0)" onclick="event.preventDefault();guardedContact('https://wa.me/${intl}?text=${msg}')">${svgIco('message')}WhatsApp</a>`;
  if(ms.includes('llamada'))h+=`<a class="av-contact-btn" ${secondary} href="javascript:void(0)" onclick="event.preventDefault();guardedContact('tel:+${intl}')">${svgIco('phone')}Llamar</a>`;
  if(ms.includes('sms'))h+=`<a class="av-contact-btn" ${secondary} href="javascript:void(0)" onclick="event.preventDefault();guardedContact('sms:+${intl}')">${svgIco('message')}SMS</a>`;
  return h;
}
/* Full contact block for a card: the method buttons when the poster set
   them, otherwise the legacy single "Llamar" button for pre-feature posts
   that only have a plain contact_info string. '' when neither exists. */
function contactCtaRow(x,messageText){
  const btns=contactCtaButtons(x.contactPhone,x.contactMethods,messageText);
  if(btns)return `<div class="contact-cta-row">${btns}</div>`;
  if(x.contact)return `<div class="contact-cta-row"><a class="av-contact-btn" href="javascript:void(0)" onclick="event.preventDefault();guardedContact('${telHref(x.contact)}')">${svgIco('phone')}Llamar</a></div>`;
  return '';
}

/* ══════════════ MODAL VIEW STACK ══════════════
   The single #modal-bg is reused for deeply nested views — e.g. Tu cuenta
   → Pendiente list → item review → motivo del rechazo. Without a stack the
   ✕, the backdrop, and the hardware back button all jump straight out to
   the home screen. Each "go deeper" call records how to rebuild the view
   it's leaving; mcModalBack() rebuilds the one beneath (optionally skipping
   intermediate levels by key), and only closes the modal outright when
   there's nothing left under it. Modals that are a single view (post
   forms, product view, …) never push, so ✕ closes them as before. */
let mcModalStack=[];
function mcModalSnap(){
  const t=document.getElementById('modal-title').textContent;
  const h=document.getElementById('modal-body').innerHTML;
  return ()=>{
    document.getElementById('modal-title').textContent=t;
    document.getElementById('modal-body').innerHTML=h;
  };
}
const MC_MODAL_LIVE_REFRESH={
  // Screens that should always re-fetch live when backed into, rather than
  // replaying a cached snapshot — because something nested inside them
  // (confirming an oferta sale, editing/discarding a post, resolving a
  // Pendiente item, etc.) can change counts/badges they display.
  account:()=>openAccount(),
  bizProfile:()=>refreshBusinessProfile()
};
function mcModalPushView(key,customRestore){
  mcModalStack.push({key,restore:customRestore||MC_MODAL_LIVE_REFRESH[key]||mcModalSnap()});
}
// No targetKey: pop one level (✕ / backdrop / hardware back), closing the
// modal when that was the last. targetKey: pop back to that named level,
// dropping everything above it — and do nothing if it isn't on the stack
// (the caller is already at that level, e.g. an inline list action).
function mcModalBack(targetKey){
  if(targetKey){
    const i=mcModalStack.map(x=>x.key).lastIndexOf(targetKey);
    if(i<0)return;
    const entry=mcModalStack[i];
    mcModalStack.length=i;
    entry.restore();
  }else if(mcModalStack.length){
    mcModalStack.pop().restore();
  }else{
    closeModal();
    return;
  }
  mcSyncBackTrap();
}
function closeModal(){mcModalStack=[];document.getElementById('modal-bg').classList.remove('on');mcSyncBackTrap();}

/* ══════════════ ACCOUNT (login / signup / signed-in view) ══════════════
   Reuses the same #modal-bg/#modal-body infrastructure as the content
   submission forms above — same visual language, no new UI invented.
   Every visitor already has an anonymous session; signing up upgrades
   that SAME session in place (see MC.signUp), so nothing already
   submitted gets orphaned. */

// Mexico first (the app's actual audience + the default), then the rest
// of the Americas (diaspora/family contact is the realistic use case for
// most non-Mexico signups here), then a broader set of other countries.
const COUNTRY_CODES=[
  ['MX','México','52'],
  ['US','Estados Unidos','1'],
  ['CA','Canadá','1'],
  ['GT','Guatemala','502'],
  ['BZ','Belice','501'],
  ['HN','Honduras','504'],
  ['SV','El Salvador','503'],
  ['NI','Nicaragua','505'],
  ['CR','Costa Rica','506'],
  ['PA','Panamá','507'],
  ['CU','Cuba','53'],
  ['DO','República Dominicana','1'],
  ['PR','Puerto Rico','1'],
  ['CO','Colombia','57'],
  ['VE','Venezuela','58'],
  ['EC','Ecuador','593'],
  ['PE','Perú','51'],
  ['BO','Bolivia','591'],
  ['CL','Chile','56'],
  ['AR','Argentina','54'],
  ['UY','Uruguay','598'],
  ['PY','Paraguay','595'],
  ['BR','Brasil','55'],
  ['ES','España','34'],
  ['FR','Francia','33'],
  ['DE','Alemania','49'],
  ['IT','Italia','39'],
  ['GB','Reino Unido','44'],
  ['PT','Portugal','351'],
  ['NL','Países Bajos','31'],
  ['BE','Bélgica','32'],
  ['CH','Suiza','41'],
  ['IE','Irlanda','353'],
  ['AU','Australia','61'],
  ['NZ','Nueva Zelanda','64'],
  ['JP','Japón','81'],
  ['KR','Corea del Sur','82'],
  ['CN','China','86'],
  ['IN','India','91'],
  ['PH','Filipinas','63'],
  ['ZA','Sudáfrica','27'],
  ['IL','Israel','972'],
  ['AE','Emiratos Árabes Unidos','971']
];
let accountMode='login';
let accountViewSeq=0;
async function openAccount(){
  // Paint the modal frame immediately — the fetches below take a moment on
  // mobile, and a blank pause right after tapping reads as broken.
  const myTurn=++accountViewSeq;
  document.getElementById('modal-title').textContent='Tu cuenta';
  document.getElementById('modal-body').innerHTML='<div style="padding:44px 0;text-align:center;color:var(--ink3);font-size:13px">Cargando…</div>';
  document.getElementById('modal-bg').classList.add('on');

  const acct=await MC.currentAccount();
  if(myTurn!==accountViewSeq)return; // a newer openAccount() superseded this one
  if(!acct.signedIn){accountMode='login';renderAccountForm();return;}

  // Render the account view now; the rejected-submissions list (a query
  // per content table) and, for admins, the Pendiente count load after
  // and re-render when they land, rather than holding the view hostage.
  renderAccountSignedIn(acct);
  Promise.all([
    MC.fetchMyRejections(),
    MC.fetchMyActiveOfertas(),
    MC.myMandadito(),
    acct.isAdmin?MC.fetchPendingCount():Promise.resolve(undefined),
    acct.isAdmin?MC.fetchCancellationReminderCount():Promise.resolve(undefined)
  ]).then(([rej,activeOfertas,myMandadito,pendingCount,cancellationCount])=>{
    if(myTurn!==accountViewSeq)return;
    if(!document.getElementById('modal-bg').classList.contains('on'))return;
    if(document.getElementById('modal-title').textContent!=='Tu cuenta')return; // user navigated on
    acct.rejections=rej;
    acct.myActiveOfertas=activeOfertas;
    acct.myMandadito=myMandadito;
    acct.pendingCount=pendingCount;
    acct.cancellationCount=cancellationCount;
    renderAccountSignedIn(acct);
  });
}
function renderAccountSignedIn(acct){
  lastFetchedAccount=acct;
  const biz=acct.business;
  const bizList=acct.businesses||[];
  const pvs=acct.phoneVerificationStatus;
  document.getElementById('modal-title').textContent='Tu cuenta';
  document.getElementById('modal-body').innerHTML=`
    <div style="text-align:center;padding:8px 0 4px">
      <div style="width:56px;height:56px;border-radius:50%;background:var(--gulf);color:#fff;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:22px;font-weight:700">${e((acct.displayName||'V')[0].toUpperCase())}</div>
      <div style="font-weight:700;font-size:16px">${e(acct.displayName)}</div>
      <div style="color:var(--ink3);font-size:13px;margin-top:2px">${e(acct.email)}</div>
      <div style="color:var(--ink3);font-size:13px;margin-top:1px">${e(acct.phone||'')}${pvs==='verified'?' <span style="color:var(--gulf)">✓ verificado</span>':pvs==='pending'?' <span style="color:var(--wall-dk)">· en revisión</span>':''}</div>
      ${(pvs==='rejected'&&acct.phoneVerificationReason)?`<div style="color:var(--signal);font-size:12px;margin-top:4px">${e(acct.phoneVerificationReason)}</div>`:''}
      ${acct.isAdmin?'<div style="color:var(--ink3);font-size:12px;margin-top:6px">Admin</div>':''}
    </div>
    <button class="menu-item" onclick="openEditAccount()" style="border:1.5px solid var(--line2);margin-bottom:4px;justify-content:center">
      <span class="menu-item-lbl">Editar mi cuenta</span>
    </button>
    ${(bizList.length>1||(biz&&biz.is_primary&&biz.is_premium))?`
      <button class="menu-item" onclick="openMyBusinesses()" style="border:1.5px solid var(--line2);margin-bottom:4px">
        <span class="menu-item-ico"><svg class="ico" viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"/></svg></span>
        <span class="menu-item-txt">
          <span class="menu-item-lbl">Mis negocios (${bizList.length})</span>
          <span class="menu-item-sub">Negocio, productos, ofertas y vacantes</span>
        </span>
        ${(acct.myActiveOfertas&&acct.myActiveOfertas.length)?`<span class="menu-badge on">${acct.myActiveOfertas.length}</span>`:''}
        <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
      </button>
    `:biz?`
      <button class="menu-item" onclick="openBusinessProfile('${biz.id}')" style="border:1.5px solid var(--line2);margin-bottom:4px">
        ${biz.business_image_url
          ?`<img src="${e(biz.business_image_url)}" style="width:34px;height:34px;object-fit:cover;border-radius:9px;flex-shrink:0">`
          :`<span class="menu-item-ico"><svg class="ico" viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"/></svg></span>`}
        <span class="menu-item-txt">
          <span class="menu-item-lbl">${e(biz.business_name)}</span>
          <span class="menu-item-sub">${biz.status==='pending'?'En revisión':biz.status==='rejected'?'No aprobado':biz.is_premium?'Negocio Premium':'Negocio verificado'}${biz.category?' · '+e(biz.category):''}</span>
        </span>
        ${(acct.myActiveOfertas&&acct.myActiveOfertas.length)?`<span class="menu-badge on">${acct.myActiveOfertas.length}</span>`:''}
        <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
      </button>
    `:`
      <button class="menu-item" onclick="editingBusinessId=null;openPost('negocio_verificar')" style="border:1.5px solid var(--line2);margin-bottom:4px">
        <span class="menu-item-ico"><svg class="ico" viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"/></svg></span>
        <span class="menu-item-txt">
          <span class="menu-item-lbl">Verificar mi negocio</span>
          <span class="menu-item-sub">Para vender en Tienda y publicar Ofertas</span>
        </span>
        <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
      </button>
    `}
    ${(acct.myMandadito&&acct.myMandadito.status==='published'&&MANDADITOS.length>=5)?`
      <button class="menu-item" onclick="openMandaditoBoost()" style="border:1.5px solid var(--line2);margin-bottom:4px">
        <span class="menu-item-ico" style="background:var(--wall)"><svg class="ico" viewBox="0 0 24 24"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg></span>
        <span class="menu-item-txt">
          <span class="menu-item-lbl">Impulsar mi perfil</span>
          <span class="menu-item-sub">$${MANDADITO_BOOST_FEE_MXN} MXN · 7 días arriba en el directorio</span>
        </span>
        <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
      </button>
    `:''}
    ${(()=>{const rej=(acct.rejections||[]).length;return `
      <button class="menu-item" onclick="openMyPosts()" style="border:1.5px solid var(--line2);margin-bottom:4px">
        <span class="menu-item-ico"><svg class="ico" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></svg></span>
        <span class="menu-item-txt">
          <span class="menu-item-lbl">Mis publicaciones</span>
          <span class="menu-item-sub"${rej?' style="color:var(--signal)"':''}>${rej
            ? (rej===1?'1 no aprobada — revisa el motivo':rej+' no aprobadas — revisa el motivo')
            : 'Edita o revisa el estado de lo que has publicado'}</span>
        </span>
        ${rej?`<span class="menu-badge on">${rej>99?'99+':rej}</span>`:''}
        <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
      </button>`;})()}
    ${(biz||(acct.businesses||[]).length)?`
      <button class="menu-item" onclick="openMyActiveOfertas(null,'account')" style="border:1.5px solid var(--line2);margin-bottom:4px">
        <span class="menu-item-ico">${svgIco('tienda')}</span>
        <span class="menu-item-txt">
          <span class="menu-item-lbl">Ofertas activas</span>
          <span class="menu-item-sub">Confirma cada venta cuando te paguen</span>
        </span>
        ${(acct.myActiveOfertas&&acct.myActiveOfertas.length)?`<span class="menu-badge on">${acct.myActiveOfertas.length}</span>`:''}
        <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
      </button>
    `:''}
    ${acct.isAdmin?`<button class="menu-item" onclick="openAdminUsers()" style="border:1.5px solid var(--line2);margin-bottom:4px">
      <span class="menu-item-ico"><svg class="ico" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
      <span class="menu-item-txt">
        <span class="menu-item-lbl">Usuarios</span>
        <span class="menu-item-sub">Buscar cuentas y sus negocios</span>
      </span>
      <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
    </button>`:''}
    ${acct.isAdmin?`<button class="menu-item" onclick="openPending()" style="border:1.5px solid var(--line2);margin-bottom:4px">
      <span class="menu-item-ico"><svg class="ico" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg></span>
      <span class="menu-item-txt">
        <span class="menu-item-lbl">Pendiente</span>
        <span class="menu-item-sub"${(acct.pendingCount===0&&acct.cancellationCount===0)?' style="color:var(--palm)"':''}>${(()=>{
          if(acct.pendingCount===undefined||acct.cancellationCount===undefined)return 'Revisar aprobaciones y cancelaciones';
          if(acct.pendingCount===0&&acct.cancellationCount===0)return 'Todo al día ✓';
          const parts=[];
          if(acct.pendingCount>0)parts.push(acct.pendingCount+' por aprobar');
          if(acct.cancellationCount>0)parts.push(acct.cancellationCount+' por cancelar');
          return parts.join(' · ');
        })()}</span>
      </span>
      ${((acct.pendingCount||0)+(acct.cancellationCount||0))>0?`<span class="menu-badge on">${((acct.pendingCount||0)+(acct.cancellationCount||0))>99?'99+':((acct.pendingCount||0)+(acct.cancellationCount||0))}</span>`:''}
      <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
    </button>`:''}
    ${acct.isAdmin?pushToggleRowHtml('checking'):''}
    <button class="submit-btn" style="background:var(--paper2);color:var(--ink)" onclick="doSignOut()">Cerrar sesión</button>
  `;
  document.getElementById('modal-bg').classList.add('on');
  // Real support/subscription status needs two async calls this render
  // can't block on — painted as "Comprobando…" above, patched here once it
  // resolves. `seq` mirrors openAccount()'s own accountViewSeq guard: this
  // function only ever runs while accountViewSeq still equals the turn it
  // was called for, so capturing it now is equivalent to capturing "my
  // turn" — if the account view gets closed/reopened before this resolves,
  // the patch is silently dropped instead of touching a stale/gone modal.
  if(acct.isAdmin)refreshPushToggleRow(accountViewSeq);
}

/* Push notifications — admin-only for now. The mechanism itself isn't
   admin-specific (any profile_id can hold a subscription), only which
   events currently trigger a send is (new Pendiente items) — extending
   this to regular accounts later just means relaxing this one gate and
   adding new server-side triggers, nothing here needs to change. */
function pushToggleRowHtml(state){
  // 'checking' (first paint / mid-toggle) and 'unsupported' render as an
  // inert row — no onclick, no arrow — so a tap can't fire before a real
  // on/off state is known, and can't do anything on a browser that simply
  // doesn't have the API (e.g. iOS Safari outside of "add to home screen").
  const sub={checking:'Comprobando…',unsupported:'No disponibles en este navegador',off:'Desactivadas',on:'Activadas'}[state];
  const tappable=state==='off'||state==='on';
  return `<div class="menu-item" id="push-toggle-row" data-push-state="${state}"${tappable?' onclick="togglePushSubscription()" style="border:1.5px solid var(--line2);margin-bottom:4px;cursor:pointer"':' style="border:1.5px solid var(--line2);margin-bottom:4px;opacity:.7"'}>
    <span class="menu-item-ico">${svgIco('bell')}</span>
    <span class="menu-item-txt">
      <span class="menu-item-lbl">Notificaciones push</span>
      <span class="menu-item-sub">${sub}</span>
    </span>
    ${tappable?'<svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>':''}
  </div>`;
}
async function refreshPushToggleRow(seq){
  const supported=('Notification' in window)&&('PushManager' in window)&&('serviceWorker' in navigator);
  if(!supported){
    if(seq!==accountViewSeq)return;
    const row=document.getElementById('push-toggle-row');
    if(row)row.outerHTML=pushToggleRowHtml('unsupported');
    return;
  }
  const subscribed=await MC.hasPushSubscription();
  if(seq!==accountViewSeq)return;
  const row=document.getElementById('push-toggle-row');
  if(row)row.outerHTML=pushToggleRowHtml(subscribed?'on':'off');
}
async function togglePushSubscription(){
  const seq=accountViewSeq;
  const row=document.getElementById('push-toggle-row');
  if(!row||row.dataset.pushState==='checking')return; // already mid-toggle
  const turningOff=row.dataset.pushState==='on';
  row.outerHTML=pushToggleRowHtml('checking');
  try{
    if(turningOff){
      await MC.unsubscribeFromPush();
      if(seq!==accountViewSeq)return;
      const fresh=document.getElementById('push-toggle-row');
      if(fresh)fresh.outerHTML=pushToggleRowHtml('off');
      toast('Notificaciones desactivadas');
      return;
    }
    const {error}=await MC.subscribeToPush();
    if(seq!==accountViewSeq)return;
    const fresh=document.getElementById('push-toggle-row');
    if(error){
      if(error==='not_supported'){
        if(fresh)fresh.outerHTML=pushToggleRowHtml('unsupported');
      }else if(error==='permission_denied'){
        if(fresh)fresh.outerHTML=pushToggleRowHtml('off');
        toast('Bloqueaste las notificaciones — actívalas en la configuración del sitio de tu navegador para intentarlo de nuevo');
      }else{
        // any other failure (not_signed_in, a real Postgres error, …) — a
        // generic fallback so a tap never just silently does nothing.
        if(fresh)fresh.outerHTML=pushToggleRowHtml('off');
        toast('No se pudieron activar las notificaciones — intenta de nuevo');
      }
      return;
    }
    if(fresh)fresh.outerHTML=pushToggleRowHtml('on');
    toast('Notificaciones activadas ✓');
  }catch(err){
    // e.g. pushManager.subscribe() rejecting for a reason that isn't a
    // clean {error} shape — never leave the row stuck on "Comprobando…".
    console.error('push toggle failed:',err);
    if(seq!==accountViewSeq)return;
    const fresh=document.getElementById('push-toggle-row');
    if(fresh)fresh.outerHTML=pushToggleRowHtml(turningOff?'on':'off');
    toast('No se pudieron actualizar las notificaciones — intenta de nuevo');
  }
}

let myBusinessesList=[];
let myBusinessUpgradedIds=[];
let viewingBusinessId=null; // set by openBusinessProfile(id), read by openBusinessEdit()/refreshBusinessProfile() so they act on whichever business is currently open

/* "Mis negocios" — only reachable once an account has 2+ businesses (see
   renderAccountSignedIn); a single business still goes straight to its
   own profile, unchanged from before. */
async function openMyBusinesses(){
  if(document.getElementById('modal-bg').classList.contains('on'))mcModalPushView('account');
  document.getElementById('modal-title').textContent='Mis negocios';
  document.getElementById('modal-body').innerHTML='<div style="padding:44px 0;text-align:center;color:var(--ink3);font-size:13px">Cargando…</div>';
  document.getElementById('modal-bg').classList.add('on');
  const [list,upgraded]=await Promise.all([MC.myBusinesses(),MC.myBusinessPremiumUpgrades()]);
  myBusinessesList=list;
  myBusinessUpgradedIds=upgraded;
  renderMyBusinesses();
}
function renderMyBusinesses(){
  const primary=myBusinessesList.find(b=>b.is_primary);
  const canAddMore=!!(primary&&primary.is_premium)&&myBusinessesList.length<5;
  document.getElementById('modal-title').textContent=`Mis negocios (${myBusinessesList.length})`;
  document.getElementById('modal-body').innerHTML=myBusinessesList.map(b=>{
    const isUpgraded=myBusinessUpgradedIds.includes(b.id);
    const statusLbl=b.status==='pending'?'En revisión':b.status==='rejected'?'No aprobado':(b.is_premium||isUpgraded)?'Premium':'Verificado';
    const showPremiumAction=!b.is_primary&&b.status==='published';
    return `<div style="margin-bottom:4px">
      <button class="menu-item" onclick="openBusinessProfile('${b.id}')" style="border:1.5px solid var(--line2);${showPremiumAction?'border-bottom:none;border-radius:var(--rs) var(--rs) 0 0':'border-radius:var(--rs)'}">
        ${b.business_image_url?`<img src="${e(b.business_image_url)}" style="width:34px;height:34px;object-fit:cover;border-radius:9px;flex-shrink:0">`:`<span class="menu-item-ico"><svg class="ico" viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"/></svg></span>`}
        <span class="menu-item-txt">
          <span class="menu-item-lbl">${e(b.business_name)}${b.is_primary?' · Principal':''}</span>
          <span class="menu-item-sub">${statusLbl}${b.category?' · '+e(b.category):''}</span>
        </span>
        <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
      </button>
      ${showPremiumAction?(isUpgraded?`
        <button class="menu-item" onclick="confirmCancelBusinessPremium('${b.id}')" style="border:1.5px solid var(--line2);border-top:none;border-radius:0 0 var(--rs) var(--rs);justify-content:center;color:var(--signal);font-size:12.5px;padding:9px">Cancelar Premium de este negocio</button>
      `:`
        <button class="menu-item" onclick="startBusinessPremiumUpgrade('${b.id}')" style="border:1.5px solid var(--line2);border-top:none;border-radius:0 0 var(--rs) var(--rs);justify-content:center;color:var(--gulf);font-size:12.5px;padding:9px">Subir a Premium — $${BUSINESS_PREMIUM_UPGRADE_FEE_MXN} MXN/mes</button>
      `):''}
    </div>`;
  }).join('')
  +(canAddMore?`
    <button class="menu-item" onclick="openAdditionalBusinessForm()" style="border:1.5px dashed var(--line2);margin-bottom:4px;color:var(--gulf)">
      <span class="menu-item-ico"><svg class="ico" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></span>
      <span class="menu-item-txt"><span class="menu-item-lbl">Agregar otro negocio</span><span class="menu-item-sub">$${BUSINESS_SETUP_FEE_MXN} MXN de configuración</span></span>
    </button>
  `:(primary&&!primary.is_premium&&myBusinessesList.length===1?`
    <div style="color:var(--ink3);font-size:12px;padding:8px 4px;line-height:1.5">Actualiza tu negocio principal a Premium para poder agregar más negocios.</div>
  `:''));
}
/* Look the business up by id rather than passing its name through the
   onclick chain — names are free text and may contain a single quote,
   which e()'s escaping doesn't cover and would break the quoted
   JS-string argument. Same reasoning as confirmDiscardMyPost. */
function confirmCancelBusinessPremium(businessId){
  const biz=(myBusinessesList||[]).find(b=>String(b.id)===String(businessId));
  mcModalPushView('myBusinesses');
  document.getElementById('modal-title').textContent='Cancelar Premium de este negocio';
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--ink3);font-size:13px;line-height:1.5;margin-bottom:6px">Este negocio vuelve al límite de 2 productos ahora mismo. Detendremos el cobro de $${BUSINESS_PREMIUM_UPGRADE_FEE_MXN} MXN/mes en los próximos días.</div>
    ${biz?`<div style="font-weight:700;font-size:14px;margin:8px 0 12px">${e(biz.business_name)}</div>`:''}
    <div style="display:flex;gap:8px;margin-top:14px">
      <button class="submit-btn" style="margin-top:0;flex:1;background:var(--paper2);color:var(--ink)" onclick="mcModalBack('myBusinesses')">Cancelar</button>
      <button class="submit-btn" style="margin-top:0;flex:1;background:var(--signal);color:#fff" id="cancel-biz-premium-btn" onclick="cancelBusinessPremiumUpgrade('${businessId}')">Sí, cancelar Premium</button>
    </div>
  `;
}
async function cancelBusinessPremiumUpgrade(businessId){
  const btn=document.getElementById('cancel-biz-premium-btn');
  if(btn){btn.disabled=true;btn.textContent='Cancelando…';}
  const {error}=await MC.cancelBusinessPremiumUpgrade(businessId);
  if(error){toast(pgErrorToast(error,'No se pudo cancelar.'));if(btn){btn.disabled=false;btn.textContent='Sí, cancelar Premium';}return;}
  toast('Premium cancelado para este negocio');
  mcModalBack('myBusinesses');
  openMyBusinesses();
}

/* ══════════════ BUSINESS: "Ofertas activas" — confirm real sales ══════════════
   The whole redemption model is now just this: the customer contacts the
   business over WhatsApp (no claim, no code, no customer-side state), and
   the business bumps quantity_sold by 1 here, from their own account, only
   once they've actually been paid. The RPC does the ownership + sold-out
   checks server-side; there's no undo by design, which is why Step2 has
   its own confirm screen. */
let myActiveOfertasList=[];
let myPendingOfertasList=[];
let myOfertasTab='activas';
async function openMyActiveOfertas(businessId,backKey){
  if(document.getElementById('modal-bg').classList.contains('on'))mcModalPushView(backKey||'bizProfile');
  myOfertasTab='activas';
  document.getElementById('modal-title').textContent='Ofertas activas';
  document.getElementById('modal-body').innerHTML='<div style="padding:44px 0;text-align:center;color:var(--ink3);font-size:13px">Cargando…</div>';
  document.getElementById('modal-bg').classList.add('on');
  const [active,pending]=await Promise.all([MC.fetchMyActiveOfertas(businessId),MC.fetchMyPendingOfertas(businessId)]);
  myActiveOfertasList=active;
  myPendingOfertasList=pending;
  renderMyActiveOfertas();
}
function setMyOfertasTab(tab){myOfertasTab=tab;renderMyActiveOfertas();}
function renderMyActiveOfertas(){
  const tabsHtml=`<div style="display:flex;gap:8px;margin-bottom:14px">
    <button class="chip${myOfertasTab==='activas'?' on':''}" onclick="setMyOfertasTab('activas')">Activas (${myActiveOfertasList.length})</button>
    <button class="chip${myOfertasTab==='pendientes'?' on':''}" onclick="setMyOfertasTab('pendientes')">Pendientes (${myPendingOfertasList.length})</button>
  </div>`;
  if(myOfertasTab==='pendientes'){
    if(!myPendingOfertasList.length){
      document.getElementById('modal-body').innerHTML=tabsHtml+`<div style="text-align:center;padding:30px 10px;color:var(--ink3)">${svgIco('checkBadge')}<div style="margin-top:8px">No tienes ofertas pendientes.</div></div>`;
      return;
    }
    document.getElementById('modal-body').innerHTML=tabsHtml+myPendingOfertasList.map(o=>{
      const statusLbl=o.status==='pending'?'En revisión':o.status==='rejected'?'No aprobada':'Programada';
      const statusColor=o.status==='rejected'?'var(--signal)':'var(--ink3)';
      const subLine=o.status==='pending'?'Aún la estamos revisando antes de publicarla.'
        :o.status==='rejected'?(o.rejectionReason?e(o.rejectionReason):'No pasó la revisión — no se especificó un motivo.')
        :`Sale al público el ${dsToLongEs(o.postedDs)}.`;
      return `
      <div style="border:1.5px solid var(--line2);border-radius:var(--rs);padding:12px 14px;margin-bottom:10px">
        <div style="font-size:11px;font-weight:700;color:var(--gulf);text-transform:uppercase;letter-spacing:.04em">${e(o.businessName)}</div>
        <div style="font-weight:700;font-size:14.5px;margin-top:3px">${e(o.name)}</div>
        <div style="font-size:11px;font-weight:700;color:${statusColor};text-transform:uppercase;letter-spacing:.03em;margin-top:6px">${statusLbl}</div>
        <div style="color:var(--ink3);font-size:12.5px;margin-top:2px;line-height:1.4">${subLine}</div>
      </div>`;
    }).join('');
    return;
  }
  if(!myActiveOfertasList.length){
    document.getElementById('modal-body').innerHTML=tabsHtml+`<div style="text-align:center;padding:30px 10px;color:var(--ink3)">${svgIco('checkBadge')}<div style="margin-top:8px">No tienes ofertas activas ahora mismo.</div></div>`;
    return;
  }
  document.getElementById('modal-body').innerHTML=tabsHtml+myActiveOfertasList.map(o=>`
    <div style="border:1.5px solid var(--line2);border-radius:var(--rs);padding:12px 14px;margin-bottom:10px">
      <div style="font-size:11px;font-weight:700;color:var(--gulf);text-transform:uppercase;letter-spacing:.04em">${e(o.businessName)}</div>
      <div style="font-weight:700;font-size:14.5px;margin-top:3px">${e(o.name)}</div>
      <div style="color:var(--ink3);font-size:12px;margin-top:2px">${o.sold} de ${o.total} vendidos</div>
      <button class="submit-btn" style="margin-top:10px;padding:9px;font-size:13px" onclick="confirmOfertaSaleStep1('${o.id}')">+1 pago confirmado</button>
    </div>
  `).join('');
}
/* Second confirmation is deliberate, not decorative — this bumps a real
   sale count with no undo, so a stray tap on the list itself shouldn't be
   able to do it alone. Mirrors confirmCancelBusinessPremium's existing
   two-step shape. */
function confirmOfertaSaleStep1(id){
  const o=myActiveOfertasList.find(x=>x.id===id);
  if(!o)return;
  mcModalPushView('myActiveOfertas');
  document.getElementById('modal-title').textContent='Confirmar venta';
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--ink3);font-size:13px;line-height:1.5;margin-bottom:6px">Vas a marcar 1 unidad de <b>${e(o.name)}</b> como vendida y pagada. Esto no se puede deshacer desde la app.</div>
    <div style="display:flex;gap:8px;margin-top:14px">
      <button class="submit-btn" style="margin-top:0;flex:1;background:var(--paper2);color:var(--ink)" onclick="mcModalBack('myActiveOfertas')">Cancelar</button>
      <button class="submit-btn" style="margin-top:0;flex:1" id="confirm-oferta-sale-btn" onclick="confirmOfertaSaleStep2('${id}')">Sí, ya me pagaron</button>
    </div>
  `;
}
async function confirmOfertaSaleStep2(id){
  const btn=document.getElementById('confirm-oferta-sale-btn');
  if(btn){btn.disabled=true;btn.textContent='Confirmando…';}
  const {data,error}=await MC.confirmOfertaSale(id);
  if(error){
    toast(pgErrorToast(error,'No se pudo confirmar la venta.'));
    if(btn){btn.disabled=false;btn.textContent='Sí, ya me pagaron';}
    return;
  }
  mcModalBack('myActiveOfertas');
  myActiveOfertasList=myActiveOfertasList.map(o=>o.id===id?{...o,sold:data}:o).filter(o=>o.sold<o.total);
  renderMyActiveOfertas();
  toast('Venta confirmada ✓');
}
/* Pay first, then create the upgrade row on return — same reasoning as
   every other paid add-on in this app (Ofertas, Eventos featuring, the
   $99 additional-business setup): an unpaid "reservation" would just
   squat on the thing being paid for. */
async function startBusinessPremiumUpgrade(businessId){
  const acct=await MC.currentAccount();
  if(acct.isAdmin){
    const {error}=await MC.submitBusinessPremiumUpgrade(businessId);
    if(error){toast(pgErrorToast(error,'No se pudo activar Premium.'));return;}
    mcModalBack('myBusinesses');
    openMyBusinesses();
    toast('Premium activado sin pago (cuenta admin) ✓');
    return;
  }
  sessionStorage.setItem('mc_pending_business_premium_upgrade',JSON.stringify({businessId}));
  window.location.href=STRIPE_LINK_BUSINESS_PREMIUM_UPGRADE;
}
/* Starts the $99 "add another business" flow — same submission form as
   the free first-time one, just flagged so submitPost() routes it
   through payment first. See the negocio_verificar branch further down. */
async function openAdditionalBusinessForm(){
  mcModalPushView('myBusinesses');
  editingBusinessId=null;
  await openPost('negocio_verificar');
  creatingAdditionalBusiness=true;
  document.getElementById('modal-title').textContent='Agregar otro negocio';
}

/* Status label + colour for a business — shared by the owner's own business
   profile and the admin Usuarios screens so they can never drift apart. */
function businessStatusInfo(biz){
  return {
    lbl:biz.status==='pending'?'En revisión':biz.status==='rejected'?'No aprobado':biz.is_premium?'Negocio Premium':'Negocio verificado',
    color:biz.status==='published'?'var(--gulf)':'var(--wall-dk)'
  };
}

/* ══════════════ ADMIN: Usuarios ══════════════
   Founder-only directory: searchable list of every account → one account's
   detail page (its businesses + its personal publications) → one business's
   detail page (its Productos + Ofertas, and the Premium switch). Only
   reachable from the isAdmin-gated account-menu entry, so — like
   openPending() — nothing in here re-checks isAdmin; RLS is the real gate.
   Read-only apart from the Premium switch. Pushes onto the same modal view
   stack as everything else, so ✕ / back / hardware-back walk back out
   business → user → list → account. */
let adminUsersList=[];
let adminUsersSearch='';
let adminUsersFilter='all'; // 'all' | 'negocio' | 'premium'
let adminViewingUserId=null;
let adminUserDetail=null;
let adminUserPosts=[];
let adminViewingBusinessId=null;
let adminBizDetail=null;
let adminBizOwner=null;
let adminBizPosts=[];
let adminBizSaving=false;
let adminPostsSource=[]; // whichever list the visible "Publicaciones" grid is showing — the user's, or the business's
let adminPostsTab='pending';
// Set at render time so the "Enviar mensaje" onclick never has to carry a
// free-text name through a quoted JS-string argument (a stray ' would break
// it — same reasoning as contactMsgParam / confirmDiscardMyPost).
let adminMsgTarget={phone:null,name:''};
const ADMIN_LOADING='<div style="padding:44px 0;text-align:center;color:var(--ink3);font-size:13px">Cargando…</div>';
const ADMIN_ARROW='<svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>';
function adminSectionLabel(txt){
  return `<div style="font-size:11px;font-weight:700;color:var(--ink3);text-transform:uppercase;letter-spacing:.04em;margin:18px 0 8px">${txt}</div>`;
}

/* ── 1. The list ── */
async function openAdminUsers(){
  mcModalPushView('account');
  adminUsersSearch='';
  adminUsersFilter='all';
  document.getElementById('modal-title').textContent='Usuarios';
  document.getElementById('modal-body').innerHTML=ADMIN_LOADING;
  document.getElementById('modal-bg').classList.add('on');
  adminUsersList=await MC.adminFetchAllUsers();
  renderAdminUsersList();
}
function adminUsersFiltered(){
  const q=adminUsersSearch.trim().toLowerCase();
  // Only treat the query as a phone number when it LOOKS like one — otherwise
  // a name search containing a stray digit ("Local 2") would match any phone
  // containing that digit, and an empty digit string would match everyone.
  const qDigits=/^[\d\s+()-]+$/.test(q)?digitsOnly(q):'';
  return adminUsersList.filter(u=>{
    if(adminUsersFilter==='negocio'&&!u.businesses.length)return false;
    if(adminUsersFilter==='premium'&&!u.businesses.some(b=>b.is_premium))return false;
    if(!q)return true;
    if((u.displayName||'').toLowerCase().includes(q))return true;
    if(qDigits&&digitsOnly(u.phone).includes(qDigits))return true;
    return u.businesses.some(b=>(b.business_name||'').toLowerCase().includes(q));
  }).sort((a,b)=>new Date(b.createdAt||0)-new Date(a.createdAt||0)); // newest accounts first
}
function renderAdminUsersList(){
  const chip=(v,l)=>`<button class="chip${adminUsersFilter===v?' on':''}" onclick="setAdminUsersFilter('${v}')">${l}</button>`;
  document.getElementById('modal-title').textContent='Usuarios';
  document.getElementById('modal-body').innerHTML=`
    <input class="fi" id="admin-users-search" type="search" autocomplete="off" placeholder="Buscar por nombre, teléfono o negocio" value="${e(adminUsersSearch)}" oninput="setAdminUsersSearch(this.value)" style="margin-bottom:10px">
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">${chip('all','Todos')}${chip('negocio','Con negocio')}${chip('premium','Premium')}</div>
    <div id="admin-users-results"></div>`;
  renderAdminUsersResults();
}
// Only the results box is redrawn while typing — rebuilding the whole body
// would replace the <input> itself and drop focus on every keystroke.
function renderAdminUsersResults(){
  const box=document.getElementById('admin-users-results');
  if(!box)return;
  if(!adminUsersList.length){box.innerHTML='<div style="text-align:center;padding:30px 10px;color:var(--ink3)">No se pudo cargar la lista de usuarios.</div>';return;}
  const rows=adminUsersFiltered();
  if(!rows.length){box.innerHTML='<div style="text-align:center;padding:30px 10px;color:var(--ink3)">Sin resultados.</div>';return;}
  box.innerHTML=`<div style="color:var(--ink3);font-size:12px;margin-bottom:8px">${rows.length===adminUsersList.length?rows.length+' usuarios':rows.length+' de '+adminUsersList.length+' usuarios'}</div>`
    +rows.map(u=>{
      const n=u.businesses.length;
      const premium=u.businesses.some(b=>b.is_premium);
      return `<button class="menu-item" onclick="openAdminUserView('${e(String(u.id))}')" style="border:1.5px solid var(--line2);margin-bottom:4px">
        <span class="menu-item-txt">
          <span class="menu-item-lbl">${e(u.displayName||'Sin nombre')}${u.isAdmin?' · Admin':''}</span>
          <span class="menu-item-sub">${e(u.phone||'Sin teléfono')} · ${n?(n===1?'1 negocio':n+' negocios'):'Sin negocio'}</span>
        </span>
        ${u.banned?'<span class="menu-badge on">Bloqueada</span>':''}
        ${premium?'<span class="menu-badge on" style="background:var(--gulf)">Premium</span>':''}
        ${ADMIN_ARROW}
      </button>`;
    }).join('');
}
function setAdminUsersSearch(v){adminUsersSearch=String(v||'');renderAdminUsersResults();}
function setAdminUsersFilter(v){adminUsersFilter=v;renderAdminUsersList();}
// Backing into the list re-fetches quietly: a Premium switch on a business
// page (two levels down) changes the Premium badge shown on these rows.
function restoreAdminUsersList(){
  adminViewingUserId=null;
  adminViewingBusinessId=null;
  renderAdminUsersList();
  MC.adminFetchAllUsers().then(list=>{
    if(!list.length)return;
    adminUsersList=list;
    renderAdminUsersResults();
  });
}

/* ── 2. One account ── */
async function openAdminUserView(userId,backRestore){
  mcModalPushView('adminUsers',backRestore||restoreAdminUsersList);
  adminViewingUserId=userId;
  adminUserDetail=null;
  adminUserPosts=[];
  adminPostsTab='pending';
  document.getElementById('modal-title').textContent='Usuario';
  document.getElementById('modal-body').innerHTML=ADMIN_LOADING;
  document.getElementById('modal-bg').classList.add('on');
  const [detail,posts]=await Promise.all([MC.adminFetchUserDetail(userId),MC.adminFetchUserPosts(userId)]);
  if(adminViewingUserId!==userId)return; // backed out / opened a different user before this landed
  if(!detail){toast('No se pudo cargar el usuario.');mcModalBack();return;}
  adminUserDetail=detail;
  adminUserPosts=posts;
  renderAdminUserView(detail);
}
function renderAdminUserView(d){
  adminPostsSource=adminUserPosts;
  adminMsgTarget={profileId:d.id,name:d.display_name};
  const pvs=d.phone_verification_status;
  const pvHtml=pvs==='verified'?'<span style="color:var(--gulf)">✓ Teléfono verificado</span>'
    :pvs==='rejected'?'<span style="color:var(--signal)">Teléfono no verificado</span>'
    :'<span style="color:var(--wall-dk)">Teléfono en revisión</span>';
  const joined=d.created_at?new Date(d.created_at).toLocaleDateString('es-MX',{day:'numeric',month:'long',year:'numeric'}):'';
  const bizs=[...(d.businesses||[])].sort((a,b)=>(b.is_primary?1:0)-(a.is_primary?1:0)||new Date(a.created_at||0)-new Date(b.created_at||0));
  const bizHtml=bizs.length?bizs.map(b=>{
    const s=businessStatusInfo(b);
    return `<button class="menu-item" onclick="openAdminBusinessView('${e(String(b.id))}')" style="border:1.5px solid var(--line2);margin-bottom:4px">
      <span class="menu-item-ico"><svg class="ico" viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"/></svg></span>
      <span class="menu-item-txt">
        <span class="menu-item-lbl">${e(b.business_name)}${b.is_primary?' · Principal':''}</span>
        <span class="menu-item-sub" style="color:${s.color}">${s.lbl}</span>
      </span>
      ${ADMIN_ARROW}
    </button>`;
  }).join(''):'<div style="color:var(--ink3);font-size:13px">Sin negocios registrados.</div>';
  document.getElementById('modal-title').textContent='Usuario';
  document.getElementById('modal-body').innerHTML=`<div id="admin-user-view">
    <div style="font-weight:800;font-size:19px;line-height:1.25">${e(d.display_name||'Sin nombre')}${d.is_admin?' <span style="font-size:11px;font-weight:700;color:var(--gulf);text-transform:uppercase;letter-spacing:.04em">· Admin</span>':''}</div>
    <div style="color:var(--ink3);font-size:13.5px;margin-top:3px">${e(d.phone||'Sin teléfono')}</div>
    <div style="font-size:12.5px;font-weight:600;margin-top:6px">${pvHtml}</div>
    ${(pvs==='rejected'&&d.phone_verification_reason)?`<div style="color:var(--ink3);font-size:12.5px;margin-top:3px">${e(d.phone_verification_reason)}</div>`:''}
    ${d.banned?'<div style="margin-top:10px;padding:9px 12px;border-radius:var(--rs);background:var(--signal);color:#fff;font-size:12.5px;font-weight:700">Cuenta bloqueada</div>':''}
    ${joined?`<div style="color:var(--ink3);font-size:12px;margin-top:6px">Se unió el ${joined}</div>`:''}
    ${adminSectionLabel('Sus negocios'+(bizs.length?' ('+bizs.length+')':''))}
    ${bizHtml}
    <div id="admin-posts-section">${adminPostsSectionHtml()}</div>
    <button class="menu-item" onclick="openAdminMessageCompose(adminMsgTarget.profileId,adminMsgTarget.name)" style="border:1.5px solid var(--line2);margin-top:18px;margin-bottom:4px">
      <span class="menu-item-ico">${svgIco('message')}</span>
      <span class="menu-item-txt">
        <span class="menu-item-lbl">Enviar mensaje</span>
        <span class="menu-item-sub">Aparece como ventana emergente en su cuenta</span>
      </span>
      ${ADMIN_ARROW}
    </button>
    <!-- delete user: pending confirmation on hard-vs-soft-delete semantics -->
  </div>`;
  document.getElementById('modal-bg').classList.add('on');
}
// Backing into the user page from a business page re-reads the account
// quietly — the business rows here show Premium/verified status, which the
// Premium switch one level down may have just changed. Posts aren't
// affected by it, so they're kept as-is.
function restoreAdminUserView(){
  adminViewingBusinessId=null;
  if(adminUserDetail)renderAdminUserView(adminUserDetail);
  refreshAdminUserView();
}
async function refreshAdminUserView(){
  const id=adminViewingUserId;
  if(!id)return;
  const detail=await MC.adminFetchUserDetail(id);
  if(!detail||adminViewingUserId!==id||!document.getElementById('admin-user-view'))return; // failed, or the screen moved on meanwhile
  adminUserDetail=detail;
  renderAdminUserView(detail);
}

/* Shared "Publicaciones" block — a 2-column grid of compact read-only cards
   (no edit/discard: this is an admin looking at someone else's content),
   bucketed with the very same myPostBucket()/MY_POSTS_TABS/postStatusBadge()
   the owner's own "Mis publicaciones" screen uses. Lives in its own
   container so switching tabs redraws just this block and doesn't throw the
   admin back to the top of a long page. */
function adminPostsSectionHtml(){
  const src=adminPostsSource;
  const head=adminSectionLabel('Publicaciones'+(src.length?' ('+src.length+')':''));
  if(!src.length)return head+'<div style="color:var(--ink3);font-size:13px">Sin publicaciones.</div>';
  const buckets={pending:[],active:[],finished:[]};
  src.forEach(p=>buckets[myPostBucket(p)].push(p));
  const tabs=`<div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">${MY_POSTS_TABS.map(([v,l])=>
    `<button class="chip${v===adminPostsTab?' on':''}" onclick="setAdminPostsTab('${v}')">${l} (${buckets[v].length})</button>`).join('')}</div>`;
  const list=buckets[adminPostsTab];
  const emptyMsgs={pending:'Nada en revisión.',active:'Nada activo.',finished:'Nada finalizado.'};
  if(!list.length)return head+tabs+`<div style="color:var(--ink3);font-size:13px">${emptyMsgs[adminPostsTab]}</div>`;
  return head+tabs+`<div class="tienda-grid" style="padding:0">${list.map(p=>`
    <div style="border:1.5px solid var(--line2);border-radius:var(--rs);padding:10px 11px;min-width:0">
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:6px;flex-wrap:wrap">
        <span style="font-size:10.5px;font-weight:700;color:var(--gulf);text-transform:uppercase;letter-spacing:.04em">${e(p.label)}</span>
        ${postStatusBadge(p.status,myPostBucket(p))}
      </div>
      <div style="font-weight:700;font-size:13.5px;margin-top:4px;line-height:1.3;overflow-wrap:anywhere;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${e(p.title)}</div>
      <div style="color:var(--ink3);font-size:11.5px;margin-top:3px">${relTimeEs(p.createdAt)}</div>
      ${(p.status==='rejected'&&p.rejectionReason)?`<div style="color:var(--signal);font-size:11.5px;margin-top:4px;line-height:1.3;overflow-wrap:anywhere">${e(p.rejectionReason)}</div>`:''}
    </div>`).join('')}</div>`;
}
function setAdminPostsTab(tab){
  adminPostsTab=tab;
  const box=document.getElementById('admin-posts-section');
  if(box)box.innerHTML=adminPostsSectionHtml();
}

/* A real in-app message to a specific account, instead of a WhatsApp
   hand-off — the recipient sees it as a popup next time they open the app
   (see maybeShowUndismissedMessages), and a live DB trigger sends a real
   push too, if they have one set up. No sign-in/verified gate here (that
   is guardedContact's job for residents) — this screen is already
   admin-only. */
function openAdminMessageCompose(profileId,name){
  if(!profileId){toast('No se pudo identificar la cuenta.');return;}
  mcModalPushView('adminMsgCompose'); // falls back to a DOM snapshot of whatever's open now (the user or business page) — no live-refresh needed for this
  document.getElementById('modal-title').textContent='Enviar mensaje';
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--ink3);font-size:13px;margin-bottom:10px;line-height:1.5">Aparecerá como una ventana emergente la próxima vez que ${e(name||'esta persona')} abra la app.</div>
    <textarea class="ft" id="admin-msg-compose" placeholder="Escribe tu mensaje…"></textarea>
    <button class="submit-btn" id="admin-msg-send-btn" onclick="submitAdminMessage('${profileId}')">Enviar</button>
  `;
}
async function submitAdminMessage(profileId){
  const btn=document.getElementById('admin-msg-send-btn');
  const msg=document.getElementById('admin-msg-compose').value.trim();
  if(!msg){toast('Escribe un mensaje primero');return;}
  if(btn){btn.disabled=true;btn.textContent='Enviando…';}
  const {error}=await MC.sendAdminMessage(profileId,msg);
  if(error){toast(pgErrorToast(error,'No se pudo enviar.'));if(btn){btn.disabled=false;btn.textContent='Enviar';}return;}
  mcModalBack();
  toast('Mensaje enviado ✓');
}

/* ── 3. One business ── */
async function openAdminBusinessView(businessId){
  mcModalPushView('adminUserView',restoreAdminUserView);
  adminViewingBusinessId=businessId;
  adminBizDetail=null;
  adminBizOwner=null;
  adminBizPosts=[];
  adminBizSaving=false;
  adminPostsTab='pending';
  document.getElementById('modal-title').textContent='Negocio';
  document.getElementById('modal-body').innerHTML=ADMIN_LOADING;
  document.getElementById('modal-bg').classList.add('on');
  const [biz,posts]=await Promise.all([MC.fetchBusinessById(businessId),MC.adminFetchBusinessPosts(businessId)]);
  if(adminViewingBusinessId!==businessId)return; // backed out before this landed
  if(!biz){toast('No se pudo cargar el negocio.');mcModalBack();return;}
  // Normally reached from the owner's user page, whose detail is already in
  // hand; fall back to a lookup so this page never depends on that.
  let owner=(adminUserDetail&&adminUserDetail.id===biz.profile_id)?adminUserDetail:null;
  if(!owner)owner=await MC.adminFetchUserDetail(biz.profile_id);
  if(adminViewingBusinessId!==businessId)return;
  adminBizDetail=biz;
  adminBizOwner=owner;
  adminBizPosts=posts;
  renderAdminBusinessView(biz);
}
function renderAdminBusinessView(biz){
  adminPostsSource=adminBizPosts;
  const owner=adminBizOwner;
  // An in-app message always targets the owning profile — there's no
  // "business's own number" concept for it the way WhatsApp had.
  adminMsgTarget={profileId:owner&&owner.id,name:(owner&&owner.display_name)||biz.business_name};
  const s=businessStatusInfo(biz);
  const tier=(premium,label)=>{
    const on=!!biz.is_premium===premium;
    return `<button class="chip${on?' on':''}" data-tier="${premium?'premium':'basico'}"${on?' disabled style="cursor:default"':''} onclick="adminSetBusinessType(${premium})">${label}</button>`;
  };
  const since=(biz.is_premium&&biz.premium_since)?new Date(biz.premium_since).toLocaleDateString('es-MX',{day:'numeric',month:'long',year:'numeric'}):'';
  document.getElementById('modal-title').textContent='Negocio';
  document.getElementById('modal-body').innerHTML=`<div id="admin-business-view">
    <div style="font-size:11px;font-weight:700;color:${s.color};text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">${s.lbl}</div>
    <div style="font-weight:800;font-size:19px;line-height:1.25">${e(biz.business_name)}${biz.is_primary?' <span style="font-size:11px;font-weight:700;color:var(--ink3);text-transform:uppercase;letter-spacing:.04em">· Principal</span>':''}</div>
    ${owner?`<div style="color:var(--ink3);font-size:13px;margin-top:3px">Cuenta de ${e(owner.display_name||'Sin nombre')}</div>`:''}
    ${(biz.status==='rejected'&&biz.rejection_reason)?`<div style="color:var(--signal);font-size:12.5px;margin-top:6px">${e(biz.rejection_reason)}</div>`:''}
    ${adminSectionLabel('Cambiar tipo de cuenta')}
    <div style="display:flex;gap:8px">${tier(false,'Básico')}${tier(true,'Premium')}</div>
    <div style="color:var(--ink3);font-size:12px;margin-top:8px;line-height:1.5">${since?'Premium desde el '+since+'. ':''}Pasar a Básico quita los Destacados y Descuentos del negocio y crea un recordatorio de cancelación en Pendiente.</div>
    <div id="admin-posts-section">${adminPostsSectionHtml()}</div>
    <button class="menu-item" onclick="openAdminMessageCompose(adminMsgTarget.profileId,adminMsgTarget.name)" style="border:1.5px solid var(--line2);margin-top:18px;margin-bottom:4px">
      <span class="menu-item-ico">${svgIco('message')}</span>
      <span class="menu-item-txt">
        <span class="menu-item-lbl">Enviar mensaje</span>
        <span class="menu-item-sub">${owner?'Aparece como ventana emergente en la cuenta de su dueño':'No se pudo identificar al dueño'}</span>
      </span>
      ${ADMIN_ARROW}
    </button>
    <!-- delete business: pending confirmation on hard-vs-soft-delete semantics -->
  </div>`;
  document.getElementById('modal-bg').classList.add('on');
}
/* The switch itself. Never flips the label optimistically: it re-reads the
   row after the update and shows whatever the database actually says. That
   matters because an update blocked by RLS, or quietly reverted by a
   trigger, reports NO error and simply changes nothing. */
async function adminSetBusinessType(makePremium){
  const id=adminViewingBusinessId;
  if(!id||!adminBizDetail||adminBizSaving||!!adminBizDetail.is_premium===!!makePremium)return;
  adminBizSaving=true;
  document.querySelectorAll('#admin-business-view [data-tier]').forEach(b=>{b.disabled=true;});
  const {error}=await MC.adminSetBusinessPremium(id,makePremium);
  const fresh=await MC.fetchBusinessById(id);
  adminBizSaving=false;
  if(adminViewingBusinessId!==id)return; // navigated away mid-save; the write itself already happened
  if(fresh)adminBizDetail=fresh;
  renderAdminBusinessView(adminBizDetail);
  if(error){toast(pgErrorToast(error,'No se pudo cambiar el tipo de cuenta.'));return;}
  if(fresh&&!!fresh.is_premium===!!makePremium)toast(makePremium?'Negocio ahora es Premium ✓':'Negocio ahora es Básico ✓');
  else toast('El cambio no se aplicó — revisa los permisos.');
}

/* Business profile — a sub-view of "Tu cuenta" (direct, for a single
   business) or of "Mis negocios" (for 2+). One tap opens the full
   business record; the edit action reuses the verification form and
   sends the changes back to review. Part of the modal view stack, so
   ✕ / back / hardware-back returns to wherever it was opened from, and
   finishing an edit returns here (now showing "En revisión"). */
let bizProfilePosts=[]; // this account's fetchMyPosts() results, cached while a business profile is open — filtered per-section in renderBusinessProfile
async function openBusinessProfile(id){
  if(document.getElementById('modal-bg').classList.contains('on'))mcModalPushView(myBusinessesList.length>1?'myBusinesses':'account');
  viewingBusinessId=id;
  bizProfilePosts=[];
  document.getElementById('modal-title').textContent='Negocio';
  document.getElementById('modal-body').innerHTML='<div style="padding:44px 0;text-align:center;color:var(--ink3);font-size:13px">Cargando…</div>';
  document.getElementById('modal-bg').classList.add('on');
  const biz=await MC.fetchBusinessById(id);
  if(!biz){mcModalBack();return;}
  renderBusinessProfile(biz);
  const posts=await MC.fetchMyPosts();
  if(viewingBusinessId!==id)return; // navigated to a different business before this landed
  bizProfilePosts=posts;
  renderBusinessProfile(biz);
}
function renderBusinessProfile(biz){
  if(!biz)return;
  const isAdmin=!!(lastFetchedAccount&&lastFetchedAccount.isAdmin);
  const {lbl:statusLbl,color:statusColor}=businessStatusInfo(biz);
  document.getElementById('modal-title').textContent='Mi negocio';
  document.getElementById('modal-body').innerHTML=`
    <div style="font-size:11px;font-weight:700;color:${statusColor};text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">${statusLbl}</div>
    ${biz.status==='pending'?`<div style="color:var(--ink3);font-size:12.5px;margin-bottom:14px">Está en revisión — te avisamos cuando se apruebe. Mientras tanto sigue visible con los datos anteriores.</div>`:''}
    ${(biz.status==='rejected'&&biz.rejection_reason)?`<div style="color:var(--signal);font-size:12.5px;margin-bottom:14px">${e(biz.rejection_reason)}</div>`:''}
    ${renderModerationDetailFields('businesses',biz)}
    <button class="menu-item" onclick="openBusinessEdit()" style="border:1.5px solid var(--line2);margin:6px 0 4px">
      <span class="menu-item-ico"><svg class="ico" viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></span>
      <span class="menu-item-txt">
        <span class="menu-item-lbl">Editar negocio</span>
        <span class="menu-item-sub">Los cambios se envían a revisión de nuevo</span>
      </span>
      <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
    </button>
    ${(biz.status==='published'&&!biz.is_premium&&!isAdmin)?`
      <a class="menu-item" style="border:1.5px solid var(--line2);margin-bottom:4px;text-decoration:none" href="${STRIPE_LINK_PREMIUM}">
        <span class="menu-item-ico" style="background:var(--wall)">${svgIco('checkBadge')}</span>
        <span class="menu-item-txt">
          <span class="menu-item-lbl">Actualizar a Premium</span>
          <span class="menu-item-sub">$749 MXN/mes · más productos y espacios de Oferta</span>
        </span>
        <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
      </a>
    `:''}
    ${(()=>{const n=bizProfilePosts.filter(p=>p.table==='productos'&&p.raw.business_id===biz.id).length;return n?`
      <button class="menu-item" onclick="openMyPosts(['productos'],'Mis productos en Tienda','bizProfile')" style="border:1.5px solid var(--line2);margin-bottom:4px;margin-top:10px">
        <span class="menu-item-ico">${svgIco('tienda')}</span>
        <span class="menu-item-txt">
          <span class="menu-item-lbl">Mis productos en Tienda</span>
          <span class="menu-item-sub">Edita o revisa el estado de lo publicado</span>
        </span>
        <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
      </button>
    `:'';})()}
    ${(()=>{const n=bizProfilePosts.filter(p=>p.table==='empleos').length;return n?`
      <button class="menu-item" onclick="openMyPosts(['empleos'],'Mis vacantes','bizProfile')" style="border:1.5px solid var(--line2);margin-bottom:4px">
        <span class="menu-item-ico"><svg class="ico" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg></span>
        <span class="menu-item-txt">
          <span class="menu-item-lbl">Mis vacantes</span>
          <span class="menu-item-sub">Edita o revisa el estado de lo publicado</span>
        </span>
        <span class="menu-count">${n}</span>
        <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
      </button>
    `:'';})()}
  `;
  document.getElementById('modal-bg').classList.add('on');
}
async function refreshBusinessProfile(){
  if(!viewingBusinessId)return;
  const id=viewingBusinessId;
  const [biz,posts]=await Promise.all([MC.fetchBusinessById(id),MC.fetchMyPosts()]);
  if(viewingBusinessId!==id)return; // navigated to a different business before this landed
  bizProfilePosts=posts;
  renderBusinessProfile(biz);
}

/* Country-code select + phone input pair. Reused by signup, login, and
   both password-reset screens — one markup, one place to change it. */
function phoneFieldHtml(ccId,numId,label){
  return `<div><label class="fl">${label}</label>
    <div style="display:flex;gap:8px">
      <select class="fs" id="${ccId}" style="flex:0 0 138px">${COUNTRY_CODES.map(([iso,name,code])=>`<option value="${code}"${iso==='MX'?' selected':''}>+${code} ${name}</option>`).join('')}</select>
      <input class="fi" id="${numId}" type="tel" inputmode="numeric" placeholder="981 000 0000" style="flex:1;min-width:0">
    </div>
  </div>`;
}
/* Reads a phoneFieldHtml pair into { cc, digits, full } where full is the
   stored form: "+" + dial code + digits (e.g. +52981XXXXXXX). */
function readPhone(ccId,numId){
  const ccEl=document.getElementById(ccId), numEl=document.getElementById(numId);
  const cc=(ccEl&&ccEl.value)||'52';
  const digits=((numEl&&numEl.value)||'').replace(/\D/g,'');
  return {cc,digits,full:'+'+cc+digits};
}

function renderAccountForm(){
  const isSignup=accountMode==='signup';
  document.getElementById('modal-title').textContent=isSignup?'Crear cuenta':'Iniciar sesión';
  let h=`<div class="subtog">
    <button class="subtog-btn${isSignup?' on':''}" onclick="setAccountMode('signup')">Crear cuenta</button>
    <button class="subtog-btn${isSignup?'':' on'}" onclick="setAccountMode('login')">Iniciar sesión</button>
  </div>`;
  if(isSignup)h+=`<div><label class="fl">Tu nombre</label><input class="fi" id="acct-name" type="text" placeholder="Ej. Ricardo Martín"></div>`;
  if(isSignup)h+=`<div><label class="fl">Correo</label><input class="fi" id="acct-email" type="email" placeholder="tu@correo.com"></div>`;
  h+=phoneFieldHtml('acct-phone-cc','acct-phone',isSignup?'Teléfono / WhatsApp':'Tu número de teléfono');
  h+=`<div><label class="fl">Contraseña</label>${passwordFieldHtml('acct-password','Mínimo 6 caracteres')}</div>`;
  if(!isSignup)h+=`<div style="text-align:right;margin-top:-8px"><a href="#" onclick="openForgotPassword();return false;" style="font-size:12.5px;color:var(--gulf);text-decoration:none">¿Olvidaste tu contraseña?</a></div>`;
  h+=`<div class="submit-note">${svgIco('alertas')}${isSignup?'Al terminar te pediremos un mensaje de WhatsApp <b>desde este mismo número</b> para activar tu cuenta. Hasta que la activemos puedes explorar, pero no publicar. Tu número nunca lo compartimos ni lo vendemos.':'Inicia sesión con tu número de teléfono y contraseña.'}</div>`;
  if(isSignup)h+=`<div style="font-size:12px;color:var(--ink3);text-align:center;margin-top:8px;line-height:1.5">Al crear tu cuenta, aceptas nuestro <a onclick="closeModal();nav('privacidad');return false;" href="#" style="color:var(--gulf);text-decoration:underline">Aviso de Privacidad</a> y <a onclick="closeModal();nav('terminos');return false;" href="#" style="color:var(--gulf);text-decoration:underline">Términos y Condiciones</a>.</div>`;
  h+=`<button class="submit-btn" id="acct-submit-btn" onclick="submitAuth()">${isSignup?'Crear cuenta':'Iniciar sesión'}</button>`;
  document.getElementById('modal-body').innerHTML=h;
  document.getElementById('modal-bg').classList.add('on');
}
function setAccountMode(mode){accountMode=mode;renderAccountForm();}

/* Real show/hide toggle, reused everywhere a password is typed (login,
   signup, and the new-password screen below) — one implementation, one
   pair of icons, parameterized by input id so it works wherever it's used. */
function passwordFieldHtml(id,placeholder){
  return `<div style="position:relative">
    <input class="fi" id="${id}" type="password" placeholder="${placeholder}" style="padding-right:44px">
    <button type="button" onclick="togglePasswordVisibility('${id}',this)" aria-label="Mostrar contraseña"
      style="position:absolute;right:2px;top:50%;transform:translateY(-50%);background:none;border:none;padding:9px;cursor:pointer;color:var(--ink3);display:flex;align-items:center">
      <svg class="ico" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
    </button>
  </div>`;
}
function togglePasswordVisibility(id,btn){
  const input=document.getElementById(id);
  if(!input)return;
  const showing=input.type==='text';
  input.type=showing?'password':'text';
  btn.innerHTML=showing
    ?'<svg class="ico" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'
    :'<svg class="ico" viewBox="0 0 24 24"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><path d="M1 1l22 22"/></svg>';
}

/* Forgot password — WhatsApp-mediated, no email required. Submitting
   creates a real request row (best-effort matched to an account by
   email) and opens WhatsApp with the account details pre-filled, so the
   founder can verify the incoming message's phone number against what's
   on file before approving. The email-link version above stays in place,
   dormant, ready for whenever real SMTP makes it usable — this is the
   flow actually in use right now. */
/* Shown after signup or a forgot-password request, before WhatsApp opens
   — explains WHY, so tapping the button is an informed choice instead of
   a surprise app-switch. The actual "continue the app flow" logic only
   runs once they've tapped through, not the moment this screen appears. */
let pendingWhatsAppContinue=null;
function openWhatsAppStep(waMessage,explanation,onContinue){
  pendingWhatsAppContinue=onContinue;
  const waUrl='https://wa.me/'+MICAMPECHE_WHATSAPP+'?text='+encodeURIComponent(waMessage);
  document.getElementById('modal-title').textContent='Un paso más: WhatsApp';
  document.getElementById('modal-body').innerHTML=`
    <div style="text-align:center;padding:16px 10px 6px">
      ${svgIco('checkBadge')}
      <div style="font-weight:700;font-size:15px;margin-top:10px">¿Por qué te pedimos esto?</div>
      <div style="color:var(--ink3);font-size:13px;margin-top:6px;line-height:1.5">${explanation}</div>
    </div>
    <a class="submit-btn" style="display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none" href="${waUrl}" target="_blank" rel="noopener" onclick="runWhatsAppStepContinue()">
      ${svgIco('phone')}Abrir WhatsApp
    </a>
  `;
  document.getElementById('modal-bg').classList.add('on');
}
function runWhatsAppStepContinue(){
  const fn=pendingWhatsAppContinue;
  pendingWhatsAppContinue=null;
  if(fn)fn();
}

function openForgotPassword(){
  document.getElementById('modal-title').textContent='Recuperar contraseña';
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--ink3);font-size:13px;margin-bottom:10px;line-height:1.5">Escribe el número de tu cuenta. Te llevaremos a WhatsApp para confirmar tu identidad — revisamos cada solicitud personalmente.</div>
    ${phoneFieldHtml('forgot-phone-cc','forgot-phone','Número de tu cuenta')}
    <button class="submit-btn" id="forgot-submit-btn" onclick="submitForgotPassword()">Continuar por WhatsApp</button>
    <button class="menu-item" style="margin-top:10px;justify-content:center" onclick="setAccountMode('login')">Volver a iniciar sesión</button>
    <button class="menu-item" style="margin-top:6px;justify-content:center" onclick="openCompletePasswordReset()">Ya tengo un código de restablecimiento</button>
  `;
  document.getElementById('modal-bg').classList.add('on');
}
async function submitForgotPassword(){
  const {digits,full:phone}=readPhone('forgot-phone-cc','forgot-phone');
  if(digits.length<6){toast('Escribe tu número');return;}
  const btn=document.getElementById('forgot-submit-btn');
  const original=btn.textContent;
  btn.disabled=true;btn.textContent='Enviando…';
  const email=await MC.emailForPhone(phone);
  if(!email){
    btn.disabled=false;btn.textContent=original;
    toast('No encontramos una cuenta con ese número.');
    return;
  }
  const {error}=await MC.requestPasswordResetWhatsApp(email);
  btn.disabled=false;btn.textContent=original;
  if(error){toast('No se pudo enviar tu solicitud — intenta de nuevo.');return;}
  const msg='Hola, olvidé mi contraseña de MiCampeche. Mi número registrado es: '+phone;
  openWhatsAppStep(msg,'Para confirmar que fuiste tú quien pidió este cambio, necesitamos un mensaje tuyo por WhatsApp desde el número registrado en tu cuenta.',()=>{
    toast('Solicitud enviada — revisaremos tu mensaje pronto ✓');
    setAccountMode('login');
  });
}

/* Once the founder has verified the WhatsApp message and approved the
   request, they relay a 6-digit code manually — this is where the
   requester enters it (with their email and new password) to actually
   complete the reset. */
function openCompletePasswordReset(){
  document.getElementById('modal-title').textContent='Ingresa tu código';
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--ink3);font-size:13px;margin-bottom:10px;line-height:1.5">Escribe el número de tu cuenta, el código de 6 dígitos que te dimos por WhatsApp, y tu nueva contraseña.</div>
    ${phoneFieldHtml('reset-complete-phone-cc','reset-complete-phone','Número de tu cuenta')}
    <div><label class="fl">Código de 6 dígitos</label><input class="fi" id="reset-complete-code" type="text" inputmode="numeric" maxlength="6" placeholder="000000"></div>
    <div><label class="fl">Nueva contraseña</label>${passwordFieldHtml('reset-complete-password','Mínimo 6 caracteres')}</div>
    <button class="submit-btn" id="reset-complete-btn" onclick="submitCompletePasswordReset()">Guardar nueva contraseña</button>
    <button class="menu-item" style="margin-top:10px;justify-content:center" onclick="setAccountMode('login')">Volver a iniciar sesión</button>
  `;
  document.getElementById('modal-bg').classList.add('on');
}
async function submitCompletePasswordReset(){
  const {digits,full:phone}=readPhone('reset-complete-phone-cc','reset-complete-phone');
  const code=(document.getElementById('reset-complete-code').value||'').trim();
  const pw=document.getElementById('reset-complete-password').value||'';
  if(digits.length<6||!code){toast('Completa tu número y código');return;}
  if(pw.length<6){toast('La contraseña debe tener al menos 6 caracteres');return;}
  const btn=document.getElementById('reset-complete-btn');
  const original=btn.textContent;
  btn.disabled=true;btn.textContent='Guardando…';
  const email=await MC.emailForPhone(phone);
  if(!email){btn.disabled=false;btn.textContent=original;toast('No encontramos una cuenta con ese número.');return;}
  const {data,error}=await MC.completePasswordResetWhatsApp(email,code,pw);
  btn.disabled=false;btn.textContent=original;
  if(error||data!=='ok'){
    toast(data==='password_too_short'?'La contraseña debe tener al menos 6 caracteres':'Código inválido o vencido — pide uno nuevo por WhatsApp');
    return;
  }
  toast('¡Contraseña actualizada! Ya puedes iniciar sesión ✓');
  setAccountMode('login');
}

/* Admin side: reviewing and acting on reset requests. A distinct screen
   from the content moderation queue — the actions here (approve/reject)
   mean something different (unlocking a password entry, not publishing
   content), so it isn't folded into the same generic list/detail flow. */
/* ══════════════ ADMIN: unified "Pendiente" queue ══════════════
   Combines content moderation, phone verification, and password reset
   requests into ONE list — tapping an item routes to the right
   detail/action screen based on its kind. Replaces three separate admin
   buttons with one, since they're all really the same thing: something
   waiting on the founder's personal review. */
async function openPasswordResetDetail(requestId){
  const item=moderationQueue.find(i=>i.kind==='password'&&i.id===requestId);
  if(!item)return;
  mcModalPushView('pendingList');
  const r=item.raw;
  document.getElementById('modal-title').textContent='Restablecer contraseña';
  document.getElementById('modal-body').innerHTML=`
    <div style="margin-bottom:12px"><div class="fl">Correo solicitado</div><div style="font-size:14px;margin-top:2px">${e(r.claimedEmail)}</div></div>
    <div style="margin-bottom:12px"><div class="fl">Cuenta</div><div style="font-size:14px;margin-top:2px">${r.matchedName?e(r.matchedName)+' · '+e(r.matchedPhone||'—'):'⚠️ No se encontró una cuenta con este correo'}</div></div>
    <div style="color:var(--ink3);font-size:12px;margin-bottom:12px">Pedido ${relTimeEs(r.requestedAt)}</div>
    <div style="color:var(--ink3);font-size:11.5px;margin-bottom:12px;font-style:italic">Compara el número desde el que te escribieron en WhatsApp con el teléfono en archivo antes de aprobar.</div>
    <div style="display:flex;gap:8px">
      <button class="submit-btn" style="margin-top:0;flex:1" onclick="approvePasswordResetRequest('${requestId}')">Aprobar</button>
      <button class="submit-btn" style="margin-top:0;flex:1;background:var(--paper2);color:var(--ink)" onclick="rejectPasswordResetRequest('${requestId}')">Rechazar</button>
    </div>
    <button class="menu-item" style="margin-top:10px;justify-content:center" onclick="mcModalBack('pendingList')">${svgIco('checkBadge')}<span class="menu-item-lbl">Volver a la lista</span></button>
  `;
}
async function approvePasswordResetRequest(id){
  const {data:code,error}=await MC.approvePasswordReset(id);
  if(error){toast(pgErrorToast(error,'No se pudo aprobar.'));return;}
  const prevIndex=moderationQueue.findIndex(i=>i.kind==='password'&&i.id===id);
  moderationQueue=moderationQueue.filter(i=>!(i.kind==='password'&&i.id===id));
  toast('Aprobado — código: '+code+' (compártelo por WhatsApp, válido 30 min)');
  refreshPendingBadge();
  advancePendingQueue(prevIndex);
}
async function rejectPasswordResetRequest(id){
  const {error}=await MC.rejectPasswordReset(id,'No se pudo verificar la identidad');
  if(error){toast(pgErrorToast(error,'No se pudo rechazar.'));return;}
  const prevIndex=moderationQueue.findIndex(i=>i.kind==='password'&&i.id===id);
  moderationQueue=moderationQueue.filter(i=>!(i.kind==='password'&&i.id===id));
  toast('Rechazado');
  refreshPendingBadge();
  advancePendingQueue(prevIndex);
}

/* This is a security signal only (see MC.updateMyAccount's comment) —
   approving/rejecting never blocks the account from logging in or
   posting, only affects its verified badge and whether that phone
   number can ever be verified elsewhere. */
function openPhoneVerificationDetail(profileId){
  const item=moderationQueue.find(i=>i.kind==='phone'&&i.id===profileId);
  if(!item)return;
  mcModalPushView('pendingList');
  const p=item.raw;
  document.getElementById('modal-title').textContent='Verificación de teléfono';
  document.getElementById('modal-body').innerHTML=`
    <div style="margin-bottom:12px"><div class="fl">Nombre</div><div style="font-size:14px;margin-top:2px">${e(p.display_name||'Vecino')}</div></div>
    <div style="margin-bottom:12px"><div class="fl">Teléfono</div><div style="font-size:14px;margin-top:2px">${e(p.phone||'—')}</div></div>
    <div style="color:var(--ink3);font-size:12px;margin-bottom:12px">Creada ${relTimeEs(p.created_at)}</div>
    <div style="color:var(--ink3);font-size:11.5px;margin-bottom:12px;font-style:italic">Compara este número con el que te escribió por WhatsApp antes de aprobar.</div>
    <div style="display:flex;gap:8px">
      <button class="submit-btn" style="margin-top:0;flex:1" onclick="approvePhoneVerification('${profileId}')">Aprobar</button>
      <button class="submit-btn" style="margin-top:0;flex:1;background:var(--paper2);color:var(--ink)" onclick="rejectPhoneVerification('${profileId}')">Rechazar</button>
    </div>
    <button class="menu-item" style="margin-top:10px;justify-content:center" onclick="mcModalBack('pendingList')">${svgIco('checkBadge')}<span class="menu-item-lbl">Volver a la lista</span></button>
  `;
}
async function approvePhoneVerification(profileId){
  const {error}=await MC.approvePhoneVerification(profileId);
  if(error){toast(pgErrorToast(error,'No se pudo aprobar — puede que ese número ya esté verificado en otra cuenta.'));return;}
  const prevIndex=moderationQueue.findIndex(i=>i.kind==='phone'&&i.id===profileId);
  moderationQueue=moderationQueue.filter(i=>!(i.kind==='phone'&&i.id===profileId));
  toast('Teléfono verificado ✓');
  refreshPendingBadge();
  advancePendingQueue(prevIndex);
}
async function rejectPhoneVerification(profileId){
  const {error}=await MC.rejectPhoneVerification(profileId,'No se pudo confirmar el número por WhatsApp');
  if(error){toast(pgErrorToast(error,'No se pudo rechazar.'));return;}
  const prevIndex=moderationQueue.findIndex(i=>i.kind==='phone'&&i.id===profileId);
  moderationQueue=moderationQueue.filter(i=>!(i.kind==='phone'&&i.id===profileId));
  toast('Rechazado');
  refreshPendingBadge();
  advancePendingQueue(prevIndex);
}


/* User-facing: editing your own name/phone. Changing the phone always
   sends it back for re-verification (a real DB trigger enforces this,
   not this code) — matches exactly how editing a business resets it to
   pending too. */
let lastFetchedAccount=null;
function openEditAccount(){
  const acct=lastFetchedAccount;
  if(!acct)return;
  document.getElementById('modal-title').textContent='Editar mi cuenta';
  document.getElementById('modal-body').innerHTML=`
    <div><label class="fl">Tu nombre</label><input class="fi" id="edit-acct-name" type="text" value="${e(acct.displayName||'')}"></div>
    <div><label class="fl">Teléfono / WhatsApp</label><input class="fi" id="edit-acct-phone" type="tel" value="${e(acct.phone||'')}" placeholder="+52 981 000 0000"></div>
    <div class="submit-note">${svgIco('alertas')}Si cambias tu número, tendrá que verificarse de nuevo por WhatsApp.</div>
    <button class="submit-btn" id="edit-acct-btn" onclick="submitEditAccount()">Guardar cambios</button>
  `;
  document.getElementById('modal-bg').classList.add('on');
}
async function submitEditAccount(){
  const name=(document.getElementById('edit-acct-name').value||'').trim();
  const phone=(document.getElementById('edit-acct-phone').value||'').trim();
  if(!name||!phone){toast('Completa tu nombre y teléfono');return;}
  const acct=lastFetchedAccount;
  if(acct&&phone!==acct.phone&&await MC.isPhoneAlreadyVerified(phone)){
    toast('Ese número ya está verificado en otra cuenta');
    return;
  }
  const btn=document.getElementById('edit-acct-btn');
  const original=btn.textContent;
  btn.disabled=true;btn.textContent='Guardando…';
  const {error}=await MC.updateMyAccount({name,phone});
  btn.disabled=false;btn.textContent=original;
  if(error){toast(pgErrorToast(error,'No se pudieron guardar los cambios.'));return;}
  toast('Cambios guardados ✓');
  await openAccount();
}

/* Set new password — shown automatically when Supabase's recovery-link
   redirect lands back on the app (see the onAuthStateChange listener in
   supabase-client.js), not something the user navigates to directly.
   Belongs to the EMAIL-link flow above, dormant until real SMTP exists. */
function openSetNewPassword(){
  document.getElementById('modal-title').textContent='Crea una nueva contraseña';
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--ink3);font-size:13px;margin-bottom:10px;line-height:1.5">Escribe tu nueva contraseña para tu cuenta.</div>
    <div><label class="fl">Nueva contraseña</label>${passwordFieldHtml('new-password-input','Mínimo 6 caracteres')}</div>
    <button class="submit-btn" id="new-password-btn" onclick="submitNewPassword()">Guardar contraseña</button>
  `;
  document.getElementById('modal-bg').classList.add('on');
}
async function submitNewPassword(){
  const pw=document.getElementById('new-password-input').value||'';
  if(pw.length<6){toast('La contraseña debe tener al menos 6 caracteres');return;}
  const btn=document.getElementById('new-password-btn');
  const original=btn.textContent;
  btn.disabled=true;btn.textContent='Guardando…';
  const {error}=await MC.setNewPassword(pw);
  btn.disabled=false;btn.textContent=original;
  if(error){toast(authErrorToast(error));return;}
  toast('¡Contraseña actualizada! ✓');
  closeModal();
}

async function submitAuth(){
  const password=document.getElementById('acct-password').value||'';
  const btn=document.getElementById('acct-submit-btn');
  const original=btn.textContent;
  let result;
  let signedUpName=null,signedUpPhone=null;
  if(accountMode==='signup'){
    const email=(document.getElementById('acct-email').value||'').trim();
    const name=(document.getElementById('acct-name').value||'').trim()||'Vecino';
    const {digits:phoneDigits,full:fullPhone}=readPhone('acct-phone-cc','acct-phone');
    if(!email||!password){toast('Completa correo y contraseña');return;}
    if(phoneDigits.length<6||phoneDigits.length>12){toast('Ingresa un número de teléfono válido');return;}
    if(await MC.isPhoneAlreadyVerified(fullPhone)){
      toast('Ese número ya está verificado en otra cuenta — usa uno diferente');
      return;
    }
    btn.disabled=true;btn.textContent='Un momento…';
    result=await MC.signUp(email,password,name,fullPhone);
    signedUpName=name;signedUpPhone=fullPhone;
  } else {
    const {digits:phoneDigits,full:fullPhone}=readPhone('acct-phone-cc','acct-phone');
    if(phoneDigits.length<6||!password){toast('Escribe tu número y contraseña');return;}
    btn.disabled=true;btn.textContent='Un momento…';
    result=await MC.signInWithPhone(fullPhone,password);
  }
  btn.disabled=false;btn.textContent=original;
  if(result.error){toast(authErrorToast(result.error));return;}
  refreshPendingBadge();
  refreshHeaderAccount();
  if(accountMode==='signup'&&signedUpPhone){
    // The account exists now, but it can't write anything until the founder
    // confirms this WhatsApp message came from the number that was
    // registered — enforced by is_verified_writer RLS, not just the UI.
    const msg='Hola, acabo de crear mi cuenta en MiCampeche. Mi nombre es '+signedUpName+' y mi número es: '+signedUpPhone;
    openWhatsAppStep(msg,'El mensaje tiene que venir del <b>mismo número</b> que registraste ('+e(signedUpPhone)+'). Si llega desde otro número no podremos activar tu cuenta y tendrás que crearla de nuevo con el número correcto. Hasta que la activemos puedes explorar, pero no publicar ni interactuar.',async()=>{
      toast('¡Cuenta creada! Actívala enviando el WhatsApp desde tu número ✓');
      maybeNudgeInstall();
      const next=pendingPostAfterAuth;
      pendingPostAfterAuth=null;
      if(next){await openPost(next);} else {closeModal();}
    });
    return;
  }
  toast('Sesión iniciada ✓');
  maybeNudgeInstall();
  const next=pendingPostAfterAuth;
  pendingPostAfterAuth=null;
  if(next){await openPost(next);} else {closeModal();}
}
async function doSignOut(){
  await MC.signOut();
  refreshPendingBadge();
  refreshHeaderAccount();
  closeModal();
  toast('Sesión cerrada ✓');
}

/* ══════════════ ADMIN: moderation queue ══════════════
   Three screens: list (tap to open) → detail (every field the submitter
   sent, then Aprobar/Rechazar) → reject reason (required context sent
   back to the submitter, not just a silent decline). Reuses the same
   #modal-bg/#modal-body infrastructure as everything else. Real RLS
   backs every action here — this UI is convenience, not the security
   boundary. */
let moderationQueue=[];
let cancellationReminders=[];
let mandaditoReports=[];
let pendingTab='approvals';
const PENDING_TABS=[['approvals','Aprobaciones'],['cancellations','Cancelaciones'],['mandaditoReports','Reportes']];
async function resolveCancellationReminder(id){
  const {error}=await MC.resolveCancellationReminder(id);
  if(error){toast(pgErrorToast(error,'No se pudo marcar como resuelto.'));return;}
  cancellationReminders=cancellationReminders.filter(r=>r.id!==id);
  renderPendingQueue();
  toast('Marcado como resuelto ✓');
}
async function resolveMandaditoReportAdmin(id){
  const {error}=await MC.markMandaditoReportReviewed(id);
  if(error){toast(pgErrorToast(error,'No se pudo marcar como revisado.'));return;}
  mandaditoReports=mandaditoReports.filter(r=>r.id!==id);
  renderPendingQueue();
  toast('Marcado como revisado ✓');
}
async function openPending(){
  // Opened from the "Tu cuenta" view — remember it so ✕ / back returns
  // there, not all the way to the home screen. Restore replays the snapshot
  // instantly (keeps back navigation synchronous), then re-fetches the
  // account view live on the next tick so counts an admin just cleared in
  // here don't linger — but only if the user is actually still sitting on
  // the account view by then, not if they've navigated somewhere else.
  if(document.getElementById('modal-bg').classList.contains('on')){
    const snap=mcModalSnap();
    mcModalPushView('account',()=>{
      snap();
      setTimeout(()=>{
        if(document.getElementById('modal-bg').classList.contains('on')
          &&document.getElementById('modal-title').textContent==='Tu cuenta')openAccount();
      },0);
    });
  }
  pendingTab='approvals';
  document.getElementById('modal-title').textContent='Pendiente';
  document.getElementById('modal-body').innerHTML=`<div style="text-align:center;padding:30px 0;color:var(--ink3)">Cargando…</div>`;
  document.getElementById('modal-bg').classList.add('on');
  const [content,phone,password,cancellations,reports]=await Promise.all([
    MC.fetchPendingQueue(),
    MC.fetchPendingPhoneVerifications(),
    MC.fetchPasswordResetRequests(),
    MC.fetchCancellationReminders(),
    MC.fetchMandaditoReports()
  ]);
  moderationQueue=[
    ...content.map(c=>({kind:'content',...c})),
    ...phone.map(p=>({kind:'phone',id:p.id,label:'Verificación de teléfono',title:p.display_name||'Vecino',submittedBy:p.phone||'—',createdAt:p.created_at,raw:p})),
    ...password.map(r=>({kind:'password',id:r.id,label:'Restablecer contraseña',title:r.claimedEmail,submittedBy:r.matchedName?('Cuenta: '+r.matchedName):'⚠️ Sin cuenta encontrada',createdAt:r.requestedAt,raw:r}))
  ].sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt));
  cancellationReminders=cancellations;
  mandaditoReports=reports;
  renderPendingQueue();
}
function setPendingTab(tab){pendingTab=tab;renderPendingQueue();}
function renderPendingQueue(){
  document.getElementById('modal-title').textContent=`Pendiente (${moderationQueue.length})`;
  const tabsHtml=`<div style="display:flex;gap:8px;margin-bottom:14px">${PENDING_TABS.map(([v,l])=>{
    const count=v==='approvals'?moderationQueue.length:v==='cancellations'?cancellationReminders.length:mandaditoReports.length;
    return `<button class="chip${v===pendingTab?' on':''}" onclick="setPendingTab('${v}')">${l} (${count})</button>`;
  }).join('')}</div>`;
  if(pendingTab==='mandaditoReports'){
    if(!mandaditoReports.length){
      document.getElementById('modal-body').innerHTML=tabsHtml+`<div style="text-align:center;padding:24px 10px;color:var(--ink3)">${svgIco('checkBadge')}<div style="margin-top:8px">No hay reportes pendientes.</div></div>`;
      return;
    }
    const sourceLbl={nudge:'Reporte automático',manual:'Reporte manual'};
    document.getElementById('modal-body').innerHTML=tabsHtml+mandaditoReports.map(r=>`
      <div style="border:1.5px solid var(--line2);border-radius:var(--rs);padding:12px 14px;margin-bottom:10px">
        <div style="font-size:11px;font-weight:700;color:var(--gulf);text-transform:uppercase;letter-spacing:.04em">${e(sourceLbl[r.source]||r.source)}</div>
        <div style="font-weight:700;font-size:14.5px;margin-top:3px">${e((r.mandaditos&&r.mandaditos.display_name)||'Mandadito')}</div>
        <div style="color:var(--ink2);font-size:13px;margin-top:6px;white-space:pre-wrap">${e(r.note||'(sin nota)')}</div>
        <div style="color:var(--ink3);font-size:12px;margin-top:6px">${relTimeEs(r.created_at)}</div>
        <button class="submit-btn" style="margin-top:10px;padding:9px;font-size:13px" onclick="resolveMandaditoReportAdmin('${r.id}')">Marcar revisado</button>
      </div>
    `).join('');
    return;
  }
  if(pendingTab==='cancellations'){
    if(!cancellationReminders.length){
      document.getElementById('modal-body').innerHTML=tabsHtml+`<div style="text-align:center;padding:24px 10px;color:var(--ink3)">${svgIco('checkBadge')}<div style="margin-top:8px">No hay cancelaciones pendientes.</div></div>`;
      return;
    }
    const reasonLbl={business_removed:'Negocio eliminado',premium_downgraded:'Premium cancelado'};
    document.getElementById('modal-body').innerHTML=tabsHtml+cancellationReminders.map(r=>`
      <div style="border:1.5px solid var(--line2);border-radius:var(--rs);padding:12px 14px;margin-bottom:10px">
        <div style="font-size:11px;font-weight:700;color:var(--gulf);text-transform:uppercase;letter-spacing:.04em">${e(reasonLbl[r.reason]||r.reason)}</div>
        <div style="font-weight:700;font-size:14.5px;margin-top:3px">${e(r.business_name)}</div>
        <div style="color:var(--ink3);font-size:12px;margin-top:2px">${relTimeEs(r.created_at)}</div>
        <button class="submit-btn" style="margin-top:10px;padding:9px;font-size:13px" onclick="resolveCancellationReminder('${r.id}')">Ya cancelé en Stripe</button>
      </div>
    `).join('');
    return;
  }
  if(!moderationQueue.length){
    document.getElementById('modal-body').innerHTML=tabsHtml+`<div style="text-align:center;padding:24px 10px;color:var(--ink3)">${svgIco('checkBadge')}<div style="margin-top:8px">No hay nada pendiente.</div></div>`;
    return;
  }
  let h='';
  moderationQueue.forEach(item=>{
    if(item.kind==='phone'){
      // Name, number and age are all on the row already — the whole
      // review is "does this match the WhatsApp that just came in?" — so
      // approve/reject inline. This is the one queue item that keeps a
      // real person from doing anything until it's cleared, so cutting it
      // from four taps to one matters. Tapping the row still opens the
      // full detail for the cautious path.
      h+=`<div style="border:1.5px solid var(--line2);border-radius:var(--rs);padding:12px 14px;margin-bottom:10px">
        <div style="cursor:pointer" onclick="openPhoneVerificationDetail('${item.id}')">
          <div style="font-size:11px;font-weight:700;color:var(--gulf);text-transform:uppercase;letter-spacing:.04em">${e(item.label)}</div>
          <div style="font-weight:700;font-size:14.5px;margin-top:3px">${e(item.title)}</div>
          <div style="color:var(--ink3);font-size:12px;margin-top:2px">${e(item.submittedBy)} · ${relTimeEs(item.createdAt)}</div>
        </div>
        <div style="color:var(--ink3);font-size:11px;margin-top:8px">¿Te escribió por WhatsApp desde este número?</div>
        <div style="display:flex;gap:8px;margin-top:6px">
          <button class="submit-btn" style="margin-top:0;flex:1;padding:9px;font-size:13px" onclick="approvePhoneVerification('${item.id}')">Sí, aprobar</button>
          <button class="submit-btn" style="margin-top:0;flex:1;padding:9px;font-size:13px;background:var(--paper2);color:var(--ink)" onclick="rejectPhoneVerification('${item.id}')">No, rechazar</button>
        </div>
      </div>`;
      return;
    }
    const onclick=item.kind==='content'?`openModerationDetail('${item.table}','${item.id}')`
      :`openPasswordResetDetail('${item.id}')`;
    h+=`<div style="border:1.5px solid var(--line2);border-radius:var(--rs);padding:12px 14px;margin-bottom:10px;cursor:pointer" onclick="${onclick}">
      <div style="font-size:11px;font-weight:700;color:var(--gulf);text-transform:uppercase;letter-spacing:.04em">${e(item.label)}</div>
      <div style="font-weight:700;font-size:14.5px;margin-top:3px">${e(item.title)}</div>
      <div style="color:var(--ink3);font-size:12px;margin-top:2px">${e(item.submittedBy)} · ${relTimeEs(item.createdAt)}</div>
    </div>`;
  });
  document.getElementById('modal-body').innerHTML=tabsHtml+h;
}

/* After handling one Pendiente item (approve/reject, any of its three
   kinds), jump straight to whichever item is now in that same list
   position — instead of dropping back to the list and making the admin
   tap the next row themselves. Only kicks in when the action came from
   an actual open detail view (i.e. 'pendingList' really is on the modal
   stack); the phone-verification quick-approve buttons embedded
   directly in the list itself skip this and just stay on the
   (refreshed) list, unchanged from today's behavior. */
function openPendingItem(item){
  if(!item)return;
  if(item.kind==='content')openModerationDetail(item.table,item.id);
  else if(item.kind==='phone')openPhoneVerificationDetail(item.id);
  else if(item.kind==='password')openPasswordResetDetail(item.id);
}
function advancePendingQueue(prevIndex){
  const cameFromDetail=mcModalStack.some(s=>s.key==='pendingList');
  if(cameFromDetail)mcModalBack('pendingList');
  renderPendingQueue();
  if(!cameFromDetail||!moderationQueue.length)return;
  const nextIndex=Math.min(prevIndex,moderationQueue.length-1);
  openPendingItem(moderationQueue[nextIndex]);
}

/* ══════════════ RESIDENT: "Mis publicaciones" ══════════════
   The resident-facing sibling of the admin Pendiente view — same
   modal-push-view pattern, same "one unified list across tables" shape,
   but scoped to the current user's own rows (any status) and tappable
   straight into the edit form. Open to every signed-in account. */
let myPostsList=[];
let myPostsTab='pending';
let myPostsTypeFilter=null; // null = "Todos"; otherwise a table name like 'productos'
let myPostsTableFilter=null; // null = show every self-editable table (the plain "Mis publicaciones" case); an array like ['productos'] scopes the same list/tabs/edit/discard machinery to just that table, used by the new "Mi negocio" sections
let myPostsTitleBase='Mis publicaciones';
async function openMyPosts(tables,title,backKey){
  if(document.getElementById('modal-bg').classList.contains('on'))mcModalPushView(backKey||'account');
  myPostsTab='pending';
  myPostsTypeFilter=null;
  myPostsTableFilter=tables||null;
  myPostsTitleBase=title||'Mis publicaciones';
  document.getElementById('modal-title').textContent=myPostsTitleBase;
  document.getElementById('modal-body').innerHTML=`<div style="text-align:center;padding:30px 0;color:var(--ink3)">Cargando…</div>`;
  document.getElementById('modal-bg').classList.add('on');
  myPostsList=await MC.fetchMyPosts();
  renderMyPosts();
}
async function refreshMyPosts(){
  myPostsList=await MC.fetchMyPosts();
  renderMyPosts();
}
function setMyPostsTab(tab){myPostsTab=tab;renderMyPosts();}
function setMyPostsTypeFilter(t){myPostsTypeFilter=t||null;renderMyPosts();}
/* An event stops being "Activo" once its last day has fully passed — the
   same boundary the daily cleanup-expired-eventos job uses (falls back
   to event_date for single-day events), so a finished event sits in the
   new Finalizado tab for the same ~7-day window before that job deletes
   it. Eventos and Mascotas are the two self-editable tables with a
   natural "finished" state; every other one only ever buckets into
   pending or active. */
function isEventoFinished(raw){
  if(!raw)return false;
  const end=raw.end_date||raw.event_date;
  return !!end&&end<TODAY_DS;
}
/* A rejected post buckets into "pending" alongside true pending items —
   neither is currently live, and both need the submitter's attention
   (a rejected one gets the extra Editar/Descartar actions below). */
function myPostBucket(p){
  if(p.status==='pending'||p.status==='rejected')return 'pending';
  if(p.table==='mascotas'&&p.raw&&(p.raw.resolved_at||(p.raw.type==='campana'&&p.raw.event_date&&p.raw.event_date<TODAY_DS)))return 'finished';
  if(p.table==='eventos'&&isEventoFinished(p.raw))return 'finished';
  return 'active';
}
const MY_POSTS_TABS=[['pending','Pendiente'],['active','Activo'],['finished','Finalizado']];
/* Status pill — reuses the three labels + colours already used for
   business status (renderBusinessProfile) and the account view, plus
   --signal for rejected since that row needs action. `bucket` overrides
   the label to "Finalizado" for a finished (but still status='published')
   event — the raw DB status alone can't distinguish that case. */
function postStatusBadge(status,bucket){
  if(bucket==='finished')return `<span style="font-size:10px;font-weight:700;color:var(--ink3);text-transform:uppercase;letter-spacing:.04em;flex-shrink:0">Finalizado</span>`;
  const map={
    published:['Publicado','var(--gulf)'],
    pending:['En revisión','var(--wall-dk)'],
    rejected:['No aprobado','var(--signal)']
  };
  const [lbl,color]=map[status]||map.pending;
  return `<span style="font-size:10px;font-weight:700;color:${color};text-transform:uppercase;letter-spacing:.04em;flex-shrink:0">${lbl}</span>`;
}
function renderMyPosts(){
  const byTable=myPostsTableFilter?myPostsList.filter(p=>myPostsTableFilter.includes(p.table)):myPostsList;
  // Type filter row only makes sense on the generic "Mis publicaciones" entry
  // point (myPostsTableFilter null) — a Mi negocio sub-view is already
  // scoped to one table, so there's nothing to filter there.
  const typeChipsHtml=(()=>{
    if(myPostsTableFilter)return '';
    const seen=new Map();
    myPostsList.forEach(p=>{if(!seen.has(p.table))seen.set(p.table,p.label);});
    if(seen.size<2)return ''; // only one type present — a filter row would be pointless
    return `<div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap">
      <button class="chip${myPostsTypeFilter?'':' on'}" onclick="setMyPostsTypeFilter('')">Todos</button>
      ${[...seen.entries()].map(([t,l])=>`<button class="chip${t===myPostsTypeFilter?' on':''}" onclick="setMyPostsTypeFilter('${t}')">${e(l)}</button>`).join('')}
    </div>`;
  })();
  const source=myPostsTypeFilter?byTable.filter(p=>p.table===myPostsTypeFilter):byTable;
  document.getElementById('modal-title').textContent=`${myPostsTitleBase} (${source.length})`;
  if(!source.length){
    document.getElementById('modal-body').innerHTML=typeChipsHtml+`<div style="text-align:center;padding:30px 10px;color:var(--ink3)">${svgIco('checkBadge')}<div style="margin-top:8px">Aún no has publicado nada.</div></div>`;
    return;
  }
  const buckets={pending:[],active:[],finished:[]};
  source.forEach(p=>buckets[myPostBucket(p)].push(p));
  const tabsHtml=`<div style="display:flex;gap:8px;margin-bottom:14px">${MY_POSTS_TABS.map(([v,l])=>
    `<button class="chip${v===myPostsTab?' on':''}" onclick="setMyPostsTab('${v}')">${l} (${buckets[v].length})</button>`
  ).join('')}</div>`;
  const list=buckets[myPostsTab];
  const emptyMsgs={pending:'Nada en revisión ahora mismo.',active:'Nada activo todavía.',finished:'Nada finalizado todavía.'};
  if(!list.length){
    document.getElementById('modal-body').innerHTML=typeChipsHtml+tabsHtml+`<div style="text-align:center;padding:24px 10px;color:var(--ink3)">${emptyMsgs[myPostsTab]}</div>`;
    return;
  }
  const MASCOTA_RESOLVE_LABEL={adopcion:'Marcar como adoptado',perdido:'Ya apareció',encontrado:'Ya lo recogieron'};
  document.getElementById('modal-body').innerHTML=typeChipsHtml+tabsHtml+list.map(p=>{
    const isRejected=p.status==='rejected';
    const editable=!!MY_POST_EDIT[p.table]&&!isRejected;
    const showMascotaResolve=p.table==='mascotas'&&p.status==='published'&&p.raw&&p.raw.type!=='campana';
    return `<div style="border:1.5px solid var(--line2);border-radius:var(--rs);padding:12px 14px;margin-bottom:10px${editable?';cursor:pointer':''}"${editable?` onclick="openMyPostEdit('${p.table}','${e(String(p.id))}')"`:''}>
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px">
        <span style="font-size:11px;font-weight:700;color:var(--gulf);text-transform:uppercase;letter-spacing:.04em">${e(p.label)}</span>
        <div style="display:flex;align-items:center;gap:10px">
          ${postStatusBadge(p.status,myPostsTab)}
          <button aria-label="Descartar" style="background:none;border:none;padding:2px;cursor:pointer;color:var(--ink3);display:flex" onclick="event.stopPropagation();confirmDiscardMyPost('${p.table}','${e(String(p.id))}')">${svgIco('trash')}</button>
        </div>
      </div>
      <div style="font-weight:700;font-size:14.5px;margin-top:3px">${e(p.title)}</div>
      <div style="color:var(--ink3);font-size:12px;margin-top:2px">${relTimeEs(p.createdAt)}${editable?' · toca para editar':''}</div>
      ${(isRejected&&p.rejectionReason)?`<div style="color:var(--signal);font-size:12.5px;margin-top:6px">${e(p.rejectionReason)}</div>`:''}
      ${isRejected?`<div style="display:flex;gap:8px;margin-top:10px">
        <button class="submit-btn" style="margin-top:0;flex:1;padding:9px;font-size:13px" onclick="openMyPostEdit('${p.table}','${e(String(p.id))}')">Editar y reenviar</button>
      </div>`:''}
      ${showMascotaResolve?`<div style="display:flex;gap:8px;margin-top:10px">
        <button class="submit-btn" style="margin-top:0;flex:1;padding:9px;font-size:13px" onclick="event.stopPropagation();resolveMascota('${e(String(p.id))}',${p.raw.resolved_at?'false':'true'})">${p.raw.resolved_at?'Reactivar':(MASCOTA_RESOLVE_LABEL[p.raw.type]||'Marcar como resuelto')}</button>
      </div>`:''}
    </div>`;
  }).join('');
}
async function resolveMascota(id,resolved){
  const {error}=await MC.setMascotaResolved(id,resolved);
  if(error){toast(pgErrorToast(error,'No se pudo actualizar.'));return;}
  toast(resolved?'Listo — ya no aparece en Mascotas ✓':'Publicación reactivada ✓');
  refreshContent();refreshMyPosts();
}
/* Look the item up by table+id rather than passing its title through the
   onclick chain — titles are free text and may contain a single quote
   (e()'s escaping doesn't cover those), which would break out of the
   quoted JS-string argument in the onclick attribute. Matches the
   existing admRm/wireAdminRemove pattern's reason for avoiding the same
   hazard, just via a lookup instead of a data-attribute round-trip. */
function confirmDiscardMyPost(table,id){
  const item=(myPostsList||[]).find(p=>p.table===table&&String(p.id)===String(id));
  mcModalPushView('myPosts');
  document.getElementById('modal-title').textContent='Descartar publicación';
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--ink3);font-size:13px;line-height:1.5;margin-bottom:6px">Esto borra la publicación por completo — no se puede deshacer.${item&&item.status==='published'?' Está publicada ahora mismo — otros vecinos ya pueden verla.':''}</div>
    ${item?`<div style="font-weight:700;font-size:14px;margin:8px 0 12px">${e(item.title)}</div>`:''}
    <div style="display:flex;gap:8px;margin-top:14px">
      <button class="submit-btn" style="margin-top:0;flex:1;background:var(--paper2);color:var(--ink)" onclick="mcModalBack('myPosts')">Cancelar</button>
      <button class="submit-btn" style="margin-top:0;flex:1;background:var(--signal);color:#fff" id="discard-my-post-btn" onclick="discardMyPost('${table}','${e(String(id))}')">Descartar</button>
    </div>
  `;
}
async function discardMyPost(table,id){
  const btn=document.getElementById('discard-my-post-btn');
  if(btn){btn.disabled=true;btn.textContent='Descartando…';}
  const {error}=await MC.deleteMyPost(table,id);
  if(error){toast(pgErrorToast(error,'No se pudo descartar.'));if(btn){btn.disabled=false;btn.textContent='Descartar';}return;}
  toast('Publicación descartada');
  mcModalBack('myPosts');
  refreshMyPosts();
}
/* Per-table map from a stored row back to POST_FORMS field keys. Every
   value bucket maps to a field kind the form renderer produced:
   input → <input>/<textarea>/<select> (.value), seg → segPick a button,
   multi → toggle mchips, img → prefill uploadedImageUrls + preview. */
const MY_POST_EDIT={
  avisos:{form:'avisos',fill:r=>({
    input:{title:r.title,desc:r.description,cat:r.category,colonia:r.colonia||'',contact_phone:r.contact_phone},
    seg:{anon:r.anonymous?'si':'no',want_contact:r.contact_phone?'si':'no'},
    multi:{contact_methods:r.contact_methods},
    img:{photo:r.image_url}
  })},
  empleos:{form:'empleos',fill:r=>({
    input:{title:r.title,co:r.company,pay:r.pay,colonia:r.colonia||'',desc:r.description,contact_phone:r.contact_phone},
    seg:{want_contact:r.contact_phone?'si':'no'},
    multi:{contact_methods:r.contact_methods}
  })},
  mascotas:{form:'mascotas',fill:r=>({
    input:{name:r.title,desc:r.description,age:r.age_text||'',loc:r.location||'',colonia:r.colonia||'',contact_phone:r.contact_phone},
    seg:{tipo:r.type,species:r.species||'perro',sex:r.sex||'',sterilized:r.sterilized===true?'si':(r.sterilized===false?'no':'nose'),want_contact:r.contact_phone?'si':'no'},
    multi:{contact_methods:r.contact_methods},
    imgMulti:{photo:r.image_urls||[]},
    monthcal:{cdate:r.event_date}
  })},
  eventos:{form:'eventos',fill:r=>({
    input:{name:r.title,cat:r.category,time:r.event_time,loc:r.location,colonia:r.colonia||'',price:r.price_text,website:r.website,phone:r.contact_phone,desc:r.description},
    img:{photo:r.image_url},
    monthcal:{date:r.event_date}
  })},
  reportes:{form:'reportar',fill:r=>({
    input:{cat:r.category,title:r.title,loc:r.location_text,colonia:r.colonia||'',desc:r.description},
    img:{photo:r.image_url}
  })},
  productos:{form:'producto',fill:r=>({
    input:{name:r.title,cat:r.category,price:r.price_text||'',lead_time:r.lead_time,desc:r.description,discount_price:r.discount_price_text||''},
    seg:{item_condition:r.item_condition||'nuevo',availability:r.availability||'ahora',fulfillment:r.fulfillment||'recoger',featured:r.featured?'si':'no',discount_active:r.discount_active?'si':'no'},
    multi:{contact_methods:r.contact_methods},
    imgMulti:{photo:r.image_urls||[]}
  })},
  clasificados:{form:'clasificado',fill:r=>({
    input:{name:r.title,cat:r.category,price:r.price_text||'',colonia:r.colonia||'',desc:r.description,contact_phone:r.contact_phone},
    seg:{item_condition:r.item_condition||'nuevo',fulfillment:r.fulfillment||'recoger'},
    multi:{contact_methods:r.contact_methods},
    imgMulti:{photo:r.image_urls||[]}
  })}
};
function applyPostEditFill(fill){
  Object.entries(fill.input||{}).forEach(([k,v])=>{
    const el=document.getElementById('pf-'+k);
    if(el&&v!=null&&v!=='')el.value=el.classList.contains('fi-money')?String(v).replace(/^\$\s*/,''):v;
  });
  Object.entries(fill.seg||{}).forEach(([k,v])=>{
    const btn=document.querySelector(`#pf-${k} .seg-btn[data-v="${v}"]`);
    if(btn)segPick(btn);
  });
  Object.entries(fill.multi||{}).forEach(([k,vals])=>{
    if(!Array.isArray(vals))return;
    document.querySelectorAll(`#pf-${k} .mchip`).forEach(c=>c.classList.remove('on'));
    vals.forEach(v=>{const c=document.querySelector(`#pf-${k} .mchip[data-v="${v}"]`);if(c)c.classList.add('on');});
  });
  Object.entries(fill.img||{}).forEach(([k,url])=>{
    if(!url)return;
    uploadedImageUrls[k]=url;
    const wrap=document.getElementById('pf-'+k+'-wrap');
    if(wrap)wrap.innerHTML=`<div style="position:relative;display:inline-block">
      <img src="${e(url)}" style="width:72px;height:72px;object-fit:cover;border-radius:var(--rs);display:block">
      <button type="button" onclick="removePhotoSelection('${k}')" aria-label="Quitar foto"
        style="position:absolute;top:-7px;right:-7px;background:#fff;border-radius:50%;width:22px;height:22px;border:1.5px solid var(--line2);font-size:13px;line-height:1;cursor:pointer">✕</button>
    </div>`;
  });
  Object.entries(fill.imgMulti||{}).forEach(([k,urls])=>{
    uploadedImageUrlsMulti[k]=Array.isArray(urls)?[...urls]:[];
    renderPhotoUploadButtonMulti(k);
  });
  Object.entries(fill.monthcal||{}).forEach(([k,ds])=>{
    if(!ds)return;
    const d=new Date(ds+'T12:00:00');
    monthCalView[k]={year:d.getFullYear(),month:d.getMonth()};
    monthCalSelected[k]=ds;
    const cal=document.getElementById('pf-'+k+'-cal');
    if(cal)cal.innerHTML=monthCalHtml(k);
  });
}
/* Opens the post form for kind, pre-filled, routed to an UPDATE. Mirrors
   openBusinessEdit(): push a view so ✕/back returns to the list, let
   openPost() render the form, THEN flip it into edit mode. */
async function openMyPostEdit(table,id){
  const item=(myPostsList||[]).find(p=>p.table===table&&String(p.id)===String(id));
  const cfg=MY_POST_EDIT[table];
  if(!item||!cfg)return;
  mcModalPushView('myPosts');
  await openPost(cfg.form);
  if(!document.getElementById('post-submit-btn')){return;} // openPost hit a gate — no form rendered
  editingPost={table,id};
  document.getElementById('modal-title').textContent='Editar publicación';
  applyPostEditFill(cfg.fill(item.raw));
  applyConditionalRows(POST_FORMS[cfg.form]); // re-sync showIf rows now that seg values are set
  if(table==='productos'){
    const acct=await MC.currentAccount();
    applyProductoBusinessHints((acct.businesses||[]).find(b=>String(b.id)===String(item.raw.business_id))||acct.business);
  }
  // Featuring is offered at fresh-submission time only, not via self-edit
  // (out of scope for this step) — hide both rows during edit.
  ['want_feature','feature_start'].forEach(k=>{const row=document.getElementById('row-'+k);if(row)row.style.display='none';});
  const btn=document.getElementById('post-submit-btn');
  if(btn)btn.textContent='Guardar cambios';
}

/* Renders every field the submitter actually sent, per MODERATION_DETAIL_FIELDS
   — nothing hidden, no deciding blind. Blank/null fields are skipped
   rather than shown as empty rows. */
function renderModerationDetailFields(table,raw){
  const fields=MODERATION_DETAIL_FIELDS[table]||[];
  let h='';
  fields.forEach(([key,label])=>{
    const val=raw[key];
    if(val===null||val===undefined||val==='')return;
    if(key==='image_url'||key==='thumbnail_url'||key==='business_image_url'){
      h+=`<div style="margin-bottom:12px"><div class="fl">${e(label)}</div><img src="${e(val)}" style="max-width:100%;border-radius:var(--rs);margin-top:4px;display:block"></div>`;
    } else if(key==='image_urls'&&Array.isArray(val)){
      h+=`<div style="margin-bottom:12px"><div class="fl">${e(label)}</div><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px">${val.map(u=>`<img src="${e(u)}" style="width:96px;height:96px;object-fit:cover;border-radius:var(--rs)">`).join('')}</div></div>`;
    } else if(typeof val==='boolean'){
      h+=`<div style="margin-bottom:12px"><div class="fl">${e(label)}</div><div style="font-size:14px;margin-top:2px">${val?'Sí':'No'}</div></div>`;
    } else if(Array.isArray(val)){
      h+=`<div style="margin-bottom:12px"><div class="fl">${e(label)}</div><div style="font-size:14px;margin-top:2px">${e(val.join(', '))}</div></div>`;
    } else {
      h+=`<div style="margin-bottom:12px"><div class="fl">${e(label)}</div><div style="font-size:14px;margin-top:2px;white-space:pre-wrap">${e(String(val))}</div></div>`;
    }
  });
  return h||'<div style="color:var(--ink3);font-size:13px">Sin detalles adicionales.</div>';
}

/* Lenient time parser for the free-typed event_time field — handles
   "21:00", "7:00 PM", "7pm", "7 p.m.", etc. Returns minutes since
   midnight, or null when it can't tell. */
function parseEventMinutes(t){
  if(!t)return null;
  const m=String(t).trim().toLowerCase().match(/(\d{1,2})(?::(\d{2}))?\s*(a\.?m\.?|p\.?m\.?)?/);
  if(!m)return null;
  let h=parseInt(m[1],10);const min=m[2]?parseInt(m[2],10):0;
  if(isNaN(h)||h>23||min>59)return null;
  const ap=m[3]?m[3].replace(/\./g,''):'';
  if(ap==='pm'&&h<12)h+=12;
  if(ap==='am'&&h===12)h=0;
  return h*60+min;
}

/* Duplicate-spotting aid for event moderation: lists other events on the
   same day, floating the ones within 3h of this submission to the top and
   flagging them, so a re-post of an already-approved event is obvious at
   the approval stage. */
function renderEventDuplicateCheck(raw,others){
  const mineMin=parseEventMinutes(raw.event_time);
  const list=others.map(o=>{
    const om=parseEventMinutes(o.time);
    return Object.assign({},o,{om:om,near:mineMin!==null&&om!==null&&Math.abs(om-mineMin)<=180});
  }).sort((a,b)=>(a.near!==b.near)?(a.near?-1:1):((a.om==null?9999:a.om)-(b.om==null?9999:b.om)));
  const head=`<div class="fl">Otros eventos el ${e(dsToLongEs(raw.event_date))}</div>`;
  if(!list.length){
    return `<div style="border:1.5px solid var(--line2);border-radius:var(--rs);padding:12px 14px">${head}
      <div style="font-size:13px;color:var(--palm);margin-top:6px">Ninguno — no parece un duplicado.</div></div>`;
  }
  const anyNear=list.some(o=>o.near);
  const rows=list.map(o=>`
    <div style="padding:8px 0;border-top:1px solid var(--line)${o.near?';border-left:3px solid var(--signal);padding-left:8px':''}">
      <div style="font-size:13px"><b>${e(o.time||'Sin hora')}</b> · ${e(o.title)}
        <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:${o.status==='published'?'var(--gulf)':'var(--wall-dk)'}"> ${o.status==='published'?'Publicado':'Pendiente'}</span>
        ${o.near?'<span style="font-size:10px;font-weight:700;color:var(--signal)"> · HORA SIMILAR</span>':''}
      </div>
      ${o.loc?`<div style="font-size:11.5px;color:var(--ink3);margin-top:1px">${e(o.loc)}</div>`:''}
    </div>`).join('');
  return `<div style="border:1.5px solid ${anyNear?'var(--signal)':'var(--line2)'};border-radius:var(--rs);padding:12px 14px">${head}
    <div style="font-size:11.5px;color:var(--ink3);margin:4px 0 2px">${list.length} evento${list.length===1?'':'s'} ese día${anyNear?' · revisa los marcados "hora similar"':''}</div>
    ${rows}</div>`;
}

async function fillEventDuplicateCheck(raw){
  let box=document.getElementById('evt-dup-check');
  if(!box)return;
  box.innerHTML=`<div style="font-size:12px;color:var(--ink3)">Buscando otros eventos ese día…</div>`;
  const others=await MC.fetchEventosOnDate(raw.event_date,raw.id);
  box=document.getElementById('evt-dup-check');
  if(!box)return; // reviewer navigated away while it loaded
  box.innerHTML=renderEventDuplicateCheck(raw,others);
}

/* Same idea as renderEventDuplicateCheck, for businesses: phone match is
   the strong signal (border/header turn signal-colored), name overlap is
   the softer one (still listed, not specially colored). */
function renderBusinessDuplicateCheck(raw,others){
  const head=`<div class="fl">Otros negocios parecidos</div>`;
  if(!others.length){
    return `<div style="border:1.5px solid var(--line2);border-radius:var(--rs);padding:12px 14px">${head}
      <div style="font-size:13px;color:var(--palm);margin-top:6px">Ninguno — no parece un duplicado.</div></div>`;
  }
  const anySamePhone=others.some(o=>o.phone===raw.phone);
  const statusLbl={published:'Publicado',pending:'Pendiente',rejected:'Rechazado'};
  const rows=others.map(o=>{
    const samePhone=o.phone===raw.phone;
    return `
    <div style="padding:8px 0;border-top:1px solid var(--line)${samePhone?';border-left:3px solid var(--signal);padding-left:8px':''}">
      <div style="font-size:13px"><b>${e(o.business_name)}</b>
        <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:${o.status==='published'?'var(--gulf)':'var(--wall-dk)'}"> ${statusLbl[o.status]||o.status}</span>
        ${samePhone?'<span style="font-size:10px;font-weight:700;color:var(--signal)"> · MISMO TELÉFONO</span>':''}
      </div>
      ${o.address?`<div style="font-size:11.5px;color:var(--ink3);margin-top:1px">${e(o.address)}</div>`:''}
    </div>`;
  }).join('');
  return `<div style="border:1.5px solid ${anySamePhone?'var(--signal)':'var(--line2)'};border-radius:var(--rs);padding:12px 14px">${head}
    <div style="font-size:11.5px;color:var(--ink3);margin:4px 0 2px">${others.length} coincidencia${others.length===1?'':'s'}${anySamePhone?' · revisa los marcados "mismo teléfono"':''}</div>
    ${rows}</div>`;
}
async function fillBusinessDuplicateCheck(raw){
  let box=document.getElementById('biz-dup-check');
  if(!box)return;
  box.innerHTML=`<div style="font-size:12px;color:var(--ink3)">Buscando negocios parecidos…</div>`;
  const others=await MC.fetchSimilarBusinesses(raw.business_name,raw.phone,raw.id);
  box=document.getElementById('biz-dup-check');
  if(!box)return;
  box.innerHTML=renderBusinessDuplicateCheck(raw,others);
}

function openModerationDetail(table,id){
  const item=moderationQueue.find(i=>i.table===table&&i.id===id);
  if(!item)return;
  mcModalPushView('pendingList');
  document.getElementById('modal-title').textContent=item.label;
  const isNoticia=table==='noticias';
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--ink3);font-size:12px;margin-bottom:12px">Enviado por ${e(item.submittedBy)} · ${relTimeEs(item.createdAt)}</div>
    ${isNoticia?renderNoticiaModerationFields(item.raw):renderModerationDetailFields(table,item.raw)}
    ${table==='eventos'?`<div id="evt-dup-check" style="margin:14px 0"></div>`:''}
    ${table==='businesses'?`<div id="biz-dup-check" style="margin:14px 0"></div>`:''}
    <div style="display:flex;gap:8px;margin-top:16px">
      <button class="submit-btn" style="margin-top:0;flex:1" onclick="${isNoticia?`approveNoticia('${id}')`:`moderateItem('${table}','${id}','published')`}">Aprobar</button>
      <button class="submit-btn" style="margin-top:0;flex:1;background:var(--paper2);color:var(--ink)" onclick="openRejectReasonPrompt('${table}','${id}')">Rechazar</button>
    </div>
    <button class="menu-item" style="margin-top:10px;justify-content:center" onclick="mcModalBack('pendingList')">${svgIco('checkBadge')}<span class="menu-item-lbl">Volver a la lista</span></button>
  `;
  if(table==='eventos')fillEventDuplicateCheck(item.raw);
  if(table==='businesses')fillBusinessDuplicateCheck(item.raw);
}

/* Noticias-specific moderation view: image, source, a clickable link to the
   real post (so the admin can verify before deciding), the raw synced
   excerpt shown ONLY as an internal reference (never published — see the
   copyright note in the sync functions), and an editable, optional summary
   box. Leaving it blank publishes headline + image + source only; typing
   something publishes that too. Reused as-is whether the row came from an
   automated sync (source_excerpt present) or a resident submission
   (source_excerpt null, summary may already be filled in). */
function renderNoticiaModerationFields(raw){
  return `
    ${raw.thumbnail_url?`<img src="${e(raw.thumbnail_url)}" style="max-width:100%;border-radius:var(--rs);margin-bottom:12px;display:block">`:''}
    <div style="margin-bottom:12px"><div class="fl">Titular</div><div style="font-size:14.5px;font-weight:700;margin-top:2px">${e(raw.headline||'')}</div></div>
    <div style="margin-bottom:12px"><div class="fl">Fuente</div><div style="font-size:14px;margin-top:2px">${e(raw.source_name||'')}</div></div>
    ${raw.source_url?`<a href="${e(raw.source_url)}" target="_blank" rel="noopener" style="display:block;font-size:13px;color:var(--gulf);margin-bottom:12px;text-decoration:underline">Ver la publicación original ↗</a>`:''}
    ${raw.source_excerpt?`<div style="margin-bottom:12px"><div class="fl">Vista previa de la fuente (no se publica)</div><div style="font-size:13px;color:var(--ink3);margin-top:2px;white-space:pre-wrap">${e(raw.source_excerpt)}</div></div>`:''}
    <label class="fl" style="display:block;margin-top:2px">Resumen (opcional)</label>
    <textarea class="ft" id="noticia-summary-input" placeholder="Escribe una paráfrasis breve y honesta en tus palabras, o déjalo en blanco para publicar solo el titular.">${e(raw.summary||'')}</textarea>
  `;
}
async function approveNoticia(id){
  const summary=(document.getElementById('noticia-summary-input').value||'').trim();
  await moderateItem('noticias',id,'published',null,{summary:summary||null});
}

/* Whether this specific pending row has a real submitter to notify —
   not a per-table guess. moderationQueue's raw row (see
   MC.fetchPendingQueue) has whatever submitted_by the table actually
   has; alertas has no such column at all (always automated, undefined
   here), and eventos/noticias can be null (automated sync) or a real
   uid (resident submission) on a row-by-row basis. Either way, no real
   submitted_by means no reason is required. */
function isAutomatedContent(table,id){
  const item=moderationQueue.find(i=>i.table===table&&i.id===id);
  return !(item&&item.raw&&item.raw.submitted_by);
}
function openRejectReasonPrompt(table,id){
  mcModalPushView('itemDetail');
  document.getElementById('modal-title').textContent='Motivo del rechazo';
  const isAutomated=isAutomatedContent(table,id);
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--ink3);font-size:13px;margin-bottom:10px;line-height:1.5">${isAutomated
      ?'Esta publicación viene de una fuente automática, no de una persona — el motivo es solo para tu propio registro y es opcional.'
      :'Este mensaje se guarda junto con la publicación para que la persona que la envió sepa por qué no se publicó — lo verá en su cuenta.'}</div>
    <textarea class="ft" id="reject-reason-input" placeholder="${isAutomated?'Opcional — ej. nota duplicada, fuente poco confiable...':'Ej. La foto no es clara, o el precio no coincide con la descripción...'}"></textarea>
    <div style="display:flex;gap:8px;margin-top:14px">
      <button class="submit-btn" style="margin-top:0;flex:1;background:var(--paper2);color:var(--ink)" onclick="mcModalBack('itemDetail')">Cancelar</button>
      <button class="submit-btn" style="margin-top:0;flex:1" id="confirm-reject-btn" onclick="confirmReject('${table}','${id}')">Rechazar</button>
    </div>
  `;
}
async function confirmReject(table,id){
  const reason=(document.getElementById('reject-reason-input').value||'').trim();
  if(!reason&&!isAutomatedContent(table,id)){toast('Escribe un motivo breve antes de rechazar');return;}
  await moderateItem(table,id,'rejected',reason||null);
}

async function moderateItem(table,id,newStatus,reason,extraPatch){
  const btn=document.getElementById('confirm-reject-btn');
  if(btn){btn.disabled=true;btn.textContent='Enviando…';}
  const {error}=await MC.moderatePost(table,id,newStatus,reason,extraPatch);
  if(error){toast(pgErrorToast(error,'No se pudo actualizar.'));if(btn){btn.disabled=false;btn.textContent='Rechazar';}return;}
  const prevIndex=moderationQueue.findIndex(i=>i.table===table&&i.id===id);
  moderationQueue=moderationQueue.filter(i=>!(i.table===table&&i.id===id));
  toast(newStatus==='published'?'Publicado ✓':'Rechazado — el motivo quedó guardado');
  refreshPendingBadge();
  refreshContent(); // an approve/reject changes public visibility immediately —
                     // same class of bug as the self-edit fix above: without
                     // this, a newly-approved item wouldn't appear in its
                     // public list until some unrelated later refresh.
  advancePendingQueue(prevIndex);
}

/* ══════════════ ADMIN: long-press to remove an already-published post ══════════════
   No new DB anything — this just flips status to 'rejected' via the same
   MC.moderatePost the Pendiente queue uses, which drops the row from every
   public-read view (all RLS-filtered on status='published') and surfaces
   the optional message in the submitter's "Publicaciones no aprobadas".
   Long-press is touch-only, so right-click is the desktop equivalent. */
function attachAdminRemove(el,table,id,title){
  if(!el||!lastFetchedAccount||!lastFetchedAccount.isAdmin)return;
  let timer=null;
  const start=()=>{clearTimeout(timer);timer=setTimeout(()=>openAdminRemoveConfirm(table,id,title),550);};
  const cancel=()=>clearTimeout(timer);
  el.addEventListener('touchstart',start,{passive:true});
  el.addEventListener('touchend',cancel);
  el.addEventListener('touchmove',cancel,{passive:true});
  el.addEventListener('mousedown',start);
  el.addEventListener('mouseup',cancel);
  el.addEventListener('mouseleave',cancel);
  el.addEventListener('contextmenu',e=>{e.preventDefault();cancel();openAdminRemoveConfirm(table,id,title);});
}
/* Called at the end of each card-render function: wires every card tagged
   with data-adm-rm. A no-op unless the current account is a known admin. */
function wireAdminRemove(container){
  if(!container||!lastFetchedAccount||!lastFetchedAccount.isAdmin)return;
  container.querySelectorAll('[data-adm-rm]').forEach(node=>{
    if(node._admRmWired)return;
    node._admRmWired=true;
    const raw=node.getAttribute('data-adm-rm')||'';
    const sep=raw.indexOf('|');
    if(sep<0)return;
    attachAdminRemove(node,raw.slice(0,sep),raw.slice(sep+1),node.getAttribute('data-adm-rm-t')||'');
  });
}
/* Attribute string for a card that an admin can long-press to remove. */
function admRm(table,id,title){
  return `data-adm-rm="${e(table)}|${e(String(id))}" data-adm-rm-t="${e(String(title||''))}"`;
}
function openAdminRemoveConfirm(table,id,title){
  document.getElementById('modal-title').textContent='Quitar publicación';
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--ink3);font-size:13px;line-height:1.5;margin-bottom:6px">Esto la quita de la vista pública de inmediato. La persona que la publicó verá que fue retirada en su cuenta.</div>
    ${title?`<div style="font-weight:700;font-size:14px;margin:8px 0 12px">${e(title)}</div>`:''}
    <label class="fl">Mensaje para quien la publicó (opcional)</label>
    <textarea class="ft" id="adm-rm-msg" placeholder="Ej. El contenido no cumple las reglas de la comunidad."></textarea>
    <div style="display:flex;gap:8px;margin-top:14px">
      <button class="submit-btn" style="margin-top:0;flex:1;background:var(--paper2);color:var(--ink)" onclick="closeModal()">Cancelar</button>
      <button class="submit-btn" style="margin-top:0;flex:1;background:var(--signal);color:#fff" id="adm-rm-btn" onclick="confirmAdminRemove('${e(table)}','${e(String(id))}')">Quitar</button>
    </div>
  `;
  document.getElementById('modal-bg').classList.add('on');
}
async function confirmAdminRemove(table,id){
  const btn=document.getElementById('adm-rm-btn');
  const msg=(document.getElementById('adm-rm-msg').value||'').trim();
  if(btn){btn.disabled=true;btn.textContent='Quitando…';}
  const {error}=await MC.moderatePost(table,id,'rejected',msg||null);
  if(error){
    if(btn){btn.disabled=false;btn.textContent='Quitar';}
    toast(pgErrorToast(error,'No se pudo quitar la publicación.'));
    return;
  }
  closeModal();
  toast('Publicación retirada ✓');
  refreshContent();
}


// Shared by both gates below — after either signing in OR verifying a
// business, we just re-open the originally requested kind, and openPost()
// re-checks both gates in order, so this naturally chains: sign-in gate →
// (now signed in) → business gate if still needed → the real form.
let pendingPostAfterAuth=null;
let editingBusinessId=null; // set by openBusinessEdit(), read by submitPost's negocio_verificar branch to route to an UPDATE instead of INSERT

/* Editing reuses the exact same form as first-time verification — same
   fields, same validation — just pre-filled and routed to an UPDATE.
   The DB trigger (not this code) is what actually forces the business
   back to 'pending' on save, so there's nothing extra to enforce here. */
async function openBusinessEdit(){
  const biz=await MC.fetchBusinessById(viewingBusinessId);
  if(!biz)return;
  mcModalPushView('bizProfile'); // ✕ / back from the form returns to the business profile
  editingBusinessId=biz.id;
  await openPost('negocio_verificar');
  document.getElementById('modal-title').textContent='Editar mi negocio';
  const fillMap={name:biz.business_name,desc:biz.description,address:biz.address,colonia:biz.colonia,phone:biz.phone,cat:biz.category,hours:biz.hours,social:biz.social_url,rfc:biz.rfc,delivery_info:biz.delivery_info,pickup_address:biz.pickup_address};
  Object.keys(fillMap).forEach(k=>{
    const el=document.getElementById('pf-'+k);
    if(el&&fillMap[k])el.value=fillMap[k];
  });
  // seg + multi controls aren't <input>s — restore them by class, then
  // re-run the conditional-row visibility now that delivers may be 'si'.
  const deliversBtn=document.querySelector(`#pf-delivers .seg-btn[data-v="${biz.delivers?'si':'no'}"]`);
  if(deliversBtn)segPick(deliversBtn);
  (biz.payment_methods||[]).forEach(v=>{
    const chip=document.querySelector(`#pf-payment_methods .mchip[data-v="${v}"]`);
    if(chip)chip.classList.add('on');
  });
  applyConditionalRows(POST_FORMS.negocio_verificar);
  if(biz.business_image_url){
    uploadedImageUrls.photo=biz.business_image_url;
    const wrap=document.getElementById('pf-photo-wrap');
    if(wrap)wrap.innerHTML=`<div style="position:relative;display:inline-block">
      <img src="${e(biz.business_image_url)}" style="width:72px;height:72px;object-fit:cover;border-radius:var(--rs);display:block">
      <button type="button" onclick="removePhotoSelection('photo')" aria-label="Quitar foto"
        style="position:absolute;top:-7px;right:-7px;background:#fff;border-radius:50%;width:22px;height:22px;border:1.5px solid var(--line2);font-size:13px;line-height:1;cursor:pointer">✕</button>
    </div>`;
  }
}

/* Every real write (posting, claiming an Oferta, confirming a Reporte,
   verifying a business) needs a signed-in account whose phone is already
   verified. Not signed in → sign-in gate. Signed in but pending/rejected
   → the "cuenta en revisión" gate. The database enforces the same rule
   (is_verified_writer RLS); this is the UX half so it fails clearly
   instead of with a raw policy error. */
function runWriteGate(acct,kindForSignin){
  if(!acct.signedIn){openSignInGate(kindForSignin);return false;}
  if(acct.phoneVerificationStatus!=='verified'){openVerificationGate(acct);return false;}
  return true;
}
/* Gates any contact/interaction link (WhatsApp, tel:, sms:) behind the
   same signed-in + phone-verified requirement writes already use, reusing
   runWriteGate's existing sign-in-gate / verification-gate modals — no new
   UI. Deliberately uses location.href for every scheme (not window.open),
   because window.open() called after an `await` (i.e. after the account
   check) can get blocked as a popup by strict mobile browsers (iOS Safari
   in particular) since the await breaks the synchronous user-gesture
   chain — location.href navigation doesn't have that restriction, and on
   mobile a wa.me link hands off to the WhatsApp app either way. Returns
   true if it actually navigated, false if it was blocked by the gate, so
   callers that need a side-effect only on real contact (e.g. logging a
   mandadito contact) can chain off the result. */
async function guardedContact(url){
  const acct=await MC.currentAccount();
  if(!runWriteGate(acct,null))return false;
  location.href=url;
  return true;
}
/* encodeURIComponent leaves ' unescaped, and these URLs now sit inside a
   single-quoted JS string in an onclick attribute (they used to sit in an
   href, where a ' was harmless). Message text includes user-typed names and
   titles, so escape it too — otherwise "Pizza d'Italia" breaks the button
   and a crafted title could run script. */
function contactMsgParam(text){return encodeURIComponent(text).replace(/'/g,'%27');}
function openVerificationGate(acct){
  const rejected=acct.phoneVerificationStatus==='rejected';
  const waMsg='Hola, mi cuenta en MiCampeche está en revisión. Mi nombre es '+(acct.displayName||'')+' y mi número registrado es: '+(acct.phone||'');
  const waUrl='https://wa.me/'+MICAMPECHE_WHATSAPP+'?text='+encodeURIComponent(waMsg);
  document.getElementById('modal-title').textContent=rejected?'No pudimos verificar tu número':'Tu cuenta está en revisión';
  document.getElementById('modal-body').innerHTML=`
    <div style="text-align:center;padding:16px 10px 6px">
      ${svgIco('checkBadge')}
      <div style="font-weight:700;font-size:15px;margin-top:10px">${rejected?'El número no coincidió':'Estamos confirmando tu número'}</div>
      <div style="color:var(--ink3);font-size:13px;margin-top:6px;line-height:1.55">${rejected
        ? 'El mensaje de WhatsApp debe venir del <b>mismo número</b> que registraste en tu cuenta. '+(acct.phoneVerificationReason?e(acct.phoneVerificationReason)+' ':'')+'Escríbenos por WhatsApp y lo resolvemos.'
        : 'En cuanto confirmemos que tu mensaje de WhatsApp vino desde el número que registraste, podrás publicar e interactuar. Mientras tanto puedes explorar todo MiCampeche.<br><br>El mensaje debe venir del <b>mismo número</b> — si lo enviaste desde otro, mándalo de nuevo desde el correcto.'}</div>
    </div>
    <a class="submit-btn" style="display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none" href="${waUrl}" target="_blank" rel="noopener">
      ${svgIco('phone')}${rejected?'Escribir por WhatsApp':'Enviar mi verificación por WhatsApp'}
    </a>
  `;
  document.getElementById('modal-bg').classList.add('on');
}

function openSignInGate(kind){
  pendingPostAfterAuth=kind;
  document.getElementById('modal-title').textContent='Inicia sesión para continuar';
  document.getElementById('modal-body').innerHTML=`
    <div style="text-align:center;padding:16px 10px 6px">
      ${svgIco('checkBadge')}
      <div style="font-weight:700;font-size:15px;margin-top:10px">Necesitas una cuenta para esto</div>
      <div style="color:var(--ink3);font-size:13px;margin-top:6px;line-height:1.5">Para que todo en MiCampeche sea confiable, necesitas iniciar sesión o crear una cuenta antes de publicar o interactuar — solo toma un momento.</div>
    </div>
    <button class="submit-btn" onclick="openAccount()">Iniciar sesión / Crear cuenta</button>
  `;
  document.getElementById('modal-bg').classList.add('on');
}

function openBusinessPrompt(kind){
  pendingPostAfterAuth=kind;
  editingBusinessId=null; // this is always a first-time verification path, never an edit
  document.getElementById('modal-title').textContent='Verifica tu negocio';
  document.getElementById('modal-body').innerHTML=`
    <div style="text-align:center;padding:16px 10px 6px">
      ${svgIco('checkBadge')}
      <div style="font-weight:700;font-size:15px;margin-top:10px">Verifica tu negocio para publicar</div>
      <div style="color:var(--ink3);font-size:13px;margin-top:6px;line-height:1.5">${kind==='oferta'?'Publicar una Oferta':'Vender en Tienda'} requiere una cuenta de negocio verificada — es un formulario corto, solo lo llenas una vez.</div>
    </div>
    <button class="submit-btn" onclick="openPost('negocio_verificar')">Verificar mi negocio</button>
  `;
  document.getElementById('modal-bg').classList.add('on');
}

/* A business that's been submitted but not yet approved (or was rejected)
   — distinct from having no business at all. No action button for the
   pending case; there's nothing to do but wait for review. */
function openBusinessStatusPrompt(biz){
  const isPending=biz.status==='pending';
  document.getElementById('modal-title').textContent=isPending?'Negocio en revisión':'Negocio no aprobado';
  document.getElementById('modal-body').innerHTML=`
    <div style="text-align:center;padding:16px 10px 6px">
      ${svgIco('checkBadge')}
      <div style="font-weight:700;font-size:15px;margin-top:10px">${e(biz.business_name)}</div>
      <div style="color:var(--ink3);font-size:13px;margin-top:6px;line-height:1.5">${isPending
        ?'Tu solicitud de negocio está en revisión — te avisaremos en cuanto sea aprobada, normalmente toma poco tiempo.'
        :'Tu solicitud de negocio no fue aprobada esta vez. Escríbenos por WhatsApp si quieres más información.'}</div>
    </div>
  `;
  document.getElementById('modal-bg').classList.add('on');
}

/* The actual path to Premium — MiCampeche never processes payments (same
   rule that already applies to the $99 Ofertas fee itself), so "upgrade"
   here means: request it, the founder arranges payment personally
   (WhatsApp, exactly like every other merchant relationship in this app),
   then flips is_premium=true by hand. This is that request step — without
   it, the cap-reached error was a dead end that only *mentioned* Premium
   with no way to act on it. */
function isCapReachedError(error){
  const m=(error&&error.message)||'';
  return error&&error.code==='P0001'&&(m.includes('product_cap_reached')||m.includes('oferta_concurrent_slot_cap_reached'));
}
async function openPremiumPrompt(context){
  const limitText=context==='oferta'
    ? 'Las cuentas Negocio pueden tener 1 espacio de Oferta reservado a la vez. Premium permite hasta 3 a la vez.'
    : 'Las cuentas Negocio pueden tener hasta 2 productos en Tienda. Premium permite hasta 10.';
  document.getElementById('modal-title').textContent='Actualiza a Premium';
  document.getElementById('modal-body').innerHTML=`
    <div style="text-align:center;padding:16px 10px 6px">
      ${svgIco('checkBadge')}
      <div style="font-weight:700;font-size:15px;margin-top:10px">Llegaste al límite de tu plan actual</div>
      <div style="color:var(--ink3);font-size:13px;margin-top:6px;line-height:1.5">${limitText}</div>
    </div>
    <a class="submit-btn" style="display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none"
       href="${STRIPE_LINK_PREMIUM}">
      ${svgIco('checkBadge')}Actualizar a Premium — $749 MXN/mes
    </a>
  `;
  document.getElementById('modal-bg').classList.add('on');
}

const SUBMIT_HANDLERS={
  eventos:MC.submitEvento, producto:MC.submitProducto, clasificado:MC.submitClasificado, mandadito:MC.submitMandadito,
  mascotas:MC.submitMascota, empleos:MC.submitEmpleo, reportar:MC.submitReporte, avisos:MC.submitAviso
};

async function submitPost(kind){
  const form=POST_FORMS[kind];
  const data={};
  form.fields.forEach(f=>{
    if(f.type==='note')return;
    if(f.type==='seg'){const sel=document.querySelector(`#pf-${f.k} .seg-btn.on`);data[f.k]=sel?sel.dataset.v:'';}
    else if(f.type==='multi'){data[f.k]=[...document.querySelectorAll(`#pf-${f.k} .mchip.on`)].map(b=>b.dataset.v);}
    else if(f.type==='calendar'){data[f.k]=selectedSlotDate;}
    else if(f.type==='monthcal'){data[f.k]=monthCalSelected[f.k]||'';}
    else if(f.type==='money'){const el=document.getElementById('pf-'+f.k);const raw=el?el.value.trim():'';data[f.k]=raw?('$'+raw):'';}
    else if(f.type==='imgupload-multi'){data[f.k]=uploadedImageUrlsMulti[f.k]||[];}
    else if(f.type==='imgupload'){data[f.k]=uploadedImageUrls[f.k]||null;}
    else{const el=document.getElementById('pf-'+f.k);data[f.k]=el?el.value:'';}
  });

  const btn=document.getElementById('post-submit-btn');
  const originalLabel=btn?btn.textContent:'';
  if(btn){btn.disabled=true;btn.textContent='Enviando…';}
  const stop=()=>{if(btn){btn.disabled=false;btn.textContent=originalLabel;}};
  const acct=await MC.currentAccount();

  for(const f of form.fields){
    if(f.type==='colonia'&&data[f.k]&&!CAMPECHE_COLONIAS.includes(data[f.k])){
      stop();toast('Elige tu colonia de la lista (empieza a escribir y selecciona una opción)');return;
    }
  }

  if(kind==='producto'||kind==='clasificado'){
    if(!(data.name||'').trim()){stop();toast('Escribe qué vendes');return;}
    if(!Array.isArray(data.photo)||!data.photo.length){stop();toast('Agrega al menos una foto');return;}
    if(!Array.isArray(data.contact_methods)||!data.contact_methods.length){stop();toast('Elige al menos una forma de contacto');return;}
  }
  if(kind==='clasificado'&&!(data.colonia||'').trim()){stop();toast('Elige tu colonia');return;}
  if(kind==='clasificado'&&!(data.contact_phone||'').trim()){stop();toast('Escribe tu número de contacto');return;}
  if(kind==='oferta'&&!data.photo){stop();toast('Agrega una foto para publicar tu oferta');return;}
  if((kind==='avisos'||kind==='mascotas'||kind==='empleos')&&data.want_contact==='si'){
    if(!(data.contact_phone||'').trim()){stop();toast('Escribe tu número o elige "No hace falta"');return;}
    if(!Array.isArray(data.contact_methods)||!data.contact_methods.length){stop();toast('Elige al menos una forma de contacto');return;}
  }
  if((kind==='eventos'||kind==='mascotas'||kind==='empleos'||kind==='avisos'||kind==='reportar')&&!(data.colonia||'').trim()){
    stop();toast('Elige tu colonia');return;
  }
  if(kind==='mascotas'){
    if(!(data.name||'').trim()){stop();toast('Escribe un título');return;}
    if(data.tipo==='adopcion'&&(!Array.isArray(data.photo)||!data.photo.length)){stop();toast('Agrega al menos una foto para la adopción');return;}
    if(data.tipo==='campana'&&!data.cdate){stop();toast('Elige la fecha de la campaña');return;}
  }

  // Self-edit: same form, same validation (above), routed to an UPDATE of
  // the resident's own row. The DB trigger forces it back to 'pending'.
  if(editingPost){
    const {table,id}=editingPost;
    const {error}=await MC.updatePost(table,id,data);
    if(btn){btn.disabled=false;btn.textContent=originalLabel;}
    if(error){toast(pgErrorToast(error,'No se pudieron guardar los cambios.'));return;}
    editingPost=null;
    toast('Cambios guardados — vuelve a revisión ✓');
    mcModalBack('myPosts');
    refreshContent(); // re-fetch + re-render every public list so the edited
                       // item's new status (and content) actually disappears
                       // from/updates in public view immediately — refreshMyPosts()
                       // alone only updates the Mis Publicaciones list itself.
    refreshMyPosts();
    return;
  }

  if(kind==='negocio_verificar'){
    if(!data.name||!data.desc||!data.address||!data.phone||!data.cat||!data.colonia){
      if(btn){btn.disabled=false;btn.textContent=originalLabel;}
      toast('Completa nombre, descripción, dirección, teléfono y categoría');
      return;
    }
    const isEditing=!!editingBusinessId;
    if(!isEditing&&creatingAdditionalBusiness){
      // A 2nd+ business costs $99 up front — pay first, then create it
      // on return, same reasoning as Ofertas/Eventos: an unpaid
      // "reservation" would just squat on the 5-business cap. The
      // creation trigger (enforce_additional_business_rules) still does
      // the real enforcement server-side regardless of what this UI
      // already gated on.
      creatingAdditionalBusiness=false;
      if(acct.isAdmin){
        const {error}=await MC.verifyBusiness(data);
        if(btn){btn.disabled=false;btn.textContent=originalLabel;}
        if(error){toast(pgErrorToast(error,'No se pudo crear el negocio.'));return;}
        closeModal();
        toast('Negocio creado sin pago (cuenta admin) ✓');
        return;
      }
      if(btn){btn.disabled=false;btn.textContent=originalLabel;}
      sessionStorage.setItem('mc_pending_business_setup',JSON.stringify({data}));
      window.location.href=STRIPE_LINK_BUSINESS_SETUP;
      return;
    }
    const {error}=isEditing?await MC.updateBusiness(editingBusinessId,data):await MC.verifyBusiness(data);
    editingBusinessId=null;
    if(btn){btn.disabled=false;btn.textContent=originalLabel;}
    if(error){toast(pgErrorToast(error,isEditing?'No se pudieron guardar los cambios.':'No se pudo verificar tu negocio.'));return;}
    toast(isEditing?'Cambios guardados — tu negocio vuelve a revisión ✓':'Tu negocio fue enviado para revisión ✓');
    const next=pendingPostAfterAuth;
    pendingPostAfterAuth=null;
    if(next){await openPost(next);}
    else if(isEditing){mcModalBack('bizProfile');refreshBusinessProfile();}
    else {closeModal();}
    return;
  }

  if(kind==='oferta'){
    if(!selectedSlotDate){toast('Selecciona un día primero');if(btn){btn.disabled=false;btn.textContent=originalLabel;}return;}
    const isFull=bookedDates.has(selectedSlotDate);

    if(isFull){
      // Joining a waitlist isn't a confirmed booking — no payment needed.
      const result=await MC.submitOferta(data,selectedSlotDate,isFull,selectedPostBusinessId);
      if(result.needsBusiness){if(btn){btn.disabled=false;btn.textContent=originalLabel;}openBusinessPrompt('oferta');return;}
      if(result.error){
        if(btn){btn.disabled=false;btn.textContent=originalLabel;}
        toast(pgErrorToast(result.error,'No se pudo unir a la lista de espera.'));
        return;
      }
      closeModal();
      toast('Estás en la lista de espera — te avisaremos ✓');
      return;
    }

    // A real, available slot: verify the business first (no point sending
    // someone to pay for something they can't actually use), then pay
    // BEFORE the booking is created — same reasoning as the concurrent-
    // slot cap: an unpaid "reservation" would just squat on the calendar.
    const biz=selectedPostBusinessId?await MC.fetchBusinessById(selectedPostBusinessId):await MC.myBusiness();
    if(!biz){if(btn){btn.disabled=false;btn.textContent=originalLabel;}openBusinessPrompt('oferta');return;}
    // Premium eligibility is checked BEFORE the admin bypass, not after —
    // an admin submitting for a Premium business should still see (and
    // correctly consume) that business's real free-cycle slot, rather
    // than silently falling back to the generic admin path and leaving
    // the allowance untouched. The cycle is anchored to premium_since,
    // not the calendar month — see oferta_free_slot_available in Supabase.
    if(biz.is_premium){
      const freeAvailable=await MC.checkFreeOfertaEligible(biz.id);
      if(freeAvailable){
        const result=await MC.submitOferta(data,selectedSlotDate,false,selectedPostBusinessId,true);
        if(btn){btn.disabled=false;btn.textContent=originalLabel;}
        if(result.error){toast(pgErrorToast(result.error,'No se pudo reservar.'));return;}
        closeModal();
        toast('¡Incluida con tu Premium este ciclo — reservada sin costo! ✓');
        refreshOfertaPostCta();
        return;
      }
    }
    if(acct.isAdmin){
      const result=await MC.submitOferta(data,selectedSlotDate,false,selectedPostBusinessId);
      if(btn){btn.disabled=false;btn.textContent=originalLabel;}
      if(result.error){toast(pgErrorToast(result.error,'No se pudo reservar.'));return;}
      closeModal();
      toast('Reservado sin pago (cuenta admin) ✓');
      return;
    }
    sessionStorage.setItem('mc_pending_oferta',JSON.stringify({data,slotDs:selectedSlotDate,businessId:selectedPostBusinessId}));
    window.location.href=STRIPE_LINK_OFERTA;
    return;
  }

  if(kind==='eventos'){
    const wantFeature=data.want_feature==='si';
    if(wantFeature&&!selectedFeatureStart){
      toast('Elige una ventana de 3 días para destacar tu evento');
      if(btn){btn.disabled=false;btn.textContent=originalLabel;}
      return;
    }
    // The event itself is always free and always goes through the normal
    // moderation queue — featuring is a paid add-on afterward, never a
    // gate on the free submission.
    const result=await MC.submitEvento(data);
    if(btn){btn.disabled=false;btn.textContent=originalLabel;}
    if(result.error){toast(pgErrorToast(result.error,'No se pudo enviar tu evento.'));return;}
    if(!wantFeature){
      closeModal();
      toast('Enviado — en revisión antes de publicarse ✓');
      return;
    }
    const eventId=result.data&&result.data[0]&&result.data[0].id;
    if(!eventId){
      closeModal();
      toast('Tu evento fue enviado ✓, pero no pudimos iniciar el pago para destacarlo — escríbenos por WhatsApp.');
      return;
    }
    if(acct.isAdmin){
      const {error}=await MC.submitEventoFeature(eventId,selectedFeatureStart);
      closeModal();
      if(error){toast('Tu evento fue enviado ✓, pero no se pudo destacar sin pago — inténtalo de nuevo desde Mis publicaciones.');return;}
      toast('Enviado y destacado sin pago (cuenta admin) ✓');
      return;
    }
    // Pay BEFORE the featured booking is created — same reasoning as
    // Ofertas: an unpaid "reservation" would just squat on a scarce
    // feature window.
    sessionStorage.setItem('mc_pending_evento_feature',JSON.stringify({eventId,startDs:selectedFeatureStart}));
    window.location.href=STRIPE_LINK_EVENTO_FEATURE;
    return;
  }

  if(kind==='mandadito'){
    // display_name / phone aren't form fields — they come straight from
    // the account (snapshotted server-side too). A directory listing, not
    // a job: the row just goes through the normal Pendiente queue.
    data.display_name=acct.displayName||'';
    data.phone=acct.phone||'';
    if(!(data.vehicle_type||'').trim()){stop();toast('Elige cómo te mueves');return;}
    const result=await MC.submitMandadito(data);
    if(btn){btn.disabled=false;btn.textContent=originalLabel;}
    if(result&&result.error){toast(pgErrorToast(result.error,'No se pudo enviar tu registro.'));return;}
    // The checklist now lives inside the prefilled WhatsApp message itself
    // (not just explained in-app above), so the person can attach the
    // actual photos to this exact message before they hit send.
    const msg='Hola, acabo de registrarme como mandadito en MiCampeche. Mi nombre es '+acct.displayName+'.\n\nAdjunto aquí:\n1) Foto de mi identificación\n2) Una selfie\n3) Foto de la placa de mi vehículo\n4) Mi licencia vigente';
    openWhatsAppStep(msg,'Para confirmar que realmente eres tú necesitamos, por este WhatsApp, una foto de tu identificación, una selfie, la placa de tu vehículo y tu licencia vigente. El mensaje que se abrirá ya trae esta lista — puedes adjuntar las fotos ahí mismo antes de enviarlo. Revisamos todo a mano antes de que tu perfil aparezca en el directorio; mientras tanto tu registro queda en revisión.',()=>{
      toast('¡Registro enviado! Confirma por WhatsApp para que lo revisemos.');
      closeModal();
    });
    return;
  }

  const handler=SUBMIT_HANDLERS[kind];
  if(!handler){closeModal();return;} // unrecognized kind — nothing to send
  const result=await handler(data,selectedPostBusinessId);
  if(btn){btn.disabled=false;btn.textContent=originalLabel;}
  if(result&&result.needsBusiness){openBusinessPrompt(kind);return;}
  if(result&&result.error){
    if(isCapReachedError(result.error)){openPremiumPrompt('producto');return;}
    toast(pgErrorToast(result.error,'No se pudo enviar tu publicación.'));
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
/* ══════════════ STRIPE PAYMENT RETURN ══════════════
   Both payment links redirect back here with a ?paid= marker. This is a
   client-side signal only — not cryptographic proof of payment (no
   webhook verification yet) — which is why Premium never self-grants
   itself here; only the Oferta booking actually completes automatically,
   and that's a low-stakes "did they pay for the booking ceremony" gate,
   not a privilege escalation risk the way flipping is_premium would be. */
async function checkPaymentReturn(){
  const params=new URLSearchParams(window.location.search);
  const paid=params.get('paid');
  if(!paid)return;
  window.history.replaceState({},'',window.location.pathname); // don't re-trigger on refresh

  if(paid==='oferta'){
    const pending=sessionStorage.getItem('mc_pending_oferta');
    if(!pending){toast('Pago recibido, pero no encontramos los detalles de tu oferta. Escríbenos por WhatsApp.');return;}
    sessionStorage.removeItem('mc_pending_oferta');
    const {data,slotDs,businessId}=JSON.parse(pending);
    const result=await MC.submitOferta(data,slotDs,false,businessId);
    if(result.error){
      if(isCapReachedError(result.error)){
        toast('Pago recibido, pero llegaste al límite de espacios de tu plan justo antes de que se confirmara. Escríbenos por WhatsApp — te ayudamos a resolverlo.');
        return;
      }
      toast('Pago recibido, pero ese día ya no está disponible — alguien más lo reservó mientras pagabas. Escríbenos por WhatsApp para reprogramar.');
      return;
    }
    toast('¡Pago recibido y espacio reservado! En revisión antes de publicarse ✓');
    refreshOfertaPostCta();
  } else if(paid==='premium'){
    toast('¡Pago recibido! Activaremos tu cuenta Premium en breve.');
  } else if(paid==='evento_feature'){
    const pending=sessionStorage.getItem('mc_pending_evento_feature');
    if(!pending){toast('Pago recibido, pero no encontramos los detalles de tu evento. Escríbenos por WhatsApp.');return;}
    sessionStorage.removeItem('mc_pending_evento_feature');
    const {eventId,startDs}=JSON.parse(pending);
    const {error}=await MC.submitEventoFeature(eventId,startDs);
    if(error){
      toast('Pago recibido, pero esa ventana ya no está disponible — alguien más la reservó mientras pagabas. Escríbenos por WhatsApp para reprogramar.');
      return;
    }
    toast('¡Pago recibido! Tu evento quedará destacado en esas fechas ✓');
  } else if(paid==='business_setup'){
    const pending=sessionStorage.getItem('mc_pending_business_setup');
    if(!pending){toast('Pago recibido, pero no encontramos los datos de tu negocio. Escríbenos por WhatsApp.');return;}
    sessionStorage.removeItem('mc_pending_business_setup');
    const {data}=JSON.parse(pending);
    const {error}=await MC.verifyBusiness(data);
    if(error){
      toast('Pago recibido, pero no pudimos crear el negocio — quizás llegaste al máximo de 5, o tu negocio principal ya no es Premium. Escríbenos por WhatsApp.');
      return;
    }
    toast('¡Pago recibido! Tu nuevo negocio fue enviado para revisión ✓');
  } else if(paid==='business_premium_upgrade'){
    const pending=sessionStorage.getItem('mc_pending_business_premium_upgrade');
    if(!pending){toast('Pago recibido, pero no encontramos a qué negocio corresponde. Escríbenos por WhatsApp.');return;}
    sessionStorage.removeItem('mc_pending_business_premium_upgrade');
    const {businessId}=JSON.parse(pending);
    const {error}=await MC.submitBusinessPremiumUpgrade(businessId);
    if(error){
      toast('Pago recibido, pero no pudimos activarlo — escríbenos por WhatsApp y lo resolvemos.');
      return;
    }
    toast('¡Pago recibido! Este negocio ahora puede tener hasta 10 productos ✓');
  } else if(paid==='mandadito_boost'){
    const pending=sessionStorage.getItem('mc_pending_mandadito_boost');
    if(!pending){toast('Pago recibido, pero no encontramos los detalles de tu impulso. Escríbenos por WhatsApp.');return;}
    sessionStorage.removeItem('mc_pending_mandadito_boost');
    const {mandaditoId,startDs}=JSON.parse(pending);
    const {error}=await MC.submitMandaditoBoost(mandaditoId,startDs);
    if(error){
      toast('Pago recibido, pero esa semana ya no está disponible — alguien más la reservó mientras pagabas. Escríbenos por WhatsApp para reprogramar.');
      return;
    }
    toast('¡Pago recibido! Tu perfil quedará impulsado esas fechas ✓');
  }
}

/* The Comercio-page "¿Tienes un negocio? Publica una oferta" button
   previews what will actually happen for the account's PRIMARY published
   business specifically — same business openPost('oferta') defaults to.
   If someone owns more than one business and picks a different one
   inside the form itself, applyOfertaBusinessHints (already live) shows
   the correct real-time answer for whichever one they actually select —
   this button is just an accurate preview of the default path, not a
   full multi-business summary. Fire-and-forget: this only updates a
   label, nothing waits on it. */
async function refreshOfertaPostCta(){
  const btn=document.getElementById('of-hdr-post-btn');
  if(!btn)return;
  const defaultLabel='¿Tienes un negocio? Publica una oferta';
  const acct=lastFetchedAccount||await MC.currentAccount();
  const owned=(acct&&acct.businesses)||[];
  const published=owned.filter(b=>b.status==='published');
  const biz=published.find(b=>b.is_primary)||published[0];
  if(!biz||!biz.is_premium){btn.textContent=defaultLabel;return;}
  const free=await MC.checkFreeOfertaEligible(biz.id);
  btn.textContent=free?'Publica tu oferta gratis':'Publica tu oferta — $99';
}

/* Data reload + re-render only — deliberately does NOT touch which
   sub-tab mode is active (Mercado vs Clasificados, etc.), so calling this
   again later (pull-to-refresh) can't silently kick someone back to a
   default tab they'd already navigated away from. Render functions use
   whatever mode is currently set; only init() sets the initial default. */
async function refreshContent(){
  await loadAllData();
  // Resolve admin status before the first render pass so admin-only card
  // affordances (long-press remove) are wired on initial load, not only
  // after a later re-render. refreshPendingBadge() keeps it fresh after.
  lastFetchedAccount=await MC.currentAccount();
  renderInicio();
  renderNoticias();
  refreshOfertaPostCta();
  renderMktChips();renderMercado();renderDestacadosCarousel();renderClasChips();renderClasificados();renderOfertas();renderMandaditos();
  renderEvtChips();renderEventos();renderMsChips();renderMascotas();renderEmpleos();
  renderRepChips();renderReportes();renderAvChips();renderAvisos();renderAlertas();renderServiciosUtiles();
  refreshPendingBadge();
  refreshHeaderAccount();
  loadWeather(); // fire-and-forget; re-renders the header (and the lightbox if open) when it lands
}

/* Perfil bottom-nav tab: label reads "Entrar" while signed out (taps
   through to the sign-in / create-account form), "Perfil" once signed in.
   Called on load and after any sign-in/sign-out. Also caches the result
   into lastKnownSignedIn, which renderBottomNav() reapplies on every tab
   switch — see the comment above that function for why. */
async function refreshHeaderAccount(){
  const btn=document.getElementById('bn-perfil');
  if(!btn)return;
  const acct=await MC.currentAccount();
  lastKnownSignedIn=acct.signedIn;
  btn.classList.toggle('signin',!acct.signedIn);
  const lbl=document.getElementById('bn-perfil-lbl');
  if(lbl)lbl.textContent=acct.signedIn?'Perfil':'Entrar';
}

/* Perfil-tab notification badge — admin-only for now (per the founder's own
   scoping: regular accounts may get their own notifications later, but
   this is just the admin's "Pendiente" count today). Called on load,
   after sign-in/out (admin status can change), after pull-to-refresh,
   and after every approve/reject action so the count stays live without
   needing to close and reopen anything. */
async function refreshPendingBadge(){
  // Same count on the Perfil tab's badge AND the "Mi cuenta" row inside
  // the menu, so an admin can see which item the tab dot is pointing at.
  const els=[document.getElementById('bn-perfil-badge'),document.getElementById('menu-account-badge')];
  const set=(txt)=>{ lastPendingBadgeText=txt; els.forEach(el=>{ if(!el)return; el.textContent=txt; el.classList.toggle('on',!!txt); }); };
  const acct=await MC.currentAccount();
  // Keep the app-wide "who's signed in" cache fresh from here too — it runs
  // on load and after every sign-in/out, so admin-only affordances
  // (long-press remove) work without first opening the account view.
  lastFetchedAccount=acct;
  if(!acct.signedIn||!acct.isAdmin){set('');return;}
  const count=await MC.fetchPendingCount();
  set(count>0?(count>99?'99+':String(count)):'');
}

/* The private follow-up — fires once per app-open at most, only if
   there's an eligible contact (24h–48h old, unresolved), and only if
   nothing else is already blocking the screen. Silence (no tap either
   way) is treated as "fine" — see MC.fetchPendingMandaditoReview, the
   query itself just stops returning it after 48h, no separate "expired"
   write needed. */
async function maybeShowMandaditoReviewNudge(){
  if(document.getElementById('modal-bg').classList.contains('on'))return;
  if(document.getElementById('install-gate').classList.contains('on'))return;
  const pending=await MC.fetchPendingMandaditoReview();
  if(!pending)return;
  const name=(pending.mandaditos&&pending.mandaditos.display_name)||'ese mandadito';
  document.getElementById('modal-title').textContent='Un momento';
  document.getElementById('modal-body').innerHTML=`
    <div style="text-align:center;padding:10px 4px">
      <div style="font-weight:700;font-size:15.5px;margin-bottom:14px">¿Cómo te fue con ${e(name)}?</div>
      <div style="display:flex;gap:8px">
        <button class="submit-btn" style="margin-top:0;flex:1;background:var(--paper2);color:var(--ink)" onclick="resolveMandaditoNudge('${pending.id}',true)">Todo bien</button>
        <button class="submit-btn" style="margin-top:0;flex:1;background:var(--signal);color:#fff" onclick="openMandaditoProblemNote('${pending.id}','${pending.mandadito_id}')">Tuve un problema</button>
      </div>
    </div>
  `;
  document.getElementById('modal-bg').classList.add('on');
}
async function resolveMandaditoNudge(contactId,ok){
  await MC.resolveMandaditoContact(contactId);
  closeModal();
  if(ok)toast('Gracias por avisarnos ✓');
}
function openMandaditoProblemNote(contactId,mandaditoId){
  document.getElementById('modal-title').textContent='Cuéntanos qué pasó';
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--ink3);font-size:13px;margin-bottom:10px;line-height:1.5">Esto queda solo entre tú y MiCampeche — nunca se lo mostramos al mandadito.</div>
    <textarea class="ft" id="mandadito-problem-note" placeholder="¿Qué pasó?"></textarea>
    <button class="submit-btn" id="mandadito-problem-submit-btn" onclick="submitMandaditoProblem('${contactId}','${mandaditoId}')">Enviar</button>
  `;
}
async function submitMandaditoProblem(contactId,mandaditoId){
  const btn=document.getElementById('mandadito-problem-submit-btn');
  const note=document.getElementById('mandadito-problem-note').value.trim();
  if(btn){btn.disabled=true;btn.textContent='Enviando…';}
  const {error}=await MC.reportMandadito(mandaditoId,note,'nudge');
  if(error){toast(pgErrorToast(error,'No se pudo enviar.'));if(btn){btn.disabled=false;btn.textContent='Enviar';}return;}
  await MC.resolveMandaditoContact(contactId);
  closeModal();
  toast('Gracias — lo revisaremos');
}

/* Real in-app messages from the admin (see openAdminMessageCompose) —
   shown one at a time on app-open, same two guard checks and shared modal
   as the Mandadito review nudge just above. Closing via ✕/backdrop instead
   of "Entendido" is deliberately NOT special-cased: the message just stays
   undismissed and pops up again next time, which is the safer default
   (resurfacing beats silently losing it). */
let pendingAdminMessages=[];
async function maybeShowUndismissedMessages(){
  if(document.getElementById('modal-bg').classList.contains('on'))return;
  if(document.getElementById('install-gate').classList.contains('on'))return;
  const uid=await MC.ready;
  if(!uid)return;
  pendingAdminMessages=await MC.fetchMyUndismissedMessages();
  if(pendingAdminMessages.length)renderNextAdminMessage();
}
function renderNextAdminMessage(){
  if(!pendingAdminMessages.length){closeModal();return;}
  const m=pendingAdminMessages[0];
  document.getElementById('modal-title').textContent=m.in_reply_to?'Respuesta de MiCampeche':'Mensaje de MiCampeche';
  document.getElementById('modal-body').innerHTML=`
    <div style="text-align:center;padding:10px 4px">
      ${m.reply_context?`<div style="font-size:12px;color:var(--ink3);margin-bottom:10px;line-height:1.4">En respuesta a tu mensaje: «${e(m.reply_context)}»</div>`:''}
      <div style="font-size:14.5px;line-height:1.5;white-space:pre-wrap;margin-bottom:18px">${e(m.message)}</div>
      <button class="submit-btn" onclick="dismissAdminMessagePopup('${m.id}')">Entendido</button>
    </div>
  `;
  document.getElementById('modal-bg').classList.add('on');
}
async function dismissAdminMessagePopup(id){
  await MC.dismissAdminMessage(id);
  pendingAdminMessages=pendingAdminMessages.filter(m=>m.id!==id);
  renderNextAdminMessage();
}

/* Phone verifications are the time-sensitive queue item now — until the
   founder clears one, that person can't post or interact at all. A quiet
   toast on app-open (admin only) so it isn't sitting unseen behind the
   burger badge. */
async function nudgeAdminVerifications(){
  const acct=await MC.currentAccount();
  if(!acct.signedIn||!acct.isAdmin)return;
  const phone=await MC.fetchPendingPhoneVerifications();
  if(phone.length>0){
    toast(phone.length===1
      ? '1 cuenta espera verificación por WhatsApp'
      : phone.length+' cuentas esperan verificación por WhatsApp');
  }
}

/* ══════════════ GLOBAL SEARCH (header magnifier) ══════════════
   Searches the arrays the app already loaded (no extra network calls).
   Deliberately never looks at phone/contact fields — contact info stays
   behind the sign-in + verified gate. NFKD (not NFD) on purpose: real
   event titles arrive as Unicode "fancy text" (𝗟𝗼𝘀 𝗣𝗮𝘀𝘁𝗲𝗹𝗲𝘀), which only
   compatibility normalization folds back to plain letters. */
let searchOpen=false;
const searchExpanded={};
const SEARCH_GROUP_CAP=4;
const SEARCH_MIN_CHARS=2;
function searchNorm(s){return String(s==null?'':s).normalize('NFKD').replace(/[̀-ͯ]/g,'').toLowerCase();}
function searchTokens(q){return searchNorm(q).split(/\s+/).filter(Boolean);}
// 0 = no match. Every token must appear in title+extras; title hits weigh more.
function searchScore(tokens,title,extras){
  const t=searchNorm(title),x=searchNorm((extras||[]).filter(Boolean).join(' '));
  let score=0;
  for(const tk of tokens){
    const inT=t.includes(tk),inX=x.includes(tk);
    if(!inT&&!inX)return 0;
    score+=inT?(t.startsWith(tk)?5:3):1;
  }
  return score;
}
// Static index of every page / menu item / action in the app. `k` = extra
// keywords (synonyms people actually type). `go` runs AFTER search has closed.
const SEARCH_PAGES=[
  {id:'inicio',t:'Inicio',s:'Página principal',k:'home portada principal',ico:'home',bg:'var(--night)',go:()=>nav('inicio')},
  {id:'noticias',t:'Noticias',s:'Lo último de Campeche',k:'periódico prensa notas',ico:'news',bg:'var(--gulf)',go:()=>nav('noticias')},
  {id:'comercio',t:'Comercio',s:'Ofertas, mercado, clasificados y mandaditos',k:'tienda compras',ico:'tienda',bg:'var(--palm)',go:()=>nav('tienda')},
  {id:'ofertas',t:'Ofertas del día',s:'Comercio · descuentos de negocios locales',k:'descuentos promociones promo 2x1 rebajas',ico:'tienda',bg:'var(--palm)',go:()=>nav('tienda')},
  {id:'mercado',t:'Mercado',s:'Comercio · productos de negocios locales',k:'tienda productos negocios comprar',ico:'tienda',bg:'var(--palm)',go:()=>{nav('tienda');setTiendaMode('mercado');}},
  {id:'clasificados',t:'Clasificados',s:'Comercio · artículos de vecinos',k:'segunda mano usados vender comprar',ico:'tienda',bg:'var(--palm)',go:()=>{nav('tienda');setTiendaMode('clasificados');}},
  {id:'mandaditos',t:'Mandaditos',s:'Comercio · quién te ayuda con un encargo',k:'mensajero repartidor envíos encargos recados',ico:'mandaditos',bg:'var(--gulf)',go:()=>{nav('tienda');setTiendaMode('mandaditos');}},
  {id:'anuncios',t:'Anuncios',s:'Eventos, empleos y alertas',k:'',ico:'eventos',bg:'var(--wall-dk)',go:()=>nav('anuncios')},
  {id:'eventos',t:'Eventos',s:'Anuncios · qué pasa en la ciudad',k:'conciertos fiestas agenda calendario',ico:'eventos',bg:'var(--wall-dk)',go:()=>{nav('anuncios');setAnunciosMode('eventos');}},
  {id:'empleos',t:'Empleos',s:'Anuncios · vacantes en Campeche',k:'trabajo vacantes chamba',ico:'empleos',bg:'var(--wall-dk)',go:()=>{nav('anuncios');setAnunciosMode('empleos');}},
  {id:'alertas',t:'Alertas',s:'Anuncios · avisos oficiales',k:'clima agua cfe protección civil emergencia',ico:'alertas',bg:'var(--wall-dk)',go:()=>{nav('anuncios');setAnunciosMode('alertas');}},
  {id:'vecinos',t:'Vecinos',s:'Avisos, reportes y mascotas',k:'comunidad',ico:'reportar',bg:'var(--signal)',go:()=>nav('reportar')},
  {id:'avisos',t:'Avisos',s:'Vecinos · avisos de la comunidad',k:'comunidad juntas',ico:'reportar',bg:'var(--signal)',go:()=>{nav('reportar');setReportarMode('avisos');}},
  {id:'reportes',t:'Reportes',s:'Vecinos · baches, fugas, alumbrado',k:'infraestructura bache fuga luz alumbrado basura calle',ico:'reportar',bg:'var(--signal)',go:()=>{nav('reportar');setReportarMode('reportes');}},
  {id:'mascotas',t:'Mascotas',s:'Vecinos · adopción, perdidos, campañas y negocios',k:'perro gato mascota animal adopcion adoptar perdida extraviado encontrado veterinario veterinaria estetica canina esterilizacion castracion vacuna alimento',ico:'paw',bg:'var(--signal)',go:()=>{searchResetInput('ms-colonia-filter');setMsColonia('');setMsFilter('all');nav('reportar');setReportarMode('mascotas');}},
  {id:'mascotas-adopcion',t:'Adopción de mascotas',s:'Mascotas · perros y gatos que buscan hogar',k:'adoptar adopcion perrito gatito cachorro rescate',ico:'paw',bg:'var(--signal)',go:()=>{setMsColonia('');setMsFilter('adopcion');nav('reportar');setReportarMode('mascotas');}},
  {id:'mascotas-perdidos',t:'Mascotas perdidas',s:'Mascotas · lo que alguien perdió',k:'perdi perro gato extraviado busco',ico:'paw',bg:'var(--signal)',go:()=>{setMsColonia('');setMsFilter('perdido');nav('reportar');setReportarMode('mascotas');}},
  {id:'mascotas-encontrados',t:'Mascotas encontradas',s:'Mascotas · lo que alguien encontró',k:'encontre hallado perro gato',ico:'paw',bg:'var(--signal)',go:()=>{setMsColonia('');setMsFilter('encontrado');nav('reportar');setReportarMode('mascotas');}},
  {id:'mascotas-campanas',t:'Campañas de esterilización y vacunación',s:'Mascotas · campañas',k:'esterilizacion castracion vacunacion campana gratis jornada',ico:'paw',bg:'var(--signal)',go:()=>{setMsColonia('');setMsFilter('campana');nav('reportar');setReportarMode('mascotas');}},
  {id:'mascotas-negocios',t:'Veterinarias, estéticas y tiendas de mascotas',s:'Mascotas · negocios',k:'veterinaria veterinario estetica canina peluqueria alimento croquetas accesorios',ico:'paw',bg:'var(--signal)',go:()=>{setMsFilter('negocios');nav('reportar');setReportarMode('mascotas');}},
  {id:'objetos-perdidos',t:'Objetos perdidos',s:'Avisos · lo que alguien perdió',k:'cartera llaves celular extraviado objeto',ico:'reportar',bg:'var(--signal)',go:()=>{searchResetInput('av-colonia');setAvColonia('');setAvFilter('Perdido');nav('reportar');setReportarMode('avisos');}},
  {id:'objetos-encontrados',t:'Objetos encontrados',s:'Avisos · lo que alguien encontró',k:'encontre hallado cartera llaves objeto',ico:'reportar',bg:'var(--signal)',go:()=>{searchResetInput('av-colonia');setAvColonia('');setAvFilter('Encontrado');nav('reportar');setReportarMode('avisos');}},
  {id:'koox',t:"Transporte (Ko'ox)",s:'Rutas, tarifas y apps en tiempo real',k:'koox camión autobús transporte ruta urbano',ico:'bus',bg:'var(--gulf)',go:()=>goToKoox()},
  {id:'clima',t:'Clima',s:'Pronóstico de hoy',k:'tiempo temperatura lluvia calor pronóstico',ico:'sun',bg:'var(--gulf)',go:()=>openWeatherLightbox()},
  {id:'perfil',t:'Mi perfil',s:'Tu cuenta',k:'cuenta entrar iniciar sesión registrarme crear cuenta',ico:'account',bg:'var(--night)',go:()=>openAccount()},
  {id:'negocio',t:'Mi negocio',s:'Tu negocio y su verificación',k:'negocios verificar premium registrar',ico:'account',bg:'var(--night)',go:()=>{openMenu();toggleMenuSection('cuenta');}},
  {id:'mispub',t:'Mis publicaciones',s:'Lo que has publicado',k:'posts anuncios míos',ico:'account',bg:'var(--night)',go:()=>openMyPosts()},
  {id:'prefs',t:'Preferencias',s:'Tema, consejos y más',k:'tema oscuro claro modo ajustes configuración',ico:'info',bg:'var(--ink3)',go:()=>openPreferences()},
  {id:'sugerencias',t:'Sugerencias',s:'Cuéntanos qué mejorar',k:'opinión feedback ideas mejorar',ico:'message',bg:'var(--palm)',go:()=>openSuggestionForm('menu')},
  {id:'contacto',t:'Contacto',s:'Escríbenos un mensaje',k:'mensaje correo email ayuda soporte',ico:'message',bg:'var(--signal)',go:()=>openContactForm()},
  {id:'mensajes',t:'Mensajes',s:'Tu bandeja de entrada',k:'bandeja respuestas inbox notificaciones',ico:'message',bg:'var(--palm)',go:()=>openMyMessages()},
  {id:'privacidad',t:'Aviso de privacidad y Términos',s:'Cómo tratamos tus datos',k:'privacidad términos condiciones datos legal',ico:'info',bg:'var(--ink3)',go:()=>nav('privacidad')},
  {id:'pub-evento',t:'Publicar un evento',s:'Acción · Anuncios',k:'crear agregar anunciar',ico:'eventos',bg:'var(--wall-dk)',go:()=>openPost('eventos')},
  {id:'pub-oferta',t:'Publicar una oferta',s:'Acción · Comercio (negocios)',k:'crear agregar descuento promoción',ico:'tienda',bg:'var(--palm)',go:()=>openPost('oferta')},
  {id:'pub-producto',t:'Vender en el Mercado',s:'Acción · Comercio (negocios)',k:'publicar producto crear agregar',ico:'tienda',bg:'var(--palm)',go:()=>openPost('producto')},
  {id:'pub-clasificado',t:'Publicar en Clasificados',s:'Acción · Comercio',k:'vender artículo segunda mano crear',ico:'tienda',bg:'var(--palm)',go:()=>openPost('clasificado')},
  {id:'pub-empleo',t:'Publicar una vacante',s:'Acción · Anuncios',k:'empleo trabajo contratar crear',ico:'empleos',bg:'var(--wall-dk)',go:()=>openPost('empleos')},
  {id:'pub-aviso',t:'Publicar un aviso',s:'Acción · Vecinos',k:'crear comunidad',ico:'reportar',bg:'var(--signal)',go:()=>openPost('avisos')},
  {id:'pub-reporte',t:'Hacer un reporte',s:'Acción · Vecinos',k:'reportar bache fuga luz alumbrado problema crear',ico:'reportar',bg:'var(--signal)',go:()=>openPost('reportar')},
  {id:'pub-mascota',t:'Publicar en Mascotas',s:'Acción · Vecinos',k:'adopcion perdido encontrado campana mascota crear publicar',ico:'paw',bg:'var(--signal)',go:()=>openPost('mascotas')},
  {id:'pub-objeto-perdido',t:'Reportar un objeto perdido o encontrado',s:'Acción · Vecinos',k:'extraviado cartera llaves objeto crear',ico:'reportar',bg:'var(--signal)',go:()=>openPost('avisos')},
  {id:'ser-mandadito',t:'Ser mandadito',s:'Acción · Comercio',k:'registrarme trabajar repartir mensajero',ico:'mandaditos',bg:'var(--gulf)',go:()=>openMandaditoSignup()},
  {id:'verificar-negocio',t:'Verificar mi negocio',s:'Acción · Comercio',k:'registrar negocio dar de alta vender',ico:'checkBadge',bg:'var(--palm)',go:()=>{editingBusinessId=null;openPost('negocio_verificar');}}
];
// Categories come from what is LIVE right now (so tapping one never lands on
// an empty list), with counts. Ids are URI-encoded so a stray ' can't break onclick.
function searchCatCounts(list,getCat){
  const m=new Map();
  list.forEach(x=>{const c=getCat(x);if(c)m.set(c,(m.get(c)||0)+1);});
  return [...m.entries()];
}
function searchCategoryItems(){
  const out=[];
  const push=(kind,section,ico,bg,entries)=>entries.forEach(([c,n])=>out.push({
    id:kind+'|'+encodeURIComponent(c).replace(/'/g,'%27'),title:c,extras:[],
    sub:section+' · '+n+(n===1?' resultado':' resultados'),ico,bg}));
  push('cat-eventos','Eventos','eventos','var(--wall-dk)',searchCatCounts(EVENTOS.filter(x=>!evtFinished(x)),x=>x.cat));
  push('cat-mercado','Mercado','tienda','var(--palm)',searchCatCounts(TIENDA.filter(x=>x.sellerType==='negocio'),x=>x.cat));
  push('cat-clasificados','Clasificados','tienda','var(--palm)',searchCatCounts(TIENDA.filter(x=>x.sellerType==='personal'),x=>x.cat));
  push('cat-reportes','Reportes','reportar','var(--signal)',searchCatCounts(REPORTES,x=>x.cat));
  return out;
}
// ico = tile shown when a row has no photo (or, for groups with no photos, always).
const SEARCH_GROUPS=[
  {key:'paginas',label:'Secciones y acciones',items:()=>SEARCH_PAGES.map(p=>({id:p.id,title:p.t,extras:[p.k],sub:p.s,ico:p.ico,bg:p.bg}))},
  {key:'categorias',label:'Categorías',items:()=>searchCategoryItems()},
  {key:'noticias',label:'Noticias',ico:'news',items:()=>NOTICIAS.map(n=>({id:n.id,title:n.title,extras:[n.desc,n.source],sub:n.source,img:n.img}))},
  {key:'eventos',label:'Eventos',ico:'eventos',items:()=>EVENTOS.filter(x=>!evtFinished(x)).map(x=>({id:x.id,title:x.name,extras:[x.cat,x.loc,x.colonia,x.desc],sub:x.dateLong+(x.loc?' · '+x.loc:''),img:x.img}))},
  {key:'ofertas',label:'Ofertas',ico:'tienda',items:()=>OFERTAS.filter(o=>o.isExample||ofertaAgeDays(o)<OFERTA_LIFESPAN_DAYS).map(o=>({id:o.id,title:o.name,extras:[o.seller,o.desc],sub:o.seller+' · $'+o.priceNow,img:o.img}))},
  {key:'mercado',label:'Mercado',ico:'tienda',items:()=>TIENDA.filter(x=>x.sellerType==='negocio').map(x=>({id:x.id,title:x.name,extras:[x.cat,x.seller,x.desc,x.colonia],sub:x.seller+(x.price?' · '+x.price:''),img:x.img}))},
  {key:'clasificados',label:'Clasificados',ico:'tienda',items:()=>TIENDA.filter(x=>x.sellerType==='personal').map(x=>({id:x.id,title:x.name,extras:[x.cat,x.desc,x.colonia],sub:[x.price,x.colonia].filter(Boolean).join(' · '),img:x.img}))},
  {key:'mandaditos',label:'Mandaditos',ico:'mandaditos',items:()=>MANDADITOS.map(m=>({id:m.id,title:m.name,extras:[m.desc,m.vehicle],sub:m.vehicle||'Mandadito',img:m.img}))},
  {key:'empleos',label:'Empleos',ico:'empleos',items:()=>EMPLEOS.map(x=>({id:x.id,title:x.title,extras:[x.co,x.desc,(x.tags||[]).join(' '),x.colonia],sub:[x.co,x.pay].filter(Boolean).join(' · ')}))},
  {key:'alertas',label:'Alertas',ico:'alertas',items:()=>ALERTAS.map(a=>({id:a.id,title:a.title,extras:[a.desc,a.zone,a.type],sub:[a.type,a.time].filter(Boolean).join(' · ')}))},
  {key:'avisos',label:'Avisos',ico:'reportar',items:()=>AVISOS.map(a=>({id:a.id,title:a.title,extras:[a.desc,a.cat,a.colonia],sub:a.cat,img:a.img}))},
  {key:'mascotas',label:'Mascotas',ico:'paw',items:()=>MASCOTAS.filter(mascotaVisible).map(x=>({id:x.id,title:x.name,extras:[x.desc,x.loc,x.colonia,x.species,MASCOTA_TYPE_LABEL[x.type]],sub:[MASCOTA_TYPE_LABEL[x.type],mascotaMeta(x)].filter(Boolean).join(' · '),img:x.img}))},
  {key:'reportes',label:'Reportes',ico:'pin',items:()=>REPORTES.map(x=>({id:x.id,title:x.title,extras:[x.desc,x.loc,x.loc_colonia,x.cat],sub:[x.cat,x.loc].filter(Boolean).join(' · '),img:x.img}))}
];
function runSearch(q){
  const tokens=searchTokens(q);
  if(String(q).trim().length<SEARCH_MIN_CHARS||!tokens.length)return null;
  const out=[];
  for(const g of SEARCH_GROUPS){
    const hits=[];
    g.items().forEach((it,i)=>{const s=searchScore(tokens,it.title,it.extras);if(s)hits.push({id:it.id,title:it.title,sub:it.sub,img:it.img,ico:it.ico,bg:it.bg,score:s,i});});
    if(hits.length){hits.sort((a,b)=>b.score-a.score||a.i-b.i);out.push({g,hits});}
  }
  return out;
}
// Leading visual for every row: the item's photo if it has one; else a coloured
// icon tile (sections/categories); else a neutral icon tile for that content type.
function searchThumb(h,g){
  if(h.img)return '<span class="sr-thumb" style="background-image:url(\''+e(String(h.img).replace(/'/g,'%27'))+'\')"></span>';
  if(h.ico)return '<span class="sr-thumb sr-ico" style="background:'+h.bg+'">'+svgIco(h.ico)+'</span>';
  if(g.ico)return '<span class="sr-thumb sr-ph">'+svgIco(g.ico)+'</span>';
  return '';
}
function renderSearchResults(q){
  const body=document.getElementById('search-body');
  if(!body)return;
  const res=runSearch(q);
  if(res===null){body.innerHTML='<div class="sr-hint"><b>¿Qué buscas?</b>Noticias, eventos, productos, secciones, categorías, mandaditos, empleos, avisos…</div>';return;}
  if(!res.length){body.innerHTML='<div class="sr-hint"><b>Sin resultados</b>No encontramos nada para “'+e(String(q).trim())+'”. Prueba con otra palabra.</div>';return;}
  body.innerHTML=res.map(({g,hits})=>{
    const open=!!searchExpanded[g.key];
    const shown=open?hits:hits.slice(0,SEARCH_GROUP_CAP);
    return '<div class="sr-group"><div class="sr-group-hdr">'+g.label+'<span>'+hits.length+'</span></div>'
      +shown.map(h=>'<button class="sr-row" onclick="openSearchResult(\''+g.key+'\',\''+e(h.id)+'\')">'+searchThumb(h,g)+'<span class="sr-row-txt"><span class="sr-row-title">'+e(h.title)+'</span>'+(h.sub?'<span class="sr-row-sub">'+e(h.sub)+'</span>':'')+'</span>'+svgIco('chevronR','sr-row-arr')+'</button>').join('')
      +(!open&&hits.length>SEARCH_GROUP_CAP?'<button class="sr-more" onclick="expandSearchGroup(\''+g.key+'\')">Ver '+(hits.length-SEARCH_GROUP_CAP)+' más</button>':'')
      +'</div>';
  }).join('');
}
function onSearchInput(v){
  Object.keys(searchExpanded).forEach(k=>delete searchExpanded[k]);
  renderSearchResults(v);
}
function expandSearchGroup(key){
  searchExpanded[key]=true;
  const inp=document.getElementById('search-input');
  renderSearchResults(inp?inp.value:'');
}
function openSearch(){
  const inp=document.getElementById('search-input');
  if(!inp)return;
  searchOpen=true;
  document.getElementById('topbar').classList.add('searching');
  document.getElementById('search-panel').classList.add('on');
  inp.value='';
  Object.keys(searchExpanded).forEach(k=>delete searchExpanded[k]);
  renderSearchResults('');
  inp.focus();   // same tick as the tap, so iOS raises the keyboard
}
function closeSearch(){
  if(!searchOpen)return;
  searchOpen=false;
  document.getElementById('topbar').classList.remove('searching');
  document.getElementById('search-panel').classList.remove('on');
  const inp=document.getElementById('search-input');
  if(inp){inp.blur();inp.value='';}
}
// Ofertas/Avisos/Reportes have no detail screen — they live as cards in their
// tab. Every one of those cards already carries data-adm-rm="table|id" (see
// admRm()), so we can find it without touching any template. Mascotas cards
// are jumped to the same way AND also have their own detail modal
// (openMascotaView), reached separately from search-result rows.
function searchJumpTo(table,id){
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    const el=document.querySelector('[data-adm-rm="'+table+'|'+String(id).replace(/"/g,'')+'"]');
    if(!el)return;
    el.scrollIntoView({block:'center',behavior:'smooth'});
    el.classList.add('search-flash');
    setTimeout(()=>el.classList.remove('search-flash'),2200);
  }));
}
function searchResetInput(id){const i=document.getElementById(id);if(i)i.value='';}
function openSearchResult(kind,id){
  closeSearch();
  switch(kind){
    case 'paginas':{const p=SEARCH_PAGES.find(x=>x.id===id);if(p)p.go();break;}
    case 'categorias':{
      const parts=String(id).split('|'),ck=parts[0],cat=decodeURIComponent(parts[1]||'');
      // Clear the target list's other filters first so the category can't land on a hidden/empty view.
      if(ck==='cat-eventos'){searchResetInput('evt-colonia');setEvtColonia('');setEvtDateFilter('all');nav('anuncios');setAnunciosMode('eventos');setEvtFilter(cat);}
      else if(ck==='cat-mercado'){searchResetInput('mkt-colonia');searchResetInput('mkt-search');mktColonia='';mktSearch='';mktFilter=cat;nav('tienda');setTiendaMode('mercado');renderMktChips();renderMercado();}
      else if(ck==='cat-clasificados'){searchResetInput('clas-colonia');searchResetInput('clas-search');clasColonia='';clasSearch='';clasFilter=cat;nav('tienda');setTiendaMode('clasificados');renderClasChips();renderClasificados();}
      else if(ck==='cat-reportes'){searchResetInput('rep-colonia');setRepColonia('');nav('reportar');setReportarMode('reportes');setRepFilter(cat);}
      break;
    }
    case 'noticias':showNoticia(id);break;
    case 'eventos':openEvento(id);break;
    case 'mercado':openProdView('negocio',id);break;
    case 'clasificados':openProdView('personal',id);break;
    case 'mandaditos':openMandaditoView(id);break;
    case 'empleos':openEmpleo(id);break;
    case 'alertas':openAlertaDetail(id);break;
    case 'ofertas':nav('tienda');searchJumpTo('ofertas',id);break;
    // The next three reset that list's own filters first, so the target card
    // can't be hidden by a colonia/category filter left over from earlier.
    case 'avisos':searchResetInput('av-colonia');setAvColonia('');setAvFilter('all');nav('reportar');setReportarMode('avisos');searchJumpTo('avisos',id);break;
    case 'mascotas':searchResetInput('ms-colonia-filter');setMsColonia('');setMsFilter('all');nav('reportar');setReportarMode('mascotas');searchJumpTo('mascotas',id);break;
    case 'reportes':searchResetInput('rep-colonia');setRepColonia('');setRepFilter('all');nav('reportar');setReportarMode('reportes');searchJumpTo('reportes',id);break;
  }
}

/* ══════════════ SUGGESTIONS + CONTACTO (user→admin messages, replies, inboxes) ══════════════
   One table (public.suggestions) holds both kinds of user→admin message:
   kind='sugerencia' (suggestions box + weekly prompt) and kind='contacto'
   (the Contacto form, which replaces the old mailto). Admin replies are rows
   in public.admin_messages (in_reply_to + a short reply_context snapshot),
   so a reply reaches the user as: popup next app-open + push (existing) and
   a permanent entry in their Mensajes inbox (incoming only — users write to
   us through Contacto, never by replying in the inbox). */
const SUGGEST_MIN=5,SUGGEST_MAX=1000;
const SUGGEST_PROMPT_EVERY_MS=7*24*60*60*1000;
let suggestionKind='sugerencia';   // 'sugerencia' | 'contacto' — set by renderSuggestionForm, read by submitSuggestion
// Suggestions: same gate as every other write (signed in + phone verified).
// Checked when the form OPENS (not on submit) so nobody types something and
// then loses it behind a sign-in modal. The DB enforces the same rule (RLS).
async function openSuggestionForm(source){
  const acct=await MC.currentAccount();
  if(!runWriteGate(acct,null))return;
  renderSuggestionForm(source||'menu');
  document.getElementById('modal-bg').classList.add('on');
}
// Contacto is a SUPPORT channel, so it is deliberately open to ANY signed-in
// account — including one still waiting on phone verification, which is
// exactly when someone needs to reach us (the DB policy allows the same).
// Guests have no account to reply to, so they get sign-in + the email fallback.
async function openContactForm(){
  const acct=await MC.currentAccount();
  if(!acct.signedIn)renderContactGuest();
  else renderSuggestionForm('contact');
  document.getElementById('modal-bg').classList.add('on');
}
function renderContactGuest(){
  document.getElementById('modal-title').textContent='Contacto';
  document.getElementById('modal-body').innerHTML='<div style="color:var(--ink3);font-size:13.5px;line-height:1.5;margin-bottom:14px">Inicia sesión para escribirnos desde la app — así podemos responderte aquí mismo, en <b>Mensajes</b>. Si no puedes entrar o verificar tu cuenta, escríbenos por correo.</div>'
    +'<button class="submit-btn" style="margin-bottom:8px" onclick="closeModal();openAccount()">Iniciar sesión</button>'
    +'<button class="submit-btn" style="background:var(--paper2);color:var(--ink);box-shadow:none" onclick="contactUs()">Escribir por correo</button>';
}
function renderSuggestionForm(source){
  const weekly=source==='weekly',contact=source==='contact';
  suggestionKind=contact?'contacto':'sugerencia';
  document.getElementById('modal-title').textContent=weekly?'Tu opinión cuenta':(contact?'Contacto':'Sugerencias');
  const intro=weekly?'¿Hay algo que te gustaría ver o mejorar en MiCampeche? Cuéntanos — es opcional.'
    :contact?'Escríbenos tu pregunta, problema o comentario. Te respondemos aquí mismo, en <b>Mensajes</b>.'
    :'Cuéntanos qué te gustaría ver, mejorar o arreglar en MiCampeche.';
  document.getElementById('modal-body').innerHTML='<div style="color:var(--ink3);font-size:13.5px;line-height:1.5;margin-bottom:10px">'+intro
    +'</div><textarea class="ft" id="suggestion-text" maxlength="'+SUGGEST_MAX+'" placeholder="'+(contact?'Escribe tu mensaje…':'Escribe tu sugerencia…')+'"></textarea>'
    +'<div style="display:flex;gap:8px;margin-top:4px">'
    +(weekly?'<button class="submit-btn" style="flex:1;background:var(--paper2);color:var(--ink);box-shadow:none" onclick="closeModal()">Ahora no</button>':'')
    +'<button class="submit-btn" id="suggestion-submit-btn" style="flex:1" onclick="submitSuggestion()">Enviar</button></div>';
}
async function submitSuggestion(){
  const contact=suggestionKind==='contacto';
  const btn=document.getElementById('suggestion-submit-btn');
  const txt=(document.getElementById('suggestion-text').value||'').trim();
  if(txt.length<SUGGEST_MIN){toast((contact?'Escribe un poco más':'Cuéntanos un poco más')+' (mínimo '+SUGGEST_MIN+' letras).');return;}
  if(btn){btn.disabled=true;btn.textContent='Enviando…';}
  const {error}=await MC.submitSuggestion(txt,suggestionKind);
  if(error){
    toast((error.message||'').includes('suggestion_rate_limit')
      ?(contact?'Ya enviaste varios mensajes hoy. Te respondemos lo antes posible.':'Ya nos mandaste varias hoy — gracias. Puedes enviar más mañana.')
      :pgErrorToast(error,contact?'No se pudo enviar tu mensaje. Intenta de nuevo o escríbenos por correo.':'No se pudo enviar. Intenta de nuevo.'));
    if(btn){btn.disabled=false;btn.textContent='Enviar';}
    return;
  }
  closeModal();
  toast(contact?'¡Mensaje enviado! Te respondemos en Mensajes ✓':'¡Gracias por tu sugerencia! ✓');
}

// Weekly prompt: verified accounts only, at most once per 7 days per account
// per device (localStorage, keyed by uid). The timestamp is written when the
// popup is SHOWN, so closing it any way (Ahora no / ✕ / backdrop) counts as
// skipping this week — it's optional, unlike the admin-message popup. Never
// stacks on top of anything else: if any layer is open when it fires, it
// quietly waits for the next app-open.
function anyOverlayOpen(){
  return ['modal-bg','menu-bg','wx-lb-bg','install-gate','tip-gate','desktop-gate','search-panel'].some(id=>{
    const el=document.getElementById(id);
    return !!el&&el.classList.contains('on');
  });
}
async function maybeShowWeeklySuggestionPrompt(){
  if(anyOverlayOpen())return;
  const acct=await MC.currentAccount();
  if(!acct.signedIn||acct.phoneVerificationStatus!=='verified')return;
  const uid=await MC.ready;
  if(!uid)return;
  const key='mc_sugg_prompt_'+uid;
  let last=0;
  try{last=parseInt(localStorage.getItem(key)||'0',10)||0;}catch(err){return;}
  if(Date.now()-last<SUGGEST_PROMPT_EVERY_MS)return;
  if(anyOverlayOpen())return;   // re-check: the awaits above gave other popups time to open
  try{localStorage.setItem(key,String(Date.now()));}catch(err){}
  renderSuggestionForm('weekly');
  document.getElementById('modal-bg').classList.add('on');
}

/* ── User inbox: incoming messages only (admin messages + replies) ── */
async function openMyMessages(){
  const acct=await MC.currentAccount();
  if(!acct.signedIn){openAccount();return;}
  mcModalPushView('account');
  document.getElementById('modal-title').textContent='Mensajes';
  document.getElementById('modal-body').innerHTML=ADMIN_LOADING;
  document.getElementById('modal-bg').classList.add('on');
  const list=await MC.fetchMyMessages();
  renderMyMessages(list);
  // Opening the inbox counts as reading. The "Nuevo" pills stay visible for
  // this view (list was captured before), and the unread count/popup clear.
  list.filter(m=>m.unread).forEach(m=>MC.dismissAdminMessage(m.id));
}
function renderMyMessages(list){
  const writeBtn='<button class="submit-btn" style="margin-top:6px" onclick="closeModal();openContactForm()">Escribir a MiCampeche</button>';
  if(!list.length){
    document.getElementById('modal-body').innerHTML='<div style="text-align:center;padding:26px 10px 18px;color:var(--ink3);font-size:13.5px;line-height:1.5">Aún no tienes mensajes.<br>Cuando MiCampeche te escriba o responda, lo verás aquí.</div>'+writeBtn;
    return;
  }
  document.getElementById('modal-body').innerHTML=list.map(m=>`
    <div style="background:var(--surface);border:1px solid var(--line);border-radius:var(--rs);padding:12px 13px;margin-bottom:8px">
      <div style="display:flex;justify-content:space-between;gap:8px;font-size:12px;color:var(--ink3);margin-bottom:6px">
        <span><b style="color:var(--ink2)">MiCampeche</b> · ${e(m.time)}</span>
        ${m.unread?'<span style="color:var(--signal);font-weight:700">Nuevo</span>':''}
      </div>
      ${m.replyContext?`<div style="font-size:12px;color:var(--ink3);border-left:3px solid var(--line2);padding-left:8px;margin-bottom:8px;line-height:1.4">En respuesta a tu mensaje: «${e(m.replyContext)}»</div>`:''}
      <div style="font-size:14px;line-height:1.5;white-space:pre-wrap">${e(m.message)}</div>
    </div>`).join('')
    +'<div style="font-size:12px;color:var(--ink3);text-align:center;margin:12px 0 4px">¿Quieres escribirnos? Usa Contacto.</div>'+writeBtn;
}

/* ── Admin inbox (Contacto + Sugerencias, with replies) ── */
let adminSuggestions=[];
let adminInboxFilter='all';    // 'all' | 'contacto' | 'sugerencia'
let adminReplyOpenId=null;     // which card's reply box is open
async function openAdminSuggestions(){
  mcModalPushView('account');
  adminInboxFilter='all';adminReplyOpenId=null;
  document.getElementById('modal-title').textContent='Bandeja';
  document.getElementById('modal-body').innerHTML=ADMIN_LOADING;
  document.getElementById('modal-bg').classList.add('on');
  adminSuggestions=await MC.adminFetchSuggestions();
  renderAdminSuggestions();
}
function restoreAdminSuggestions(){
  renderAdminSuggestions();
  MC.adminFetchSuggestions().then(list=>{adminSuggestions=list;renderAdminSuggestions();});
}
function setAdminInboxFilter(f){adminInboxFilter=f;adminReplyOpenId=null;renderAdminSuggestions();}
function openAdminReply(id){
  adminReplyOpenId=(adminReplyOpenId===id)?null:id;
  renderAdminSuggestions();
  const t=document.getElementById('admin-reply-text');
  if(t)t.focus();
}
function renderAdminSuggestions(){
  document.getElementById('modal-title').textContent='Bandeja';
  const chips=[['all','Todos'],['contacto','Contacto'],['sugerencia','Sugerencias']]
    .map(([v,l])=>`<button class="chip${adminInboxFilter===v?' on':''}" onclick="setAdminInboxFilter('${v}')">${l}</button>`).join('');
  const head=`<div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap">${chips}</div>`;
  const list=adminSuggestions.filter(s=>adminInboxFilter==='all'||s.kind===adminInboxFilter);
  if(!list.length){
    document.getElementById('modal-body').innerHTML=head+'<div style="text-align:center;padding:30px 10px;color:var(--ink3)">Todavía no hay mensajes.</div>';
    return;
  }
  document.getElementById('modal-body').innerHTML=head+list.map(s=>`
    <div style="background:var(--surface);border:1px solid var(--line);border-radius:var(--rs);padding:12px 13px;margin-bottom:8px;${s.reviewedAt&&adminReplyOpenId!==s.id?'opacity:.7':''}">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:12px;color:var(--ink3);margin-bottom:6px">
        <span><b style="color:var(--ink2)">${e(s.name)}</b> · ${e(s.time)}${s.verified?'':' · sin verificar'}</span>
        <span style="display:flex;gap:6px;align-items:center">
          <span style="font-size:10.5px;font-weight:700;padding:2px 8px;border-radius:99px;color:#fff;background:${s.kind==='contacto'?'var(--wall-dk)':'var(--palm)'}">${s.kind==='contacto'?'Contacto':'Sugerencia'}</span>
          ${s.reviewedAt?'':'<span style="color:var(--signal);font-weight:700">Nueva</span>'}
        </span>
      </div>
      <div style="font-size:14px;line-height:1.5;white-space:pre-wrap">${e(s.message)}</div>
      ${(s.replies||[]).map(r=>`<div style="margin-top:8px;padding:8px 10px;border-left:3px solid var(--palm);background:var(--paper2);border-radius:0 var(--rs) var(--rs) 0;font-size:13px;line-height:1.45;white-space:pre-wrap"><div style="font-size:11px;color:var(--ink3);margin-bottom:3px">Tu respuesta · ${e(r.time)}</div>${e(r.message)}</div>`).join('')}
      ${adminReplyOpenId===s.id?`
        <textarea class="ft" id="admin-reply-text" maxlength="2000" placeholder="Escribe tu respuesta…" style="margin-top:10px"></textarea>
        <div style="display:flex;gap:8px"><button class="submit-btn" style="flex:1;background:var(--paper2);color:var(--ink);box-shadow:none" onclick="openAdminReply('${s.id}')">Cancelar</button><button class="submit-btn" id="admin-reply-send" style="flex:1" onclick="sendAdminReply('${s.id}')">Enviar respuesta</button></div>`
      :`<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
          <button class="chip" onclick="openAdminReply('${s.id}')">${(s.replies||[]).length?'Responder de nuevo':'Responder'}</button>
          <button class="chip" onclick="openAdminUserView('${s.profileId}',restoreAdminSuggestions)">Ver usuario</button>
          ${s.reviewedAt?'':`<button class="chip" onclick="markSuggestionReviewed('${s.id}')">Marcar leída</button>`}
        </div>`}
    </div>`).join('');
}
async function sendAdminReply(id){
  const t=document.getElementById('admin-reply-text');
  const btn=document.getElementById('admin-reply-send');
  const msg=((t&&t.value)||'').trim();
  if(!msg){toast('Escribe tu respuesta primero');return;}
  if(btn){btn.disabled=true;btn.textContent='Enviando…';}
  const {error}=await MC.adminReplyToMessage(id,msg);
  if(error){
    toast(pgErrorToast(error,'No se pudo enviar la respuesta.'));
    if(btn){btn.disabled=false;btn.textContent='Enviar respuesta';}
    return;
  }
  const s=adminSuggestions.find(x=>x.id===id);
  if(s){
    s.repliedAt=new Date().toISOString();
    if(!s.reviewedAt)s.reviewedAt=s.repliedAt;
    s.replies=(s.replies||[]).concat([{message:msg,time:'ahora'}]);
  }
  adminReplyOpenId=null;
  renderAdminSuggestions();
  toast('Respuesta enviada ✓');
}
async function markSuggestionReviewed(id){
  const {error}=await MC.adminMarkSuggestionReviewed(id);
  if(error){toast('No se pudo marcar.');return;}
  const s=adminSuggestions.find(x=>x.id===id);
  if(s)s.reviewedAt=new Date().toISOString();
  renderAdminSuggestions();
}

async function init(){
  if(!isMobile()){
    document.getElementById('desktop-gate').classList.add('on');
  }else{
    document.getElementById('app').classList.add('on');
    if(!isStandalone()
       && localStorage.getItem('mc_skip_install_gate')!=='1'
       && sessionStorage.getItem('mc_gate_dismissed')!=='1'){
      showInstallGate();
    }
  }
  renderBottomNav();
  renderHeaderWeather();
  await refreshContent();
  await checkPaymentReturn();
  nudgeAdminVerifications();
  maybeShowMandaditoReviewNudge();
  maybeShowUndismissedMessages();
  setTimeout(maybeShowWeeklySuggestionPrompt,8000);
  setTiendaMode('mercado');
  setAnunciosMode('eventos');
  setReportarMode('avisos');
  renderKooxApps();
  initPullToRefresh();
  if(!document.getElementById('install-gate').classList.contains('on'))maybeShowTipGate('inicio');
  if(!isStandalone()&&sessionStorage.getItem('mc_just_updated')==='1'){
    try{sessionStorage.removeItem('mc_just_updated');}catch(e){}
    setTimeout(()=>maybeNudgeInstall(),1200);
  }
  mcBackInit();
}
applyTheme();
init();
