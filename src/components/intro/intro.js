import React from 'react';
import './intro.css';
import hire from "../../assets/hire.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I`m <span className='introName'>Aqua</span><br/>Just Some Water </span>
            <p className='introPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis tellus,<br/> sollicitudin eget tortor vel, tempus auctor nisi.</p> 
            <Link>
                <button className='btn'>
                    <img src={hire} alt='hireImg' className='btnImg'/>Hire Me
                </button>
            </Link>
        </div>
        <img src='' alt='' className='bg'/>
    </section>
  )
}

export default Intro