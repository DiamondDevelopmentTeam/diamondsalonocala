import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SmartImage } from '../components/SmartImage';
import { site } from '../config/site';

const slides = ['slideshow1', 'slideshow2', 'slideshow3'];

const etiquetteSections = [
  {
    title: 'Guidelines for Behavior in the Salon',
    paragraphs: [
      'We ask that all clients behave in a respectful and courteous manner toward our staff, stylists, and other clients. We do not tolerate any form of harassment, discrimination, or inappropriate behavior. We also ask that you keep your conversations at a reasonable volume so as not to disturb other clients.',
      'We reserve the right to refuse service at our discretion. Clients who exhibit loud or aggressive behavior, violate our code of conduct, take property, or otherwise pose a danger to our staff and customers will be denied services and asked to leave the premises immediately.',
    ],
  },
  {
    title: 'Bringing Guests to Appointments',
    paragraphs: [
      'We understand that you may want to bring a friend or family member to your appointment. However, we ask that you limit the number of guests you bring to one and that they do not disrupt the salon environment.',
      'We love pets, but unfortunately we cannot have them in the salon. Please leave your furry ones at home, except for service animals, so we can ensure a safe and sanitary environment for everyone.',
    ],
  },
  {
    title: 'Children in the Salon',
    paragraphs: [
      'Diamond Salon is a family-friendly hair salon and we love children. However, to ensure the safety and comfort of our clients, we kindly ask that you make childcare arrangements prior to your visit. Children who are disruptive may be asked to leave the salon area. Please note that we cannot be responsible for supervising children during your appointment. Children must not be left unattended in any area of the salon.',
      'If you need to bring your child with you, please bring a quiet activity for them to work on during your visit and be courteous of other salon guests. Children should not climb, stand, or play on salon equipment, and they should walk rather than run through the salon. Parents will be charged the full price of repairing or replacing damaged equipment resulting from misuse by their children. If your child is disturbing other clients or stylists or is not acting appropriately, you may be asked to reschedule.',
    ],
  },
  {
    title: 'Mobile Devices',
    paragraphs: [
      'We ask that you keep your mobile device on silent or vibrate while in the salon and limit its use to avoid disrupting other clients. Please do not use speakerphone or video chat in the salon. If you must receive or make a phone call during your visit, please excuse yourself to the outside.',
    ],
  },
  {
    title: 'Rescheduling and Cancellations',
    paragraphs: [
      'We politely request 48 hours’ notice if you need to reschedule or cancel your appointment. Cancellations, changes, or rescheduling with less than 48 hours’ notice may be subject to a charge of 50% of the scheduled services. A no-show or no-call appointment will be charged 100% of the scheduled service prices. The credit card on file will be charged for the full amount. If the transaction is declined, the missed service must be paid before booking a new service.',
    ],
  },
  {
    title: 'Appointment Times',
    paragraphs: [
      'If you know ahead of time that you will be late, please call as soon as possible and we will make every effort to accommodate you. If you arrive late, your original appointment time is not guaranteed and you may be asked to reschedule.',
    ],
  },
  {
    title: 'Outstanding Service',
    paragraphs: [
      'If you are unhappy for any reason, please inform us within 48 hours. We are committed to working with you to find a solution. Please note that we cannot guarantee our services if they have been altered at home, by another stylist, or if non-recommended products have been used.',
    ],
  },
  {
    title: 'Health and Well-Being',
    paragraphs: [
      'When you book your appointment, please let us know if you are pregnant or nursing or have any allergies, medical conditions, or physical limitations. We ask that you cancel or avoid booking an appointment if you have open wounds or a communicable illness such as a cold or flu. This is for your comfort and the protection of our stylists and other clients.',
    ],
  },
];

