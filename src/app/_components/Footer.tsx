"use client";
import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { footerLinks } from "../constants";
import Link from "next/link";

export default function Footer() {
  const [openFooterSection, setOpenFooterSection] = useState<string | null>(
    null
  );
  return (
    <Container className="max-w-[1440px] m-auto">
      <footer className="flex flex-col gap-4">
        <div className="flex justify-between gap-4 items-center flex-wrap">
          <Image
            src="/logo.png"
            alt="logo"
            width={188}
            height={75}
            className="pointer-events-none"
          />
          <div className="flex gap-4">
            <FaFacebook className="w-6 h-6 cursor-pointer" />
            <FaXTwitter className="w-6 h-6 cursor-pointer" />
            <FaLinkedin className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
        <div className="grid lg:grid-cols-10 items-start">
          <article className="col-span-3 text-gray-light lg:block hidden">
            CodeGenius aims to boost your coding productivity with our
            AI-powered assistant. Write code faster, debug effortlessly, and get
            real-time suggestions to optimize your projects
          </article>
          <div className="col-span-6 flex justify-center sm:flex-row flex-col items-centers gap-4 mb-4">
            {footerLinks.map(({ section, links }, i) => (
              <section key={i} className="sm:w-fit w-full mx-auto">
                <h3
                  className="font-sora text-lg font-medium sm:bg-transparent bg-gray-darker hover:sm:bg-transparent hover:bg-gray-dark sm:p-0 p-2 cursor-pointer sm:block flex justify-between items-center transition-colors"
                  onClick={() =>
                    setOpenFooterSection((prev) => {
                      console.log(prev, section);
                      if (prev === section) {
                        return null;
                      } else {
                        return section;
                      }
                    })
                  }
                >
                  {section}
                </h3>
                <ul
                  className={`sm:block ${
                    openFooterSection === section ? "block" : "hidden"
                  } sm:space-y-0 space-y-4 pt-4`}
                >
                  {links.map(({ label, href }, j) => (
                    <li
                      key={j}
                      className="text-gray-light font-medium hover:text-white transition-colors sm:text-left text-center"
                      onClick={() => setOpenFooterSection(null)}
                    >
                      <Link href={href || ""}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <article className="col-span-1 text-sm text-gray-light">
            ©{new Date().getFullYear()}. All rights reserved
          </article>
        </div>
      </footer>
    </Container>
  );
}
