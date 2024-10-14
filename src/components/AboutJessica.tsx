import Image from "next/image";
import SectionContainer from "./SectionContainer";

export default function AboutJessica() {
  return (
    <section className="filler-leaf">
      <SectionContainer>
        <div className="flex flex-col gap-8 items-center">
          <h1>About Jessica</h1>
          <p>
            I am an International Life Activation Practitioner, Healer, and Chef
            who firmly believes in accessing your highest self, abundance, joy,
            and empowerment through alternative and natural methods. My focus
            lies in energy work, meditation, and spiritual healing as powerful
            tools for life empowerment, manifestation, and alignment. Guiding
            and empowering individuals in finding their unique path and living
            their desired reality is my innate passion. I assist people from all
            walks of life in breaking through barriers, overcoming blocks, and
            healing from traumas. My approach emphasizes the integration of
            physical, mental, emotional, and spiritual energy to foster
            self-love, healing, and self-acceptance.
          </p>

          <p>
            My sensitivity, once seen as a challenge, has become my greatest
            strength. As I delved deeper into self-understanding, I discovered
            an innate gift for healing. Today, I continually learn and refine my
            skills to craft tools that promote self-love and hold sacred space
            for others on their transformative journeys. Throughout my life, I
            have faced numerous challenges, including addiction, substance
            abuse, sexual abuse, body dysmorphia, suicidal ideation,
            obsessive-compulsive disorder, disordered eating, abortion,
            codependency, and childhood trauma. It is through the healing
            modalities I offer that I have found my own path to overcoming these
            challenges.
          </p>

          <p>
            My personal healing journey began in 2015 when I sought recovery
            assistance through both inpatient and outpatient programs. During my
            recovery, I discovered strength in healing, public speaking, and
            leadership. I took on roles as a chairwoman for groups, sharing my
            experiences on sensitive, empowering, and traumatic topics, offering
            support to individuals from all walks of life on their personal
            journeys. These experiences have given me a voice, which I choose to
            use compassionately, drawing upon my own understanding and lived
            experiences to communicate authentically about deep and real topics.
          </p>

          <p>
            Throughout my journey, I have come to realize the profound impact of
            not only what we feed our minds but also what we feed our bodies. I
            weave my passion for nourishment into my teachings, coaching, and
            healing, assisting individuals in cultivating a healing relationship
            with food and their bodies. Healing has completely transformed my
            life, empowering me with gratitude for the path I am on. It is my
            sincere wish to support and guide you in transforming your own life,
            leading you towards your desired and empowered reality.
          </p>
        </div>
      </SectionContainer>
      <div className="relative w-full h-[388px] overflow-hidden">
        <Image
          src="/images/mobile/filler-photo-sand-m.webp"
          alt="wavy sand"
          width={375}
          height={169}
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10 w-full h-full"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h2 className="px-4 text-primary text-md font-brandon-grotesque italic text-center">
            There is a healer in all of us. It is our divine right. It belongs
            to us. Allow me to help guide you in embracing yours.
          </h2>
        </div>
      </div>
      <SectionContainer>
        <div className="flex flex-col gap-8 items-center">
          <h2>Experience</h2>
          <div className="flex flex-col text-md">
            <ul className="pl-4 list-[bengali]">
              <li>2nd Step Initiate of the King Solomon Lineage</li>
              <li>Modern Mystery School Student</li>
              <li>Ensofic Ray Reiki Practitioner</li>
              <li>Life Activation Practitioner</li>
              <li>Sacred Geometrical Crystal Healer</li>
              <li>Max Meditation System™ Guide</li>
            </ul>
            <ul className="pl-4 list-[bengali]">
              <li>USUI Reiki L1 and L2</li>
              <li>Distant USUI Reiki Healing</li>
              <li>Public Speaking and Space Holding</li>
              <li>Event Promotion, Management and Organization</li>
              <li>Aura and Chakra Healing</li>
              <li>Distant Ensofic Reiki</li>
            </ul>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
