import { PageHero } from '../components/PageHero';
import { site } from '../config/site';

export function PrivacyPolicy() {
  return (
    <>
      <PageHero title="Privacy Policy" description="How information submitted through this website is handled." imageBase="ourspace1" />
      <section className="section section--cream legal-page">
        <div className="container narrow-container legal-copy">
          <p><strong>Last updated:</strong> July 2026</p>
          <h2>Information we collect</h2>
          <p>When you submit a contact, recruitment, or client form, the website may collect your name, email address, phone number, appointment details, service preferences, typed signature, and the information you choose to provide.</p>
          <h2>How information is used</h2>
          <p>Information is used to respond to questions, coordinate appointments, review booth-rental inquiries, process requested salon forms, protect the website, and improve salon service. Information is not sold.</p>
          <h2>Health and sensitive information</h2>
          <p>Do not submit financial account numbers, government identification numbers, or highly sensitive medical records through the website. Salon forms should contain only information reasonably necessary for the requested service.</p>
          <h2>Service providers</h2>
          <p>The website may rely on hosting, email delivery, analytics, security, and booking providers. Those providers may process limited information necessary to perform their services under their own privacy terms.</p>
          <h2>Cookies and technical data</h2>
          <p>The website may use essential browser storage, server logs, security controls, and privacy-conscious analytics. Technical data can include IP address, browser type, device information, referring page, and time of access.</p>
          <h2>Retention and security</h2>
          <p>Information is retained only as long as reasonably necessary for salon operations, legal obligations, dispute resolution, and security. Reasonable safeguards are used, but no internet transmission or electronic storage system can be guaranteed completely secure.</p>
          <h2>Your choices</h2>
          <p>You may request access, correction, or deletion of information submitted through the website, subject to legal and operational retention requirements.</p>
          <h2>Children</h2>
          <p>This website is not directed to children under 13, and the salon does not knowingly collect personal information from children through the website without appropriate adult involvement.</p>
          <h2>Contact</h2>
          <p>Questions about this policy may be sent to <a href={`mailto:${site.secondaryEmail}`}>{site.secondaryEmail}</a> or discussed by calling <a href={site.phoneHref}>{site.phoneDisplay}</a>.</p>
          <p className="legal-template-note">This policy is a practical website template and should be reviewed by the salon’s legal or compliance advisor before production launch.</p>
        </div>
      </section>
    </>
  );
}
