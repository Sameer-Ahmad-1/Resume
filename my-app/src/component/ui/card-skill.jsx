"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "./use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto pb-6 w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "JavaScript was initially created by Brendan Eich",
    title: "JavaScript",
    src: "https://media.licdn.com/dms/image/v2/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=zrcrB8lfoVmZo0LcSLgut3A_4PwE6YFe9EK3iy17L2Y",
    ctaText: "Learn More..",
    ctaLink: " https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    content: () => {
      return (
        <p>
          JavaScript is a powerful, high-level programming language used to
          create dynamic and interactive features on websites. It runs in web
          browsers and allows developers to build things like animations, form
          validations, pop-ups, and real-time content updates. <br /> <br />
          Originally developed for client-side scripting, JavaScript can now
          also run on servers using platforms like Node.js. It's one of the core
          technologies of the web, alongside HTML and CSS. JavaScript is
          essential for modern web development.
        </p>
      );
    },
  },
  {
    description: "React was originally developed by Jordan Walke",
    title: "React.JS",
    src: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
    ctaText: "Learn More..",
    ctaLink: "https://react.dev",
    content: () => {
      return (
        <p>
          React.js is a popular JavaScript library for building user interfaces,
          especially single-page applications. It allows developers to create
          reusable UI components and efficiently update the UI when data
          changes. <br /> <br />
          React uses a virtual DOM for fast rendering and follows a
          component-based architecture. It was developed by Facebook and is
          widely used in modern web development.
        </p>
      );
    },
  },

  {
    description:
      "Next.js was created and is maintained by Vercel, a company founded by Guillermo Rauch.",
    title: "Next.JS",
    src: "https://www.axelerant.com/hubfs/Imported_Blog_Media/nextjs_image1.jpg",
    ctaText: "Learn More..",
    ctaLink: "https://nextjs.org/docs",
    content: () => {
      return (
        <p>
          Next.js is a powerful React framework developed by Vercel that enables
          developers to build fast, scalable, and SEO-friendly web applications.
          It offers features like server-side rendering (SSR), static site
          generation (SSG), API routes, and automatic routing out of the box.
          <br /> <br />
          Next.js simplifies complex setups and is ideal for building both
          static websites and dynamic web apps. It also supports full-stack
          development with built-in backend capabilities.
        </p>
      );
    },
  },
  {
    description: "Adapts layout to screen size",
    title: "Responsive Design",
    src: "https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg",
    ctaText: "Learn More..",
    ctaLink:
      " https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
    content: () => {
      return (
        <p>
          Responsive design is an approach to web development where websites
          automatically adjust their layout and content to fit different screen
          sizes and devices—like desktops, tablets, and smartphones. <br />
          <br />
          It ensures a consistent and user-friendly experience across all
          devices by using flexible grids, images, and CSS media queries.
          Responsive design is essential for mobile-friendly websites and is a
          core part of modern web development.
        </p>
      );
    },
  },
];
