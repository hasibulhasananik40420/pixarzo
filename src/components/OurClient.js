"use client"
import google from '@/assets/Our-Client/google.png'
import facebook from '@/assets/Our-Client/facebook.png'
import youtube from '@/assets/Our-Client/youtube.png'
import pinterest from '@/assets/Our-Client/pinterest.png'
import twitch from '@/assets/Our-Client/twitch.png'
import webflow from '@/assets/Our-Client/webflow.png'
import Image from 'next/image'
import Marquee from "react-fast-marquee";
const OurClient = () => {
  return (
    <section className='max-w-[1320px] mx-auto px-3 my-[96px]'>
           <div className='flex flex-col justify-center items-center'>
           <h1 className='text-[#2B2B2B] text-[40px] font-bold leading-[56px]'>Our Clients</h1>
            <p className='text-[#444] text-[24px] font-normal leading-8 mt-6 lg:w-[609px] w-full text-center'>Our clients are the companies and startups who make the world go round</p>
            <Marquee speed={70} gradient={false}>
            <div className='flex items-center gap-[77px] mt-12'>

             <Image src={google} alt='' width={120} height={40}/>
             <Image src={facebook} alt='' width={198} height={40}/>
             <Image src={youtube} alt='' width={176} height={40}/>
             <Image src={pinterest} alt='' width={164} height={40}/>
             <Image src={twitch} alt='' width={118} height={40}/>
             <Image className='mr-16' src={webflow} alt='' width={156} height={40}/>
            </div>
            </Marquee>
           </div>
    </section>
  )
}

export default OurClient