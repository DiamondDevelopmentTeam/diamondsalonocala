import { useState, type FormEvent } from 'react';
import { PageHero } from '../components/PageHero';
import { SubmitButton } from '../components/SubmitButton';
import { site } from '../config/site';
import { hasSubmissionApi, openEmailDraft, postJson } from '../lib/api';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('pending');
    setMessage('');

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      phone: String(form.get('phone') || ''),
      subject: String(form.get('subject') || ''),
      message: String(form.get('message') || ''),
    };

    if (!hasSubmissionApi) {
      openEmailDraft(site.primaryEmail, `Diamond Salon website: ${payload.subject}`, [
        ['Name', payload.name],
        ['Email', payload.email],
        ['Phone', payload.phone],
        ['Message', payload.message],
      ]);
      setStatus('success');
      setMessage('Your email app has been opened with this message ready to review and send.');
      return;
    }

    try {
      await postJson('/api/contact', payload);
      formElement.reset();
      setStatus('success');
      setMessage('Thank you. Your message has been sent to the salon.');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to send your message.');
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact & location"
        title="Let’s get you to the right person."
        description="For appointment questions, professional matching, salon information, or general inquiries, start here."
        imageBase="salon/contactimage"
        imageAlt="Emerald lounge chairs at Diamond Salon Ocala"
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-details">
            <p className="eyebrow eyebrow--dark">Reach the salon</p>
            <h2>Call, write, or stop by.</h2>
            <p>Include enough detail for the salon team to direct your question to the right professional. For changes to an existing appointment, contact your service provider directly whenever possible.</p>

            <div className="contact-detail-list">
              <div><span>Call</span><a href={site.phoneHref}>{site.phoneDisplay}</a></div>
              <div><span>Email</span><a href={`mailto:${site.primaryEmail}`}>{site.primaryEmail}</a></div>
              <div><span>Visit</span><a href={site.mapsUrl} target="_blank" rel="noreferrer">{site.address}</a></div>
            </div>

            <div className="hours-card">
              <p>Reception hours</p>
              {site.hours.map(([day, hours]) => <div key={day}><span>{day}</span><strong>{hours}</strong></div>)}
            </div>
          </div>

          <form className="salon-form contact-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span>Send a note</span>
              <h2>How can we help?</h2>
              {!hasSubmissionApi ? <p>This static site will prepare your message in your email app so you can review it before sending.</p> : null}
            </div>
            <div className="form-grid-two">
              <label>
                Full name
                <input name="name" autoComplete="name" required minLength={2} />
              </label>
              <label>
                Email address
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Phone number
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label>
                Subject
                <select name="subject" defaultValue="General question">
                  <option>General question</option>
                  <option>Appointment help</option>
                  <option>Service question</option>
                  <option>Referral offer</option>
                  <option>Community partnership</option>
                  <option>Website feedback</option>
                </select>
              </label>
            </div>
            <label>
              Message
              <textarea name="message" rows={7} required minLength={10} maxLength={4000} />
            </label>
            <SubmitButton pending={status === 'pending'} label={hasSubmissionApi ? 'Send message' : 'Continue in email'} />
            {message ? <p className={`form-status form-status--${status}`} role="status">{message}</p> : null}
          </form>
        </div>
      </section>

      <section className="map-section" aria-label="Salon location map">
        <iframe
          title="Map showing Diamond Salon Ocala at 1020 Southwest 6th Avenue"
          src="https://www.google.com/maps?q=1020%20SW%206th%20Ave%2C%20Ocala%2C%20FL%2034471&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a href={site.mapsUrl} target="_blank" rel="noreferrer">Open directions in Google Maps <span aria-hidden="true">↗</span></a>
      </section>
    </>
  );
}
