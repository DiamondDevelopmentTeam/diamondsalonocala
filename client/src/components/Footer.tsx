import { Link } from 'react-router-dom';
import { navItems, site } from '../config/site';
import { SmartImage } from './SmartImage';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <SmartImage
            baseName="High-Res-Diamond-Animation-Logo-1"
            alt="Diamond Salon Ocala"
            className="footer-logo"
            fallback={<div className="footer-wordmark">◆ Diamond Salon Ocala</div>}
          />
          <p>A polished, welcoming beauty destination in the heart of Ocala.</p>
          <div className="footer-certifications" aria-label="Salon certifications">
            <SmartImage baseName="brazilianBlowOutFooter" alt="Brazilian Blowout" />
            <SmartImage baseName="greatlengthfooter" alt="Great Lengths" />
          </div>
        </div>

        <div>
          <h2>Explore</h2>
          <ul className="footer-links">
            {navItems.map((item) => (
              <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
            ))}
            <li><Link to="/join-our-team">Join Our Team</Link></li>
          </ul>
        </div>

        <div>
          <h2>Visit</h2>
          <address>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`} target="_blank" rel="noreferrer">
              {site.address}
            </a>
          </address>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.primaryEmail}`}>{site.primaryEmail}</a>
        </div>

        <div>
          <h2>Salon Hours</h2>
          <ul className="hours-list">
            {site.hours.map(([day, hours]) => (
              <li key={day}><span>{day}</span><strong>{hours}</strong></li>
            ))}
          </ul>
          <a className="button button--outline" href={site.bookingUrl} target="_blank" rel="noreferrer">Reserve an Appointment</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Diamond Salon Ocala. All rights reserved.</p>
        <div>
          <Link to="/salon-etiquette">Salon Etiquette</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy-policy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
