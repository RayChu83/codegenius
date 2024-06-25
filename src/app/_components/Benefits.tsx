import React from "react";
import Container from "@/app/_components/Container";
import { benefits } from "../constants";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";

export default function Benefits() {
  return (
    <Container className="max-w-[1440px] m-auto relative" id="benefits">
      <h2 className="text-3xl font-semibold font-sora text-center">
        Transform your{" "}
        <span className="text-blue-primary">coding experience</span>
      </h2>
      <div className="md:grid grid-cols-10 md:grid-rows-bentobox gap-6 mt-10 flex flex-col">
        {benefits.map((benefit, i) => (
          <article
            key={i}
            className={`bg-gray-darker border border-[#555555] p-6 ${benefit?.additionalClassNames} rounded-lg relative md:col-span-4`}
          >
            <h3 className="text-xl font-medium font-sora">{benefit.heading}</h3>
            <ul>
              {benefit.bulletPoints.map((bulletPoint, j) => (
                <li key={j} className="flex items-center gap-2 text-gray-light">
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
                  className="w-auto h-4/5 absolute bottom-0 right-0 xl:opacity-100 md:opacity-20 transition-all duration-300 xl:drop-shadow-lightBlue overflow-hidden"
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </Container>
  );
}
