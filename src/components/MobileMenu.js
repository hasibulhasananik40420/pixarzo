"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const MobileMenu = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 400;
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

  return (
    <section
      className={`${
        isFixed ? "fixed top-0" : ""
      } bg-PrimaryColor h-[96px] px-3 transition-all ease-in-out duration-500 w-full z-30 `}
    >
      <div className="flex justify-between items-center h-[96px] px-3">
        <Logo />
        <div className="">
          <CiMenuFries
            onClick={() => setShow(true)}
            className="text-3xl text-white cursor-pointer"
          />
        </div>
      </div>

      {show && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20"
            onClick={() => setShow(false)}
          />

          <div className="absolute lg:hidden xl:hidden top-0 right-0 w-full h-screen flex flex-col items-start">
            <div className="w-[100%] h-full bg-[#112240] flex flex-col z-30 relative pt-20 px-8 md:px-12">
              <IoMdClose
                onClick={() => setShow(false)}
                className="text-3xl cursor-pointer text-red-500 absolute top-4 right-4 duration-300"
              />

              <div className="flex flex-col gap-8">
                <div>
                  <Link onClick={() => setShow(false)}
                    className="h-7 overflow-x-hidden overflow-y-hidden inline-flex relative group"
                    href={"/"}
                  >
                    <h1 className="text-[24px] text-white font-medium leading-[26px] group-hover:text-[#FF338F]">
                      Home
                    </h1>
                    <span className="absolute w-full h-[2px] bg-[#FF338F] left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </Link>
                </div>

                <div>
                  <Link onClick={() => setShow(false)}
                    className="h-7 overflow-x-hidden overflow-y-hidden inline-flex relative group"
                    href={"/"}
                  >
                    <h1 className="text-[24px] text-white font-medium leading-[26px] group-hover:text-[#FF338F]">
                      Case Study
                    </h1>
                    <span className="absolute w-full h-[2px] bg-[#FF338F] left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </Link>
                </div>

                <div>
                  <Link onClick={() => setShow(false)}
                    className="h-7 overflow-x-hidden overflow-y-hidden inline-flex relative group"
                    href={"/"}
                  >
                    <h1 className="text-[24px] text-white font-medium leading-[26px] group-hover:text-[#FF338F]">
                      About Us
                    </h1>
                    <span className="absolute w-full h-[2px] bg-[#FF338F] left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </Link>
                </div>

                <div>
                  <Link onClick={() => setShow(false)}
                    className="h-7 overflow-x-hidden overflow-y-hidden inline-flex relative group"
                    href={"/"}
                  >
                    <h1 className="text-[24px] text-white font-medium leading-[26px] group-hover:text-[#FF338F]">
                      Blog
                    </h1>
                    <span className="absolute w-full h-[2px] bg-[#FF338F] left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </Link>
                </div>

                <div>
                  <Link onClick={() => setShow(false)}
                    className="h-7 overflow-x-hidden overflow-y-hidden inline-flex relative group"
                    href={"/"}
                  >
                    <h1 className="text-[24px] text-white font-medium leading-[26px] group-hover:text-[#FF338F]">
                      Contact Us
                    </h1>
                    <span className="absolute w-full h-[2px] bg-[#FF338F] left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default MobileMenu;
