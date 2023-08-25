import './Header.css';
import { useState, useEffect } from 'react'


const Header = () => {

    const [scrollDirection, setScrollDirection] = useState(true);
      
        useEffect(() => {
          let lastScrollY = window.pageYOffset;
      
          const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? false : true ;
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
              setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
          };
          window.addEventListener("scroll", updateScrollDirection); // add event listener
          return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
          }
    }, [scrollDirection]);

    return (
        <header className='header-container'>
            <div className={ scrollDirection ? 'header' : 'header hide-nav' }>
                <div className='header-left'><img src="http://brendonvan.github.io/portfolio/icons/BVFilm-source.svg" alt="logo" /></div>
                
                <div className='header-right'>
                    <a href='#home'>Home</a>
                    <a href='#about-me'>About Me</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                    <a href="./Brendon_Van_Resume.docx" download rel="noopener noreferrer" target="_blank">Resume</a>
                </div>

            </div>
        </header>
    )
}

export default Header;