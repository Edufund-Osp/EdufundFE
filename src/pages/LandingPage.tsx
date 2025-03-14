import Hero from '../components/landingPage/Hero'
import ExploreProjext from '../components/landingPage/ExploreProject'
import HowItWorks from '../components/landingPage/HowItWorks'
import Testimonials from '../components/landingPage/Testimonials'
import Footer from '../components/landingPage/Footer'
import Header from '../components/landingPage/Header'
import MakeADifference from '../components/landingPage/MakeADifference'

function LandingPage() {
  return (
    <div className='flex flex-col bg-[#F9F9F9]'>
      <Header/>
      <Hero />
      <ExploreProjext/>
      <HowItWorks/>
      <Testimonials/>
      <MakeADifference/>
      <Footer/>
    </div>
  )
}

export default LandingPage
