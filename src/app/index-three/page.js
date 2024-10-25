"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const NavbarLight = dynamic(() => import("../components/NavbarLight"));
const HeroThree = dynamic(() => import("../components/HeroThree"));
const AboutUs = dynamic(() => import("../components/AboutUs"));
const Services = dynamic(() => import("../components/Service"));
const CTABanner = dynamic(() => import("../components/Technologies"));
const Experience = dynamic(() => import("../components/Timeline"));
const Documents = dynamic(() => import("../components/Documents"));
const Clients = dynamic(() => import("../components/Clients"));
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
      <NavbarLight />
      <HeroThree />
      <AboutUs />
      <Services />
      <CTABanner />
      <Experience />
      <Documents />
      <Clients />
      <Team />
      <GetInTouch />
      <Footer />
      <Switcher />
    </>
  );
}
