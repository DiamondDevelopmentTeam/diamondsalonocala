export type TeamMember = {
  name: string;
  role: string;
  imageBase: string;
  bookingUrl?: string;
  instagramUrl?: string;
  bio: string[];
  certifications?: string[];
};

const salonBooking = 'https://diamondsalonocala.glossgenius.com/';

export const teamMembers: TeamMember[] = [
  {
    name: 'Brooke Bynum',
    role: 'Manager · Facial Specialist · Spray Tan Artist',
    imageBase: 'team-brooke-bynum',
    bookingUrl: salonBooking,
    bio: [
      'A Florida native and proud mom of two, Brooke is the manager of Diamond Salon. As a licensed facial specialist and certified spray tan artist, she creates personalized treatments designed to leave every guest feeling confident, refreshed, and radiant.',
    ],
  },
  {
    name: 'Careliz Torres',
    role: 'Stylist',
    imageBase: 'team-careliz-torres',
    bookingUrl: salonBooking,
    bio: [
      'With five years behind the chair, Careliz specializes in extensions, blondes, and red hair. She is certified in Great Lengths and JZ Styles extensions and loves creating polished, confidence-boosting transformations.',
    ],
  },
  {
    name: 'Ashley Little',
    role: 'Waxing Specialist · Esthetician',
    imageBase: 'team-ashley-little',
    bookingUrl: salonBooking,
    bio: [
      'An Ocala native and waxing specialist, Ashley focuses on Brazilian waxing and comfortable, professional service so every client can leave feeling smooth and confident.',
    ],
  },
  {
    name: 'Courtney Hodson',
    role: 'Stylist',
    imageBase: 'team-courtney-hodson',
    bookingUrl: salonBooking,
    bio: [
      'Born and raised in Florida, Courtney specializes in blonding and lived-in color. She loves helping guests reach their hair goals while keeping the result wearable and healthy.',
    ],
  },
  {
    name: 'Karrey Kirby',
    role: 'Stylist',
    imageBase: 'team-karrey-kirby',
    bookingUrl: salonBooking,
    bio: [
      'Karrey specializes in custom color, haircuts, styling, lived-in color, and extensions. Her work ranges from dimensional brunettes and sun-kissed blondes to soft waves and sleek finishes.',
    ],
  },
  {
    name: 'Maria Shahi',
    role: 'Stylist',
    imageBase: 'team-maria-shahi',
    bookingUrl: salonBooking,
    bio: [
      'With decades in the beauty industry, Maria brings global training and a deeply personalized approach to each guest. Her background includes education with Vidal Sassoon, Jacques Dessange, Toni & Guy, Oscar Blandi, Oribe, and other leading names.',
      'She has served as a head artistic director and educator, helping stylists grow into award winners, salon owners, celebrity stylists, and industry leaders.',
    ],
  },
  {
    name: 'Jasleen Herrera',
    role: 'Nail Technician',
    imageBase: 'team-jasleen-herrera',
    bookingUrl: 'https://jassysnails.square.site/',
    bio: [
      'Jasleen specializes in high-quality nail enhancements and detailed nail artistry. She prioritizes nail health, premium products, sanitation, and long-lasting customized results.',
    ],
  },
  {
    name: 'Samantha DeLeon',
    role: 'Licensed Esthetician',
    imageBase: 'team-samantha-deleon',
    bookingUrl: 'https://www.fresha.com/',
    bio: [
      'Samantha offers advanced skincare, expert waxing, and customized lash extensions. Her approach blends corrective treatments with a luxury experience and focuses on both immediate and long-term results.',
    ],
  },
  {
    name: 'Sheriya Combs',
    role: 'Master Stylist',
    imageBase: 'team-sheriya-combs',
    bookingUrl: salonBooking,
    bio: [
      'A cosmetology professional since 2013 and a licensed aesthetician, Sheriya specializes in highlights, balayage, updos, fades, and blowouts. She values lifelong client relationships and creates a warm, listening-first experience in her chair.',
    ],
  },
  {
    name: 'Samantha Bettner',
    role: 'Master Stylist',
    imageBase: 'team-samantha-bettner',
    bookingUrl: 'https://shear-styles-by-sam-bettner.square.site/',
    bio: [
      'With more than sixteen years behind the chair, Samantha specializes in blonding, balayage, highlights, vivid color, fairy hair, extensions, signature cuts, curly hair, fades, waxing, and more.',
    ],
  },
  {
    name: 'Amanda Baumker',
    role: 'Stylist',
    imageBase: 'team-amanda-baumker',
    bookingUrl: salonBooking,
    bio: [
      'Amanda is a Florida native with a love for creativity and photography. She enjoys trendy hair colors and designs, layered haircuts, blowouts, and hot-tool styling.',
    ],
    certifications: ['Brazilian Blowout', 'The Blonde Chronicles', 'Olaplex', 'Barbicide'],
  },
  {
    name: 'Marisol Torres',
    role: 'Stylist',
    imageBase: 'team-marisol-torres',
    bookingUrl: salonBooking,
    bio: [
      'Raised in Ocala, Marisol loves creating beautiful hair color and enhancing natural beauty. Her customized color work is designed to protect hair health while helping each guest feel refreshed and radiant.',
    ],
  },
  {
    name: 'Walkiria Sosa',
    role: 'Hairstylist',
    imageBase: 'team-walkiria-sosa',
    bookingUrl: 'https://book.heygoldie.com/',
    bio: [
      'Walkiria specializes in Dominican blowouts, keratin treatments, Brazilian knot extensions, custom color, and cuts. Healthy hair comes first, with careful attention to long-term growth and strength.',
    ],
  },
];
