import { PageHero } from '../components/PageHero';

const policies = [
  ['Respectful salon environment', 'Please be courteous to salon professionals and other guests. Harassment, discrimination, threatening behavior, theft, or conduct that creates an unsafe environment may result in service being refused.'],
  ['Guests', 'Please limit appointment guests to one person and make sure they do not disrupt the salon environment.'],
  ['Pets and service animals', 'Pets cannot be accommodated in the salon. Trained service animals are welcome as required by law.'],
  ['Children', 'Please arrange childcare before your appointment whenever possible. Children must remain supervised, calm, and away from salon tools, chemicals, equipment, and walkways.'],
  ['Mobile devices', 'Keep devices on silent or vibrate. Please avoid speakerphone and video calls inside the salon.'],
  ['Cancellations and no-shows', 'Please provide at least 48 hours’ notice when canceling or rescheduling. Late changes may be charged 50% of scheduled services, and no-call/no-show appointments may be charged in full. Confirm the policy with your individual professional.'],
  ['Late arrivals', 'Call as soon as you know you may be late. Your service may need to be shortened or rescheduled to protect the next guest’s appointment.'],
  ['Service adjustments', 'Contact your service provider within 48 hours if you have a concern. Results cannot be guaranteed after the service has been altered at home, by another professional, or with products contrary to aftercare recommendations.'],
  ['Health and comfort', 'Tell your professional about pregnancy, nursing, allergies, medications, medical conditions, physical limitations, open wounds, or contagious illness before service. Reschedule when you are unwell.'],
];

export function SalonEtiquette() {
  return (
    <>
      <PageHero title="Salon etiquette." description="A few shared expectations help every guest enjoy a calm, professional visit." imageBase="salon/ourspace8" imageAlt="Quiet waiting area inside Diamond Salon Ocala" />
      <section className="section section--cream legal-page">
        <div className="container narrow-container">
          <p className="legal-intro">Diamond Salon Ocala strives to provide a relaxing, professional, and comfortable experience. Individual professionals may maintain additional booking and service policies.</p>
          <div className="policy-list">
            {policies.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h2>{title}</h2><p>{copy}</p></div>
              </article>
            ))}
          </div>
          <p>Thank you for helping us protect the comfort, safety, and time of every guest and professional.</p>
        </div>
      </section>
    </>
  );
}
