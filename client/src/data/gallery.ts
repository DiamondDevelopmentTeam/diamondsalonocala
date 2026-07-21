export type GalleryImage = {
  baseName: string;
  alt: string;
  label: string;
  orientation: 'landscape' | 'portrait' | 'square';
  width: number;
  height: number;
  position?: string;
};

export const galleryImages: GalleryImage[] = [
  { baseName: 'salon/slideshow1', alt: 'Green botanical feature wall and rust-colored bench inside Diamond Salon Ocala', label: 'Welcome lounge', orientation: 'landscape', width: 1360, height: 907 },
  { baseName: 'salon/ourspace1', alt: 'Open salon floor with styling stations and black salon chairs', label: 'Styling floor', orientation: 'landscape', width: 1600, height: 1067 },
  { baseName: 'salon/ourspace9', alt: 'Emerald lounge chairs on a patterned rug near the salon entrance', label: 'Guest lounge', orientation: 'portrait', width: 1536, height: 2048 },
  { baseName: 'salon/ourspace15', alt: 'Dedicated shampoo area with four wash stations and greenery', label: 'Shampoo lounge', orientation: 'landscape', width: 1600, height: 1067 },
  { baseName: 'salon/ourspace2', alt: 'Salon refreshment bar in a private service room', label: 'Refreshment bar', orientation: 'portrait', width: 1536, height: 2048 },
  { baseName: 'salon/ourspace5', alt: 'Wide view of the bright open-concept salon interior', label: 'Open-concept salon', orientation: 'landscape', width: 1600, height: 1200 },
  { baseName: 'salon/ourspace8', alt: 'Quiet waiting area with two black lounge chairs', label: 'Quiet corner', orientation: 'portrait', width: 1536, height: 2048 },
  { baseName: 'salon/ourspace13', alt: 'Long salon interior with styling stations and an orange bench', label: 'Main floor', orientation: 'portrait', width: 1536, height: 2048 },
  { baseName: 'salon/ourspace14', alt: 'Private styling room with chair, mirror, and workstation', label: 'Private studio', orientation: 'portrait', width: 1600, height: 2400 },
  { baseName: 'salon/slideshow3', alt: 'Curved reception desk with tall plants at Diamond Salon Ocala', label: 'Reception', orientation: 'square', width: 591, height: 602 },
  { baseName: 'salon/ourspace10', alt: 'Dimensional brunette waves created at Diamond Salon Ocala', label: 'Dimensional color', orientation: 'portrait', width: 1000, height: 1333 },
  { baseName: 'salon/ourspace11', alt: 'Soft blonde waves shown from the back', label: 'Soft blonding', orientation: 'portrait', width: 1000, height: 1275 },
  { baseName: 'salon/ourspace12', alt: 'Long brunette hair with warm dimensional highlights', label: 'Warm dimension', orientation: 'portrait', width: 1000, height: 1333 },
  { baseName: 'salon/ourspace4', alt: 'Long cool blonde hair with a soft pink finish', label: 'Creative blonding', orientation: 'portrait', width: 1000, height: 1333 },
  { baseName: 'salon/ourspace7', alt: 'Long blonde hair styled in polished waves', label: 'Finished style', orientation: 'portrait', width: 900, height: 1055 },
];
