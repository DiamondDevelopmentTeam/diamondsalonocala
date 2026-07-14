import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { SmartImage } from '../components/SmartImage';
import { site } from '../config/site';
import { serviceGroups } from '../data/services';

export function Services() {
  return (
    <>
      <PageHero title="Services" description="A flexible menu offered by independent professionals. Pricing varies by stylist, timing, and product needs." imageBase="serviceImage" />
      <section className="section section--cream">
        <div className="container services-layout">
          <div className="services-list">
            {serviceGroups.map((group, index) => (
              <Reveal key={group.title} className="service-group" delay={(index % 3) * 60}>
                <div className="service-group__heading">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h2>{group.title}</h2>
                    {group.note ? <p>{group.note}</p> : null}
                  </div>
                </div>
                <div className="price-list">
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <span>{item.name}</span>
                      <i aria-hidden="true" />
                      <strong>{item.price}</strong>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <aside className="services-aside">
            <SmartImage baseName="ourspace15" alt="Shampoo stations at Diamond Salon Ocala" />
            <div>
              <p className="eyebrow eyebrow--dark">Before you book</p>
              <h2>Every service starts with the right match.</h2>
              <p>Some professionals maintain separate booking links and specialties. Explore the team page or contact the salon for help choosing.</p>
              <a className="button button--gold" href={site.bookingUrl} target="_blank" rel="noreferrer">Book Now</a>
              <Link className="text-link" to="/team">Browse professionals <span>→</span></Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section brazilian-section">
        <div className="container split-feature split-feature--reverse">
          <Reveal className="split-feature__media">
            <SmartImage baseName="ourspace3" alt="Brazilian Blowout result" />
          </Reveal>
          <Reveal className="split-feature__copy">
            <SmartImage baseName="brazilianBlowOutFooter" alt="Brazilian Blowout" className="service-brand-logo" />
            <h2>Smoother, healthier-looking hair without losing your personality.</h2>
            <ul className="feature-list">
              <li>Helps repair seasonal, mechanical, and heat damage</li>
              <li>Seals and protects the cuticle</li>
              <li>Customizable for sleek results or retained curl and wave</li>
              <li>No waiting period before normal daily activities</li>
            </ul>
            <a className="button button--black" href={site.bookingUrl} target="_blank" rel="noreferrer">Book a Consultation</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
