"use client";
import React, { useState } from "react";
import Link from "next/link";
import { UilEye } from "@iconscout/react-unicons";
import Lightbox from "react-18-image-lightbox";
import "../../../node_modules/react-18-image-lightbox/style.css";
import Image from "next/image";
import { documentsData } from "../Data/data";

const DocumentCard = ({ item, onView }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
      <Image
        height={0}
        width={0}
        sizes="100vw"
        style={{ height: "auto", width: "100%" }}
        src={item.imagePath}
        alt={item.title}
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500" />
      <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
        <Link
          href="#!"
          className="text-white hover:text-amber-500 font-semibold transition-all duration-500"
        >
          {item.type}
        </Link>
        <span className="block text-sm text-slate-400">
          Submitted on {item.submitDate}
        </span>
      </div>
      <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
        <Link
          href="#"
          onClick={() => onView(item.pdfPath)}
          className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"
        >
          <UilEye width={16} />
        </Link>
      </div>
      <h1 style={{ padding: "10px", fontWeight: "bold" }}>{item.title}</h1>
    </div>
  );
};

const DocumentSection = ({ title, items, onView }) => {
  return (
    <>
      <h1 style={{ marginTop: title === "Presentations" ? "40px" : "0" }}>
        {title}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
        {items.map((item) => (
          <DocumentCard key={item.id} item={item} onView={onView} />
        ))}
      </div>
    </>
  );
};

export default function Documents() {
  const [photoIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const handleClick = (pdfPath) => {
    window.open(pdfPath, "_blank");
  };

  return (
    <section className="relative md:py-24 py-16" id="project">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Documents
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            All the documents and presentations related to the project are
            available here.
          </p>
        </div>

        <DocumentSection
          title="Documents"
          items={documentsData.documents}
          onView={handleClick}
        />

        <DocumentSection
          title="Presentations"
          items={documentsData.presentations}
          onView={handleClick}
        />
      </div>
    </section>
  );
}
