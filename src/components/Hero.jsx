import React from "react";
// import Typed from "react-typed";
import { Typewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  return (
    // defining whole window with this div
    <div className="text-white pattern-bg">
      {/* defining div that will contain all content */}
      {/* changed h-screen -> h-[87vh], mt-[-96px]->removed mt */}
      {/* again changed h-[87vh]->h-screen, justify-center -> justify-start, added -> mb-[-96px], pt-[5rem]  */}
      <div className="main w-full mx-auto h-screen mb-[-96px] text-center flex flex-col justify-start pt-[5rem] items-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-6 py-2">
          Grow with data.
        </h1>
        {/* defining div that contains normal text with changing typed text */}
        <div className="flex justify-center items-end gap-[0.5rem] py-4 font-bold ">
          <p className="md:text-5xl sm:text-4xl text-xl">
            Lorem ipsum dolor sit
          </p>
          <div className="md:text-5xl sm:text-4xl text-2xl text-gray-500">
            <Typewriter
              words={["BTB.", "BTC.", "SaaS."]}
              loop={Infinity}
              typeSpeed={120}
              deleteSpeed={110}
              delaySpeed={1000}
            />
            <Cursor />
          </div>
        </div>
        <p className="md:text-2xl text-lg font-bold text-gray-500 mx-3 sm:mx-8 md:mx-0">
          Monitor your data analytics to increase revenue fot BTB, BTC & SAAS
          platforms.
        </p>
        <button className="bg-[#00df9a] shadow-[0px_22px_64px_-14px_rgba(0,223,154,0.8)] text-black text-lg w-[200px] rounded-lg font-semibold text-center my-6 py-3 ">
          Get Started
        </button>
        {/* original arrow code - with absolute positioning*/}
        {/* <div className="arrow-relative">
          <div className="arrow-absolute">
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>
          </div>
        </div> */}
        {/* test arrow code */}
        <div className="arrow-div">
          <div className="arrow"></div>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
