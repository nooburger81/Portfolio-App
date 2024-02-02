import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import 'animate.css';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#fdfdfd]'>


        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-2xl text-[#a7e2e3] px-8 animate__animated animate__fadeInDown animate__delay-1s'>Hi, my name is</p>
          <h1 className='text-8xl font-thin text-[#80cfa9] animate__animated animate__fadeInUp animate__delay-2s'>Brandon Sebastian</h1>
          <h2 className='text-4xl sm:text-7xl px-8 font-bold text-[#ff5964] animate__animated animate__fadeInUp animate__delay-3s'>I'm an independent software developer.</h2>
          <p className='text-xl text-[#000000] py-4 max-w-[1000px] font-semibold font-style: italic animate__animated animate__fadeInUp animate__delay-4s'>Welcome to my Portfolio. Here you will find a collection of my past and current work, ranging from JavaScript Applications, to Custom Digital Materials, to fully developed Interactive 3D Experiences. If you have any questions or just want to chat, please click on the CONTACT link above, or the email icon to the left. Thank you for visiting! Cheers!</p>
        <div>
        
          <button className='text-[#ffffff] group border-2 px-4 py-3 my-2 flex items-center bg-[#8892b0] hover:bg-[#ffe74c] hover:border-[#ff5964] animate__animated animate__fadeIn animate__delay-5s'>View Work 
              <span className='group-hover:rotate-180 duration-300'>
                
                <HiArrowNarrowRight className='ml-10'/>
              </span>
          </button>
        </div>
        </div>
    </div>
  )
}

export default Home