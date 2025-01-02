import React, { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { LuArrowUp, LuArrowUpRight } from "react-icons/lu";
import Upfront from "../components/Projects/Upfront";
import Countify from "../components/Projects/Countify";
import NewProject from "../components/Projects/NewProject";
import Gerayo from "../components/Projects/Gerayo";
import SC from "../components/Special/SC";
import Certificates from "../components/Certificates/Certificates";

const customAnimation = keyframes`
from{
  transform: TranslateY(90px);
  opacity: 0;
  filter: blur(4px);
}
to{
  transform: TranslateY(0px);
  opacity: 1;
  filter: blur(0px);
}
`;

function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const [showCerts, setShowCerts] = useState(false);
  const todayDate = new Date();
  const year = todayDate.getFullYear();
  useEffect(() => {
    setTimeout(() => {
      // window.scrollTo(0, 0);
    }, 1000);
    document.body.classList.add("no_scroll");
    setTimeout(() => {
      setShowLoading(false);
      document.body.classList.remove("no_scroll");
    }, 3000);
  }, []);
  return (
    <>
      {/* Loading screen */}
      {showLoading && <LoadingScreen />}
      {/* content */}
      {!showLoading && (
        <div
          id="content"
          className="w-full h-svh flex relative pl-[250px] pr-11 max-lg:px-5"
        >
          {/* navbar */}
          <Navbar showCerts={showCerts} setShowCerts={setShowCerts} />
          {/* certificates */}
          {showCerts && <Certificates setShowCerts={setShowCerts} />}
          <div className="w-full h-fit relative">
            <Reveal duration={500} triggerOnce keyframes={customAnimation}>
              {/* intro */}
              <div
                id="intro"
                className="w-fit mx-auto h-full xl:max-h-[1000px] max-lg:max-h-max py-[19%] max-lg:pb-[70px] max-lg:pt-[140px] max-md:min-h-[80vh] 2xl:py-[300px] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center  relative"
              >
                <Intro />
              </div>
              {/* work */}
              <div
                id="work"
                className="w-full max-w-[1400px] mx-auto h-fit px-11 max-lg:px-0 pb-[300px] max-lg:pb-20 relative grid grid-cols-4 gap-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1"
              >
                <Upfront />
                <Countify />
                <Gerayo />
                <NewProject />
              </div>
              {/* background */}
              <div
                id="background"
                className="w-full max-w-[900px] mx-auto h-[700px] max-lg:h-fit px-11 max-lg:px-0 pb-8 relative text-dark_color dark:text-light_color"
              >
                <h1 className="text-base max-w-[600px] text-justify">
                  Im a {year - 2003}
                  <SC char={"-"} />
                  year
                  <SC char={"-"} />
                  old full
                  <SC char={"-"} />
                  stack developer from Rwanda, currently pursuing a Bachelor of
                  Science in Software Engineering at ALU. I started my web
                  development journey in 2020, and over the years, I
                  <SC char={"'"} />
                  ve cultivated a sharp eye for detail and a collaborative
                  approach to problem
                  <SC char={"-"} />
                  solving.{" "}
                </h1>
                <br />
                <br />
                <br />
                <br />
                {/* jobs */}
                <div className="w-full flex flex-col gap-3">
                  <div className="h-auto w-24 aspect-square rounded-full bg-card_color_light dark:bg-card_color_dark text-dark_color dark:text-light_color flex items-center justify-center overflow-hidden">
                    <p className="font-Ojuju text-8xl font-semibold mb-8">o</p>
                  </div>
                  <h1 className="text-3xl pt-5">Outside hospitality</h1>
                  {/* <h1 className="text-7xl max-lg:text-5xl font-Custom_b">
                    Front
                    <SC char={"-"} />
                    end Developer
                  </h1> */}
                  <h1 className="text-base">
                    Now <SC char={`•`} /> Kigali
                  </h1>
                  <h1 className="text-base text-dark_color/50 dark:text-light_color/50">
                    Working as the Front End Engineer, handling design and development of the company
                    <SC char={"'"} />s Web Application.
                  </h1>
                </div>
                <br />
                <br />
                <br />
                <br />
              </div>
              {/* contact */}
              <div
                id="contact"
                className="w-full max-w-[900px] mx-auto h-[450px] max-lg:h-fit px-11 max-lg:px-0 mb-5 relative grid grid-cols-2 max-lg:flex max-lg:flex-col gap-10"
              >
                <div className="flex items-start justify-between flex-col max-lg:gap-8">
                  <div className="w-full flex flex-col items-start justify-start text-ledt gap-1">
                    <h1 className="text-base text-dark_color/50 dark:text-light_color/50 flex items-center gap-4">
                      <div className="h-[9px] w-[9px] relative">
                        <div className="h-[9px] w-[9px] bg-dark_color_weak dark:bg-light_color_weak rounded-xl animate-ping"></div>
                        <div className="h-[7px] w-[7px] bg-dark_color rounded-xl dark:bg-light_color absolute top-0 left-0 right-0 bottom-0 m-auto"></div>
                      </div>
                      Exploring new opportunities
                    </h1>
                    <h1 className="text-lg text-dark_color dark:text-light_color pl-[25px]">
                      I’m open to new roles where I can bring value and grow
                      alongside a great team
                    </h1>
                  </div>
                  <div className="flex items-center max-lg:flex-col max-lg:items-start gap-7 max-lg:gap-2">
                    <a
                      href="mailto:mbonimpayekevin@gmail.com.com?subject=Inquiry"
                      target="_blank"
                      className="border-b pb-1 border-dark_color/70 text-dark_color dark:text-light_color dark:border-light_color/70 text-sm"
                    >
                      mbonimpayekevin
                      <SC char={"@"} />
                      gmail.com
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kevinkaneza/"
                      target="_blank"
                      className="border-b pb-1 border-dark_color/70 text-dark_color dark:text-light_color dark:border-light_color/70 text-sm"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div className="flex justify-end items-end w-full max-lg:max-w-[400px] h-full ">
                  <img
                    src="./me/me.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
