"use client";
import Container from "@/app/_components/Container";
import { features } from "@/app/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FaCircleCheck } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  useGSAP(() => {
    gsap.to(".heading", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".heading",
      },
    });
    gsap.to(".feature", {
      opacity: 1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".feature",
      },
    });
  }, []);
  return (
    <Container className="max-w-[1440px] m-auto relative !pb-20" id="features">
      <h2 className="text-3xl font-semibold text-center font-sora heading opacity-0 translate-y-[15px]">
        Why Choose Our{" "}
        <span className="text-blue-primary">AI Coding Assistant</span>
      </h2>
      <section className="grid md:grid-cols-2 items-center gap-8 mt-10">
        {features.map((feature, i) => (
          <article
            key={i}
            className={`md:even:translate-y-10 bg-gray-darker border border-[#555555] p-6 rounded-lg rounded-tr-[100px] ${feature?.className} feature h-full opacity-0 relative`}
          >
            <h3 className="text-xl font-medium font-sora">{feature.heading}</h3>
            <ul className="pb-6">
              {feature.bulletPoints.map((bulletPoint, j) => (
                <li key={j} className="flex items-center gap-2 text-gray-light">
                  <FaCircleCheck className="text-blue-primary" />
                  {bulletPoint}
                </li>
              ))}
            </ul>
            <feature.icon className="absolute bottom-6 right-6 text-xl text-gray-light hover:text-white transition-colors cursor-pointer" />
          </article>
        ))}
      </section>
    </Container>
  );
}
