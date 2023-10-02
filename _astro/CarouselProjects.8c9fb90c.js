import{j as a}from"./jsx-runtime.b9e88e07.js";import{g as S,S as G,a as w}from"./pagination.ddaa70cc.js";import"./index.03be2d59.js";function Y(F){let{swiper:e,extendParams:V,on:l,emit:s,params:u}=F;e.autoplay={running:!1,paused:!1,timeLeft:0},V({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let d,x,E=u&&u.autoplay?u.autoplay.delay:3e3,g=u&&u.autoplay?u.autoplay.delay:3e3,n,c=new Date().getTime,j,v,y,L,b,o;function D(t){!e||e.destroyed||!e.wrapperEl||t.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",D),p())}const P=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?j=!0:j&&(g=n,j=!1);const t=e.autoplay.paused?n:c+g-new Date().getTime();e.autoplay.timeLeft=t,s("autoplayTimeLeft",t,t/E),x=requestAnimationFrame(()=>{P()})},B=()=>{let t;return e.virtual&&e.params.virtual.enabled?t=e.slides.filter(r=>r.classList.contains("swiper-slide-active"))[0]:t=e.slides[e.activeIndex],t?parseInt(t.getAttribute("data-swiper-autoplay"),10):void 0},h=t=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(x),P();let i=typeof t>"u"?e.params.autoplay.delay:t;E=e.params.autoplay.delay,g=e.params.autoplay.delay;const r=B();!Number.isNaN(r)&&r>0&&typeof t>"u"&&(i=r,E=r,g=r),n=i;const f=e.params.speed,M=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(f,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,f,!0,!0),s("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(f,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,f,!0,!0),s("autoplay")),e.params.cssMode&&(c=new Date().getTime(),requestAnimationFrame(()=>{h()})))};return i>0?(clearTimeout(d),d=setTimeout(()=>{M()},i)):requestAnimationFrame(()=>{M()}),i},O=()=>{e.autoplay.running=!0,h(),s("autoplayStart")},T=()=>{e.autoplay.running=!1,clearTimeout(d),cancelAnimationFrame(x),s("autoplayStop")},m=(t,i)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(d),t||(o=!0);const r=()=>{s("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",D):p()};if(e.autoplay.paused=!0,i){b&&(n=e.params.autoplay.delay),b=!1,r();return}n=(n||e.params.autoplay.delay)-(new Date().getTime()-c),!(e.isEnd&&n<0&&!e.params.loop)&&(n<0&&(n=0),r())},p=()=>{e.isEnd&&n<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(c=new Date().getTime(),o?(o=!1,h(n)):h(),e.autoplay.paused=!1,s("autoplayResume"))},A=()=>{if(e.destroyed||!e.autoplay.running)return;const t=S();t.visibilityState==="hidden"&&(o=!0,m(!0)),t.visibilityState==="visible"&&p()},N=t=>{t.pointerType==="mouse"&&(o=!0,!(e.animating||e.autoplay.paused)&&m(!0))},I=t=>{t.pointerType==="mouse"&&e.autoplay.paused&&p()},C=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",N),e.el.addEventListener("pointerleave",I))},k=()=>{e.el.removeEventListener("pointerenter",N),e.el.removeEventListener("pointerleave",I)},q=()=>{S().addEventListener("visibilitychange",A)},R=()=>{S().removeEventListener("visibilitychange",A)};l("init",()=>{e.params.autoplay.enabled&&(C(),q(),c=new Date().getTime(),O())}),l("destroy",()=>{k(),R(),e.autoplay.running&&T()}),l("beforeTransitionStart",(t,i,r)=>{e.destroyed||!e.autoplay.running||(r||!e.params.autoplay.disableOnInteraction?m(!0,!0):T())}),l("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){T();return}v=!0,y=!1,o=!1,L=setTimeout(()=>{o=!0,y=!0,m(!0)},200)}}),l("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(L),clearTimeout(d),e.params.autoplay.disableOnInteraction){y=!1,v=!1;return}y&&e.params.cssMode&&p(),y=!1,v=!1}}),l("slideChange",()=>{e.destroyed||!e.autoplay.running||(b=!0)}),Object.assign(e.autoplay,{start:O,stop:T,pause:m,resume:p})}const J=()=>a.jsx(a.Fragment,{children:a.jsxs(G,{slidesPerView:1,spaceBetween:10,slidesPerGroup:1,loop:!0,navigation:!1,modules:[Y],className:"mySwiper",autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20},1200:{slidesPerView:3,spaceBetween:50}},children:[a.jsx(w,{children:a.jsxs("div",{className:"card",children:[a.jsx("img",{src:"/images/tiendasAra.png",alt:"proyecto"}),a.jsx("h2",{children:"Tiendas ARA"})]})}),a.jsx(w,{children:a.jsxs("div",{className:"card",children:[a.jsx("img",{src:"/images/yokoMotor.png",alt:"proyecto"}),a.jsx("h2",{children:"Yokomotor"})]})}),a.jsx(w,{children:a.jsxs("div",{className:"card",children:[a.jsx("img",{src:"/images/tronexVitelsa.png",alt:"proyecto"}),a.jsx("h2",{children:"Tronex Vitelsa"})]})}),a.jsx(w,{children:a.jsxs("div",{className:"card",children:[a.jsx("img",{src:"/images/veTower.png",alt:"proyecto"}),a.jsx("h2",{children:"Ve Tower"})]})})]})});export{J as CarouselProjects};
