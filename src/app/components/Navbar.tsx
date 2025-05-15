"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavigationOverlay from "./NavigationOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { linkObjTyoe } from "../tyoes";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navLinks: linkObjTyoe[] = [
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ];

  const sideBarVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.1,
        ease: "easeOut",
      },
    },
    close: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212]/95 md:p-2 border-b-1 border-t-1 border-slate-700">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 sm:px-12 py-2">
        <Link
          href={"/"}
          className="lg:text-5xl text-2xl text-white font-semibold"
        >
          Sammam 🚀
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className="menu hidden md:block md:w-auto text-white lg:text-xl font-semibold"
          id="navbar"
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index: number) => (
              <li key={index}>
                <Link href={link.path} title={link.title}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {navbarOpen  && (
          <motion.div
            key="sidebar"
            variants={sideBarVariants}
            initial="close"
            animate="open"
            exit="close"
          >
            <NavigationOverlay links={navLinks} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
