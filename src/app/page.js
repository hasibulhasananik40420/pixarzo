import Feedback from '@/components/Feedback'
import GetInTouch from '@/components/GetInTouch'
import GoogleRedesign from '@/components/GoogleRedesign'
import Header from '@/components/Header'
import LetestProjects from '@/components/LetestProjects'
import OurClient from '@/components/OurClient'
import OurTeam from '@/components/OurTeam'
import Services from '@/components/Services'
import SlientSeller from '@/components/SlientSeller'
import SteepProcess from '@/components/SteepProcess'

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <Header/>
      <Services/>
      <OurTeam/>
      <SlientSeller/>
      <LetestProjects/>
      <SteepProcess/>
      <GoogleRedesign/>
      <Feedback/>
      <GetInTouch/>
      <OurClient/>
       
    </div>
  )
}

export default HomePage