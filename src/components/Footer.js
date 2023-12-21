"use client"
import logo from '@/assets/Footer/Pixarzo Logo 1.png'
import Image from 'next/image'
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import FadeIn from './FadeIn';

const Footer = () => {
  return (
    <section className="bg-PrimaryColor">
      <FadeIn>
      <div className='max-w-[1320px] mx-auto px-3 py-[64px] md:flex md:flex-wrap lg:flex justify-between border-b-[1px] border-[#E2E8F0]'>
         
       <div className='lg:w-[294px] w-full'>
        <Image src={logo} alt='' width={186} height={48}/>
         <p className='text-[#F5F5F5] text-[16px] font-medium leading-[26px] mt-12'>A Digital Agency specialized in building functional, simple, human-centered products, Branding, UX, and UI Design.</p>

          {/**************** social media icon here *********************/}

          <div className='flex gap-4 mt-12'>
             <span className='bg-white rounded-full w-[32px] h-[32px] flex justify-center items-center hover:translate-y-2 duration-300 cursor-pointer'>
             <GrFacebookOption className='text-[24px] text-[#28264D]' />
             </span>
             
             <span className='bg-white rounded-full w-[32px] h-[32px] flex justify-center items-center hover:translate-y-2 duration-300 cursor-pointer'>
             <FaLinkedinIn className='text-[20px] text-[#28264D]' />
             </span>
             
              <span className='bg-white rounded-full w-[32px] h-[32px] flex justify-center items-center hover:translate-y-2 duration-300 cursor-pointer'>
             <FaTwitter className='text-[20px] text-[#28264D]' />
             </span>
             
              <span className='text-white text-[31px] rounded-full w-[32px] h-[32px] hover:translate-y-2 duration-300 cursor-pointer'>
             <FaGoogle />
             </span>
          </div>
       </div>


        <div className='mt-12 md:mt-12 lg:mt-0'>
          <h1 className='text-[#F5F5F5] text-[16px] font-semibold leading-6 tracking-[1px] uppercase mb-[32px]'>Company</h1>

          <p className='text-[#F5F5F5] text-[16px] font-normal leading-6 mt-4'>About</p>
          <p className='text-[#F5F5F5] text-[16px] font-normal leading-6 mt-4'>Blog</p>
          <p className='text-[#F5F5F5] text-[16px] font-normal leading-6 mt-4'>Services</p>
          <p className='text-[#F5F5F5] text-[16px] font-normal leading-6 mt-4'>Team</p>
          <p className='text-[#F5F5F5] text-[16px] font-normal leading-6 mt-4'>Career</p>
          <p className='text-[#F5F5F5] text-[16px] font-normal leading-6 mt-4'>Case Study</p>
        </div>


         <div className='mt-12 md:mt-12 lg:mt-0'>
          <h1 className='text-[#F5F5F5] text-[16px] font-semibold leading-6 tracking-[1px] uppercase mb-[32px]'>Quick links</h1>

          <p className='text-[#F5F5F5] text-[16px] font-normal leading-6 mt-4'>Terms & Conditions</p>
          <p className='text-[#F5F5F5] text-[16px] font-normal leading-6 mt-4'>Customer Support</p>
          <p className='text-[#F5F5F5] text-[16px] font-normal leading-6 mt-4'>Privacy Policy</p>
          <p className='text-[#F5F5F5] text-[16px] font-normal leading-6 mt-4'>Design Process</p>
         
        </div>

       <div className='mt-12 md:mt-12 lg:mt-0'>
          <h1 className='text-[#F5F5F5] text-[16px] font-semibold leading-6 tracking-[1px] uppercase mb-[32px]'>Newsletter</h1>

          <input className='w-[300px] h-[48px] outline-0 pl-7 text-[#F5F5F5] text-[14px] leading-6 font-normal' style={{background:"rgba(255, 255, 255, 0.10)", borderRadius:"48px"}} placeholder='Enter your email address' type="search" name="email" id="emailInput" />
          <br />

         
          <button className="group relative bg-ButtonColor w-[180px] h-[48px] rounded-[48px] text-white text-[18px] font-medium leading-6 tracking-[0.09px] mt-6 overflow-hidden transition duration-300 ease-in-out">
              <span className="absolute inset-0 bg-gradient-to-r from-[#4CAF50] to-[#2196F3] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></span>
              <span className="relative z-10 flex items-center justify-center h-full">
              Subscribe Now
              </span>
            </button>
       
        </div>

      </div>

       <p className='text-[#F5F5F5] text-[16px] font-normal leading-6 text-center py-[32px] '>© Copyright 2023, All Rights Reserved by Pixarzo</p>
       </FadeIn>
    </section>
  )
}

export default Footer