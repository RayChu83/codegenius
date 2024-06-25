"use client";
import { useGSAP } from "@gsap/react";
import { roadmap } from "@/app/constants";
import Container from "@/app/_components/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export default function HowItWorks() {
  useGSAP(() => {
    gsap.to(".roadmap-step", {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".roadmap-step",
      },
    });
  }, []);
  return (
    <Container className="m-auto max-w-[1280px]" id="how-it-works">
      <h2 className="text-3xl font-semibold text-center .how-it-works-heading relative z-50">
        How our AI Coding Assistant works
      </h2>
      <section className="relative mt-10 md:pl-0 pl-12">
        {roadmap.map((step, index) => (
          <div key={index} className="md:w-1/2 even:md:ml-auto">
            <div
              className={`absolute bg-gray-dark rounded-full font-semibold p-2 w-10 h-10 flex items-center justify-center left-4 md:left-1/2 -translate-x-1/2 roadmap-step  opacity-0 translate-y-10`}
            >
              {index + 1}
            </div>
            <article
              className={`roadmap-step opacity-0 translate-y-10 md:w-4/5 w-full bg-gray-darker p-6 rounded-lg border border-[#555555] mb-6 ${
                (index + 1) % 2 ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <h3 className="text-blue-primary font-sora text-lg flex items-center">
                {index + 1}. {step.heading}
                <span className="ml-auto text-gray-light hover:text-white transition-colors cursor-pointer">
                  <step.icon />
                </span>
              </h3>
              <p className="text-gray-light">{step.description}</p>
            </article>
          </div>
        ))}
        <div className="absolute h-full w-2 bg-gray-dark top-0 left-4 md:left-1/2 -translate-x-1/2 -z-10 rounded-full" />
      </section>
    </Container>
  );
}
