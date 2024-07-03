"use client";
import Container from "@/app/_components/Container";
import { pricing } from "../constants";
import { FaCircleCheck } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  useGSAP(() => {
    gsap.to("#pricing-heading", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".pricing-heading",
      },
    });
    gsap.to(".pricing-plan", {
      opacity: 1,
      x: 0,
      stagger: { each: 0.25 },
      scrollTrigger: {
        trigger: ".pricing-plan",
      },
    });
  }, []);
  return (
    <Container className="max-w-[1440px] m-auto" id="pricing">
      <h2 className="heading" id="pricing-heading">
        Our Pricing Plans
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-6 relative">
        {pricing.map((plan, i) => (
          <article
            key={i}
            className={`card p-6 relative ${plan?.additionalClassNames} z-20 pricing-plan opacity-0 -translate-x-10`}
          >
            <p className="text-blue-primary text-center text-lg">
              [{plan.name}]
            </p>
            <h2 className="font-sora text-3xl font-bold text-center my-4">
              {Number.isInteger(plan.price)
                ? `$${plan.price}/month`
                : "Contact us"}
            </h2>
            <ul className="pb-6">
              {plan.highlights.map((highlight, j) => (
                <li key={j} className="highlight">
                  <span>
                    <FaCircleCheck className="text-blue-primary" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
            <Button className="interactive-element font-semibold absolute bottom-6 right-6 text-sm">
              LEARN MORE
            </Button>
          </article>
        ))}
      </div>
    </Container>
  );
}
