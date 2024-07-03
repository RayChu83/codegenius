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
    gsap.to("#benefits-heading", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".benefits-heading",
      },
    });
    gsap.to(".benefit", {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".benefit",
      },
    });
  }, []);
  return (
    <Container className="max-w-[1440px] m-auto relative" id="benefits">
      <h2 className="heading" id="benefits-heading">
        Transform your coding experience
      </h2>
      <div className="md:grid grid-cols-10 md:grid-rows-bentobox gap-6 mt-10 flex flex-col">
        {benefits.map((benefit, i) => (
          <article
            key={i}
            className={`card p-6 ${benefit?.additionalClassNames} rounded-lg relative md:col-span-4 benefit opacity-0 translate-y-10`}
          >
            <h3 className="card-heading">{benefit.heading}</h3>
            <ul>
              {benefit.highlights.map((highlight, j) => (
                <li key={j} className="highlight">
                  <span>
                    <FaCircleCheck className="text-blue-primary" />
                  </span>
                  {highlight}
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
                  className="w-auto h-4/5 absolute bottom-0 right-0 xl:opacity-100 md:opacity-20 xs:opacity-20 transition-all duration-300 xl:drop-shadow-lightBlue overflow-hidden object-cover pointer-events-none"
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </Container>
  );
}
