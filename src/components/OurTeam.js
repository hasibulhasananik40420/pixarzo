"use client"
import teamIcon from '@/assets/Our-team/teamIcon.png'
import Image from 'next/image'
import OurTeamCard from './OurTeamCard'

const OurTeam = () => {
  return (
    <section className="bg-PrimaryColor px-3 py-[80px]">
        <div className="max-w-[1320px] mx-auto">
           <Image src={teamIcon} alt='' width={40} height={40}/>

            <h1 className='text-white text-[40px] font-bold leading-[56px] tracking-[0.5px]'>Our Team</h1>

            <p className='text-white text-[24px] font-normal leading-8 lg:w-[917px] w-full mt-6'>Our extraordinary team works with various creative and complex things together and builds stunning products</p>

              {/*********** our team card start here ***********/}
             <div className='mt-[48px]'>
                 <OurTeamCard/>
             </div>
        </div>
    </section>
  )
}

export default OurTeam