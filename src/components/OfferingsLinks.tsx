import Image from "next/image";
import Link from "next/link";
import SectionContainer from "./SectionContainer";

const offeringsData = [
  {
    link: "/offerings/healings",
    image: "/images/offerings/healings.webp",
    offering: "Healings",
  },
  {
    link: "/offerings/coaching",
    image: "/images/offerings/coaching.webp",
    offering: "Coaching",
  },
  {
    link: "/offerings/meditation",
    image: "/images/offerings/meditation.webp",
    offering: "Meditation",
  },
  {
    link: "/offerings/workshops",
    image: "/images/offerings/workshops.webp",
    offering: "Workshops",
  },
  {
    link: "/offerings/retreats",
    image: "/images/offerings/retreats.webp",
    offering: "Retreats",
  },
  // {
  //   link: "/",
  //   image: "/images/offerings/testimonials.webp",
  //   offering: "Testimonials",
  // },
];

export default function OfferingsLinks() {
  return (
    <section className="filler-leaf">
      <SectionContainer>
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-tertiary uppercase font-light">Offerings</h1>
          <div className="flex flex-col gap-4 items-center">
            {offeringsData.map((offering, index) => (
              <Link key={index} href={offering.link}>
                <div className="relative w-[300px] h-[300px] flex items-center justify-center rounded-md">
                  <Image
                    src={offering.image}
                    alt={`Jessica Réa ${offering.offering}`}
                    width={300}
                    height={300}
                    className="relative z-0 rounded-md"
                  />
                  <div className="absolute inset-0 bg-black opacity-50 z-10 w-full h-full rounded-md border border-tertiary shadow-md" />
                  <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-primary z-20 text-center">
                    {offering.offering}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
