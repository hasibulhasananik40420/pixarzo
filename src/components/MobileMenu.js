"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { CiMenuFries } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";

const MobileMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

 

  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };


  return (
    <div>
      <div className="bg-PrimaryColor h-[92px] flex justify-between items-center px-4 shadow-md fixed top-0 w-full z-50">
        <div>
          <Logo />
        </div>

        <div>
          <CiMenuFries
            onClick={handleMenuClick}
            className="text-2xl text-white cursor-pointer"
          />
        </div>
      </div>

      {isMenuVisible && (
        <div className="fixed top-0 right-0 h-screen w-[80%] z-50 bg-[#2C304A] p-4 text-white">
          <span className="flex justify-end cursor-pointer">
            <VscChromeClose
              onClick={handleMenuClick}
              className="text-xl text-red-500 "
            />
          </span>

          <div className="mt-10 flex flex-col gap-4">
            <div
              onClick={handleMenuClick}
              className="bg-[#0F172A] text-[20px] text-white font-JakartaFont font-medium py-2 px-4 rounded cursor-pointer hover:bg-secondaryColor duration-300"
            >
              Home
            </div>

            <div
              onClick={handleMenuClick}
              className="bg-[#0F172A] text-[20px] text-white font-JakartaFont font-medium py-2 px-4 rounded cursor-pointer hover:bg-secondaryColor duration-300"
            >
              Case Study
            </div>

            <div
              onClick={handleMenuClick}
              className="bg-[#0F172A] text-[20px] text-white font-JakartaFont font-medium py-2 px-4 rounded cursor-pointer hover:bg-secondaryColor duration-300"
            >
              About Us
            </div>
            <div
              onClick={handleMenuClick}
              className="bg-[#0F172A] text-[20px] text-white font-JakartaFont font-medium py-2 px-4 rounded cursor-pointer hover:bg-secondaryColor duration-300"
            >
              Blog
            </div>
            <div
              onClick={handleMenuClick}
              className="bg-[#0F172A] text-[20px] text-white font-JakartaFont font-medium py-2 px-4 rounded cursor-pointer hover:bg-secondaryColor duration-300"
            >
              Contact Us
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
