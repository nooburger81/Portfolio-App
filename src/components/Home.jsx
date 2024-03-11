import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import 'animate.css';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#ddd9d9]'>


        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-2xl text-[#ffffff] font-light px-8 animate__animated animate__fadeInDown animate__delay-1s'>Hi, my name is</p>
          <h1 className='text-8xl font-thin text-[#80cfa9] animate__animated animate__fadeInUp animate__delay-2s'>Brandon Sebastian</h1>
          <h2 className='text-4xl sm:text-7xl px-8 font-bold text-[#ff5964] animate__animated animate__fadeInUp animate__delay-3s'>I like to use math to create art.</h2>
          <p className='text-xl text-[#000000] py-4 max-w-[1000px] font-thin font-style: italic animate__animated animate__fadeInUp animate__delay-4s'>Welcome to my interactive portfolio. If you have any questions or just want to chat, please click on the CONTACT link above, or the email icon to the left. Thank you for visitng my little corner of the world. Cheers!</p>
        <div>
        <Link to='work' smooth={true} duration={500}>
          <button className='text-[#ffffff] group border-2 px-4 py-3 my-2 flex items-center bg-[#8892b0] hover:bg-[#ffe74c] hover:border-[#ff5964] animate__animated animate__fadeIn animate__delay-5s'>View Work 
              <span className='group-hover:rotate-180 duration-300'>
                
                <HiArrowNarrowRight className='ml-10'/>
              </span>
          </button>
          </Link>
        </div>
        </div>
    </div>
  )
}

export default Home