"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[431],{1971:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var i=t(4848),o=t(8453);const c={title:"Configuring Cerebellum","sidebar-position":1},r="Configuring Cerebellum",s={id:"SDK/Configuring_Cerebellum",title:"Configuring Cerebellum",description:"When creating a new instance of Cerebellum, you can pass in an options object to customize the behavior of the Cerebellum instance. Below is a detailed explanation of the available options and their descriptions.",source:"@site/docs/SDK/2. Configuring_Cerebellum.md",sourceDirName:"SDK",slug:"/SDK/Configuring_Cerebellum",permalink:"/docs/SDK/Configuring_Cerebellum",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuring Cerebellum","sidebar-position":1},sidebar:"tutorialSidebar",previous:{title:"Getting Started with the SDK",permalink:"/docs/SDK/Getting_Started"},next:{title:"Using React",permalink:"/docs/SDK/Using_React"}},l={},d=[{value:"<code>autoConnect</code>",id:"autoconnect",level:2},{value:"<code>API_KEY</code>",id:"api_key",level:2},{value:"<code>authRoute</code>",id:"authroute",level:2},{value:"<code>reconnection</code>",id:"reconnection",level:2},{value:"<code>reconnectionAttempts</code>",id:"reconnectionattempts",level:2},{value:"<code>reconnectionDelay</code>",id:"reconnectiondelay",level:2},{value:"<code>reconnectionDelayMax</code>",id:"reconnectiondelaymax",level:2},{value:"<code>timeout</code>",id:"timeout",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configuring-cerebellum",children:"Configuring Cerebellum"}),"\n",(0,i.jsx)(n.p,{children:"When creating a new instance of Cerebellum, you can pass in an options object to customize the behavior of the Cerebellum instance. Below is a detailed explanation of the available options and their descriptions."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-TypeScript",children:'const CerebellumOptions = {\n\xa0 autoConnect: true,\n\xa0 API_KEY: "SAMPLE_API_KEY",\n\xa0 authRoute: {\n\xa0 \xa0 endpoint: "http://localhost:3000/login",\n\xa0 \xa0 method: "POST",\n\xa0 \xa0 payload: {},\n },\n\xa0 reconnection: true,\n\xa0 reconnectionAttempts: 5,\n\xa0 reconnectionDelay: 5000,\n\xa0 reconnectionDelayMax: 5000,\n\xa0 timeout: 20000,\n};\n'})}),"\n",(0,i.jsx)(n.h2,{id:"autoconnect",children:(0,i.jsx)(n.code,{children:"autoConnect"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"autoConnect: boolean;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Determines whether the ",(0,i.jsx)(n.code,{children:"CerebellumInit"})," instance should automatically connect to the Cerebellum server."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"true"}),":\n\xa0 - The instance will first check if an ",(0,i.jsx)(n.code,{children:"API_KEY"})," is provided. If an ",(0,i.jsx)(n.code,{children:"API_KEY"})," is present, it will create a token using this key before establishing the WebSocket connection.\n\xa0 - If the ",(0,i.jsx)(n.code,{children:"API_KEY"})," is not provided, the ",(0,i.jsx)(n.code,{children:"authRoute"})," information will be used to retrieve a token signed by the ",(0,i.jsx)(n.code,{children:"API_KEY"}),". After obtaining the token from the auth server, ",(0,i.jsx)(n.code,{children:"CerebellumInit"})," will attempt to establish a WebSocket connection.\n\xa0 - This approach avoids storing the ",(0,i.jsx)(n.code,{children:"API_KEY"})," directly."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"false"}),", the instance will not automatically connect."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note: If both ",(0,i.jsx)(n.code,{children:"API_KEY"})," and ",(0,i.jsx)(n.code,{children:"authRoute"})," are provided, ",(0,i.jsx)(n.code,{children:"API_KEY"})," takes precedence."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"api_key",children:(0,i.jsx)(n.code,{children:"API_KEY"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"API_KEY: string;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The API key for authentication. This key is used to create a token on the front end, which is then sent to the Cerebellum servers for authentication."}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"API_KEY"})," is provided, then a token using the provided ",(0,i.jsx)(n.code,{children:"API_KEY"})," will be created automatically."]}),"\n",(0,i.jsx)(n.p,{children:"For local development and testing, you can use the following, when using the cerebellum development server/image"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-TypeScript",children:'API_KEY: "SAMPLE_API_KEY";\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In production environments, ensure that this key is kept secure and not exposed in client-side code. We strongly recommend using the ",(0,i.jsx)(n.code,{children:"authRoute"})," if the ",(0,i.jsx)(n.code,{children:"autoConnect"})," is set to ",(0,i.jsx)(n.code,{children:"true"}),", or using the provided authentication methods discussed in the ",(0,i.jsx)(n.a,{href:"##authentication",children:"Authentication"})," section."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"authroute",children:(0,i.jsx)(n.code,{children:"authRoute"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'authRoute: {\n\xa0 endpoint: string;\n\xa0 method: "POST" | "GET";\n\xa0 payload?: object;\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["An object containing details for an authentication route. Used if ",(0,i.jsx)(n.code,{children:"autoConnect"})," is ",(0,i.jsx)(n.code,{children:"true"})," and ",(0,i.jsx)(n.code,{children:"API_KEY"})," is not provided, else it is ignored."]}),"\n",(0,i.jsxs)(n.p,{children:["When autoconnect is ",(0,i.jsx)(n.code,{children:"true"}),", and ",(0,i.jsx)(n.code,{children:"API_KEY"})," is not provided, cerebellum will attempt to make an HTTP request to the ",(0,i.jsx)(n.code,{children:"endpoint"})," using the ",(0,i.jsx)(n.code,{children:"method"})," provided and include the ",(0,i.jsx)(n.code,{children:"payload"})," in the request."]}),"\n",(0,i.jsxs)(n.p,{children:["It expects to receive a response with a JSON web token in the following format. You can use the ",(0,i.jsx)(n.code,{children:"createToken"})," from the ",(0,i.jsx)(n.code,{children:"@cerebellum/sdk"})," to create a token on your authentication server."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"endpoint"})}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": The endpoint from which to receive the Cerebellum token."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"method"})}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:'"POST" | "GET"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": The HTTP method to use when requesting the Cerebellum token."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"payload"})}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"object"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": An optional payload to send to the endpoint."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"reconnection",children:(0,i.jsx)(n.code,{children:"reconnection"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"reconnection: boolean;\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Enables automatic reconnection attempts if the connection to the server is lost."}),"\n",(0,i.jsx)(n.h2,{id:"reconnectionattempts",children:(0,i.jsx)(n.code,{children:"reconnectionAttempts"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"reconnectionAttempts: number;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The number of reconnection attempts to make before giving up."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"reconnectiondelay",children:(0,i.jsx)(n.code,{children:"reconnectionDelay"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"reconnectionDelay: number;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The delay (in milliseconds) between reconnection attempts."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"reconnectiondelaymax",children:(0,i.jsx)(n.code,{children:"reconnectionDelayMax"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"reconnectionDelayMax: number;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The maximum delay (in milliseconds) between reconnection attempts."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"timeout",children:(0,i.jsx)(n.code,{children:"timeout"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"timeout: number;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The timeout (in milliseconds) before a connection attempt is considered failed."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(6540);const o={},c=i.createContext(o);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);