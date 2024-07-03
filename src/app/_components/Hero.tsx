"use client";
import { BsThreeDots } from "react-icons/bs";

import Container from "@/app/_components/Container";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  aiResponse,
  codeEditorNavigationElements,
  codeEditorRightNavigationElements,
  codeEditorSidebarBottomElements,
  codeEditorSidebarElements,
  heroHeadline,
} from "@/app/constants";
import Typewriter from "./Typewriter";

const leftHeroTl = gsap.timeline();
const rightHeroTl = gsap.timeline();

export default function Hero() {
  useGSAP(() => {
    leftHeroTl
      .to(".headline-word", {
        opacity: 1,
        stagger: { each: 0.2 },
        delay: 0.5,
      })
      .to(".cta", { opacity: 1 });
    rightHeroTl
      .fromTo(".code-editor", { y: 200, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        ".top-nav-option",
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, stagger: 0.02, delay: 0.5 }
      )
      .fromTo(
        ".sidebar-icon",
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, stagger: 0.02 }
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
      .to(".ai-dashboard-suggesting", { opacity: 0, delay: 1 })
      .fromTo(".ai-dashboard-response", { opacity: 0 }, { opacity: 100 });
  }, []);
  return (
    <Container className="relative bg-black mt-24" id="#hero">
      <section className="grid lg:grid-cols-10 items-center max-w-[1440px] m-auto gap-5">
        <div className="flex flex-col gap-2 col-span-4 left-hero">
          <h1 className="font-sora text-white text-4xl font-bold">
            {heroHeadline.map((word, index) => (
              <span
                key={index}
                className={`headline-word ${word.additionalClassNames} opacity-0`}
              >
                {index === 2 && <br />}
                {word.content}{" "}
              </span>
            ))}
          </h1>
          <Link
            href="#features"
            className="bg-blue-primary hover:bg-blue-primary/90 transition-colors text-white py-2 px-3 rounded-md text-base font-inter font-medium w-fit cta opacity-0"
          >
            Learn more
          </Link>
        </div>
        <div className="flex items-center gap-5 h-full sm:h-96 w-full col-span-6 sm:flex-row flex-col drop-shadow-lightBlue">
          <section className="card sm:h-full h-[250px] sm:w-[66%] w-full relative code-editor z-[2]">
            <nav className="absolute top-2 flex justify-between w-full px-2 z-[2]">
              <ul className="text-[10px] flex items-center gap-2">
                {codeEditorNavigationElements.map((navElement, index) => (
                  <li
                    key={index}
                    className={`top-nav-option interactive-element ${
                      navElement.hiddenOnBigScreens && "sm:block hidden"
                    }`}
                  >
                    {navElement.label}
                  </li>
                ))}
                <li className="sm:hidden visible top-nav-option cursor-pointer hover:text-white transition-colors">
                  <BsThreeDots />
                </li>
              </ul>
              <ul className="text-[10px] flex items-center gap-2">
                {codeEditorRightNavigationElements.map((navElement, index) => (
                  <li
                    className={`top-nav-option cursor-pointer transition-colors ${navElement.className} w-2 h-2 rounded-full drop-shadow-sm`}
                    key={index}
                  />
                ))}
              </ul>
            </nav>
            <aside className="absolute top-0 pt-8 pb-2 left-2 flex flex-col justify-between h-full">
              <div className="text-base text-gray-light space-y-2">
                {codeEditorSidebarElements.map((sidebarElement, index) => (
                  <sidebarElement.icon
                    className="sidebar-icon interactive-element"
                    key={index}
                  />
                ))}
              </div>
              <div className="text-base text-gray-light space-y-2">
                {codeEditorSidebarBottomElements.map(
                  (sidebarElement, index) => (
                    <sidebarElement.icon
                      className="sidebar-icon cursor-pointer hover:text-white transition-colors"
                      key={index}
                    />
                  )
                )}
              </div>
            </aside>
            <Image
              src="/html.png"
              alt="html"
              className="absolute top-8 left-5 pointer-events-none code-editor-html "
              height={114}
              width={200}
            />
          </section>
          <section className="card sm:h-full h-[250px] sm:w-[34%] w-full relative ai-dashboard">
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={22}
              className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none"
            />
            <p className="card-description text-[10px] absolute top-14 text-center w-full">
              Your AI coding companion
            </p>
            <Typewriter
              text={aiResponse}
              textDelay={25}
              initialDelay={5150}
              classNames="text-[9px] text-white absolute top-20 mx-4 p-3 bg-black/25 rounded-lg ai-dashboard-response"
            />
            <div className="px-3 absolute bottom-2 w-full ">
              <div className="w-full rounded-xl text-[10px] text-gray-light bg-black/40 p-2 flex items-center gap-2 ai-dashboard-suggesting">
                <AiOutlineLoading3Quarters className="animate-spin text-blue-primary" />
                AI is suggesting...
              </div>
            </div>
          </section>
        </div>
      </section>
    </Container>
  );
}
