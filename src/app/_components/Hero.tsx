"use client";
import { BsThreeDots } from "react-icons/bs";
import { PiRectangleDashedBold } from "react-icons/pi";
import { GoDash } from "react-icons/go";
import { IoCloseSharp, IoDocumentsOutline } from "react-icons/io5";
import {
  VscDebugRerun,
  VscExtensions,
  VscSearch,
  VscSettingsGear,
  VscSourceControl,
} from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";

import Container from "@/app/_components/Container";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const tl = gsap.timeline();

export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".left-hero",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.75, duration: 0.25 }
    );
    gsap.fromTo(
      ".code-editor",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.75, duration: 0.25 }
    );
    tl.fromTo(
      ".top-nav-option",
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, stagger: 0.025, delay: 1 }
    )
      .fromTo(
        ".sidebar-icon",
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, stagger: 0.025 }
      )
      .fromTo(
        ".code-editor-html",
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.75 }
      )
      .fromTo(
        ".ai-dashboard",
        { right: 100, opacity: 0 },
        { right: 0, opacity: 1, duration: 0.4, ease: "power2.inOut" }
      )
      .to(".ai-dashboard-suggesting", { opacity: 0, delay: 2 })
      .fromTo(
        ".ai-dashboard-response",
        { x: -15, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.175 }
      );
  }, []);
  return (
    <Container className="relative bg-black" id="#hero">
      <section className="grid lg:grid-cols-10 items-center max-w-[1440px] m-auto p-5 gap-5">
        <div className="flex flex-col gap-2 col-span-4 left-hero">
          <h1 className="font-sora text-white text-4xl font-bold">
            Your Personalized <br /> AI{" "}
            <span className="font-black">Coding Companion</span>
          </h1>
          <Link
            href="#features"
            className="bg-blue-primary text-white py-2 px-4 rounded-md text-base font-inter font-medium w-fit"
          >
            Check it out
          </Link>
        </div>
        <div className="flex items-center gap-5 h-full sm:h-96 w-full col-span-6 sm:flex-row flex-col drop-shadow-lightBlue">
          <section className="bg-[#1F1F1F] border border-[#555555] rounded-lg sm:h-full h-[250px] sm:w-[70%] w-full relative code-editor z-[2]">
            <nav className="absolute top-2 flex justify-between w-full px-2 z-[2]">
              <ul className="text-[10px] text-gray-light flex items-center gap-2">
                <li className="top-nav-option cursor-pointer">File</li>
                <li className="top-nav-option cursor-pointer">Edit</li>
                <li className="top-nav-option cursor-pointer">Selection</li>
                <li className="top-nav-option cursor-pointer">View</li>
                <span className="items-center gap-2 sm:flex hidden">
                  <li className="top-nav-option cursor-pointer">Go</li>
                  <li className="top-nav-option cursor-pointer">Debug</li>
                  <li className="top-nav-option cursor-pointer">Terminal</li>
                  <li className="top-nav-option cursor-pointer">Help</li>
                </span>
                <li className="sm:hidden visible top-nav-option cursor-pointer">
                  <BsThreeDots />
                </li>
              </ul>
              <ul className="text-[10px] text-gray-light flex items-center gap-2">
                <GoDash className="top-nav-option cursor-pointer" />
                <PiRectangleDashedBold className="top-nav-option cursor-pointer" />
                <IoCloseSharp className="top-nav-option cursor-pointer" />
              </ul>
            </nav>
            <aside className="absolute top-0 pt-8 pb-2 left-2 flex flex-col justify-between h-full">
              <div className="text-base text-gray-light space-y-2">
                <IoDocumentsOutline className="sidebar-icon cursor-pointer" />
                <VscSearch className="sidebar-icon cursor-pointer" />
                <VscSourceControl className="sidebar-icon cursor-pointer" />
                <VscDebugRerun className="sidebar-icon cursor-pointer" />
                <VscExtensions className="sidebar-icon cursor-pointer" />
              </div>
              <div className="text-base text-gray-light space-y-2">
                <CgProfile className="sidebar-icon cursor-pointer" />
                <VscSettingsGear className="sidebar-icon cursor-pointer" />
              </div>
            </aside>
            <Image
              src="/html.png"
              alt="html"
              className="absolute top-8 left-8 pointer-events-none code-editor-html"
              height={149}
              width={200}
            />
          </section>
          <section className="bg-[#1F1F1F] border border-[#555555] rounded-lg sm:h-full h-[250px] sm:w-[30%] w-full relative ai-dashboard">
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={60}
              className="absolute top-2 left-1/2 -translate-x-1/2"
            />
            <p className="text-[10px] text-gray-light absolute top-14 text-center w-full">
              Your AI coding companion
            </p>
            <ul className="top-20 absolute w-full space-y-2 px-3">
              {Array.from(new Array(6)).map((item, index) => (
                <li
                  key={index}
                  className={`w-full h-3 bg-gray-dark rounded-xl ai-dashboard-response`}
                />
              ))}
            </ul>
            <div className="absolute bottom-2 w-[85%] left-1/2 -translate-x-1/2 rounded-xl text-[10px] text-gray-light bg-black/40 p-2 flex items-center gap-2 ai-dashboard-suggesting">
              <AiOutlineLoading3Quarters className="animate-spin text-blue-primary" />
              AI is suggesting...
            </div>
          </section>
        </div>
      </section>
    </Container>
  );
}
