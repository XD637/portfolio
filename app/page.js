"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-6 py-12">
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
      <p className="text-lg text-gray-600 font-medium mt-2">Full Stack Developer</p>

      {/* Divider */}
      <div className="w-20 h-1 bg-purple-500 mt-4 rounded-full"></div>

      {/* Description */}
      <p className="text-lg text-gray-600 mt-6 leading-relaxed text-center max-w-xl">
        Developing optimized and responsive designs using{" "}
        <span className="text-purple-500 font-medium">Next.js</span> &{" "}
        <span className="text-purple-500 font-medium">Tailwind CSS</span>.
      </p>
    </main>
  );
}
