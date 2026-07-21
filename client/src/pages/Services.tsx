import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { Reveal } from '../components/Reveal';
import { site } from '../config/site';
import { serviceGroups } from '../data/services';
import { assetUrl } from '../lib/assets';

const slug = (value: string) => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services & starting prices"
        title="Crafted for your hair—not a template."
        description="A flexible salon menu shaped by your professional, timing, product needs, and desired result."
        imageBase="salon/serviceImage"
        imageAlt="Styling station and salon chair at Diamond Salon Ocala"
        imagePosition="50% 58%"
      />

      <section className="service-nav" aria-label="Service categories">
        <div className="container">
          {serviceGroups.map((group) => <a key={group.title} href={`#${slug(group.title)}`}>{group.title}</a>)}
        </div>
      </section>

      <section className="section services-section">
        <div className="container services-intro">
          <Reveal>
            <p className="eyebrow eyebrow--dark">The menu</p>
            <h2>Start with a service.<br />Finish with a consultation.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="large-copy">All prices shown are starting points. Your final quote may vary by professional, hair length and density, technique, timing, and product used. Confirm details before your appointment.</p>
          </Reveal>
        </div>

        <div className="container services-layout">
          <div className="services-list">
            {serviceGroups.map((group, index) => (
              <Reveal key={group.title} delay={(index % 2) * 60}>
                <article className="service-group" id={slug(group.title)}>
                  <header className="service-group__heading">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h2>{group.title}</h2>
                      {group.note ? <p>{group.note}</p> : null}
                    </div>
                  </header>
                  <div className="price-list">
                    {group.items.map((item) => (
                      <div key={item.name}>
                        <span>{item.name}</span>
                        <i aria-hidden="true" />
                        <strong>{item.price}</strong>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <aside className="services-aside">
            <ResponsiveImage baseName="salon/ourspace15" alt="Diamond Salon shampoo lounge" width={1600} height={1067} sizes="(max-width: 900px) 100vw, 32vw" />
            <div>
              <p className="eyebrow">Need a match?</p>
              <h2>Choose the professional before the appointment.</h2>
              <p>Specialties and booking paths vary. Browse the team directory or contact the salon for help deciding who best fits your goals.</p>
              <Link className="button button--line-light" to="/team">Browse the team</Link>
              <a className="arrow-link arrow-link--light" href={site.bookingUrl} target="_blank" rel="noreferrer">Go directly to booking <span aria-hidden="true">↗</span></a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section brazilian-section">
        <div className="container split-feature">
          <Reveal className="split-feature__media">
            <ResponsiveImage baseName="salon/ourspace7" alt="Long blonde hair styled in smooth polished waves" width={900} height={1055} sizes="(max-width: 760px) 100vw, 48vw" />
            <span className="image-caption">Smoothness and movement, customized to the guest</span>
          </Reveal>
          <Reveal className="split-feature__copy" delay={80}>
            <img src={assetUrl('images/brand/brazilian-blowout.webp')} alt="Brazilian Blowout" width="181" height="37" className="service-brand-logo" loading="lazy" />
            <p className="eyebrow eyebrow--dark">Smoothing specialty</p>
            <h2>Less frizz. More flexibility.</h2>
            <p>Brazilian Blowout services can be customized for a smoother finish or to retain curl and wave while improving manageability.</p>
            <ul className="feature-list">
              <li>Helps address seasonal, mechanical, and heat damage</li>
              <li>Seals and protects the cuticle</li>
              <li>Customizable for sleek results or retained movement</li>
              <li>No waiting period before normal daily activities</li>
            </ul>
            <a className="button button--black" href={site.bookingUrl} target="_blank" rel="noreferrer">Book a consultation <span aria-hidden="true">↗</span></a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
