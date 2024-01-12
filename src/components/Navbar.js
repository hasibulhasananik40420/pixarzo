"use client"

import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import navbar from '@/styles/navbar.module.css'
import Link from "next/link";


const Navbar = () => {

  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 200;
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
      isFixed ? "fixed top-0 " : ""
    } bg-PrimaryColor h-[96px] px-3 transition-all ease-in-out duration-500 w-full z-50 lg:block xl:block hidden`}>
        <div className="max-w-[1360px] mx-auto flex justify-between  items-center h-[96px] ">
           <div>
            {/*************** logo start here *********************/}
           <Logo/>
            {/*************** logo end here *********************/}
           </div>
            
             {/*************** navbar menu item start here *********************/}
            <div className="flex ">

                 <Link href={'/'} className={`${navbar.btn}`}>Home</Link>
                 <Link href={'/'} className={`${navbar.btn}`}>Case Study</Link>
                 <Link href={'/'} className={`${navbar.btn}`}>About Us</Link>
                 <Link href={'/'} className={`${navbar.btn}`}>Blog</Link>
                 <Link href={'/'} className={`${navbar.btn}`}>Contact Us</Link>
                
                
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