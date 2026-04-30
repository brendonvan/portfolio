import { useState, useRef, useCallback, useEffect } from 'react';

// Hero track: 1 clone on each side  → real slide i at heroClone = i + 1
// Strip track: 3 lead + 3 trail clones → real slide i at stripClone = i + 3
// STRIP_OFFSET bridges the gap: stripClone = heroClone + STRIP_OFFSET
const HERO_LEAD    = 1;
const STRIP_LEAD   = 3;
const STRIP_OFFSET = STRIP_LEAD - HERO_LEAD; // 2

export function useCarousel({ total, speed = 400 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating   = useRef(false);
  const drag          = useRef(null); // { x, y, heroClone, intentKnown, isHoriz }
  const heroTrackRef  = useRef(null);
  const heroWrapRef   = useRef(null);
  const stripTrackRef = useRef(null);
  const stripWrapRef  = useRef(null);
  const internalIndex = useRef(0);

  function heroSlideWidth()  { return heroTrackRef.current?.firstElementChild?.offsetWidth  ?? 0; }
  function stripSlideWidth() { return stripTrackRef.current?.firstElementChild?.offsetWidth ?? 0; }
  function heroWrapWidth()   { return heroWrapRef.current?.offsetWidth  ?? 0; }
  function stripWrapWidth()  { return stripWrapRef.current?.offsetWidth ?? 0; }

  // Center the given clone position inside its wrap
  function heroOffset(clonePos) {
    const sw = heroSlideWidth();
    return -(clonePos * sw) + (heroWrapWidth() - sw) / 2;
  }

  function stripOffset(clonePos) {
    const sw = stripSlideWidth();
    return -(clonePos * sw) + (stripWrapWidth() - sw) / 2;
  }

  function setTransform(el, x, animate) {
    if (!el) return;
    el.style.transition = animate ? `transform ${speed}ms ease` : 'none';
    el.style.transform  = `translateX(${x}px)`;
  }

  function jumpTo(heroClone) {
    setTransform(heroTrackRef.current,  heroOffset(heroClone),                 false);
    setTransform(stripTrackRef.current, stripOffset(heroClone + STRIP_OFFSET), false);
  }

  function animateTo(heroClone, onDone) {
    setTransform(heroTrackRef.current,  heroOffset(heroClone),                 true);
    setTransform(stripTrackRef.current, stripOffset(heroClone + STRIP_OFFSET), true);

    const hero = heroTrackRef.current;
    if (!hero) { onDone?.(); return; }

    function handleEnd(e) {
      if (e.target !== hero || e.propertyName !== 'transform') return;
      hero.removeEventListener('transitionend', handleEnd);
      onDone?.();
    }
    hero.addEventListener('transitionend', handleEnd);
  }

  const slideTo = useCallback((realIdx) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    internalIndex.current = realIdx;
    setCurrentIndex(realIdx);
    animateTo(realIdx + HERO_LEAD, () => { isAnimating.current = false; });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, speed]);

  const slideNext = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const nextReal      = (internalIndex.current + 1) % total;
    const nextHeroClone = internalIndex.current + HERO_LEAD + 1;

    internalIndex.current = nextReal;
    setCurrentIndex(nextReal);

    animateTo(nextHeroClone, () => {
      // Wrapped into end clone → silently reset to real first slide
      if (nextReal === 0) jumpTo(HERO_LEAD);
      isAnimating.current = false;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, speed]);

  const slidePrev = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const prevReal      = (internalIndex.current - 1 + total) % total;
    const prevHeroClone = internalIndex.current + HERO_LEAD - 1;

    internalIndex.current = prevReal;
    setCurrentIndex(prevReal);

    animateTo(prevHeroClone, () => {
      // Wrapped into start clone → silently reset to real last slide
      if (prevReal === total - 1) jumpTo(total);
      isAnimating.current = false;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, speed]);

  // Initial position after DOM is ready
  useEffect(() => {
    const raf = requestAnimationFrame(() => jumpTo(HERO_LEAD));
    return () => cancelAnimationFrame(raf);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reposition on resize without animation
  useEffect(() => {
    function onResize() { jumpTo(internalIndex.current + HERO_LEAD); }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Touch swipe — defers pointer capture until horizontal intent is confirmed so
  // vertical scrolling passes through to the browser uninterrupted.
  const touchHandlers = {
    onPointerDown(e) {
      if (e.pointerType !== 'touch') return;
      if (isAnimating.current) return;
      drag.current = {
        x: e.clientX,
        y: e.clientY,
        heroClone: internalIndex.current + HERO_LEAD,
        intentKnown: false,
        isHoriz: false,
      };
    },
    onPointerMove(e) {
      if (e.pointerType !== 'touch' || !drag.current) return;
      const dx = e.clientX - drag.current.x;
      const dy = e.clientY - drag.current.y;

      // Wait for a 5px threshold before committing to a direction
      if (!drag.current.intentKnown) {
        if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;
        drag.current.intentKnown = true;
        drag.current.isHoriz = Math.abs(dx) >= Math.abs(dy);
        if (!drag.current.isHoriz) {
          // Vertical intent — release and let the browser scroll
          drag.current = null;
          return;
        }
        // Horizontal intent — capture so moves are delivered even outside the element
        e.currentTarget.setPointerCapture(e.pointerId);
      }

      if (!drag.current.isHoriz) return;

      const { heroClone } = drag.current;
      const hw = heroSlideWidth();
      const stripScale = hw > 0 ? stripSlideWidth() / hw : 1;
      setTransform(heroTrackRef.current,  heroOffset(heroClone) + dx,                false);
      setTransform(stripTrackRef.current, stripOffset(heroClone + STRIP_OFFSET) + dx * stripScale, false);
    },
    onPointerUp(e) {
      if (e.pointerType !== 'touch' || !drag.current) return;
      if (!drag.current.intentKnown || !drag.current.isHoriz) {
        drag.current = null;
        return;
      }

      const delta     = e.clientX - drag.current.x;
      const threshold = heroSlideWidth() * 0.25;
      const heroClone = drag.current.heroClone;
      drag.current = null;

      if (delta < -threshold)     slideNext();
      else if (delta > threshold) slidePrev();
      else {
        // Below threshold — animate back to the current slide instead of jumping
        isAnimating.current = true;
        animateTo(heroClone, () => { isAnimating.current = false; });
      }
    },
    // Fires when browser takes over the gesture (e.g. vertical scroll with touch-action: pan-y)
    onPointerCancel() {
      if (!drag.current) return;
      const heroClone = drag.current.heroClone;
      drag.current = null;
      jumpTo(heroClone);
    },
  };

  return {
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
  };
}
