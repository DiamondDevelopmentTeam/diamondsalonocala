import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { SmartImage } from '../components/SmartImage';
import { site } from '../config/site';

export function GivingBack() {
  return (
    <>
      <PageHero title="Giving Back" description="Beauty can be generous, local, and deeply human." imageBase="givingback" />
      <section className="section section--cream">
        <div className="container split-feature">
          <Reveal className="split-feature__media giving-photo">
            <SmartImage baseName="givingback" alt="Diamond Salon Ocala community support" />
          </Reveal>
          <Reveal className="split-feature__copy" delay={100}>
            <p className="eyebrow eyebrow--dark">Our commitment</p>
            <h2>Supporting our community is part of who we are.</h2>
            <p>
              Diamond Salon Ocala is committed to supporting local families and children in need. Owner Veronica Lake and the salon team believe community care should be active, personal, and consistent.
            </p>
            <p>
              The salon welcomes partnerships, donation opportunities, and local initiatives that create meaningful support for Ocala neighbors.
            </p>
            <div className="contact-callout">
              <strong>Have a community partnership idea?</strong>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <a href={`mailto:${site.secondaryEmail}`}>{site.secondaryEmail}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
