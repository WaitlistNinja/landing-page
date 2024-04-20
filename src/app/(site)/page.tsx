import Feature from "@/src/components/Features";
import FunFact from "@/src/components/FunFact";
import Hero from "@/src/components/Hero";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "WaitlistNinja",
  description:
    "WaitlistNinja - create no code viral waitlist and get amazing traction on launch day!",
};

export default function Home() {
  return (
    <main>
      <Hero/>
      <Feature/>
      <FunFact/>
    </main>
  );
}
