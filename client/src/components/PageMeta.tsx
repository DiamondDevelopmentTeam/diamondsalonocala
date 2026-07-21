import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../config/site';

const pageTitles: Record<string, string> = {
  '/': 'Luxury Hair & Beauty in Ocala',
  '/team': 'Meet the Professionals',
  '/services': 'Salon Services & Pricing',
  '/our-space': 'The Salon & Gallery',
  '/giving-back': 'Giving Back in Ocala',
  '/forms': 'Client Forms',
  '/contact': 'Contact & Location',
  '/specials': 'Current Salon Specials',
  '/join-our-team': 'Join the Diamond Salon Team',
  '/salon-etiquette': 'Salon Etiquette',
  '/privacy-policy': 'Privacy Policy',
  '/terms': 'Terms & Conditions',
};

export function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const formTitle = pathname.startsWith('/forms/') ? 'Client Form' : undefined;
    const title = formTitle ?? pageTitles[pathname] ?? 'Page Not Found';
    document.title = `${title} | ${site.name}`;
  }, [pathname]);

  return <span className="sr-only route-announcer" aria-live="polite">{pageTitles[pathname] ?? 'Diamond Salon page'}</span>;
}
