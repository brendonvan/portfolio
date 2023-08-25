import './AboutMe.css';

const AboutMe = () => {
    return (
        <section id='about-me' className='about-me'>
          <h2>About Me</h2>
          <h3 className='about-me-desc'>
            <span>I'm used to </span> 
              <span>tight </span>
              <span id='header-deadlines'>deadlines</span>
              <br></br> 
              <span>and </span>
              <span id='header-challenging'>challenging </span>  
            <span>tasks.</span>
          </h3>
          <div className='about-me-boxes'>
            <div className='about-me-box1'>
              <h4>
                <span>Software</span><br/><span>Development</span>
              </h4>
              <p>Experienced in both functional and OOP: Java, JavaScript, Python, Dart, TypeScript.</p>
            </div>
            <div className='about-me-box2'>
              <h4><span>Frontend Dev</span> <br/> <span>React, NextJS</span></h4>
              <p>Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p>
            </div>
            <div className='about-me-box3'>
              <h4><span>Flutter Dev</span> <br/> <span>iOS, Android</span></h4>
              <p>Developed hybrid mobile apps and cross-platform solutions using the Flutter framework.</p>
            </div>
          </div>
        </section>
    )
}

export default AboutMe;