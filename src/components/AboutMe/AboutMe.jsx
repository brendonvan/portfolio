import './AboutMe.css';

const AboutMe = () => {
    return (
        <section id='about-me' className='about-me'>
          <h1>About Me</h1>
          <div className='about-me-desc'>
            <span>I'm used to </span> 
              <span>tight </span>
              <span id='header-deadlines'>deadlines</span>
              <br></br> 
              <span>and </span>
              <span id='header-challenging'>challenging </span>  
            <span>tasks.</span>
          </div>
          <div className='about-me-boxes'>
            <div className='about-me-box1'>
              <h6><span>Software</span> <br></br> <span>Development</span></h6>
              <p>Experienced in both functional and OOP: Java, JavaScript, Python, Dart, TypeScript.</p>
            </div>
            <div className='about-me-box2'>
              <h6><span>Frontend Dev</span> <br></br> <span>React, NextJS</span></h6>
              <p>Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p>
            </div>
            <div className='about-me-box3'>
              <h6><span>Flutter Dev</span> <br></br> <span>iOS, Android</span></h6>
              <p>Developed hybrid mobile apps and cross-platform solutions using the Flutter framework.</p>
            </div>
          </div>
        </section>
    )
}

export default AboutMe;