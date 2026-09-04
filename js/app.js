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
  moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  fog:'<path d="M5 11h14a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.6 1.5A3.5 3.5 0 0 0 5 11z"/><path d="M4 15h16M6 19h12"/>',
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
  check:'<path d="M20 6L9 17l-5-5"/>',
  external:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14L21 3"/>'
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
// Public contact address for the Contacto menu item. WhatsApp above is kept
// for phone verification only, not general contact.
const MICAMPECHE_EMAIL='hola@micampeche.app';

/* Real, live Stripe Payment Links. ?locale=es-419 forces Mexican Spanish
   on Stripe's hosted checkout regardless of the visitor's own browser
   language — without it, Stripe auto-detects and can show English. */
const STRIPE_LINK_OFERTA='https://buy.stripe.com/eVq28sguZ7uxcEqgr54F200?locale=es-419';
const STRIPE_LINK_PREMIUM='https://buy.stripe.com/bJe5kE7YteWZcEq0s74F201?locale=es-419';
function openMenu(){document.getElementById('menu-bg').classList.add('on');}
function closeMenu(){document.getElementById('menu-bg').classList.remove('on');}
function goToServicios(){closeMenu();nav('servicios');}
function goToInfo(){closeMenu();nav('info');}
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
let pullStartX=0,pullStartY=0,pullActive=false,pullDistance=0,pullRefreshing=false;
const PULL_THRESHOLD=70,PULL_MAX=100;

