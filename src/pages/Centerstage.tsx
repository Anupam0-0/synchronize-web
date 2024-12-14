import CardSection from "$lib/components/Events/CardSection";
import EventsHeading from "$lib/components/Events/EventsHeading";
import EventsMenu from "$lib/components/Events/EventsMenuBar";
import { BUSINESS, CODING, FLAGSHIP, ROBOTICS } from "$lib/data/events";

const EventsSection = () => {
  return (
    <div>
      <EventsHeading />
      <div className="flex flex-col p-3 sm:p-10 pt-0 bg-dark-400 font-[AdieuRegular]">
        <EventsMenu />
        <div className="flex flex-col items-start gap-10 text-orange-200 w-full">
          <CardSection title="🏁 FLAGSHIP" cards={FLAGSHIP} />
          <CardSection title="🤖 ROBOTICS" cards={ROBOTICS} />
          <CardSection title="⚔️ CODE COMBAT" cards={CODING} />
          <CardSection title="🧑‍💼 BUSINESS" cards={BUSINESS} />
          {/* Add more sections here as needed */}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
