"use client";
import React from "react";
import Container from "@/app/_components/Container";
import { benefits } from "../constants";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Benefits() {
  useGSAP(() => {
    gsap.to(".benefits-heading", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".benefits-heading",
      },
    });
    gsap.to(".benefit", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".benefit",
      },
    });
  }, []);
  return (
    <Container className="max-w-[1440px] m-auto relative" id="benefits">
      <h2 className="text-3xl font-semibold font-sora text-center benefits-heading opacity-0 translate-y-[15px]">
        Transform your{" "}
        <span className="text-blue-primary">coding experience</span>
      </h2>
      <div className="md:grid grid-cols-10 md:grid-rows-bentobox gap-6 mt-10 flex flex-col">
        {benefits.map((benefit, i) => (
          <article
            key={i}
            className={`bg-gray-darker border border-[#555555] p-6 ${benefit?.additionalClassNames} rounded-lg relative md:col-span-4 benefit opacity-0 translate-y-[50px]`}
          >
            <h3 className="text-xl font-medium font-sora">{benefit.heading}</h3>
            <ul>
              {benefit.bulletPoints.map((bulletPoint, j) => (
                <li
                  key={j}
                  className="flex items-center gap-2 text-gray-light mb-1"
                >
                  <FaCircleCheck className="text-blue-primary" />
                  {bulletPoint}
                </li>
              ))}
            </ul>
            {benefit.image && (
              <div className="absolute right-0 h-full w-full overflow-hidden">
                <Image
                  src={benefit.image}
                  alt="ai"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-4/5 absolute bottom-0 right-0 xl:opacity-100 md:opacity-20 xs:opacity-20 transition-all duration-300 xl:drop-shadow-lightBlue overflow-hidden"
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </Container>
  );
}
