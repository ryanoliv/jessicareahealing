import Head from "next/head";
import AboutLanding from "@/components/AboutLanding";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jessica Réa | Energy Healing Practitioner and Chef</title>
        <meta
          name="description"
          content="Discover your true self with Jessica Réa, an experienced energy healing practitioner and spiritual guide. Empowering through healing, meditation, and coaching."
        />
      </Head>
      <Hero />
      <AboutLanding />
      <Testimonials />
      <Contact />
    </>
  );
}
