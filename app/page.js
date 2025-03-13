"use client";

import Image from "next/image";
import Button from "@/components/Button";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/Scroll";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-6 py-12 pt-40">
      {/* Profile Image */}
      <Image
        src="/unnamed.jpg"
        alt="Kishore K"
        width={120}
        height={120}
        className="rounded-full"
      />

      {/* Name & Title */}
      <h1 className="text-4xl font-extrabold tracking-tight mt-6">Kishore K</h1>
      <p className="text-lg text-gray-500 font-medium mt-2">Full Stack Developer</p>

      {/* Divider */}
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
        mt-4 rounded-full transition-all duration-500 ease-in-out 
        hover:bg-gradient-to-l hover:from-blue-600 hover:via-purple-600 hover:to-pink-600">
      </div>

      {/* Description */}
      <p className="text-lg font-medium mt-6 leading-relaxed text-center max-w-xl 
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent 
        transition-all duration-500 ease-in-out hover:bg-gradient-to-l 
        hover:from-blue-600 hover:via-purple-600 hover:to-pink-600">
        Developing optimized & responsive designs.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4 mt-6">
        <Button title="Projects" link="projects" />
        <Button title="Skills" link="skills" />
        <Button title="Contact" link="contact" />
      </div>

      {/* Sections */}
      <div className="w-full mt-25"><Projects /></div>
      
      <Skills />
      <Contact />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
