"use client";
import React from "react";
import Link from "next/link";
import { technologiesData } from "../Data/data";
import Image from "next/image";
import * as Unicons from "@iconscout/react-unicons";

export default function Technologies() {
  return (
    <section
      className="py-20 w-full table relative bg-no-repeat bg-center bg-cover"
      id="technologies"
    >
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 text-center">
          {/* title */}
          <h3 className="mb-4 md:text-2xl text-xl text-white font-semibold">
            Technologies Used
          </h3>

          {/* card sections */}

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {technologiesData.map((item, index) => {
              return (
                <div
                  className="py-2 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900"
                  key={index}
                >
                  <div className="content">
                    <Image
                      src={item.img}
                      alt={`Logo ${index + 1}`}
                      width={120}
                      height={80}
                      className="object-contain inline-flex items-center"
                    />

                    <div>
                      <Link
                        href=""
                        className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1"
                      >
                        {item.title}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
