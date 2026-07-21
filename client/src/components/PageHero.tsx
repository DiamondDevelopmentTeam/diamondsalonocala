import { ResponsiveImage } from './ResponsiveImage';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  imageBase?: string;
  imageAlt?: string;
  imagePosition?: string;
};

export function PageHero({
  eyebrow = 'Diamond Salon Ocala',
  title,
  description,
  imageBase = 'salon/ourspace5',
  imageAlt = 'Interior of Diamond Salon Ocala',
  imagePosition,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__copy">
        <div className="page-hero__copy-inner">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {description ? <p>{description}</p> : null}
        </div>
      </div>
      <ResponsiveImage
        baseName={imageBase}
        alt={imageAlt}
        width={1600}
        height={1200}
        className="page-hero__media"
        loading="eager"
        fetchPriority="high"
        position={imagePosition}
        sizes="(max-width: 780px) 100vw, 58vw"
      />
      <span className="page-hero__index" aria-hidden="true">DSO · 01</span>
    </section>
  );
}
