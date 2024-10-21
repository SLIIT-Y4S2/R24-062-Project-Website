'use client'
import React,{useEffect} from "react";
import dynamic from 'next/dynamic'
import MainObjectives from "./components/MainObjectives";
import Methodology from "./components/Methodology";

const Navbar = dynamic(() => import('./components/Navbar'));
const HeroOne = dynamic(() => import('./components/HeroOne'));
const AboutUs = dynamic(() => import('./components/AboutUs'));
const Services = dynamic(() => import('./components/Service'));
const ProblemAndSolution = dynamic(() => import('./components/ProblemAndSolustion'));
const CTABanner = dynamic(() => import('./components/CTABanner'));
const Experience = dynamic(() => import('./components/Experience'));
const Projects = dynamic(() => import('./components/Projects'));
const Clients = dynamic(() => import('./components/Clients'));
const Blogs = dynamic(() => import('./components/Blogs'));
const GetInTouch = dynamic(() => import('./components/GetInTouch'));
const Footer = dynamic(() => import('./components/Footer'));
const Switcher = dynamic(() => import('./components/Switcher'));

export default function Index(){
    useEffect(() => {
        if (typeof window !== "undefined"){
            document.documentElement.setAttribute("dir", "ltr");
            document.documentElement.classList.add('light');
        }
      }, []);
    return(
        <>
            <Navbar/>
            <HeroOne/>
            <AboutUs/>
            <Services/>
            <ProblemAndSolution/>
            <CTABanner/>
            <MainObjectives/>
            <Methodology/>
            <Experience/>
            
            <Projects/>
            {/* <Clients/> */}
            <Blogs/>
            <GetInTouch/>
            <Footer/>
            <Switcher/>
        </>
    )
}