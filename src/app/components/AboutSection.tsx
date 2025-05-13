"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-2">
          <li>Next JS</li>
          <li>React JS</li>
          <li>Node JS</li>
          <li>Postgres SQL</li>
          <li>MongoDB</li>
          <li>Javascript</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>CI/CD Integrations</li>
          <li>AWS</li>
          <li>Azure</li>
          <li>Git</li>
          <li>JIRA</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MS Data Analytics, National College of Ireland</li>
        <li>BS Computer Science, FAST NUCES</li>
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
  const [, startTransition] = useTransition();

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
            About Me 📚
          </h2>
          <p className="text-sm lg:text-lg">
          Full-Stack Developer with 2 years of hands-on experience building scalable web applications and data-driven solutions. My expertise spans modern JavaScript frameworks like ReactJS, NodeJS, and NextJS, alongside strong command of SQL and cloud platforms such as AWS and Azure. I’ve worked on a wide range of projects—from blockchain-based DApps to AI-powered systems—leveraging technologies like Docker, CI/CD pipelines, and machine learning models.
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
          <div className="mt-4 text-sm lg:text-xl">
            {TAB_DATA.find((t) => t.id == tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
