import './Project.css';
import { useRef, useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, A11y } from 'swiper/modules';
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
    title: 'Coming Soon',
    link: '#',
    github: '#',
    image: 'https://placehold.co/1200x675/111827/374151?text=Project+4',
    alt: 'project-4',
    description: 'Placeholder description for project 4. Replace with your real project details.',
    tech: [],
  },
  {
    title: 'Coming Soon',
    link: '#',
    github: '#',
    image: 'https://placehold.co/1200x675/1a1a2e/2d2d5e?text=Project+5',
    alt: 'project-5',
    description: 'Placeholder description for project 5. Replace with your real project details.',
    tech: [],
  },
  {
    title: 'Coming Soon',
    link: '#',
    github: '#',
    image: 'https://placehold.co/1200x675/0f172a/1e3a5f?text=Project+6',
    alt: 'project-6',
    description: 'Placeholder description for project 6. Replace with your real project details.',
    tech: [],
  },
  {
    title: 'Coming Soon',
    link: '#',
    github: '#',
    image: 'https://placehold.co/1200x675/1c1c1c/3d3d3d?text=Project+7',
    alt: 'project-7',
    description: 'Placeholder description for project 7. Replace with your real project details.',
    tech: [],
  },
  {
    title: 'Coming Soon',
    link: '#',
    github: '#',
    image: 'https://placehold.co/1200x675/0d1117/21262d?text=Project+8',
    alt: 'project-8',
    description: 'Placeholder description for project 8. Replace with your real project details.',
    tech: [],
  },
];

const SPEED = 700;

