export type HomeHeroSlide = {
  baseName: string;
  alt: string;
  label: string;
  width: number;
  height: number;
  position?: string;
};

// Add, remove, or reorder slides here. Each image should have matching
// desktop (`.webp`) and mobile (`-sm.webp`) files in public/images.
export const homeHeroSlides: HomeHeroSlide[] = [
  {
    baseName: 'salon/slideshow1',
    alt: 'Botanical Diamond Salon feature wall and guest bench',
    label: 'The Diamond welcome',
    width: 1360,
    height: 907,
    position: '50% 48%',
  },
  {
    baseName: 'salon/ourspace1',
    alt: 'Open Diamond Salon styling floor with black salon chairs',
    label: 'The styling floor',
    width: 1600,
    height: 1067,
    position: '56% 52%',
  },
  {
    baseName: 'salon/ourspace15',
    alt: 'Diamond Salon shampoo lounge with four wash stations',
    label: 'The shampoo lounge',
    width: 1600,
    height: 1067,
    position: '54% 52%',
  },
];
