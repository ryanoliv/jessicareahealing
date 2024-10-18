import Head from "next/head";
import OfferingHero from "@/components/OfferingHero";
import SectionContainer from "@/components/SectionContainer";

export default function Workshops() {
  return (
    <>
      <Head>
        <title>Workshops | Jessica Réa</title>
        <meta
          name="description"
          content="Activate Your True Self, Break Barriers and Cultivate Inner Peace through Energy Healing, Meditation and Coaching"
        />
      </Head>
      <OfferingHero
        title="Workshops"
        src="offerings/hero/workshops-big.webp"
        alt="Workshops"
      />
      <section>
        <SectionContainer>
          <div className="flex flex-col gap-8">
            <h2 className="text-center">Workshops: Let&apos;s Get Sensual</h2>
            <h3 className="text-center">
              Elemental Senses and Alchemy-Based Workshop
            </h3>
            <h4 className="text-center">
              Touch - Taste - Sight - Smell - Hear - Feel - Be
            </h4>
            <p>
              Embark on an alchemical awakening journey through our senses with
              our workshop, &quot;Let&apos;s Get Sensual.&quot; In this
              exploration, we delve into various essences, foods, sounds,
              energies, and textures to awaken our senses and deepen our
              connection with self. The core purpose of this workshop is to
              bring awareness to our innate sensitivity and provide participants
              with practical tools to harness and honor their own sensitivity.
            </p>
            <p>
              As humans, we often distract or occupy our senses through various
              vices, but this workshop is designed to awaken our ability to
              truly connect back to ourselves, allowing us to rest our nervous
              systems and embrace our true sensitivity. Our senses are the
              portals through which we interact with the world and experience
              life. By learning how to harness our own power and sensitivity, we
              empower ourselves to navigate any mood or resistance to change
              that may arise.
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-center">
                <strong>
                  The &quot;Let&apos;s Get Sensual.&quot; workshop offers three
                  variations to cater to different clientele and events:
                </strong>
              </p>
              <ul className="pl-4 list-disc">
                <li>
                  Energetic & Mindfulness: This variation focuses on energy work
                  and mindfulness practices.
                </li>
                <li>
                  Spiritual & Shamanic: This variation incorporates spiritual
                  and shamanic elements.
                </li>
                <li>
                  Sensual & Tantric: This variation delves into sensual and
                  tantric practices.
                </li>
              </ul>
            </div>
            <p>
              This workshop is suitable for retreats, couples, small groups, or
              large groups, and can be tailored to private events or corporate
              settings.
            </p>
            <p>
              Tools used in the workshop include aromatherapy, nourishment,
              energy work, self-healing techniques, music, dance, touch,
              movement, and chanting. Through these modalities, participants are
              invited to explore and embrace their senses, cultivating a deeper
              connection with themselves and the world around them.
            </p>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