const Project = () => {
  const theme = useSelector((state) => state.theme);
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);
  const isSyncing = useRef(false);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Capture both translates the moment a finger touches either carousel
  const heroTouchStart = useRef(0);
  const thumbsTouchStart = useRef(0);
  const focusFromPointer = useRef(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      if (isSyncing.current) return;
      const main = mainRef.current;
      if (!main || main.destroyed) return;
      const idx = (activeIndexRef.current + 1) % projects.length;
      activeIndexRef.current = idx;
      setActiveIndex(idx);
      isSyncing.current = true;
      main.slideToLoop(idx, SPEED, false);
      const thumbs = thumbsRef.current;
      if (thumbs && !thumbs.destroyed) thumbs.slideToLoop(idx, SPEED, false);
      setTimeout(() => { isSyncing.current = false; }, SPEED + 100);
    }, 7000);
    return () => clearInterval(id);
  }, [isPlaying]);

  const handleHeroTouchStart = useCallback(() => {
    if (mainRef.current)   heroTouchStart.current   = mainRef.current.translate;
    if (thumbsRef.current) thumbsTouchStart.current = thumbsRef.current.translate;
  }, []);

  const handleThumbTouchStart = useCallback(() => {
    if (thumbsRef.current) thumbsTouchStart.current = thumbsRef.current.translate;
    if (mainRef.current)   heroTouchStart.current   = mainRef.current.translate;
  }, []);

  // Real-time drag sync — delta from touch start scaled by slide spacing ratio
  // spaceBetween must be included; using slide width alone causes directional drift
  const handleHeroMove = useCallback((swiper) => {
    const thumbs = thumbsRef.current;
    if (!thumbs || thumbs.destroyed) return;
    const heroSpacing  = (swiper.slidesSizesGrid[0] || swiper.width)     + (swiper.params.spaceBetween  || 0);
    const thumbSpacing = (thumbs.slidesSizesGrid[0] || thumbs.width / 4) + (thumbs.params.spaceBetween || 0);
    const delta = swiper.translate - heroTouchStart.current;
    thumbs.setTransition(0);
    thumbs.setTranslate(thumbsTouchStart.current + delta * (thumbSpacing / heroSpacing));
  }, []);

  const handleThumbMove = useCallback((swiper) => {
    const main = mainRef.current;
    if (!main || main.destroyed) return;
    const thumbSpacing = (swiper.slidesSizesGrid[0] || swiper.width / 4) + (swiper.params.spaceBetween || 0);
    const heroSpacing  = (main.slidesSizesGrid[0]   || main.width)       + (main.params.spaceBetween   || 0);
    const delta = swiper.translate - thumbsTouchStart.current;
    main.setTransition(0);
    main.setTranslate(heroTouchStart.current + delta * (heroSpacing / thumbSpacing));
  }, []);

  const handleNavPrev = useCallback(() => {
    if (isSyncing.current) return;
    const main = mainRef.current;
    if (!main || main.destroyed) return;
    const idx = (activeIndexRef.current - 1 + projects.length) % projects.length;
    activeIndexRef.current = idx;
    setActiveIndex(idx);
    isSyncing.current = true;
    main.slideToLoop(idx, SPEED, false);
    const thumbs = thumbsRef.current;
    if (thumbs && !thumbs.destroyed) thumbs.slideToLoop(idx, SPEED, false);
    setTimeout(() => { isSyncing.current = false; }, SPEED + 100);
  }, []);

  const handleNavNext = useCallback(() => {
    if (isSyncing.current) return;
    const main = mainRef.current;
    if (!main || main.destroyed) return;
    const idx = (activeIndexRef.current + 1) % projects.length;
    activeIndexRef.current = idx;
    setActiveIndex(idx);
    isSyncing.current = true;
    main.slideToLoop(idx, SPEED, false);
    const thumbs = thumbsRef.current;
    if (thumbs && !thumbs.destroyed) thumbs.slideToLoop(idx, SPEED, false);
    setTimeout(() => { isSyncing.current = false; }, SPEED + 100);
  }, []);

  // Snap sync — fires after snap settles.
  // activeIndexRef guards against the loop-fix double-fire: Swiper fires
  // onSlideChangeTransitionEnd once for the animation, then again (instantly)
  // when it repositions from a clone to the real slide. Both calls carry the
  // same realIndex, so the second one is a no-op here.
  const handleHeroTransitionEnd = useCallback((swiper) => {
    if (isSyncing.current) return;
    const idx = swiper.realIndex;
    if (activeIndexRef.current === idx) return;
    activeIndexRef.current = idx;
    setActiveIndex(idx);
    const thumbs = thumbsRef.current;
    if (thumbs && !thumbs.destroyed) {
      isSyncing.current = true;
      thumbs.slideToLoop(idx, 0, false);
      setTimeout(() => { isSyncing.current = false; }, 100);
    }
  }, []);

  const handleThumbTransitionEnd = useCallback((swiper) => {
    if (isSyncing.current) return;
    const idx = swiper.realIndex;
    if (activeIndexRef.current === idx) return;
    activeIndexRef.current = idx;
    setActiveIndex(idx);
    const main = mainRef.current;
    if (main && !main.destroyed) {
      isSyncing.current = true;
      main.slideToLoop(idx, 0, false);
      setTimeout(() => { isSyncing.current = false; }, 100);
    }
  }, []);

  const handleThumbClick = useCallback((index) => {
    if (isSyncing.current) return;
    activeIndexRef.current = index;
    setActiveIndex(index);
    isSyncing.current = true;
    const main = mainRef.current;
    if (main && !main.destroyed) main.slideToLoop(index, SPEED, false);
    const thumbs = thumbsRef.current;
    if (thumbs && !thumbs.destroyed) thumbs.slideToLoop(index, SPEED, false);
    setTimeout(() => { isSyncing.current = false; }, 100);
  }, []);

  // Snap-back correction: onSlideChangeTransitionEnd only fires on index changes,
  // so a partial drag that snaps back leaves the other carousel drifted.
  // onTransitionEnd fires for every snap (including same-slide), fixing the drift.
  // Only fires for snap-back (realIndex unchanged). Slide changes go through
  // handleHeroTransitionEnd / handleThumbTransitionEnd. Setting isSyncing here
  // blocks any stray onTransitionEnd bounce from the other carousel (CSS
  // transitionend can fire when an in-flight transition is cancelled by
  // setTransition(0), bypassing runCallbacks=false).
  const handleHeroSnapCorrect = useCallback((swiper) => {
    if (isSyncing.current) return;
    if (swiper.realIndex !== activeIndexRef.current) return;
    const thumbs = thumbsRef.current;
    if (thumbs && !thumbs.destroyed) {
      isSyncing.current = true;
      thumbs.slideToLoop(swiper.realIndex, 0, false);
      setTimeout(() => { isSyncing.current = false; }, 100);
    }
  }, []);

  const handleThumbSnapCorrect = useCallback((swiper) => {
    if (isSyncing.current) return;
    if (swiper.realIndex !== activeIndexRef.current) return;
    const main = mainRef.current;
    if (main && !main.destroyed) {
      isSyncing.current = true;
      main.slideToLoop(swiper.realIndex, 0, false);
      setTimeout(() => { isSyncing.current = false; }, 100);
    }
  }, []);

  const handleSlideFocus = useCallback((index) => {
    if (focusFromPointer.current) return;
    if (activeIndexRef.current === index) return;
    activeIndexRef.current = index;
    setActiveIndex(index);
    const main = mainRef.current;
    if (main && !main.destroyed) main.slideToLoop(index, SPEED, false);
    const thumbs = thumbsRef.current;
    if (thumbs && !thumbs.destroyed) thumbs.slideToLoop(index, SPEED, false);
  }, []);

  return (
    <section
      id='projects'
      className={theme.isDarkMode ? 'project dark-mode hidden' : 'project hidden'}
      onPointerDown={() => {
        focusFromPointer.current = true;
        setTimeout(() => { focusFromPointer.current = false; }, 300);
      }}
    >
      <div className='project__header'>
        <h2>My Work</h2>
      </div>

      {/* Hero carousel */}
      <div className='project__carousel-wrap'>
      <Swiper
        className='project__carousel'
        modules={[Keyboard, A11y]}
        onSwiper={(s) => { mainRef.current = s; }}
        onTouchStart={handleHeroTouchStart}
        onSlideChangeTransitionEnd={handleHeroTransitionEnd}
        onTransitionEnd={handleHeroSnapCorrect}
        onSliderMove={handleHeroMove}
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{
          prevSlideMessage: 'Previous project',
          nextSlideMessage: 'Next project',
          paginationBulletMessage: 'Go to project {{index}}',
          slideRole: 'group',
          slideLabelMessage: 'Project {{index}} of {{slidesLength}}',
          containerMessage: 'Projects carousel',
        }}
        centeredSlides
        loop
        simulateTouch={false}
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
            <div className='project__card' onFocus={() => handleSlideFocus(i)}>
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
      <button className='project__nav-btn project__nav-btn--prev' onClick={handleNavPrev} aria-label='Previous project'>
        <svg viewBox='0 0 27 44' aria-hidden='true' focusable='false'>
          <path d='M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22z' fill='currentColor'/>
        </svg>
      </button>
      <button className='project__nav-btn project__nav-btn--next' onClick={handleNavNext} aria-label='Next project'>
        <svg viewBox='0 0 27 44' aria-hidden='true' focusable='false'>
          <path d='M27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22z' fill='currentColor'/>
        </svg>
      </button>
      </div>

      {/* Thumbs carousel — independent, synced via slideToLoop */}

      <Swiper
        className='project__thumbs'
        onSwiper={(s) => { thumbsRef.current = s; }}
        onTouchStart={handleThumbTouchStart}
        onSlideChangeTransitionEnd={handleThumbTransitionEnd}
        onTransitionEnd={handleThumbSnapCorrect}
        onSliderMove={handleThumbMove}
        centeredSlides
        loop
        simulateTouch={false}
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
              className='project__thumb'
              onClick={() => handleThumbClick(i)}
              role='button'
              tabIndex={0}
              aria-label={`View ${project.title}`}
              onFocus={() => handleSlideFocus(i)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleThumbClick(i)}
            >
              <img src={project.image} alt={project.alt} />
              <span>{project.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='project__controls'>
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
        <button
          className='project__play-btn'
          onClick={() => setIsPlaying(p => !p)}
          aria-label={isPlaying ? 'Pause autoplay' : 'Play autoplay'}
        >
          {isPlaying ? (
            <svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
              <rect x='6' y='4' width='4' height='16' fill='currentColor'/>
              <rect x='14' y='4' width='4' height='16' fill='currentColor'/>
            </svg>
          ) : (
            <svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
              <polygon points='5,3 19,12 5,21' fill='currentColor'/>
            </svg>
          )}
        </button>
      </div>
    </section>
  );
};

export default Project;
