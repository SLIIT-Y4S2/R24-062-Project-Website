'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { expertiseData } from "../Data/data"
import CountUp from 'react-countup';

export default function AboutUs() {

    return (
        <section className="relative md:py-24 py-16" id="about">
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

                    <div className="lg:col-span-7">
                        <div className="lg:ms-5">
                            <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Literature Survey</h3>

                            <p className="text-slate-400 max-w-xl text-[15px]">Personalized learning has emerged as a promising approach to enhance student learning outcomes and engagement. A study by Abedi et al. [1] demonstrated that a personalized learning approach resulted in significant enhancements in content mastery, cognitive engagement, agentic engagement, emotional engagement, and self-regulated learning.</p>
                            <p className="text-slate-400 max-w-xl text-[15px] mt-6">Understanding the various learning styles of learners is vital for individualized instruction. Pilot experiments also illustrate that merging individualized learning style preferences with relevant learning materials can boost educational efficacy in platforms like Learning Management Systems (LMSs) [2].</p>
                            <p className="text-slate-400 max-w-xl text-[15px] mt-6">Effective teaching comprises content delivery and accurate student comprehension via assessment and feedback. It involves the evaluation of learning outcomes, providing constructive feedback, and maintaining academic integrity [3]. Furthermore, in the context of online learning, it is essential to gain insights into the learning process to determine its effectiveness and understand student engagement [4], [5].</p>
                            <p className="text-slate-400 max-w-xl text-[15px] mt-6">The swift advancements in Artificial Intelligence (AI) and the trending rise of Large Language Models (LLMs) have revolutionized and opened new opportunities in the educational domain. The application of LLMs for education (LLM4Edu) in the online context has broad prospects. They have the potential for personalization and digital content creation. Carefully crafted LLM applications hold the potential to serve as intelligent and personalized tutors, ultimately enhancing the quality and learning experience in online learning [6].</p>
                            <p className="text-slate-400 max-w-xl text-[15px] mt-6">The work of Blobstein et al. [7] proposes Angel, a system that uses LLMs and teaching frameworks like Bloom&apos;s Taxonomy to generate high-quality educational questions. Moreover, Matelsky et al. [8] proposed a solution that uses LLMs to deliver fast and customized feedback. Apart from these, the adoption of Learning Analytics (LA) in Higher Education Institutes (HEIs) has allowed for gaining insights into learning behaviors and patterns and making data-driven decisions accordingly [9].</p>
                            <p className="text-slate-400 max-w-xl text-[15px] mt-6">The literature review aims to provide a comprehensive understanding of the current state of personalized learning, learning styles, effective teaching, and the application of AI and LLMs in education. The review will also explore the potential of LLM4Edu in enhancing personalized learning and teaching practices in online learning environments.</p>


                            {/* <div className="mt-6">
                                <Link href="#project" className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md me-2 mt-2">See Work</Link>
                            </div> */}
                        </div>
                    </div>


                    <div className="lg:col-span-5 lg:px-8">
                        <div className="relative">
                            <div className="absolute inset-0 -mt-[10px] -ms-3 h-[100%] w-[100%] -z-1"></div>
                            {/* <Image src="/images/ab2.jpg"  alt="" height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}}  className="rounded-full shadow-md shadow-gray-200 dark:shadow-gray-800"/> */}

                            <h1 style={{ marginBottom: "10px" }}>References</h1>

                            <p style={{ fontSize: "10px" }}>
                                [1] 	R. Abedi, M. N. Ahmadabadi, F. Taghiyareh, K. Aliabadi and S. P. Ardakani, &quot;The Effects of Personalized Learning on Achieving Meaningful Learning Outcomes,&quot; Interdisciplinary Journal of Virtual Learning in Medical Sciences, vol. 12, no. 3, pp. 177-187, 2021.<br />
                                [2] 	E. H. Lim, A. Sangodiah, M. Muniandy, P. Isawasan, P. K. Yuen and S. al Nallusamy, &quot;Integration of Teaching Taxonomy into Personalized Learning Management System using Felder-Silverman Model,&quot; in 2019 IEEE Conference on Sustainable Utilization and Development in Engineering and Technologies (CSUDET), Penang, 2020.<br />
                                [3] 	F. M. Guangul, A. H. Suhail, M. I. Khalit and B. A. Khidhir, &quot;Challenges of remote assessment in higher education in the context of COVID-19: a case study of MiddleEast College,&quot; Educational Assessment, Evaluation and Accountability, vol. 32, pp. 519-535, 2020.<br />
                                [4] 	I. Masiello, Z. A. Mohseni, F. Palma, S. Nordmark, H. Augustsson and R. Rundquist, &quot;A Current Overview of the Use of Learning Analytics Dashboards,&quot; Education Sciences, vol. 14, no. 82, 2024.<br />
                                [5] 	L. K. Lee, S. K. Cheung and L. F. Kwok, &quot;Learning analytics: current trends and innovative practices,&quot; Journal of Computers in Education, vol. 7, pp. 1-6, 2020.<br />
                                [6] 	W. Gan, Q. Zhong-Ying, J. Wu and J. C. Lin, &quot;Large Language Models in Education: Vision and opportunities,&quot; in IEEE International Conference on Big Data (Big Data), 2023.<br />
                                [7] 	A. Blobstein, D. Izmaylov, T. Yifat, M. Levy and D. Izmaylov, &quot;Angel: A New Generation Tool for Learning Material based Questions and Answers,&quot; NeurIPS&apos;23 Workshop on Generative AI for Education, 2023.<br />
                                [8] 	J. K. Matelsky, F. Parodi, T. Liu, R. D. Lange and K. P. Kording, &quot;A large language model-assisted education tool to provide feedback on open-ended responses,&quot; arXiv preprint arXiv:2308.02439, 2023.<br />
                                [9] 	B. T. Wong and K. C. Li, &quot;A review of learning analytics intervention in higher education (2011–2018),&quot; Journal of Computers in Education, vol. 7, pp. 7-28, 2019.<br />
                                [10] 	S. Nundy, A. Kakar and Z. A. Bhutta, How to Practice Academic Medicine and Publish from Developing Countries? : A Practical Guide, Singapore: Springer Singapore, Imprint Springer, 2022, pp. 405-413.<br />
                            </p>


                            {/* <div className="absolute lg:bottom-20 md:bottom-10 bottom-6 ltr:lg:-right-16 rtl:lg:-left-16 ltr:md:-right-8 rtl:md:-left-8 ltr:right-0 rtl:left-0 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                                <h6 className="font-semibold">Web Desinger</h6>
                                <span className="text-2xl font-medium text-amber-500 mb-0"><span className="counter-value font-bold" data-target="7"><CountUp
                                            start={7}
                                            className="counter-value"
                                            end={180}
                                            duration={2.75} /></span>+</span>
                                <span className="text-sm text-slate-400">Years <br/> Experience</span>
                            </div> */}
                        </div>
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
    )
}