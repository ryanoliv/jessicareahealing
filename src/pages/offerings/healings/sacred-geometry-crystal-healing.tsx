import Head from "next/head";
import HealingHero from "@/components/HealingHero";
import SectionContainer from "@/components/SectionContainer";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function SacredGeometryCrystalHealing() {
  return (
    <>
      <Head>
        <title>Sacred Geometry Crystal Healing | Jessica Réa</title>
        <meta
          name="description"
          content="Jessica Réa is a Healer and Spiritual Guide who empowers and activates her clients to go within and create a relationship with their true self."
        />
      </Head>
      <HealingHero
        title="Sacred Geometry Crystal Healing"
        src="sacred-geometry-big.webp"
        alt="Sacred Geometry Crystal"
      />
      <section>
        <SectionContainer>
          <div className="flex flex-col gap-8">
            <p>
              Sacred Geometrical healings offer a profound realignment of the
              sacred geometrical structure within your mind, soul, and body.
              This vibrational healing method serves as a catalyst to reconnect
              you with your true nature when you&apos;ve veered out of
              alignment. Additionally, there are various crystal healing types
              available, each focusing on a different aspect of the self. While
              these healings are recommended together for a comprehensive
              experience, they can also be enjoyed individually. During the
              session, you have the opportunity to enhance, increase, or bring
              healing to three specific areas of focus. Through this unique
              healing experience, you will be guided into a deep meditative
              Theta state, facilitating a profound transformative journey.
            </p>
            <div className="flex flex-col gap-4 items-center">
              <h2 className="text-md">The available areas of focus include</h2>
              <div className="flex flex-col">
                <ul className="pl-4 list-[bengali]">
                  <li>Physical Body</li>
                  <li>Mind</li>
                  <li>Emotions</li>
                  <li>Empowerment</li>
                </ul>
                <ul className="pl-4 list-[bengali]">
                  <li>Libido Enhancement</li>
                  <li>Time Management</li>
                  <li>Internal Physical Problems</li>
                  <li>Mental Purity</li>
                </ul>
              </div>
            </div>
            <p>
              As you receive this powerful healing, its effects will gracefully
              weave into your life, and soon you will begin to notice the
              positive shifts taking place. For an even more comprehensive
              healing experience, consider pairing the Sacred Geometrical
              Healings with Crystal, Aura, Ensofic Reiki, or Chakra healings.
            </p>
          </div>
        </SectionContainer>
      </section>
      <Testimonials />
    </>
  );
}
