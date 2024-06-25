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
    gsap.to(".pricing-heading", {
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
      <h2 className="font-sora text-3xl font-semibold text-center pricing-heading opacity-0 translate-y-[15px]">
        Our Pricing Plans
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-6 relative">
        {pricing.map((plan, i) => (
          <article
            key={i}
            className={`bg-gray-darker border border-[#555555] p-6 rounded-lg relative ${plan?.additionalClassNames} z-20 pricing-plan opacity-0 -translate-x-10`}
          >
            <h4 className="text-blue-primary text-center text-lg">
              [{plan.name}]
            </h4>
            <h2 className="font-sora text-3xl font-bold text-center my-4">
              {Number.isInteger(plan.price)
                ? `$${plan.price}/month`
                : "Contact us"}
            </h2>
            <ul className="pb-6">
              {plan.bulletPoints.map((bulletPoint, j) => (
                <li
                  key={j}
                  className="flex items-center gap-2 text-gray-light mb-1"
                >
                  <span>
                    <FaCircleCheck className="text-blue-primary" />
                  </span>
                  {bulletPoint}
                </li>
              ))}
            </ul>
            <Button className="text-gray-light hover:text-white transition-colors font-semibold absolute bottom-6 right-6 text-sm">
              LEARN MORE
            </Button>
          </article>
        ))}
      </div>
    </Container>
  );
}
