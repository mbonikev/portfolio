import React, { useEffect, useState } from "react";
import "./loading.css";
import { Fade } from "react-awesome-reveal";
import { LuCornerDownRight } from "react-icons/lu";

function LoadingScreen() {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 2500);
  }, []);
  return (
    <div
      className={`wrapper p-16 max-lg:p-5 bg-white dark:bg-body_dark text-dark_color dark:text-light_color transition-all duration-500 ${
        hide ? "opacity-0" : "opacity-100"
      }`}
    >
      <Fade triggerOnce cascade={0.4} damping={0.2} delay={300}>
        <h1 className={`text-[80px] max-lg:text-4xl font-Custom_m leading-[95px] max-lg:leading-10 max-2xl:text-[60px] max-2xl:leading-[60px] animateHide`}>
          Kevin K. Mbonimpaye
        </h1>
        <h1 className={`text-[30px] font-Custom_r max-lg:text-base max-lg:mt-3 leading-[50px] max-lg:leading-5 flex items-center gap-0 animateHide`}>
          Full stack developer
        </h1>
      </Fade>
    </div>
  );
}

export default LoadingScreen;
