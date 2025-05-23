import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HowitWorks from './components/HowitWorks'
import { KeyFeatures } from './components/KeyFeatures'
import PricingPlan from './components/PricingPlan'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
function App() {

  return (
    <div>
      <main className='text-sm text-neutral-300 antialiased'>
      <Navbar/>
      <HeroSection/>
      <HowitWorks/>
      <KeyFeatures/>
      <PricingPlan/>
      <Testimonials/>
      <Footer/>
    </main>
    </div>
  )
}

export default App
