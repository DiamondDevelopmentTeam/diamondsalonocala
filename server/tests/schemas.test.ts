import assert from 'node:assert/strict';
import test from 'node:test';
import { salonFormSchema } from '../src/schemas.js';

const validForm = Object.freeze({
  formSlug: 'new-client-consent',
  formTitle: 'New Client Consent',
  name: 'Salon Guest',
  email: 'guest@example.com',
  phone: '352-555-0123',
  appointmentDate: '2026-08-20',
  serviceProvider: 'Diamond Salon Professional',
  notes: 'No known sensitivities.',
  signatureName: 'Salon Guest',
  consent: true,
});

test('the remaining local endpoint accepts only a complete salon consent form', () => {
  const parsed = salonFormSchema.parse(validForm);
  assert.equal(parsed.email, 'guest@example.com');
  assert.equal(parsed.consent, true);
});

test('the remaining local endpoint rejects missing consent and unknown fields', () => {
  assert.throws(() => salonFormSchema.parse({ ...validForm, consent: false }));
  assert.throws(() => salonFormSchema.parse({ ...validForm, recipient: 'attacker@example.com' }));
});
