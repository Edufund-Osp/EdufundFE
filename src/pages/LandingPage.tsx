import Hero from '../components/landingPage/Hero'
import ExploreProjext from '../components/landingPage/ExploreProject'
import HowItWorks from '../components/landingPage/HowItWorks'
import Testimonials from '../components/landingPage/Testimonials'
import Footer from '../components/landingPage/Footer'

function LandingPage() {
  return (
    <div className='bg-white'>
      
      <Hero />
      <ExploreProjext/>
      <HowItWorks/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default LandingPage
