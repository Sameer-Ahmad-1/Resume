"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "Apps&Website",
    },
    {
      text: "with",
    },
    {
      text: "Me.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[25rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Frontend Developer with 2 years of experience. I build clean, responsive, and user-friendly interfaces that bring ideas to life
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
