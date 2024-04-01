import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import LogoCloud from "./LogoCloud";
import BentoGridSection from "./BentoGrid";
import Footer from "./Footer";
import CTA from "./CTA";

type Props = {};

export default function LandingPageOne({}: Props) {
  return (
    <div>
        <Hero />
      <BentoGridSection />
    </div>
  );
}
