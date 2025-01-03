"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { expertiseData } from "../Data/data";
import CountUp from "react-countup";

export default function ProblemAndSolution() {
  return (
    <section className="relative md:py-24 py-16" id="project-scope">
      <div className="container">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
          {/* <div className="lg:col-span-5 lg:px-8">
                        <div className="relative">
                            <div className="absolute inset-0 border dark:border-gray-800 rounded-full -mt-[10px] -ms-3 h-[100%] w-[100%] -z-1"></div>
                            <Image src="/images/ab2.jpg"  alt="" height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}}  className="rounded-full shadow-md shadow-gray-200 dark:shadow-gray-800"/>

                            <div className="absolute lg:bottom-20 md:bottom-10 bottom-6 ltr:lg:-right-16 rtl:lg:-left-16 ltr:md:-right-8 rtl:md:-left-8 ltr:right-0 rtl:left-0 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                                <h6 className="font-semibold">Web Desinger</h6>
                                <span className="text-2xl font-medium text-amber-500 mb-0"><span className="counter-value font-bold" data-target="7"><CountUp
                                            start={7}
                                            className="counter-value"
                                            end={180}
                                            duration={2.75} /></span>+</span>
                                <span className="text-sm text-slate-400">Years <br/> Experience</span>
                            </div>
                        </div>
                    </div> */}

          <div className="lg:col-span-5">
            <div className="lg:ms-5">
              <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                Research Problem
              </h3>

              {/* <h5 className="mb-6 md:text-xl text-xl md:leading-normal leading-normal ">Problem</h5> */}
              <p className="mb-6 text-slate-400 max-w-xl text-[15px]">
                Despite existing work in the domain of integrating LLMs in
                online learning to personalize and automate the teaching and
                learning process, there still exists a significant gap in
                adhering to standard teaching and learning techniques. The
                combination of simulating pedagogical frameworks with LLMs, and
                monitoring the learning approach via learning analytics in an
                online context, remains an area that requires further
                exploration.
              </p>

              <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                Proposed Solution
              </h3>
              <p className="text-slate-400 max-w-l text-[15px] mt-6">
                This project focuses on developing a novel personalized online
                learning platform, <b>SoloScholar</b>, for undergraduates in
                HEIs by considering three learning levels: beginner,
                intermediate, and advanced. The platform takes into account the
                three different teaching roles of a HEI as lecturer, tutor, and
                lab instructor and the associated pedagogical frameworks. These
                theoretical frameworks lay the foundation for the platform’s
                design and development in simulating these three teaching roles.{" "}
                <b>SoloScholar</b> leverages LLMs to simulate the standard
                teaching and learning techniques based on the pedagogical
                frameworks in the design and delivery of personalized
                educational content and student assessment. Additionally, it
                also incorporates a 3D virtual avatar to provide a more
                interactive learning environment along with an educator-focused
                learning analytics dashboard to monitor this online learning
                approach.
              </p>

              {/* <div className="mt-6">
                                <Link href="#project" className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md me-2 mt-2">See Work</Link>
                            </div> */}
            </div>
          </div>

          <div className="lg:col-span-7 lg:px-8">
            <video width="750" height="500" controls>
              <source
                src="https://firebasestorage.googleapis.com/v0/b/betterhelpbackend.appspot.com/o/SoloScholar.mp4?alt=media&token=2c7ef722-2f1f-4997-90d4-bed749c11e0d"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      {/* <div className="container md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Hobbies & Expertise</h3>

                    <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {expertiseData.map((item,index)=>{
                        const Icon = item.Icon
                        return(
                            <div className="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900" key={index}>
                            <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                                <div className="rotate-45">
                                   <Icon className="h-5 w-5"/>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-0 text-[17px] font-medium">{item.title}</h4>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div> */}
    </section>
  );
}
