import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { Reveal } from '../components/Reveal';
import { site } from '../config/site';
import { galleryImages } from '../data/gallery';
import { teamMembers } from '../data/team';

const serviceHighlights = [
  { number: '01', title: 'Cut & color', copy: 'Precision cuts, dimensional color, blonding, lived-in tones, vivid work, and polished finishing.' },
  { number: '02', title: 'Texture & length', copy: 'Smoothing treatments, Dominican blowouts, extensions, braiding, wigs, and texture-aware care.' },
  { number: '03', title: 'Skin & lashes', copy: 'Customized facials, corrective skincare, expert waxing, spray tanning, and lash services.' },
  { number: '04', title: 'Nails & details', copy: 'Thoughtful enhancements, detailed artistry, and beauty services tailored by independent professionals.' },
];

const amenities = [
  'Open-concept styling floor',
  'Dedicated shampoo lounge',
  'Private service rooms',
  'Comfortable guest seating',
  'Refreshment bar',
];

const featuredTeam = [teamMembers[0], teamMembers[2], teamMembers[5], teamMembers[7]];
const featuredGallery = [galleryImages[0], galleryImages[2], galleryImages[3], galleryImages[10], galleryImages[11]];

export function Home() {
  const heroMediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;

    const updateParallax = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const shift = Math.min(window.scrollY * 0.045, 42);
        heroMediaRef.current?.style.setProperty('--hero-shift', `${shift}px`);
        frame = 0;
      });
    };

    window.addEventListener('scroll', updateParallax, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateParallax);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__media" ref={heroMediaRef}>
          <ResponsiveImage
            baseName="salon/ourspace5"
            alt="Bright, open interior of Diamond Salon Ocala"
            width={1600}
            height={1200}
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 760px) 100vw, 60vw"
          />
          <span className="home-hero__image-caption">Inside Diamond Salon · Ocala, Florida</span>
        </div>

        <div className="home-hero__copy">
          <div>
            <p className="eyebrow">Independent beauty professionals · Ocala</p>
            <h1 id="home-title">Beauty,<br /><em>shaped</em> around you.</h1>
            <p className="home-hero__lede">A modern salon collective for considered color, confident cuts, skin, nails, and finishing services—delivered by professionals who make the experience their own.</p>
            <div className="button-row">
              <a className="button button--gold" href={site.bookingUrl} target="_blank" rel="noreferrer">Reserve your visit <span aria-hidden="true">↗</span></a>
              <Link className="button button--line-light" to="/team">Find your professional</Link>
            </div>
          </div>
        </div>

        <div className="home-hero__details">
          <div><span>Visit</span><a href={site.mapsUrl} target="_blank" rel="noreferrer">{site.address}</a></div>
          <div><span>Call</span><a href={site.phoneHref}>{site.phoneDisplay}</a></div>
          <div><span>Reception hours</span><p>Mon–Fri 8:30–5 · Sat 9–12</p></div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container editorial-intro">
          <Reveal className="editorial-intro__label">
            <p className="eyebrow eyebrow--dark">The Diamond point of view</p>
            <span aria-hidden="true">◆</span>
          </Reveal>
          <Reveal className="editorial-intro__copy" delay={80}>
            <h2>One polished address.<br />Many ways to feel like yourself.</h2>
            <p>Diamond Salon brings independent specialists together in a bright, professional setting designed to make every appointment feel personal. Come for the craft, stay for the ease, and leave with a look that belongs to you.</p>
            <Link className="arrow-link" to="/our-space">Discover the salon <span aria-hidden="true">→</span></Link>
          </Reveal>
        </div>
      </section>

      <section id="services-preview" className="section service-index">
        <div className="container">
          <Reveal className="section-heading section-heading--spread">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>Expertise, without the one-size-fits-all.</h2>
            </div>
            <p>Services are provided by independent professionals, so exact offerings, prices, and booking details may vary by specialist.</p>
          </Reveal>

          <div className="service-index__grid">
            {serviceHighlights.map((service, index) => (
              <Reveal key={service.title} className="service-index__reveal" delay={index * 60}>
                <article className="service-index__item">
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="centered-action"><Link className="button button--line-light" to="/services">View services &amp; pricing</Link></Reveal>
        </div>
      </section>

      <section className="section space-feature">
        <div className="container space-feature__grid">
          <Reveal className="space-feature__copy">
            <p className="eyebrow eyebrow--dark">The salon</p>
            <h2>Bright, grounded, and made for good work.</h2>
            <p>From the open styling floor to quieter service rooms, the salon balances energy with comfort. Black finishes, rich green accents, warm gold details, and generous natural light give the space a distinctive Ocala character.</p>
            <ul className="amenity-list">
              {amenities.map((amenity, index) => <li key={amenity}><span>{String(index + 1).padStart(2, '0')}</span>{amenity}</li>)}
            </ul>
            <Link className="arrow-link" to="/our-space">Tour the space <span aria-hidden="true">→</span></Link>
          </Reveal>

          <div className="space-collage" aria-label="Views inside Diamond Salon Ocala">
            <Reveal className="space-collage__large">
              <ResponsiveImage baseName="salon/slideshow1" alt="Botanical feature wall and bench in the salon lounge" width={1360} height={907} sizes="(max-width: 760px) 100vw, 48vw" />
            </Reveal>
            <Reveal className="space-collage__small" delay={100}>
              <ResponsiveImage baseName="salon/ourspace9" alt="Emerald lounge chairs at the salon entrance" width={1536} height={2048} sizes="(max-width: 760px) 46vw, 20vw" />
            </Reveal>
            <span className="space-collage__note">A closer look<br />at Diamond</span>
          </div>
        </div>
      </section>

      <section className="section team-preview">
        <div className="container">
          <Reveal className="section-heading section-heading--spread">
            <div>
              <p className="eyebrow eyebrow--dark">Meet the collective</p>
              <h2>{teamMembers.length} professionals.<br />Your right fit is here.</h2>
            </div>
            <p>Browse by specialty, get to know each professional, and follow the booking path that works for them.</p>
          </Reveal>

          <div className="team-preview__grid">
            {featuredTeam.map((member, index) => member ? (
              <Reveal key={member.slug} className="team-preview__reveal" delay={index * 70}>
                <article className="profile-tile">
                  <Link to="/team" aria-label={`View ${member.name}'s profile`}>
                    <ResponsiveImage
                      baseName={`team/${member.slug}`}
                      alt={`Portrait of ${member.name}, ${member.role}`}
                      width={1000}
                      height={1400}
                      position={member.imagePosition}
                      sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 25vw"
                    />
                    <div className="profile-tile__body">
                      <p>{member.role}</p>
                      <h3>{member.name}</h3>
                      <span>View profile <i aria-hidden="true">→</i></span>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ) : null)}
          </div>
          <Reveal className="centered-action"><Link className="button button--black" to="/team">Meet every professional</Link></Reveal>
        </div>
      </section>

      <section className="gallery-teaser" aria-labelledby="gallery-teaser-title">
        <div className="container gallery-teaser__heading">
          <Reveal>
            <p className="eyebrow">From the salon</p>
            <h2 id="gallery-teaser-title">The space. The details. The work.</h2>
          </Reveal>
          <Reveal delay={80}><Link className="arrow-link arrow-link--light" to="/our-space">Open the full gallery <span aria-hidden="true">→</span></Link></Reveal>
        </div>
        <div className="gallery-teaser__grid">
          {featuredGallery.map((image, index) => (
            <Reveal key={image.baseName} className={`gallery-teaser__item gallery-teaser__item--${index + 1}`} delay={index * 50}>
              <ResponsiveImage baseName={image.baseName} alt={image.alt} width={image.width} height={image.height} position={image.position} sizes="(max-width: 700px) 100vw, 35vw" />
              <span>{image.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section community-feature">
        <ResponsiveImage baseName="salon/givingback" alt="A diverse group representing the Ocala community" width={1024} height={417} className="community-feature__media" sizes="100vw" />
        <div className="community-feature__shade" />
        <div className="container community-feature__content">
          <Reveal>
            <p className="eyebrow">Giving back</p>
            <h2>Beauty has a place in community.</h2>
            <p>Owner Veronica Lake and the Diamond Salon team are committed to supporting local families, children, and thoughtful community partnerships across Ocala.</p>
            <Link className="button button--line-light" to="/giving-back">Our community commitment</Link>
          </Reveal>
        </div>
      </section>

      <section className="section visit-section">
        <div className="container visit-section__grid">
          <Reveal className="visit-card">
            <p className="eyebrow eyebrow--dark">Visit Diamond Salon</p>
            <h2>Your next appointment starts here.</h2>
            <address><a href={site.mapsUrl} target="_blank" rel="noreferrer">{site.address}</a></address>
            <div className="visit-card__details">
              <div><span>Call</span><a href={site.phoneHref}>{site.phoneDisplay}</a></div>
              <div><span>Email</span><a href={`mailto:${site.primaryEmail}`}>{site.primaryEmail}</a></div>
            </div>
            <div className="button-row">
              <a className="button button--gold" href={site.bookingUrl} target="_blank" rel="noreferrer">Book now <span aria-hidden="true">↗</span></a>
              <Link className="button button--line-dark" to="/contact">Contact the salon</Link>
            </div>
          </Reveal>

          <Reveal className="visit-map" delay={80}>
            <iframe
              title="Map showing Diamond Salon Ocala at 1020 Southwest 6th Avenue"
              src="https://www.google.com/maps?q=1020%20SW%206th%20Ave%2C%20Ocala%2C%20FL%2034471&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      <aside className="referral-strip" aria-label="Referral offer">
        <div className="container referral-strip__inner">
          <p><span>Share the shine</span> Bring a friend or family member, and you can both enjoy $20 off your next service.</p>
          <Link className="arrow-link arrow-link--light" to="/specials">View offer details <span aria-hidden="true">→</span></Link>
        </div>
      </aside>
    </>
  );
}
