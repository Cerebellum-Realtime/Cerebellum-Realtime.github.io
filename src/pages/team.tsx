import { useState } from "react";
import Layout from "@theme/Layout";
import Member from "../components/HomepageFeatures/Member";
import useKonamiCode from "../hooks/useKonomaiCode";

const Team = () => {
  const [isKonamiCode, setIsKonamiCode] = useState(false);
  useKonamiCode(() => {
    setIsKonamiCode(true);
    setTimeout(() => {
      setIsKonamiCode(false);
    }, 5000);
  });

  return (
    <Layout>
      <section className="sectionB" id="team">
        <article className="mx-auto flex max-w-6xl flex-col justify-center gap-8 px-6 py-20">
          <h2 className="lp-para mb-2 text-center text-3xl font-semibold tracking-wide text-gray-600 dark:text-gray-300">
            Developed by
          </h2>
          <div className="mx-auto flex flex-col gap-2 md:flex-row md:gap-8">
            <Member
              name="Austin Nelson"
              image={
                isKonamiCode
                  ? "/team/gather/Austin_Gather.png"
                  : "/team/Austin.jpg"
              }
              location="Dallas, TX"
              github="https://github.com/nelson030"
              linkedin="https://www.linkedin.com/in/austin-nelson-009556216/"
              email="nelsonaustin11@gmail.com"
            />
            <Member
              name="Avery Littlemore"
              image={
                isKonamiCode
                  ? "/team/gather/Avery_Gather.png"
                  : "/team/Avery.jpg"
              }
              location="Toronto, Canada"
              github="https://github.com/Avery-Littlemore"
              linkedin="https://www.linkedin.com/in/avery-littlemore/"
              email="avery.d.littlemore@gmail.com"
            />
            <Member
              name="Dylan Spyer"
              image={
                isKonamiCode
                  ? "/team/gather/Dylan_Gather.png"
                  : "/team/Dylan.png"
              }
              location="Austin, TX"
              github="https://github.com/dylanspyer"
              linkedin="https://www.linkedin.com/in/dylan-spyer/"
              email="dylanspyer@gmail.com"
            />
            <Member
              name="Will Conrad"
              image={
                isKonamiCode ? "/team/gather/Will_Gather.png" : "/team/Will.jpg"
              }
              location="Houston, TX"
              personalWebsite="https://willconrad.dev"
              github="https://github.com/wconrad265"
              linkedin="https://www.linkedin.com/in/willhconrad/"
              email="w.conrad@outlook.com"
            />
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Team;
