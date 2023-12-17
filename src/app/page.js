import Feedback from '@/components/Feedback'
import GetInTouch from '@/components/GetInTouch'
import GoogleRedesign from '@/components/GoogleRedesign'
import Header from '@/components/Header'
import OurClient from '@/components/OurClient'

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <Header/>
      <GoogleRedesign/>
      <Feedback/>
      <GetInTouch/>
      <OurClient/>
       
    </div>
  )
}

export default HomePage