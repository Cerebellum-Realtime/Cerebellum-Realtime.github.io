"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[583],{8398:(e,s,t)=>{t.r(s),t.d(s,{default:()=>h});var l=t(8774),n=t(4586),r=t(6840),a=t(6540),i=t(4848);const c=e=>{let{children:s,fadeDistance:t=300}=e;const[l,n]=(0,a.useState)(!1),r=(0,a.useRef)(null),c=()=>{if(!r.current)return;r.current.getBoundingClientRect().top<window.innerHeight-t&&n(!0)};return(0,a.useEffect)((()=>(window.addEventListener("scroll",c),c(),()=>window.removeEventListener("scroll",c))),[t]),(0,i.jsx)("div",{className:`fade-in-section ${l?"is-visible":""} border-t border-solid border-slate-300 border-l-0 border-r-0 border-b-0 dark:border-slate-700`,ref:r,children:s})};var d=t(1432);const o=()=>{const[e,s]=(0,a.useState)("usePresence");return(0,i.jsxs)("div",{className:"sectionB section-mobile mx-auto flex max-w-screen-3xl flex-col items-center justify-between gap-5 bg-white px-8 py-8 lg:flex lg:flex-row lg:py-20",children:[(0,i.jsxs)("div",{className:"flex-grow py-0",children:[(0,i.jsx)("h1",{className:"mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]",children:"Drop-in integration with our TypeScript SDK"}),(0,i.jsx)("p",{className:"mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100",children:"Whether starting from scratch or enhancing an existing application, use the SDK to enable WebSocket functionality with:"}),(0,i.jsxs)("ul",{className:"ml-4 list-disc text-lg text-gray-600 dark:text-slate-100",children:[(0,i.jsx)("li",{children:"Full type support"}),(0,i.jsx)("li",{children:"Custom built-in React hooks"}),(0,i.jsx)("li",{children:"Pre-configured Docker environment for instant local development"})]})]}),(0,i.jsxs)("div",{className:"my-10 h-full w-full md:w-[800px] 4xl:w-[60%]",children:[(0,i.jsxs)("div",{className:"flex flex-row justify-center pb-1 text-center",children:[(0,i.jsx)("div",{className:("usePresence"===e?"selected":"")+" order-1 mx-auto cursor-pointer",onClick:()=>s("usePresence"),children:"User Presence"}),(0,i.jsx)("div",{className:("useChannel"===e?"selected":"")+" order-2 mx-auto cursor-pointer hover:border-b-2",onClick:()=>s("useChannel"),children:"Channels"}),(0,i.jsx)("div",{className:("useCerebellum"===e?"selected":"")+" order-3 mx-auto cursor-pointer hover:border-b-2",onClick:()=>s("useCerebellum"),children:"useCerebellum"})]}),(0,i.jsx)(d.A,{language:"jsx",className:"max-h-[478px] overflow-auto overflow-x-auto rounded border-2 align-top text-xs shadow-[0_0_10px_grey] dark:shadow-none sm:text-sm md:text-base xl:text-lg",children:(()=>{switch(e){case"usePresence":return'import cerebellum from "@cerebellum/sdk";\n\nconst OnlineUsers = ({ user }) => {\n  const { presenceData } = cerebellum.usePresence("OnlineUsers", {\n    user,\n  });\n\n  return (\n    <div>\n      <h1>Online Users</h1>\n      {presenceData.map((data) => (\n        <div key={data.socketId} className="presence-user">\n          {data.user}\n        </div>\n      ))}\n    </div>\n  );\n};';case"useChannel":return'import { useChannel } from "@cerebellum/sdk";\n\nconst MyComponent = () => {\n  const [messages, setMessages] = useState([]);\n  const [messageField, setMessageField] = useState("");\n  const { channelName, publish } = useChannel("general", (message) => {\n    setMessages((prevMessages) => [...prevMessages, message]);\n  });\n};\n\nconst sendMessage = () => {\n  publish(messageField);\n  setMessageField("");\n};\n\nreturn (\n  <div>\n    <h1>Messages</h1>\n    <ul>\n      {messages.map((message) => (\n        <li key={message.createdAt}>{message.content}</li>\n      ))}\n    </ul>\n    <input\n      type="text"\n      placeholder="Enter a message"\n      onChange={(event) => {\n        setMessageField(event.target.value);\n      }} \n    />\n    <button onClick={sendMessage}>Publish Message</button>\n  </div>\n);';case"useCerebellum":return'import cerebellum from "@cerebellum/sdk";\n\nconst Chat = ({ user }) => {\n  const { channelData } = cerebellum.useChannel("Chat", {\n    user,\n  });\n\n  return (\n    <div>\n      <h1>Chat</h1>\n      {channelData.map((data) => (\n        <div key={data.socketId} className="presence-user">\n          {data.user}\n        </div>\n      ))}\n    </div>\n  );\n};';default:return"usePresence"}})()})]})]})},x=()=>(0,i.jsx)("div",{className:"bg-gray-100 dark:bg-componentDarkMode",children:(0,i.jsxs)("div",{className:"section-mobile sectionA mx-auto flex max-w-screen-3xl flex-col-reverse place-items-center justify-between gap-5 bg-gray-100 px-8 py-8 lg:flex-row lg:py-20",children:[(0,i.jsx)("div",{className:"shadow-l my-10 max-w-full bg-transparent 4xl:w-[60%]",children:(0,i.jsxs)("video",{loop:!0,autoPlay:!0,muted:!0,playsInline:!0,className:"mx-auto my-0 w-[100%] rounded-lg shadow-[0_0_10px_grey] dark:shadow-none",children:[(0,i.jsx)("source",{src:"/cerebellum/cbdeployVersion2.webm",type:"video/webm"}),(0,i.jsx)("source",{src:"/cerebellum/cbdeployVersion2.mp4",type:"video/mp4"})]})}),(0,i.jsxs)("div",{className:"flex-grow text-left",children:[(0,i.jsx)("h1",{className:"mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]",children:"Hassle-free deployment with our CLI"}),(0,i.jsx)("p",{className:"mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100",children:"Deploy a scalable AWS infrastructure built specifically for WebSocket applications with minimal configuration"})]})]})}),m=()=>(0,i.jsx)("div",{className:"bg-gray-100 dark:bg-componentDarkMode",children:(0,i.jsxs)("div",{className:"sectionA mx-auto flex max-w-screen-3xl flex-col place-items-center justify-center gap-5 bg-gray-100 px-8 py-8 lg:py-20",children:[(0,i.jsxs)("div",{className:"flex w-[100%] flex-col items-center justify-center md:mt-3 md:block lg:w-[60%] 2xl:w-[53%]",children:[(0,i.jsxs)("div",{className:"mb-5 flex flex-col items-center justify-center text-center md:mt-3",children:[(0,i.jsx)("h1",{className:"mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]",children:"Powered by AWS"}),(0,i.jsxs)("p",{className:"mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100",children:[(0,i.jsx)("em",{children:"Cerebellum"})," is a cloud-native solution built on AWS, providing a scalable and resource-efficient architecture out of the box"]})]}),(0,i.jsx)("div",{className:"flex max-w-full justify-center",children:(0,i.jsx)("img",{src:"/img/Cerebellum-FullInfra.drawio.png",alt:"Cerebellum architecture diagram",className:"my-10 rounded align-top shadow-[0_0_10px_grey] dark:shadow-none"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"text-large mb-2 text-center font-semibold uppercase tracking-wide text-gray-600 dark:text-slate-100",children:"Technologies"}),(0,i.jsxs)("div",{className:"grid grid-cols-3 items-center justify-items-center gap-5 md:grid-cols-3 lg:grid-cols-6",children:[(0,i.jsx)("div",{className:"flex h-14 w-14 justify-center rounded border-2 align-middle dark:bg-white",children:(0,i.jsx)("img",{className:"my-auto rounded border-2",src:"/img/Amazon_Web_Services-Logo.wine.svg",alt:"AWS Logo"})}),(0,i.jsx)("img",{className:"w-14 rounded border-2",src:"/img/CloudDevelopmentKit.png",alt:"CDK Logo"}),(0,i.jsx)("img",{className:"w-14",src:"/img/typescript.svg",alt:"TypeScript Logo"}),(0,i.jsx)("img",{className:"w-14",src:"/img/docker.svg",alt:"Docker Logo"}),(0,i.jsx)("img",{className:"w-14",src:"/img/react.png",alt:"React Logo"}),(0,i.jsx)("img",{className:"w-14",src:"/img/redis.png",alt:"Redis Logo"})]})]})]}),(0,i.jsx)("div",{className:"flex w-full flex-col-reverse items-center justify-center gap-2 p-8 md:flex-row",children:(0,i.jsx)(l.A,{className:"rounded-xl border-2 border-solid px-5 pb-3 pt-3 text-2xl text-cerebellumPurple-500 antialiased transition hover:scale-110 hover:text-cerebellumPurple-500 hover:no-underline dark:text-white sm:text-xl",to:"/case-study",children:"Read Case Study"})})]})});function u(){return(0,i.jsxs)("div",{className:"mx-auto flex flex-col",children:[(0,i.jsx)(c,{fadeDistance:350,children:(0,i.jsx)(x,{})}),(0,i.jsx)(c,{fadeDistance:350,children:(0,i.jsx)(o,{})}),(0,i.jsx)(c,{fadeDistance:350,children:(0,i.jsx)(m,{})})]})}function g(){const{siteConfig:e}=(0,n.A)();return(0,i.jsx)("section",{id:"hero",className:"text-8xll flex h-lvh scroll-mt-60 flex-col items-center justify-center gap-8 bg-gradient-to-br from-left via-middle to-right to-90% p-6 text-2xl sm:flex-col",children:(0,i.jsxs)("article",{className:"relative max-w-full px-4 py-8 pb-14 font-sans text-white antialiased md:py-10",children:[(0,i.jsxs)("h1",{className:"font-main mx-auto mb-2 max-w-4xl text-center text-4xl font-medium leading-[48px] tracking-tighter text-white md:text-5xl md:leading-tight",children:["A drop-in infrastructure and library for",(0,i.jsx)("br",{}),(0,i.jsx)("em",{className:"text-white",children:"scalable realtime applications "})]}),(0,i.jsxs)("p",{className:"md:text mx-auto mt-1 max-w-6xl text-center text-xl leading-normal text-white md:mt-2 md:leading-10",children:[(0,i.jsx)("em",{children:"Cerebellum"})," is an open-source solution for scaling Websocket-based applications"]}),(0,i.jsx)("div",{className:"mt-5 flex w-full flex-col-reverse items-center justify-center gap-2 p-6 md:flex-row",children:(0,i.jsx)(l.A,{className:"rounded-xl border-2 border-solid px-5 pb-3 pt-3 text-white antialiased transition hover:scale-110 hover:text-white hover:no-underline sm:text-xl",to:"/case-study",children:"Read Case Study"})})]})})}function h(){return(0,i.jsxs)(r.A,{children:[(0,i.jsx)(g,{}),(0,i.jsx)("main",{children:(0,i.jsx)(u,{})})]})}}}]);