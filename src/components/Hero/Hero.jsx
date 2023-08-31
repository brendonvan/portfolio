import './Hero.css';
import Contact from '../Contact/Contact';

// Redux
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../redux/actions";

const Hero = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <section id='hero' className={theme.isDarkMode ? 'hero dark-mode' : 'hero'}>
      <h1 className='hero__title'>
        <span className='hero__greeting'>Hello, I'm </span>
        <span className='hero__name'>Brendon Van</span>
        <div className='hero__slider'>
          <div className='hero__slider-text1'>APP DEVELOPER</div>
          <div className='hero__slider-text2'>FRONT-END DEVELOPER</div>
          <div className='hero__slider-text3'>SOFTWARE ENGINEER</div>
        </div>
      </h1>
      <button onClick={() => dispatch(toggleDarkMode())}>Switch to {theme.isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
      <div className='hero__banner'>
        <a className='hero__cta' href='#projects'>VIEW PROJECTS</a>
        <Contact />
      </div>
    </section>
  )
}

export default Hero;