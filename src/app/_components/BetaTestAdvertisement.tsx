import React from "react";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";

export default function BetaTestAdvertisement() {
  return (
    <Container className="relative bg-gradient-to-r from-blue-primary to-[#13B4C9] overflow-hidden !py-0 my-10 m-auto rounded-lg drop-shadow-lightBlue">
      <div className="relative max-w-[1440px] m-auto min-h-[400px] px-6 rounded-lg overflow-hidden">
        <div className="md:max-w-[60%] absolute top-1/2 -translate-y-1/2 space-y-2 z-20 md:right-0 right-6 left-6">
          <h1 className="font-bold font-sora text-3xl">
            Apply to the Beta Test: Experience the Future Today!
          </h1>
          <p>
            Apply to our exclusive beta test for the AI Coding
            Companion—experience real-time intelligent coding assistance and
            help shape the future of software development!
          </p>
          <Button className="text-black bg-white hover:bg-white/90 transition-colors py-2 px-3 rounded-lg border-none font-medium">
            Join today
          </Button>
        </div>
        <Image
          src="/ai2.png"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[95%] w-auto absolute right-6 bottom-0 md:opacity-100 opacity-25 transition-opacity duration-300 object-cover pointer-events-none"
          alt="ai"
        />
      </div>
    </Container>
  );
}
