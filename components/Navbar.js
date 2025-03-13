"use client";

import Link from "next/link";


export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center text-lg sm:text-xl font-bold text-gray-900">
          <span className="ml-2 text-2xl">Portfolio</span>
          <span className="ml-2 text-xs font-medium bg-gray-200 text-gray-600 px-2 py-0.5 rounded-md">
            vx.x.x
          </span>
        </Link>
      </div>
    </div>
  );
}
