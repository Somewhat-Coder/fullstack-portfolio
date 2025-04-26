"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => setTab(id));
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-8 sm:py-16 px-4">
        <Image
          src="/images/about-image.png"
          height={500}
          width={500}
          alt="about-image"
        />
        <div className="h-full">
          <h2 className="texet-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">I am a fullstack developer</p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
              skills
            </span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
