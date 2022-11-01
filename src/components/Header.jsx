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
        <div className='header-container'>
            <div className={ scrollDirection ? 'header' : 'header hide-nav' }>
                <div className='header-left'><img src="./icons/BVFilm-source.svg" alt="logo" /></div>
                
                <div className='header-right'>
                    <a href='#home'>Home</a>
                    <a href='#expertise'>Expertise</a>
                    <a href='#work'>Work</a>
                    <a href='#contact'>Contact</a>
                    <a href="./Brendon-Van-Resume.pdf" download rel="noopener noreferrer" target="_blank">Resume</a>
                </div>


                {/* <div className={ menuOpen ? 'header-right open' : 'header-right' }>
                    <div className='header-menu' onClick={ () => { toggleMenu() } }>
                        <span className='line-1'></span>
                        <span className='line-2'></span>
                        <span className='line-3'></span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Header;