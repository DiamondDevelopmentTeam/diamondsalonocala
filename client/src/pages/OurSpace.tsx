import { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { SmartImage } from '../components/SmartImage';

const images = Array.from({ length: 15 }, (_, index) => `ourspace${index + 1}`);

export function OurSpace() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <PageHero title="Our Space" description="Bright stations, serene treatment rooms, and details chosen for comfort." imageBase="ourspace5" />
      <section className="section section--cream">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <p className="eyebrow eyebrow--dark">Take a look around</p>
            <h2>Designed for beauty professionals and their guests</h2>
            <p>Click any photo to open a larger view.</p>
          </Reveal>
          <div className="masonry-grid">
            {images.map((image, index) => (
              <Reveal key={image} delay={(index % 5) * 50}>
                <button className="gallery-tile" type="button" onClick={() => setSelected(image)}>
                  <SmartImage baseName={image} alt={`Diamond Salon Ocala space ${index + 1}`} />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selected ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Salon photo">
          <button type="button" className="lightbox__backdrop" aria-label="Close image" onClick={() => setSelected(null)} />
          <div className="lightbox__content">
            <button type="button" className="lightbox__close" aria-label="Close image" onClick={() => setSelected(null)}>×</button>
            <SmartImage baseName={selected} alt="Diamond Salon Ocala interior enlarged" loading="eager" />
          </div>
        </div>
      ) : null}
    </>
  );
}
