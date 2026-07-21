import { useMemo, useState } from 'react';
import { PageHero } from '../components/PageHero';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { Reveal } from '../components/Reveal';
import { teamCategories, teamMembers, type TeamCategory } from '../data/team';

type Filter = 'All' | TeamCategory;

export function Team() {
  const [filter, setFilter] = useState<Filter>('All');
  const visibleMembers = useMemo(
    () => filter === 'All' ? teamMembers : teamMembers.filter((member) => member.category === filter),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="The Diamond collective"
        title="Meet your professional."
        description="Independent specialists, distinct points of view, and one shared commitment to thoughtful service."
        imageBase="salon/contactimage"
        imageAlt="Emerald lounge chairs inside Diamond Salon Ocala"
      />

      <section className="section team-directory">
        <div className="container">
          <div className="team-directory__intro">
            <Reveal>
              <p className="eyebrow eyebrow--dark">Browse the team</p>
              <h2>Find the expertise that fits.</h2>
            </Reveal>
            <Reveal delay={80}>
              <p>Each professional may maintain their own service menu, pricing, schedule, and booking policies. Use the filters to narrow the directory, then book directly from the profile that feels right.</p>
            </Reveal>
          </div>

          <div className="team-filters" role="group" aria-label="Filter professionals by specialty">
            {teamCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={filter === category ? 'is-active' : ''}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="team-results" aria-live="polite">Showing {visibleMembers.length} {visibleMembers.length === 1 ? 'professional' : 'professionals'}</p>

          <div className="team-grid">
            {visibleMembers.map((member, index) => (
              <Reveal key={member.slug} className="team-card-reveal" delay={(index % 3) * 55}>
                <article className="team-card">
                  <ResponsiveImage
                    baseName={`team/${member.slug}`}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    width={1000}
                    height={1400}
                    className="team-card__media"
                    position={member.imagePosition}
                    sizes="(max-width: 650px) 100vw, (max-width: 1050px) 50vw, 33vw"
                  />
                  <div className="team-card__body">
                    <p className="team-card__role">{member.role}</p>
                    <h2>{member.name}</h2>
                    <ul className="specialty-list" aria-label={`${member.name}'s specialties`}>
                      {member.specialties.map((specialty) => <li key={specialty}>{specialty}</li>)}
                    </ul>
                    <details className="profile-details">
                      <summary>About {member.name.split(' ')[0]} <span aria-hidden="true">+</span></summary>
                      <div>{member.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                    </details>
                    <div className="team-card__actions">
                      <a className="button button--black" href={member.bookingUrl} target="_blank" rel="noreferrer">Book <span aria-hidden="true">↗</span></a>
                      {member.instagramUrl ? <a className="arrow-link" href={member.instagramUrl} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a> : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
