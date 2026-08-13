export type TransformationImage = {
  baseName: string;
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

// Add a `before` and `after` image object to any entry when client photos arrive.
// Place responsive image pairs in public/images/transformations (see its README),
// then reference them here as `transformations/image-name`.
export const transformations: Transformation[] = [
  {
    id: 'dimensional-color',
    number: '01',
    title: 'Dimensional color',
    service: 'Color transformation',
    description: 'Tone, depth, and light placed with intention for color that looks considered from every angle.',
    tone: 'sage',
  },
  {
    id: 'shape-finish',
    number: '02',
    title: 'Shape & finish',
    service: 'Cut and style',
    description: 'A precise shape and polished finish designed around your texture, routine, and point of view.',
    tone: 'gold',
  },
  {
    id: 'length-density',
    number: '03',
    title: 'Length & density',
    service: 'Extensions',
    description: 'Seamless length and fullness, customized for natural movement and an undetectable result.',
    tone: 'ink',
  },
];
