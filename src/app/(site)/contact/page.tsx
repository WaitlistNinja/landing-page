import React from "react";
import Contact from "@/src/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WaitlistNinja - Contact Us",
  description: "Contact us - Send your message directly to the team!",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
