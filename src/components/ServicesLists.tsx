export default function ServicesLists() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-4 items-center">
          <h3>In-Person Services</h3>
          <p className="text-center">
            Experience the power of in-person healing with a variety of services
            tailored to meet your needs:
          </p>
        </div>
        <div className="flex flex-col text-md">
          <ul className="list-[bengali]">
            <li>Reiki and Ensofic Reiki</li>
            <li>The Life Activation</li>
            <li>Crystal Healings</li>
            <li>Physical Body Reiki</li>
            <li>Bad Habit Removal</li>
            <li>Addiction Healing</li>
          </ul>
          <ul className="list-[bengali]">
            <li>Positive Change Healings</li>
            <li>Abundance Healings</li>
            <li>Private Coaching Containers</li>
            <li>Meditations</li>
            <li>Space Holding</li>
            <li>Retreat and Workshop Facilitation</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-4 items-center">
          <h3>Remote/Online Services</h3>
          <p className="text-center">
            For those who prefer remote healing, I also offer the following
            services online:
          </p>
        </div>
        <div className="flex flex-col text-md">
          <ul className="list-[bengali]">
            <li>Remote Bad Habit Removal</li>
            <li>Remote Physical Body Reiki</li>
            <li>Remote Addiction Healing</li>
          </ul>
          <ul className="list-[bengali]">
            <li>Meditation Coaching</li>
            <li>Private Coaching Containers</li>
            <li>Online Group or Private Meditations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
