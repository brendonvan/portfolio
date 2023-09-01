import './AboutMe.css';

// Redux
import { useSelector } from "react-redux";

const AboutMe = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <section id='about-me' className={theme.isDarkMode ? 'about-me dark-mode hidden' : 'about-me hidden'}>
      <h2 className='about-me__title'>About Me</h2>
      <h3 className='about-me__desc'>
        <span>I'm used to </span>
        <span>tight </span>
        <span className='about-me__deadlines'>deadlines</span>
        <br></br>
        <span>and </span>
        <span className='about-me__challenging'>challenging </span>
        <span>tasks.</span>
      </h3>
      <div className='about-me__boxes'>
        <div className='about-me__box1'>
          <h4>
            <span>Software</span><br /><span>Development</span>
          </h4>
          <p>Experienced in both functional and OOP: Java, JavaScript, Python, Dart, TypeScript.</p>
        </div>
        <div className='about-me__box2'>
          <h4><span>Frontend Dev</span> <br /> <span>React, NextJS</span></h4>
          <p>Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p>
        </div>
        <div className='about-me__box3'>
          <h4><span>Flutter Dev</span> <br /> <span>iOS, Android</span></h4>
          <p>Developed hybrid mobile apps and cross-platform solutions using the Flutter framework.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;