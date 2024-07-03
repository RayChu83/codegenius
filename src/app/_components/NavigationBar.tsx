"use client";
import Image from "next/image";
import { navigationElements } from "@/app/constants";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function NavigationBar() {
  const [navigationOpened, setNavigationOpened] = useState(false);

  useEffect(() => {
    if (navigationOpened) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
    return () => enablePageScroll();
  }, [navigationOpened]);

  const handleNavToggle = () => {
    setNavigationOpened((prev) => !prev);
  };
  const handleLinkClicked = () => {
    setNavigationOpened(false);
  };
  return (
    <header className="flex justify-between items-center m-auto px-5 xl:px-10 py-7 fixed top-0 w-full z-[70] backdrop-blur-md bg-black/40 border-b border-gray-darker">
      <Link href="#hero">
        <Image
          src="/logo.png"
          alt="logo"
          width={188}
          height={28}
          className="pointer-events-none"
        />
      </Link>
      <nav className="space-x-10 hidden md:block">
        {navigationElements
          .filter((element) => element.type === "middle")
          .map(({ href, label }, index) => (
            <Link
              href={href}
              key={index}
              className="interactive-element uppercase font-semibold text-[12px] tracking-widest"
              onClick={handleLinkClicked}
            >
              {label}
            </Link>
          ))}
      </nav>
      <nav className="space-x-10 hidden lg:block">
        {navigationElements
          .filter((element) => element.type === "right")
          .map(({ href, label }, index) => (
            <Link
              href={href}
              key={index}
              className="interactive-element uppercase font-semibold text-[12px] tracking-widest"
              onClick={handleLinkClicked}
            >
              {label}
            </Link>
          ))}
      </nav>
      {navigationOpened ? (
        <IoClose
          className="md:hidden block text-xl interactive-element"
          onClick={handleNavToggle}
        />
      ) : (
        <CgMenuRight
          className="md:hidden block text-xl interactive-element"
          onClick={handleNavToggle}
        />
      )}
      <div
        className={`absolute w-full h-[100vh] top-[85px] left-0 bg-black md:hidden ${
          navigationOpened ? "flex items-center" : "hidden"
        }`}
      >
        <nav className="w-full h-fit flex flex-col absolute my-auto text-center gap-12">
          {navigationElements.map(({ href, label }, index) => (
            <Link
              href={href}
              key={index}
              className="interactive-element uppercase font-semibold text-xl w-fit mx-auto tracking-wider"
              onClick={handleLinkClicked}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
