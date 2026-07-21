import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { salonForms } from '../data/forms';

export function Forms() {
  return (
    <>
      <PageHero
        eyebrow="Prepare for your visit"
        title="Client forms, simplified."
        description="Review the right form before your appointment so your professional can begin with better context."
        imageBase="salon/ourspace8"
        imageAlt="Quiet waiting area inside Diamond Salon Ocala"
      />
      <section className="section section--cream">
        <div className="container forms-grid">
          {salonForms.map((form, index) => (
            <Reveal key={form.slug} className="form-card" delay={index * 70}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{form.title}</h2>
              <p>{form.description}</p>
              <Link className="arrow-link" to={`/forms/${form.slug}`}>Open digital form <span aria-hidden="true">→</span></Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
