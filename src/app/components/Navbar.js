"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Link as Link1 } from "react-scroll";
import * as Unicons from "@iconscout/react-unicons";
import Image from "next/image";

export default function Navbar() {
  let [stickyNavbar, setstickyNavbar] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
  });

  function windowScroll() {
    setstickyNavbar(
      document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50
    );
  }
  return (
    <nav className={`${stickyNavbar ? "is-sticky" : ""} navbar`} id="navbar">
      <div className="container flex flex-wrap items-center justify-between">
        <Link href="/" className="navbar-brand md:me-8">
          {/* <p>TEST SOLOSCHOLAR 123</p> */}
          <Image
            width={150}
            height={40}
            src="/images/soloscholar_logo.png"
            className="inline-block dark:hidden"
            alt=""
          />
          <Image
            width={150}
            height={40}
            src="/images/soloscholar_logo_dark.png"
            className="hidden dark:inline-block"
            alt=""
          />
        </Link>

        <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
          {/* <!-- Navbar Button --> */}
          <ul className="list-none menu-social mb-0">
            <li className="inline-flex">
              <Link1
                to="contact"
                className="ms-1"
                style={{
                  cursor: "pointer",
                }}
              >
                <span className="login-btn-primary">
                  <span className="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white">
                    <Unicons.UilEnvelope width={16} />
                  </span>
                </span>
                <span className="login-btn-light">
                  <span className="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                    <Unicons.UilEnvelope width={16} />
                  </span>
                </span>
              </Link1>
            </li>
          </ul>
          {/* <!-- Navbar Collapse Manu Button --> */}
          <button
            data-collapse="menu-collapse"
            type="button"
            className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden"
            aria-controls="menu-collapse"
            aria-expanded="false"
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
          </button>
        </div>

        {/* <!-- Navbar Manu --> */}
        <div
          className="navigation lg_992:order-1 lg_992:flex hidden ms-auto"
          id="menu-collapse"
        >
          <ul className="navbar-nav" id="navbar-navlist">
            <li className="nav-item">
              <Link1
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                style={{
                  cursor: "pointer",
                }}
              >
                Home
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="project-scope"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                style={{
                  cursor: "pointer",
                }}
              >
                Project Scope
              </Link1>
            </li>
            {/* <li className="nav-item">
              <Link1
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Literature
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="service"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Research Gap
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="technologies"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Technologies
              </Link1>
            </li> */}
            <li className="nav-item">
              <Link1
                to="timeline"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                style={{
                  cursor: "pointer",
                }}
              >
                Timeline
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="project"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                style={{
                  cursor: "pointer",
                }}
              >
                Documents
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="team"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                style={{
                  cursor: "pointer",
                }}
              >
                Team
              </Link1>
            </li>
            {/* <li className="nav-item">
              <Link1
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Contact Us
              </Link1>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
