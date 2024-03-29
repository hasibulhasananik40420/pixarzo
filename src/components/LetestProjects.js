

import Image from 'next/image'
import projectIcon from '@/assets/Projects/projectIcon.png'
import ProjectsCard from './ProjectsCard'
import FadeIn from './FadeIn'

const LetestProjects = () => {
  return (
    // LetestProjects section start here
      <section className='max-w-[1320px] mx-auto px-3 py-[96px]'>
          <FadeIn>

        <Image src={projectIcon} alt='' height={40} width={40}/>
         <h2 className='text-[#28264D] text-[40px] font-bold leading-[56px]  '>See our latest  projects</h2>
         
        {/********** project all card start here ************/}
         <div className='mt-12'>
           <ProjectsCard/>
         </div>
            {/********** project all card end here ************/}
         </FadeIn>
      </section>

        // LetestProjects section end here
    
  )
}

export default LetestProjects