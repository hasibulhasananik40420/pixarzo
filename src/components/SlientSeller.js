"use client"

import FadeIn from "./FadeIn"

const SlientSeller = () => {
  return (
    // SlientSeller section start here
    <FadeIn>
    <section className='max-w-[1320px] mx-auto px-3 '>

     <div className='h-[439px] flex items-center justify-between'>

         <div className='w-[200px] h-[439px] bg-[#FFEBF4] rounded-b-[100px] md:block hidden'>

         </div>
       
        {/************** content part start here ******************/}
        <div className='lg:w-[743px] w-full flex flex-col justify-center items-center'>
           <h1 className='text-[#28264D] text-[40px] font-bold leading-[56px] text-center'>“Bad design shouts at you. Good design is the silent seller.”</h1>

            <p className='text-[#444] text-[24px] font-normal leading-8 mt-6'>Shane Meendering</p>


            <button className="group relative bg-ButtonColor w-[224px] h-[56px] rounded-[37px] text-white text-[18px] font-bold leading-6 tracking-[0.09px] mt-12 duration-300 ease-in-out">
              
              View our Designer
              
            </button>

        </div>
        {/************** content part end here ******************/}

        <div className='w-[239px] h-[200px] bg-[#E4F5FF] rounded-l-[100px] mt-[240px] md:block hidden'>

         </div>

     </div>

    </section>
    </FadeIn>
       // SlientSeller section end here

  )
}

export default SlientSeller