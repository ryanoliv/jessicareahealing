import Head from "next/head";
import OfferingsLinks from "@/components/OfferingsLinks";

export default function offerings() {
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
    </>
  );
}
