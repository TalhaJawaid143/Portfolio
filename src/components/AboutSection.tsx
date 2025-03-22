"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  const skills = [
    {
      category: "Development",
      items: ["HTML", "CSS", "JavaScript", "TyprScript",  "React", "Next.js", "Tailwind CSS" , "BootStrap"],
    },
    {
      category: "Design",
      items: ["Figma", "Adobe Photoshop", "Canva", "UI/UX"],
    },
    {
      category: "Marketing",
      items: ["Google Analytics", "Email-Marketing", "SEO", "Content Creation"],
    },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center py-10 sm:py-16 overflow-hidden"
      style={{
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,31,9,1) 99%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto items-center">
        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-5 flex justify-center"
        >
          <div
            className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] 
            bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-1 aspect-square"
          >
            <Image
              src="/images/aboutpic.webp"
              alt="Profile picture"
              width={400}
              height={400}
              className="rounded-2xl object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 border-2 border-white/30 rounded-2xl 
              backdrop-blur-sm"
            />
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="text-center md:col-span-7 flex flex-col justify-center items-center md:items-start md:text-left space-y-4 sm:space-y-6">
          {/* "About Me" Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-400"
          >
            About MySelf:)
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base leading-relaxed text-gray-300/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            I'm a{" "}
            <span className="text-blue-400 font-medium">
              Frontend Developer
            </span>
            ,{" "}
            <span className="text-purple-400 font-medium">
              Ui Ux Designer
            </span>
            <span className="text-purple-400 font-medium">
              Data Scientist
            </span>
            , and{" "}
            <span className="text-pink-400 font-medium">Digital Marketer</span>{" "}
            passionate about crafting impactful digital experiences. My
            expertise spans:
          </motion.p>

          {/* Custom Tailwind Badges */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {skills.map((skillSet) => (
                <div
                  key={skillSet.category}
                  className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <h3 className="text-xs sm:text-sm font-semibold text-blue-300 mb-2 sm:mb-3">
                    {skillSet.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {skillSet.items.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-full
          text-gray-200 border border-blue-400/30 bg-blue-500/10
          hover:bg-blue-600/20 transition-colors duration-200 text-xs sm:text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pt-1"
          >
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
              Let's collaborate to create something extraordinary!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group w-fit px-5 py-2 sm:px-6 sm:py-3 rounded-full  bg-gradient-to-br from-orange-500 to-cyan-800 hover:opacity-80 text-white 
          transition-all duration-300 shadow-xl hover:shadow-blue-500/20"
            >
              <span
  className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base font-medium cursor-pointer"
  onClick={() => window.open("https://www.linkedin.com/in/talha-jawaid-3689952b6/", "_blank")}
>
  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform bg-gradient-to-br from-orange-500 to-cyan-800 hover:opacity-80 text-white" />
  Start Collaborating
</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
