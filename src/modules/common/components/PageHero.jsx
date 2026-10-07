import React from 'react';
import Container from './Container';
import Button from './Button';
import './PageHero.css';

export default function PageHero({ 
  layout = 'split', // 'split', 'centered', 'disciplined'
  theme = 'umbrella',
  tagline,
  title,
  description,
  image,
  ctaText,
  ctaHref,
  ctaAction
}) {
  const isDisciplined = layout === 'disciplined';
  const headerClass = isDisciplined ? 'sb-heading-900' : '';

  return (
    <section className={`hero-section layout-${layout} theme-${theme}`}>
      <Container>
        <div className="hero-grid">
          <div className="hero-content">
            {tagline && <span className="hero-tagline">{tagline}</span>}
            <h1 className={`hero-title ${headerClass}`}>{title}</h1>
            {description && <p className="hero-description">{description}</p>}
            
            {(ctaText && (ctaHref || ctaAction)) && (
              <div className="hero-actions">
                <Button 
                  variant="primary" 
                  theme={theme} 
                  href={ctaHref} 
                  onClick={ctaAction}
                >
                  {ctaText}
                </Button>
              </div>
            )}
          </div>
          
          {image && (
            <div className="hero-image-wrap">
              <img src={image.src} alt={image.alt} className="hero-img" loading="eager" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
