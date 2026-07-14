export const site = {
  name: 'Diamond Salon Ocala',
  legalName: 'J Diamond Salon of Florida, Inc.',
  tagline: 'Luxury beauty, crafted around you.',
  phoneDisplay: '352-244-8336',
  phoneHref: 'tel:+13522448336',
  primaryEmail: 'Brooke@diamondsalonocala.com',
  secondaryEmail: 'ceo@diamondsalonocala.com',
  address: '1020 SW 6th Ave, Ocala, FL 34471',
  bookingUrl: 'https://diamondsalonocala.glossgenius.com/',
  shopUrl: 'https://shop.saloninteractive.com/',
  physiqueUrl: 'https://diamondphysiqueocala.com/',
  facebookUrl: 'https://www.facebook.com/',
  instagramUrl: 'https://www.instagram.com/',
  hours: [
    ['Monday – Friday', '8:30am – 5:00pm'],
    ['Saturday', '9:00am – 12:00pm'],
    ['Sunday', 'Closed'],
  ] as const,
};

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Team', to: '/team' },
  { label: 'Our Space', to: '/our-space' },
  { label: 'Services', to: '/services' },
  { label: 'Giving Back', to: '/giving-back' },
  { label: 'Forms', to: '/forms' },
  { label: 'Contact', to: '/contact' },
] as const;
