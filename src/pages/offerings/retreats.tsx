import Head from "next/head";
import OfferingHero from "@/components/OfferingHero";
import Button from "@/components/Button";
import SectionContainer from "@/components/SectionContainer";
import ImageSlider from "@/components/ImageSlider";

export default function Retreats() {
  return (
    <>
      <Head>
        <title>Retreats | Jessica Réa</title>
        <meta
          name="description"
          content="Activate Your True Self, Break Barriers and Cultivate Inner Peace through Energy Healing, Meditation and Coaching"
        />
      </Head>
      <OfferingHero
        title="Retreats"
        src="offerings/hero/retreats-big.webp"
        alt="Retreats"
      />
      <section>
        <SectionContainer>
          <div className="flex flex-col gap-8 items-center">
            <h2 className="text-center">Public speaking and Space Holding</h2>
            <p>
              Experience the Life Activation Day Retreat - Embrace a sacred and
              intimate journey of self-discovery and rejuvenation. Whether
              hosted in one of our exquisite global venues or the comfort of
              your own home, this retreat promises relaxation, activation, and
              personal growth like no other. We understand that taking time off
              for a lavish retreat isn&apos;t always feasible, which is why we
              believe everyone deserves the chance to elevate and connect with
              their inner selves. Our renowned network of exceptional yoga
              teachers and healers collaborates to manifest this transformative
              retreat.
            </p>
            <div className="flex flex-col gap-4">
              <h3>
                The retreat encompasses a harmonious blend of the following
                elements:
              </h3>
              <ul className="pl-4 list-disc">
                <li>
                  <strong>The Life Activation Healing:</strong> Unleash your
                  inner potential with this transformative healing session,
                  igniting a renewed sense of purpose and vitality within you.
                </li>
                <li>
                  <strong>Guided Meditation and Breathwork:</strong> Embark on a
                  journey of profound serenity as you explore the depths of your
                  consciousness through guided meditation and breathwork
                  practices.
                </li>
                <li>
                  <strong>Yin or Restorative Yoga:</strong> Nurture your body
                  and soul with gentle yet powerful yoga practices, allowing
                  your tensions to dissolve and embracing a sense of inner
                  peace.
                </li>
                <li>
                  <strong>Nutritious & Delightful Cuisine:</strong> Savor
                  delectable, health-conscious meals that nourish your body from
                  the inside out, leaving you feeling energized and invigorated.
                </li>
                <li>
                  <strong>Let&apos;s Get Sensual Workshop:</strong> Elements &
                  Senses - Discover the profound connection between your senses
                  and the world around you through this engaging and
                  enlightening workshop.
                </li>
              </ul>
            </div>
            <p>
              Whether you wish to book a personalized Life Activation Day
              Retreat for a private event, your office, or as a family
              gathering, we are delighted to curate a unique experience tailored
              to your needs. And if you can&apos;t join us just yet, stay tuned
              for future retreats that you can be a part of. Celebrations and
              birthdays are also warmly welcomed, making the retreat a memorable
              and special occasion for you and your loved ones.
            </p>
            <p>
              Step into a world of self-care and transformation with the Life
              Activation Day Retreat. Embrace this opportunity to awaken your
              true potential and find profound inner harmony.
            </p>
            <Button href="/contact">Get in Touch</Button>
          </div>
        </SectionContainer>
      </section>
      <ImageSlider />
      <section className="bg-accent">
        <SectionContainer>
          <div className="flex flex-col gap-8">
            <h2 className="text-center">Let&apos;s Get Sensual</h2>
            <h3 className="text-center">
              Elemental Senses - Alchemy Based Workshop
            </h3>
            <h4 className="text-center font-medium">
              Touch - Taste - Sight - Smell - Hear - Feel - Be
            </h4>
            <p>
              An alchemical awakening journey through of our senses. We explore
              many essences, foods, sounds, energies and textures in this
              exploration. The core of this workshop is to bring in the
              understanding of how sensitive we truly are and allow those to
              walk away from this workshop with tools to harness their
              sensitivity. We spend most of our time as humans distracting or
              occupying these senses through vices. This workshop is curated to
              awaken how we are able to truly connect back to self. Allowing us
              to understand how to rest the nervous system and harness our true
              sensitivity.
            </p>
            <p>
              Our senses are what allow us to interact and feel. So by learning
              how to harness our own power and sensitivity we are able to
              empower ourselves to navigate any moods or resistance to change
              that arrises.
            </p>
            <div className="flex flex-col gap-4 items-center">
              <h3 className="text-center">
                This workshop has 3 variations depending on the clientele and
                event.
              </h3>
              <ul className="pl-4 list-disc">
                <li>Energetic and Mindfulness.</li>
                <li>Spiritual and Shamanic.</li>
                <li>Sensual and Tantric</li>
              </ul>
            </div>
            <h4 className="text-center font-medium">
              This workshop is ideal for:
            </h4>
            <p>
              Retreats, couples, small groups or large groups. Private events or
              corporate.
            </p>
            <p>
              Tools used - aromatherapy, nourishment, energy, self-healing,
              music, dance, touch, movement, and chanting.
            </p>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
