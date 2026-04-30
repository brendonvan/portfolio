import { useEffect, useRef, useState, useCallback } from 'react';
import { useCarousel } from './useCarousel';
import './Carousel.css';

function PauseIcon() {
  return (
    <svg viewBox="0 0 10 10" aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="3" height="8" rx="1" fill="currentColor" />
      <rect x="6" y="1" width="3" height="8" rx="1" fill="currentColor" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 10 10" aria-hidden="true" focusable="false">
      <polygon points="1,1 9,5 1,9" fill="currentColor" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 8 14" aria-hidden="true" focusable="false">
      <path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 8 14" aria-hidden="true" focusable="false">
      <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Props:
 *   heroSlides:  Array<{ id, image, alt, title, subtitle, cta, href }>
 *   stripSlides: Array<{ id, image, alt, label, href }>  — same length as heroSlides
 *   autoplayDelay: number (ms, default 7000)
 */
export function Carousel({ heroSlides = [], stripSlides = [], autoplayDelay = 7000 }) {
  const total = heroSlides.length;
  const {
    currentIndex,
    slideNext,
    slidePrev,
    slideTo,
    touchHandlers,
    heroTrackRef,
    heroWrapRef,
    stripTrackRef,
    stripWrapRef,
    isAnimating,
  } = useCarousel({ total, speed: 500 });

  const [isPlaying, setIsPlaying] = useState(true);
  const focusFromPointer = useRef(false);
  const sectionRef = useRef(null);
  const liveRef = useRef(null);
  const heroTrackId = useRef(`carousel-track-${Math.random().toString(36).slice(2)}`).current;

  // Autoplay
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      if (!isAnimating.current) slideNext();
    }, autoplayDelay);
    return () => clearInterval(id);
  }, [isPlaying, slideNext, autoplayDelay, isAnimating]);

  // Screen-reader live announcement
  useEffect(() => {
    if (liveRef.current) {
      liveRef.current.textContent = `Slide ${currentIndex + 1} of ${total}`;
    }
  }, [currentIndex, total]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); slideNext(); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); slidePrev(); }
  }, [slideNext, slidePrev]);

  const handlePointerDown = useCallback(() => {
    focusFromPointer.current = true;
    setTimeout(() => { focusFromPointer.current = false; }, 300);
  }, []);

  const handleSlideFocus = useCallback((i) => {
    if (focusFromPointer.current) return;
    if (currentIndex === i) return;
    slideTo(i);
  }, [currentIndex, slideTo]);

  // Hero: 1 lead + 1 trail clone
  const clonedHero = total > 0
    ? [heroSlides[total - 1], ...heroSlides, heroSlides[0]]
    : [];

  // Strip: 3 lead + 3 trail clones
  const s = (i) => stripSlides[((i % total) + total) % total];
  const clonedStrip = total > 0
    ? [s(-3), s(-2), s(-1), ...stripSlides, s(0), s(1), s(2)]
    : [];

  if (total === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="carousel"
      aria-roledescription="carousel"
      aria-label="Featured content"
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      tabIndex={-1}
    >
      <span ref={liveRef} className="carousel__sr-only" aria-live="polite" aria-atomic="true" />

      <div id="projects" className="carousel__header">
        <h2>My Work</h2>
      </div>

      {/* ── Hero track + hidden side nav buttons ── */}
      <div ref={heroWrapRef} className="carousel__hero-wrap" {...touchHandlers}>
        <div ref={heroTrackRef} id={heroTrackId} className="carousel__hero-track">
          {clonedHero.map((slide, i) => {
            const realIdx = i - 1;
            const isClone = realIdx < 0 || realIdx >= total;
            const labelIdx = ((realIdx % total) + total) % total;
            return (
              <div
                key={`hero-${i}`}
                className={`carousel__hero-slide${currentIndex === labelIdx && !isClone ? ' carousel__hero-slide--active' : ''}`}
                role={isClone ? undefined : 'group'}
                aria-roledescription={isClone ? undefined : 'slide'}
                aria-label={isClone ? undefined : `${labelIdx + 1} of ${total}`}
                aria-hidden={isClone ? true : undefined}
                tabIndex={isClone ? -1 : 0}
                onFocus={() => !isClone && handleSlideFocus(labelIdx)}
              >
                <div className="carousel__hero-img">
                  <img src={slide.image} alt={slide.alt || ''} draggable={false} />
                </div>
                <div className="carousel__hero-overlay">
                  <h3>{slide.title}</h3>
                  {slide.subtitle && <p>{slide.subtitle}</p>}
                  {slide.href && (
                    <a href={slide.href} target="_blank" rel="noopener noreferrer" tabIndex={isClone ? -1 : 0}>
                      {slide.cta || 'Learn more'}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Hidden off-screen — animate in on keyboard focus for WCAG */}
        <button
          className="carousel__side-btn carousel__side-btn--prev"
          onClick={slidePrev}
          aria-label="Previous slide"
          aria-controls={heroTrackId}
        >
          <ChevronLeft />
        </button>
        <button
          className="carousel__side-btn carousel__side-btn--next"
          onClick={slideNext}
          aria-label="Next slide"
          aria-controls={heroTrackId}
        >
          <ChevronRight />
        </button>
      </div>

      {/* ── Strip track ── */}
      <div ref={stripWrapRef} className="carousel__strip-wrap" aria-hidden="true">
        <div ref={stripTrackRef} className="carousel__strip-track">
          {clonedStrip.map((slide, i) => {
            const realIdx = i - 3;
            const isReal  = realIdx >= 0 && realIdx < total;
            const isActive = isReal && currentIndex === realIdx;
            return (
              <div
                key={`strip-${i}`}
                className={`carousel__strip-slide${isActive ? ' carousel__strip-slide--active' : ''}`}
              >
                <img src={slide.image} alt={slide.alt || ''} draggable={false} />
                <span>{slide.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Footer: dots centred + play/pause pinned right ── */}
      <div className="carousel__footer">
        <div className="carousel__dots" role="tablist" aria-label="Carousel slides">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`carousel__dot${currentIndex === i ? ' carousel__dot--active' : ''}`}
              style={currentIndex === i
                ? { '--dot-duration': `${autoplayDelay}ms`, animationPlayState: isPlaying ? 'running' : 'paused' }
                : {}}
              onClick={() => slideTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={currentIndex === i ? 'true' : undefined}
            />
          ))}
        </div>

        <button
          className="carousel__play-btn"
          onClick={() => setIsPlaying(p => !p)}
          aria-label={isPlaying ? 'Pause autoplay' : 'Resume autoplay'}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </section>
  );
}
