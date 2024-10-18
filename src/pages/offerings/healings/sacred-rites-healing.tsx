import Button from "@/components/Button";
import OfferingHero from "@/components/OfferingHero";
import SectionContainer from "@/components/SectionContainer";
import Testimonials from "@/components/Testimonials/Testimonials";
import Head from "next/head";

export default function SacredRites() {
  return (
    <>
      <Head>
        <title>Sacred Rites Crystal Healing | Jessica Réa</title>
        <meta
          name="description"
          content="Jessica Réa is a Healer and Spiritual Guide who empowers and activates her clients to go within and create a relationship with their true self."
        />
      </Head>
      <OfferingHero
        title="Sacred Rites Crystal Healing"
        src="healings/hero/sacred-rites-big.webp"
        alt="Sacred Rites Crystal"
      />
      <section>
        <SectionContainer>
          <div className="flex flex-col gap-8 items-center">
            <p>
              Experience the transformative power of Sacred Geometrical healings
              as they realign the sacred geometrical structure of your mind,
              soul, and body. This unique vibrational healing method is designed
              to help you reconnect with your true nature when you&apos;ve
              veered out of alignment. Our Sacred Geometrical healings encompass
              a range of crystal healing types, each focusing on a different
              aspect of the self. These holistic healings can be experienced
              together for a comprehensive rejuvenation or individually as per
              your preference. Through the synergy of crystals and chanting,
              this profound healing method penetrates deep into your mind and
              subconscious, soothing, releasing, and reawakening your inner
              essence.
            </p>
            <h2 className="text-md text-center">
              Choose the One Focus Area that Resonates with You
            </h2>
            <ul className="pl-4 list-[bengali]">
              <li>
                <strong> Good Fortune and Abundance </strong> - Experience the
                powerful energy of this healing to call in positive energy for
                your future, invite an influx of abundance, and manifest new
                opportunities. Whether you&apos;re seeking a new job or desiring
                a miraculous and magical shift in your life, this healing is
                specifically designed to bring you good fortune and open doors
                of abundance.
              </li>
              <li>
                <strong> New Wounds </strong> - If you&apos;re carrying the
                weight of current wounds and seeking relief, this healing is for
                you. Whether you&apos;re navigating a heavy heart, going through
                a recent breakup, or healing from a traumatic experience, allow
                this transformative healing to clear away emotional pain and
                provide the soothing and relief you need.
              </li>
              <li>
                <strong> Old Wounds </strong> - Release the attachments to past
                relationships, traumas, and lingering emotional pain with this
                healing. If you find yourself unable to let go of past
                experiences that continue to haunt you, this healing is tailored
                to help you heal old wounds. Discover a path to soothing and
                finding relief from negative emotional pains that have held you
                back.
              </li>
            </ul>
            <Button href="/contact">Book Your Healing</Button>
          </div>
        </SectionContainer>
      </section>
      <Testimonials />
    </>
  );
}
