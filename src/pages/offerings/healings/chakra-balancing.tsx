import Button from "@/components/Button";
import HealingHero from "@/components/HealingHero";
import SectionContainer from "@/components/SectionContainer";
import Head from "next/head";

export default function ChakraBalancing() {
  return (
    <>
      <Head>
        <title>Chakra Balancing | Jessica Réa</title>
        <meta
          name="description"
          content="Jessica Réa is a Healer and Spiritual Guide who empowers and activates her clients to go within and create a relationship with their true self."
        />
      </Head>
      <HealingHero
        title="Chakra Balancing"
        src="chakra-balancing-big.webp"
        alt="Chakra Balancing"
      />
      <section>
        <SectionContainer>
          <div className="flex flex-col gap-8 items-center">
            <p>
              Experience the transformative power of Chakra Balancing, a healing
              modality that focuses on rebalancing and aligning your energy
              centers. This healing process serves as the foundation of the Life
              Activation, bringing you into a state of alignment and refocusing
              your energy to restore balance and harmony.
            </p>
            <h2 className="text-md text-center">
              During the Chakra Balancing session, you will benefit from the
              following techniques:
            </h2>
            <ul className="pl-4 list-[bengali]">
              <li>Central Core Balancing</li>
              <li>16 Lotus Petal Awakening</li>
              <li>Elemental Line Balancing</li>
              <li>Magnetic Line Balancing</li>
              <li>Chakra balancing</li>
            </ul>
            <div className="flex flex-col gap-4">
              <p>
                When paired with an Aura Healing or Crystal Healing, the Chakra
                Balancing session becomes even more potent, correcting
                imbalances, aligning your energy centers, and infusing you with
                direction and strength.
              </p>
              <p>
                Experience the profound effects of Chakra Balancing as it
                harmonizes your energetic body, facilitating a sense of
                well-being, clarity, and vitality.
              </p>
            </div>
            <Button href="/contact">Book Your Healing</Button>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
