"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeroSection = () => {
  const linkedinurl = process.env.NEXT_PUBLIC_LINKDIN_URL;
  const openToastBox = (message: string) => {
    toast.success(message);
  };
  const handleHireMe = () => {
    window.open(linkedinurl, "_blank");
    openToastBox("Linkedin Opened in New tab 🥂");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/SammamCV.pdf";
    link.download = "Sammam Sohail.pdf";
    link.click();

    openToastBox("CV Downloading Now 🎉");
  };
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center w-full text-center sm:text-left"
        >
          <h1 className="text-white text-4xl md:text-5xl  lg:text-6xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">
              Hello, I&apos;m {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sammam",
                1000,
                "Web developer",
                1000,
                "Frontend developer",
                1000,
                "Backend developer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-sm sm:text-lg mb-6 lg:text-xl">
            Blending front-end finesse with back-end power and data-driven
            thinking.
          </p>
          <div className="flex sm:flex-row flex-col items-center justify-start sm:gap-x-4 gap-y-4">
            <button
              onClick={handleHireMe}
              className="hover:scale-[110%] px-5 py-3 font-semibold w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              <span className="text-normal md:text-2xl">Hire Me</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-1 py-1 w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800"
            >
              <span className="block font-semibold bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2 text-white text-normal md:text-2xl">
                Download CV
              </span>
            </button>
            <ToastContainer />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 mt-5 sm:mt-0 md:mt-0 grid place-items-center sm:place-items-end"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative border-1 border-slate-200">
            <Image
              src="/images/memoji.png"
              className="absolute lg:w-[330px] transform -translate-x-1/2 -translate-y-1/4 top-1/4 left-1/2"
              alt="hero image"
              width={200}
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
