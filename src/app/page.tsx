import Hero from "@/app/_components/Hero";
import NavigationBar from "@/app/_components/NavigationBar";
import Features from "@/app/_components/Features";
import Benefits from "@/app/_components/Benefits";
import HowItWorks from "@/app//_components/HowItWorks";

export default function LandingPage() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
    </>
  );
}
