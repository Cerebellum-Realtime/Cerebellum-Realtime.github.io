import FadeInSection from "./FadeInSection";
import ReactPlayer from "react-player";

function Component1() {
  return (
    <div className="sectionA mx-auto flex max-w-full place-items-center justify-between gap-5 bg-gray-100 px-8 py-8 lg:py-20 2xl:px-48">
      <div className="shadow-l hidden w-[80%] bg-transparent md:block lg:w-[80%]">
        <figure>
          <video
            src="/cerebellum/cbdeployVersion2.mp4"
            loop
            autoPlay
            muted
            className="rounded-lg shadow-[0_0_10px_grey] dark:shadow-none"
          ></video>
        </figure>
      </div>
      <div className="text-center">
        <h1 className="mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]">
          Hassle-free deployment with our CLI
        </h1>
        <p className="mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100">
          Just a few simple commands to deploy a scalable AWS infrastructure
          built specifically for WebSocket applications
        </p>
        <figure>
          <img
            src="/img/case-study/3.1-demo.gif"
            className="diagram screenshot w-[90%] max-w-[450px] md:hidden"
            alt="A demonstration of Willow. On the left side of the screen is a PostgreSQL terminal. On the right side of the screen is a Redis cache shown in RedisInsight. An INSERT command is performed in the PostgreSQL terminal, and the inserted data automatically appears in the Redis cache."
          />
        </figure>
        <p className="text-large mb-2 font-semibold uppercase tracking-wide text-gray-600 dark:text-slate-100">
          Technologies
        </p>
        <div className="flex justify-center gap-5 md:mt-3">
          <img className="size-full w-14" src="/img/typescript.svg" />
          <img className="ml-2 size-full w-14" src="/img/docker.svg" />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="sectionB mx-auto flex max-w-full items-center justify-between gap-5 bg-white px-8 py-8 lg:py-20 2xl:px-48">
      <div className="py-0 text-center">
        <h1 className="mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]">
          Drop-in integration with our React SDK
        </h1>
        <img
          src="/img/Cerebellum-FullInfra.drawio.png"
          alt="source form"
          className="mx-auto w-[90%] max-w-[450px] rounded shadow-[0_0_10px_grey] dark:shadow-none md:hidden"
        />
        <p className="mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100">
          With a few of lines of code, Cerebellum seamlessly integrates into
          your React application
        </p>
      </div>
      <div className="hidden w-[100%] md:block lg:w-[60%]">
        <img
          src="/img/Cerebellum-FullInfra.drawio.png"
          alt="source form"
          className="rounded border-2 object-fill align-top shadow-[0_0_10px_grey] dark:shadow-none"
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
        <img
          src="/img/Cerebellum-FullInfra.drawio.png"
          alt="Producer Consumer Image"
          className="rounded object-fill align-top shadow-[0_0_10px_grey] dark:shadow-none"
        />
      </div>
    </div>
  );
}

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
    </div>
  );
}
