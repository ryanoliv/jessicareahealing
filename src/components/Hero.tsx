import SectionContainer from "./SectionContainer";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="flex items-center relative bg-cover hero-min-h bg-hero-image text-primary">
      <SectionContainer>
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="flex flex-col items-center">
            <h1 className="font-semibold">Feel Empowered</h1>
            <p className="text-center text-md text-primary font-semibold">
              Together we can empower you to empower yourself.
            </p>
          </div>
          <Button variant="secondary" href="/offerings">
            See Offerings
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
}
