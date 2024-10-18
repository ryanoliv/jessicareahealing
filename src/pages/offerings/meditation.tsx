import Head from "next/head";
import Button from "@/components/Button";
import OfferingHero from "@/components/OfferingHero";
import SectionContainer from "@/components/SectionContainer";

export default function Meditation() {
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
        title="Meditation"
        src="offerings/hero/meditation-big.webp"
        alt="Meditation"
      />
      <section>
        <SectionContainer>
          <div className="flex flex-col gap-8 items-center">
            <h2 className="text-center">
              In Person & Online: one-on-one or Group Sessions
            </h2>
            <p>
              Welcome to the world of meditation guided by a Max Meditation
              Guide. Allow me to hold space for you and guide you into a state
              of deep relaxation, thought management, inner peace, centeredness,
              enhanced focus, and heightened intuition. Whether in-person or
              online, I offer individual and group sessions tailored to meet
              your meditation needs.
            </p>
            <p>
              The Max Meditation System™ is designed to teach meditation to
              individuals of all experience levels. Online sessions are offered
              by donation, and I warmly welcome both beginners and experienced
              meditators. Rest assured that I will be there with you every step
              of the way, ensuring that you fully relax, manage your thoughts,
              and reach a state of inner peace.
            </p>
            <p>
              Drawing from ancient techniques learned from esteemed teachers in
              India and Tibet, the Max Meditation System™ blends various
              meditation methods to offer a truly effective and transformative
              practice. This unique system combines mastered techniques from
              around the world, creating a meditation experience that is both
              comprehensive and powerful.
            </p>
            <div className="flex flex-col gap-4 items-center">
              <h3 className="text-center">
                The Max Meditation System™ consists of five stages:
              </h3>
              <ol className="pl-4 list-decimal">
                <li>Body and Mind Relaxation Technique</li>
                <li>Passive Meditation</li>
                <li>Active Meditation</li>
                <li>Guided Meditation</li>
                <li>Returning to Body and Rejuvination</li>
              </ol>
            </div>
            <p>
              This class is often likened to a yoga session for the mind, as it
              encompasses a holistic approach to meditation. By incorporating
              these five components, the system ensures a complete and deeply
              relaxing experience.
            </p>
            <p>
              Message me today to book your Max meditation session, or stay
              tuned on my Instagram page to find out when my next group
              meditation will take place.
            </p>
            <Button href="/contact">Book Your Session</Button>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
