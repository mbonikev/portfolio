import React, { useState } from "react";
import { Link } from "react-scroll";
import ScrollTo from "../ScrollTo.jsx/ScrollTo";
import { IoIosImages, IoLogoGithub } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import { FaMedal } from "react-icons/fa";
import { PiCertificate, PiCertificateBold } from "react-icons/pi";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Certificates from "../Certificates/Certificates";

const customAnimation = keyframes`
from{
  transform: TranslateX(-90px);
  opacity: 0;
  filter: blur(4px);
}
to{
  transform: TranslateX(0px);
  opacity: 1;
  filter: blur(0px);
}
`;
function Navbar({showCerts, setShowCerts}) {
  const [activeSection, setActiveSection] = useState(null);
  return (
    <div className="w-[250px] max-lg:w-full bg-orange-400/0 flex flex-col items-start justify-between h-full max-lg:h-[70px] max-lg:bg-[#fdfdfd]/80 dark:max-lg:bg-card_color_dark/85 text-dark_color dark:text-light_color fixed z-10 top-0 left-0 px-11 py-8 max-lg:py-0 max-lg:px-5 max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:flex-row max-lg:items-center max-lg:backdrop-blur-xl">
      <Reveal triggerOnce duration={500} keyframes={customAnimation}>
        <h1 className="text-[24px] leading-[24px] w-fit flex items-center cursor-default select-none">
          Kevin
        </h1>
        <div className="flex-1 h-fit flex flex-col gap-1 w-full max-lg:hidden">
          <ScrollTo
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            label={"intro"}
            id={"intro"}
          />
          <ScrollTo
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            label={"Work"}
            id={"work"}
          />
          <ScrollTo
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            label={"Background"}
            id={"background"}
          />
          <ScrollTo
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            label={"contact"}
            id={"contact"}
          />
          <a
            href="me/Kevin's Resume.pdf"
            target="_blank"
            className={`text-base w-fit flex items-center capitalize cursor-pointer text-dark_color_weak dark:text-light_color_weak hover:text-dark_color dark:hover:text-light_color`}
          >
            resume
          </a>
        </div>
        <div className="h-fit flex flex-col bg-orange-200/0 gap-2 w-full max-lg:w-fit max-lg:flex-row">
          <div className="flex items-center gap-2 relative">
            <a
              href="https://github.com/mbonikev"
              target="_blank"
              className="text-dark_color dark:text-light_color dark:bg-card_color_dark peer bg-[#f2f2f2] active:bg-stone-200 dark:active:bg-[#35353a] w-[44px] min-w-[44px] h-auto flex items-center justify-center text-2xl aspect-square rounded-full"
            >
              <IoLogoGithub className="" />
            </a>
          </div>
          <div className="flex items-center gap-2 relative">
            <button
              onClick={() => setShowCerts(true)}
              className="text-dark_color dark:text-light_color dark:bg-card_color_dark peer bg-[#f2f2f2] active:bg-stone-200 dark:active:bg-[#35353a] w-[44px] min-w-[44px] h-auto flex items-center justify-center text-2xl aspect-square rounded-full"
            >
              <PiCertificateBold className="" />
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Navbar;
