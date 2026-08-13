import { useCallback, useEffect, useState } from 'react';
import { homeHeroSlides } from '../data/homeHeroSlides';
import { ResponsiveImage } from './ResponsiveImage';

const ROTATION_INTERVAL = 7000;

export function HomeHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showSlide = useCallback((index: number) => {
    setActiveIndex((index + homeHeroSlides.length) % homeHeroSlides.length);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + homeHeroSlides.length) % homeHeroSlides.length);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % homeHeroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(showNext, ROTATION_INTERVAL);
    return () => window.clearInterval(timer);
  }, [isPaused, showNext]);

  return (
    <div
      className="home-hero__media"
      aria-roledescription="carousel"
      aria-label="Inside Diamond Salon Ocala"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="home-hero__slides">
        {homeHeroSlides.map((slide, index) => (
          <div
            className={`home-hero__slide${activeIndex === index ? ' is-active' : ''}`}
            aria-hidden={activeIndex !== index}
            key={slide.baseName}
          >
            <ResponsiveImage
              baseName={slide.baseName}
              alt={activeIndex === index ? slide.alt : ''}
              width={slide.width}
              height={slide.height}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'low'}
              sizes="100vw"
              position={slide.position}
            />
          </div>
        ))}
      </div>

      <p className="home-hero__image-caption" aria-live="polite">
        <span>{String(activeIndex + 1).padStart(2, '0')}</span>
        {homeHeroSlides[activeIndex].label}
      </p>

      <div className="home-hero__carousel-controls" aria-label="Hero slideshow controls">
        <button type="button" className="home-hero__carousel-arrow" onClick={showPrevious} aria-label="Show previous salon image">←</button>
        <div className="home-hero__carousel-dots" aria-label="Choose a salon image">
          {homeHeroSlides.map((slide, index) => (
            <button
              type="button"
              className={activeIndex === index ? 'is-active' : ''}
              onClick={() => showSlide(index)}
              aria-label={`Show slide ${index + 1}: ${slide.label}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              key={slide.baseName}
            >
              <span className="sr-only">{slide.label}</span>
            </button>
          ))}
        </div>
        <button type="button" className="home-hero__carousel-arrow" onClick={showNext} aria-label="Show next salon image">→</button>
      </div>
    </div>
  );
}
