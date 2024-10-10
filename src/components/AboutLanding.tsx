import Image from "next/image";
import Button from "./Button";
import SectionContainer from "./SectionContainer";

const landingPortraits = [
  {
    src: "/images/landing-portrait-1.webp",
  },
  {
    src: "/images/landing-portrait-2.webp",
  },
  {
    src: "/images/landing-portrait-3.webp",
  },
  {
    src: "/images/landing-portrait-4.webp",
  },
];

export default function AboutLanding() {
  return (
    <section className="filler-leaf">
      <SectionContainer>
        <div className="flex flex-col gap-20 items-center">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-xxl font-medium">Jessica Réa</h2>
            <div className="flex flex-col gap-4 tracking-wider text-justify">
              <p>
                Healing is a multi-layered process that goes beyond quick fixes.
                It&apos;s a transformative journey of self-discovery and growth.
              </p>
              <p>
                I am Jessica Rea, an energy healing practitioner and spiritual
                healer. I offer a range of powerful services designed to support
                your healing and personal development. Whether you&apos;re
                seeking The Life Activation, Ensofic Reiki, Bad Habit Removal,
                Positive Transformation Healings, Aura and Chakra healings, Max
                Meditation, One-on-One Journeys, Sacred Crystal Healings, or
                Spiritual Guidance, I am here to assist you. My services are
                available both in-person globally and online, providing
                accessibility and flexibility. From activations and healings to
                retreats, workshops, coaching, and meditations, I offer
                comprehensive support for your well-being and spiritual growth.
              </p>
              {/* <p>
              Through energy healings and activations, you&apos;ll experience
              the release of blockages and limiting beliefs that hinder your
              full potential. By letting go of unsupportive habits and creating
              space for positive change, you&apos;ll cultivate the life you
              truly desire. My healings, activations, and spiritual guidance
              empower you to overcome resistance and embrace your true
              potential. Each service I offer helps you integrate new energy and
              take confident steps toward living a purposeful, joyful, and
              empowered life.
            </p>
            <p>
              At the heart of my practice is
              <a href="/life-activation.html">The Life Activation</a>, a
              profoundly transformative modality. This powerful healing
              technique enables you to unlock your life&apos;s potential,
              revealing new depths and progress in your personal journey. By
              reawakening dormant aspects of your DNA and reconnecting you with
              your authentic self, The Life Activation illuminates the elements
              within you that are ready for transformation. It&apos;s a
              trajectory shift, a life alignment, and an empowerment.
            </p> */}
            </div>
            <Button href="/about">Read More</Button>
          </div>
          <div className="flex flex-col gap-8">
            {landingPortraits.map((portrait, index) => (
              <Image
                key={index}
                src={portrait.src}
                alt={`Jessica Rea portrait ${index}`}
                width={300}
                height={450}
                className="rounded shadow-md border border-accent"
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
