import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { Reveal } from '../components/Reveal';
import { galleryImages } from '../data/gallery';

const spaceDetails = [
  ['Style', 'An open floor with dedicated stations and room for individual professionals to work their way.'],
  ['Reset', 'Comfortable lounge seating, a dedicated shampoo area, and quieter rooms for more private services.'],
  ['Stay awhile', 'A welcoming reception experience and refreshment space for the moments between services.'],
];

export function OurSpace() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const selectedImage = selectedIndex === null ? null : galleryImages[selectedIndex];

  useEffect(() => {
    if (selectedIndex === null) return;
    document.body.classList.add('lightbox-open');
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowRight') setSelectedIndex((current) => current === null ? 0 : (current + 1) % galleryImages.length);
      if (event.key === 'ArrowLeft') setSelectedIndex((current) => current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('lightbox-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      <PageHero
        eyebrow="Inside Diamond"
        title="A salon with room to exhale."
        description="Bright stations, quieter service rooms, and a guest experience considered from arrival to finish."
        imageBase="salon/slideshow1"
        imageAlt="Botanical feature wall and lounge inside Diamond Salon Ocala"
      />

      <section className="section space-overview">
        <div className="container space-overview__grid">
          <Reveal>
            <p className="eyebrow eyebrow--dark">Designed for the work</p>
            <h2>Professional energy, grounded by comfort.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="large-copy">Diamond Salon gives independent beauty professionals a polished backdrop for their craft and gives every guest a setting that feels open, calm, and distinctly local.</p>
          </Reveal>
        </div>

        <div className="container space-detail-grid">
          {spaceDetails.map(([title, copy], index) => (
            <Reveal key={title} delay={index * 70}>
              <article>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section gallery-section" aria-labelledby="gallery-title">
        <div className="container gallery-section__heading">
          <Reveal>
            <p className="eyebrow">The gallery</p>
            <h2 id="gallery-title">Walk through the space—and see the work.</h2>
          </Reveal>
          <Reveal delay={80}><p>Select any image for a closer view. Use arrow keys to move through the gallery.</p></Reveal>
        </div>

        <div className="container salon-gallery">
          {galleryImages.map((image, index) => (
            <Reveal key={image.baseName} className={`salon-gallery__reveal salon-gallery__reveal--${image.orientation}`} delay={(index % 4) * 45}>
              <button type="button" className="gallery-tile" onClick={() => setSelectedIndex(index)} aria-label={`Open image: ${image.label}`}>
                <ResponsiveImage baseName={image.baseName} alt={image.alt} width={image.width} height={image.height} position={image.position} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                <span><i>{String(index + 1).padStart(2, '0')}</i>{image.label}<b aria-hidden="true">↗</b></span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section salon-career-cta">
        <div className="container salon-career-cta__inner">
          <Reveal>
            <p className="eyebrow">For beauty professionals</p>
            <h2>Picture your business here.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>Diamond Salon welcomes licensed professionals who value craft, guest care, and a respectful independent environment.</p>
            <Link className="button button--gold" to="/join-our-team">Explore booth rental</Link>
          </Reveal>
        </div>
      </section>

      {selectedImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${selectedImage.label}, image ${selectedIndex! + 1} of ${galleryImages.length}`}>
          <button type="button" className="lightbox__backdrop" aria-label="Close gallery" onClick={() => setSelectedIndex(null)} />
          <div className="lightbox__content">
            <div className="lightbox__topbar">
              <p><span>{String(selectedIndex! + 1).padStart(2, '0')} / {galleryImages.length}</span>{selectedImage.label}</p>
              <button ref={closeButtonRef} type="button" className="lightbox__close" aria-label="Close gallery" onClick={() => setSelectedIndex(null)}>Close <span aria-hidden="true">×</span></button>
            </div>
            <ResponsiveImage baseName={selectedImage.baseName} alt={selectedImage.alt} width={selectedImage.width} height={selectedImage.height} loading="eager" position={selectedImage.position} sizes="95vw" />
            <div className="lightbox__controls">
              <button type="button" onClick={() => setSelectedIndex((selectedIndex! - 1 + galleryImages.length) % galleryImages.length)}><span aria-hidden="true">←</span> Previous</button>
              <button type="button" onClick={() => setSelectedIndex((selectedIndex! + 1) % galleryImages.length)}>Next <span aria-hidden="true">→</span></button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
