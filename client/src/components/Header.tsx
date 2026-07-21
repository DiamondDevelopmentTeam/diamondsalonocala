import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems, site, utilityNavItems } from '../config/site';
import { assetUrl } from '../lib/assets';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 42);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>('a, button:not([disabled])');
    focusable?.[0]?.focus();
    document.body.classList.add('menu-open');

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="header-utility" aria-label="Salon contact links">
        <div className="container header-utility__inner">
          <a href={site.mapsUrl} target="_blank" rel="noreferrer">Ocala, Florida</a>
          <div>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <a href={site.shopUrl} target="_blank" rel="noreferrer">Shop products</a>
            <a href={site.physiqueUrl} target="_blank" rel="noreferrer">Diamond Physique Ocala</a>
          </div>
        </div>
      </div>

      <div className="container site-header__inner">
        <NavLink to="/" className="brand" aria-label="Diamond Salon Ocala home">
          <img
            src={assetUrl('images/brand/diamond-salon-logo.webp')}
            alt="Diamond Salon Ocala"
            width="404"
            height="140"
            className="brand__logo"
            decoding="sync"
          />
        </NavLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'is-active' : '')}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a className="button button--gold header-book" href={site.bookingUrl} target="_blank" rel="noreferrer">
          Book an appointment <span aria-hidden="true">↗</span>
        </a>

        <button
          ref={menuButtonRef}
          className={`menu-button ${open ? 'is-open' : ''}`}
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <button className="mobile-menu__backdrop" type="button" aria-label="Close menu" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} />
        <div className="mobile-menu__panel" id="mobile-navigation" ref={menuRef}>
          <p className="mobile-menu__eyebrow">Explore Diamond Salon</p>
          <nav aria-label="Mobile navigation">
            {[...navItems, ...utilityNavItems].map((item, index) => (
              <NavLink key={item.to} to={item.to} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, '0')}</span>{item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-menu__actions">
            <a className="button button--gold" href={site.bookingUrl} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>Book an appointment</a>
            <a href={site.physiqueUrl} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>Visit Diamond Physique Ocala <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </header>
  );
}
