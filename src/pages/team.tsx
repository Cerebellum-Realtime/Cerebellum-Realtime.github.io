import Layout from "@theme/Layout";
import Member from "../components/HomepageFeatures/Member";

const Team = () => {
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
              image="https://dynamic-assets.gather.town/v2/sprite-profile/avatar-ByUueZ_UR7eb80XdPy3m.TKhLrRrIw1RdgSbP6w1G.Gk3dJr3nE15MeVt54zCM.r3f1cfuESoyyxW4lUUuB.ua6kq1m7YDtCPmdkEMGa.jWRxPyatM2P0bdzSnf50.E9eKT1XBkaWQnXyxKs3I.Sowlqj4RQBynJKnXFm_p.DJ3o1pYKQwu4by8Fu46O.png?d=."
              location="Dallas, TX"
              personalWebsite="https://austinnelson.me/"
              github="https://github.com/nelson030"
              linkedin="https://www.linkedin.com/in/austin-nelson-009556216/"
              email="nelsonaustin11@gmail.com"
            />
            <Member
              name="Avery Littlemore"
              image="https://dynamic-assets.gather.town/v2/sprite-profile/avatar-KPK1RNe5O32vJ8IhOicy.jfDstPwOt5ylgXmAV5MP.q59OoBaqEImtT1VPBfv3.grBN5xvURkfu6pMDr5Qu.jWRxPyatM2P0bdzSnf50.png?d=."
              location="Toronto, Canada"
              personalWebsite="https://www.averylittlemore.xyz/"
              github="https://github.com/Avery-Littlemore"
              linkedin="https://www.linkedin.com/in/avery-littlemore/"
              email="avery.d.littlemore@gmail.com"
            />
            <Member
              name="Dylan Spyer"
              image="https://dynamic-assets.gather.town/v2/sprite-profile/avatar-BEyC1iiDaoaARIjdAI4e.ajYd6R7kSfSuXp5wyacV.pa0TKP5AgAzrPBnJqShI.-MFRXXAJSAGVugzljt12.KKnwTu4eQJC_2bE2qMnE.UJy0fOWWJ9sdtdTfnVDz.uj1LBrRXG9r5jcSSMFjs.CLumQltARfCaKsKf2eWY.png?d=."
              location="Austin, TX"
              personalWebsite="https://www.dylanspyer.com"
              github="https://github.com/dylanspyer"
              linkedin="https://www.linkedin.com/in/dylan-spyer/"
              email="dylanspyer@gmail.com"
            />
            <Member
              name="Will Conrad"
              image="https://dynamic-assets.gather.town/v2/sprite-profile/avatar-ty0CoZao8eIAgVnSKFg7.AgRQf0McpPKEmNDfBFma.mEnAamedSiG5KSrqLaax.VnD_lobfTaapFHP9dHFb.LR6JiKUSn5bCkOM1KDkS.jWRxPyatM2P0bdzSnf50.png?d=."
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
