"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const email = process.env.NEXT_PUBLIC_EMAIL_ADDR;
  const linkdin = process.env.NEXT_PUBLIC_LINKDIN_URL;
  const github = process.env.NEXT_PUBLIC_GITHUB_URL;

  const handleSendMail = (subject: string, message: string) => {
    const sub = encodeURIComponent(subject);
    const body = encodeURIComponent(message);

    window.location.href = `mailto:${email}?body=${body}&subject=${sub}`;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    handleSendMail(e.target.subject.value, e.target.message.value);
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:py-8 py-2 gap-4 relative"
    >
      <div className="bg-radial-[at_1%_1%] from-purple-300 sm:from-purple-500 to-transparent to-90% rounded-full h-80 w-80 z-1 blur-xl absolute top-3/4 md:top-1/2 -left-4 transform -translate-x-1/2 md:-translate-x-1/4 -translate-y-1/2 pointer-events-none"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect 🤝
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={github || 'https://github.com'}>
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href={linkdin || 'https://www.linkedin.com'}>
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col z-10" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="I am reaching out..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-400 text-white font-medium py-2.5 px-5 rounded-lg md:w-1/2 w-full place-self-center"
          >
            Open Mailbox
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
