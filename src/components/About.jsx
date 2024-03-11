import React from 'react'

const About = () => {
  return (
  <div name='about' className='w-full h-screen bg-[#ddd9d9] text-[#80cfa9]'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-[#ffe74c]'>
                        About
                        </p>
                </div>
                <div></div>
    </div>
    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-[#000000]'>
            <div className='sm:text-right text-4xl font-bold text-[#ff5964]'>
                    <p aria-label="Hi! I'm a developer">
  Hi! I'm a&nbsp;<span className="typewriter"></span></p>
                </div>
                <div>
                    <p>
                        For over two decades, I used my understanding of math and science, and a little magic, to create unique recipes for restaurants, friends, and family as a chef. I then pivoted towards 3D Art, specifically in regards to video game development. Now I use my love for math and science, and MOSTLY magic, to help create unique interactive experiences. Nothing gives me the warm fuzzies like shaders and scriptable PCG tools, visual effects and lighting optimization...
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About