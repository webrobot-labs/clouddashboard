(()=>{var e={};e.id=753,e.ids=[753],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7031:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>h,pages:()=>c,routeModule:()=>g,tree:()=>d}),t(5870),t(1506),t(5866);var s=t(3191),n=t(8716),o=t(7922),a=t.n(o),i=t(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(r,l);let d=["",{children:["Home",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5870)),"/home/roger/github/clouddashboard/app/Home/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,1506)),"/home/roger/github/clouddashboard/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/home/roger/github/clouddashboard/app/Home/page.tsx"],h="/Home/page",u={require:t,loadChunk:()=>Promise.resolve()},g=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/Home/page",pathname:"/Home",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4795:(e,r,t)=>{Promise.resolve().then(t.bind(t,9987))},7548:(e,r,t)=>{Promise.resolve().then(t.bind(t,4144))},5372:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,3682,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},9987:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var s=t(326);t(7577);var n=t(8153),o=t(8519),a=t(5047);let i=()=>{let e=(0,a.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[s.jsx(n.Z,{}),(0,s.jsxs)("section",{children:[s.jsx(o.Z,{}),s.jsx("button",{onClick:()=>{e.push("/")},children:"Logout"})]})]})}},4144:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(326);t(9973),t(1002),t(8227),t(2589);var n=t(2994),o=t(7577);function a({children:e}){let[r]=(0,o.useState)(()=>new n.QueryClient);return s.jsx("html",{lang:"en",children:s.jsx("body",{children:s.jsx(n.QueryClientProvider,{client:r,children:e})})})}},8153:(e,r,t)=>{"use strict";t.d(r,{Z:()=>_});var s=t(326),n=t(6386),o=t.n(n),a=t(7577),i=t.n(a),l=t(8439),d=t.n(l),c=t(8029),h=t.n(c),u=t(6284),g=["className","cssModule","fluid","tag"];function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}var p={tag:u.iC,fluid:d().oneOfType([d().bool,d().string]),className:d().string,cssModule:d().object};function m(e){var r=e.className,t=e.cssModule,s=e.fluid,n=e.tag,o=function(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}(e,g),a="container";!0===s?a="container-fluid":s&&(a="container-".concat(s));var l=(0,u.mx)(h()(r,a),t);return i().createElement(void 0===n?"div":n,x({},o,{className:l}))}m.propTypes=p;var f=t(434),j=t(6226);let _=e=>s.jsx(s.Fragment,{children:s.jsx("header",{className:o().header,children:s.jsx(m,{children:(0,s.jsxs)("div",{className:o().logo,children:[s.jsx(f.default,{href:"/",passHref:!0,children:s.jsx("a",{children:s.jsx(j.default,{width:400,height:100,src:"/images/logo.png",alt:"WebRobot",className:o().logoImg})})}),(0,s.jsxs)("ul",{className:o().header_right,children:[s.jsx("li",{children:s.jsx(f.default,{href:"/help",passHref:!0,children:s.jsx("a",{children:s.jsx(j.default,{width:30,height:30,src:"/images/icon1.svg",alt:"Icon"})})})}),s.jsx("li",{children:s.jsx(f.default,{href:"/auth",passHref:!0,children:s.jsx("a",{children:s.jsx(j.default,{width:50,height:50,src:"/images/icon2.svg",alt:"Icon"})})})}),s.jsx("li",{children:s.jsx(f.default,{href:"/auth/signup",passHref:!0,children:s.jsx("a",{children:s.jsx(j.default,{width:50,height:50,src:"/images/icon3.svg",alt:"Icon"})})})})]})]})})})})},8519:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var s=t(326);t(7577);var n=t(434),o=t(6226),a=t(2589),i=t.n(a);let l=()=>(0,s.jsxs)("div",{className:`${i().loginWrap} ${i().style_two}`,children:[s.jsx("h2",{children:"Welcome to WebRobot Self-Service Web Scraping Platform!"}),s.jsx("h3",{children:"From here, you can control your profile, manage your plans, payment, data extraction projects, and look for help."}),(0,s.jsxs)("ul",{children:[s.jsx("li",{children:(0,s.jsxs)(n.default,{href:"/Home",children:[s.jsx(o.default,{width:77,height:74,src:"/images/icon12.svg",alt:"Icon"}),s.jsx("span",{className:i().login_text,children:"Home"})]})}),s.jsx("li",{children:(0,s.jsxs)(n.default,{href:"/Profile",children:[s.jsx(o.default,{width:77,height:74,src:"/images/icon13.svg",alt:"Icon"}),s.jsx("span",{className:i().login_text,children:"Profile"})]})}),s.jsx("li",{children:(0,s.jsxs)(n.default,{href:"/Projects",children:[s.jsx(o.default,{width:77,height:74,src:"/images/icon16.svg",alt:"Icon"}),s.jsx("span",{className:i().login_text,children:"Projects"})]})}),s.jsx("li",{children:(0,s.jsxs)(n.default,{href:"/Help",children:[s.jsx(o.default,{width:77,height:74,src:"/images/icon4.svg",alt:"Icon"}),s.jsx("span",{className:i().login_text,children:"Help"})]})})]})]})},5047:(e,r,t)=>{"use strict";var s=t(7389);t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}})},6386:e=>{e.exports={header:"header_header__us6ao",logo:"header_logo__IbzcJ",header_right:"header_header_right__8sC4e",logoImg:"header_logoImg__Uc5Cp"}},2589:e=>{e.exports={loginWrap:"login_loginWrap__O8_cn",login_text:"login_login_text__eco5_",style_two:"login_style_two__FIkbS",headerTwo:"login_headerTwo__w8AJv","header-right":"login_header-right__5oDjB"}},5870:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(8570).createProxy)(String.raw`/home/roger/github/clouddashboard/app/Home/page.tsx#default`)},1506:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(8570).createProxy)(String.raw`/home/roger/github/clouddashboard/app/layout.tsx#default`)},8227:()=>{}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,44,114,434],()=>t(7031));module.exports=s})();