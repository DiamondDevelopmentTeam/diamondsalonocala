import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { SmartImage } from '../components/SmartImage';
import { site } from '../config/site';

const specials = [
  {
    title: 'New Client Welcome',
    copy: 'Ask the salon about current new-client and seasonal service promotions when booking.',
    image: 'ourspace4',
  },
  {
    title: 'Refer a Friend',
    copy: 'Share Diamond Salon Ocala with a friend or family member and ask about available referral rewards.',
    image: 'ourspace11',
  },
  {
    title: 'Treatment Packages',
    copy: 'Selected professionals may offer packages for facials, waxing, extensions, smoothing, or maintenance services.',
    image: 'ourspace12',
  },
];

export function Specials() {
  return (
    <>
      <PageHero title="Specials" description="A little extra sparkle for your next appointment." imageBase="ourspace10" />
      <section className="section section--cream">
        <div className="container specials-grid">
          {specials.map((special, index) => (
            <Reveal className="special-card" key={special.title} delay={index * 90}>
              <SmartImage baseName={special.image} alt={special.title} />
              <div>
                <span>0{index + 1}</span>
                <h2>{special.title}</h2>
                <p>{special.copy}</p>
                <a className="text-link" href={site.bookingUrl} target="_blank" rel="noreferrer">Check availability <span>→</span></a>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="container special-note">
          <p>Promotions can change and may be offered by individual professionals. Confirm pricing and eligibility before your appointment.</p>
        </div>
      </section>
    </>
  );
}
