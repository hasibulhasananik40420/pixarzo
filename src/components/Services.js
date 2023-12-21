/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import serviceLogo from '@/assets/Services/Group 2.png'
import ServiceCard from "./ServiceCard"

const Services = () => {
  return (

    // services section start here
    <section className="max-w-[1320px] mx-auto px-3 my-[96px]">
        <div className="lg:flex gap-6">
          
            {/*************** services title  start here ****************/}
            <div className="lg:w-[424px] w-full ">
                <Image src={serviceLogo} alt="" height={40} width={40}/>
                 <h1 className="text-[#28264D] text-[40px] font-bold leading-[56px]">High-impact services to take your business the next level</h1>

                 <p className="text-[#444] text-[24px] font-normal leading-8 mt-6">Good customer service means consistently meeting customers' expectations. </p>

                 <button className="group relative bg-ButtonColor w-[211px] h-[56px] rounded-[37px] text-white text-[18px] font-bold mt-12 leading-6 tracking-[0.09px] duration-300 ease-in-out">
              
              Explore Services
           
              </button>


             </div>
             
             {/*************** service card start here ****************/}
             <div>
              <ServiceCard/>
             </div>
              {/*************** service card end here ****************/}

        </div>
       </section>
    // header section end here
  )
}

export default Services