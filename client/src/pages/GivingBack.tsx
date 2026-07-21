import { PageHero } from '../components/PageHero';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { Reveal } from '../components/Reveal';
import { site } from '../config/site';

export function GivingBack() {
  return (
    <>
      <PageHero
        eyebrow="Diamond in the community"
        title="Care looks good on everyone."
        description="A local salon is part of a larger neighborhood—and that relationship matters to us."
        imageBase="salon/givingback"
        imageAlt="A diverse group representing community connection"
      />

      <section className="section giving-section">
        <div className="container giving-intro">
          <Reveal>
            <p className="eyebrow eyebrow--dark">Our commitment</p>
            <h2>Generosity is part of the culture at Diamond Salon.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="large-copy">Owner Veronica Lake and the salon team believe that community care should be active, personal, and consistent. Diamond Salon supports efforts that help local families and children in need across Ocala.</p>
          </Reveal>
        </div>

        <div className="container giving-story">
          <Reveal className="giving-story__media">
            <ResponsiveImage baseName="salon/givingback" alt="Community members standing together" width={1024} height={417} sizes="(max-width: 780px) 100vw, 55vw" />
          </Reveal>
          <Reveal className="giving-story__copy" delay={90}>
            <span>Local. Thoughtful. Together.</span>
            <p>We welcome conversations about community partnerships, donation opportunities, and local initiatives where the salon can contribute meaningfully.</p>
            <div className="contact-callout">
              <strong>Have a partnership idea?</strong>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <a href={`mailto:${site.secondaryEmail}`}>{site.secondaryEmail}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
