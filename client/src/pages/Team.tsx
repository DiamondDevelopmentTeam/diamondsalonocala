import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { SmartImage } from '../components/SmartImage';
import { teamMembers } from '../data/team';

function initials(name: string) {
  return name.split(' ').map((part) => part[0]).slice(0, 2).join('');
}

export function Team() {
  return (
    <>
      <PageHero title="Meet the Team" description="Independent beauty professionals, one elevated salon experience." imageBase="contactimage" />
      <section className="section section--cream">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} className="team-card" delay={(index % 4) * 60}>
                <div className="team-card__image-wrap">
                  <SmartImage
                    baseName={member.imageBase}
                    alt={member.name}
                    className="team-card__image"
                    fallback={<div className="team-card__initials">{initials(member.name)}</div>}
                  />
                </div>
                <div className="team-card__body">
                  <p className="team-card__role">{member.role}</p>
                  <h2>{member.name}</h2>
                  {member.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {member.certifications ? (
                    <ul className="tag-list">
                      {member.certifications.map((certification) => <li key={certification}>{certification}</li>)}
                    </ul>
                  ) : null}
                  {member.bookingUrl ? (
                    <a className="text-link" href={member.bookingUrl} target="_blank" rel="noreferrer">Book with {member.name.split(' ')[0]} <span>→</span></a>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
