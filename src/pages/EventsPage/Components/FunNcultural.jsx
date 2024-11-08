import React from "react";
import CardSection from "./CardSection";
import { Link } from "react-router-dom";
import EventsMenu from "./EventsMenu";

const FunNcultural = () => {
  return (
    <div className="flex flex-col items-center pb-10 bg-slate-950">
      <EventsMenu />

      <div className="w-[90vw] -ml-8 flex flex-col items-start justify-evenly gap-10 text-orange-200">
        <CardSection title="🕹️ VIDEO GAMES 🎮" />
        <CardSection title="🧩 MAZE HUNT" />
        <CardSection title="📎 ORIGAMI" />
        <CardSection title="📸 PHOTOBOOTH" />
        <CardSection title="🎙️ MUSIC" />
        <CardSection title="🕺 DANCE COMPETITION" />
      </div>
    </div>
  );
};

export default FunNcultural;
