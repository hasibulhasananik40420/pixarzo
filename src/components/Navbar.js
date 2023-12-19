"use client"

import Link from "next/link"
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";



const Navbar = () => {

  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 500;
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
  }, [isFixed]);   // Re-run effect only when isFixed changes


  return (
     // navbar section start here 
   <section>
    
     <div className={`${
      isFixed ? "fixed top-0" : ""
    } bg-PrimaryColor h-[96px] px-3 transition-all ease-in-out duration-500 w-full z-50 lg:block xl:block hidden`}>
        <div className="max-w-[1360px] mx-auto flex justify-between  items-center h-[96px] ">
           <div>
            {/*************** logo start here *********************/}
           <Logo/>
            {/*************** logo end here *********************/}
           </div>
            
             {/*************** navbar menu item start here *********************/}
            <div className="flex gap-8 mr-10">
               <Link className="h-7 overflow-x-hidden overflow-y-hidden inline-flex relative group" href={'/'}>
                 <h1 className="text-[17px] text-white font-medium leading-[26px] group-hover:text-[#FF338F]">Home</h1>
                 <span className="absolute w-full h-[2px] bg-[#FF338F] left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
               </Link>
               
                 <Link className="h-7 overflow-x-hidden overflow-y-hidden inline-flex relative group" href={'/'}>
                 <h1 className="text-[17px] text-white font-medium leading-[26px] group-hover:text-[#FF338F]">Case Study</h1>
                 <span className="absolute w-full h-[2px] bg-[#FF338F] left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
               </Link>
               
                 <Link className="h-7 overflow-x-hidden overflow-y-hidden inline-flex relative group" href={'/'}>
                 <h1 className="text-[17px] text-white font-medium leading-[26px] group-hover:text-[#FF338F]">About Us</h1>
                 <span className="absolute w-full h-[2px] bg-[#FF338F] left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
               </Link>
               
                 <Link className="h-7 overflow-x-hidden overflow-y-hidden inline-flex relative group" href={'/'}>
                 <h1 className="text-[17px] text-white font-medium leading-[26px] group-hover:text-[#FF338F]">Blog</h1>
                 <span className="absolute w-full h-[2px] bg-[#FF338F] left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
               </Link>
               
                 <Link className="h-7 overflow-x-hidden overflow-y-hidden inline-flex relative group" href={'/'}>
                 <h1 className="text-[17px] text-white font-medium leading-[26px] group-hover:text-[#FF338F]">Contact Us</h1>
                 <span className="absolute w-full h-[2px] bg-[#FF338F] left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
               </Link>
               
                
            </div>
               {/*************** navbar menu item end here *********************/}


        </div>
         </div>
       
         {/*************** mobile menu for small device start here *********************/}
        <div className='xl:hidden lg:hidden md:block block'>
          <MobileMenu />
         </div>
         {/*************** mobile menu for small device end here *********************/}
       </section>

     // navbar section start here
  )
}

export default Navbar