import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#c0d6e4]'>


        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-2xl text-yellow-600 animate__animated animate__fadeInDown animate__delay-1s'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#162807] animate__animated animate__fadeInUp animate__delay-2s'>Brandon Sebastian</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] animate__animated animate__fadeInUp animate__delay-3s'>I'm an independent game developer.</h2>
          <p className='text-xl text-black py-4 max-w-[700px] animate__animated animate__fadeInUp animate__delay-4s'>Welcome to my PORTFOLIO! Please make yourself comfortbale and take a look around. If you have any questions or just want to chat, please click on the CONTACT link above, or the email icon to the left. Thank you for visiting! Cheers!</p>
        <div>
        
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-600'>View Work 
              <span className='group-hover:rotate-180 duration-300'>
                
                <HiArrowNarrowRight className='ml-6'/>
              </span>
          </button>
        </div>
        </div>
    </div>
  )
}

export default Home