import CodeBlock from "@theme/CodeBlock";
import { useState } from "react";

const usePresenceCodeString = `import { usePresence } from "@cerebellum/sdk";

const OnlineUsers = ({ user }) => {
  const { presenceData } = usePresence("OnlineUsers", {
    user,
  });

  return (
    <div>
      <h1>Online Users</h1>
      {presenceData.map((data) => (
        <div key={data.socketId} className="presence-user">
          {data.user}
        </div>
      ))}
    </div>
  );
};`;

const useChannelCodeString = `import { useChannel } from "@cerebellum/sdk";

const MyComponent = () => {
  const [messages, setMessages] = useState([]);
  const { channelName, publish } = useChannel("general", (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  });
};

return (
  <div>
    <ul>
      {messages.map((message) => (
        <li key={message.createdAt}>{message.content}</li>
      ))}
    </ul>
  </div>
);
`;

const useCerebellumCodeString = `// Install the SDK
npm install @cerebellum/sdk


// Start the Cerebellum server to develop locally
npx cerebellum-start


// use the CerebellumProvider to start developing your application
import { CerebellumProvider } from "@cerebellum/sdk";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CerebellumProvider>
    <App />
  </CerebellumProvider>
);


`;

const SDKSection = () => {
  const [selectedTab, setSelectedTab] = useState("useCerebellum");
  const getCodeString = () => {
    switch (selectedTab) {
      case "usePresence":
        return usePresenceCodeString;
      case "useChannel":
        return useChannelCodeString;
      case "useCerebellum":
        return useCerebellumCodeString;
      default:
        return "usePresence";
    }
  };

  return (
    <div className="sectionB section-mobile mx-auto flex max-w-screen-3xl flex-col items-center justify-between gap-5 bg-white px-8 py-8 lg:flex lg:flex-row lg:py-20">
      <div className="flex-grow py-0">
        <h1 className="mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]">
          Drop-in integration with our TypeScript SDK
        </h1>
        <p className="mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100">
          Whether starting from scratch or enhancing an existing application,
          use the SDK to enable WebSocket functionality with:
        </p>
        <ul className="ml-4 list-disc text-lg text-gray-600 dark:text-slate-100">
          <li>Full type support</li>
          <li>Custom built-in React hooks</li>
          <li>Fully-provisioned Docker environment for local development</li>
        </ul>
      </div>
      <div className="my-10 h-full w-full lg:w-[800px] 4xl:w-[60%]">
        <div className="text-baseline hidden flex-row justify-center pb-1 text-center lg:flex">
          <div
            className={`${selectedTab === "useCerebellum" ? "selected" : ""} mx-auto cursor-pointer hover:border-b-2`}
            onClick={() => setSelectedTab("useCerebellum")}
          >
            Easily Develop on Localhost
          </div>
          <div
            className={`${selectedTab === "usePresence" ? "selected" : ""} mx-auto cursor-pointer`}
            onClick={() => setSelectedTab("usePresence")}
          >
            User Presence Hook
          </div>
          <div
            className={`${selectedTab === "useChannel" ? "selected" : ""} mx-auto cursor-pointer hover:border-b-2`}
            onClick={() => setSelectedTab("useChannel")}
          >
            Channels Hook
          </div>
        </div>
        <CodeBlock
          language="jsx"
          className="shadow-l overflow-auto overflow-x-auto rounded border-2 align-top text-sm shadow-[0_0_10px_grey] dark:shadow-none md:text-base xl:w-[700px]"
        >
          {getCodeString()}
        </CodeBlock>
      </div>
    </div>
  );
};

export default SDKSection;
