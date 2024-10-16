import Head from "next/head";
import OfferingsLinks from "@/components/OfferingsLinks";
import SectionContainer from "@/components/SectionContainer";
import Banner from "@/components/Banner";
import ServicesLists from "@/components/ServicesLists";

export default function Offerings() {
  return (
    <>
      <Head>
        <title>Offerings | Jessica Réa</title>
        <meta
          name="description"
          content="Activate Your True Self, Break Barriers and Cultivate Inner Peace through Energy Healing, Meditation and Coaching"
        />
      </Head>
      <OfferingsLinks />
      <Banner />
      <section>
        <SectionContainer>
          <ServicesLists />
        </SectionContainer>
      </section>
    </>
  );
}
