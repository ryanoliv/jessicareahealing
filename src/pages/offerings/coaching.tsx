import OfferingHero from "@/components/OfferingHero";
import SectionContainer from "@/components/SectionContainer";
import Testimonials from "@/components/Testimonials/Testimonials";
import Head from "next/head";

export default function Coaching() {
  return (
    <>
      <Head>
        <title>Coaching | Jessica Réa</title>
        <meta
          name="description"
          content="Activate Your True Self, Break Barriers and Cultivate Inner Peace through Energy Healing, Meditation and Coaching"
        />
      </Head>
      <OfferingHero
        title="Coaching"
        src="offerings/hero/coaching-big.webp"
        alt="Coaching"
      />
      <section>
        <SectionContainer>
          <div className="flex flex-col gap-8">
            <p>
              I take a unique and personalized approach to each individual
              client, focusing on empowerment through physical, mental,
              emotional, and spiritual healing modalities, as well as
              mindfulness practices. My deep passion lies in helping others
              discover the connection with their own infinite potential. By
              holding a nurturing space for my clients, I guide them to delve
              deeper into nourishing their bodies, minds, and souls, enabling
              them to lead exciting and empowered lives through nutrition,
              well-being, and alignment.
            </p>
            <p>
              With a background in recovery, self-help, personal growth, and
              various healing modalities, I bring a fresh perspective to
              life&apos;s challenges, situations, and issues. Together, we
              create an individualized path for each person, working towards
              personal goals while ensuring that the steps along the way are
              both enjoyable and transformative. Whether in-person or online, I
              am dedicated to serving you and supporting your journey.
            </p>
          </div>
        </SectionContainer>
      </section>
      <Testimonials />
    </>
  );
}
