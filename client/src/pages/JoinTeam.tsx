import { useState, type FormEvent } from 'react';
import { PageHero } from '../components/PageHero';
import { SmartImage } from '../components/SmartImage';
import { SubmitButton } from '../components/SubmitButton';
import { site } from '../config/site';
import { postJson } from '../lib/api';

export function JoinTeam() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('pending');
    setMessage('');

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    try {
      await postJson('/api/join-team', {
        name: String(form.get('name') || ''),
        email: String(form.get('email') || ''),
        phone: String(form.get('phone') || ''),
        specialty: String(form.get('specialty') || ''),
        licenseNumber: String(form.get('licenseNumber') || ''),
        yearsExperience: String(form.get('yearsExperience') || ''),
        instagramOrPortfolio: String(form.get('instagramOrPortfolio') || ''),
        message: String(form.get('message') || ''),
      });
      formElement.reset();
      setStatus('success');
      setMessage('Your inquiry has been sent. The salon manager will review it and follow up.');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to send your inquiry.');
    }
  }

  return (
    <>
      <PageHero title="Join Our Team" description="Build your independent beauty business in a polished, supportive salon environment." imageBase="ourspace9" />
      <section className="section section--cream">
        <div className="container join-grid">
          <div className="join-copy">
            <SmartImage baseName="ourspace2" alt="Private beauty suite at Diamond Salon Ocala" />
            <div>
              <p className="eyebrow eyebrow--dark">Booth rental opportunity</p>
              <h2>Bring your craft. Grow your clientele.</h2>
              <p>Diamond Salon Ocala welcomes licensed professionals with a strong foundation in beauty services, a guest-first mindset, and the drive to grow an independent business.</p>
              <h3>Core requirement</h3>
              <ul className="feature-list">
                <li>Current Florida cosmetology or applicable professional license</li>
                <li>Professional portfolio or social presence</li>
                <li>Commitment to sanitation, service, and salon standards</li>
                <li>Respectful collaboration with other independent professionals</li>
              </ul>
              <p>Prefer email? Contact Brooke Bynum, Salon Manager, at <a href={`mailto:${site.primaryEmail}`}>{site.primaryEmail}</a>.</p>
            </div>
          </div>

          <form className="salon-form" onSubmit={handleSubmit}>
            <h2>Tell us about your work</h2>
            <div className="form-grid-two">
              <label>Full name<input name="name" required minLength={2} autoComplete="name" /></label>
              <label>Email<input name="email" type="email" required autoComplete="email" /></label>
              <label>Phone<input name="phone" type="tel" required autoComplete="tel" /></label>
              <label>
                Specialty
                <select name="specialty" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Hair stylist</option>
                  <option>Barber</option>
                  <option>Esthetician</option>
                  <option>Waxing specialist</option>
                  <option>Nail technician</option>
                  <option>Lash artist</option>
                  <option>Spray tan artist</option>
                  <option>Other</option>
                </select>
              </label>
              <label>Florida license number<input name="licenseNumber" required /></label>
              <label>Years of experience<input name="yearsExperience" inputMode="numeric" /></label>
            </div>
            <label>Instagram or portfolio URL<input name="instagramOrPortfolio" type="url" placeholder="https://" /></label>
            <label>What are you looking for in your next salon?<textarea name="message" rows={7} required minLength={20} maxLength={4000} /></label>
            <SubmitButton pending={status === 'pending'} label="Send Booth Rental Inquiry" />
            {message ? <p className={`form-status form-status--${status}`} role="status">{message}</p> : null}
          </form>
        </div>
      </section>
    </>
  );
}
