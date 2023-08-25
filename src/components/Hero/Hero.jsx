import './Hero.css';
import { useState, useEffect } from 'react';

const Hero = () => {
    let [showEmail, setShowEmail] = useState(false);
    const toggleEmail = () => {
        if (!showEmail) {
            navigator.clipboard.writeText('brendon@van.digital');
            setShowEmail(true);
        } else {
            setShowEmail(false);
        }
    }

    return (
        <section id='hero' className='hero'>
          <h1>
            <span id='greeting'>Hello, I'm </span>
            <span id='name'>Brendon Van</span>
            <br></br>
            <div className='slider'>
              <div className='slider-text1'>APP DEVELOPER</div>
              <div className='slider-text2'>FRONT-END DEVELOPER</div>
              <div className='slider-text3'>SOFTWARE ENGINEER</div>
            </div>
            <br></br>
            <br></br>
          </h1>
          <div className='scroll-down'><span>scroll down ---{'>'}</span></div>
          <div className='contact-info'>
            <a href='#projects'>VIEW PROJECTS</a>
            <div className='contact-info-landing'>
              <span className={ showEmail ? 'contact-points moved' : 'contact-points' }><a href='https://github.com/brendonvan/' target="_blank" rel="noopener noreferrer"><img src="./icons/github.svg" alt="github" /></a> </span>
              <span className={ showEmail ? 'contact-points moved' : 'contact-points' }><a href='https://www.linkedin.com/in/brendon-van/' target="_blank" rel="noopener noreferrer"><img src="./icons/linkedin.svg" alt="linkedin" /></a> </span>
              <span className={ showEmail ? 'contact-points email moved' : 'contact-points email' }><img onClick={ () => { toggleEmail() } } src="./icons/email.svg" alt="email" /> </span>
              <h4><span className={ showEmail ? 'show-email' : 'hide-email' }>brendon@van.digital</span></h4>
            </div>
          </div>
          <div className={ showEmail ? 'show-hint' : 'hide-hint' }>---{'>'} Email copied to clipboard! {'<'}---</div>
        </section>
    )
}

export default Hero;