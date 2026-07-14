import { useState, type FormEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { SubmitButton } from '../components/SubmitButton';
import { getSalonForm } from '../data/forms';
import { postJson } from '../lib/api';

export function FormDetail() {
  const { slug = '' } = useParams();
  const formDefinition = getSalonForm(slug);
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  if (!formDefinition) {
    return (
      <section className="section section--cream legal-page">
        <div className="container narrow-container">
          <h1>Form not found</h1>
          <p>The form link may have changed.</p>
          <Link className="button button--black" to="/forms">Return to Forms</Link>
        </div>
      </section>
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('pending');
    setMessage('');

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    try {
      await postJson('/api/forms', {
        formSlug: formDefinition.slug,
        formTitle: formDefinition.title,
        name: String(form.get('name') || ''),
        email: String(form.get('email') || ''),
        phone: String(form.get('phone') || ''),
        appointmentDate: String(form.get('appointmentDate') || ''),
        serviceProvider: String(form.get('serviceProvider') || ''),
        notes: String(form.get('notes') || ''),
        signatureName: String(form.get('signatureName') || ''),
        consent: form.get('consent') === 'on',
      });
      formElement.reset();
      setStatus('success');
      setMessage('Your form was submitted successfully. The salon will contact you if anything else is needed.');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to submit the form.');
    }
  }

  return (
    <>
      <PageHero title={formDefinition.title} description={formDefinition.description} imageBase="contactimage" />
      <section className="section section--cream">
        <div className="container narrow-container">
          <form className="salon-form" onSubmit={handleSubmit}>
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
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
              <label>
                Appointment date
                <input name="appointmentDate" type="date" />
              </label>
            </div>
            <label>
              Stylist or service provider
              <input name="serviceProvider" placeholder="Optional" />
            </label>
            <label>
              Relevant history, allergies, medications, sensitivities, goals, or notes
              <textarea name="notes" rows={7} maxLength={4000} />
            </label>
            <label>
              Typed signature
              <input name="signatureName" required minLength={2} placeholder="Type your full legal name" />
            </label>
            <label className="checkbox-field">
              <input name="consent" type="checkbox" required />
              <span>{formDefinition.consentText}</span>
            </label>
            <p className="form-disclaimer">Submitting this form sends the information to the salon. Do not include highly sensitive medical or financial information.</p>
            <SubmitButton pending={status === 'pending'} label="Submit Form" />
            {message ? <p className={`form-status form-status--${status}`} role="status">{message}</p> : null}
          </form>
        </div>
      </section>
    </>
  );
}
