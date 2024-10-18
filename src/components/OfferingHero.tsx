import Image from "next/image";

interface HeroProps {
  title: string;
  src: string;
  alt: string;
}

export default function OfferingHero({ title, src, alt }: HeroProps) {
  return (
    <section className="flex flex-col hero-min-h">
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-tertiary text-center">{title}</h1>
      </div>
      <div className="relative flex-1">
        <Image
          src={`/images/${src}`}
          alt={`${alt} Healing`}
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
