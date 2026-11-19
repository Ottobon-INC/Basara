import React from 'react';
import SchoolCTA from '../components/SchoolCTA';
import './school-pages.css';

const CORE_PILLARS = [
  {
    title: 'Academic & Language Foundations',
    desc: 'Strong subject mastery under CBSE & State curriculum pathways, with dedicated focus on English communication, vocabulary, and reading.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    )
  },
  {
    title: 'AI, Robotics & STEM Lab',
    desc: 'Hands-on learning through robotics kits, coding basics, scientific experiments, and our Makers Space Innovation Hub.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"></rect>
        <circle cx="12" cy="5" r="2"></circle>
        <path d="M12 7v4"></path>
      </svg>
    )
  },
  {
    title: 'IIT-JEE & NEET Foundation',
    desc: 'Early exposure to analytical thinking, mathematical reasoning, mental ability, and competitive examination problem-solving.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    title: 'Sports & Life Skills',
    desc: 'Physical fitness, teamwork, sportsmanship, discipline, moral values, and emotional intelligence through sports and games.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    )
  }
];

export default function SchoolAbout() {
  return (
    <>
      {/* 1. Inner Hero */}
      <section className="school-inner-hero">
        <div className="school-inner-hero-container">
          <span className="school-inner-hero-tag">About Our School</span>
          <h1 className="school-inner-hero-title">Sri Basara Leads International School</h1>
          <p className="school-inner-hero-desc">
            Discover Potential. Develop Excellence. Lead the Future.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(251, 191, 36, 0.18)',
              border: '1px solid #fbbf24',
              color: '#fbbf24',
              padding: '5px 16px',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.08em'
            }}>
              MOTTO: LEARN. LEAD. EXCEL.
            </span>
          </div>
        </div>
      </section>

      {/* 2. Narrative Section */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-narrative-grid">
            <div className="school-narrative-text">
              <span className="school-section-subtitle">Our Philosophy</span>
              <h2>Nurturing Confident Learners & Future Leaders</h2>
              <p>
                <strong>Sri Basara Leads International School</strong> is committed to providing meaningful, child-centred, and future-focused education from Nursery to Grade X under CBSE and State curriculum pathways.
              </p>
              <p>
                We believe that every child is unique and possesses tremendous potential. Our educational approach blends strong academic foundations with modern teaching methodologies, technology-enabled learning, AI, Robotics, and value-based character education.
              </p>
              <p style={{ fontStyle: 'italic', color: 'var(--color-primary, #302F7F)', fontWeight: 600 }}>
                "We do not simply prepare students for examinations; we prepare them for life."
              </p>
            </div>
            <div className="school-narrative-img-wrap">
              <img src="/assets/school/collegge.png" alt="Sri Basara Leads International School Campus" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission (Clean 2-Column Grid) */}
      <section className="school-page-section">
        <div className="school-page-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {/* Vision Card */}
            <div style={{
              background: 'linear-gradient(135deg, #302F7F 0%, #1e1b4b 100%)',
              borderRadius: '12px',
              padding: '32px 28px',
              color: '#ffffff',
              borderLeft: '5px solid var(--color-accent, #B95308)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <span style={{
                color: '#fbbf24',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '8px'
              }}>
                Our Vision
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading, serif)', fontSize: '22px', fontWeight: 700, margin: '0 0 12px 0', color: '#fff' }}>
                Inspire. Innovate. Lead.
              </h3>
              <p style={{ fontSize: '0.98rem', lineHeight: '1.65', color: '#f1f5f9', margin: 0 }}>
                To develop Sri Basara Leads International School into a centre of excellence where every child is inspired to learn, empowered to innovate, encouraged to lead, and prepared to succeed in a rapidly changing world.
              </p>
            </div>

            {/* Mission Card */}
            <div style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '32px 28px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <span style={{
                color: 'var(--color-accent, #B95308)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '8px'
              }}>
                Our Mission
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading, serif)', fontSize: '22px', fontWeight: 700, margin: '0 0 12px 0', color: 'var(--color-primary, #302F7F)' }}>
                Holistic Growth for Every Learner
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Child-centred, activity-based learning from Nursery to Grade X',
                  'Integration of AI, Robotics, Coding, and Makers Space STEM education',
                  'Early IIT-JEE & NEET analytical foundation and mental ability',
                  'Discipline, leadership, moral values, and sportsmanship'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.93rem', color: '#334155' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent, #B95308)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Pillars of Learning (4 Concise Cards) */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-section-header">
            <span className="school-section-subtitle">Core Pillars</span>
            <h2 className="school-section-title">Our Learning Approach</h2>
            <p className="school-section-desc">
              Four foundational pillars preparing students with knowledge, skills, values, and opportunities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '22px' }}>
            {CORE_PILLARS.map((pillar, idx) => (
              <div key={idx} className="school-feature-box" style={{ padding: '24px 22px' }}>
                <div className="school-feature-icon" style={{ marginBottom: '14px', width: '44px', height: '44px' }}>
                  {pillar.icon}
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{pillar.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.55', margin: 0 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Message From The Management */}
      <section className="school-page-section">
        <div className="school-page-container">
          <div className="school-section-header" style={{ marginBottom: '35px' }}>
            <span className="school-section-subtitle">Leadership</span>
            <h2 className="school-section-title">Message From The Management</h2>
          </div>

          <div className="school-narrative-grid" style={{ alignItems: 'center' }}>
            <div className="school-narrative-img-wrap" style={{ textAlign: 'center', maxWidth: '320px', margin: '0 auto' }}>
              <img src="/assets/degree/11.jpeg" alt="Shri Pudi Ramesh Garu, Chairman" style={{ maxHeight: '320px', objectFit: 'contain', background: '#f8fafc' }} loading="lazy" />
            </div>
            <div className="school-narrative-text">
              <h2 style={{ fontSize: '24px', marginBottom: '6px' }}>Shri Pudi Ramesh Garu</h2>
              <p style={{ color: 'var(--color-accent, #B95308)', fontWeight: 600, marginTop: '0', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Chairman, Sri Basara Educational Institutions
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                "At Sri Basara Leads International School, our commitment is to provide every child with an atmosphere where dreams take flight and values anchor character. We believe true education does not merely train students to pass exams, but inspires them to face the future with confidence, wisdom, and moral courage."
              </p>
              <p style={{ fontSize: '0.92rem', color: '#64748b', fontStyle: 'italic', margin: 0 }}>
                Every Child Has Potential. Every Learner Deserves Excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SchoolCTA />
    </>
  );
}
