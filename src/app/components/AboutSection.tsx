"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

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
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-sm md:text-lg lg:text-xl">
            I am a fullstack developer
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={tab == "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              active={tab == "education"}
              selectTab={() => handleTabChange("education")}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              active={tab == "certifications"}
              selectTab={() => handleTabChange("certifications")}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-4 text-sm md:text-xl">
            {TAB_DATA.find((t) => t.id == tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
