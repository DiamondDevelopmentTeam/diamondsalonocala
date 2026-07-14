import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { salonForms } from '../data/forms';

export function Forms() {
  return (
    <>
      <PageHero title="Client Forms" description="Complete your paperwork before your appointment and spend more time enjoying the salon." imageBase="contactimage" />
      <section className="section section--cream">
        <div className="container forms-grid">
          {salonForms.map((form, index) => (
            <Reveal key={form.slug} className="form-card" delay={index * 70}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{form.title}</h2>
              <p>{form.description}</p>
              <Link className="text-link" to={`/forms/${form.slug}`}>Open digital form <span>→</span></Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
