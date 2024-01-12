
import processIcon from '@/assets/Process/processIcon.png'
import image from '@/assets/Process/image1.png'
import Image from 'next/image'
import FadeIn, { FadeInStagger } from './FadeIn'

const SteepProcess = () => {

  return (
   // SteepProcess section start here
   <FadeInStagger>
    <section className='max-w-[1320px] mx-auto px-3'>
       <FadeIn>
        <div>
         
       <Image src={processIcon} alt='' height={40} width={40}/>
       <h1 className="text-[#28264D] text-[40px] font-bold leading-[50px] mt-4 lg:w-[514px] w-full">A Simple,yet
       effective six step process.</h1>

        </div>
        </FadeIn>

        <div className='lg:flex gap-[112px] mt-12'>
        <FadeIn>
        <div className=''>
        <Image className="w-full h-full object-contain" src={image} alt='' height={619} width={444} />
        </div>
        </FadeIn>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-6 justify-items-center mt-10 md:mt-16 lg:mt-0'>

            {/**************** item 1 start here ****************/}
            <FadeIn>
         <div className='lg:w-[347px] w-full'>
            <span className='bg-[#FFEBF4] rounded-r-[70px] w-[43px] h-[36px] text-[#F25260] text-[24px] font-bold flex justify-center items-center'>1</span>

            <h1 className='text-[#28264D] text-[28px] font-bold leading-10 mt-4'>Ideation</h1>
            <p className='text-[#69778C] text-[16px] font-normal leading-7 mt-4'>Ideation is the third phase of the Design Thinking process, and it’s all about generating ideas.</p>
         </div>
         </FadeIn>

        {/**************** item 2 start here ****************/}
        <FadeIn>
         <div className='lg:w-[347px] w-full'>
            <span className='bg-[#FFEBF4] rounded-r-[70px] w-[43px] h-[36px] text-[#F25260] text-[24px] font-bold flex justify-center items-center'>2</span>

            <h1 className='text-[#28264D] text-[28px] font-bold leading-10 mt-4'>Research</h1>
            <p className='text-[#69778C] text-[16px] font-normal leading-7 mt-4'>UX/UI research is the systematic study of target users and their requirements,  add realistic contexts to design processes.</p>
         </div>
         </FadeIn>

          {/**************** item 3 start here ****************/}
          <FadeIn>
         <div className='lg:w-[347px] w-full'>
            <span className='bg-[#FFEBF4] rounded-r-[70px] w-[43px] h-[36px] text-[#F25260] text-[24px] font-bold flex justify-center items-center'>3</span>

            <h1 className='text-[#28264D] text-[28px] font-bold leading-10 mt-4'>Wireframe</h1>
            <p className='text-[#69778C] text-[16px] font-normal leading-7 mt-4'>Wireframing in UI/UX Design is  most crucial steps which involves visualizing the skeleton of digital applications.</p>
         </div>
         </FadeIn>

    {/**************** item 4 start here ****************/}
    <FadeIn>
         <div className='lg:w-[347px] w-full'>
            <span className='bg-[#FFEBF4] rounded-r-[70px] w-[43px] h-[36px] text-[#F25260] text-[24px] font-bold flex justify-center items-center'>4</span>

            <h1 className='text-[#28264D] text-[28px] font-bold leading-10 mt-4'>Validate Design</h1>
            <p className='text-[#69778C] text-[16px] font-normal leading-7 mt-4'>After design and prototyping, the next thing is for us to test and validate our design.</p>
         </div>
         </FadeIn>

       {/**************** item 5 start here ****************/}
       <FadeIn>
         <div className='lg:w-[347px] w-full'>
            <span className='bg-[#FFEBF4] rounded-r-[70px] w-[43px] h-[36px] text-[#F25260] text-[24px] font-bold flex justify-center items-center'>5</span>

            <h1 className='text-[#28264D] text-[28px] font-bold leading-10 mt-4'>Design Pitching</h1>
            <p className='text-[#69778C] text-[16px] font-normal leading-7 mt-4'>Pitching is one of the most important skills for any UX/UI designer to have. Your ability to pitch clients.</p>
         </div>
         </FadeIn>
       
        {/**************** item 6 start here ****************/}
        <FadeIn>
         <div className='lg:w-[347px] w-full'>
            <span className='bg-[#FFEBF4] rounded-r-[70px] w-[43px] h-[36px] text-[#F25260] text-[24px] font-bold flex justify-center items-center'>6</span>

            <h1 className='text-[#28264D] text-[28px] font-bold leading-10 mt-4'>Hand over</h1>
            <p className='text-[#69778C] text-[16px] font-normal leading-7 mt-4'>When UX designers are fully satisfied with their designs, they create a document that has all the details.</p>
         </div>
         </FadeIn>


           
         </div>

    </div>
    </section>
    </FadeInStagger>
    // SteepProcess section end here
  )
}

export default SteepProcess