"use client"

import Image from 'next/image'
import image1 from '@/assets/Projects/image1.png'
import image2 from '@/assets/Projects/image2.png'
import image3 from '@/assets/Projects/image3.png'
import { TbLiveView } from "react-icons/tb";

const ProjectsCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:grid-cols-3'>
        
        {/*************** project card 1 start here *****************/}
       <div className='xl:w-[424px] lg:w-[380px] w-full '>
        
        <div className="relative overflow-hidden group">
      <Image
        className="object-contain w-full h-full transition-opacity duration-500 transform hover:opacity-75 hover:brightness-75"
        src={image1}
        alt=''
        height={280}
        width={424}
        layout='responsive'
      />
      <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-40 transition-opacity flex items-center justify-center">
        <TbLiveView className="text-[#F25260] text-3xl hover:cursor-pointer" />
      </div>
    </div>
        
        
        <span className='flex justify-between items-center mt-6'>
        <p className='text-[#F25260] text-[16px] font-normal leading-6'>Royalfy</p>
        <p className='text-[#69778C] text-[16px] font-normal leading-6'>Dec 02, 2022</p>
        </span>

        <h1 className='text-[#28264D] text-[28px] font-bold leading-10 mt-4'>Royalfy Website Design </h1>
         
         <p className='text-[#69778C] text-[18px] font-normal leading-[28px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscin g elit lobortis arcu enim urna adipiscing praesent velit viverra sit sempe hendrerit elementum.</p>
       </div>

     {/*************** project card 2 start here *****************/}
       <div className='xl:w-[424px] lg:w-[380px] w-full '>
       <div className="relative overflow-hidden group">
      <Image
        className="object-contain w-full h-full transition-opacity duration-500 transform hover:opacity-75 hover:brightness-75"
        src={image2}
        alt=''
        height={280}
        width={424}
        layout='responsive'
      />
      <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-40 transition-opacity flex items-center justify-center">
        <TbLiveView className="text-[#F25260] text-3xl hover:cursor-pointer" />
      </div>
    </div>
        
        <span className='flex justify-between items-center mt-6'>
        <p className='text-[#F25260] text-[16px] font-normal leading-6'>Emonk</p>
        <p className='text-[#69778C] text-[16px] font-normal leading-6'>Dec 15, 2022</p>
        </span>

        <h1 className='text-[#28264D] text-[28px] font-bold leading-10 mt-4'>Emonk Mobile App Design</h1>
         
         <p className='text-[#69778C] text-[18px] font-normal leading-[28px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscin g elit lobortis arcu enim urna adipiscing praesent velit viverra sit sempe hendrerit elementum.</p>
       </div>

  {/*************** project card 3 start here *****************/}
       <div className='xl:w-[424px] lg:w-[380px] w-full '>
       <div className="relative overflow-hidden group">
      <Image
        className="object-contain w-full h-full transition-opacity duration-500 transform hover:opacity-75 hover:brightness-75"
        src={image3}
        alt=''
        height={280}
        width={424}
        layout='responsive'
      />
      <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-40 transition-opacity flex items-center justify-center">
        <TbLiveView className="text-[#F25260] text-3xl hover:cursor-pointer" />
      </div>
    </div>
        
        <span className='flex justify-between items-center mt-6'>
        <p className='text-[#F25260] text-[16px] font-normal leading-6'>Pixarzo</p>
        <p className='text-[#69778C] text-[16px] font-normal leading-6'>Nov 15, 2022</p>
        </span>

        <h1 className='text-[#28264D] text-[28px] font-bold leading-10 mt-4'>Brand Identity Design </h1>
         
         <p className='text-[#69778C] text-[18px] font-normal leading-[28px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscin g elit lobortis arcu enim urna adipiscing praesent velit viverra sit sempe hendrerit elementum.</p>
       </div>

    </div>
  )
}

export default ProjectsCard