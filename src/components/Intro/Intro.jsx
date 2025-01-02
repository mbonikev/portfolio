import React, { useState } from "react";
import SC from "../Special/SC";

function Intro() {
  const [messageFor, setMessageFor] = useState("For Everyone");
  const expectedVisitors = [
    "For Everyone",
    "Recruiters",
    "Designers",
    "Start ups",
    // "Engineers",
  ];
  return (
    <div className="max-w-[750px] 2xl:max-w-[850px] w-full max-xl:max-w-[650px] max-md:max-w-full flex flex-col items-start justify-start dark:text-light_color">
      {/* visitors */}
      <div className="w-full flex items-center justify-start gap-3 overflow-clip flex-wrap mb-5">
        {expectedVisitors.map((type, index) => (
          <h1
            key={index}
            className={`text-base cursor-pointer select-none py-0 px-[9px] max-lg:px-0 whitespace-nowrap hover:text-dark_color dark:hover:text-light_color ${
              messageFor === type
                ? "text-dark_color dark:text-light_color"
                : "text-dark_color_weak dark:text-light_color_weak "
            }`}
            onClick={() => setMessageFor(type)}
          >
            {type}
          </h1>
        ))}
      </div>
      <h1 className="text-5xl 2xl:text-6xl max-xl:text-4xl leading-[55px] 2xl:leading-[65px] px-2 max-lg:px-0">
        {messageFor === expectedVisitors[0] && (
          <>
            Hi there, I<SC char={`'`} />m a Full
            <SC char={"-"} />
            Stack web developer with strong skills in front
            <span className="font-Inter">-</span>end development and design.
          </>
        )}
        {messageFor === expectedVisitors[1] && (
          <>
            I<SC char={`'`} />m a Full stack web developer with 3 months of experience, skilled in MERN
            Stack, and committed to creating quality products.
          </>
        )}
        {messageFor === expectedVisitors[2] && (
          <>
            I take pride in transforming design ideas into user
            <SC char={`-`} />
            friendly web Apps, Let’s create something great together.
          </>
        )}
        {messageFor === expectedVisitors[3] && (
          <>
            From ideation to launch, I help startups create high quality Web App
            as quickly as possible.
          </>
        )}
      </h1>
    </div>
  );
}

export default Intro;
