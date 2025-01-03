import React, { HTMLAttributes, useRef } from "react";
import { useScroll } from "framer-motion";
import MotionCard from "./MotionCard";
import { cn, isMobileDevice } from "$lib/utils";
import Card from "./Card";

interface StackedCardsProps {
  items: {
    title: string;
    description: string;
    src: string;
    mobileSrc?: string;
    color: string;
    path?: string;
  }[];
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

const StackedCards: React.FC<StackedCardsProps> = ({ items, className }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const useMotionOnMobile = true;

  return (
    <main ref={container} className={cn("relative px-3 sm:px-20", className)}>
      {useMotionOnMobile || !isMobileDevice()
        ? items?.map((project, i) => {
            const targetScale = 1 - (items?.length - i) * 0.05;
            return (
              <MotionCard
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })
        : items?.map((project, i) => <Card key={`p_${i}`} {...project} />)}
    </main>
  );
};

export default StackedCards;
