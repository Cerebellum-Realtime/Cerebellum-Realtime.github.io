import FadeInSection from "./FadeInSection";
import Link from "@docusaurus/Link";

function Component1() {
  return (
    <div className="sectionA mx-auto flex max-w-none flex-col-reverse place-items-center justify-between gap-5 bg-gray-100 px-8 py-8 lg:flex-row lg:py-20 2xl:px-48">
      <div className="shadow-l my-10 max-w-full bg-transparent 4xl:w-[60%] 5xl:w-[40%]">
        <video
          loop
          autoPlay
          muted
          playsInline
          className="mx-auto my-0 w-[100%] rounded-lg object-contain shadow-[0_0_10px_grey] dark:shadow-none"
        >
          <source src="/cerebellum/cbdeployVersion2.webm" type="video/webm" />
          <source src="/cerebellum/cbdeployVersion2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex-grow text-center">
        <h1 className="mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]">
          Hassle-free deployment with our CLI
        </h1>
        <p className="mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100">
          Deploy a scalable AWS infrastructure built specifically for WebSocket
          applications with minimal configuration
        </p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="sectionB mx-auto flex max-w-none flex-col items-center justify-between gap-5 bg-white px-8 py-8 lg:flex lg:flex-row lg:py-20 2xl:px-48">
      <div className="flex-grow py-0 text-center">
        <h1 className="mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]">
          Drop-in integration with our React SDK
        </h1>
        <p className="mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100">
          Designed for ease of use, requiring only a few lines of code to add
          WebSocket support to your React application
        </p>
      </div>
      <div className="my-10 w-[100%] max-w-full 4xl:w-[50%] 5xl:w-[40%]">
        <img
          src="/img/codeimage-snippet_16.svg"
          alt="A picture of the Cerebellum SDK in React"
          className="w-[100%] rounded border-2 object-contain align-top shadow-[0_0_10px_grey] dark:shadow-none"
        />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="sectionA mx-auto flex max-w-full flex-col place-items-center justify-center gap-5 bg-gray-200 px-8 py-8 lg:py-20 2xl:px-48">
      <div className="flex w-[100%] flex-col items-center justify-center md:mt-3 md:block lg:w-[60%] 2xl:w-[53%]">
        <div className="mb-5 flex flex-col items-center justify-center text-center md:mt-3">
          <h1 className="mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]">
            Powered by AWS
          </h1>
          <p className="mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100">
            Cerebellum is a cloud-native solution built on AWS, providing a
            scalable and resource-efficient architecture out of the box
          </p>
        </div>
        <div className="flex max-w-full justify-center">
          <img
            src="/img/Cerebellum-FullInfra.drawio.png"
            alt="Cerebellum architecture diagram"
            className="my-10 rounded object-fill align-top shadow-[0_0_10px_grey] dark:shadow-none"
          />
        </div>
        <div>
          <p className="text-large mb-2 text-center font-semibold uppercase tracking-wide text-gray-600 dark:text-slate-100">
            Technologies
          </p>
          <div className="flex justify-center gap-5 md:mt-3">
            <img
              className="my-auto ml-2 size-full w-14"
              src="/img/Amazon_Web_Services-Logo.wine.svg"
              alt="AWS Logo"
            />
            <img
              className="ml-2 size-full w-14"
              src="/img/CloudDevelopmentKit.png"
              alt="CDK Logo"
            />
            <img
              className="size-full w-14"
              src="/img/typescript.svg"
              alt="TypeScript Logo"
            />
            <img
              className="ml-2 size-full w-14"
              src="/img/docker.svg"
              alt="Docker Logo"
            />
            <img
              className="ml-2 size-full w-14"
              src="/img/react.png"
              alt="React Logo"
            />
            <img
              className="ml-2 size-full w-14"
              src="/img/redis.png"
              alt="Redis Logo"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col-reverse items-center justify-center gap-2 p-8 md:flex-row">
        <Link
          className="rounded-xl border-2 border-solid px-5 pb-3 pt-3 text-2xl text-cerebellumPurple-500 antialiased transition hover:scale-110 hover:text-cerebellumPurple-500 hover:no-underline dark:text-white sm:text-xl"
          to="/case-study"
        >
          Read Case Study
        </Link>
      </div>
    </div>
  );
}

// function Component4() {
//   return (
//     <div className="sectionA mx-auto flex max-w-full flex-col place-items-center justify-center gap-5 bg-white px-8 py-8 lg:py-20 2xl:px-48">
//       <div className="flex w-[100%] flex-col items-center justify-center md:mt-3 md:block lg:w-[60%] 2xl:w-[53%]">
//         <div className="mb-5 flex flex-col items-center justify-center text-center md:mt-3">
//           <h1 className="mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]">
//             Read our case study ;)
//           </h1>
//           <p className="mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100">
//             Cerebellum is a cloud-native solution built on AWS, providing a
//             scalable and resource-efficient architecture out of the box
//           </p>
//         </div>
//       </div>
//       <div className="flex w-full flex-col-reverse items-center justify-center gap-2 p-6 md:flex-row">
//         <Link
//           className="hover:bg-purple-800sm:text-xl rounded-xl border-2 border-solid px-5 pb-3 pt-3 antialiased transition hover:border-cerebellumBlue-400 hover:bg-cerebellumBlue-400 hover:text-white hover:no-underline"
//           to="/case-study"
//         >
//           Read Case Study
//         </Link>
//       </div>
//     </div>
//   );
// }

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="flex flex-col">
      <FadeInSection fadeDistance={350}>
        <Component1 />
      </FadeInSection>
      <FadeInSection fadeDistance={350}>
        <Component2 />
      </FadeInSection>

      <FadeInSection fadeDistance={350}>
        <Component3 />
      </FadeInSection>
      {/* 
      <FadeInSection fadeDistance={350}>
        <Component4 />
      </FadeInSection> */}
    </div>
  );
}
