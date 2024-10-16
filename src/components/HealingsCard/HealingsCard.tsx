import Image from "next/image";
import Button from "../Button";

interface HealingsCardProps {
  imgSrc: string;
  alt: string;
  healingTitle: string;
  healingBody: string;
  btnText: string;
  btnPath: string;
}

export default function HealingsCard({
  imgSrc,
  alt,
  healingTitle,
  healingBody,
  btnText,
  btnPath,
}: HealingsCardProps) {
  return (
    <div className="flex flex-col gap-6 items-center">
      <Image
        src={imgSrc}
        alt={`${alt} healing`}
        width={300}
        height={300}
        className="border border-tertiary shadow-md rounded-md"
      />
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-center text-tertiary">{healingTitle}</h2>
        <p className="text-center">{healingBody}</p>
      </div>
      <Button href={btnPath}>{btnText}</Button>
    </div>
  );
}
