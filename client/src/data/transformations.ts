export type TransformationImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
};

export type Transformation = {
  id: string;
  number: string;
  title: string;
  service: string;
  description: string;
  tone: 'sage' | 'gold' | 'ink';
  before?: TransformationImage;
  after?: TransformationImage;
};

const imagePath = (fileName: string) =>
  `${import.meta.env.BASE_URL}images/transformations/${fileName}`;

export const transformations: Transformation[] = [
  {
    id: 'dimensional-color',
    number: '01',
    title: 'Dimensional color',
    service: 'Color transformation',
    description:
      'Tone, depth, and light placed with intention for color that looks considered from every angle.',
    tone: 'sage',

    before: {
      src: imagePath('after(blonde1).png'),
      alt: 'Before image of a blonde hair color transformation',
      width: 800,
      height: 1200,
      position: '50% 5%',
    },

    after: {
      src: imagePath('before(blonde1).png'),
      alt: 'After image of a blonde hair color transformation',
      width: 800,
      height: 1200,
      position: '50% 20%',
    },
  },

  {
    id: 'shape-finish',
    number: '02',
    title: 'Shape & finish',
    service: 'Cut and style',
    description:
      'A precise shape and polished finish designed around your texture, routine, and point of view.',
    tone: 'gold',
  },

  {
    id: 'length-density',
    number: '03',
    title: 'Length & density',
    service: 'Extensions',
    description:
      'Seamless length and fullness, customized for natural movement and an undetectable result.',
    tone: 'ink',
  },
];