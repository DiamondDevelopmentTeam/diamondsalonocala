import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems, site } from '../config/site';
import { SmartImage } from './SmartImage';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        <NavLink to="/" className="brand" aria-label="Diamond Salon Ocala home" onClick={() => setOpen(false)}>
          <SmartImage
            baseName="High-Res-Diamond-Animation-Logo-1"
            alt="Diamond Salon Ocala"
            className="brand__logo"
            loading="eager"
            fallback={<span className="brand__text">◆ Diamond Salon</span>}
          />
        </NavLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'is-active' : '')}>
              {item.label}
            </NavLink>
          ))}
          <a href={site.shopUrl} target="_blank" rel="noreferrer">Shop</a>
          <a href={site.physiqueUrl} target="_blank" rel="noreferrer">Diamond Physique Ocala</a>
        </nav>

        <a className="button button--gold header-book" href={site.bookingUrl} target="_blank" rel="noreferrer">
          Book Now
        </a>

        <button
          className={`menu-button ${open ? 'is-open' : ''}`}
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <a href={site.shopUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Shop</a>
          <a href={site.physiqueUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Diamond Physique Ocala</a>
          <a className="button button--gold" href={site.bookingUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}