import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeGenius",
  description:
    "CodeGenius aims to boost your coding productivity with our AI-powered assistant. Write code faster, debug effortlessly, and get real-time suggestions to optimize your projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
