import { useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { transformations } from '../data/transformations';
import type { TransformationImage } from '../data/transformations';

function TransformationPanel({
  image,
  label,
  tone,
}: {
  image?: TransformationImage;
  label: 'Before' | 'After';
  tone: string;
}) {
  if (image) {
    return (
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: image.position ?? 'center top',
          display: 'block',
        }}
      />
    );
  }

  return (
    <div
      className={`transformation-placeholder transformation-placeholder--${tone} transformation-placeholder--${label.toLowerCase()}`}
      aria-hidden="true"
    >
      <span>{label}</span>
      <i>Client image coming soon</i>
    </div>
  );
}

export function TransformationComparison() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reveal, setReveal] = useState(50);

  const active = transformations[activeIndex];

  const comparisonStyle = {
    '--reveal': `${reveal}%`,
  } as CSSProperties;

  const selectTransformation = (index: number) => {
    setActiveIndex(index);
    setReveal(50);
  };

  return (
    <section
      className="transformation-section"
      aria-labelledby="transformation-title"
    >
      <div className="container transformation-section__heading">
        <div>
          <p className="eyebrow">The transformation</p>
          <h2 id="transformation-title">See the shift.</h2>
        </div>

        <p>
          Explore real client transformations, from dimensional color and
          precision cuts to styling, extensions, and complete hair
          transformations.
        </p>
      </div>

      <div className="container transformation-layout">
        <div className="transformation-stage">
          <div
            className="transformation-comparison"
            style={comparisonStyle}
          >
            <div className="transformation-comparison__before">
              <TransformationPanel
                image={active.before}
                label="Before"
                tone={active.tone}
              />
            </div>

            <div className="transformation-comparison__after">
              <TransformationPanel
                image={active.after}
                label="After"
                tone={active.tone}
              />
            </div>

            <span className="transformation-comparison__label transformation-comparison__label--before">
              Before
            </span>

            <span className="transformation-comparison__label transformation-comparison__label--after">
              After
            </span>

            <span
              className="transformation-comparison__line"
              aria-hidden="true"
            >
              <i>↔</i>
            </span>

            <input
              type="range"
              min="5"
              max="95"
              value={reveal}
              onChange={(event) => setReveal(Number(event.target.value))}
              aria-label={`Compare before and after for ${active.title}`}
              aria-valuetext={`${reveal}% after image revealed`}
            />
          </div>

          <p className="transformation-stage__hint">
            <span aria-hidden="true">↔</span>
            Drag to compare
          </p>
        </div>

        <div className="transformation-index">
          <div
            className="transformation-index__meta"
            aria-live="polite"
          >
            <p>{active.service}</p>
            <h3>{active.title}</h3>
            <p>{active.description}</p>

            <Link
              className="arrow-link arrow-link--light"
              to="/services"
            >
              View service <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div
            className="transformation-index__list"
            aria-label="Choose a transformation"
          >
            {transformations.map((transformation, index) => (
              <button
                key={transformation.id}
                type="button"
                className={index === activeIndex ? 'is-active' : ''}
                aria-pressed={index === activeIndex}
                onClick={() => selectTransformation(index)}
              >
                <span>{transformation.number}</span>
                {transformation.title}
                <i aria-hidden="true">→</i>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}