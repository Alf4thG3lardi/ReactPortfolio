import React, {useRef} from 'react';
import "./contact.css";
import logo from "../../assets/logo.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
    emailjs.sendForm('service_z10a0c9', 'template_jk41qjb', form.current, 'T4EwIqbvw1QTcVsZT')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert("Email sent")
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section id='contactPage'>
        <div id='client'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem diam, semper sit amet volutpat eget, venenatis sed eros. Etiam massa magna, malesuada a lorem vel, varius bibendum turpis. Maecenas ultricies ut leo vel laoreet. Sed ac maximus nibh. Cras sit amet molestie nisl, a tempor est. Curabitur id tellus erat
            </p>
            <div className='clientImgs'>
                <img src={logo} alt='' className='clientImg'/>
                <img src={logo} alt='' className='clientImg'/>
                <img src={logo} alt='' className='clientImg'/>
                <img src={logo} alt='' className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Pleas fill out the form below</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button className='submitBtn' type='submit' value="send">Submit</button>
                <div className='links'>
                    <img src={logo} alt='a' className='link'/>
                    <img src={logo} alt='b' className='link'/>
                    <img src={logo} alt='c' className='link'/>
                    <img src={logo} alt='d' className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact