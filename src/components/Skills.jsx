import React from 'react'

import Unreal from '../assets/engine.png';
import CPP from '../assets/c++.png';
import HTML from '../assets/html.png';
import Javascript from '../assets/javascript.png';
import Blender from '../assets/blender.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
    return (
      <div name='skills' className='w-full h-screen bg-[#ddd9d9] text-[#80cfa9]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#ffe74c] '>Skills</p>
                <p className='py-4 text-[#000000]'>// These are the technologies I've worked with</p>
            </div>
  
              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-[#ff5964] py-8'>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Unreal} alt="Unreal Engine Icon" />
                      <p className='my-4'>Unreal Engine</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Javascript} alt="JavaScript Icon" />
                      <p className='my-4'>JavaScript</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Blender} alt="Blender Icon" />
                      <p className='my-4'>Blender</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                      <p className='my-4'>HTML</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={CPP} alt="C++ Icon" />
                      <p className='my-4'>C++</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind Icon" />
                      <p className='my-4'>Tailwind CSS</p>
                  </div>
                  
              </div>
          </div>
          
      </div>
    )
  }
  
  export default Skills