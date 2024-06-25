"use client";
import Image from "next/image";
import { navigationElements } from "@/app/constants";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useEffect, useState } from "react";

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
    <header className="flex justify-between items-center m-auto p-5 xl:px-10 fixed top-0 w-full z-[70] backdrop-blur-md border-b border-gray-dark">
      <Link href="#hero">
        <Image
          src="/logo.png"
          alt="logo"
          width={188}
          height={75}
          className="pointer-events-none"
        />
      </Link>
      <nav className="space-x-4 hidden md:block">
        {navigationElements.map(({ href, label }, index) => (
          <Link
            href={href}
            key={index}
            className="text-gray-light hover:text-white transition-colors"
            onClick={handleLinkClicked}
          >
            {label}
          </Link>
        ))}
      </nav>
      <CgMenuRight
        className="md:hidden block text-xl text-gray-light hover:text-white transition-colors cursor-pointer"
        onClick={handleNavToggle}
      />
      <div
        className={`absolute w-full h-[100vh] top-[98px] left-0 bg-black md:hidden ${
          navigationOpened ? "block" : "hidden"
        }`}
      >
        <nav className="w-full h-full flex flex-col absolute top-[30%] text-center gap-12">
          {navigationElements.map(({ href, label }, index) => (
            <Link
              href={href}
              key={index}
              className="text-gray-light hover:text-white transition-colors uppercase font-semibold text-2xl"
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
