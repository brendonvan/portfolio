import './Footer.css';
import { useState, useEffect } from 'react';

const Footer = () => {
    let [showEmail, setShowEmail] = useState(false);
    const toggleEmail =() => {
        if (!showEmail) {
            navigator.clipboard.writeText('brendon@van.digital');
            setShowEmail(true);
        } else {
            setShowEmail(false);
        }
    }

    return (
        <footer id='contact' className="footer">
            <div className='contact-me'>
                <h1>Contact Me</h1>
                <p>Have an exciting project you need help with?<br></br> Send me an email or contact me via instant message!</p>
                <div className='contact-info'>
                    <div>
                        <span className={ showEmail ? 'contact-points moved' : 'contact-points' }><a href='https://github.com/brendonvan/' target="_blank" rel="noopener noreferrer"><img src="./icons/github.svg" alt="github" /></a> </span>
                        <span className={ showEmail ? 'contact-points moved' : 'contact-points' }><a href='https://www.linkedin.com/in/brendon-van/' target="_blank" rel="noopener noreferrer"><img src="./icons/linkedin.svg" alt="linkedin" /></a> </span>
                        <span className={ showEmail ? 'contact-points email moved' : 'contact-points email' }><img onClick={ () => { toggleEmail() } } src="./icons/email.svg" alt="email" /> </span>
                        <h4><span className={ showEmail ? 'show-email' : 'hide-email' }>brendon@van.digital</span></h4>
                    </div>
                </div>
            </div>
            <div className='testimonials'>
                <div className='testimonial-image'>
                    <img src="./icons/quotes.svg" alt="quotes" />
                    <img src="./icons/ericfithian.jpeg" alt="ericfithian" />
                </div>
                <p>His ability to be a leader who helps others he's around will also improve
                the culture of any company that is lucky enough to hire him the same way it
                has drastically improved the culture of my cohort he is taking. 
                </p>
                <span><b>- Eric Fithian</b></span>
                <br></br>
                <span>Lead Instructor at General Assembly</span>

            </div>
        </footer>
    )
}

export default Footer;