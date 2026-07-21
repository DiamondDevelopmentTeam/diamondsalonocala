export const site = {
  name: 'Diamond Salon Ocala',
  legalName: 'J Diamond Salon of Florida, Inc.',
  tagline: 'Beauty, shaped around you.',
  phoneDisplay: '352-244-8336',
  phoneHref: 'tel:+13522448336',
  primaryEmail: 'Brooke@diamondsalonocala.com',
  secondaryEmail: 'ceo@diamondsalonocala.com',
  address: '1020 SW 6th Ave, Ocala, FL 34471',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1020%20SW%206th%20Ave%2C%20Ocala%2C%20FL%2034471',
  bookingUrl: 'https://phorest.com/book/salons/diamondsalonocala',
  shopUrl: 'https://shop.saloninteractive.com/store/Diamondsalon',
  physiqueUrl: 'https://diamondphysiqueocala.com/',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61556225982815',
  instagramUrl: 'https://www.instagram.com/diamondsalon.ocala/',
  hours: [
    ['Monday – Friday', '8:30am – 5:00pm'],
    ['Saturday', '9:00am – 12:00pm'],
    ['Sunday', 'Closed'],
  ] as const,
};

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Team', to: '/team' },
  { label: 'Services', to: '/services' },
  { label: 'The Salon', to: '/our-space' },
  { label: 'Giving Back', to: '/giving-back' },
  { label: 'Contact', to: '/contact' },
] as const;

export const utilityNavItems = [
  { label: 'Specials', to: '/specials' },
  { label: 'Client Forms', to: '/forms' },
  { label: 'Salon Etiquette', to: '/salon-etiquette' },
  { label: 'Join Our Team', to: '/join-our-team' },
] as const;
