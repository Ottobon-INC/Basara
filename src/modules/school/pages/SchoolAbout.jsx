import React from 'react';
import SchoolCTA from '../components/SchoolCTA';
import './school-pages.css';

const UNIQUE_APPROACHES = [
  {
    num: '01',
    title: 'Academic Excellence',
    desc: 'Strong subject foundations, effective classroom teaching, regular assessments, and individual academic support.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    )
  },
  {
    num: '02',
    title: 'English Language Development',
    desc: 'Special focus on vocabulary, communication, reading, writing, comprehension, and spoken English.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    )
  },
  {
    num: '03',
    title: 'IIT-JEE & NEET Foundation',
    desc: 'Early exposure to analytical thinking, mathematical reasoning, scientific concepts, and competitive examination skills.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    num: '04',
    title: 'AI, Robotics & STEM Education',
    desc: 'Hands-on learning through robotics, coding, scientific experiments, maker activities, and innovation projects.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"></rect>
        <circle cx="12" cy="5" r="2"></circle>
        <path d="M12 7v4"></path>
      </svg>
    )
  },
  {
    num: '05',
    title: 'Arithmetic & Mental Ability',
    desc: 'Developing numerical ability, logical reasoning, speed, accuracy, and problem-solving skills.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2"></rect>
        <line x1="8" y1="6" x2="16" y2="6"></line>
        <line x1="16" y1="14" x2="16" y2="18"></line>
        <path d="M16 10h.01"></path>
        <path d="M12 10h.01"></path>
        <path d="M8 10h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M8 14h.01"></path>
        <path d="M12 18h.01"></path>
        <path d="M8 18h.01"></path>
      </svg>
    )
  },
  {
    num: '06',
    title: 'Sports & Physical Education',
    desc: 'Encouraging physical fitness, teamwork, discipline, sportsmanship, and leadership through sports and games.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path>
      </svg>
    )
  },
  {
    num: '07',
    title: 'Life Skills & Personality Development',
    desc: 'Developing confidence, communication, emotional intelligence, creativity, collaboration, and social responsibility.',
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
          <div style={{ marginTop: '1.25rem' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(251, 191, 36, 0.15)',
              border: '1px solid rgba(251, 191, 36, 0.6)',
              borderRadius: '24px',
              padding: '8px 24px',
              textAlign: 'center'
            }}>
              <div style={{
                color: '#fbbf24',
                fontSize: '1rem',
                fontWeight: 800,
                letterSpacing: '0.12em'
              }}>
                LEARN. LEAD. EXCEL.
              </div>
              <div style={{
                color: '#ffffff',
                fontSize: '0.82rem',
                fontWeight: 500,
                fontStyle: 'italic',
                marginTop: '3px',
                opacity: 0.95
              }}>
                Every Child Has Potential. Every Learner Deserves Excellence.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Message From The Management (Placed before Vision & Mission) */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-section-header" style={{ marginBottom: '35px' }}>
            <span className="school-section-subtitle">Leadership</span>
            <h2 className="school-section-title">Message From The Management</h2>
          </div>

          <div className="school-narrative-grid" style={{ alignItems: 'center', gap: '48px' }}>
            <div className="school-narrative-img-wrap" style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(48, 47, 127, 0.12)', height: '100%', minHeight: '340px' }}>
              <img 
                src="/assets/degree/11.jpeg" 
                alt="Shri Pudi Ramesh Garu, Chairman" 
                style={{ width: '100%', height: '100%', minHeight: '340px', maxHeight: '420px', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }} 
                loading="lazy" 
              />
            </div>
            <div className="school-narrative-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontSize: '28px', color: 'var(--color-primary, #302F7F)', marginBottom: '8px', lineHeight: 1.25 }}>Shri Pudi Ramesh Garu</h2>
              <p style={{ color: 'var(--color-accent, #B95308)', fontWeight: 700, marginTop: '0', marginBottom: '1.25rem', fontSize: '1.05rem', letterSpacing: '0.01em' }}>
                Chairman, Sri Basara Educational Institutions
              </p>
              <div style={{ position: 'relative', paddingLeft: '18px', borderLeft: '3px solid var(--color-accent, #B95308)', marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#334155', margin: 0 }}>
                  "At Sri Basara Leads International School, our commitment is to provide every child with an atmosphere where dreams take flight and values anchor character. We believe true education does not merely train students to pass exams, but inspires them to face the future with confidence, wisdom, and moral courage."
                </p>
              </div>
              <p style={{ fontSize: '0.98rem', color: 'var(--color-primary, #302F7F)', fontWeight: 600, fontStyle: 'italic', margin: 0 }}>
                Every Child Has Potential. Every Learner Deserves Excellence.
              </p>
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

      {/* 4. Our Unique Learning Approach (All 7 Pillars) */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-section-header">
            <span className="school-section-subtitle">Holistic Framework</span>
            <h2 className="school-section-title">Our Unique Learning Approach</h2>
            <p className="school-section-desc">
              Seven foundational pillars preparing students with strong academic mastery, analytical thinking, and life skills.
            </p>
          </div>

          <div className="school-approach-grid">
            {UNIQUE_APPROACHES.map((item) => (
              <div key={item.num} className="school-approach-card">
                <div className="school-approach-header">
                  <span className="school-approach-num">{item.num}</span>
                  <div className="school-approach-icon">{item.icon}</div>
                </div>
                <h3 className="school-approach-title">{item.title}</h3>
                <p className="school-approach-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Commitment Section */}
      <section className="school-page-section">
        <div className="school-page-container">
          <div className="school-commitment-block">
            <span className="school-section-subtitle">Our Promise</span>
            <h2 className="school-section-title" style={{ marginBottom: '16px' }}>Our Commitment</h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.75', maxWidth: '820px', margin: '0 auto 14px auto' }}>
              At <strong>Sri Basara Leads International School</strong>, we believe that education is a journey of discovering possibilities and transforming potential into achievement.
            </p>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.75', maxWidth: '820px', margin: '0 auto 20px auto' }}>
              We are committed to providing every child with the right knowledge, skills, values, guidance, and opportunities to build a successful and meaningful future.
            </p>
            <div className="school-commitment-quote" style={{ margin: '15px auto 0 auto' }}>
              "We do not simply prepare students for examinations; <span>we prepare them for life.</span>"
            </div>
          </div>
        </div>
      </section>

      <SchoolCTA />
    </>
  );
}
