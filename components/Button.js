"use client";
import { IoIosArrowDown } from "react-icons/io";

export default function Button({ title, link }) {
  const handleClick = () => {
    document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="relative flex items-center gap-2 px-4 py-2 text-sm font-medium uppercase tracking-wide text-white 
      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-md shadow-md 
      transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 
      hover:bg-gradient-to-l hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 
      active:scale-95"
    > 
      {title} <IoIosArrowDown size={18} className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
    </button>
  );
}
