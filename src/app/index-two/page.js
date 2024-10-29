"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"));
const HeroTwo = dynamic(() => import("../components/HeroTwo"));
const AboutUs = dynamic(() => import("../components/AboutUs"));
const Services = dynamic(() => import("../components/ResearchGap"));
const Technologies = dynamic(() => import("../components/Technologies"));
const Timeline = dynamic(() => import("../components/Timeline"));
const Documents = dynamic(() => import("../components/Documents"));
const Team = dynamic(() => import("../components/Team"));
const GetInTouch = dynamic(() => import("../components/GetInTouch"));
const Footer = dynamic(() => import("../components/Footer"));
const Switcher = dynamic(() => import("../components/Switcher"));

export default function Index() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.classList.add("light");
    }
  }, []);
  return (
    <>
      <Navbar />
      <HeroTwo />
      <AboutUs />
      <Services />
      <Technologies />
      <Timeline />
      <Documents />
      <Team />
      <GetInTouch />
      <Footer />
      <Switcher />
    </>
  );
}
