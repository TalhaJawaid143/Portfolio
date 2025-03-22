"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,31,9,1) 99%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 px-6 max-w-7xl mx-auto">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-400">
              Hello, I'm {" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Talha Jawaid",
                1000,
                "Front-end Developer",
                1000,
                "Digital Marketer",
                1000,
                "UI UX Designer",
                1000,
                "Data Scientist",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-6 lg:text-xl">
            I am a Front-end Developer with a passion for creating innovative
            solutions. I have worked on various projects in the tech industry,
            from small startups to large corporations.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
          <button
                     className="px-6 py-3 sm:w-40 rounded-full bg-gradient-to-br from-orange-500 to-cyan-800 hover:opacity-80 text-white"
                     onClick={() => window.open("https://wa.me/+923352914335", "_blank")}
              >
                    Hire Me
                </button>
                <button
  className="px-1 py-1 sm:w-40 rounded-full bg-gradient-to-br from-orange-500 to-cyan-800 hover:opacity-80 text-white mt-3 sm:mt-0"
  onClick={() => window.open("https://hackton-mile-stone-1.vercel.app/", "_blank")}
>
  <span className="block bg-[#121212] rounded-full px-5 py-2">Download CV</span>
</button>

          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="Hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;