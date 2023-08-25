import './Hero.css';
import Contact from '../Contact/Contact';

const Hero = () => {

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
          <div className='hero__banner'>
            <a className='hero__cta' href='#projects'>VIEW PROJECTS</a>
            <Contact/>
          </div>
        </section>
    )
}

export default Hero;