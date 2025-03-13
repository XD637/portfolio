"use client";

import { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
      shadow-lg transition-all duration-500 ease-in-out hover:shadow-xl 
      hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 active:scale-95 
      ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-opacity duration-300`}
    >
      <FaRocket
        className="text-white text-2xl transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
      />
    </button>
  );
}
