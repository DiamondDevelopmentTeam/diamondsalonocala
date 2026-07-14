import { useMemo, useState, type CSSProperties, type ReactNode } from 'react';

type SmartImageProps = {
  baseName: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  loading?: 'eager' | 'lazy';
  fallback?: ReactNode;
};

const webpFirstImages = new Set(['High-Res-Diamond-Animation-Logo-1']);

export function SmartImage({
  baseName,
  alt,
  className,
  style,
  loading = 'lazy',
  fallback,
}: SmartImageProps) {
  const candidates = useMemo(() => {
    const extensions = webpFirstImages.has(baseName)
      ? ['webp', 'png', 'jpg', 'jpeg', 'gif', 'svg']
      : ['png', 'webp', 'jpg', 'jpeg', 'gif', 'svg'];

    return extensions.map(
      (extension) => `${import.meta.env.BASE_URL}images/${baseName}.${extension}`,
    );
  }, [baseName]);

  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <>{fallback ?? <div className={`image-fallback ${className ?? ''}`}>{alt}</div>}</>;
  }

  return (
    <img
      src={candidates[index]}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      onError={() => {
        if (index < candidates.length - 1) {
          setIndex((current) => current + 1);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}
