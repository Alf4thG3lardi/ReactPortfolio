import React from 'react';
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} className='logo' alt='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuItem'>Portofolio</Link>
            <Link activeClass='active' to='client' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuItem'>Clients</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={logo} alt='' className='desktopMenuImg'/>Contact me
        </button>

        <img src={logo} className='mobMenu' alt='Menu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>Portofolio</Link>
            <Link activeClass='active' to='client' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>Contact Me</Link>
        </div>        
    </nav>
  )
}

export default Navbar