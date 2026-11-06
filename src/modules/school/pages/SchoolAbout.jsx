import React from 'react';
import SchoolCTA from '../components/SchoolCTA';
import './school-pages.css';

export default function SchoolAbout() {
  return (
    <>
      {/* Inner Hero */}
      <section className="school-inner-hero">
        <div className="school-inner-hero-container">
          <span className="school-inner-hero-tag">About Our School</span>
          <h1 className="school-inner-hero-title">Sri Basara Leads School</h1>
          <p className="school-inner-hero-desc">
            Empowering curious young minds through international teaching standards, disciplined value systems, and comprehensive holistic education.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-narrative-grid">
            <div className="school-narrative-text">
              <span className="school-section-subtitle">Our Vision & Philosophy</span>
              <h2>Where Every Child's Potential Finds Its Purpose</h2>
              <p>
                Sri Basara Leads School was established with a singular mission: to provide world-class education rooted in traditional values in Tagarapuvalasa and surrounding regions. Under the auspices of Sri Basara Educational Institutions, our school provides an environment where students can flourish intellectually, socially, emotionally, and physically.
              </p>
              <p>
                Our pedagogy blends CBSE-aligned academic rigor with modern, activity-based experiential learning methodologies. We nurture independent thinkers, creative problem solvers, and compassionate future citizens.
              </p>
            </div>
            <div className="school-narrative-img-wrap">
              <img src="/assets/school/collegge.png" alt="Sri Basara Leads School Campus" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="school-page-section">
        <div className="school-page-container">
          <div className="school-section-header">
            <span className="school-section-subtitle">Why Sri Basara</span>
            <h2 className="school-section-title">The Pillars of Our Education</h2>
            <p className="school-section-desc">
              Every aspect of Sri Basara Leads School is purposefully curated to provide a safe, nurturing, and progressive educational haven.
            </p>
          </div>

          <div className="school-cards-grid-3">
            <div className="school-feature-box">
              <div className="school-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </div>
              <h3>Academic Excellence</h3>
              <p>Conceptual learning over rote memorization with digital classrooms, personalized guidance, and regular assessments.</p>
              <ul className="school-feature-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>CBSE Curriculum Framework</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Continuous & Comprehensive Evaluation</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Foundation Coaching for Olympiads</li>
              </ul>
            </div>

            <div className="school-feature-box">
              <div className="school-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>Character & Discipline</h3>
              <p>Instilling moral integrity, cultural pride, and respect through daily assemblies, value education, and community activities.</p>
              <ul className="school-feature-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Moral & Ethical Values</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Leadership & Teamwork Mentoring</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Environmental Consciousness</li>
              </ul>
            </div>

            <div className="school-feature-box">
              <div className="school-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <h3>Holistic Expression</h3>
              <p>Nurturing physical fitness, creative talents, and sportsmanship through diverse sports, cultural arts, and clubs.</p>
              <ul className="school-feature-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Track & Field Athletics</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Music, Dance & Fine Arts</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Robotics & STEM Labs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-section-header">
            <span className="school-section-subtitle">Leadership & Guidance</span>
            <h2 className="school-section-title">Message From The Management</h2>
          </div>

          <div className="school-narrative-grid">
            <div className="school-narrative-img-wrap" style={{ textAlign: 'center' }}>
              <img src="/assets/degree/11.jpeg" alt="Shri Pudi Ramesh Garu, Chairman" style={{ maxHeight: '380px', objectFit: 'contain', background: '#f8fafc' }} loading="lazy" />
            </div>
            <div className="school-narrative-text">
              <h2>Shri Pudi Ramesh Garu</h2>
              <p style={{ color: 'var(--color-accent, #B95308)', fontWeight: 600, marginTop: '-0.5rem', marginBottom: '1rem' }}>
                Chairman, Sri Basara Educational Institutions
              </p>
              <p>
                "At Sri Basara Leads School, our commitment is to provide every child with an atmosphere where dreams take flight and values anchor character. We believe that true education does not merely train students to pass exams, but inspires them to face the future with confidence, wisdom, and moral courage."
              </p>
              <p>
                "We invite parents to partner with us in shaping well-rounded, innovative, and responsible leaders of tomorrow."
              </p>
            </div>
          </div>
        </div>
      </section>

      <SchoolCTA />
    </>
  );
}

