import React, { useState } from 'react'
import {
    FaBars,
    FaTimes,
    FaLinkedin,
    FaArtstation,
    FaYoutube,
    FaItchIo,
    FaGithub,
    FaFacebook,
    FaDiscord,
    FaInstagram,
  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import 'animate.css';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ddd9d9] text-[#000000]'>
        <div>
            
        </div>
        
        {/*menu */}
            <ul className='hidden md:flex'>
                <li>
                  <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
          </li>
                <li>
                  <Link to='about' smooth={true} duration={500}>
            About
          </Link>
          </li>
                <li>
                  <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
          </li>
                <li>
                  <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
          </li>
                <li>
                  <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
          </li>
            </ul>
        

          {/* Hamburger */}
          <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
          </div>

        {/* Mobile menu */}
        <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#55c1ff] flex flex-col justify-center items-center'
        }>
            <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        </ul>
        
        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[20%] left-0 animate__animated animate__slideInLeft animate__delay-7s'>
            <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/brandon-sebastian-16b51083/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[black]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.github.com/nooburger81'
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#102e4a]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.artstation.com/brandonsebastian2'
              >
              ArtStation <FaArtstation size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f56666]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://bsebastian81.itch.io/'
            >
              Itch.Io <FaItchIo size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#be2d2d]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.youtube.com/channel/UCHo-xC_yneGsp3FB_iCyYcg'
            >
              YouTube <FaYoutube size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#454eca]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.facebook.com/bvspeterson'
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.instagram.com/_.bsebastian/'
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6245ca]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://discord.com/channels/1196952025284489327/1196952025724878988'
            >
              Discord <FaDiscord size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            {/* <a > */}
                
                Email <Link to='contact' smooth={true} duration={500}><HiOutlineMail size={30} className='flex justify-between items-center w-full text-gray-300' /></Link>
            {/* </a> */}
          </li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar