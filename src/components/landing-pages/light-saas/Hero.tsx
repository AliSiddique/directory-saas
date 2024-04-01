"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaneIcon } from "lucide-react";
import Link from "next/link";
export const FADE_UP_ANIMATION = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};
const Hero = () => {
  return (
<section>
  <div className="w-full mx-auto  max-w-screen-2xl  px-8 mt-24 pt-24 text-center   ">
    <p className="text-2xl lg:text-7xl tracking-tighter text-white font-medium uppercase">
      Explore our <span className="text-accent-500">directory</span> 
       
    </p>
    <p className="text-2xl lg:text-7xl md:mt-4  tracking-wide  uppercase text-white font-medium">
       for all your needs
    </p>
       

    <div className="max-w-lg mt-12 mx-auto">
      <label htmlFor="search" className="sr-only">Quick search</label>
      <div className="relative inline-flex w-full items-center">
        <input
          placeholder="Search for topics, titles and authors..."
          type="text"
          name="search"
          id="search"
          className="block items-center pl-12 w-full rounded-full h-14 border-0 bg-zinc-800  relative  border-trasnparent py-1.5 pr-14 text-white ring-0 ring-inset ring-transparent placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-accent-500 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 left-0 flex py-5 pl-4">
          <svg
            className="inline-flex items-center w-4 h-4 text-zinc-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            ><path
              fill="currentColor"
              d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"
            >
            </path></svg
          >
        </div>
      </div>
    </div>
  
  </div>
</section>


  );
};

export default Hero;


