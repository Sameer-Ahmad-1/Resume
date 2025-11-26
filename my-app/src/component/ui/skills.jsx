"use client";

import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  { text: "HTML5" },
  { text: "CSS3" },
  { text: "JavaScript" },
  { text: "Tailwindcss" },
  { text: "React JS" },
  { text: "Next.js" },
  { text: "TypeScript" },
  { text: "Responsive Design" },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);

  return (
    <ul id="skills" className="list-disc pl-6">
      <li>
        <div className="border-2 border-red-500 p-4 relative">
          {/* Loader Component */}
          <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

          {/* Skills Button */}
          <button
            onClick={() => setLoading(true)}
            className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center mt-4"
            style={{
              boxShadow:
                "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
            }}
          >
            Skills
          </button>

          {/* Close Button */}
          {loading && (
            <button
              className="absolute top-2 right-2 text-black dark:text-white z-[120]"
              onClick={() => setLoading(false)}
            >
              <IconSquareRoundedX className="h-6 w-6" />
            </button>
          )}
        </div>
      </li>
    </ul>
  );
}
