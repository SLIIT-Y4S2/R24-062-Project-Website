"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../Data/data";
import * as Unicons from "@iconscout/react-unicons";
import { Button } from "react-scroll";

export default function Blogs() {
    return (
        <section className="relative md:py-24 py-16" id="blog">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                        Meet Our Team !
                    </h3>

                    <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
                        Obviously I am a Web Designer. Web Developer with over 7 years of
                        experience. Experienced with all stages of the development.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-8">

                   
                    <div
                        className="blog relative rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden"

                    >
                        <Image
                            src="/images/members/member5.png"
                            alt=""
                            height={0}
                            width={0}
                            sizes="100vw"
                            style={{ height: "auto", width: "100%" }}
                        />

                        <div className="content p-6">
                            <Link
                                href=""
                                className="text-[17px] hover:text-amber-500 dark:text-white dark:hover:text-amber-500 transition duration-500 ease-in-out font-medium h5"
                            >
                                Prasanna S. Haddela
                            </Link>
                            <br></br>

                            {/* <span class="text-xs mt-5 font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
                                        Undergraduate
                                    </span> */}

                            <h1 className="mt-8" style={{ background: "#1890FF", color: "white", padding: "2px", width: "100px", borderRadius: "5px", textAlign: "center", fontSize: "10px" }}>Supervisor</h1>

                            {/* <h1 className="mt-4">Undergraduate</h1> */}
                            <p className="text-slate-400 mt-2 text-[15px]">Sri Lanka Institute of Information Technology</p>

                            <h1 className="mt-5">Department</h1>
                            <p className="text-slate-400 mt-2 text-[15px]">Software Engineering</p>


                            <div className="mt-5 flex gap-x-4">
                                <Link
                                    href=""
                                    className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1"
                                >
                                    <Unicons.UilLinkedin />
                                </Link>
                                <span style={{ width: "15px" }}></span>
                                <Link
                                    href=""
                                    className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1"
                                >
                                    <Unicons.UilFastMail width={30} height={30} />
                                </Link>
                            </div>
                        </div>
                    </div>
                   

                    <div
                        className="blog relative rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden"

                    >
                        <Image
                            src="/images/members/member6.png"
                            alt=""
                            height={0}
                            width={0}
                            sizes="100vw"
                            style={{ height: "auto", width: "100%" }}
                        />

                        <div className="content p-6">
                            <Link
                                href=""
                                className="text-[17px] hover:text-amber-500 dark:text-white dark:hover:text-amber-500 transition duration-500 ease-in-out font-medium h5"
                            >
                                Ms. Malithi Nawarathne
                            </Link>
                            <br></br>

                            {/* <span class="text-xs mt-5 font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
                                        Undergraduate
                                    </span> */}

                            <h1 className="mt-8" style={{ background: "#1890FF", color: "white", padding: "2px", width: "100px", borderRadius: "5px", textAlign: "center", fontSize: "10px" }}>Co-Supervisor</h1>

                            <h1 className="mt-4">Undergraduate</h1>
                            <p className="text-slate-400 mt-2 text-[15px]">Sri Lanka Institute of Information Technology</p>

                            <h1 className="mt-5">Department</h1>
                            <p className="text-slate-400 mt-2 text-[15px]">Software Engineering</p>


                            <div className="mt-5 flex gap-x-4">
                                <Link
                                    href="https://www.linkedin.com/in/malithi-nawarathne-2a443b18b/"
                                    className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1"
                                >
                                    <Unicons.UilLinkedin />
                                </Link>
                                <span style={{ width: "15px" }}></span>
                                <Link
                                    href=""
                                    className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1"
                                >
                                    <Unicons.UilFastMail width={30} height={30} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    
                    {/* MARK: Mmember 3 */}
                    <div
                        className="blog relative rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden"

                    >
                        <Image
                            src="/images/members/member4.png"
                            alt=""
                            height={0}
                            width={0}
                            sizes="100vw"
                            style={{ height: "auto", width: "100%" }}
                        />

                        <div className="content p-6">
                            <Link
                                href=""
                                className="text-[17px] hover:text-amber-500 dark:text-white dark:hover:text-amber-500 transition duration-500 ease-in-out font-medium h5"
                            >
                                Maharanhindage V.A.R
                            </Link>
                            <br></br>

                            {/* <span class="text-xs mt-5 font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
                                        Undergraduate
                                    </span> */}

                            <h1 className="mt-8" style={{ background: "#1890FF", color: "white", padding: "2px", width: "100px", borderRadius: "5px", textAlign: "center", fontSize: "10px" }}>Group Leader</h1>

                            <h1 className="mt-4">Undergraduate</h1>
                            <p className="text-slate-400 mt-2 text-[15px]">Sri Lanka Institute of Information Technology</p>

                            <h1 className="mt-5">Department</h1>
                            <p className="text-slate-400 mt-2 text-[15px]">Software Engineering</p>


                            <div className="mt-5 flex gap-x-4">
                                <Link
                                    href="https://www.linkedin.com/in/vibhashana-ranhinda-b501a7205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1"
                                >
                                    <Unicons.UilLinkedin />
                                </Link>
                                <span style={{ width: "15px" }}></span>
                                <Link
                                    href=""
                                    className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1"
                                >
                                    <Unicons.UilFastMail width={30} height={30} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    
                    {/* MARK: Mmember 4 */}
                    <div
                        className="blog relative rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden"

                    >
                        <Image
                            src="/images/members/member1.png"
                            alt=""
                            height={0}
                            width={0}
                            sizes="100vw"
                            style={{ height: "auto", width: "100%" }}
                        />

                        <div className="content p-6">
                            <Link
                                href=""
                                className="text-[17px] hover:text-amber-500 dark:text-white dark:hover:text-amber-500 transition duration-500 ease-in-out font-medium h5"
                            >
                                Jayakody D.M.L.D
                            </Link>
                            <br></br>

                            {/* <span class="text-xs mt-5 font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
                                        Undergraduate
                                    </span> */}

                            <h1 className="mt-8" style={{ background: "#1890FF", color: "white", padding: "2px", width: "100px", borderRadius: "5px", textAlign: "center", fontSize: "10px" }}>Group Member</h1>

                            <h1 className="mt-4">Undergraduate</h1>
                            <p className="text-slate-400 mt-2 text-[15px]">Sri Lanka Institute of Information Technology</p>

                            <h1 className="mt-5">Department</h1>
                            <p className="text-slate-400 mt-2 text-[15px]">Software Engineering</p>


                            <div className="mt-5 flex gap-x-4">
                                <Link
                                    href="https://www.linkedin.com/in/dinethjayakody/"
                                    className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1"
                                >
                                    <Unicons.UilLinkedin />
                                </Link>
                                <span style={{ width: "15px" }}></span>
                                <Link
                                    href=""
                                    className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1"
                                >
                                    <Unicons.UilFastMail width={30} height={30} />
                                </Link>
                            </div>
                        </div>
                    </div>


                    
                    {/* MARK: Mmember 5 */}
                    <div
                        className="blog relative rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden"

                    >
                        <Image
                            src="/images/members/member2.png"
                            alt=""
                            height={0}
                            width={0}
                            sizes="100vw"
                            style={{ height: "auto", width: "100%" }}
                        />

                        <div className="content p-6">
                            <Link
                                href=""
                                className="text-[17px] hover:text-amber-500 dark:text-white dark:hover:text-amber-500 transition duration-500 ease-in-out font-medium h5"
                            >
                                Madhubhashana K.S
                            </Link>
                            <br></br>

                            {/* <span class="text-xs mt-5 font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
                                        Undergraduate
                                    </span> */}

                            <h1 className="mt-8" style={{ background: "#1890FF", color: "white", padding: "2px", width: "100px", borderRadius: "5px", textAlign: "center", fontSize: "10px" }}>Group Member</h1>

                            <h1 className="mt-4">Undergraduate</h1>
                            <p className="text-slate-400 mt-2 text-[15px]">Sri Lanka Institute of Information Technology</p>

                            <h1 className="mt-5">Department</h1>
                            <p className="text-slate-400 mt-2 text-[15px]">Software Engineering</p>


                            <div className="mt-5 flex gap-x-4">
                                <Link
                                    href="https://www.linkedin.com/in/sandaru-madhubhashana/"
                                    className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1"
                                >
                                    <Unicons.UilLinkedin />
                                </Link>
                                <span style={{ width: "15px" }}></span>
                                <Link
                                    href=""
                                    className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1"
                                >
                                    <Unicons.UilFastMail width={30} height={30} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* MARK: Mmember 6 */}
                    <div
                        className="blog relative rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden"

                    >
                        <Image
                            src="/images/members/member3.png"
                            alt=""
                            height={0}
                            width={0}
                            sizes="100vw"
                            style={{ height: "auto", width: "100%" }}
                        />

                        <div className="content p-6">
                            <Link
                                href=""
                                className="text-[17px] hover:text-amber-500 dark:text-white dark:hover:text-amber-500 transition duration-500 ease-in-out font-medium h5"
                            >
                                Shavinda H.K.L
                            </Link>
                            <br></br>

                            {/* <span class="text-xs mt-5 font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
                                        Undergraduate
                                    </span> */}

                            <h1 className="mt-8" style={{ background: "#1890FF", color: "white", padding: "2px", width: "100px", borderRadius: "5px", textAlign: "center", fontSize: "10px" }}>Group Member</h1>

                            <h1 className="mt-4">Undergraduate</h1>
                            <p className="text-slate-400 mt-2 text-[15px]">Sri Lanka Institute of Information Technology</p>

                            <h1 className="mt-5">Department</h1>
                            <p className="text-slate-400 mt-2 text-[15px]">Software Engineering</p>


                            <div className="mt-5 flex gap-x-4">
                                <Link
                                    href=""
                                    className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1"
                                >
                                    <Unicons.UilLinkedin />
                                </Link>
                                <span style={{ width: "15px" }}></span>
                                <Link
                                    href=""
                                    className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1"
                                >
                                    <Unicons.UilFastMail width={30} height={30} />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
