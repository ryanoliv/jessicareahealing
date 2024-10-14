import Link from "next/link";
import SectionContainer from "./SectionContainer";
import Form from "./Form";

export default function Contact() {
  return (
    <section>
      <SectionContainer>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-8">
            <h2>Contact</h2>
            <div className="flex flex-col gap-4">
              <h3 className="text-md font-medium">
                Get in touch with Jessica today if you&apos;re looking to:
              </h3>
              <ul className="list-disc ml-4">
                <li>Heal through the past</li>
                <li>
                  Cultivate a deeper relationship with yourself in the present
                </li>
                <li>
                  Take the next step to embody your truest and highest self for
                  the future
                </li>
              </ul>
              <h4>
                Feel free to contact her here for one of her{" "}
                <Link href="/offerings" className="underline font-medium">
                  offerings
                </Link>
                .
              </h4>
            </div>
          </div>
          <Form />
        </div>
      </SectionContainer>
    </section>
  );
}
