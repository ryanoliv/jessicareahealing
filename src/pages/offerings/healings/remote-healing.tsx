import OfferingHero from "@/components/OfferingHero";
import SectionContainer from "@/components/SectionContainer";
import Testimonials from "@/components/Testimonials/Testimonials";
import Head from "next/head";

export default function RemoteHealing() {
  return (
    <>
      <Head>
        <title>Remote Healing | Jessica Réa</title>
        <meta
          name="description"
          content="Jessica Réa is a Healer and Spiritual Guide who empowers and activates her clients to go within and create a relationship with their true self."
        />
      </Head>
      <OfferingHero
        title="Remote Healing"
        src="healings/hero/remote-healing-big.webp"
        alt="Remote Healing"
      />
      <section>
        <SectionContainer>
          <div className="flex flex-col gap-8 items-center">
            <h2>Reiki Distance Healings</h2>
            <h3 className="text-center text-md">
              Physical Body Reiki & Bad Habit Removal: Online Healing Services
            </h3>
            <p>
              Experience the transformative power of Physical Body Reiki and Bad
              Habit Removal from the comfort of your own home, as these powerful
              healings are now available worldwide through online sessions.
            </p>
            <p>
              Ensofic Ray Reiki accelerates the healing process by aligning your
              body, soul, and spirit. By bringing your body back into balance,
              Reiki activates its innate ability to heal itself. Reiki has the
              remarkable ability to intuitively go where it is most needed,
              creating a sense of balance, safety, and tranquility within you.
              Whether addressing physical ailments, emotional challenges, or
              energetic imbalances, Reiki serves as a powerful and effective
              healing energy. Ensofic Reiki acts as a cleansing ray of light
              that flows through the body, returning cells to their original
              state. It targets not only the physical body but also the aura,
              emotions, and energetic field, providing holistic healing on
              multiple levels.
            </p>
            <p>
              Additionally, Bad Habit Removal offers support in letting go of
              negative patterns and habits that no longer serve you. You have
              the opportunity to choose one negative habit per session that you
              would like to release. Whether it&apos;s an addiction, disordered
              eating, self-limiting beliefs, or other negative behaviors, Bad
              Habit Removal empowers you to release the attachment to these
              habits, setting yourself free. This powerful healing helps you
              shift negative patterns embedded in the subconscious mind, paving
              the way for positive change and transformation.
            </p>
            <p>
              Embrace the healing benefits of Physical Body Reiki and Bad Habit
              Removal through online sessions, no matter where you are in the
              world. Experience the transformative power of energy healing and
              release the attachment to negative habits, allowing your body and
              mind to move toward greater balance, well-being, and empowerment.
            </p>
          </div>
        </SectionContainer>
      </section>
      <Testimonials />
    </>
  );
}
