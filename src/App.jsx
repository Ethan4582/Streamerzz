import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HowitWorks from './components/HowitWorks'
function App() {

  return (
    <div>
      <main className='text-sm text-neutral-300 antialiased'>
      <Navbar/>
      <HeroSection/>
      <HowitWorks/>
    </main>
    </div>
  )
}

export default App
