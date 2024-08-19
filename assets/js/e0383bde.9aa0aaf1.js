"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[531],{3469:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(6840),l=a(4848);const i=function(e){let{image:t,name:a,location:n,personalWebsite:i,github:r,linkedin:o,email:s}=e;return(0,l.jsxs)("div",{className:"portrait-card flex flex-col",children:[(0,l.jsx)("div",{className:"",children:(0,l.jsx)("img",{className:"max-h-64 portrait-img",src:t})}),(0,l.jsx)("p",{className:"lp-name text-gray-800 dark:text-gray-300 text-lg font-semibold text-left mt-2 mb-0 p-override text-center pb-4 md:pb-0",children:a}),(0,l.jsx)("p",{className:"lp-para text-gray-600 dark:text-gray-400  text-left mb-1 p-override text-center",children:n}),(0,l.jsxs)("div",{className:"flex gap-1 mx-auto mt-4",children:[(0,l.jsx)("a",{href:i,target:"_blank",className:"inline-block text-willowGreen-600 hover:text-willowGreen-400 dark:text-willowGreen-300 dark:hover:text-willowGreen-100",children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-world",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),(0,l.jsx)("path",{d:"M3.6 9h16.8"}),(0,l.jsx)("path",{d:"M3.6 15h16.8"}),(0,l.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),(0,l.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]})}),(0,l.jsx)("a",{href:r,target:"_blank",className:"inline-block text-willowGreen-600 hover:text-willowGreen-400 dark:text-willowGreen-300 dark:hover:text-willowGreen-100",children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-brand-github",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"})]})}),(0,l.jsx)("a",{href:o,target:"_blank",className:"inline-block text-willowGreen-600 hover:text-willowGreen-400 dark:text-willowGreen-300 dark:hover:text-willowGreen-100",children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-brand-linkedin",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"}),(0,l.jsx)("path",{d:"M8 11l0 5"}),(0,l.jsx)("path",{d:"M8 8l0 .01"}),(0,l.jsx)("path",{d:"M12 16l0 -5"}),(0,l.jsx)("path",{d:"M16 16v-3a2 2 0 0 0 -4 0"})]})}),(0,l.jsx)("a",{href:`mailto:${s}`,className:"inline-block text-willowGreen-600 hover:text-willowGreen-400 dark:text-willowGreen-300 dark:hover:text-willowGreen-100",children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-mail",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"}),(0,l.jsx)("path",{d:"M3 7l9 6l9 -6"})]})})]})]})};var r=a(6540);const o=e=>({37:"left",38:"up",39:"right",40:"down",65:"A",66:"B"}[e]),s=e=>{const[t,a]=(0,r.useState)([]),n="up up down down left right left right B A"===t.join(" ");return(0,r.useEffect)((()=>{let e;window.document.onkeydown=t=>{a((e=>[...e,o(t.keyCode)])),clearTimeout(e),e=setTimeout((()=>a([])),5e3)}}),[]),(0,r.useEffect)((()=>{n&&(e(),a([]))}),[n,e]),n},d=()=>(s((()=>alert("Konami Code!"))),(0,l.jsx)(n.A,{children:(0,l.jsx)("section",{className:"sectionB",id:"team",children:(0,l.jsxs)("article",{className:"mx-auto flex max-w-6xl flex-col justify-center gap-8 px-6 py-20",children:[(0,l.jsx)("h2",{className:"lp-para mb-2 text-center text-3xl font-semibold tracking-wide text-gray-600 dark:text-gray-300",children:"Developed by"}),(0,l.jsxs)("div",{className:"mx-auto flex flex-col gap-2 md:flex-row md:gap-8",children:[(0,l.jsx)(i,{name:"Austin Nelson",image:"https://dynamic-assets.gather.town/v2/sprite-profile/avatar-ByUueZ_UR7eb80XdPy3m.TKhLrRrIw1RdgSbP6w1G.Gk3dJr3nE15MeVt54zCM.r3f1cfuESoyyxW4lUUuB.ua6kq1m7YDtCPmdkEMGa.jWRxPyatM2P0bdzSnf50.E9eKT1XBkaWQnXyxKs3I.Sowlqj4RQBynJKnXFm_p.DJ3o1pYKQwu4by8Fu46O.png?d=.",location:"Dallas, TX",personalWebsite:"https://austinnelson.me/",github:"https://github.com/nelson030",linkedin:"https://www.linkedin.com/in/austin-nelson-009556216/",email:"nelsonaustin11@gmail.com"}),(0,l.jsx)(i,{name:"Avery Littlemore",image:"https://dynamic-assets.gather.town/v2/sprite-profile/avatar-KPK1RNe5O32vJ8IhOicy.jfDstPwOt5ylgXmAV5MP.q59OoBaqEImtT1VPBfv3.grBN5xvURkfu6pMDr5Qu.jWRxPyatM2P0bdzSnf50.png?d=.",location:"Toronto, Canada",personalWebsite:"https://www.averylittlemore.xyz/",github:"https://github.com/Avery-Littlemore",linkedin:"https://www.linkedin.com/in/avery-littlemore/",email:"avery.d.littlemore@gmail.com"}),(0,l.jsx)(i,{name:"Dylan Spyer",image:"https://dynamic-assets.gather.town/v2/sprite-profile/avatar-BEyC1iiDaoaARIjdAI4e.ajYd6R7kSfSuXp5wyacV.pa0TKP5AgAzrPBnJqShI.-MFRXXAJSAGVugzljt12.KKnwTu4eQJC_2bE2qMnE.UJy0fOWWJ9sdtdTfnVDz.uj1LBrRXG9r5jcSSMFjs.CLumQltARfCaKsKf2eWY.png?d=.",location:"Austin, TX",personalWebsite:"https://www.dylanspyer.com",github:"https://github.com/dylanspyer",linkedin:"https://www.linkedin.com/in/dylan-spyer/",email:"dylanspyer@gmail.com"}),(0,l.jsx)(i,{name:"Will Conrad",image:"https://dynamic-assets.gather.town/v2/sprite-profile/avatar-ty0CoZao8eIAgVnSKFg7.AgRQf0McpPKEmNDfBFma.mEnAamedSiG5KSrqLaax.VnD_lobfTaapFHP9dHFb.LR6JiKUSn5bCkOM1KDkS.jWRxPyatM2P0bdzSnf50.png?d=.",location:"Houston, TX",personalWebsite:"https://willconrad.dev",github:"https://github.com/wconrad265",linkedin:"https://www.linkedin.com/in/willhconrad/",email:"w.conrad@outlook.com"})]})]})})}))}}]);