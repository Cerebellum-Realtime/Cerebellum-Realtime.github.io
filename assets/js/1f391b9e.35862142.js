"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61],{3408:(e,t,o)=>{o.d(t,{A:()=>m});var a=o(6540),n=o(4164),s=o(1312),c=o(7559),l=o(3104),i=o(5062);const r={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var d=o(4848);function m(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[o,n]=(0,a.useState)(!1),s=(0,a.useRef)(!1),{startScroll:c,cancelScroll:r}=(0,l.gk)();return(0,l.Mq)(((e,o)=>{let{scrollY:a}=e;const c=o?.scrollY;c&&(s.current?s.current=!1:a>=c?(r(),n(!1)):a<t?n(!1):a+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,i.$)((e=>{e.location.hash&&(s.current=!0,n(!1))})),{shown:o,scrollToTop:()=>c(0)}}({threshold:300});return(0,d.jsx)("button",{"aria-label":(0,s.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,n.A)("clean-btn",c.G.common.backToTopButton,r.backToTopButton,e&&r.backToTopButtonShow),type:"button",onClick:t})}},2951:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});o(6540);var a=o(4164),n=o(1003),s=o(7559),c=o(6840),l=o(2857),i=o(7763),r=o(996);const d={};var m=o(9765),h=(o(3408),o(4848));function u(e){const{content:t}=e,{metadata:{title:o,description:u,frontMatter:p,unlisted:x},assets:b}=t,{keywords:T,wrapperClassName:g,hide_table_of_contents:k}=p,w=b.image??p.image;return(0,h.jsx)(n.e3,{className:(0,a.A)(g??s.G.wrapper.mdxPages,s.G.page.mdxPage),children:(0,h.jsxs)(c.A,{children:[(0,h.jsx)(n.be,{title:o,description:u,keywords:T,image:w}),(0,h.jsx)("main",{className:"",children:(0,h.jsxs)("div",{className:(0,a.A)("row mx-0",d.mdxPageWrapper),children:[!k&&t.toc.length>0&&(0,h.jsx)("div",{className:"sidebar",children:(0,h.jsx)(i.A,{toc:t.toc,minHeadingLevel:p.toc_min_heading_level,maxHeadingLevel:p.toc_max_heading_level})}),(0,h.jsxs)("div",{className:(0,a.A)("col max-w-7xl",!k&&"col--8 p-0"),children:[x&&(0,h.jsx)(r.A,{}),(0,h.jsxs)("article",{className:"m-w-4xl p-4",children:[(0,h.jsx)("div",{className:"display mobile-toc-container",children:(0,h.jsx)(m.A,{toc:t.toc,minHeadingLevel:p.toc_min_heading_level,maxHeadingLevel:p.toc_max_heading_level})}),(0,h.jsx)(l.A,{children:(0,h.jsx)(t,{})})]})]})]})})]})})}}}]);