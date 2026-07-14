import { useState, type FormEvent } from 'react';
import { PageHero } from '../components/PageHero';
import { SubmitButton } from '../components/SubmitButton';
import { site } from '../config/site';
import { postJson } from '../lib/api';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('pending');
    setMessage('');

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    try {
      await postJson('/api/contact', {
        name: String(form.get('name') || ''),
        email: String(form.get('email') || ''),
        phone: String(form.get('phone') || ''),
        subject: String(form.get('subject') || ''),
        message: String(form.get('message') || ''),
      });
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
      <PageHero title="Contact Us" description="Questions about appointments, stylists, services, or the salon? We are here to help." imageBase="contactimage" />
      <section className="section section--cream">
        <div className="container contact-grid">
          <div className="contact-details">
            <p className="eyebrow eyebrow--dark">Reach the salon</p>
            <h2>Let’s get you to the right person.</h2>
            <p>Please include your name, phone number, email address, and enough detail for the team to respond effectively.</p>

            <div className="contact-detail-list">
              <div><span>Call</span><a href={site.phoneHref}>{site.phoneDisplay}</a></div>
              <div><span>Email</span><a href={`mailto:${site.primaryEmail}`}>{site.primaryEmail}</a></div>
              <div><span>Address</span><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`} target="_blank" rel="noreferrer">{site.address}</a></div>
            </div>

            <div className="hours-card">
              <h3>Salon Hours</h3>
              {site.hours.map(([day, hours]) => <p key={day}><span>{day}</span><strong>{hours}</strong></p>)}
            </div>
          </div>

          <form className="salon-form contact-form" onSubmit={handleSubmit}>
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
                  <option>Referral</option>
                  <option>Community partnership</option>
                  <option>Website feedback</option>
                </select>
              </label>
            </div>
            <label>
              Message
              <textarea name="message" rows={8} required minLength={10} maxLength={4000} />
            </label>
            <SubmitButton pending={status === 'pending'} label="Send Message" />
            {message ? <p className={`form-status form-status--${status}`} role="status">{message}</p> : null}
          </form>
        </div>
      </section>

      <section className="map-section" aria-label="Salon location map">
        <iframe
          title="Diamond Salon Ocala location"
          src="https://www.google.com/maps?q=1020%20SW%206th%20Ave%2C%20Ocala%2C%20FL%2034471&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
