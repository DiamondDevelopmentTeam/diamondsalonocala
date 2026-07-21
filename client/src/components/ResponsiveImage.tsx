import type { CSSProperties } from 'react';
import { assetUrl } from '../lib/assets';

type ResponsiveImageProps = {
  baseName: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
  position?: string;
};

export function ResponsiveImage({
  baseName,
  alt,
  width,
  height,
  className = '',
  imageClassName = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes,
  position,
}: ResponsiveImageProps) {
  const imageStyle: CSSProperties | undefined = position ? { objectPosition: position } : undefined;

  return (
    <picture className={`responsive-picture ${className}`.trim()}>
      <source media="(max-width: 720px)" srcSet={assetUrl(`images/${baseName}-sm.webp`)} />
      <img
        src={assetUrl(`images/${baseName}.webp`)}
        alt={alt}
        width={width}
        height={height}
        className={imageClassName}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        sizes={sizes}
        style={imageStyle}
      />
    </picture>
  );
}
