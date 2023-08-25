import './Hero.css';
import { useState } from 'react';

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
        <section id='hero'>
          <h1 className='hero__title'>
            <span className='hero__greeting'>Hello, I'm </span>
            <span className='hero__name'>Brendon Van</span>
            <div className='hero__slider'>
              <div className='hero__slider-text1'>APP DEVELOPER</div>
              <div className='hero__slider-text2'>FRONT-END DEVELOPER</div>
              <div className='hero__slider-text3'>SOFTWARE ENGINEER</div>
            </div>
          </h1>
          <div className='contact'>
            <a className='contact__CTA' href='#projects'>VIEW PROJECTS</a>
            <div className='contact__info'>
              <span className={ showEmail ? 'contact__points moved' : 'contact__points' }><a href='https://github.com/brendonvan/' target="_blank" rel="noopener noreferrer"><img src="./icons/github.svg" alt="github" /></a> </span>
              <span className={ showEmail ? 'contact__points moved' : 'contact__points' }><a href='https://www.linkedin.com/in/brendon-van/' target="_blank" rel="noopener noreferrer"><img src="./icons/linkedin.svg" alt="linkedin" /></a> </span>
              <span className={ showEmail ? 'contact__points email moved' : 'contact__points email' }><img onClick={ () => { toggleEmail() } } src="./icons/email.svg" alt="email" /> </span>
              <p><span className={ showEmail ? 'show-email' : 'hide-email' }>brendon@van.digital</span></p>
            </div>
          </div>
          <div className={ showEmail ? 'show-hint' : 'hide-hint' }>---{'>'} Email copied to clipboard! {'<'}---</div>
        </section>
    )
}

export default Hero;