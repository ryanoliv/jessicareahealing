import Head from "next/head";
import Button from "@/components/Button";
import OfferingHero from "@/components/OfferingHero";
import SectionContainer from "@/components/SectionContainer";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function LifeActivation() {
  return (
    <>
      <Head>
        <title>The Life Activation | Jessica Réa</title>
        <meta
          name="description"
          content="A Powerful 90 Minute healing bringing radical life change, endless possibilities, transformational shifts and a deep healing. Highly recommended for those looking for a fresh start."
        />
      </Head>
      <OfferingHero
        title="The Life Activation"
        src="healings/hero/life-activation-big.webp"
        alt="The Life Activation"
      />
      <section>
        <SectionContainer>
          <div className="flex flex-col gap-16 items-center">
            <div className="flex flex-col gap-8">
              <h2>What is a Life Activation?</h2>
              <div className="flex flex-col gap-4">
                <p>
                  The life activation is a{" "}
                  <strong>powerful 90 minute healing</strong> which includes
                  Energy balancing / alignments (Crown Cap Removal, Balancing of
                  the Central Core, Clearing of the central core through toning
                  a sacred name of Source, Central Core Balancing, 16 Lotus
                  Petal Awakening, Elemental Line Balancing, Magnetic Line
                  Balancing, Chakra balancing, and Negative Crystal Removal).
                </p>
                <p>
                  The Life Activation is a sacred and powerful in-person healing
                  session that rebalances, realigns, and attunes your entire
                  energy system. It illuminates the parts of yourself that need
                  awakening while shedding light on the dark aspects that
                  require exposure and acceptance. By accessing your potential
                  in life, the Life Activation enables you to witness and
                  progress on your journey of growth.
                </p>
                <p>
                  The Healing also includes Homeopathic Elixir sprays to help
                  with the integration of the healing.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg text-center">
                &quot;The Purpose Finder, Trajectory Shifter & Path Aligner;
                Shining Light into the Dark - Revealing the Hidden&quot;
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p>
                Activate and awaken your full potential through the
                transformative process of the Life Activation. Experience a
                radical life change and create a profound shift in your journey.
                Say goodbye to limiting self-beliefs and reawaken joy, inviting
                more light into your life. Break through personal blocks, draw
                healthier boundaries, increase self-confidence, and improve your
                mental and physical health. This powerful 90-minute healing
                clears subconscious and genetic patterns, offering a truly
                transformative experience.
              </p>
              <p>
                During the Life Activation, your body is infused with pure
                Light, which penetrates and weaves its way through blockages,
                issues, and weaknesses, even those that may remain unnoticed. It
                serves as the initial step toward becoming your true and
                authentic self.
              </p>
              <p>
                In addition to the Life Activation itself, this session includes
                various energy alignments to establish peace and connection
                between your mind, body, and spirit. The treatment brings about
                a greater sense of clarity and understanding of your true
                essence and purpose.
              </p>
              <p>
                The Life Activation sets the groundwork for deeper healing and
                transformation. Its effects can be immediate and evident, while
                others may manifest more subtly over time.
              </p>
            </div>
            <Button href="/contact">Book Your Activation</Button>
          </div>
        </SectionContainer>
      </section>
      <Testimonials />
    </>
  );
}
