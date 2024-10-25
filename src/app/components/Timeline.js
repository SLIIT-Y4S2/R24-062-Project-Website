"use client";
import React from "react";
import Image from "next/image";
export default function Timeline() {
  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="timeline"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Timeline Milestones
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            Obviously I am a Web Designer. Web Developer with over 7 years of
            timeline. Timelined with all stages of the development.
          </p>
        </div>

        {/* Timeline Milestones */}

        <div className="grid grid-cols-1 mt-8">
          <div className="relative after:content-[''] after:absolute after:top-0 ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 after:w-px after:h-full md:after:m-auto after:border-s-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0">
            <div className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 ltr:after:-left-9 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  {/* <Image src="/images/logos/facebook-logo-2019.png" className="rounded-full h-9 w-9 md:ms-auto" alt="" height={0} width={0} sizes="100vw" style={{with:"100%", height:"auto"}}/> */}
                  <h5 className="my-2 font-semibold text-lg">
                    Topic Evaluation
                  </h5>
                  <h6 className="text-sm mb-0">2024 January 12</h6>
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">Document</h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    During this phase, we carefully assessed and selected a
                    research topic that held significant relevance to our
                    project&apos;s goals, ensuring that our research direction
                    was well-founded.
                  </p>
                  {/* <progress className="w-full mt-3" value="10" max="100"></progress> */}
                  <div
                    className="w-full"
                    style={{ color: "white", background: "#D1D1D1" }}
                  >
                    <div
                      className="bg-gray p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                      style={{
                        width: "10%",
                        background: "#1890FF",
                        fontSize: "10px",
                      }}
                    >
                      25%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  {/* <Image src="/images/logos/lenovo-logo.png" className="rounded-full h-9 w-9 md:ms-auto" alt="" height={0} width={0} sizes="100vw" style={{with:"100%", height:"auto"}}/> */}
                  <h5 className="my-2 font-semibold text-lg">
                    Project Charter and Proposal
                  </h5>
                  <h6 className="text-sm mb-0">2024 January 12</h6>
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">Document</h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    We created a project charter and proposal, outlining the
                    scope, objectives, and a detailed plan for our research
                    project, serving as a roadmap for the entire research
                    journey.
                  </p>

                  <div
                    className="w-full"
                    style={{ color: "white", background: "#D1D1D1" }}
                  >
                    <div
                      className="bg-gray p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                      style={{
                        width: "10%",
                        background: "#1890FF",
                        fontSize: "10px",
                      }}
                    >
                      25%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  {/* <Image src="/images/logos/lenovo-logo.png" className="rounded-full h-9 w-9 md:ms-auto" alt="" height={0} width={0} sizes="100vw" style={{with:"100%", height:"auto"}}/> */}
                  <h5 className="my-2 font-semibold text-lg">
                    Progress Presentation I
                  </h5>
                  <h6 className="text-sm mb-0">2024 January 12</h6>
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">Viva</h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    During this phase, we presented an initial overview of our
                    research progress to stakeholders, providing a glimpse of
                    our project&apos;s development and key findings.
                  </p>
                  <div
                    className="w-full"
                    style={{ color: "white", background: "#D1D1D1" }}
                  >
                    <div
                      className="bg-gray p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                      style={{
                        width: "10%",
                        background: "#1890FF",
                        fontSize: "10px",
                      }}
                    >
                      25%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  {/* <Image src="/images/logos/lenovo-logo.png" className="rounded-full h-9 w-9 md:ms-auto" alt="" height={0} width={0} sizes="100vw" style={{with:"100%", height:"auto"}}/> */}
                  <h5 className="my-2 font-semibold text-lg">
                    Status Document I
                  </h5>
                  <h6 className="text-sm mb-0">2024 January 12</h6>
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">Document</h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    This document summarized the current status of our project,
                    offering a snapshot of where we stood in terms of research
                    goals and accomplishments.
                  </p>
                  <div
                    className="w-full"
                    style={{ color: "white", background: "#D1D1D1" }}
                  >
                    <div
                      className="bg-gray p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                      style={{
                        width: "10%",
                        background: "#1890FF",
                        fontSize: "10px",
                      }}
                    >
                      25%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  {/* <Image src="/images/logos/lenovo-logo.png" className="rounded-full h-9 w-9 md:ms-auto" alt="" height={0} width={0} sizes="100vw" style={{with:"100%", height:"auto"}}/> */}
                  <h5 className="my-2 font-semibold text-lg">
                    Progress Presentation II
                  </h5>
                  <h6 className="text-sm mb-0">2024 January 12</h6>
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">Viva</h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Our second progress presentation presented comprehensive
                    results and findings to the panel, offering a deep dive into
                    the outcomes of our research.
                  </p>
                  <div
                    className="w-full"
                    style={{ color: "white", background: "#D1D1D1" }}
                  >
                    <div
                      className="bg-gray p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                      style={{
                        width: "10%",
                        background: "#1890FF",
                        fontSize: "10px",
                      }}
                    >
                      25%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  {/* <Image src="/images/logos/lenovo-logo.png" className="rounded-full h-9 w-9 md:ms-auto" alt="" height={0} width={0} sizes="100vw" style={{with:"100%", height:"auto"}}/> */}
                  <h5 className="my-2 font-semibold text-lg">
                    Status Document II
                  </h5>
                  <h6 className="text-sm mb-0">2024 January 12</h6>
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">Document</h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    During this phase, we updated the project&apos;s status in
                    our second status document, highlighting any changes in the
                    project&apos;s status and findings that had occurred since
                    the initial status document.
                  </p>
                  <div
                    className="w-full"
                    style={{ color: "white", background: "#D1D1D1" }}
                  >
                    <div
                      className="bg-gray p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                      style={{
                        width: "10%",
                        background: "#1890FF",
                        fontSize: "10px",
                      }}
                    >
                      25%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
