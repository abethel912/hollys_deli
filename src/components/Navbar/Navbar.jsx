import React from 'react';
import { GIHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => (
  <nav className='app_navbar'>
    <div className='app_navbar-logo'>
      <h1>Holly's Deli</h1>
    </div>
    <ul className='app__nav-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
      
    </ul>
  </nav>
);

export default Navbar;
