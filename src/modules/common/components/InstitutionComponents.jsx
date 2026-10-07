import React from 'react';
import Container from './Container';
import Button from './Button';
import './InstitutionComponents.css';
import { Link } from 'react-router-dom';

// SVG Icons for reuse
const Icons = {
  Check: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
  Book: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
  User: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  Shield: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
  Star: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
  Send: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>,
  Trophy: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg>,
  Users: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  GraduationCap: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
};

export const InstitutionHero = ({ id, title, description, tagline, image, video, ctaText, ctaHref, secondaryCtaText, secondaryCtaHref, trustText }) => {
  const images = image ? (Array.isArray(image) ? image : [image]) : [];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (idx) => {
    setCurrentImageIndex(idx);
  };

  return (
    <>
      <section id={id} className={`inst-hero ${video ? 'has-bg-video' : ''}`}>
        {video && (
          <video 
            src={video}
            className="inst-hero-bg-video"
            autoPlay
            muted
            loop
            playsInline
          />
        )}
        {!video && (
          <Container>
            <div className="inst-hero-grid">
              <div className="inst-hero-content">
                <span className="inst-hero-tagline">{tagline}</span>
                <h1 className="inst-hero-title">{title}</h1>
                <p className="inst-hero-desc">{description}</p>
                <div className="inst-hero-actions">
                  <Button variant="primary" theme="school" href={ctaHref}>{ctaText}</Button>
                  {secondaryCtaText && (
                    secondaryCtaHref.startsWith('#') ? (
                      <a href={secondaryCtaHref} className="inst-btn-outline">
                        {secondaryCtaText} &rarr;
                      </a>
                    ) : (
                      <Link to={secondaryCtaHref} className="inst-btn-outline">
                        {secondaryCtaText} &rarr;
                      </Link>
                    )
                  )}
                </div>
                <div className="inst-hero-trust">
                  <div className="inst-avatars">
                    <div className="inst-avatar" style={{backgroundImage: 'url(/assets/faces/face1.jpg)', backgroundSize: 'cover'}}></div>
                    <div className="inst-avatar" style={{backgroundImage: 'url(/assets/faces/face2.jpg)', backgroundSize: 'cover'}}></div>
                    <div className="inst-avatar" style={{backgroundImage: 'url(/assets/faces/face3.jpg)', backgroundSize: 'cover'}}></div>
                  </div>
                  <div className="inst-trust-text" dangerouslySetInnerHTML={{__html: trustText}}></div>
                </div>
              </div>

              {/* Carousel beside the text */}
              {images.length > 0 && (
                <div className="inst-hero-carousel-wrapper">
                  <div className="inst-hero-carousel-container">
                    {images.map((imgSrc, idx) => (
                      <img 
                        key={idx}
                        src={imgSrc} 
                        alt={`${title} - Slide ${idx + 1}`} 
                        className="inst-hero-carousel-img"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          opacity: idx === currentImageIndex ? 1 : 0,
                          transition: 'opacity 1s ease-in-out',
                          zIndex: idx === currentImageIndex ? 1 : 0
                        }}
                      />
                    ))}

                    {/* Carousel arrows */}
                    {images.length > 1 && (
                      <>
                        <button className="inst-hero-carousel-arrow prev" onClick={goToPrev} aria-label="Previous slide">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button className="inst-hero-carousel-arrow next" onClick={goToNext} aria-label="Next slide">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"></polyline></svg>
                        </button>
                      </>
                    )}

                    {/* Carousel dots */}
                    {images.length > 1 && (
                      <div className="inst-hero-carousel-dots">
                        {images.map((_, idx) => (
                          <button
                            key={idx}
                            className={`inst-hero-carousel-dot ${idx === currentImageIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Container>
        )}
      </section>
    </>
  );
};


export const StatsBar = ({ id, stats }) => {
  return (
    <section id={id} className="inst-stats-bar">
      <Container>
        <div className="inst-stats-grid">
          {stats.map((stat, i) => (
            <div className="inst-stat-item" key={i}>
              <div className="inst-stat-icon">
                {Icons[stat.icon] && Icons[stat.icon]()}
              </div>
              <div>
                <div className="inst-stat-value">{stat.value}</div>
                <div className="inst-stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export const HubAboutSection = ({ id, title, content, ctaText = 'LEARN MORE', ctaHref = '#', image = '/assets/common/about-pattern.jpg' }) => {
  return (
    <section id={id} className="inst-about-section" style={{ padding: '8rem 0', backgroundColor: '#ffffff', overflow: 'hidden' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'left', paddingRight: '1rem', zIndex: 2, position: 'relative' }}>
            <h2 style={{ fontSize: '4rem', color: '#312154', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1 }}>
              {title}
            </h2>
            <div style={{ fontSize: '1.15rem', color: '#7a7a8c', lineHeight: 1.8, marginBottom: '3rem', maxWidth: '90%' }}>
              {content}
            </div>
            <Button 
              variant="primary" 
              href={ctaHref} 
              style={{ 
                background: 'linear-gradient(90deg, #4da4e6 0%, #90d3f7 100%)', 
                border: 'none', 
                borderRadius: '40px', 
                padding: '1rem 2.5rem',
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
                boxShadow: '0 8px 25px rgba(77, 164, 230, 0.4)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              {ctaText}
            </Button>
          </div>
          <div style={{ position: 'relative', height: '100%', minHeight: '450px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', zIndex: 1 }}>
             <img 
               src={image} 
               alt={title}
               style={{ 
                 position: 'absolute', 
                 right: '-15%', 
                 top: '50%', 
                 transform: 'translateY(-50%) scale(1.3)', 
                 width: '130%', 
                 height: 'auto', 
                 objectFit: 'contain',
                 mixBlendMode: 'multiply'
               }} 
             />
          </div>
        </div>
      </Container>
    </section>
  );
};

export const AboutTextSection = ({ id, title, content }) => {
  return (
    <section id={id} className="inst-about-text-section" style={{ padding: '6rem 0', backgroundColor: 'var(--color-surface)' }}>
      <Container>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', margin: '0 auto 1.5rem auto', fontFamily: 'serif' }}>{title}</h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: '1.8' }}>{content}</p>
        </div>
      </Container>
    </section>
  );
};

export const FeatureCards = ({ id, tagline, title, description, features }) => {
  return (
    <section id={id} className="inst-features">
      <Container>
        <div className="inst-section-header">
          <h2><span>{title.split(' ')[0]} {title.split(' ')[1]}</span> {title.split(' ').slice(2).join(' ')}</h2>
          <p>{description}</p>
        </div>
        <div className="inst-features-grid">
          {features.map((feature, i) => (
            <div className="inst-feature-card" key={i}>
              <div className="inst-feature-icon">
                {Icons[feature.icon] && Icons[feature.icon]()}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export const SplitShowcase = ({ id, tagline, title, description, image, reverse, list, iconGrid, ctaText, ctaHref }) => {
  return (
    <section id={id} className="inst-split">
      <Container>
        <div className={`inst-split-grid ${reverse ? 'reverse' : ''}`}>
          <div className="inst-split-content">
            <span className="inst-split-tagline">{tagline}</span>
            <h2 className="inst-split-title">{title}</h2>
            <p className="inst-split-desc">{description}</p>
            
            {list && (
              <ul className="inst-check-list">
                {list.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
            
            {iconGrid && (
              <div className="inst-icon-grid" style={{marginBottom: '2rem'}}>
                {iconGrid.map((item, i) => (
                  <div className="inst-icon-grid-item" key={i}>
                    <div className="icon">{Icons[item.icon] && Icons[item.icon]()}</div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            )}
            
            {ctaText && (
              <Button variant="primary" theme="school" href={ctaHref}>{ctaText}</Button>
            )}
          </div>
          <div className="inst-split-image">
            <img src={image} alt={title} className="inst-split-img" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export const ProgramsGrid = ({ id, tagline, title, description, programs, ctaText, ctaHref }) => {
  return (
    <section id={id} className="inst-programs">
      <Container>
        <div className="inst-section-header">
          {tagline && <span className="inst-hero-tagline" style={{ display: 'block', textAlign: 'center', marginBottom: '0.5rem', color: 'var(--color-da-primary)' }}>{tagline}</span>}
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className="inst-programs-grid">
          {programs.map((prog, i) => (
            <div className="inst-program-card" key={i}>
              <div className="inst-program-icon">
                {prog.image ? <img src={prog.image} alt={prog.title} /> : Icons[prog.icon]()}
              </div>
              <h3 className="inst-program-title">{prog.title}</h3>
              <p className="inst-program-desc">{prog.description}</p>
            </div>
          ))}
        </div>
        {ctaText && (
          <div style={{ textAlign: 'center' }}>
            {ctaHref.startsWith('#') ? (
              <a href={ctaHref} className="btn btn-primary theme-da">
                {ctaText} &rarr;
              </a>
            ) : (
              <Link to={ctaHref} className="btn btn-primary theme-da">
                {ctaText} &rarr;
              </Link>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export const AdmissionsBanner = ({ id, title, description, ctaText, ctaHref, bgImage }) => {
  const wrapperStyle = bgImage ? { backgroundImage: `url('${bgImage}')` } : {};
  return (
    <section id={id} className={`inst-banner-wrapper ${bgImage ? 'has-bg' : ''}`} style={wrapperStyle}>
      <Container>
        <div className="inst-banner">
          <div className="inst-banner-content">
            <div className="inst-banner-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </div>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
          {ctaHref.startsWith('#') ? (
            <a href={ctaHref} className="btn inst-btn-white theme-school">
              {ctaText}
            </a>
          ) : (
            <Link to={ctaHref} className="btn inst-btn-white theme-school">
              {ctaText}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
};

export const ComprehensiveAbout = ({ id, tagline, title, description, image, experience, features, stats, ctaText, ctaHref }) => {
  // Parse title to add red dots if specified as standard text like "Discipline. Education. Leadership."
  const renderTitle = () => {
    if (!title) return null;
    const parts = title.split('.');
    if (parts.length <= 1) return title;
    return (
      <>
        {parts.map((part, index) => {
          if (index === parts.length - 1 && part.trim() === '') return null; // trailing dot
          return (
            <React.Fragment key={index}>
              {part}<span className="dot">.</span>
              {index < parts.length - 1 && ' '}
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <section id={id} className="inst-comp-about">
      <Container>
        <div className={`inst-comp-about-grid ${!image ? 'inst-comp-about-full' : ''}`}>
          {/* Left Column: Image and Experience Box */}
          {image && (
            <div className="inst-comp-about-left">
              <div className="inst-comp-about-img-wrap">
                <img src={image} alt="About Us" />
              </div>
              {experience && (
                <div className="inst-comp-experience">
                  {Icons[experience.icon] && Icons[experience.icon]()}
                  <div>
                    <div className="inst-comp-experience-value">{experience.value}</div>
                    <div className="inst-comp-experience-label">{experience.label}</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Right Column: Content */}
          <div className="inst-comp-about-right">
            {tagline && <div className="inst-comp-tagline">{tagline}</div>}
            <h2 className="inst-comp-title">{renderTitle()}</h2>
            
            {description && description.map((p, idx) => (
              <p key={idx} className="inst-comp-desc">{p}</p>
            ))}

            {features && features.length > 0 && (
              <div className="inst-comp-features-grid">
                {features.map((feature, idx) => (
                  <div className="inst-comp-feature-card" key={idx}>
                    <div className="inst-comp-feature-icon">
                      {Icons[feature.icon] && Icons[feature.icon]()}
                    </div>
                    <div className="inst-comp-feature-title">{feature.title}</div>
                    <div className="inst-comp-feature-desc">{feature.description}</div>
                  </div>
                ))}
              </div>
            )}

            {stats && stats.length > 0 && (
              <div className="inst-comp-stats-row">
                {stats.map((stat, idx) => (
                  <div className="inst-comp-stat" key={idx}>
                    <div className="inst-comp-stat-icon">
                      {Icons[stat.icon] && Icons[stat.icon]()}
                    </div>
                    <div className="inst-comp-stat-info">
                      <span className="inst-comp-stat-value">{stat.value}</span>
                      <span className="inst-comp-stat-label">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {ctaText && (
              <div>
                {ctaHref.startsWith('#') ? (
                  <a href={ctaHref} className="btn btn-primary theme-da">
                    {ctaText} &rarr;
                  </a>
                ) : (
                  <Link to={ctaHref} className="btn btn-primary theme-da">
                    {ctaText} &rarr;
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export const ModernAboutSection = () => {
  return (
    <section className="modern-about" id="about">
      <div className="modern-about-bg"></div>
      <Container>
        <div className="modern-about-grid">
          {/* Left Content */}
          <div className="modern-about-content">
            <div className="modern-about-badge">
              <div className="modern-about-badge-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </div>
              ABOUT SRI BASARA
            </div>
            
            <h2 className="modern-about-title">
              Shaping Minds<span className="period">.</span><br />
              Building Futures<span className="period">.</span>
            </h2>
            <div className="modern-about-title-accent"></div>
            
            <p className="modern-about-desc">
              <strong>Sri Basara Educational Society</strong> is committed to creating an environment where students learn with purpose, grow with confidence, and prepare for a changing world.
            </p>

            <div className="modern-about-cards">
              <div className="modern-about-card">
                <div className="modern-about-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                </div>
                <h4>Academic<br/>Excellence</h4>
                <div className="modern-about-card-line"></div>
                <p>Rigorous academics and innovation-driven teaching that build strong foundations for lifelong success.</p>
              </div>
              <div className="modern-about-card">
                <div className="modern-about-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <h4>Character &<br/>Confidence</h4>
                <div className="modern-about-card-line"></div>
                <p>Values, leadership, and life skills that nurture integrity, resilience, and self-belief.</p>
              </div>
              <div className="modern-about-card">
                <div className="modern-about-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </div>
                <h4>Future-Ready<br/>Learning</h4>
                <div className="modern-about-card-line"></div>
                <p>Technology, creativity, and adaptability to empower learners for tomorrow's opportunities.</p>
              </div>
            </div>



          </div>

          {/* Right Content - Orbital Graphic */}
          <div className="modern-about-orbit">
            <div className="modern-about-orbit-wrapper">
              <div className="modern-about-orbit-ring">
                {/* 4 small icons */}
                <div className="orbit-node icon icon-top-left">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                </div>
                <div className="orbit-node icon icon-top-right">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H15"></path><path d="M10 9L6.5 20.4a2 2 0 0 0 1.9 2.6h7.2a2 2 0 0 0 1.9-2.6L14 9"></path><path d="M10 9V3"></path><path d="M14 9V3"></path><path d="M7 16H17"></path></svg>
                </div>
                <div className="orbit-node icon icon-bottom-left">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div className="orbit-node icon icon-bottom-right">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
              </div>

              {/* 4 Photos */}
              <div className="orbit-node photo node-top">
                <img src="/assets/umbrella/student_reading.jpg" alt="Student Reading" />
              </div>
              <div className="orbit-node photo node-left">
                <img src="/assets/umbrella/student_writing.jpg" alt="Student Writing" />
              </div>
              <div className="orbit-node photo node-right">
                <img src="/assets/umbrella/student_laptop.jpg" alt="Student on Laptop" />
              </div>
              <div className="orbit-node photo node-bottom">
                <img src="/assets/umbrella/student_army.jpg" alt="Defense Academy Cadet" />
              </div>

              {/* Center Logo */}
              <div className="modern-about-orbit-center">
                <img src="/assets/umbrella/SRI BASARA.png" alt="Sri Basara Educational Society" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export const ContactMapSection = ({ id, address, phone, email, mapUrl }) => {
  return (
    <section id={id} className="inst-contact-map">
      <Container>
        <div className="inst-section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2><span style={{ borderBottom: '3px solid var(--color-accent)' }}>Contact</span> Us</h2>
        </div>
        <div className="inst-contact-map-grid">
          <div className="inst-contact-map-left">
            <iframe 
              src={mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="inst-contact-details">
            {address && (
              <div className="inst-contact-card">
                <div className="inst-contact-card-icon bg-red">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="inst-contact-card-content">
                  <h4>ADDRESS</h4>
                  <p>{address}</p>
                </div>
              </div>
            )}
            
            {phone && (
              <div className="inst-contact-card">
                <div className="inst-contact-card-icon bg-green">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="inst-contact-card-content">
                  <h4>PHONE NO</h4>
                  <p>{phone}</p>
                </div>
              </div>
            )}

            {email && (
              <div className="inst-contact-card">
                <div className="inst-contact-card-icon bg-yellow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="inst-contact-card-content">
                  <h4>EMAIL ID</h4>
                  <p>{email}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
