import Image from "next/image";
import { navigationElements } from "@/app/constants";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <header className="flex justify-between items-center max-w-[1440px] m-auto p-5">
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
          <Link href={href} key={index} className="text-gray-light">
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
