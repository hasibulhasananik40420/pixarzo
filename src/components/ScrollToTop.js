"use client"

import { useState, useEffect } from "react";
import { GoArrowUp } from "react-icons/go";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 550) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={handleScrollToTop}
      className={`fixed bottom-6 float-right right-6  bg-[#FF338F] ring-2 rounded-full w-[45px] h-[45px] flex justify-center items-center ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <GoArrowUp className="text-2xl animate-bounce text-white"/>
    </button>
  );
};

export default ScrollToTop;
