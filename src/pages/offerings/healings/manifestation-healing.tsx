import Head from "next/head";
import HealingHero from "@/components/HealingHero";
import SectionContainer from "@/components/SectionContainer";

export default function ManifestationHealing() {
  return (
    <>
      <Head>
        <title>Manifestation Healing | Jessica Réa</title>
        <meta
          name="description"
          content="Jessica Réa is a Healer and Spiritual Guide who empowers and activates her clients to go within and create a relationship with their true self."
        />
      </Head>
      <HealingHero
        title="Manifestation Healing"
        src="manifestation-healing-big.webp"
        alt="Manifestation Healing"
      />
      <section>
        <SectionContainer>
          <div className="flex flex-col gap-8 items-center">
            <h2 className="text-center">
              Manifestation Healing: Call in Positive Change
            </h2>
            <p>
              Experience the transformative power of Manifestation Healing, a
              specialized Reiki session designed to help you manifest positive
              change in your life. By setting specific intentions and desires,
              you can harness the energy of manifestation to bring your wishes
              and dreams into reality. During this healing, you have the
              opportunity to get specific and focused on what you would like to
              call in. The possibilities are endless, and you can tailor your
              manifestations to align with your unique desires and goals.
            </p>
            <div className="flex flex-col gap-4 items-center">
              <h3 className="text-center">
                Examples of intentions for Manifestation Healing include:
              </h3>
              <div className="flex flex-col">
                <ul className="pl-4 list-[bengali]">
                  <li>Paying more attention to your life</li>
                  <li>
                    Embracing uncertainty and living in the present moment
                  </li>
                  <li>
                    Releasing the need for control and surrendering to the flow
                    of lifemani
                  </li>
                  <li>Transforming negative thoughts into positive thoughts</li>
                  <li>Creating the life you truly desire and deserve</li>
                  <li>
                    Manifesting abundance and inviting miracles into your life
                  </li>
                  <li>Bringing a specific desire or goal into fruition</li>
                </ul>
                <ul className="pl-4 list-[bengali]">
                  <li>Establishing a supportive routine in your life</li>
                  <li>Cultivating a harmonious relationship with time</li>
                  <li>
                    Prioritizing self-care and carving out more time for
                    yourself
                  </li>
                  <li>
                    Embracing self-acceptance and loving yourself as you are
                  </li>
                  <li>Letting go of the need for validation from others</li>
                  <li>Releasing limiting beliefs that hold you back</li>
                  <li>
                    Creating and maintaining healthy boundaries in all areas of
                    your life
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Each Manifestation Healing session is deep and powerful, allowing
              you to dive into the energy of your desires and intentions. While
              a single session can bring about positive shifts, I personally
              recommend a package of three sessions for more significant and
              transformative results. The number of sessions required may vary
              depending on the depth and complexity of the desired
              manifestation.
            </p>
            <p>
              Harness the power of manifestation and experience the
              transformative energy of Manifestation Healing to bring positive
              change and manifest your desires into reality.
            </p>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
