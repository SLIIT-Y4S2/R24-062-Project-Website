"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";
import { teamData } from "../Data/data";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="team relative rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden">
      <Image
        src={member.image}
        alt={member.name}
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
          {member.name}
        </Link>
        <br />

        <h1
          className="mt-8"
          style={{
            background: "#1890FF",
            color: "white",
            padding: "2px",
            width: "100px",
            borderRadius: "5px",
            textAlign: "center",
            fontSize: "10px",
          }}
        >
          {member.role}
        </h1>

        {member.position && <h1 className="mt-4">{member.position}</h1>}

        <p className="text-slate-400 mt-2 text-[15px]">{member.institution}</p>

        <h1 className="mt-5">Department</h1>
        <p className="text-slate-400 mt-2 text-[15px]">{member.department}</p>

        <div className="mt-5 flex gap-x-4">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1"
          >
            <Unicons.UilLinkedin />
          </a>
          <span style={{ width: "15px" }}></span>
          <a
            href={`mailto:${member.email}`}
            className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1"
          >
            <Unicons.UilFastMail width={30} height={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <section className="relative md:py-24 py-16" id="team">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Meet Our Team !
          </h3>
          {/* <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            Obviously I am a Web Designer. Web Developer with over 7 years of
            experience. Experienced with all stages of the development.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-2">
          {teamData.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
