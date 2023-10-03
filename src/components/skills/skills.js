import React from 'react';
import './skills.css';
import logo from '../../assets/logo.png';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTittle'>What I Do</span>
      <span className='skillDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem diam, semper sit amet volutpat eget, venenatis sed eros. Etiam massa magna, malesuada a lorem vel, varius bibendum turpis. Maecenas ultricies ut leo vel laoreet. Sed ac maximus nibh. Cras sit amet molestie nisl, a tempor est. Curabitur id tellus erat</span>        
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={logo} alt='Logo1' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Skill Name</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={logo} alt='Logo2' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Skill Name</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={logo} alt='Logo3' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Skill Name</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills