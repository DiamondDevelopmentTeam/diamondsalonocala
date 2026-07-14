export type ServiceGroup = {
  title: string;
  note?: string;
  items: Array<{ name: string; price: string }>;
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: 'Cuts',
    items: [
      { name: "Women’s haircut", price: '$55+' },
      { name: "Men’s haircut", price: '$30+' },
      { name: "Kids’ haircut", price: '$35+' },
    ],
  },
  {
    title: 'Color',
    note: 'Color services include a haircut and blow-dry. Additional bowls of color are $25+.',
    items: [
      { name: 'Root touch-up', price: '$135+' },
      { name: 'Root-to-end color', price: '$160+' },
      { name: 'Toner / gloss', price: '$35+' },
    ],
  },
  {
    title: 'Highlights',
    note: 'Highlight services include a haircut and blow-dry.',
    items: [
      { name: 'Partial highlights', price: '$155+' },
      { name: 'Full highlights', price: '$180+' },
      { name: 'Balayage / foilayage', price: '$200+' },
      { name: 'Partial foils', price: '$160+' },
      { name: 'Full foils', price: '$190+' },
    ],
  },
  {
    title: 'Styling',
    items: [
      { name: 'Shampoo, blow-dry & style', price: '$45+' },
      { name: 'Blow-dry with extensions', price: '$60+' },
      { name: 'Special occasion / updo', price: '$80+' },
    ],
  },
  {
    title: 'Conditioning Treatments',
    items: [
      { name: 'K18 treatment', price: '$30+' },
      { name: 'Olaplex treatment', price: '$30+' },
      { name: 'Hydration mask', price: '$25+' },
    ],
  },
  {
    title: 'Smoothing & Extensions',
    items: [
      { name: 'Brazilian Blowout', price: '$200–$350+' },
      { name: 'Keratin smoothing treatment', price: '$130–$300+' },
      { name: 'Extensions consultation', price: 'Call to schedule' },
    ],
  },
  {
    title: 'Facial Waxing',
    items: [
      { name: 'Brow tint', price: '$15+' },
      { name: 'Brow wax', price: '$15+' },
      { name: 'Lip wax', price: '$10+' },
      { name: 'Chin wax', price: '$12+' },
      { name: 'Full face', price: '$39+' },
    ],
  },
];
