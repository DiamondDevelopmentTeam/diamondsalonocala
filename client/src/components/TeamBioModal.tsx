import { useEffect, useId, useRef, useState } from 'react';
import type { TeamMember } from '../data/team';
import { TeamPortrait } from './TeamPortrait';

type TeamBioModalProps = {
  member: TeamMember | null;
  onClose: () => void;
};

const ANIMATION_DURATION = 240;
const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export function TeamBioModal({ member, onClose }: TeamBioModalProps) {
  const [renderedMember, setRenderedMember] = useState<TeamMember | null>(member);
  const [isVisible, setIsVisible] = useState(Boolean(member));
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const wasOpenRef = useRef(false);
  const titleId = useId();
  const bioId = useId();

  useEffect(() => {
    let animationFrame = 0;
    let visibilityFrame = 0;
    let exitTimer = 0;

    if (member) {
      animationFrame = window.requestAnimationFrame(() => {
        setRenderedMember(member);
        visibilityFrame = window.requestAnimationFrame(() => setIsVisible(true));
      });
    } else {
      animationFrame = window.requestAnimationFrame(() => setIsVisible(false));
      exitTimer = window.setTimeout(() => setRenderedMember(null), ANIMATION_DURATION + 16);
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.cancelAnimationFrame(visibilityFrame);
      window.clearTimeout(exitTimer);
    };
  }, [member]);

  useEffect(() => {
    if (!member) {
      if (wasOpenRef.current) {
        const returnTarget = returnFocusRef.current;
        window.requestAnimationFrame(() => returnTarget?.focus());
        returnFocusRef.current = null;
        wasOpenRef.current = false;
      }
      return;
    }

    if (!wasOpenRef.current) {
      returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      wasOpenRef.current = true;
    }

    document.body.classList.add('team-modal-open');

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusableElements = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector))
        .filter((element) => element.getAttribute('aria-hidden') !== 'true');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      } else if (!dialogRef.current.contains(document.activeElement)) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('team-modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose]);

  useEffect(() => {
    if (!isVisible) return;
    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    });
    return () => window.cancelAnimationFrame(firstFrame);
  }, [isVisible]);

  if (!renderedMember) return null;

  return (
    <div
      className={`team-bio-modal${isVisible ? ' is-open' : ''}`}
      aria-hidden={!isVisible}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        ref={dialogRef}
        className="team-bio-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={bioId}
        tabIndex={-1}
      >
        <TeamPortrait
          member={renderedMember}
          className="team-bio-modal__media"
          loading="eager"
          sizes="(max-width: 720px) calc(100vw - 24px), 42vw"
        />

        <div className="team-bio-modal__panel">
          <button
            ref={closeButtonRef}
            type="button"
            className="team-bio-modal__close"
            aria-label={`Close ${renderedMember.name}'s biography`}
            onClick={onClose}
          >
            Close <span aria-hidden="true">×</span>
          </button>

          <header className="team-bio-modal__header">
            {renderedMember.location ? <p className="team-bio-modal__location">{renderedMember.location}</p> : null}
            <p className="team-bio-modal__role">{renderedMember.role}</p>
            <h2 id={titleId}>{renderedMember.name}</h2>
            {renderedMember.phoneDisplay && renderedMember.phoneHref ? (
              <a className="team-bio-modal__phone" href={renderedMember.phoneHref} aria-label={`Call ${renderedMember.name} at ${renderedMember.phoneDisplay}`}>{renderedMember.phoneDisplay}</a>
            ) : null}
            <ul className="specialty-list" aria-label={`${renderedMember.name}'s specialties`}>
              {renderedMember.specialties.map((specialty) => <li key={specialty}>{specialty}</li>)}
            </ul>
          </header>

          <div
            id={bioId}
            className="team-bio-modal__bio"
            tabIndex={0}
            aria-label={`Biography for ${renderedMember.name}`}
          >
            {renderedMember.bioHeading ? <h3>{renderedMember.bioHeading}</h3> : null}
            {renderedMember.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <a
              className="button button--black team-bio-modal__booking"
              href={renderedMember.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Book with ${renderedMember.name} (opens in a new tab)`}
            >
              Book <span aria-hidden="true">↗</span>
            </a>
            {renderedMember.localizedBio?.map((section) => (
              <section className="team-bio-modal__localized" lang="es" key={section.heading}>
                <h3>{section.heading}</h3>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
