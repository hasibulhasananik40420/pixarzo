import Image from 'next/image'
import { CiCalendarDate } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import image1 from '@/assets/blog/blog1.jpg'


const BlogCard = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>

          {/************* blog card 1 start here  ****************/}
          <div className='xl:w-[420px] lg:w-[380px] w-full h-full bg-[#EFEFEF]'>

            <div className='xl:w-[420px] lg:w-[380px] w-full h-[250px] overflow-hidden'>
                <Image className=' w-full object-cover object-center transition-all duration-700 hover:scale-110' src={'https://saja-react-13-4.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-img-7.cd78782e.jpg&w=640&q=75'} alt='' width={420} height={250}/>

            </div>

             <div className=' p-6'>
                
             <div className='flex justify-between items-center'>
             <div className='flex gap-3 items-center'>
            <CiCalendarDate className='text-[29px] text-red-500' />
              <p className='text-[#69778C] text-[16px] font-normal leading-6 hover:text-red-500 duration-300 cursor-pointer'>21 Feb 2023</p>
            </div> 
            
            <div className='flex gap-3 items-center'>
            <FaRegCommentDots className='text-[25px] text-red-500' />
              <p className='text-[#69778C] text-[16px] font-normal leading-6 hover:text-red-500 duration-300 cursor-pointer'>6 Comments</p>
            </div>
             </div>

             <h3 className='text-PrimaryColor md:text-[28px] text-[24px] font-bold md:leading-[40px] leading-9 mt-6 hover:text-red-500 cursor-pointer duration-300'>Getting started with business level improved</h3>


             <div className='flex justify-between items-center mt-10'>
             <div className='flex gap-3 items-center'>
             <Image className='w-10 h-10 rounded-full border-2 border-white' src={image1} alt='' width={40} height={40}/>
              <p className='text-[#69778C] text-[16px] font-normal leading-6'>DANIYEL</p>
            </div> 
            
            <div className='flex items-center'>
              <p className='text-red-500 text-[16px] font-normal leading-6 uppercase tracking-[0.09px] hover:translate-x-[-3px] duration-300 cursor-pointer'>Read more</p>
              <MdArrowForward  className='text-[25px] text-red-500' />
            </div>
             </div>



             </div>

          </div>


          {/************* blog card 2 start here  ****************/}
          <div className='xl:w-[420px] lg:w-[380px] w-full h-full bg-[#EFEFEF]'>

            <div className='xl:w-[420px] lg:w-[380px] w-full h-[250px] overflow-hidden'>
                <Image className=' w-full object-cover object-center transition-all duration-700 hover:scale-110' src={'https://saja-react-13-4.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-img-7.cd78782e.jpg&w=640&q=75'} alt='' width={420} height={250}/>

            </div>

             <div className=' p-6'>
                
             <div className='flex justify-between items-center'>
             <div className='flex gap-3 items-center'>
            <CiCalendarDate className='text-[29px] text-red-500' />
              <p className='text-[#69778C] text-[16px] font-normal leading-6 hover:text-red-500 duration-300 cursor-pointer'>21 Feb 2023</p>
            </div> 
            
            <div className='flex gap-3 items-center'>
            <FaRegCommentDots className='text-[25px] text-red-500' />
              <p className='text-[#69778C] text-[16px] font-normal leading-6 hover:text-red-500 duration-300 cursor-pointer'>6 Comments</p>
            </div>
             </div>

             <h3 className='text-PrimaryColor md:text-[28px] text-[24px] font-bold md:leading-[40px] leading-9 mt-6 hover:text-red-500 cursor-pointer duration-300'>Modern fluid typography used in website Clamp</h3>


             <div className='flex justify-between items-center mt-10'>
             <div className='flex gap-3 items-center'>
             <Image className='w-10 h-10 rounded-full border-2 border-white' src={image1} alt='' width={40} height={40}/>
              <p className='text-[#69778C] text-[16px] font-normal leading-6'>DANIYEL</p>
            </div> 
            
            <div className='flex items-center'>
              <p className='text-red-500 text-[16px] font-normal leading-6 uppercase tracking-[0.09px] hover:translate-x-[-3px] duration-300 cursor-pointer'>Read more</p>
              <MdArrowForward  className='text-[25px] text-red-500' />
            </div>
             </div>



             </div>

          </div>


   {/************* blog card 3 start here  ****************/}
          <div className='xl:w-[420px] lg:w-[380px] w-full h-full bg-[#EFEFEF]'>

            <div className='xl:w-[420px] lg:w-[380px] w-full h-[250px] overflow-hidden'>
                <Image className=' w-full object-cover object-center transition-all duration-700 hover:scale-110' src={'https://saja-react-13-4.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-img-7.cd78782e.jpg&w=640&q=75'} alt='' width={420} height={250}/>

            </div>

             <div className=' p-6'>
                
             <div className='flex justify-between items-center'>
             <div className='flex gap-3 items-center'>
            <CiCalendarDate className='text-[29px] text-red-500' />
              <p className='text-[#69778C] text-[16px] font-normal leading-6 hover:text-red-500 duration-300 cursor-pointer'>21 Feb 2023</p>
            </div> 
            
            <div className='flex gap-3 items-center'>
            <FaRegCommentDots className='text-[25px] text-red-500' />
              <p className='text-[#69778C] text-[16px] font-normal leading-6 hover:text-red-500 duration-300 cursor-pointer'>6 Comments</p>
            </div>
             </div>

             <h3 className='text-PrimaryColor md:text-[28px] text-[24px] font-bold md:leading-[40px] leading-9 mt-6 hover:text-red-500 cursor-pointer duration-300'>New fresh mobile device template for business</h3>


             <div className='flex justify-between items-center mt-10'>
             <div className='flex gap-3 items-center'>
             <Image className='w-10 h-10 rounded-full border-2 border-white' src={image1} alt='' width={40} height={40}/>
              <p className='text-[#69778C] text-[16px] font-normal leading-6'>DANIYEL</p>
            </div> 
            
            <div className='flex items-center'>
              <p className='text-red-500 text-[16px] font-normal leading-6 uppercase tracking-[0.09px] hover:translate-x-[-3px] duration-300 cursor-pointer'>Read more</p>
              <MdArrowForward  className='text-[25px] text-red-500' />
            </div>
             </div>



             </div>

          </div>




       
        </div>
    </div>
  )
}

export default BlogCard