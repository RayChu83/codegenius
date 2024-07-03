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
    gsap.to("#features-heading", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".features-heading",
      },
    });
    gsap.to(".feature", {
      opacity: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".feature",
      },
    });
  }, []);
  return (
    <Container
      className="max-w-[1440px] m-auto relative !md:pb-20"
      id="features"
    >
      <h2 className="heading" id="features-heading">
        Why Choose Our AI Coding Assistant
      </h2>
      <section className="grid md:grid-cols-2 items-center gap-8 mt-10">
        {features.map((feature, i) => (
          <article
            key={i}
            className={`md:even:translate-y-10 card p-6 ${feature.className} feature h-full opacity-0 relative`}
          >
            <h3 className="card-heading">{feature.heading}</h3>
            <ul className="pb-6">
              {feature.highlights.map((highlight, j) => (
                <li key={j} className="highlight">
                  <span>
                    <FaCircleCheck className="text-blue-primary" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
            <feature.icon className="absolute bottom-6 right-6 text-xl interactive-element" />
          </article>
        ))}
      </section>
    </Container>
  );
}
