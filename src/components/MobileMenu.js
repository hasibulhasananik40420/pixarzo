"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const MobileMenu = () => {
  
  const [isFixed, setIsFixed] = useState(false);
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 300;
    const scrolled = window.scrollY;

    if (scrolled > scrollThreshold && !isFixed) {
      setIsFixed(true);
    } else if (scrolled <= scrollThreshold && isFixed) {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]); // Re-run effect only when isFixed changes

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  return (
    <section className={`${isFixed ? "fixed top-0" : ""} bg-PrimaryColor h-[96px] px-3 transition-all ease-in-out duration-500 w-full z-50 `}>
      <div className="flex justify-between items-center h-[96px] px-3">
        <Logo />
        <div className="">
          <CiMenuFries onClick={() => setShow(true)} className="text-3xl text-white font-bold cursor-pointer" />
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <>
            <motion.div
              className="fixed top-0 left-0 w-full h-full  z-50"
              onClick={() => setShow(false)}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sidebarVariants}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              className="absolute lg:hidden xl:hidden top-0 right-0 w-full h-screen flex flex-col items-start"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
            >
              <div className="w-[100%] h-full bg-[#112240] flex flex-col z-50 relative pt-20 px-8 md:px-12">
                <IoMdClose onClick={() => setShow(false)} className="text-3xl cursor-pointer text-red-500 absolute top-4 right-4 duration-300" />

                <div className="flex flex-col gap-8">
                  
                    <Link onClick={() => setShow(false)} href={"/"}>
                      <h1 className="text-[24px] text-white font-medium leading-[26px] ">Home</h1>
                      
                    </Link>
                  
                   <Link onClick={() => setShow(false)} href={"/"}>
                      <h1 className="text-[24px] text-white font-medium leading-[26px] ">Case Study</h1>
                      
                    </Link>
                    <Link onClick={() => setShow(false)} href={"/"}>
                      <h1 className="text-[24px] text-white font-medium leading-[26px] "> About Us</h1>
                      
                    </Link>
                    <Link onClick={() => setShow(false)} href={"/"}>
                      <h1 className="text-[24px] text-white font-medium leading-[26px] ">Blog</h1>
                      
                    </Link>
                    <Link onClick={() => setShow(false)} href={"/"}>
                      <h1 className="text-[24px] text-white font-medium leading-[26px] ">Contact Us</h1>
                      
                    </Link>
                  

                 
                  
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MobileMenu;

