import type { TeamMember } from '../data/team';
import { assetUrl } from '../lib/assets';
import { ResponsiveImage } from './ResponsiveImage';

type TeamPortraitProps = {
  member: TeamMember;
  className?: string;
  loading?: 'eager' | 'lazy';
  sizes: string;
};

export function TeamPortrait({ member, className = '', loading = 'lazy', sizes }: TeamPortraitProps) {
  const alt = `Portrait of ${member.name}, ${member.role}`;

  if (member.imageSrc) {
    return (
      <picture className={`responsive-picture ${className}`.trim()}>
        <img
          src={assetUrl(member.imageSrc)}
          alt={alt}
          width={member.imageWidth ?? 1000}
          height={member.imageHeight ?? 1400}
          loading={loading}
          decoding="async"
          sizes={sizes}
          style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
        />
      </picture>
    );
  }

  if (member.imageBaseName === null) {
    return (
      <div className={`team-portrait-placeholder ${className}`.trim()} role="img" aria-label={`Portrait of ${member.name} coming soon`}>
        <span aria-hidden="true">{member.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span>
        <p>Portrait coming soon</p>
      </div>
    );
  }

  return (
    <ResponsiveImage
      baseName={member.imageBaseName ?? `team/${member.slug}`}
      alt={alt}
      width={1000}
      height={1400}
      className={className}
      loading={loading}
      position={member.imagePosition}
      sizes={sizes}
    />
  );
}
