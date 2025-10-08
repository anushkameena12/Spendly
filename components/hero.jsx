"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
    const imageRef = useRef(null);
  
    useEffect(() => {
      const imageElement = imageRef.current;
  
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100;
  
        if (scrollPosition > scrollThreshold) {
          imageElement.classList.add("scrolled");
        } else {
          imageElement.classList.remove("scrolled");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);







  return (
  <div className="pb-20 px-4">
    <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 font-bold text-green-900 bg-gradient-to-r from-green-900 via-green-600 to-green-500 bg-clip-text text-transparent"
>
            Manage your Finances <br/> with Ease
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Spendly helps you keep track of your expenses and income, <br/> so you can focus on what matters.
            </p>
            <div className="flex justify-center space-x-4">
                <Link href="/dashboard">
                <Button size="lg" className="px-8 bg-green-900 text-white hover:bg-green-600 px-8 py-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl  focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50  font-semibold  text-lg  tracking-wide  uppercase 
        shadow-lg">
                    Get Started
                    </Button>
                </Link>
                
            </div >
            <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
                    <Image
                        src="/banner.jpg"
                        width={1280}
                        height={5}
                        alt="Dashboard Preview"
                        className="rounded-lg shadow-2xl border mx-auto"
                        priority
                        />
                </div>
            </div>
        </div> 

  </div>
    );
};

export default HeroSection
