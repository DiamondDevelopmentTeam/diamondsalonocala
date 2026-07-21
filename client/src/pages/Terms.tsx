import { PageHero } from '../components/PageHero';
import { site } from '../config/site';

export function Terms() {
  return (
    <>
      <PageHero title="Terms & conditions." description="Website use, service information, and booking expectations." imageBase="salon/ourspace5" imageAlt="Open interior of Diamond Salon Ocala" />
      <section className="section section--cream legal-page">
        <div className="container narrow-container legal-copy">
          <p><strong>Last updated:</strong> July 2026</p>
          <h2>Website information</h2>
          <p>This website provides general salon information. Services, pricing, hours, professionals, promotions, and availability may change without notice. Confirm final details with the individual professional before service.</p>
          <h2>Independent professionals</h2>
          <p>Some professionals operating at Diamond Salon Ocala may be independent businesses with their own booking platforms, pricing, payment terms, cancellation policies, and service agreements.</p>
          <h2>Appointments and cancellations</h2>
          <p>Booking an appointment may require agreement to the selected professional’s terms. Cancellation, late-arrival, deposit, and no-show fees may apply.</p>
          <h2>Results and suitability</h2>
          <p>Beauty services can produce different results based on hair, skin, nail condition, prior treatments, products, medications, aftercare, and other individual factors. Disclose relevant history before service and follow professional aftercare guidance.</p>
          <h2>External links</h2>
          <p>Links to booking, shopping, social media, maps, or other third-party services are provided for convenience. Diamond Salon Ocala does not control those services or their availability, security, content, or privacy practices.</p>
          <h2>Acceptable use</h2>
          <p>Do not misuse the website, attempt unauthorized access, submit unlawful or abusive content, interfere with operation, or impersonate another person.</p>
          <h2>Contact</h2>
          <p>Questions may be sent to <a href={`mailto:${site.secondaryEmail}`}>{site.secondaryEmail}</a>.</p>
        </div>
      </section>
    </>
  );
}
