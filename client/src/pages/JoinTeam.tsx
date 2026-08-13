import { useCallback, useState, type FormEvent } from 'react';
import { PageHero } from '../components/PageHero';
import { RecaptchaCheckbox } from '../components/RecaptchaCheckbox';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { SubmitButton } from '../components/SubmitButton';
import { site } from '../config/site';
import { hasInquiryApi, postInquiry } from '../lib/api';

export function JoinTeam() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaResetKey, setCaptchaResetKey] = useState(0);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY?.trim() || '';
  const handleCaptchaChange = useCallback((token: string) => setCaptchaToken(token), []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'pending') return;
    if (!hasInquiryApi) {
      setStatus('error');
      setMessage('Online inquiry delivery is unavailable. Please call or email the salon.');
      return;
    }
    if (!captchaToken) {
      setStatus('error');
      setMessage('Please complete the “I’m not a robot” verification before sending.');
      return;
    }
    setStatus('pending');
    setMessage('');

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      site: 'diamond-salon-ocala',
      websiteName: 'Diamond Salon',
      formType: 'inquiry',
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      phone: String(form.get('phone') || ''),
      specialty: String(form.get('specialty') || ''),
      licenseNumber: String(form.get('licenseNumber') || ''),
      yearsExperience: String(form.get('yearsExperience') || ''),
      instagramOrPortfolio: String(form.get('instagramOrPortfolio') || ''),
      message: String(form.get('message') || ''),
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString(),
      recaptchaToken: captchaToken,
      website: String(form.get('website') || ''),
    };

    try {
      await postInquiry(payload);
      formElement.reset();
      setCaptchaToken('');
      setCaptchaResetKey((value) => value + 1);
      setStatus('success');
      setMessage('Your inquiry has been sent. The salon manager will review it and follow up.');
    } catch (error) {
      setCaptchaToken('');
      setCaptchaResetKey((value) => value + 1);
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to send your inquiry.');
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Booth rental opportunity"
        title="Build your business in good company."
        description="A polished, professional salon environment for licensed beauty professionals ready to grow."
        imageBase="salon/ourspace9"
        imageAlt="Emerald lounge chairs on a patterned rug inside Diamond Salon"
      />

      <section className="section join-section">
        <div className="container join-grid">
          <div className="join-copy">
            <ResponsiveImage baseName="salon/ourspace14" alt="Private styling station available to salon professionals" width={1600} height={2400} sizes="(max-width: 820px) 100vw, 45vw" />
            <div>
              <p className="eyebrow eyebrow--dark">Your chair. Your clients. Your momentum.</p>
              <h2>Bring your craft to Diamond.</h2>
              <p>Diamond Salon is seeking professionals with strong technical foundations, a passion for beauty, and a genuine commitment to thoughtful guest experiences.</p>
              <h3>What we’re looking for</h3>
              <ul className="feature-list">
                <li>A current Florida cosmetology or applicable professional license</li>
                <li>A professional portfolio or social presence</li>
                <li>Commitment to sanitation, service, and salon standards</li>
                <li>Respect for other independent professionals and their guests</li>
              </ul>
              <p>Prefer to write directly? Contact <strong>Brooke Bynum, Salon Manager</strong>, at <a href={`mailto:${site.primaryEmail}`}>{site.primaryEmail}</a>.</p>
            </div>
          </div>

          <form className="salon-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span>Start the conversation</span>
              <h2>Tell us about your work.</h2>
              {!hasInquiryApi ? <p>Online inquiry delivery is unavailable. Please call or email the salon.</p> : null}
            </div>
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
            <label>What are you looking for in your next salon?<textarea name="message" rows={6} required minLength={20} maxLength={4000} /></label>
            <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
            <RecaptchaCheckbox siteKey={recaptchaSiteKey} resetKey={captchaResetKey} onTokenChange={handleCaptchaChange} />
            <SubmitButton pending={status === 'pending'} disabled={!hasInquiryApi || !captchaToken} label="Send inquiry" />
            {message ? <p className={`form-status form-status--${status}`} role="status">{message}</p> : null}
          </form>
        </div>
      </section>
    </>
  );
}
