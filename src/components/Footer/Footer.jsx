import './Footer.css';
import Contact from '../Contact/Contact';

// Redux
import { useSelector } from "react-redux";

const Footer = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <footer id='contact' className={theme.isDarkMode ? 'footer dark-mode' : 'footer'}>
            <div className='contact__me'>
                <h4 className='contact__me-title'>Contact Me</h4>
                <p className='contact__me-subtitle'>Have an exciting project you need help with?<br></br> Send me an email or contact me via instant message!</p>
                <Contact />
            </div>
            <div className='testimonials'>
                <div className='testimonial__image'>
                    <img src="./icons/quotes.svg" alt="quotes" />
                    <img src="./icons/ericfithian.jpeg" alt="ericfithian" />
                </div>
                <p className='testimonial__quote'>His ability to be a leader who helps others he's around will also improve
                    the culture of any company that is lucky enough to hire him the same way it
                    has drastically improved the culture of my cohort he is taking.
                </p>
                <p className='testimonial__author'>
                    <b>- Eric Fithian</b> Lead Instructor at General Assembly
                </p>

            </div>
        </footer>
    )
}

export default Footer;