import { healingsCardContent } from "@/components/HealingsCard/HealingsCardContent";
import HealingsCard from "@/components/HealingsCard/HealingsCard";
import SectionContainer from "@/components/SectionContainer";
import Head from "next/head";
import Banner from "@/components/Banner";
import ServicesLists from "@/components/ServicesLists";
import Contact from "@/components/Contact";

export default function Healings() {
  return (
    <>
      <Head>
        <title>Healings | Jessica Réa</title>
        <meta
          name="description"
          content="Jessica offers a range of in person sacred healings and activations. These include the powerful Life Activation, Sacred Crystal Healings, Ensofic Reiki, Aura Healing and Chakra balancing."
        />
      </Head>
      <section className="filler-leaf">
        <SectionContainer>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-tertiary font-normal uppercase">Healings</h1>
              <p className="font-semibold">
                If you require any guidance or assistance in selecting the ideal
                healing modality for your specific needs, please don&apos;t
                hesitate to reach out to me. I am here to support you in finding
                the healing that resonates with you and aligns with your goals.
                Feel free to contact me, and together we can determine the best
                approach to meet your needs and help you on your healing
                journey.
              </p>
            </div>
            <div className="flex flex-col gap-20">
              {healingsCardContent.map((healingsCard) => (
                <HealingsCard
                  key={healingsCard.id}
                  imgSrc={healingsCard.imgSrc}
                  alt={healingsCard.alt}
                  healingTitle={healingsCard.healingTitle}
                  healingBody={healingsCard.healingBody}
                  btnText={healingsCard.btnText}
                  btnPath={healingsCard.btnPath}
                />
              ))}
            </div>
          </div>
        </SectionContainer>
        <Banner />
        <SectionContainer>
          <ServicesLists />
        </SectionContainer>
        <SectionContainer>
          <Contact />
        </SectionContainer>
      </section>
    </>
  );
}
