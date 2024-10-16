import HealingHero from "@/components/HealingHero";
import SectionContainer from "@/components/SectionContainer";
import Head from "next/head";

export default function BadHabitRemoval() {
  return (
    <>
      <Head>
        <title>Bad Habit Removal | Jessica Réa</title>
        <meta
          name="description"
          content="Jessica Réa is a Healer and Spiritual Guide who empowers and activates her clients to go within and create a relationship with their true self."
        />
      </Head>
      <HealingHero
        title="Bad Habit Removal"
        src="bad-habit-removal-big.webp"
        alt="Bad Habit Removal"
      />
      <section>
        <SectionContainer>
          <div className="flex flex-col gap-8 items-center">
            <h2 className="text-center">Bad Habit Removal Healing</h2>
            <p>
              Bad Habit Removal: Shift Negative Patterns and Embrace Positive
              Change Experience the power of Bad Habit Removal, a powerful Reiki
              treatment designed to help you eliminate negative habits from your
              life. Whether it&apos;s a pattern or habit that you wish to
              change, this treatment offers a transformative journey towards
              creating new habits that serve you and your life. With Bad Habit
              Removal, you can release the attachment to negative habits and set
              yourself free.
            </p>
            <p>
              Choose one negative habit per session that you would like to work
              on removing. We all have habits we wish to change, and some of
              them require determination and effort.
            </p>
            <p>
              Bad Habit Removal is here to support you in shifting negative
              patterns embedded in your subconscious mind. By doing so, you can
              create new habit patterns that align with your well-being and
              goals, leaving the negative habit behind.
            </p>
            <h3 className="text-center">
              Some examples of negative habits that can be addressed through Bad
              Habit Removal include:
            </h3>
            <div className="flex flex-col">
              <ul className="pl-4 list-[bengali]">
                <li>Addiction (smoking, substance abuse)</li>
                <li>Over or under eating (disordered eating)</li>
                <li>Caring too much about what others think</li>
                <li>Limiting self-beliefs</li>
                <li>Anxiety</li>
                <li>
                  Excessive phone and technology use, including social media
                </li>
                <li>Negative behaviors that affect others</li>
                <li>Highlighting</li>
                <li>Cramming for exams</li>
                <li>Unhealthy eating habits</li>
              </ul>
              <ul className="pl-4 list-[bengali]">
                <li>Multitasking</li>
                <li>Lack of exercise</li>
                <li>Perfectionism</li>
                <li>Inadequate sleep</li>
                <li>Slouching</li>
                <li>Overspending</li>
                <li>Procrastination</li>
                <li>Negative self-talk</li>
                <li>Porn addiction</li>
                <li>Overmedicating</li>
              </ul>
            </div>
            <p>
              During each Bad Habit Removal session, we focus on one habit.
              Depending on the depth and duration of the habit, I recommend a
              package of three sessions for optimal results. For a more
              comprehensive transformation, I suggest combining Bad Habit
              Removal with Positive Transformation Healing. This powerful
              combination allows you to not only remove the negative habit but
              also introduce a positive habit in its place, fostering positive
              change and growth.
            </p>
            <p>
              Take control of your habits and embrace positive change with Bad
              Habit Removal. Free yourself from the grip of negative patterns
              and pave the way for a healthier and more fulfilling life.
            </p>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
