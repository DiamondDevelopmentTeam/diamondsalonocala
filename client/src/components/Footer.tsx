import { Link } from 'react-router-dom';
import { navItems, site, utilityNavItems } from '../config/site';
import { assetUrl } from '../lib/assets';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-intro">
        <p>Ready when you are.</p>
        <h2>Make space for a little more confidence.</h2>
        <a className="button button--gold" href={site.bookingUrl} target="_blank" rel="noreferrer">Book your visit <span aria-hidden="true">↗</span></a>
      </div>

      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={assetUrl('images/brand/diamond-salon-logo.webp')} alt="Diamond Salon Ocala" width="404" height="140" className="footer-logo" loading="lazy" />
          <p>An independent collective for hair, skin, nails, and considered beauty services in Ocala, Florida.</p>
          <div className="social-links" aria-label="Social media">
            <a href={site.instagramUrl} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
            <a href={site.facebookUrl} target="_blank" rel="noreferrer">Facebook <span aria-hidden="true">↗</span></a>
          </div>
          <div className="footer-certifications" aria-label="Professional product partners">
            <img src={assetUrl('images/brand/brazilian-blowout.webp')} alt="Brazilian Blowout" width="181" height="37" loading="lazy" />
            <img src={assetUrl('images/brand/great-lengths.webp')} alt="Great Lengths" width="177" height="38" loading="lazy" />
          </div>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            {navItems.map((item) => <li key={item.to}><Link to={item.to}>{item.label}</Link></li>)}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Plan your visit</h3>
          <address><a href={site.mapsUrl} target="_blank" rel="noreferrer">{site.address}</a></address>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.primaryEmail}`}>{site.primaryEmail}</a>
          <ul className="hours-list">
            {site.hours.map(([day, hours]) => <li key={day}><span>{day}</span><strong>{hours}</strong></li>)}
          </ul>
        </div>

        <div className="footer-column">
          <h3>More from Diamond</h3>
          <ul>
            {utilityNavItems.map((item) => <li key={item.to}><Link to={item.to}>{item.label}</Link></li>)}
            <li><a href={site.shopUrl} target="_blank" rel="noreferrer">Shop salon products <span aria-hidden="true">↗</span></a></li>
            <li><a href={site.physiqueUrl} target="_blank" rel="noreferrer">Diamond Physique Ocala <span aria-hidden="true">↗</span></a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {site.legalName} All rights reserved.</p>
        <div>
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/salon-etiquette">Salon etiquette</Link>
        </div>
      </div>
    </footer>
  );
}
