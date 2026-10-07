import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../common/components/Container';
import Section from '../../common/components/Section';
import { ModernAboutSection } from '../../common/components/InstitutionComponents';
import ChairmanMessage from '../../common/components/ChairmanMessage';
import Button from '../../common/components/Button';
import './umbrella.css';

export default function UmbrellaHome() {
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Re-load video when switching between mobile/desktop
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (showVideo) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [isMobile]);

  const videoSrc = isMobile
    ? '/assets/umbrella/basara-mobile.mp4'
    : '/assets/umbrella/basara.mp4';

  return (
    <>
      {/* Institutional Hero */}
      <section className="umbrella-hero">
        {/* Solid dark background (visible during intro) */}
        <div className="umbrella-hero-solid"></div>

        {/* Video background (fades in after 2s) */}
        <video
          ref={videoRef}
          className={`umbrella-hero-bg umbrella-hero-video ${showVideo ? 'visible' : ''}`}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/umbrella/college.jpg"
        />

        {/* Dark overlay — only needed during video if you want slight dimming */}
        <div className={`umbrella-hero-video-overlay ${showVideo ? 'visible' : ''}`}></div>

        <div className={`umbrella-hero-content ${showVideo ? 'hero-hidden' : ''}`}>
          <span className="umbrella-hero-tagline">Welcome to</span>
          <h1 className="umbrella-hero-title">Sri Basara Educational Institutions</h1>
          <p className="umbrella-hero-description">
            A unified educational ecosystem fostering academic excellence, holistic development, and career readiness in Tagarapuvalasa.
          </p>
          <div className="hero-actions">
            <Button variant="primary" theme="umbrella" href="#institutions">
              Explore Institutions
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ModernAboutSection />

      {/* Chairman Message */}
      <ChairmanMessage />

      {/* Our Institutions Section */}
      <Section id="institutions">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>Our Institutions</h2>
          <p>Discover our specialized educational pathways designed to nurture potential at every stage.</p>
        </div>
        
        <div className="institutions-grid">
          
          {/* Degree College (VERIFIED) */}
          <article className="institution-card card-degree">
            <div className="inst-card-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '1rem' }}>
              <img src="/assets/umbrella/college-1.jpeg" alt="Degree College Campus" style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" />
            </div>
            <div className="inst-card-content">
              <h3 className="inst-card-title">Sri Basara Degree College</h3>
              <p className="inst-card-desc">Offering comprehensive undergraduate programs in Sciences, Commerce, and Arts with state-of-the-art laboratory facilities and experienced faculty.</p>
              <Link to="/degree" className="inst-card-link">
                Explore Degree College
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>
          </article>

          {/* Junior College */}
          <article id="junior" className="institution-card card-junior">
            <div className="inst-card-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '1rem' }}>
              <img src="/assets/juniorcollege/basara junior.png" alt="Junior College Overview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" />
            </div>
            <div className="inst-card-content">
              <h3 className="inst-card-title">Sri Basara Junior College</h3>
              <p className="inst-card-desc">Focused intermediate education preparing students for higher academic pursuits and competitive examinations.</p>
              <span className="inst-card-placeholder">Information Coming Soon</span>
            </div>
          </article>

          {/* International School */}
          <article id="school" className="institution-card card-school">
            <div className="inst-card-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '1rem' }}>
              <img src="/assets/school/collegge.png" alt="International School Campus" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div className="inst-card-content">
              <h3 className="inst-card-title">Sri Basara Leads School with International Standards</h3>
              <p className="inst-card-desc">A nurturing environment laying the critical foundation for lifelong learning and personal development.</p>
              <Link to="/school" className="inst-card-link">
                Explore International School
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>
          </article>

          {/* Defence Academy */}
          <article id="defence" className="institution-card card-defence">
            <div className="inst-card-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '1rem' }}>
              <img src="/assets/defenseacademy/basara defense academy.png" alt="Defence Academy Overview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div className="inst-card-content">
              <h3 className="inst-card-title">Sri Basara Defence Academy</h3>
              <p className="inst-card-desc">Structured, disciplined training programs preparing candidates for prestigious careers in the defense services.</p>
              <Link to="/defenseacademy" className="inst-card-link">
                Explore Defence Academy
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>
          </article>

        </div>
      </Section>

      {/* Updates & Campus Section */}
      <Section id="campus" bg="surface">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>News, Updates & Campus</h2>
          <p>Discover our latest achievements, admissions updates, and modern infrastructure.</p>
        </div>
        
        <div className="campus-gallery">
          <div className="campus-img-wrap">
            <img src="/assets/umbrella/college-2.jpeg" alt="Admissions Flyer" loading="lazy" />
            <div className="campus-caption">Admissions & Accolades</div>
          </div>
          <div className="campus-img-wrap">
            <img src="/assets/umbrella/college-3.jpeg" alt="Results Banner" loading="lazy" />
            <div className="campus-caption">Outstanding Results</div>
          </div>
          <div className="campus-img-wrap">
            <img src="/assets/umbrella/college.jpg" alt="Institutional Architecture" loading="lazy" />
            <div className="campus-caption">Main Campus Building</div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="primary">
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-white)' }}>Begin Your Journey With Sri Basara</h2>
          <p style={{ marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', color: 'var(--color-white)' }}>
            Join an educational ecosystem dedicated to shaping the leaders of tomorrow.
          </p>
          <Button variant="primary" theme="umbrella" href="/degree/admissions">
            Degree Admissions Enquiry
          </Button>
        </div>
      </Section>
    </>
  );
}
