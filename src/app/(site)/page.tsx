import Brands from "@/src/components/Brands";
import Feature from "@/src/components/Features";
import FeaturesTab from "@/src/components/FeaturesTab";
import FunFact from "@/src/components/FunFact";
import Hero from "@/src/components/Hero";
import Testimonial from "@/src/components/Testimonial";
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
      <FeaturesTab/>
      <FunFact/>
      <Brands/>
      <Testimonial/>
    </main>
  );
}
