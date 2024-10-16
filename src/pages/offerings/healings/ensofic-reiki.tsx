import HealingHero from "@/components/HealingHero";
import SectionContainer from "@/components/SectionContainer";
import Testimonials from "@/components/Testimonials/Testimonials";
import Head from "next/head";

export default function EnsoficReiki() {
  return (
    <>
      <Head>
        <title>Ensofic Reiki | Jessica Réa</title>
        <meta
          name="description"
          content="Jessica Réa is a Healer and Spiritual Guide who empowers and activates her clients to go within and create a relationship with their true self."
        />
      </Head>
      <HealingHero
        title="Ensofic Reiki"
        src="ensofic-reiki-big.webp"
        alt="Ensofic Reiki"
      />
      <section>
        <SectionContainer>
          <div className="flex flex-col gap-8 items-center">
            <h2>Ensofic Ray Reiki: Healing for Body, Mind, and Spirit</h2>
            <div className="flex flex-col gap-2">
              <p>
                Experience the transformative power of Ensofic Ray Reiki, a
                healing modality that accelerates the healing process by
                aligning your body, soul, and spirit. This realignment brings
                your body back into balance, activating its innate ability to
                heal itself. <br />
                Reiki has the remarkable ability to flow to where it is most
                needed, creating a sense of balance, safety, and tranquility
                within you. Whether received in person or remotely, Ensofic Ray
                Reiki works as a cleansing ray of light, restoring your cells to
                their original state. It targets the physical body, the aura,
                emotions, and the energetic field, offering holistic healing on
                multiple levels.
              </p>
              <p>
                While Ensofic Reiki is particularly beneficial for physical body
                healing, it also extends its healing effects to the mental,
                spiritual, and emotional realms. A single session can be
                powerful and beneficial, but to achieve optimal results, I
                recommend a package of three sessions.
              </p>
              <p>
                For a comprehensive healing experience, a Reiki session can be
                combined with crystal, chakra, and aura healings, enhancing the
                energetic and transformative effects.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <h3 className="text-md">
                Ways in which Ensofic Ray Reiki can assist you:
              </h3>
              <div className="flex flex-col">
                <ul className="pl-4 list-[bengali]">
                  <li>Physical healing</li>
                  <li>Access to your full energetic potential</li>
                  <li>Reduced inflammation and digestive issues</li>
                  <li>Decreased anxiety, stress, and depression</li>
                  <li>
                    Guidance and support to break negative thought and
                    behavioral patterns
                  </li>
                  <li>Increased health and vitality</li>
                  <li>Energetic support in any situation</li>
                  <li>Clarity of mind and purpose</li>
                  <li>
                    Awakening a deeper desire for life and unleashing unlimited
                    potential
                  </li>
                  <li>
                    Heightened vibration of the body, releasing lower energies
                    that cause illness
                  </li>
                  <li>Restoration of internal unity</li>
                  <li>
                    Release of old wounds and suffering held within the body
                  </li>
                  <li>
                    Alignment of body, soul, and spirit for absolute harmony
                  </li>
                </ul>
                <ul className="pl-4 list-[bengali]">
                  <li>Improved circulation</li>
                  <li>Reduction of inflammation</li>
                  <li>Emotional healing and recovery from physical injuries</li>
                  <li>Stress and pain relief</li>
                  <li>Increased clarity and tranquility</li>
                  <li>Transmutation of negativity and negative ego</li>
                  <li>Infusion of pure passion and joy</li>
                  <li>Heightened physical and energetic intuition</li>
                  <li>Increased capacity for romance</li>
                  <li>Enhanced ability to recreate yourself</li>
                  <li>Mental and spiritual clarity</li>
                  <li>Boosted self-confidence and hope</li>
                  <li>Release of bad habits and thoughts</li>
                  <li>Healing for traumatic experiences</li>
                </ul>
              </div>
              <p>
                Allow the transformative energy of Ensofic Ray Reiki to guide
                you on a journey of healing, restoration, and empowerment.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>
      <Testimonials />
    </>
  );
}