export function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [referralOpen, setReferralOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const hasSeenReferral = window.sessionStorage.getItem('diamond-referral-seen');
    if (hasSeenReferral) return;

    const timer = window.setTimeout(() => setReferralOpen(true), 850);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!referralOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeReferral();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [referralOpen]);

  const closeReferral = () => {
    setReferralOpen(false);
    window.sessionStorage.setItem('diamond-referral-seen', 'true');
  };

  return (
    <>
      <section className="home-hero home-hero--welcome" aria-label="Diamond Salon Ocala welcome">
        {slides.map((slide, index) => (
          <SmartImage
            key={slide}
            baseName={slide}
            alt="Inside Diamond Salon Ocala"
            className={`home-hero__slide ${index === activeSlide ? 'is-active' : ''}`}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}

        <div className="home-hero__shade" />

        <div className="container home-hero__content">
          <p className="eyebrow">Diamond Salon Ocala</p>
          <h1>Welcome</h1>
          <div className="button-row">
            <a className="button button--gold" href={site.bookingUrl} target="_blank" rel="noreferrer">
              Book Now
            </a>
            <a className="button button--glass" href="#now-hiring">
              Join Our Team
            </a>
          </div>
        </div>

        <div className="hero-dots" aria-label="Choose a salon image">
          {slides.map((slide, index) => (
            <button
              key={slide}
              type="button"
              className={index === activeSlide ? 'is-active' : ''}
              aria-label={`Show salon image ${index + 1}`}
              aria-pressed={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="quick-links" aria-label="Homepage links">
        <div className="container quick-links__grid quick-links__grid--five">
          <Link to="/contact"><strong>Events</strong><span aria-hidden="true">↗</span></Link>
          <Link to="/specials"><strong>20% Off Specials</strong><span aria-hidden="true">↗</span></Link>
          <button type="button" onClick={() => setReferralOpen(true)}><strong>Referrals<br />Friend and Family</strong><span aria-hidden="true">+</span></button>
          <a href="#salon-etiquette"><strong>Salon Etiquette</strong><span aria-hidden="true">↓</span></a>
          <a href="#now-hiring"><strong>Join Our Team</strong><span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section id="now-hiring" className="section section--cream hiring-section">
        <div className="container">
          <Reveal className="section-heading hiring-section__heading">
            <p className="eyebrow eyebrow--dark">Now Hiring</p>
            <h2>Booth Rental Opportunity</h2>
          </Reveal>

          <div className="hiring-card">
            <Reveal className="hiring-card__media">
              <SmartImage baseName="ourspace14" alt="Booth rental station at Diamond Salon Ocala" />
              <div className="hiring-card__requirement">
                <span>Requirement</span>
                <strong>Current Florida Cosmetology License</strong>
              </div>
            </Reveal>

            <Reveal className="hiring-card__content" delay={100}>
              <p className="hiring-card__lead">
                We’re seeking professionals with a strong foundation in hair care and styling techniques, a passion for beauty, and a dedication to providing exceptional guest experiences.
              </p>

              <div className="hiring-details">
                <article>
                  <span>Salon Hours</span>
                  <p>Monday – Friday: 8:30am–5:00pm<br />Saturday: 9:00am–12:00pm<br />Sunday: Closed</p>
                </article>
                <article>
                  <span>Salon Location</span>
                  <p>{site.address}</p>
                </article>
              </div>

              <p>
                If you’re ready to grow your business in a welcoming and professional environment, we’d love to hear from you.
              </p>
              <p>
                Please contact <strong>Brooke Bynum, Salon Manager</strong>, at{' '}
                <a href={`mailto:${site.primaryEmail}`}>{site.primaryEmail}</a> for more details.
              </p>

              <a className="button button--gold" href={`mailto:${site.primaryEmail}?subject=Booth%20Rental%20Opportunity`}>
                Contact Brooke
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="salon-etiquette" className="section salon-etiquette-home">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow eyebrow--dark">Before Your Visit</p>
            <h2>Diamond Salon Etiquette</h2>
            <p className="legal-intro">
              J Diamond Salon of Florida, Inc. (“Diamond Salon”) strives to provide a relaxing, professional, and comfortable salon experience for every client. Please review the following guidelines so that you know what to expect during your visit.
            </p>
          </Reveal>

          <div className="etiquette-grid">
            {etiquetteSections.map((section, index) => (
              <Reveal key={section.title} className="etiquette-card" delay={(index % 2) * 80}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{section.title}</h3>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </Reveal>
            ))}
          </div>

          <Reveal className="etiquette-thanks">
            <p>Thank you for your continued business and understanding.</p>
            <h3>We appreciate your loyalty and patronage.</h3>
            <div className="button-row">
              <Link className="button button--black" to="/terms">Terms &amp; Conditions</Link>
              <a className="button button--gold" href={site.bookingUrl} target="_blank" rel="noreferrer">Book Now</a>
            </div>
          </Reveal>
        </div>
      </section>

      {referralOpen && (
        <div className="referral-modal" role="presentation" onMouseDown={closeReferral}>
          <section
            className="referral-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="referral-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="referral-modal__close" type="button" aria-label="Close referral offer" onClick={closeReferral}>×</button>
            <div className="referral-modal__frame">
              <p id="referral-title">
                Bring in your<br />friends and family,<br />and you both get to<br />enjoy $20 off your<br />next service.
              </p>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
