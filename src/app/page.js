import Feedback from '@/components/Feedback'
import GetInTouch from '@/components/GetInTouch'
import GoogleRedesign from '@/components/GoogleRedesign'
import Header from '@/components/Header'
import LetestProjects from '@/components/LetestProjects'
import OurClient from '@/components/OurClient'
import SteepProcess from '@/components/SteepProcess'

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <Header/>
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