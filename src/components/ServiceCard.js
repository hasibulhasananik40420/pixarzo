/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import ux from "@/assets/Services/ux.png"
import GraphicDesign from "@/assets/Services/graphic-designer.png"
import Branding from "@/assets/Services/logo-design 1.png"
import WebsiteDesign from "@/assets/Services/web-design.png"


const ServiceCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center mt-16 md:mt-16 lg:mt-0 xl:mt-0'>
        {/************ service card 1 start here ************/}
        <div className='bg-[#F7F8FA] rounded-lg xl:w-[424px] lg:w-[380px] w-full hover:bg-[#D6D8DB] duration-300 hover:cursor-pointer'>
            <div className='p-6'>
               <Image src={ux} alt="" width={72} height={72}/>
                <h1 className="mt-[48px] text-[#28264D] text-[28px] font-bold leading-[40px]">UI/UX Design</h1>
                
                <p className="text-[#444] text-[18px] font-normal leading-7 mt-[20px] ">UI & UX Consulting is a holistic approach to enhancing the users' experience based on business objectives, users' perspective.</p>
            </div>
        </div>



        {/************ service card 2 start here ************/}
        <div className='bg-[#F7F8FA] rounded-lg xl:w-[424px] lg:w-[380px] w-full hover:bg-[#D6D8DB] duration-300 hover:cursor-pointer'>
            <div className='p-6'>
               <Image src={GraphicDesign} alt="" width={72} height={72}/>
                <h1 className="mt-[48px] text-[#28264D] text-[28px] font-bold leading-[40px]">Graphic Design</h1>
                
                <p className="text-[#444] text-[18px] font-normal leading-7 mt-[20px] ">UI & UX Create the visual versions of brands, messages and communications. They help people and businesses get their messages.</p>
            </div>
        </div>

  {/************ service card 3 start here ************/}
        <div className='bg-[#F7F8FA] rounded-lg xl:w-[424px] lg:w-[380px] w-full hover:bg-[#D6D8DB] duration-300 hover:cursor-pointer'>
            <div className='p-6'>
               <Image src={Branding} alt="" width={72} height={72}/>
                <h1 className="mt-[48px] text-[#28264D] text-[28px] font-bold leading-[40px]">Branding</h1>
                
                <p className="text-[#444] text-[18px] font-normal leading-7 mt-[20px] ">Brand identity design refers to the creation of all the elements that will help to create a recognizable brand image.</p>
            </div>
        </div>

  {/************ service card 4 start here ************/}
        <div className='bg-[#F7F8FA] rounded-lg xl:w-[424px] lg:w-[380px] w-full hover:bg-[#D6D8DB] duration-300 hover:cursor-pointer'>
            <div className='p-6'>
               <Image src={WebsiteDesign} alt="" width={72} height={72}/>
                <h1 className="mt-[48px] text-[#28264D] text-[28px] font-bold leading-[40px]">Website Design</h1>
                
                <p className="text-[#444] text-[18px] font-normal leading-7 mt-[20px] ">UI & UX A web design service provides you with a customized website design that's perfect for your business or personal site.</p>
            </div>
        </div>









    </div>
  )
}

export default ServiceCard