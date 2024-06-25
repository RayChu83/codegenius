import React from "react";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";

export default function BetaTestAdvertisement() {
  return (
    <Container className="bg-gradient-to-r from-blue-primary to-[#13B4C9] relative overflow-hidden !py-0 my-10">
      <div className="relative max-w-[1440px] m-auto min-h-[350px]">
        <div className="max-w-[75%] absolute top-1/2 -translate-y-1/2 space-y-2">
          <h1 className="font-bold font-sora text-3xl">
            Apply to the Beta Test: Experience the Future Today!
          </h1>
          <p>
            Apply to our exclusive beta test for the AI Coding
            Companion—experience real-time intelligent coding assistance and
            help shape the future of software development!
          </p>
          <Button className="text-black bg-white py-2 px-3 rounded-lg border-none">
            Join now
          </Button>
        </div>
        <Image
          src="/ai2.png"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-auto absolute right-0 bottom-0 lg:opacity-100 opacity-25"
          alt="ai"
        />
      </div>
    </Container>
  );
}
