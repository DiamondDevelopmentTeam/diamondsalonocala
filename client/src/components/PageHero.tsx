import { SmartImage } from './SmartImage';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  imageBase?: string;
};

export function PageHero({ eyebrow = 'Diamond Salon Ocala', title, description, imageBase = 'serviceImage' }: PageHeroProps) {
  return (
    <section className="page-hero">
      <SmartImage baseName={imageBase} alt="Diamond Salon Ocala" className="page-hero__image" loading="eager" />
      <div className="page-hero__overlay" />
      <div className="container page-hero__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
    </section>
  );
}
