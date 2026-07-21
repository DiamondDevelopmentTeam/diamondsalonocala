export type TeamCategory = 'Hair' | 'Skin & wellness' | 'Nails';

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  category: TeamCategory;
  specialties: string[];
  bio: string[];
  bookingUrl: string;
  instagramUrl?: string;
  imagePosition?: string;
};

const salonBooking = 'https://phorest.com/book/salons/diamondsalonocala';

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
    slug: 'nicole-howze',
    name: 'Nicole Howze',
    role: 'Stylist',
    category: 'Hair',
    specialties: ['Curly cuts', 'Curl-focused color', 'Healthy hair'],
    bookingUrl: salonBooking,
    imagePosition: '50% 34%',
    bio: ['Licensed since 2019, Nicole brings first-hand curl knowledge to thoughtful cutting, shaping, and color. She prioritizes moisture, healthy ends, and techniques that help natural texture look its best.'],
  },
  {
    slug: 'careliz-torres',
    name: 'Careliz Torres',
    role: 'Stylist',
    category: 'Hair',
    specialties: ['Extensions', 'Blonding', 'Red hair'],
    bookingUrl: salonBooking,
    bio: ['Careliz specializes in extensions, luminous blondes, and dimensional reds. Her extension training includes Great Lengths and JZ Styles, with each service planned around a polished, wearable result.'],
  },
  {
    slug: 'karrey-kirby',
    name: 'Karrey Kirby',
    role: 'Stylist',
    category: 'Hair',
    specialties: ['Custom color', 'Lived-in color', 'Extensions'],
    bookingUrl: salonBooking,
    instagramUrl: 'https://www.instagram.com/karreyblaine/',
    imagePosition: '50% 24%',
    bio: ['Karrey creates custom color, cuts, styling, and extensions with an eye for soft grow-out and natural dimension. Her work ranges from sunlit blondes and rich brunettes to sleek or softly waved finishes.'],
  },
  {
    slug: 'courtney-hodson',
    name: 'Courtney Hodson',
    role: 'Stylist',
    category: 'Hair',
    specialties: ['Blonding', 'Lived-in color', 'Hair goals'],
    bookingUrl: salonBooking,
    instagramUrl: 'https://www.instagram.com/hair.bycourtneyy/',
    bio: ['A Florida native, Courtney focuses on blonding and lived-in color. She enjoys translating a guest’s inspiration into healthy, approachable hair that fits day-to-day life.'],
  },
  {
    slug: 'jasleen-herrera',
    name: 'Jasleen Herrera',
    role: 'Nail Technician',
    category: 'Nails',
    specialties: ['Nail enhancements', 'Detailed artistry', 'Nail health'],
    bookingUrl: salonBooking,
    bio: ['Jasleen combines detailed nail artistry with high-quality enhancements and careful sanitation. Every appointment is customized with nail health, product quality, and long-lasting wear in mind.'],
  },
  {
    slug: 'sheriya-combs',
    name: 'Sheriya Combs',
    role: 'Master Stylist',
    category: 'Hair',
    specialties: ['Highlights', 'Balayage', 'Fades & blowouts'],
    bookingUrl: salonBooking,
    imagePosition: '50% 24%',
    bio: ['A cosmetology professional since 2013 and a licensed aesthetician, Sheriya works across highlights, balayage, updos, fades, and blowouts. She builds every appointment around listening well and creating lasting client relationships.'],
  },
  {
    slug: 'samantha-deleon',
    name: 'Samantha DeLeon',
    role: 'Licensed Esthetician',
    category: 'Skin & wellness',
    specialties: ['Advanced skincare', 'Waxing', 'Lash extensions'],
    bookingUrl: salonBooking,
    bio: ['Samantha offers advanced skincare, expert waxing, and customized lash extensions. She pairs corrective techniques with a luxury experience, balancing immediate polish with long-term skin health.'],
  },
  {
    slug: 'walkiria-sosa',
    name: 'Walkiria Sosa',
    role: 'Hairstylist',
    category: 'Hair',
    specialties: ['Dominican blowouts', 'Keratin treatments', 'Brazilian knot extensions'],
    bookingUrl: salonBooking,
    imagePosition: '50% 22%',
    bio: ['Walkiria specializes in Dominican blowouts, keratin treatments, Brazilian knot extensions, custom color, and cuts. Her work starts with healthy hair and considers how every result will grow and wear over time.'],
  },
  {
    slug: 'marisol-torres',
    name: 'Marisol Torres',
    role: 'Stylist',
    category: 'Hair',
    specialties: ['Custom color', 'Natural enhancement', 'Transformations'],
    bookingUrl: salonBooking,
    bio: ['Raised in Ocala, Marisol creates customized color that enhances natural beauty while respecting hair health. She welcomes everything from a subtle refresh to a more complete transformation.'],
  },
  {
    slug: 'samantha-bettner',
    name: 'Samantha Bettner',
    role: 'Master Stylist',
    category: 'Hair',
    specialties: ['Blonding & balayage', 'Vivid color', 'Curly hair & extensions'],
    bookingUrl: salonBooking,
    instagramUrl: 'https://www.instagram.com/samantha_lovez_hair/',
    imagePosition: '50% 38%',
    bio: ['With more than sixteen years behind the chair, Samantha works across blonding, balayage, highlights, vivid color, fairy hair, extensions, signature cuts, curly hair, fades, and waxing.'],
  },
  {
    slug: 'alina-demarco',
    name: 'Alina Demarco',
    role: 'Hairstylist',
    category: 'Hair',
    specialties: ['High-impact color', 'Custom blonding', 'Dimensional color'],
    bookingUrl: salonBooking,
    instagramUrl: 'https://www.instagram.com/ALINAMARIEBEAUTY/',
    imagePosition: '50% 28%',
    bio: ['Alina creates polished, personalized color with an effortless finish. Her specialties include high-impact transformations, custom blonding, dimensional color, and lived-in blonde.'],
  },
  {
    slug: 'oscar-agudelo',
    name: 'Oscar Agudelo',
    role: 'Hairstylist',
    category: 'Hair',
    specialties: ['Extensions', 'Precision cuts', 'Dimensional color'],
    bookingUrl: salonBooking,
    instagramUrl: 'https://www.instagram.com/ocala.hair.oscar_/',
    bio: ['An Ocala native, Oscar blends detail-driven cutting with lived-in blondes, dimensional brunettes, vivid color, and modern layers. His extension training spans wefts, K-tips, tapes, and cold fusion.'],
  },
  {
    slug: 'curtis-parillon',
    name: 'Curtis Parillon',
    role: 'Stylist',
    category: 'Hair',
    specialties: ['Vibrant color', 'Dimensional color', 'Polished blowouts'],
    bookingUrl: salonBooking,
    imagePosition: '50% 22%',
    bio: ['Curtis focuses on vibrant, dimensional color and smooth blowouts in a calm, considered appointment. He is Olaplex certified and keeps hair integrity central to both subtle changes and bold transformations.'],
  },
  {
    slug: 'kyrah-baptiste',
    name: 'Kyrah Baptiste',
    role: 'Braider & Wig Stylist',
    category: 'Hair',
    specialties: ['Braiding', 'Wig styling', 'Protective looks'],
    bookingUrl: salonBooking,
    bio: ['Kyrah is a certified braider and wig stylist who began her professional braiding journey in 2024. She continues to expand her skills through cosmetology training while providing careful, confidence-building service.'],
  },
  {
    slug: 'kortney-m',
    name: 'Kortney M.',
    role: 'Hairstylist',
    category: 'Hair',
    specialties: ['Blonding', 'Gray blending', 'Event hair & makeup'],
    bookingUrl: salonBooking,
    instagramUrl: 'https://www.instagram.com/kort_kuts/',
    bio: ['Licensed since 2018, Kortney specializes in blonding, highlights, gray blending, and hair and makeup for weddings and proms. Her process is welcoming, educational, and centered on a result that suits the guest’s lifestyle.'],
  },
  {
    slug: 'briana-king',
    name: 'Briana King',
    role: 'Hairstylist',
    category: 'Hair',
    specialties: ['Lived-in color', 'Dimensional blonding', 'Custom color'],
    bookingUrl: salonBooking,
    bio: ['An Ocala native, wife, and mother, Briana creates custom color around each guest’s lifestyle, maintenance preferences, and hair goals. Her specialties include lived-in looks, bright blondes, and dimensional transformations.'],
  },
];

export const teamCategories: Array<'All' | TeamCategory> = ['All', 'Hair', 'Skin & wellness', 'Nails'];
