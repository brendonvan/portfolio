import './Project.css';
import { useRef, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const projects = [
  {
    title: 'Tesla Reimagined',
    link: 'https://tesla-reimagined.vercel.app/',
    github: 'https://github.com/brendonvan/Tesla-Reimagined/',
    image: './projects/tesla.png',
    alt: 'tesla-project',
    description: 'Tesla Clone but with UI/UX inspired by Nickelfox & Kushanthi Hasinika. CRUD functionality for user authentication and cultivating car designs using Spring Boot.',
    tech: [
      { src: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white', alt: 'html' },
      { src: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', alt: 'css' },
      { src: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E', alt: 'javascript' },
      { src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB', alt: 'react' },
      { src: 'https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white', alt: 'redux' },
      { src: 'https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white', alt: 'three.js' },
      { src: 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white', alt: 'java' },
      { src: 'https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white', alt: 'spring' },
      { src: 'https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white', alt: 'sql' },
    ],
  },
  {
    title: 'Netflix Reimagined',
    link: 'https://neflix-reimagined.netlify.app/',
    github: 'https://github.com/brendonvan/Netflix-Reimagined/',
    image: './projects/netflix.png',
    alt: 'netflix-project',
    description: 'Netflix Clone but with UI/UX inspired by Jurre Houtkamp & Serge Strokov. CRUD functionality for user authentication and cultivating watchlists.',
    tech: [
      { src: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white', alt: 'html' },
      { src: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', alt: 'css' },
      { src: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E', alt: 'javascript' },
      { src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB', alt: 'react' },
      { src: 'https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white', alt: 'redux' },
      { src: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white', alt: 'mongodb' },
      { src: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white', alt: 'node' },
      { src: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB', alt: 'express' },
    ],
  },
  {
    title: '2048 Clone',
    link: 'https://brendonvan.github.io/2048-clone/',
    github: 'https://github.com/brendonvan/2048-clone/',
    image: './projects/2048.png',
    alt: '2048-project',
    description: 'The objective of the game is to slide numbered tiles on a grid to combine them to create a tile with the number 2048.',
    tech: [
      { src: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white', alt: 'html' },
      { src: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', alt: 'css' },
      { src: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E', alt: 'javascript' },
      { src: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white', alt: 'node' },
      { src: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB', alt: 'express' },
    ],
  },
  {
    title: 'Project 4',
    link: '#',
    github: '#',
    image: 'https://placehold.co/1200x675/111827/374151?text=Project+4',
    alt: 'project-4',
    description: 'Placeholder description for project 4. Replace with your real project details.',
    tech: [],
  },
  {
    title: 'Project 5',
    link: '#',
    github: '#',
    image: 'https://placehold.co/1200x675/1a1a2e/2d2d5e?text=Project+5',
    alt: 'project-5',
    description: 'Placeholder description for project 5. Replace with your real project details.',
    tech: [],
  },
  {
    title: 'Project 6',
    link: '#',
    github: '#',
    image: 'https://placehold.co/1200x675/0f172a/1e3a5f?text=Project+6',
    alt: 'project-6',
    description: 'Placeholder description for project 6. Replace with your real project details.',
    tech: [],
  },
  {
    title: 'Project 7',
    link: '#',
    github: '#',
    image: 'https://placehold.co/1200x675/1c1c1c/3d3d3d?text=Project+7',
    alt: 'project-7',
    description: 'Placeholder description for project 7. Replace with your real project details.',
    tech: [],
  },
  {
    title: 'Project 8',
    link: '#',
    github: '#',
    image: 'https://placehold.co/1200x675/0d1117/21262d?text=Project+8',
    alt: 'project-8',
    description: 'Placeholder description for project 8. Replace with your real project details.',
    tech: [],
  },
];

const SPEED = 500;

const Project = () => {
  const theme = useSelector((state) => state.theme);
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMainChange = useCallback((swiper) => {
    const idx = swiper.realIndex;
    setActiveIndex(idx);
    const thumbs = thumbsRef.current;
    if (thumbs && !thumbs.destroyed) {
      thumbs.slideToLoop(idx, SPEED, false);
    }
  }, []);

  const handleThumbClick = useCallback((index) => {
    setActiveIndex(index);
    const main = mainRef.current;
    if (main && !main.destroyed) {
      main.slideToLoop(index, SPEED, false);
    }
  }, []);

  return (
    <section id='projects' className={theme.isDarkMode ? 'project dark-mode hidden' : 'project hidden'}>
      <div className='project__header'>
        <h2>My Work</h2>
      </div>

      {/* Hero carousel */}
      <Swiper
        className='project__carousel'
        modules={[Navigation, Keyboard, A11y]}
        onSwiper={(s) => { mainRef.current = s; }}
        onRealIndexChange={handleMainChange}
        navigation
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{
          prevSlideMessage: 'Previous project',
          nextSlideMessage: 'Next project',
          paginationBulletMessage: 'Go to project {{index}}',
        }}
        centeredSlides
        grabCursor
        loop
        speed={SPEED}
        slidesPerView={1.15}
        spaceBetween={12}
        breakpoints={{
          768:  { slidesPerView: 1.2,  spaceBetween: 16 },
          1024: { slidesPerView: 1.25, spaceBetween: 20 },
        }}
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <div className='project__card'>
              <a
                className='project__card-img'
                href={project.link}
                target={project.link !== '#' ? '_blank' : undefined}
                rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
              >
                <img src={project.image} alt={project.alt} />
              </a>
              <div className='project__card-overlay'>
                <div className='project__card-content'>
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  {project.github !== '#' && (
                    <a href={project.github} target='_blank' rel='noopener noreferrer'>Github</a>
                  )}
                </div>
                {project.tech.length > 0 && (
                  <div className='project__card-tech'>
                    {project.tech.map((badge, j) => (
                      <img key={j} src={badge.src} alt={badge.alt} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbs carousel — independent, synced via slideToLoop */}

      <Swiper
        className='project__thumbs'
        onSwiper={(s) => { thumbsRef.current = s; }}
        centeredSlides
        loop
        speed={SPEED}
        slidesPerView={4}
        spaceBetween={8}
        breakpoints={{
          768:  { spaceBetween: 12 },
          1024: { spaceBetween: 16 },
          1440: { spaceBetween: 20 },
        }}
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <div
              className={`project__thumb${activeIndex === i ? ' project__thumb--active' : ''}`}
              onClick={() => handleThumbClick(i)}
              role='button'
              tabIndex={0}
              aria-label={`View ${project.title}`}
              onKeyDown={(e) => e.key === 'Enter' && handleThumbClick(i)}
            >
              <img src={project.image} alt={project.alt} />
              <span>{project.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='project__pagination'>
        {projects.map((_, i) => (
          <button
            key={i}
            className={`project__pagination-bullet${activeIndex === i ? ' project__pagination-bullet--active' : ''}`}
            onClick={() => handleThumbClick(i)}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
