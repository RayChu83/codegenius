import { BsThreeDots } from "react-icons/bs";
import { PiRectangleDashedBold } from "react-icons/pi";
import { GoDash } from "react-icons/go";
import { IoCloseSharp, IoDocumentsOutline } from "react-icons/io5";
import {
  VscDebugRerun,
  VscExtensions,
  VscSearch,
  VscSettingsGear,
  VscSourceControl,
} from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";

import Container from "@/app/_components/Container";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <Container className="relative bg-black" id="#hero">
      <section className="grid lg:grid-cols-10 items-center max-w-[1440px] m-auto p-5 gap-5">
        <div className="flex flex-col gap-2 col-span-4">
          <h1 className="font-sora text-white text-4xl font-bold">
            Your Personalized <br /> AI Coding Companion
          </h1>
          <Link
            href="#features"
            className="bg-blue-primary text-white py-2 px-3 rounded-md text-base font-inter w-fit"
          >
            Check it out
          </Link>
        </div>
        <div className="flex items-center gap-5 h-full sm:h-96 w-full col-span-6 sm:flex-row flex-col">
          <section className="bg-[#1F1F1F] border border-[#555555] rounded-lg sm:h-full h-[250px] sm:w-[70%] w-full relative">
            <nav className="absolute top-2 flex justify-between w-full px-2">
              <ul className="text-[10px] text-gray-light flex items-center gap-2">
                <li>File</li>
                <li>Edit</li>
                <li>Selection</li>
                <li>View</li>
                <span className="items-center gap-2 sm:flex hidden">
                  <li>Go</li>
                  <li>Debug</li>
                  <li>Terminal</li>
                  <li>Help</li>
                </span>
                <li className="sm:hidden visible">
                  <BsThreeDots />
                </li>
              </ul>
              <ul className="text-[10px] text-gray-light flex items-center gap-2">
                <GoDash />
                <PiRectangleDashedBold />
                <IoCloseSharp />
              </ul>
            </nav>
            <aside className="absolute top-0 pt-8 pb-2 left-2 flex flex-col justify-between h-full">
              <div className="text-base text-gray-light space-y-2">
                <IoDocumentsOutline />
                <VscSearch />
                <VscSourceControl />
                <VscDebugRerun />
                <VscExtensions />
              </div>
              <div className="text-base text-gray-light space-y-2">
                <CgProfile />
                <VscSettingsGear />
              </div>
            </aside>
            <Image
              src="/html.png"
              alt="html"
              className="absolute top-8 left-8 pointer-events-none"
              height={149}
              width={200}
            />
          </section>
          <section className="bg-[#1F1F1F] border border-[#555555] rounded-lg sm:h-full h-[250px] sm:w-[30%] w-full relative">
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={60}
              className="absolute top-2 left-1/2 -translate-x-1/2"
            />
            <p className="text-[10px] text-gray-light absolute top-14 text-center w-full">
              Your AI coding companion
            </p>
            <ul className="top-20 absolute w-full space-y-2 px-3">
              {Array.from(new Array(6)).map((item, index) => (
                <li
                  key={index}
                  className={`w-full h-3 bg-gray-dark rounded-xl opacity-${
                    100 - index * 15
                  }`}
                />
              ))}
            </ul>
          </section>
        </div>
      </section>
    </Container>
  );
}
