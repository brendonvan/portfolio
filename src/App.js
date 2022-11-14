import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  let [showEmail, setShowEmail] = useState(false);
  function toggleEmail() {
    console.log(showEmail)
    if (!showEmail) {
        navigator.clipboard.writeText('brendon@van.digital');
        setShowEmail(true);
        
    } else {
        setShowEmail(false);
    }
  }

  return (
    <div className="App" id='home'>
      <Header />
      <div className='main'>
        <div className='header-wrapper'>
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
        </div>
        <div id='expertise'></div>
        <div className='about-me'>
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
        </div>
        <div className='projects' id='projects'>
          <div className='project-header'>
            <h1>My Work</h1>
          </div>
          <div className='project-portfolio'>
            <div className='project-card featured stacked'>
              <a href='https://tesla-reimagined.netlify.app/' target="_blank" rel="noopener noreferrer"><img src="./projects/tesla.png" alt="tesla-project" /></a>
              <div className='project-card-content'>
                <h2>Tesla Reimagined</h2>
                <span><p>Tesla Clone but with UI/UX inspired by Nickelfox & Kushanthi Hasinika. CRUD funcationality for user authentication and cultivating car designs using Spring Boot.</p></span><a href='https://github.com/brendonvan/Tesla-Reimagined/' target="_blank" rel="noopener noreferrer"><p>Github</p></a>
                <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='javascript'></img>
                <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' alt='html'></img>
                <img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' alt='css'></img>
                <img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' alt='react'></img>
                <img src='https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white' alt='redux'></img>
                <img src='https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white' alt='three.js'></img>
                <img src='https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white' alt='java'></img>
                <img src='https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white' alt='spring'></img>
                <img src='https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white' alt='sql'></img>
              </div>
            </div>
            <div className='project-card stacked'>
              <a href='https://netflix-reimagined.netlify.app/' target="_blank" rel="noopener noreferrer"><img src="./projects/netflix.png" alt="netflix-project" /></a>
              <div className='project-card-content'>
                <h2>Netflix Reimagined</h2>
                <span><p>Netflix Clone but with UI/UX inspired by Jurre Houtkamp & Serge Strokov. CRUD funcationality for user authentication and cultivating watchlists. </p></span><a href='https://github.com/brendonvan/Netflix-Reimagined/' target="_blank" rel="noopener noreferrer"><p>Github</p></a>
                
                <img src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' alt='mongodb'></img>
                <img src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' alt='express'></img>
                <img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' alt='react'></img>
                <img src='https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white' alt='redux'></img>
                <img src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' alt='node'></img>
              </div>
            </div>
            <div className='project-card stacked'>
              <a href='https://this-is-streamify.herokuapp.com/' target="_blank" rel="noopener noreferrer"><img src="./projects/spotify.png" alt="spotify-project" /></a>
              <div className='project-card-content'>
                <h2>Spotify Clone</h2>
                <span><p>Recreated Spotify's search funcationality, utilizing CRUD for the playlists.</p></span><a href='https://github.com/brendonvan/This-Is-Streamify/' target="_blank" rel="noopener noreferrer"><p>Github</p></a>
                
                <img src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' alt='mongodb'></img>
                <img src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' alt='express'></img>
                <img src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' alt='node'></img>
              </div>
            </div>
            <div className='project-card stacked'>
              <a href='https://brendonvan.github.io/2048-clone/' target="_blank" rel="noopener noreferrer"><img src="./projects/2048.png" alt="2048-project" /></a>
              <div className='project-card-content'>
                <h2>2048 Clone</h2>
                <span><p>The objective of the game is to slide numbered tiles on a grid to combine them to create a tile with the number 2048.</p></span><a href='https://github.com/brendonvan/2048-clone/' target="_blank" rel="noopener noreferrer"><p>Github</p></a>
                <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='javascript'></img>
                <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' alt='html'></img>
                <img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' alt='css'></img>
                <img src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' alt='node'></img>
              
              </div>
            </div>
            <div className='project-card stacked'>
              <a href='https://pokedex-ga-project.herokuapp.com/pokedex/' target="_blank" rel="noopener noreferrer"><img src="./projects/pokedex.png" alt="pokedex-project" /></a>
              <div className='project-card-content'>
                <h2>Pokedex</h2>
                <span><p>Virtual Pokedex that encompasses the original 151 pokemon.</p></span><a href='https://github.com/brendonvan/pokedex/' target="_blank" rel="noopener noreferrer"><p id='contact'>Github</p></a>
                <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='javascript'></img>
                <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' alt='html'></img>
                <img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' alt='css'></img>
                <img src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' alt='express'></img>
                <img src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' alt='node'></img>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
