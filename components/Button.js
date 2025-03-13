"use client";
import { IoIosArrowDown } from "react-icons/io";

export default function Button({ title, link }) {
  const handleClick = () => {
    const targetSection = document.getElementById(link);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group relative flex justify-between items-center min-w-[120px] px-4 py-2 text-sm font-medium 
      uppercase tracking-wide text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
      rounded-xl shadow-md transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 
      hover:bg-gradient-to-l hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 
      active:scale-95"
    >
      <span>{title}</span>
      <IoIosArrowDown size={18} />
    </button>
  );
}
