import React from 'react'
import {
    FaBars,
    FaTimes,
  } from 'react-icons/fa';
  import Logo from '../assets/SeabassStudioLogo2.png';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fdfdfd] text-[#102E4A]'>
        <div>
            <img src={Logo} alt='Logo Image' style={{ width: '100px'}} />
        </div>
        
        {/*menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        

          {/* Hamburger */}
          <div className='hidden'>
            <FaBars />
          </div>

        {/* Mobile menu */}
        <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
        
        {/* Social icons */}
        <div></div>
    </div>
  )
}

export default Navbar