import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { Reveal } from '../components/Reveal';
import { site } from '../config/site';

export function Specials() {
  return (
    <>
      <PageHero
        eyebrow="Current salon offer"
        title="Better shared."
        description="Introduce someone you love to Diamond Salon and make the next visit a little sweeter for both of you."
        imageBase="salon/ourspace10"
        imageAlt="Dimensional brunette waves styled at Diamond Salon Ocala"
      />

      <section className="section specials-section">
        <div className="container referral-feature">
          <Reveal className="referral-feature__media">
            <ResponsiveImage baseName="salon/ourspace11" alt="Soft blonde waves styled at Diamond Salon Ocala" width={1000} height={1275} sizes="(max-width: 760px) 100vw, 48vw" />
            <span>Friend &amp; family referral</span>
          </Reveal>
          <Reveal className="referral-feature__copy" delay={80}>
            <p className="eyebrow eyebrow--dark">Share the shine</p>
            <h2>You both receive $20 off your next service.</h2>
            <p>Bring a friend or family member to Diamond Salon and ask about the referral offer when booking. Confirm eligibility, participating professionals, and service details before your appointment.</p>
            <div className="button-row">
              <a className="button button--gold" href={site.bookingUrl} target="_blank" rel="noreferrer">Book an appointment <span aria-hidden="true">↗</span></a>
              <Link className="button button--line-dark" to="/contact">Ask the salon</Link>
            </div>
          </Reveal>
        </div>
        <div className="container offer-note">
          <span>Good to know</span>
          <p>Offers can change and may vary by independent professional. Please confirm current terms and availability before service.</p>
        </div>
      </section>
    </>
  );
}
