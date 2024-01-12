
import Image from 'next/image'
import image1 from '@/assets/Projects/image1.png'
import image2 from '@/assets/Projects/image2.png'
import image3 from '@/assets/Projects/image3.png'
import FadeIn, { FadeInStagger } from './FadeIn'

const ProjectsCard = () => {
  return (
    <FadeInStagger>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 xl:grid-cols-3'>
        
        {/*************** project card 1 start here *****************/}
        <FadeIn>
       <div className='xl:w-[420px] lg:w-[380px] w-full '>
        
        <div className="xl:w-[420px] lg:w-[380px] w-full h-[280px] overflow-hidden">
         <Image
        className="w-full object-cover object-center transition-all duration-700 hover:scale-110"
        src={image1}
        alt=''
        placeholder='blur'
        
      />
    </div>
        
        
        <div className='flex justify-between items-center mt-6'>
        <p className='text-[#F25260] text-[16px] font-normal leading-6'>Royalfy</p>
        <p className='text-[#69778C] text-[16px] font-normal leading-6'>Dec 02, 2022</p>
        </div>

        <h1 className='text-[#28264D] text-[28px] font-bold leading-10 mt-4'>Royalfy Website Design </h1>
         
         <p className='text-[#69778C] text-[16px] font-normal leading-[28px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscin g elit lobortis arcu enim urna adipiscing praesent velit viverra sit sempe hendrerit elementum.</p>
       </div>
       </FadeIn>

     {/*************** project card 2 start here *****************/}
     <FadeIn>
       <div className='xl:w-[420px] lg:w-[380px] w-full '>
       <div className="xl:w-[420px] lg:w-[380px] w-full h-[280px] overflow-hidden">
         <Image
        className="w-full object-cover object-center transition-all duration-700 hover:scale-110"
        src={image2}
        alt=''
        placeholder='blur'
        
      />
    </div>
        
        <div className='flex justify-between items-center mt-6'>
        <p className='text-[#F25260] text-[16px] font-normal leading-6'>Emonk</p>
        <p className='text-[#69778C] text-[16px] font-normal leading-6'>Dec 15, 2022</p>
        </div>

        <h1 className='text-[#28264D] text-[28px] font-bold leading-10 mt-4'>Emonk Mobile App Design</h1>
         
         <p className='text-[#69778C] text-[16px] font-normal leading-[28px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscin g elit lobortis arcu enim urna adipiscing praesent velit viverra sit sempe hendrerit elementum.</p>
       </div>
       </FadeIn>

  {/*************** project card 3 start here *****************/}
  <FadeIn>
       <div className='xl:w-[420px] lg:w-[380px] w-full '>
       <div className="xl:w-[420px] lg:w-[380px] w-full h-[280px] overflow-hidden">
         <Image
        className="w-full object-cover object-center transition-all duration-700 hover:scale-110"
        src={image3}
        alt=''
        placeholder='blur'
        
      />
    </div>
        <div className='flex justify-between items-center mt-6'>
        <p className='text-[#F25260] text-[16px] font-normal leading-6'>Pixarzo</p>
        <p className='text-[#69778C] text-[16px] font-normal leading-6'>Nov 15, 2022</p>
        </div>

        <h1 className='text-[#28264D] text-[28px] font-bold leading-10 mt-4'>Brand Identity Design </h1>
         
         <p className='text-[#69778C] text-[16px] font-normal leading-[28px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscin g elit lobortis arcu enim urna adipiscing praesent velit viverra sit sempe hendrerit elementum.</p>
       </div>
       </FadeIn>

    </div>
    </FadeInStagger>
  )
}

export default ProjectsCard