"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center w-full text-center sm:text-left">
          <h1 className="text-white text-4xl md:text-5xl  lg:text-6xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">
              Hello, I'm {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sammam",
                1000,
                "Web developer",
                1000,
                "Mobile developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            This is a dummy text
          </p>
          <div className="flex sm:flex-row flex-col items-center justify-start sm:gap-x-4 gap-y-4">
            <button className="px-5 py-3 font-semibold w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              <span className="text-normal md:text-2xl">Hire Me</span>
            </button>
            <button className="px-1 py-1 w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800">
              <span className="block font-semibold bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2 text-white text-normal md:text-2xl">
                Download CV
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5 mt-5 sm:mt-0 md:mt-0 grid place-items-center sm:place-items-end">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative border-1 border-slate-200">
            <Image
              src="/images/memoji.png"
              className="absolute lg:w-[330px] transform -translate-x-1/2 -translate-y-1/4 top-1/4 left-1/2"
              alt="hero image"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
