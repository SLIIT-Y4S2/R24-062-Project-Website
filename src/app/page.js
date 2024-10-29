"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import MainObjectives from "./components/MainObjectives";
import Methodology from "./components/Methodology";

const Navbar = dynamic(() => import("./components/Navbar"));
const HeroOne = dynamic(() => import("./components/HeroOne"));
const AboutUs = dynamic(() => import("./components/AboutUs"));
const ResearchGap = dynamic(() => import("./components/ResearchGap"));
const ProblemAndSolution = dynamic(() =>
  import("./components/ProblemAndSolustion")
);
const Technologies = dynamic(() => import("./components/Technologies"));
const Timeline = dynamic(() => import("./components/Timeline"));
const Documents = dynamic(() => import("./components/Documents"));
const Team = dynamic(() => import("./components/Team"));
const GetInTouch = dynamic(() => import("./components/GetInTouch"));
const Footer = dynamic(() => import("./components/Footer"));
const Switcher = dynamic(() => import("./components/Switcher"));

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
      <HeroOne />
      <AboutUs />
      <ResearchGap />
      <ProblemAndSolution />
      <Technologies />
      <MainObjectives />
      <Methodology />
      <Timeline />
      <Documents />
      <Team />
      <GetInTouch />
      <Footer />
      <Switcher />
    </>
  );
}
