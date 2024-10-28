'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { expertiseData } from "../Data/data"
import CountUp from 'react-countup';

export default function Methodology() {

    return (
        <section className="relative md:py-24 py-16" id="about">
            <div className="container">
                <div className="lg:col-span-5 lg:px-8 mb-5">




                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Methodology</h3>

                    <p className="text-slate-400 text-[15px]">The foundation of this project was based on a strong theoretical background mainly related to teaching and learning techniques, and learning analytics. We adopted a systematic approach by starting with an extensive search for scholarly work to gather, evaluate, and synthesize relevant literature on the subject.</p>
                    <p className="text-slate-400 text-[15px] mt-6">On the theoretical aspect, the cognitive levels of Bloom’s Taxonomy were utilized to classify the three learning levels as beginner, intermediate, and advanced. Afterward, the teaching and learning frameworks identified from past scholarly work were analyzed to establish a theoretical mapping between cognitive levels, learning levels, and lesson learning outcomes.
                    </p>
                    <p className="text-slate-400 text-[15px] mt-6">On the technical aspect, the established theoretical mappings were used to formulate the necessary prompt templates. This also included leveraging the technique of Retrieval Augmented Generation (RAG) to utilize contextually relevant information from a knowledge base. Eventually, the powerful combination of the GPT-4o-mini model and LangChain framework was used for the synthesis and technical simulation of these teaching-learning frameworks. Similarly, an educator-focused Learning Analytics Dashboard (LAD) was also developed by
                        implementing the stages of the LAVA framework identified during the literature survey. This is also equipped with the ability to generate custom visualizations to cater to varying analytical goals of users, thereby serving as powerful tool for observing and analyzing the learning approach. </p>

                    {/* <div className="mt-6">
                                <Link href="#project" className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md me-2 mt-2">See Work</Link>
                            </div> */}


                </div>
                <div className="lg:col-span-5 lg:px-8">

                    <Image src="/images/works/12345.png" alt="" height={0} width={0} sizes="100vw" style={{ height: "auto", width: "100%" }} className="shadow-md shadow-gray-200 dark:shadow-gray-800" />



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
    )
}