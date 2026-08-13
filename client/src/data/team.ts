export type TeamCategory = 'Hair' | 'Skin & wellness' | 'Nails';

export type LocalizedBio = {
  heading: string;
  paragraphs: string[];
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  location?: string;
  category: TeamCategory;
  specialties: string[];
  bio: string[];
  bioHeading?: string;
  localizedBio?: LocalizedBio[];
  bookingUrl: string;
  bookingProvider?: 'phorest' | 'square' | 'external';
  phoneDisplay?: string;
  phoneHref?: string;
  instagramUrl?: string;
  imageBaseName?: string | null;
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  imagePosition?: string;
};

const salonBooking = 'https://phorest.com/book/salons/diamondsalonocala';

// Add each approved professional here. The Team directory and Home count are
// generated from this array, so new profiles reflow without layout changes.
export const teamMembers: TeamMember[] = [
  {
    slug: 'brooke-bynum',
    name: 'Brooke Bynum',
    role: 'Salon Manager · Facial Specialist · Spray Tan Artist',
    category: 'Skin & wellness',
    specialties: ['Customized facials', 'Spray tanning', 'Guest care'],
    bookingUrl: salonBooking,
    instagramUrl: 'https://www.instagram.com/glow_bybrooke/',
    bio: ['A Florida native and mother of two, Brooke leads the salon while offering tailored facial and spray-tan services. Her approach is personal, welcoming, and focused on helping every guest leave refreshed and confident.'],
  },
  {
    slug: 'chloe-geatches',
    name: 'Chloe Geatches',
    role: 'Hairstylist',
    category: 'Hair',
    specialties: ['Lived-in color', 'Blonding', 'Extensions'],
    bookingUrl: 'https://chloes-beautique.square.site/',
    bookingProvider: 'square',
    phoneDisplay: '352-812-1808',
    phoneHref: 'tel:+13528121808',
    imageSrc: 'images/team/ChloeGeatches.jpg',
    imageWidth: 1179,
    imageHeight: 768,
    imagePosition: '58% 50%',
    bio: ['Hi, I’m Chloe! I specialize in lived-in color, blonding, and extensions. My passion is helping you look and feel your absolute best with customized, beautiful hair you’ll love. I can’t wait to be a part of the team at Diamond Salon and welcome you to my chair!'],
  },
  {
    slug: 'walkiria-sosa',
    name: 'Walkiria Sosa',
    role: 'Hairstylist',
    location: 'Booth 2',
    category: 'Hair',
    specialties: ['Keratin treatments', 'Perms', 'Precision haircuts'],
    bookingUrl: salonBooking,
    imagePosition: '50% 22%',
    bioHeading: 'Get to Know Me',
    bio: ['I’m a passionate hairstylist dedicated to helping every client look and feel their best. I enjoy performing keratin treatments, perms, and a wide variety of professional hair services. My greatest passion is precision haircuts and maintaining healthy, beautiful hair. I believe that great hair starts with proper care, and I’m committed to creating styles that enhance each client’s beauty while protecting the health of their hair.'],
    localizedBio: [
      {
        heading: 'Conóceme',
        paragraphs: ['Soy una estilista apasionada, dedicada a ayudar a cada cliente a verse y sentirse de lo mejor. Me encanta realizar tratamientos de queratina, permanentes y una gran variedad de servicios profesionales para el cabello. Mi mayor pasión son los cortes de cabello y el cuidado de la salud capilar. Creo que un cabello hermoso comienza con un buen cuidado, y mi compromiso es crear estilos que resalten la belleza de cada persona mientras mantienen su cabello sano y fuerte.'],
      },
    ],
  },
  {
    slug: 'samantha-bettner',
    name: 'Samantha Bettner',
    role: 'Master Stylist',
    location: 'Booth 3',
    category: 'Hair',
    specialties: ['Precision blonding', 'Keratin smoothing', 'Cuts & styles'],
    bookingUrl: salonBooking,
    instagramUrl: 'https://www.instagram.com/samantha_lovez_hair/',
    imagePosition: '55% 42%',
    bio: ['Shear Styles by Samantha Bettner offers expert hair services backed by 16 years of professional industry experience. Specializing in precision blonding techniques, transformative keratin smoothing treatments, and precision cuts and styles, Samantha delivers customized, high-quality results designed to elevate your personal style.'],
  },
  {
    slug: 'sheriya-combs',
    name: 'Sheriya Combs',
    role: 'Master Stylist',
    location: 'Booth 4',
    category: 'Hair',
    specialties: ['Highlights & balayage', 'Special occasion updos', 'Fades & blowouts'],
    bookingUrl: salonBooking,
    imagePosition: '62% 50%',
    bio: ['Hello, my name is Sheriya Combs, and I have been a licensed cosmetologist since 2013. I’m also a licensed aesthetician. I specialize in highlights, balayages, special occasion updos, fades, and blowouts. I’m a faith-based stylist who aims to build a clientele of lifelong relationships.'],
  },
  {
    slug: 'courtney-hodson',
    name: 'Courtney Hodson',
    role: 'Stylist · Purely Glow Hair',
    location: 'Booth 5',
    category: 'Hair',
    specialties: ['Dimensional color', 'Bright blondes', 'Seamless blends'],
    bookingUrl: salonBooking,
    instagramUrl: 'https://www.instagram.com/hair.bycourtneyy/',
    bio: ['Hi, I’m Courtney, the stylist behind Purely Glow Hair. I’m passionate about creating natural-looking color with soft dimension, bright blondes, and seamless blends. Every appointment is customized to enhance your natural beauty while keeping your hair healthy and low maintenance.'],
  },
  {
    slug: 'alina-demarco',
    name: 'Alina DeMarco',
    role: 'Hairstylist',
    location: 'Booth 6',
    category: 'Hair',
    specialties: ['High-impact color', 'Custom blonding', 'Dimensional color'],
    bookingUrl: salonBooking,
    instagramUrl: 'https://www.instagram.com/ALINAMARIEBEAUTY/',
    imagePosition: '50% 28%',
    bio: ['Alina creates polished, personalized color with an effortless finish. Her specialties include high-impact transformations, custom blonding, dimensional color, and lived-in blonde.'],
  },
  {
    slug: 'karrey-kirby',
    name: 'Karrey Kirby',
    role: 'Independent Hairstylist',
    location: 'Booth 7',
    category: 'Hair',
    specialties: ['Dimensional color', 'Blonding & brunettes', 'Extensions'],
    bookingUrl: salonBooking,
    instagramUrl: 'https://www.instagram.com/karreyblaine/',
    imagePosition: '48% 50%',
    bio: [
      'I’m Karrey, an independent hairstylist with over a decade of experience dedicated to creating beautiful, customized hair that helps every client feel confident and empowered. I specialize in dimensional color, blonding, rich brunettes, lived-in color, extensions, and healthy hair transformations. My goal is to provide a personalized salon experience where artistry meets honesty, ensuring every guest leaves feeling refreshed, confident, and truly seen.',
      'As an independent artist, I take pride in building genuine relationships with my clients while continuing to perfect my craft through education, creativity, and attention to detail. Whether you’re looking for a subtle refresh or a complete transformation, I’m committed to delivering luxury results tailored specifically to your lifestyle and vision.',
    ],
  },
  {
    slug: 'marisol-torres',
    name: 'Iselda Marrisol Torres',
    role: 'Stylist',
    location: 'Booth 8',
    category: 'Hair',
    specialties: ['Custom color', 'Natural enhancement', 'Transformations'],
    bookingUrl: salonBooking,
    bio: ['Raised in Ocala, Marisol creates customized color that enhances natural beauty while respecting hair health. She welcomes everything from a subtle refresh to a more complete transformation.'],
  },
  {
    slug: 'briana-king',
    name: 'Brianna King',
    role: 'Hairstylist',
    location: 'Booth 9',
    category: 'Hair',
    specialties: ['Lived-in color', 'Dimensional blonding', 'Custom color'],
    bookingUrl: salonBooking,
    bio: ['An Ocala native, wife, and mother, Brianna creates custom color around each guest’s lifestyle, maintenance preferences, and hair goals. Her specialties include lived-in looks, bright blondes, and dimensional transformations.'],
  },
  {
    slug: 'kortney-m',
    name: 'Kortney Mesloh',
    role: 'Hairstylist',
    location: 'Booth 10',
    category: 'Hair',
    specialties: ['Blonding & gray blending', 'Highlights', 'Event hair & makeup'],
    bookingUrl: salonBooking,
    instagramUrl: 'https://www.instagram.com/kort_kuts/',
    bio: [
      'Hello, I’m Kortney! Originally from Nevada, I later spent time living in Hawaii before making Florida my home. I’ve been a licensed cosmetologist since 2018 and have a true passion for helping my clients feel confident and beautiful.',
      'I specialize in blonding, highlights, gray blending, wedding and prom hair and makeup. Whether you’re looking for a subtle refresh, a complete transformation, or getting ready for a special event, my goal is to create a look that suits you and your lifestyle.',
      'I strive to provide a welcoming, educational experience where every guest feels comfortable, heard, and cared for. I can’t wait to meet you and help bring your hair goals to life!',
    ],
  },
  {
    slug: 'kyrah-baptiste',
    name: 'Kyrah Baptiste',
    role: 'Braider & Wig Stylist',
    location: 'Booth 12',
    category: 'Hair',
    specialties: ['Braiding', 'Wig styling', 'Protective looks'],
    bookingUrl: salonBooking,
    bio: ['Kyrah is a certified braider and wig stylist who began her professional braiding journey in 2024. She continues to expand her skills through cosmetology training while providing careful, confidence-building service.'],
  },
  {
    slug: 'careliz-torres',
    name: 'Careliz Torres',
    role: 'Stylist',
    location: 'Booth 14',
    category: 'Hair',
    specialties: ['Luxury extensions', 'Blondes & balayage', 'Dimensional brunettes'],
    bookingUrl: salonBooking,
    bio: [
      'Hi, beauties! I’m Careliz, and I’ve been living my dream behind the chair for the past 7 years. I specialize in luxury hair extensions, blondes, balayage, dimensional brunettes, and healthy hair transformations. Whether you’re looking for added length, volume, or both, I offer customized sew-in and K-tip extensions designed to blend seamlessly with your natural hair for beautiful, effortless results. Every install is tailored to your lifestyle, hair goals, and long-term hair health, creating transformations that look and feel completely natural.',
      'I truly believe beautiful hair starts with listening, so every appointment is personalized to you. My chair is a place where you’ll feel comfortable, cared for, and leave more confident than when you walked in. I can’t wait to welcome you!',
    ],
  },
  {
    slug: 'nicole-howze',
    name: 'Nicole Howze',
    role: 'Curly Hair Specialist',
    location: 'Booth 15',
    category: 'Hair',
    specialties: ['Curly cuts', 'Curl styling', 'Natural texture care'],
    bookingUrl: salonBooking,
    imagePosition: '50% 44%',
    bio: ['My name is Nicole Howze, I am the curly hair specialist. I have been a hairstylist for 6 years. It is my devotion to embrace natural hair texture behind the chair. I have experience in new techniques on the best of cutting, styling, and caring for curly hair.'],
  },
  {
    slug: 'oscar-agudelo',
    name: 'Oscar Agudelo',
    role: 'Hairstylist',
    location: 'Booth 16',
    category: 'Hair',
    specialties: ['Lived-in color', 'Seamless extensions', 'Layered cuts'],
    bookingUrl: salonBooking,
    instagramUrl: 'https://www.instagram.com/ocala.hair.oscar_/',
    imagePosition: '50% 40%',
    bio: ['Hi, I’m Oscar! I specialize in lived-in, low-maintenance hair color, seamless hair extensions, and layered haircuts designed to fit your lifestyle. My goal is to create hair that’s effortless, modern, and easy to maintain while helping you feel your absolute best.'],
  },
  {
    slug: 'samantha-deleon',
    name: 'Samantha DeLeon',
    role: 'Licensed Esthetician · SD Skin & Beauty',
    location: 'Suite 1',
    category: 'Skin & wellness',
    specialties: ['Custom lash extensions', 'Brazilian waxing', 'Advanced skin treatments'],
    bookingUrl: salonBooking,
    imagePosition: '50% 42%',
    bio: ['SD Skin & Beauty is a luxury esthetics studio specializing in custom lash extensions, Brazilian waxing, and advanced skin treatments. Every service is tailored to each client’s unique features and goals, delivering beautiful, natural-looking results in a clean, relaxing environment. Whether you’re looking for effortless lashes, smooth skin, or a healthy glow, our mission is to help you look and feel your best with personalized, high-quality care.'],
  },
  {
    slug: 'jasleen-herrera',
    name: 'Jasleen Herrera',
    role: 'Nail Technician · Jassy’s Nails',
    location: 'Suite 2',
    category: 'Nails',
    specialties: ['Acrylic & builder gel', 'Dry pedicures', 'Acrylic toe enhancements'],
    bookingUrl: salonBooking,
    bio: ['Jassy’s Nails is where luxury meets precision. Specializing in premium acrylic nails, builder gel, polygel, dry pedicures, and acrylic toe enhancements, every service is designed to deliver flawless, long-lasting results. With attention to detail, high-quality products, and a relaxing experience, Jassy’s Nails is dedicated to enhancing your beauty and leaving you feeling polished, confident, and effortlessly glamorous.'],
  },
];

export const teamCategories: Array<'All' | TeamCategory> = ['All', 'Hair', 'Skin & wellness', 'Nails'];
