export type SalonFormDefinition = {
  slug: string;
  title: string;
  description: string;
  consentText: string;
};

export const salonForms: SalonFormDefinition[] = [
  {
    slug: 'appointment-treatment-consent',
    title: 'Appointment Treatment Consent Form',
    description: 'General treatment history, goals, sensitivities, and informed consent for salon services.',
    consentText: 'I confirm that the information I provided is accurate and consent to the selected salon treatment.',
  },
  {
    slug: 'appointment-reminder-cancellation-policy',
    title: 'Appointment Reminder & Cancellation Policy',
    description: 'Acknowledgment of appointment reminders, cancellation timing, no-show charges, and rescheduling expectations.',
    consentText: 'I have read and agree to the appointment reminder, cancellation, and no-show policy.',
  },
  {
    slug: 'treatment-consent-release',
    title: 'Treatment Consent & Release Form',
    description: 'Consent and release for chemical, color, smoothing, extension, or corrective services.',
    consentText: 'I understand the benefits, limitations, and possible risks of the requested treatment and authorize the service.',
  },
  {
    slug: 'facial-intake',
    title: 'Facial Intake Form',
    description: 'Skin goals, sensitivities, products, medications, and treatment history for a customized facial.',
    consentText: 'I certify that the information in this intake form is complete and accurate.',
  },
  {
    slug: 'facial-consent',
    title: 'Facial Consent Form',
    description: 'Informed consent for facial treatments, exfoliation, extractions, and recommended aftercare.',
    consentText: 'I consent to the facial treatment and understand the recommended preparation and aftercare.',
  },
  {
    slug: 'skin-analysis-and-history',
    title: 'Skin Analysis & History Form',
    description: 'Skin concerns, treatment history, routines, sensitivities, and goals for a more informed consultation.',
    consentText: 'I confirm that the skin history and product information I provided is complete and accurate.',
  },
];

export const getSalonForm = (slug: string) => salonForms.find((form) => form.slug === slug);
