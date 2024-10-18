import Button from "@/components/Button";
import OfferingHero from "@/components/OfferingHero";
import SectionContainer from "@/components/SectionContainer";
import Head from "next/head";

export default function AuraHealing() {
  return (
    <>
      <Head>
        <title>Aura Healing | Jessica Réa</title>
        <meta
          name="description"
          content="Jessica Réa is a Healer and Spiritual Guide who empowers and activates her clients to go within and create a relationship with their true self."
        />
      </Head>
      <OfferingHero
        title="Aura Healing"
        src="healings/hero/aura-healing-big.webp"
        alt="Aura Healing"
      />
      <section>
        <SectionContainer>
          <div className="flex flex-col gap-4 items-center">
            <p>
              Your aura, the electromagnetic or energy field surrounding your
              physical body, is your energetic boundary that acts as a
              protective shield from the outside world. It keeps you balanced
              and in harmony while reducing the impact of others&apos; thoughts
              and emotions, serving as a literal boundary between self and
              others.
            </p>
            <p>
              Unfortunately, your aura can become damaged or weakened by various
              factors such as lack of sleep, negative influences, substance
              abuse, excessive caffeine consumption, stress, or anxiety.
            </p>
            <p>
              Aura Healing is a transformative process that filters and cleanses
              your aura, repairing any holes or damage using pure energy and
              light. This healing technique enables you to feel less affected by
              the world around you, and with increased energy, you can
              intuitively experience a sense of peace and hold more light within
              yourself.
            </p>
            <p>
              While a single session can be powerful, we highly recommend a
              series of three sessions for a complete aura repair. It is
              important to allow at least seven days between sessions to ensure
              the integration of the energy.
            </p>
            <p>
              Experience the profound effects of Aura Healing as your energetic
              field is restored, rejuvenated, and strengthened, supporting your
              overall well-being and energetic balance.
            </p>
            <Button href="/contact">Book Your Healing</Button>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