function initPullToRefresh(){
  const screens=document.querySelector('.screens');
  const indicator=document.getElementById('pull-indicator');
  if(!screens||!indicator)return;

  screens.addEventListener('touchstart',e=>{
    if(pullRefreshing)return;
    const activeScr=document.querySelector('.scr.on');
    if(!activeScr||activeScr.scrollTop>0)return;
    pullStartX=e.touches[0].clientX;
    pullStartY=e.touches[0].clientY;
    pullActive=true;
    activeScr.classList.add('pull-active');
    activeScr.classList.remove('pull-snap');
  },{passive:true});

  screens.addEventListener('touchmove',e=>{
    if(!pullActive||pullRefreshing)return;
    const activeScr=document.querySelector('.scr.on');
    if(!activeScr){pullActive=false;return;}
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
    const activeScr=document.querySelector('.scr.on');
    if(!activeScr)return;
    activeScr.classList.add('pull-snap');
    if(pullDistance>=PULL_THRESHOLD){
      pullRefreshing=true;
      activeScr.style.transform=`translateY(${PULL_THRESHOLD}px)`;
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

/* Manual "check now" from the menu. Updates normally apply on their own
   (skipWaiting in sw.js + the controllerchange handler in index.html);
   this just forces the check immediately and reports what it found. If a
   new version is pulled, the service worker activates it and the page
   reloads itself at the next safe moment — usually within seconds. */
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
const GATE_ICO={
  share:'<svg viewBox="0 0 24 24"><path d="M12 15V3"/><path d="M8 7l4-4 4 4"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></svg>',
  plus:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/></svg>',
  check:'<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>'
};
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
      ${iosAddToHomeStepsHtml()}`;
  }else if(isIOS){
    body=`<h1>Instala MiCampeche en tu iPhone</h1>
      <p>Se abre más rápido, funciona sin conexión y te llega todo al instante. Toma unos segundos:</p>
      ${iosAddToHomeStepsHtml()}`;
  }else{
    body=`<h1>Instala MiCampeche</h1>
      <p>Se abre más rápido, funciona sin conexión y te llega todo al instante.</p>
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
  REPORTES.forEach(r=>{
    if(r.iConfirmedReal)confirmedByMe[r.id]=true;
    if(r.iVotedResolvedReal)resolvedByMe[r.id]=true;
  });
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

let curScreen='inicio';        // the actual visible .scr (tabs AND detail screens)
let mcScreenStack=[];          // breadcrumb trail for the hardware back button
function nav(tab,fromBack){
  document.querySelectorAll('.scr').forEach(s=>s.classList.remove('on'));
  const target=document.getElementById('scr-'+tab);
  if(!target)return;
  target.classList.add('on');
  if(TABS.indexOf(tab)>-1){curTab=tab;}
  renderBottomNav();
  target.scrollTop=0;
  if(!fromBack&&tab!==curScreen){
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
  mcSyncBackTrap();
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
  ['modal-bg','menu-bg','wx-lb-bg'].forEach(id=>{
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
    <div class="dash-card dc-evt" onclick="openEvento('${x.id}')">
      <div class="dc-evt-date"><div class="dc-evt-day">${x.day}</div><div class="dc-evt-mon">${x.mon}</div></div>
      <div><div class="dc-evt-name">${e(x.name)}</div><div class="dc-evt-meta">${x.time?e(x.time)+' · ':''}${e(x.loc)}</div></div>
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
    <div class="news-card" ${admRm('noticias',n.id,n.title)} onclick="showNoticia('${n.id}')">
      <div class="news-thumb" style="background-image:url('${n.img}')"></div>
      <div class="news-body">
        <div class="news-src">${e(n.source)}</div>
        <div class="news-head">${e(n.title)}</div>
        <div class="news-desc">${e(n.desc)}</div>
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
      <div class="detail-desc">${e(n.desc)}</div>
      <a class="detail-link" href="${n.url}" target="_blank" rel="noopener">
        <div><div class="detail-link-lbl">Leer la publicación original de</div><div class="detail-link-name">${e(n.source.split('·')[0].trim())}</div></div>
        ${svgIco('chevronR','detail-arr')}
      </a>
    </div>
  `;
  nav('noticia-detail');
}

/* ══════════════ ONBOARDING CARDS ══════════════
   A pinned "how to use this section" card at the top of each user-postable
   list, while people are still learning the app. Master switch below; each
   card is also dismissible per-device (localStorage). Flip ONBOARDING_ENABLED
   to false (or delete these) once the app is familiar. */
const ONBOARDING_ENABLED=true;
function onboardCard(key,icoName,title,lead,steps,ctaLabel,ctaOnclick){
  if(!ONBOARDING_ENABLED)return '';
  try{if(localStorage.getItem('mc_onboard_'+key)==='1')return '';}catch(_){}
  return `<div class="onboard-card">
    <button class="onboard-card-x" aria-label="Ocultar" onclick="dismissOnboard('${key}')">${svgIco('close')}</button>
    <div class="onboard-card-hd">
      <div class="onboard-card-ico">${svgIco(icoName)}</div>
      <div class="onboard-card-ttl">${title}</div>
    </div>
    ${lead?`<div class="onboard-card-lead">${lead}</div>`:''}
    ${(steps&&steps.length)?`<ol class="onboard-steps">${steps.map(s=>`<li><span>${s}</span></li>`).join('')}</ol>`:''}
    ${ctaLabel?`<button class="onboard-card-cta" onclick="${ctaOnclick}">${ctaLabel}${svgIco('chevronR')}</button>`:''}
  </div>`;
}
function dismissOnboard(key){
  try{localStorage.setItem('mc_onboard_'+key,'1');}catch(_){}
  ({eventos:renderEventos,perdidos:renderPerdidos,empleos:renderEmpleos,avisos:renderAvisos,reportes:renderReportes,alertas:renderAlertas}[key]||function(){})();
}

/* ══════════════ RENDER: EVENTOS (sub-view inside Anuncios) ══════════════ */
let evtFilter='all';
let evtDateFilter='all';
function renderEvtChips(){
  const cats=['all',...new Set(EVENTOS.map(x=>x.cat))];
  document.getElementById('evt-chips').innerHTML=cats.map(c=>
    `<button class="chip${c===evtFilter?' on':''}" onclick="setEvtFilter('${c}')">${c==='all'?'Todos':c}</button>`
  ).join('');
}
function setEvtFilter(c){evtFilter=c;renderEvtChips();renderEventos();}
/* Quick date filter — same chip control as the category row, just a
   separate scroll row above it (#evt-date-chips). */
const EVT_DATE_OPTS=[['all','Todas las fechas'],['hoy','Hoy'],['semana','Esta semana'],['proximamente','Próximamente']];
function renderEvtDateChips(){
  const el=document.getElementById('evt-date-chips');
  if(!el)return;
  el.innerHTML=EVT_DATE_OPTS.map(([v,l])=>
    `<button class="chip${v===evtDateFilter?' on':''}" onclick="setEvtDateFilter('${v}')">${l}</button>`
  ).join('');
}
function setEvtDateFilter(v){evtDateFilter=v;renderEvtDateChips();renderEventos();}
/* MC.fetchEventos already drops anything before today, so the buckets are:
   hoy = exactly today · semana = today..+6d · proximamente = 7+ days out. */
function evtInDateRange(ds){
  if(evtDateFilter==='all'||!ds)return true;
  if(evtDateFilter==='hoy')return ds===TODAY_DS;
  const diffDays=Math.round((new Date(ds+'T12:00:00')-new Date(TODAY_DS+'T12:00:00'))/86400000);
  if(evtDateFilter==='semana')return diffDays>=0&&diffDays<=6;
  if(evtDateFilter==='proximamente')return diffDays>6;
  return true;
}
function renderEventos(){
  renderEvtDateChips();
  const list=EVENTOS.filter(x=>(evtFilter==='all'||x.cat===evtFilter)&&evtInDateRange(x.ds));
  const el=document.getElementById('evt-list');
  const pin=onboardCard('eventos','eventos','Publica tu propio evento',
    '¿Organizas algo en Campeche? Compártelo aquí, gratis.',
    ['Toca el botón <b>+</b> abajo a la derecha.',
     'Escribe nombre, fecha, hora y lugar.',
     'Agrega una foto o cartel, precio y contacto (opcional).',
     'Envíalo: lo revisamos y se publica para toda la ciudad.'],
    'Publicar un evento',"openPost('eventos')");
  if(!list.length){
    const sub=(evtFilter!=='all'||evtDateFilter!=='all')
      ? 'No hay eventos que coincidan con este filtro. Prueba con otro.'
      : 'Sé el primero en publicar un evento en Campeche.';
    el.innerHTML=pin+emptyState('eventos','Nada por aquí todavía',sub);return;
  }
  el.innerHTML=pin+list.map(x=>`
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
    </div>
  `).join('');
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
  const waMsg=encodeURIComponent(`Hola, vi el evento "${x.name}" en MiCampeche y quiero más información.`);
  let links='';
  const site=/^https?:\/\//i.test(x.website||'')?x.website:(x.website?'https://'+x.website:'');
  if(site){
    links+=`<a class="detail-link" href="${e(site)}" target="_blank" rel="noopener">
      <div><div class="detail-link-lbl">Sitio del evento</div><div class="detail-link-name">Abrir página oficial</div></div>
      ${svgIco('external','detail-arr')}
    </a>`;
  }
  if(intl){
    links+=`<a class="detail-link" href="https://wa.me/${intl}?text=${waMsg}" target="_blank" rel="noopener">
      <div><div class="detail-link-lbl">Contacto del organizador</div><div class="detail-link-name">WhatsApp ${e(x.phone)}</div></div>
      ${svgIco('message','detail-arr')}
    </a>
    <a class="detail-link" href="tel:+${intl}">
      <div><div class="detail-link-lbl">Contacto del organizador</div><div class="detail-link-name">Llamar ${e(x.phone)}</div></div>
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
  document.getElementById('anuncios-perdidos').style.display=mode==='perdidos'?'block':'none';
  document.getElementById('anuncios-empleos').style.display=mode==='empleos'?'block':'none';
}

let tiendaMode='mercado';
function setTiendaMode(mode){
  tiendaMode=mode;
  document.querySelectorAll('#scr-tienda .subtog-btn').forEach(b=>b.classList.toggle('on',b.dataset.v===mode));
  document.getElementById('tienda-mercado').style.display=mode==='mercado'?'block':'none';
  document.getElementById('tienda-clasificados').style.display=mode==='clasificados'?'block':'none';
  document.getElementById('tienda-fab').onclick=function(){openPost(mode==='mercado'?'producto':'clasificado');};
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
      ${x.featured?'<span class="prod-badge">Destacado</span>':''}
      <div class="prod-card" onclick="openProdView('${x.sellerType}','${e(String(x.id))}')">
        <div class="prod-img" style="background-image:url('${x.img}')"></div>
        <div class="prod-body">
          <div class="prod-name">${e(x.name)}</div>
          <div class="prod-price">${e(x.price)}</div>
          <div class="prod-seller">${e(x.seller)}</div>
          ${tags.length?`<div class="prod-tags">${tags.join('')}</div>`:''}
        </div>
      </div>
    </div>
  `;
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
  const msg=encodeURIComponent(`Hola, vi tu ${noun} "${x.name}" en MiCampeche y me interesa.`);
  let cta='';
  if(intl&&methods.length){
    if(methods.includes('whatsapp'))cta+=`<a class="submit-btn" style="text-decoration:none;text-align:center" href="https://wa.me/${intl}?text=${msg}" target="_blank" rel="noopener">Contactar por WhatsApp</a>`;
    if(methods.includes('llamada'))cta+=`<a class="submit-btn" style="text-decoration:none;text-align:center;background:var(--paper2);color:var(--ink)" href="tel:+${intl}">Llamar</a>`;
    if(methods.includes('sms'))cta+=`<a class="submit-btn" style="text-decoration:none;text-align:center;background:var(--paper2);color:var(--ink)" href="sms:+${intl}">Enviar mensaje</a>`;
  }else{
    cta=`<div class="field-note">Este vendedor no dejó datos de contacto.</div>`;
  }
  document.getElementById('modal-title').textContent=x.name;
  document.getElementById('modal-body').innerHTML=`
    ${x.img?`<div class="pv-hero" style="background-image:url('${e(x.img)}')"></div>`:''}
    <div style="font-size:20px;font-weight:800;color:var(--palm)">${e(x.price||'')}</div>
    <div style="font-size:13px;color:var(--ink3)">${e(x.seller)}</div>
    ${x.desc?`<div style="font-size:14px;line-height:1.55;white-space:pre-wrap">${e(x.desc)}</div>`:''}
    ${rows.length?`<div class="pv-rows">${rows.map(r=>`<div class="pv-row"><span>${e(r[0])}</span><b>${e(r[1])}</b></div>`).join('')}</div>`:''}
    ${cta}
  `;
  document.getElementById('modal-bg').classList.add('on');
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
  wireAdminRemove(el);
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
  wireAdminRemove(el);
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
    <div class="of-card${soldOut?' sold-out':''}" ${admRm('ofertas',o.id,o.name)}>
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
  wireAdminRemove(el);
}
async function toggleClaim(id){
  const acct=await MC.currentAccount();
  if(!runWriteGate(acct,null))return;
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
  const pin=onboardCard('empleos','empleos','¿Ofreces trabajo? Publícalo aquí',
    'Llega a vecinos que buscan empleo en Campeche.',
    ['Toca el botón <b>+</b> abajo a la derecha.',
     'Escribe el puesto, el negocio y el pago.',
     'Agrega el horario y los requisitos.',
     'Envíalo: quien busca trabajo te contacta directo.'],
    'Publicar una vacante',"openPost('empleos')");
  el.innerHTML=pin+EMPLEOS.map(x=>`
    <div class="job-card" ${admRm('empleos',x.id,x.title)}>
      <div class="job-top"><div class="job-title">${e(x.title)}</div><div class="job-pay">${e(x.pay)}</div></div>
      ${x.co?`<div class="job-co">${e(x.co)}</div>`:''}
      ${x.tags.length?`<div class="job-tags">${x.tags.map(t=>`<span class="job-tag">${e(t)}</span>`).join('')}</div>`:''}
      ${contactCtaRow(x,`Hola, vi la vacante "${x.title}" en MiCampeche y me interesa.`)}
    </div>
  `).join('');
  wireAdminRemove(el);
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
  const pin=onboardCard('perdidos','perdidos','¿Perdiste o encontraste algo?',
    'Una mascota, unas llaves, una cartera… tus vecinos te ayudan.',
    ['Toca el botón <b>+</b> abajo a la derecha.',
     'Elige <b>Perdido</b> o <b>Encontrado</b>.',
     'Describe qué es y en qué zona, con una foto si puedes.',
     'Envíalo: aparece aquí para que la ciudad esté atenta.'],
    'Reportar perdido o encontrado',"openPost('perdidos')");
  if(!list.length){el.innerHTML=pin+emptyState('perdidos','Nada por aquí todavía','No hay reportes en esta categoría por ahora.');return;}
  el.innerHTML=pin+list.map(x=>`
    <div class="pf-card" ${admRm('perdidos',x.id,x.name)}>
      <div class="pf-img" style="${x.img?`background-image:url('${x.img}')`:''}">${!x.img?svgIco('pin'):''}</div>
      <div class="pf-body">
        <span class="pf-tag ${x.tag}">${x.tag==='perdido'?'Perdido':'Encontrado'}</span>
        <div class="pf-name">${e(x.name)}</div>
        <div class="pf-desc">${e(x.desc)}</div>
        <div class="pf-loc">${svgIco('pin')} ${e(x.loc)}</div>
        ${contactCtaRow(x,`Hola, vi tu reporte "${x.name}" en MiCampeche.`)}
      </div>
    </div>
  `).join('');
  wireAdminRemove(el);
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
const resolvedByMe={};
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
  const pin=onboardCard('reportes','reportar','Reporta un problema de tu calle',
    'Bache, fuga de agua, alumbrado, árbol caído, basura acumulada…',
    ['Toca el botón <b>+</b> abajo a la derecha.',
     'Elige el tipo de problema y dónde está.',
     'Agrega una foto para que se entienda mejor.',
     'Envíalo: otros vecinos lo confirman para darle peso.'],
    'Reportar un problema',"openPost('reportar')");
  if(!list.length){el.innerHTML=pin+emptyState('reportar','Nada por aquí todavía','No hay reportes en esta categoría por ahora.');return;}
  el.innerHTML=pin+list.map(x=>{
    const isResolved=x.status==='resuelto';
    const iConfirmed=!!confirmedByMe[x.id];
    const iVotedResolved=!!resolvedByMe[x.id];
    return `
    <div class="rep-card" ${admRm('reportes',x.id,x.title)}>
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
function renderAvisos(){
  const el=document.getElementById('av-list');
  const pin=onboardCard('avisos','message','Avísale a tu colonia',
    'Se busca a un familiar, junta vecinal, cuidado con un perro suelto…',
    ['Toca el botón <b>+</b> abajo a la derecha.',
     'Elige el tipo de aviso y escribe tu mensaje.',
     'Deja un número de contacto.',
     'Envíalo: un aviso por persona al día, revisado antes de publicarse.'],
    'Publicar un aviso',"openPost('avisos')");
  if(!AVISOS.length){el.innerHTML=pin+emptyState('reportar','Nada por aquí todavía','Sé el primero en publicar un aviso para tus vecinos.');return;}
  el.innerHTML=pin+AVISOS.map(a=>`
    <div class="av-card" ${admRm('avisos',a.id,a.title)}>
      <div class="av-top"><span class="av-cat">${e(a.cat)}</span><span class="av-time">${a.time}</span></div>
      <div class="av-title">${e(a.title)}</div>
      <div class="av-desc">${e(a.desc)}</div>
      ${contactCtaRow(a,`Hola, vi tu aviso "${a.title}" en MiCampeche.`)}
      <div class="av-foot">
        <span class="av-author">${e(a.author)}</span>
      </div>
    </div>
  `).join('');
  wireAdminRemove(el);
}
function renderAlertas(){
  const el=document.getElementById('alert-list');
  const pin=onboardCard('alertas','alertas','Qué son las Alertas',
    'Aquí verás <b>alertas oficiales</b> para toda la ciudad — cortes de agua, clima fuerte, cierres de calles, emergencias. Las publica MiCampeche; tú solo revisa aquí cuando algo esté pasando. ¿Un problema de tu calle (bache, fuga, alumbrado)? Eso va en <b>Reportes</b>.',
    null,
    'Ir a Reportes',"setReportarMode('reportes')");
  el.innerHTML=pin+ALERTAS.map(x=>{
    // One-line teaser: first paragraph only, hard-capped so the row stays
    // one line even before CSS truncation kicks in. Full text lives in the
    // detail modal.
    const firstLine=x.desc.split('\n')[0]||'';
    const preview=firstLine.slice(0,100);
    const truncated=x.desc.length>preview.length;
    return `
    <div class="alert-card ${x.cls}" role="button" tabindex="0" onclick="openAlertaDetail('${x.id}')">
      <div class="alert-top"><span class="alert-type">${x.cls==='resolved'?'✓ Resuelto — ':''}${e(x.type)}</span><span class="alert-time">${x.time}</span></div>
      ${x.title?`<div class="alert-headline">${e(x.title)}</div>`:''}
      ${x.zone?`<div class="alert-zone">${e(x.zone)}</div>`:''}
      ${preview?`<div class="alert-preview">${e(preview)}${truncated?'…':''}</div>`:''}
    </div>
  `}).join('');
}
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
    {k:'cat',lbl:'Categoría',type:'select',opts:['Mercado','Cultura','Deporte','Comunidad','Música','Otro']},
    {k:'date',lbl:'Fecha',type:'date'},
    {k:'time',lbl:'Hora',type:'time'},
    {k:'loc',lbl:'Lugar',type:'text',ph:'Dirección o punto de referencia'},
    {k:'price',lbl:'Precio de entrada',type:'text',ph:'Ej. Gratis, $150, $150–$300',note:'Opcional — déjalo en blanco si no aplica.'},
    {k:'website',lbl:'Sitio web o página del evento',type:'url',ph:'https://...',note:'Opcional — página oficial, boletos o red social del evento.'},
    {k:'phone',lbl:'Teléfono de contacto',type:'tel',ph:'981 000 0000',note:'Opcional — se muestra como botón de llamada y WhatsApp.'},
    {k:'photo',lbl:'Foto o cartel del evento',type:'imgupload'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Cuéntanos más...'}
  ]},
  producto:{title:'Publicar un producto',fields:[
    {k:'name',lbl:'¿Qué vendes?',type:'text',ph:'Ej. Pastel de tres leches'},
    {k:'cat',lbl:'Categoría',type:'select',opts:['Comida','Ropa','Hogar','Belleza','Otro']},
    {k:'item_condition',lbl:'Estado',type:'seg',opts:[['nuevo','Nuevo'],['usado','Usado']]},
    {k:'price',lbl:'Precio',type:'text',ph:'$'},
    {k:'availability',lbl:'Disponibilidad',type:'seg',opts:[['ahora','Disponible ahora'],['pedido','Sobre pedido']]},
    {k:'lead_time',lbl:'¿Con cuánta anticipación?',type:'text',ph:'Ej. 2 días',showIf:{field:'availability',val:'pedido'}},
    {k:'fulfillment',lbl:'¿Cómo lo entregas?',type:'seg',opts:[['recoger','Recoger'],['entrega','Entrega a domicilio'],['ambos','Ambos']]},
    {k:'contact_methods',lbl:'¿Cómo quieres que te contacten?',type:'multi',opts:[['whatsapp','WhatsApp'],['llamada','Llamada'],['sms','Mensaje de texto']],def:['whatsapp','llamada','sms']},
    {k:'photo',lbl:'Foto del producto',type:'imgupload'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Detalles, tamaño, disponibilidad...'}
  ]},
  clasificado:{title:'Publicar en Clasificados',note:'Un artículo por persona. Todas las publicaciones se revisan antes de mostrarse a los demás.',fields:[
    {k:'name',lbl:'¿Qué vendes?',type:'text',ph:'Ej. Bicicleta usada'},
    {k:'cat',lbl:'Categoría',type:'select',opts:['Comida','Ropa','Hogar','Belleza','Otro']},
    {k:'item_condition',lbl:'Estado',type:'seg',opts:[['nuevo','Nuevo'],['usado','Usado']]},
    {k:'price',lbl:'Precio',type:'text',ph:'$'},
    {k:'fulfillment',lbl:'¿Cómo lo entregas?',type:'seg',opts:[['recoger','Recoger'],['entrega','Entrega'],['ambos','Ambos']]},
    {k:'zone',lbl:'Zona',type:'text',ph:'Colonia o punto de referencia'},
    {k:'contact_phone',lbl:'Tu número de contacto (WhatsApp)',type:'tel',ph:'981 000 0000',note:'Los interesados te contactarán a este número por los medios que elijas.'},
    {k:'contact_methods',lbl:'¿Cómo quieres que te contacten?',type:'multi',opts:[['whatsapp','WhatsApp'],['llamada','Llamada'],['sms','Mensaje de texto']],def:['whatsapp','llamada','sms']},
    {k:'photo',lbl:'Foto del artículo',type:'imgupload'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Detalles, estado, disponibilidad...'}
  ]},
  perdidos:{title:'Reportar perdido o encontrado',fields:[
    {k:'tag',lbl:'Tipo de reporte',type:'seg',opts:[['perdido','Perdido'],['encontrado','Encontrado']]},
    {k:'name',lbl:'¿Qué se perdió / encontró?',type:'text',ph:'Ej. Gato atigrado'},
    {k:'loc',lbl:'Zona',type:'text',ph:'Colonia o punto de referencia'},
    {k:'photo',lbl:'Foto',type:'imgupload'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Detalles que ayuden a identificarlo...'},
    {k:'want_contact',lbl:'¿Dejar un número para que te contacten?',type:'seg',opts:[['si','Sí, que me contacten'],['no','No hace falta']]},
    {k:'contact_phone',lbl:'Tu número de contacto (WhatsApp)',type:'tel',ph:'981 000 0000',showIf:{field:'want_contact',val:'si'},note:'Quien lo vea te contactará por los medios que elijas.'},
    {k:'contact_methods',lbl:'¿Cómo quieres que te contacten?',type:'multi',opts:[['whatsapp','WhatsApp'],['llamada','Llamada'],['sms','Mensaje de texto']],def:['whatsapp','llamada','sms'],showIf:{field:'want_contact',val:'si'}}
  ]},
  empleos:{title:'Publicar una vacante',fields:[
    {k:'title',lbl:'Puesto',type:'text',ph:'Ej. Mesero(a) con experiencia'},
    {k:'co',lbl:'Negocio (opcional)',type:'text',ph:'Déjalo en blanco para no dar el nombre'},
    {k:'pay',lbl:'Pago',type:'text',ph:'Ej. $350/día + propinas'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Requisitos, horario...'},
    {k:'want_contact',lbl:'¿Dejar un número para que te contacten?',type:'seg',opts:[['si','Sí, que me contacten'],['no','En la descripción']]},
    {k:'contact_phone',lbl:'Número de contacto (WhatsApp)',type:'tel',ph:'981 000 0000',showIf:{field:'want_contact',val:'si'},note:'Quien busca trabajo te contactará por los medios que elijas.'},
    {k:'contact_methods',lbl:'¿Cómo quieres que te contacten?',type:'multi',opts:[['whatsapp','WhatsApp'],['llamada','Llamada'],['sms','Mensaje de texto']],def:['whatsapp','llamada','sms'],showIf:{field:'want_contact',val:'si'}}
  ]},
  reportar:{title:'Reportar un problema',fields:[
    {k:'cat',lbl:'Tipo de problema',type:'select',opts:['Bache','Semáforo','Árbol caído','Alumbrado','Fuga de agua','Basura acumulada','Otro']},
    {k:'title',lbl:'Título breve',type:'text',ph:'Ej. Bache grande sobre Calle 10'},
    {k:'loc',lbl:'Ubicación',type:'text',ph:'Calle, colonia o punto de referencia'},
    {k:'photo',lbl:'Foto del problema',type:'imgupload'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Cuéntanos más sobre el problema...'}
  ]},
  avisos:{title:'Publicar un aviso',note:'Un aviso por persona al día. Todas las publicaciones se revisan antes de mostrarse a los demás.',fields:[
    {k:'cat',lbl:'Tipo de aviso',type:'select',opts:['Comunidad','Seguridad','Otro']},
    {k:'title',lbl:'Título breve',type:'text',ph:'Ej. Buscamos a un familiar'},
    {k:'desc',lbl:'Mensaje',type:'textarea',ph:'Cuenta los detalles a tus vecinos...'},
    {k:'anon',lbl:'¿Cómo lo firmas?',type:'seg',opts:[['no','Con mi nombre'],['si','Anónimo']]},
    {k:'want_contact',lbl:'¿Dejar un número para que te contacten?',type:'seg',opts:[['no','No hace falta'],['si','Sí, que me contacten']]},
    {k:'contact_phone',lbl:'Tu número de contacto (WhatsApp)',type:'tel',ph:'981 000 0000',showIf:{field:'want_contact',val:'si'},note:'Los vecinos te contactarán por los medios que elijas.'},
    {k:'contact_methods',lbl:'¿Cómo quieres que te contacten?',type:'multi',opts:[['whatsapp','WhatsApp'],['llamada','Llamada'],['sms','Mensaje de texto']],def:['whatsapp','llamada','sms'],showIf:{field:'want_contact',val:'si'}}
  ]},
  oferta:{title:'Publicar una Oferta',note:'$99 MXN por espacio · 1 espacio disponible por día · reserva hasta con 2 semanas de anticipación. Cuentas Negocio (gratis) pueden tener 1 espacio reservado a la vez; cuentas Premium hasta 3 a la vez.',fields:[
    {k:'item',lbl:'¿Qué vas a ofrecer?',type:'text',ph:'Ej. Pastel de tres leches entero'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'Cuéntale a la gente qué incluye esta oferta...'},
    {k:'photo',lbl:'Foto del producto o servicio',type:'imgupload'},
    {k:'priceWas',lbl:'Precio normal',type:'text',ph:'$'},
    {k:'priceNow',lbl:'Precio con descuento',type:'text',ph:'$'},
    {k:'qty',lbl:'Cantidad disponible',type:'number',ph:'Ej. 10'},
    {k:'terms',lbl:'Condiciones (opcional)',type:'textarea',ph:'Ej. Válido de lunes a viernes, no aplica con otras promociones...'},
    {k:'slot',lbl:'Elige el día',type:'calendar'}
  ]},
  negocio_verificar:{title:'Verifica tu negocio',note:'Esta información se guarda en tu cuenta — no necesitas volver a escribirla en cada publicación.',fields:[
    {k:'name',lbl:'Nombre del negocio',type:'text',ph:'Ej. Repostería Tsuk Tun'},
    {k:'desc',lbl:'Descripción',type:'textarea',ph:'¿Qué venden o qué servicio ofrecen?'},
    {k:'photo',lbl:'Logo o foto del negocio',type:'imgupload'},
    {k:'address',lbl:'Dirección',type:'text',ph:'Calle, número, colonia'},
    {k:'phone',lbl:'Teléfono del negocio',type:'tel',ph:'981 000 0000'},
    {k:'payment_methods',lbl:'Métodos de pago que aceptas',type:'multi',opts:[['efectivo','Efectivo'],['transferencia','Transferencia'],['terminal','Terminal']],def:[]},
    {k:'delivers',lbl:'¿Entregas a domicilio?',type:'seg',opts:[['no','No'],['si','Sí']]},
    {k:'delivery_info',lbl:'Zonas y costo de entrega',type:'text',ph:'Ej. Centro y San Román · $30, gratis desde $300',showIf:{field:'delivers',val:'si'}},
    {k:'pickup_address',lbl:'Dirección para recoger',type:'text',ph:'Si es distinta a la dirección de tu negocio'},
    {k:'cat',lbl:'Categoría',type:'select',opts:['Comida','Ropa','Hogar','Belleza','Servicios','Otro']},
    {k:'hours',lbl:'Horario de atención',type:'text',ph:'Ej. Lun-Sáb 9am-8pm'},
    {k:'social',lbl:'Red social o sitio web',type:'text',ph:'Ej. instagram.com/tunegocio'},
    {k:'rfc',lbl:'RFC',type:'text',ph:''}
  ]}
};

let selectedSlotDate=null; // set by pickSlotDay(), read by submitPost() for kind==='oferta'
let editingPost=null; // {table,id} while the post form is in self-edit mode; set by openMyPostEdit() AFTER openPost() renders, read by submitPost()

async function openPost(kind){
  const form=POST_FORMS[kind];if(!form)return;
  editingPost=null; // any fresh form start clears a stale edit target; openMyPostEdit re-sets it after this returns
  // A real account is required for ANY write, and its phone must already
  // be verified — both enforced at the database layer too (is_verified_writer
  // RLS), not just here for UX. Comes first, before the business check
  // below, since verifying a business is itself a gated write.
  const acct=await MC.currentAccount();
  if(!runWriteGate(acct,kind))return;
  // Selling in Tienda or posting an Oferta requires a verified AND
  // admin-approved business — verification alone used to be enough
  // (instant self-serve), but now goes through the same moderation queue
  // as everything else, same as any other submission.
  if(kind==='producto'||kind==='oferta'){
    if(!acct.business){openBusinessPrompt(kind);return;}
    if(acct.business.status!=='published'){openBusinessStatusPrompt(acct.business);return;}
  }
  // Refresh which days are actually booked right before showing the
  // calendar — bookedDates from initial load could already be stale by
  // the time someone opens this form.
  if(kind==='oferta')bookedDates=await MC.fetchBookedDates();
  document.getElementById('modal-title').textContent=form.title;
  let h='';
  form.fields.forEach(f=>{
    if(f.type==='note'){h+=`<div class="field-note" id="row-${f.k}">${f.text||''}</div>`;return;}
    h+=`<div class="form-row" id="row-${f.k}"><label class="fl">${f.lbl}</label>`;
    if(f.type==='textarea')h+=`<textarea class="ft" id="pf-${f.k}" placeholder="${f.ph||''}"></textarea>`;
    else if(f.type==='select')h+=`<select class="fs" id="pf-${f.k}"><option value="">Selecciona...</option>${f.opts.map(o=>`<option>${o}</option>`).join('')}</select>`;
    else if(f.type==='seg')h+=`<div class="seg" id="pf-${f.k}">${f.opts.map((o,i)=>`<div class="seg-btn${i===0?' on':''}" data-v="${o[0]}" onclick="segPick(this)">${o[1]}</div>`).join('')}</div>`;
    else if(f.type==='multi')h+=`<div class="fmulti" id="pf-${f.k}">${f.opts.map(o=>`<button type="button" class="mchip${(f.def||[]).includes(o[0])?' on':''}" data-v="${o[0]}" onclick="multiPick(this)">${o[1]}</button>`).join('')}</div>`;
    else if(f.type==='calendar')h+=`<div id="pf-${f.k}">${slotCalendarHtml()}</div>`;
    else if(f.type==='imgupload')h+=`<div id="pf-${f.k}-wrap"></div>`;
    else h+=`<input class="fi" id="pf-${f.k}" type="${f.type}" placeholder="${f.ph||''}">`;
    if(f.note)h+=`<div class="field-note">${f.note}</div>`;
    h+=`</div>`;
  });
  h+=`<div class="submit-note">${svgIco('alertas')}${form.note||'Todas las publicaciones se revisan antes de mostrarse a los demás, para mantener MiCampeche libre de spam.'}</div>`;
  h+=`<button class="submit-btn" id="post-submit-btn" onclick="submitPost('${kind}')"${kind==='oferta'?' disabled style="opacity:.4;cursor:default"':''}>${kind==='oferta'?'Selecciona un día para continuar':'Enviar para revisión'}</button>`;
  document.getElementById('modal-body').innerHTML=h;
  document.getElementById('modal-bg').classList.add('on');
  selectedSlotDate=null;
  uploadedImageUrls={};
  form.fields.forEach(f=>{if(f.type==='imgupload')renderPhotoUploadButton(f.k);});
  applyConditionalRows(form);
  if(kind==='producto'&&acct.business){
    // A business can only offer fulfillment methods it actually supports —
    // disable the delivery options if the business profile says it doesn't
    // deliver, and point back there to change it.
    if(!acct.business.delivers){
      document.querySelectorAll('#pf-fulfillment .seg-btn').forEach(b=>{
        if(b.dataset.v==='entrega'||b.dataset.v==='ambos')b.classList.add('seg-btn-off');
      });
      const fr=document.getElementById('row-fulfillment');
      if(fr)fr.insertAdjacentHTML('beforeend','<div class="field-note">Activa la entrega a domicilio en el perfil de tu negocio para ofrecerla aquí.</div>');
    }
    // Buyers reach a business on its business line, not a per-post number.
    const cr=document.getElementById('row-contact_methods');
    if(cr&&acct.business.phone)cr.insertAdjacentHTML('beforeend',`<div class="field-note">Los clientes te contactarán al número de tu negocio: ${e(acct.business.phone)}.</div>`);
  }
  if(kind==='clasificado'||kind==='avisos'||kind==='perdidos'||kind==='empleos'){
    // Prefill the contact number from the account so a signed-in poster
    // doesn't retype it (they can still overwrite it for this one post).
    // For avisos/perdidos/empleos the "¿dejar un número?" toggle still
    // decides whether it's actually attached; this only pre-fills the field.
    if(acct.signedIn&&acct.phone){
      const cp=document.getElementById('pf-contact_phone');
      if(cp&&!cp.value)cp.value=acct.phone;
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
  if(el.classList.contains('seg-btn-off'))return;
  el.parentElement.querySelectorAll('.seg-btn').forEach(b=>b.classList.remove('on'));
  el.classList.add('on');
}
/* Multi-select chips (payment_methods, contact_methods) — just a visual
   toggle; submitPost() reads the .on set into an array. */
function multiPick(el){el.classList.toggle('on');}

/* Rows flagged with showIf:{field,val} appear only while the controlling
   seg holds that value, and re-sync whenever it changes. Safe to call for
   any form — a no-op when nothing is conditional. */
function applyConditionalRows(form){
  const conds=(form.fields||[]).filter(f=>f.showIf);
  if(!conds.length)return;
  const sync=()=>conds.forEach(f=>{
    const on=document.querySelector(`#pf-${f.showIf.field} .seg-btn.on`);
    const row=document.getElementById('row-'+f.k);
    if(row)row.style.display=(on&&on.dataset.v===f.showIf.val)?'':'none';
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
   Empleos / Perdidos cards. Returns '' when there's no usable number or no
   selected method, so callers can fall back to the legacy contact_info. */
function contactCtaButtons(phone,methods,messageText){
  const num=digitsOnly(phone);
  const intl=num?(num.length===10?'52'+num:num):'';
  const ms=Array.isArray(methods)?methods:[];
  if(!intl||!ms.length)return '';
  const msg=encodeURIComponent(messageText||'Hola, te contacto desde MiCampeche.');
  const secondary='style="background:var(--paper2);color:var(--ink)"';
  let h='';
  if(ms.includes('whatsapp'))h+=`<a class="av-contact-btn" href="https://wa.me/${intl}?text=${msg}" target="_blank" rel="noopener">${svgIco('message')}WhatsApp</a>`;
  if(ms.includes('llamada'))h+=`<a class="av-contact-btn" ${secondary} href="tel:+${intl}">${svgIco('phone')}Llamar</a>`;
  if(ms.includes('sms'))h+=`<a class="av-contact-btn" ${secondary} href="sms:+${intl}">${svgIco('message')}SMS</a>`;
  return h;
}
/* Full contact block for a card: the method buttons when the poster set
   them, otherwise the legacy single "Llamar" button for pre-feature posts
   that only have a plain contact_info string. '' when neither exists. */
function contactCtaRow(x,messageText){
  const btns=contactCtaButtons(x.contactPhone,x.contactMethods,messageText);
  if(btns)return `<div class="contact-cta-row">${btns}</div>`;
  if(x.contact)return `<div class="contact-cta-row"><a class="av-contact-btn" href="${telHref(x.contact)}">${svgIco('phone')}Llamar</a></div>`;
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
function mcModalPushView(key){mcModalStack.push({key,restore:mcModalSnap()});}
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
let accountMode='signup';
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
  if(!acct.signedIn){accountMode='signup';renderAccountForm();return;}

  // Render the account view now; the rejected-submissions list (a query
  // per content table) and, for admins, the Pendiente count load after
  // and re-render when they land, rather than holding the view hostage.
  renderAccountSignedIn(acct);
  Promise.all([
    MC.fetchMyRejections(),
    acct.isAdmin?MC.fetchPendingCount():Promise.resolve(undefined)
  ]).then(([rej,pendingCount])=>{
    if(myTurn!==accountViewSeq)return;
    if(!document.getElementById('modal-bg').classList.contains('on'))return;
    if(document.getElementById('modal-title').textContent!=='Tu cuenta')return; // user navigated on
    acct.rejections=rej;
    acct.pendingCount=pendingCount;
    renderAccountSignedIn(acct);
  });
}
function renderAccountSignedIn(acct){
  lastFetchedAccount=acct;
  const biz=acct.business;
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
    ${biz?`
      <button class="menu-item" onclick="openBusinessProfile()" style="border:1.5px solid var(--line2);margin-bottom:4px">
        ${biz.business_image_url
          ?`<img src="${e(biz.business_image_url)}" style="width:34px;height:34px;object-fit:cover;border-radius:9px;flex-shrink:0">`
          :`<span class="menu-item-ico"><svg class="ico" viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"/></svg></span>`}
        <span class="menu-item-txt">
          <span class="menu-item-lbl">${e(biz.business_name)}</span>
          <span class="menu-item-sub">${biz.status==='pending'?'En revisión':biz.status==='rejected'?'No aprobado':biz.is_premium?'Negocio Premium':'Negocio verificado'}${biz.category?' · '+e(biz.category):''}</span>
        </span>
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
    ${acct.isAdmin?`<button class="menu-item" onclick="openPending()" style="border:1.5px solid var(--line2);margin-bottom:4px">
      <span class="menu-item-ico"><svg class="ico" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg></span>
      <span class="menu-item-txt">
        <span class="menu-item-lbl">Pendiente</span>
        <span class="menu-item-sub"${acct.pendingCount===0?' style="color:var(--palm)"':''}>${
          acct.pendingCount===undefined?'Revisar la cola de aprobaciones'
          :acct.pendingCount===0?'Todo al día ✓'
          :acct.pendingCount+(acct.pendingCount===1?' cosa por revisar':' cosas por revisar')
        }</span>
      </span>
      ${acct.pendingCount>0?`<span class="menu-badge on">${acct.pendingCount>99?'99+':acct.pendingCount}</span>`:''}
      <svg class="ico menu-item-arr" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
    </button>`:''}
    <button class="submit-btn" style="background:var(--paper2);color:var(--ink)" onclick="doSignOut()">Cerrar sesión</button>
  `;
  document.getElementById('modal-bg').classList.add('on');
}

/* Business profile — a sub-view of "Tu cuenta". One tap from the account
   view opens the full business record; the edit action here reuses the
   verification form and sends the changes back to review. Part of the
   modal view stack, so ✕ / back / hardware-back returns to the account
   view, and finishing an edit returns here (now showing "En revisión"). */
async function openBusinessProfile(){
  if(document.getElementById('modal-bg').classList.contains('on'))mcModalPushView('account');
  document.getElementById('modal-title').textContent='Mi negocio';
  document.getElementById('modal-body').innerHTML='<div style="padding:44px 0;text-align:center;color:var(--ink3);font-size:13px">Cargando…</div>';
  document.getElementById('modal-bg').classList.add('on');
  const biz=await MC.myBusiness();
  if(!biz){mcModalBack();return;}
  renderBusinessProfile(biz);
}
function renderBusinessProfile(biz){
  if(!biz)return;
  const isAdmin=!!(lastFetchedAccount&&lastFetchedAccount.isAdmin);
  const statusLbl=biz.status==='pending'?'En revisión':biz.status==='rejected'?'No aprobado':biz.is_premium?'Negocio Premium':'Negocio verificado';
  const statusColor=biz.status==='published'?'var(--gulf)':'var(--wall-dk)';
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
  `;
  document.getElementById('modal-bg').classList.add('on');
}
async function refreshBusinessProfile(){
  renderBusinessProfile(await MC.myBusiness());
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
  moderationQueue=moderationQueue.filter(i=>!(i.kind==='password'&&i.id===id));
  mcModalBack('pendingList');renderPendingQueue();
  toast('Aprobado — código: '+code+' (compártelo por WhatsApp, válido 30 min)');
  refreshPendingBadge();
}
async function rejectPasswordResetRequest(id){
  const {error}=await MC.rejectPasswordReset(id,'No se pudo verificar la identidad');
  if(error){toast(pgErrorToast(error,'No se pudo rechazar.'));return;}
  moderationQueue=moderationQueue.filter(i=>!(i.kind==='password'&&i.id===id));
  mcModalBack('pendingList');renderPendingQueue();
  toast('Rechazado');
  refreshPendingBadge();
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
  moderationQueue=moderationQueue.filter(i=>!(i.kind==='phone'&&i.id===profileId));
  mcModalBack('pendingList');renderPendingQueue();
  toast('Teléfono verificado ✓');
  refreshPendingBadge();
}
async function rejectPhoneVerification(profileId){
  const {error}=await MC.rejectPhoneVerification(profileId,'No se pudo confirmar el número por WhatsApp');
  if(error){toast(pgErrorToast(error,'No se pudo rechazar.'));return;}
  moderationQueue=moderationQueue.filter(i=>!(i.kind==='phone'&&i.id===profileId));
  mcModalBack('pendingList');renderPendingQueue();
  toast('Rechazado');
  refreshPendingBadge();
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
      const next=pendingPostAfterAuth;
      pendingPostAfterAuth=null;
      if(next){await openPost(next);} else {closeModal();}
    });
    return;
  }
  toast('Sesión iniciada ✓');
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
async function openPending(){
  // Opened from the "Tu cuenta" view — remember it so ✕ / back returns
  // there, not all the way to the home screen.
  if(document.getElementById('modal-bg').classList.contains('on'))mcModalPushView('account');
  document.getElementById('modal-title').textContent='Pendiente';
  document.getElementById('modal-body').innerHTML=`<div style="text-align:center;padding:30px 0;color:var(--ink3)">Cargando…</div>`;
  document.getElementById('modal-bg').classList.add('on');
  const [content,phone,password]=await Promise.all([
    MC.fetchPendingQueue(),
    MC.fetchPendingPhoneVerifications(),
    MC.fetchPasswordResetRequests()
  ]);
  moderationQueue=[
    ...content.map(c=>({kind:'content',...c})),
    ...phone.map(p=>({kind:'phone',id:p.id,label:'Verificación de teléfono',title:p.display_name||'Vecino',submittedBy:p.phone||'—',createdAt:p.created_at,raw:p})),
    ...password.map(r=>({kind:'password',id:r.id,label:'Restablecer contraseña',title:r.claimedEmail,submittedBy:r.matchedName?('Cuenta: '+r.matchedName):'⚠️ Sin cuenta encontrada',createdAt:r.requestedAt,raw:r}))
  ].sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt));
  renderPendingQueue();
}
function renderPendingQueue(){
  document.getElementById('modal-title').textContent=`Pendiente (${moderationQueue.length})`;
  if(!moderationQueue.length){
    document.getElementById('modal-body').innerHTML=`<div style="text-align:center;padding:30px 10px;color:var(--ink3)">${svgIco('checkBadge')}<div style="margin-top:8px">No hay nada pendiente.</div></div>`;
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
  document.getElementById('modal-body').innerHTML=h;
}

/* ══════════════ RESIDENT: "Mis publicaciones" ══════════════
   The resident-facing sibling of the admin Pendiente view — same
   modal-push-view pattern, same "one unified list across tables" shape,
   but scoped to the current user's own rows (any status) and tappable
   straight into the edit form. Open to every signed-in account. */
let myPostsList=[];
async function openMyPosts(){
  if(document.getElementById('modal-bg').classList.contains('on'))mcModalPushView('account');
  document.getElementById('modal-title').textContent='Mis publicaciones';
  document.getElementById('modal-body').innerHTML=`<div style="text-align:center;padding:30px 0;color:var(--ink3)">Cargando…</div>`;
  document.getElementById('modal-bg').classList.add('on');
  myPostsList=await MC.fetchMyPosts();
  renderMyPosts();
}
async function refreshMyPosts(){
  myPostsList=await MC.fetchMyPosts();
  renderMyPosts();
}
/* Status pill — reuses the three labels + colours already used for
   business status (renderBusinessProfile) and the account view, plus
   --signal for rejected since that row needs action. */
function postStatusBadge(status){
  const map={
    published:['Publicado','var(--gulf)'],
    pending:['En revisión','var(--wall-dk)'],
    rejected:['No aprobado','var(--signal)']
  };
  const [lbl,color]=map[status]||map.pending;
  return `<span style="font-size:10px;font-weight:700;color:${color};text-transform:uppercase;letter-spacing:.04em;flex-shrink:0">${lbl}</span>`;
}
function renderMyPosts(){
  document.getElementById('modal-title').textContent=`Mis publicaciones (${myPostsList.length})`;
  if(!myPostsList.length){
    document.getElementById('modal-body').innerHTML=`<div style="text-align:center;padding:30px 10px;color:var(--ink3)">${svgIco('checkBadge')}<div style="margin-top:8px">Aún no has publicado nada.</div></div>`;
    return;
  }
  document.getElementById('modal-body').innerHTML=myPostsList.map(p=>{
    const editable=!!MY_POST_EDIT[p.table];
    return `<div style="border:1.5px solid var(--line2);border-radius:var(--rs);padding:12px 14px;margin-bottom:10px${editable?';cursor:pointer':''}"${editable?` onclick="openMyPostEdit('${p.table}','${e(String(p.id))}')"`:''}>
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px">
        <span style="font-size:11px;font-weight:700;color:var(--gulf);text-transform:uppercase;letter-spacing:.04em">${e(p.label)}</span>
        ${postStatusBadge(p.status)}
      </div>
      <div style="font-weight:700;font-size:14.5px;margin-top:3px">${e(p.title)}</div>
      <div style="color:var(--ink3);font-size:12px;margin-top:2px">${relTimeEs(p.createdAt)}${editable?' · toca para editar':''}</div>
      ${(p.status==='rejected'&&p.rejectionReason)?`<div style="color:var(--signal);font-size:12.5px;margin-top:6px">${e(p.rejectionReason)}</div>`:''}
    </div>`;
  }).join('');
}
/* Per-table map from a stored row back to POST_FORMS field keys. Every
   value bucket maps to a field kind the form renderer produced:
   input → <input>/<textarea>/<select> (.value), seg → segPick a button,
   multi → toggle mchips, img → prefill uploadedImageUrls + preview. */
const MY_POST_EDIT={
  avisos:{form:'avisos',fill:r=>({
    input:{title:r.title,desc:r.description,cat:r.category,contact_phone:r.contact_phone},
    seg:{anon:r.anonymous?'si':'no',want_contact:r.contact_phone?'si':'no'},
    multi:{contact_methods:r.contact_methods}
  })},
  empleos:{form:'empleos',fill:r=>({
    input:{title:r.title,co:r.company,pay:r.pay,desc:r.description,contact_phone:r.contact_phone},
    seg:{want_contact:r.contact_phone?'si':'no'},
    multi:{contact_methods:r.contact_methods}
  })},
  perdidos:{form:'perdidos',fill:r=>({
    input:{name:r.title,loc:r.location,desc:r.description,contact_phone:r.contact_phone},
    seg:{tag:r.report_type||'perdido',want_contact:r.contact_phone?'si':'no'},
    multi:{contact_methods:r.contact_methods},
    img:{photo:r.image_url}
  })},
  eventos:{form:'eventos',fill:r=>({
    input:{name:r.title,cat:r.category,date:r.event_date,time:r.event_time,loc:r.location,price:r.price_text,website:r.website,phone:r.contact_phone,desc:r.description},
    img:{photo:r.image_url}
  })},
  reportes:{form:'reportar',fill:r=>({
    input:{cat:r.category,title:r.title,loc:r.location_text,desc:r.description},
    img:{photo:r.image_url}
  })},
  productos:{form:'producto',fill:r=>({
    input:{name:r.title,cat:r.category,price:r.price_text||'',lead_time:r.lead_time,desc:r.description},
    seg:{item_condition:r.item_condition||'nuevo',availability:r.availability||'ahora',fulfillment:r.fulfillment||'recoger'},
    multi:{contact_methods:r.contact_methods},
    img:{photo:r.image_url}
  })},
  clasificados:{form:'clasificado',fill:r=>({
    input:{name:r.title,cat:r.category,price:r.price_text||'',zone:r.zone,desc:r.description,contact_phone:r.contact_phone},
    seg:{item_condition:r.item_condition||'nuevo',fulfillment:r.fulfillment||'recoger'},
    multi:{contact_methods:r.contact_methods},
    img:{photo:r.image_url}
  })}
};
function applyPostEditFill(fill){
  Object.entries(fill.input||{}).forEach(([k,v])=>{
    const el=document.getElementById('pf-'+k);
    if(el&&v!=null&&v!=='')el.value=v;
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

function openModerationDetail(table,id){
  const item=moderationQueue.find(i=>i.table===table&&i.id===id);
  if(!item)return;
  mcModalPushView('pendingList');
  document.getElementById('modal-title').textContent=item.label;
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--ink3);font-size:12px;margin-bottom:12px">Enviado por ${e(item.submittedBy)} · ${relTimeEs(item.createdAt)}</div>
    ${renderModerationDetailFields(table,item.raw)}
    ${table==='eventos'?`<div id="evt-dup-check" style="margin:14px 0"></div>`:''}
    <div style="display:flex;gap:8px;margin-top:16px">
      <button class="submit-btn" style="margin-top:0;flex:1" onclick="moderateItem('${table}','${id}','published')">Aprobar</button>
      <button class="submit-btn" style="margin-top:0;flex:1;background:var(--paper2);color:var(--ink)" onclick="openRejectReasonPrompt('${table}','${id}')">Rechazar</button>
    </div>
    <button class="menu-item" style="margin-top:10px;justify-content:center" onclick="mcModalBack('pendingList')">${svgIco('checkBadge')}<span class="menu-item-lbl">Volver a la lista</span></button>
  `;
  if(table==='eventos')fillEventDuplicateCheck(item.raw);
}

function openRejectReasonPrompt(table,id){
  mcModalPushView('itemDetail');
  document.getElementById('modal-title').textContent='Motivo del rechazo';
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--ink3);font-size:13px;margin-bottom:10px;line-height:1.5">Este mensaje se guarda junto con la publicación para que la persona que la envió sepa por qué no se publicó — lo verá en su cuenta.</div>
    <textarea class="ft" id="reject-reason-input" placeholder="Ej. La foto no es clara, o el precio no coincide con la descripción..."></textarea>
    <div style="display:flex;gap:8px;margin-top:14px">
      <button class="submit-btn" style="margin-top:0;flex:1;background:var(--paper2);color:var(--ink)" onclick="mcModalBack('itemDetail')">Cancelar</button>
      <button class="submit-btn" style="margin-top:0;flex:1" id="confirm-reject-btn" onclick="confirmReject('${table}','${id}')">Rechazar</button>
    </div>
  `;
}
async function confirmReject(table,id){
  const reason=(document.getElementById('reject-reason-input').value||'').trim();
  if(!reason){toast('Escribe un motivo breve antes de rechazar');return;}
  await moderateItem(table,id,'rejected',reason);
}

async function moderateItem(table,id,newStatus,reason){
  const btn=document.getElementById('confirm-reject-btn');
  if(btn){btn.disabled=true;btn.textContent='Enviando…';}
  const {error}=await MC.moderatePost(table,id,newStatus,reason);
  if(error){toast(pgErrorToast(error,'No se pudo actualizar.'));if(btn){btn.disabled=false;btn.textContent='Rechazar';}return;}
  moderationQueue=moderationQueue.filter(i=>!(i.table===table&&i.id===id));
  mcModalBack('pendingList');renderPendingQueue();
  toast(newStatus==='published'?'Publicado ✓':'Rechazado — el motivo quedó guardado');
  refreshPendingBadge();
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
  const biz=await MC.myBusiness();
  if(!biz)return;
  mcModalPushView('bizProfile'); // ✕ / back from the form returns to the business profile
  editingBusinessId=biz.id;
  await openPost('negocio_verificar');
  document.getElementById('modal-title').textContent='Editar mi negocio';
  const fillMap={name:biz.business_name,desc:biz.description,address:biz.address,phone:biz.phone,cat:biz.category,hours:biz.hours,social:biz.social_url,rfc:biz.rfc,delivery_info:biz.delivery_info,pickup_address:biz.pickup_address};
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
  eventos:MC.submitEvento, producto:MC.submitProducto, clasificado:MC.submitClasificado,
  perdidos:MC.submitPerdido, empleos:MC.submitEmpleo, reportar:MC.submitReporte, avisos:MC.submitAviso
};

async function submitPost(kind){
  const form=POST_FORMS[kind];
  const data={};
  form.fields.forEach(f=>{
    if(f.type==='note')return;
    if(f.type==='seg'){const sel=document.querySelector(`#pf-${f.k} .seg-btn.on`);data[f.k]=sel?sel.dataset.v:'';}
    else if(f.type==='multi'){data[f.k]=[...document.querySelectorAll(`#pf-${f.k} .mchip.on`)].map(b=>b.dataset.v);}
    else if(f.type==='calendar'){data[f.k]=selectedSlotDate;}
    else if(f.type==='imgupload'){data[f.k]=uploadedImageUrls[f.k]||null;}
    else{const el=document.getElementById('pf-'+f.k);data[f.k]=el?el.value:'';}
  });

  const btn=document.getElementById('post-submit-btn');
  const originalLabel=btn?btn.textContent:'';
  if(btn){btn.disabled=true;btn.textContent='Enviando…';}
  const stop=()=>{if(btn){btn.disabled=false;btn.textContent=originalLabel;}};

  if(kind==='producto'||kind==='clasificado'){
    if(!(data.name||'').trim()){stop();toast('Escribe qué vendes');return;}
    if(!Array.isArray(data.contact_methods)||!data.contact_methods.length){stop();toast('Elige al menos una forma de contacto');return;}
  }
  if(kind==='clasificado'&&!(data.contact_phone||'').trim()){stop();toast('Escribe tu número de contacto');return;}
  if((kind==='avisos'||kind==='perdidos'||kind==='empleos')&&data.want_contact==='si'){
    if(!(data.contact_phone||'').trim()){stop();toast('Escribe tu número o elige "No hace falta"');return;}
    if(!Array.isArray(data.contact_methods)||!data.contact_methods.length){stop();toast('Elige al menos una forma de contacto');return;}
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
    refreshMyPosts();
    return;
  }

  if(kind==='negocio_verificar'){
    if(!data.name||!data.desc||!data.address||!data.phone||!data.cat){
      if(btn){btn.disabled=false;btn.textContent=originalLabel;}
      toast('Completa nombre, descripción, dirección, teléfono y categoría');
      return;
    }
    const isEditing=!!editingBusinessId;
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
      const result=await MC.submitOferta(data,selectedSlotDate,isFull);
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
    const biz=await MC.myBusiness();
    if(!biz){if(btn){btn.disabled=false;btn.textContent=originalLabel;}openBusinessPrompt('oferta');return;}
    sessionStorage.setItem('mc_pending_oferta',JSON.stringify({data,slotDs:selectedSlotDate}));
    window.location.href=STRIPE_LINK_OFERTA;
    return;
  }

  const handler=SUBMIT_HANDLERS[kind];
  if(!handler){closeModal();return;} // unrecognized kind — nothing to send
  const result=await handler(data);
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
    const {data,slotDs}=JSON.parse(pending);
    const result=await MC.submitOferta(data,slotDs,false);
    if(result.error){
      if(isCapReachedError(result.error)){
        toast('Pago recibido, pero llegaste al límite de espacios de tu plan justo antes de que se confirmara. Escríbenos por WhatsApp — te ayudamos a resolverlo.');
        return;
      }
      toast('Pago recibido, pero ese día ya no está disponible — alguien más lo reservó mientras pagabas. Escríbenos por WhatsApp para reprogramar.');
      return;
    }
    toast('¡Pago recibido y espacio reservado! En revisión antes de publicarse ✓');
  } else if(paid==='premium'){
    toast('¡Pago recibido! Activaremos tu cuenta Premium en breve.');
  }
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
  renderMktChips();renderMercado();renderClasChips();renderClasificados();renderOfertas();
  renderEvtChips();renderEventos();renderPfChips();renderPerdidos();renderEmpleos();
  renderRepChips();renderReportes();renderAvisos();renderAlertas();renderServiciosUtiles();
  refreshPendingBadge();
  refreshHeaderAccount();
  loadWeather(); // fire-and-forget; re-renders the header (and the lightbox if open) when it lands
}

/* Header account icon: a compact "Entrar" pill while signed out (taps
   through to the sign-in / create-account form), just the round icon once
   signed in. Called on load and after any sign-in/sign-out. */
async function refreshHeaderAccount(){
  const btn=document.getElementById('tb-acct');
  if(!btn)return;
  const acct=await MC.currentAccount();
  btn.classList.toggle('signin',!acct.signedIn);
}

/* Header notification badge — admin-only for now (per the founder's own
   scoping: regular accounts may get their own notifications later, but
   this is just the admin's "Pendiente" count today). Called on load,
   after sign-in/out (admin status can change), after pull-to-refresh,
   and after every approve/reject action so the count stays live without
   needing to close and reopen anything. */
async function refreshPendingBadge(){
  // Same count on the header burger badge AND the "Mi cuenta" row inside
  // the menu, so an admin can see which item the header dot is pointing at.
  const els=[document.getElementById('tb-badge'),document.getElementById('menu-account-badge')];
  const set=(txt)=>els.forEach(el=>{ if(!el)return; el.textContent=txt; el.classList.toggle('on',!!txt); });
  const acct=await MC.currentAccount();
  // Keep the app-wide "who's signed in" cache fresh from here too — it runs
  // on load and after every sign-in/out, so admin-only affordances
  // (long-press remove) work without first opening the account view.
  lastFetchedAccount=acct;
  if(!acct.signedIn||!acct.isAdmin){set('');return;}
  const count=await MC.fetchPendingCount();
  set(count>0?(count>99?'99+':String(count)):'');
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
  setTiendaMode('mercado');
  setAnunciosMode('eventos');
  setReportarMode('avisos');
  initPullToRefresh();
  mcBackInit();
}
init();
