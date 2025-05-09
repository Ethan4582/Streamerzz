import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { RiCloseFill, RiMenu3Line } from '@remixicon/react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='w-full fixed top-0 z-50 flex justify-center mt-4'>
      <div className='w-[95%] md:w-[85%] text-neutral-500 bg-black/60 backdrop-blur-md px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800'>
        <img src={logo} alt='logo' width={120} height={24} />

        <div className='hidden md:flex space-x-6'>
          <a href='#' className='hover:text-neutral-300'>Work</a>
          <a href='#how-it-works' className='hover:text-neutral-300'>How it works</a>
          <a href='#pricing' className='hover:text-neutral-300'>Pricing</a>
          <a href='#testimonial' className='hover:text-neutral-300'>Testimonial</a>
        </div>

        <div className='hidden md:flex space-x-4 items-center'>
          <a href='#' className='hover:text-neutral-200'>Login</a>
          <a href='#' className='border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition'>Get Demo</a>
          <a href='#' className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition'>Start Free Trial</a>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none' aria-label={isOpen ? 'Close menu' : 'Open Menu'}>
            {isOpen ? <RiCloseFill size={24} /> : <RiMenu3Line size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='absolute top-full mt-2 w-[95%] md:hidden bg-black/90 backdrop-blur-md border border-neutral-800 rounded-xl px-4 py-6'>
          <div className='flex flex-col space-y-4'>
            <a href='#' className='hover:text-white text-neutral-300'>Work</a>
            <a href='#how-it-works' className='hover:text-white text-neutral-300'>How it works</a>
            <a href='#pricing' className='hover:text-white text-neutral-300'>Pricing</a>
            <a href='#testimonial' className='hover:text-white text-neutral-300'>Testimonial</a>
            <hr className='border-neutral-700' />
            <a href='#' className='hover:text-neutral-200'>Login</a>
            <a href='#' className='border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition'>Get Demo</a>
            <a href='#' className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition'>Start Free Trial</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
