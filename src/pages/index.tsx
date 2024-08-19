import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section
      id="hero"
      // className="- text-8xll flex h-lvh scroll-mt-60 flex-col items-center justify-center gap-8 bg-gradient-to-r from-cerebellumPurple-500 to-cerebellumPink-500 p-6 text-2xl sm:flex-col"
      className="text-8xll flex h-lvh scroll-mt-60 flex-col items-center justify-center gap-8 bg-gradient-to-br from-left via-middle to-right to-90% p-6 text-2xl sm:flex-col"
      // className="bg-gradient-to-r from-cerebellumPurple to-cerebellumPink  flex flex-col justify-center sm:flex-col p-6 items-center gap-8 scroll-mt-40 h-lvh"
    >
      <article className="relative max-w-full px-4 py-8 pb-14 font-sans text-white antialiased md:py-10">
        <h1 className="font-main mx-auto mb-2 max-w-4xl text-center text-4xl font-medium leading-[48px] tracking-tighter text-white md:text-5xl md:leading-tight">
          A drop-in infrastructure and library for
          <br />
          <em className="text-white">scalable realtime applications </em>
        </h1>
        <p className="md:text mx-auto mt-1 max-w-6xl text-center text-xl leading-normal text-white md:mt-2 md:leading-10">
          <em>Cerebellum</em> is an open-source solution for scaling
          Websocket-based applications
        </p>
        <div className="mt-5 flex w-full flex-col-reverse items-center justify-center gap-2 p-6 md:flex-row">
          <Link
            className="rounded-xl border-2 border-solid px-5 pb-3 pt-3 text-white antialiased transition hover:scale-110 hover:text-white hover:no-underline sm:text-xl"
            to="/case-study"
          >
            Read Case Study
          </Link>
        </div>
      </article>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
