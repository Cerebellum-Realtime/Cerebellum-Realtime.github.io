"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[160],{7643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var s=t(4848),r=t(8453);const i={title:"General Methods",sidebar_position:4},c="General Methods",o={id:"SDK/General_Methods",title:"General Methods",description:"The general methods in the Cerebellum SDK provide a way to interact with the Cerebellum server and manage the connection to the server. These methods include methods for connecting to the server, disconnecting from it, and retrieving the socket ID.",source:"@site/docs/SDK/5. General_Methods.md",sourceDirName:"SDK",slug:"/SDK/General_Methods",permalink:"/docs/SDK/General_Methods",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"General Methods",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"React Hooks",permalink:"/docs/SDK/React_Hooks"},next:{title:"Channel Methods",permalink:"/docs/SDK/Channel_Methods"}},l={},h=[{value:"<code>on</code>",id:"on",level:2},{value:"<code>off</code>",id:"off",level:2},{value:"<code>connect</code>",id:"connect",level:2},{value:"<code>disconnect</code>",id:"disconnect",level:2},{value:"<code>createToken</code>",id:"createtoken",level:2},{value:"<code>auth</code>",id:"auth",level:2},{value:"<code>setToken</code>",id:"settoken",level:2},{value:"<code>getSocket</code>",id:"getsocket",level:2},{value:"<code>authErrorCallback</code>",id:"autherrorcallback",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"general-methods",children:"General Methods"}),"\n",(0,s.jsx)(n.p,{children:"The general methods in the Cerebellum SDK provide a way to interact with the Cerebellum server and manage the connection to the server. These methods include methods for connecting to the server, disconnecting from it, and retrieving the socket ID."}),"\n",(0,s.jsx)(n.h2,{id:"on",children:(0,s.jsx)(n.code,{children:"on"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"on(event: string, callback: (...args: any) => any): void\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description"})}),"\n",(0,s.jsx)(n.p,{children:"Subscribes to a specific event emitted by the server. The provided callback function will be executed whenever the event is triggered."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"event: string"})}),"\n\xa0 - ",(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"event"})," parameter is a string that represents the name of the event to listen for. It is used to specify the type of event to listen for."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"callback: (...args: any) => any"})}),"\n\xa0 - ",(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"callback"})," parameter is a function that takes any number of arguments of any type and returns a value of any type. It is used to handle the event triggered by the ",(0,s.jsx)(n.code,{children:"on"})," method."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'cerebellum.on("connection", (socket) => {\n  console.log("Connected with socket ID:", cerebellum.socketId);\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Explanation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"on"}),' method is used to listen for the "connection" event on the ',(0,s.jsx)(n.code,{children:"cerebellum"})," instance. When the event is triggered, the provided callback function is executed with the socket object as an argument."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"off",children:(0,s.jsx)(n.code,{children:"off"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"off(event: string, callback: (...args: any) => any): void\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description"})}),"\n",(0,s.jsx)(n.p,{children:"Removes a callback function from listening to a specific event on the Cerebellum instance. The provided callback function will no longer be executed when the event is triggered."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"event: string"})}),"\n\xa0 - ",(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"event"})," parameter is a string that represents the name of the event to remove the callback function from. It is used to specify the type of event to remove the callback function from."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"callback: (...args: any) => any"})}),"\n\xa0 - ",(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"callback"})," parameter is a function that takes any number of arguments of any type and returns a value of any type. It is used to remove the callback function from the event listener."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'cerebellum.off("connection", (socket) => {\n  console.log("Disconnected with socket ID:", cerebellum.socketId);\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Explanation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"off"}),' method is used to remove the callback function for the "connection" event on the ',(0,s.jsx)(n.code,{children:"cerebellum"})," instance. When the event is triggered, the provided callback function will no longer be executed."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"connect",children:(0,s.jsx)(n.code,{children:"connect"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"connect(): void\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description"})}),"\n",(0,s.jsx)(n.p,{children:"Establishes a connection to the Cerebellum server. This method is used to connect to the Cerebellum server and establish a WebSocket connection."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"cerebellum.connect();\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Explanation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"connect"})," method is called to establish a connection to the Cerebellum server."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"disconnect",children:(0,s.jsx)(n.code,{children:"disconnect"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"disconnect(): void\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description"})}),"\n",(0,s.jsx)(n.p,{children:"This method is used to disconnect from the Cerebellum server and close the WebSocket connection."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"cerebellum.disconnect();\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Explanation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"disconnect"})," method is called to disconnect from the Cerebellum server."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"createtoken",children:(0,s.jsx)(n.code,{children:"createToken"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"createToken(apiKey: string, payload: JWTPayload): Promise<void>\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description"})}),"\n",(0,s.jsx)(n.p,{children:"This method is used to create a JWT token using an API key and a payload. The token is then used to authenticate with the Cerebellum server."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"DO NOT USE THIS METHOD IN THE FRONT-END CODE IN PRODUCTION"})}),"\n",(0,s.jsx)(n.p,{children:"If this method is used in the front-end code in production, your API key will be exposed to the client-side code. This is a security risk."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"apiKey: string"})}),"\n\xa0 - ",(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"apiKey"})," parameter is a string that represents the API key used for authentication. It is used to create the JWT token."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"payload: JWTPayload"})}),"\n\xa0 - ",(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"payload"})," parameter is an object that represents the data to be included in the JWT token. It is used to create the JWT token."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Return Type"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Promise<void>"})}),"\n\xa0 - ",(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"createToken"})," method returns a Promise that resolves when the token is created. If the token creation is successful, the Promise resolves. If there is an error, the Promise rejects with an error message."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const payload = {\n  userId: "123",\n  roles: ["admin"],\n};\n\ncerebellum\n  .createToken("API_KEY", payload)\n  .then(() => {\n    console.log("Token created successfully");\n  })\n  .catch((error) => {\n    console.error("Error creating token:", error);\n  });\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Explanation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"createToken"}),' method is called with the API key "API_KEY" and the payload object. The method returns a Promise that resolves when the token is created. If the token creation is successful, the Promise resolves. If there is an error, the Promise rejects with an error message.']}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"auth",children:(0,s.jsx)(n.code,{children:"auth"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'auth(\n\xa0 authEndpoint: string,\n\xa0 method: "GET" | "POST" = "POST",\n\xa0 payload?: object\n): Promise<void>\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description"})}),"\n",(0,s.jsxs)(n.p,{children:["This method is used to have a cerebellum instance retrieve a signed Token from an authentication endpoint. The returned token is saved to the cerebellum instance and can be used to authenticate with the Cerebellum server. When ",(0,s.jsx)(n.code,{children:"cerebellum.connect()"})," is called, the saved token will be used to authenticate with the Cerebellum server."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"authEndpoint: string"})}),"\n\xa0 - ",(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"authEndpoint"})," parameter is a string that represents the endpoint URL where the authentication request will be sent. It is used to specify the endpoint where the authentication request will be sent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:'method: "GET" | "POST" = "POST"'})}),"\n\xa0 - ",(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"method"}),' parameter is a string that represents the HTTP method to be used for the authentication request. It is used to specify the HTTP method to be used for the authentication request. It can be either "GET" or "POST", with a default value of "POST" if not provided.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"payload?: object"})}),"\n\xa0 - ",(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"payload"})," parameter is an optional object that represents the data to be sent along with the authentication request. It is used to specify the data to be sent along with the authentication request."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Return Type"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Promise<void>"})}),"\n\xa0 - ",(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"auth"})," method returns a Promise that resolves when the authentication request is successful. If the authentication request is successful, the Promise resolves. If there is an error, the Promise rejects with an error message."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'cerebellum\n  .auth("https://example.com/login", "POST", {\n    username: "user1",\n    password: "password123",\n  })\n  .then(() => {\n    console.log("Authentication successful");\n  })\n  .catch((error) => {\n    console.error("Error authenticating:", error);\n  });\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Explanation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"auth"}),' method is called with the endpoint URL "',(0,s.jsx)(n.a,{href:"https://example.com/login",children:"https://example.com/login"}),'", the HTTP method "POST", and the payload object. The method returns a Promise that resolves when the authentication request is successful. If the authentication request is successful, the Promise resolves. If there is an error, the Promise rejects with an error message.']}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"settoken",children:(0,s.jsx)(n.code,{children:"setToken"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"setToken(token: string): void\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description"})}),"\n",(0,s.jsxs)(n.p,{children:["This method is used to set the token for authentication in the Cerebellum instance. This token will be used to authenticate with the Cerebellum server when ",(0,s.jsx)(n.code,{children:"cerebellum.connect()"})," is called."]}),"\n",(0,s.jsxs)(n.p,{children:["This method is used if you would like to manually set the token for authentication in the Cerebellum instance, instead of using the ",(0,s.jsx)(n.code,{children:"auth"})," method."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"token: string"})}),"\n\xa0 - ",(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"token"})," parameter is a string that represents the authentication token that will be set for the socket connection. It is used to set the token for authentication."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'cerebellum.setToken("TOKEN");\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Explanation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"setToken"}),' method is called with the token "TOKEN". The method sets the token for authentication in the ',(0,s.jsx)(n.code,{children:"cerebellum"})," instance. This token will be used to authenticate with the Cerebellum server when ",(0,s.jsx)(n.code,{children:"cerebellum.connect()"})," is called"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"getsocket",children:(0,s.jsx)(n.code,{children:"getSocket"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"getSocket(): Socket\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description"})}),"\n",(0,s.jsxs)(n.p,{children:["This method returns the socket object associated with the Cerebellum instance. This socket object can be used to interact with the Cerebellum server directly. This socket is the same socket used by ",(0,s.jsx)(n.code,{children:"socket.io"})," to communicate with the Cerebellum server. This is useful if you need to perform additional operations with the socket.io library, that are not provided by the Cerebellum SDK."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const socket = cerebellum.getSocket();\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Explanation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"getSocket"})," method is called to retrieve the socket object associated with the ",(0,s.jsx)(n.code,{children:"cerebellum"})," instance. The returned socket object can be used to interact with the Cerebellum server directly."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"autherrorcallback",children:(0,s.jsx)(n.code,{children:"authErrorCallback"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"authErrorCallback(callback: (...args: any) => any): void\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description"})}),"\n",(0,s.jsx)(n.p,{children:"This method is used to handle authentication errors in the Cerebellum instance. If the authentication with the Cerebellum server fails, the provided callback function will be called with the error message."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"callback: (...args: any) => any"})}),"\n\xa0 - ",(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"callback"}),' parameter is a function that takes any number of arguments of any type and returns a value of any type. It is used to handle the authentication error. The function is called when the "connect_error" event is triggered on the socket object.']}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'cerebellum.authErrorCallback((error) => {\n  console.error("Authentication error:", error);\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Explanation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"authErrorCallback"})," method is called when authentication fails with the cerebellum server."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(6540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);