import React from 'react';
import SchoolCTA from '../components/SchoolCTA';
import './school-pages.css';

const MISSION_POINTS = [
  'To provide quality education through child-centred and activity-based learning.',
  'To establish strong foundations in language, mathematics, science, and social studies.',
  'To develop communication skills, creativity, critical thinking, and problem-solving abilities.',
  'To integrate Artificial Intelligence, Robotics, Coding, and STEM education into learning experiences.',
  'To promote discipline, moral values, leadership, and responsible behaviour.',
  'To identify and encourage individual talents and learning abilities.',
  'To provide opportunities in sports, arts, cultural activities, and innovation.',
  'To create a safe, inclusive, joyful, and supportive learning environment.',
  'To develop environmentally conscious and socially responsible citizens.',
  'To establish strong partnerships among parents, teachers, and the institution.'
];

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
        <line x1="8" y1="16" x2="8" y2="16"></line>
        <line x1="16" y1="16" x2="16" y2="16"></line>
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

const ENVIRONMENT_FEATURES = [
  {
    title: 'Smart Classrooms & Digital Resources',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    )
  },
  {
    title: 'Well-Planned Academic Programmes',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
    )
  },
  {
    title: 'Science & Computer Learning Facilities',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>
    )
  },
  {
    title: 'Makers Space Lab & Innovation Hub',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    )
  },
  {
    title: 'Robotics & Coding Activities',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path></svg>
    )
  },
  {
    title: 'Sports & Extracurricular Activities',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path></svg>
    )
  },
  {
    title: 'Dedicated & Qualified Teaching Faculty',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    )
  },
  {
    title: 'Individual Student Mentoring & Monitoring',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    )
  }
];

export default function SchoolAbout() {
  return (
    <>
      {/* Inner Hero */}
      <section className="school-inner-hero">
        <div className="school-inner-hero-container">
          <span className="school-inner-hero-tag">SRI BASARA LEADS INTERNATIONAL SCHOOL</span>
          <h1 className="school-inner-hero-title">Discover Potential. Develop Excellence. Lead the Future.</h1>
          <p className="school-inner-hero-desc">
            Meaningful, child-centred, and future-focused education from Nursery to Grade X — preparing learners for life.
          </p>
          <div style={{ marginTop: '1.25rem' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(251, 191, 36, 0.18)',
              border: '1px solid #fbbf24',
              color: '#fbbf24',
              padding: '6px 18px',
              borderRadius: '25px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.08em'
            }}>
              MOTTO: LEARN. LEAD. EXCEL.
            </span>
          </div>
        </div>
      </section>

      {/* About Us Narrative */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-narrative-grid">
            <div className="school-narrative-text">
              <span className="school-section-subtitle">About Us</span>
              <h2>Nurturing Confident Learners & Responsible Global Citizens</h2>
              <p>
                <strong>Sri Basara Leads International School</strong> is committed to providing meaningful, child-centred, and future-focused education from Nursery to Grade X.
              </p>
              <p>
                We believe that every child is unique and possesses tremendous potential. Our responsibility is to recognise that potential, nurture individual talents, and create opportunities for every learner to grow academically, socially, emotionally, physically, and creatively.
              </p>
              <p>
                Our educational approach blends strong academic foundations with modern teaching methodologies, technology-enabled learning, innovative activities, and value-based education.
              </p>
              <p>
                With a focus on conceptual understanding, communication skills, creativity, critical thinking, and character development, we strive to prepare students to become confident learners and responsible global citizens.
              </p>
              <p>
                Our school follows <strong>CBSE and State curriculum pathways</strong>, providing a supportive learning environment that encourages students to explore, question, create, and achieve.
              </p>
            </div>
            <div className="school-narrative-img-wrap">
              <img src="/assets/school/collegge.png" alt="Sri Basara Leads International School Campus" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="school-page-section">
        <div className="school-page-container">
          {/* Vision Featured Card */}
          <div className="school-vision-box">
            <span className="school-vision-tag">Our Vision</span>
            <h2 className="school-vision-title">Inspire to Learn. Empower to Innovate. Lead to Succeed.</h2>
            <p className="school-vision-text">
              To develop Sri Basara Leads International School into a centre of excellence in school education, where every child is inspired to learn, empowered to innovate, encouraged to lead, and prepared to succeed in a rapidly changing world.
            </p>
            <p className="school-vision-subtext">
              We envision nurturing a generation of knowledgeable, confident, disciplined, compassionate, and innovative individuals who can make a positive difference in society.
            </p>
          </div>

          {/* Mission Section */}
          <div className="school-section-header" style={{ marginBottom: '35px' }}>
            <span className="school-section-subtitle">Guiding Purpose</span>
            <h2 className="school-section-title">Our Mission</h2>
            <p className="school-section-desc">
              Ten actionable commitments that guide our daily pedagogy, student mentorship, and school culture.
            </p>
          </div>

          <div className="school-mission-grid">
            {MISSION_POINTS.map((point, idx) => (
              <div key={idx} className="school-mission-item">
                <div className="school-mission-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="school-mission-text">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Learning Approach (7 Pillars) */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-section-header">
            <span className="school-section-subtitle">Holistic Framework</span>
            <h2 className="school-section-title">Our Unique Learning Approach</h2>
            <p className="school-section-desc">
              A comprehensive 7-pillar educational model designed to build balanced intellectual, analytical, and personal excellence.
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

      {/* Our Learning Environment (8 Key Features) */}
      <section className="school-page-section">
        <div className="school-page-container">
          <div className="school-section-header">
            <span className="school-section-subtitle">World-Class Infrastructure</span>
            <h2 className="school-section-title">Our Learning Environment</h2>
            <p className="school-section-desc">
              We strive to provide a stimulating and supportive educational ecosystem equipped with modern facilities for every learner.
            </p>
          </div>

          <div className="school-env-grid">
            {ENVIRONMENT_FEATURES.map((feat, idx) => (
              <div key={idx} className="school-env-card">
                <div className="school-env-icon">{feat.icon}</div>
                <h4 className="school-env-title">{feat.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment & Motto Block */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-commitment-block">
            <span className="school-section-subtitle">Our Solemn Commitment</span>
            <h2 className="school-section-title" style={{ marginBottom: '16px' }}>Preparing Learners for Life</h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.75', maxWidth: '800px', margin: '0 auto' }}>
              At <strong>Sri Basara Leads International School</strong>, we believe that education is a journey of discovering possibilities and transforming potential into achievement. We are committed to providing every child with the right knowledge, skills, values, guidance, and opportunities to build a successful and meaningful future.
            </p>

            <div className="school-commitment-quote">
              "We do not simply prepare students for examinations; <span>we prepare them for life.</span>"
            </div>

            <div className="school-motto-banner">
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#cbd5e1' }}>Our School Motto</span>
              <div className="school-motto-main">LEARN. LEAD. EXCEL.</div>
              <div className="school-motto-sub">Every Child Has Potential. Every Learner Deserves Excellence.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="school-page-section">
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
                "At Sri Basara Leads International School, our commitment is to provide every child with an atmosphere where dreams take flight and values anchor character. We believe that true education does not merely train students to pass exams, but inspires them to face the future with confidence, wisdom, and moral courage."
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
