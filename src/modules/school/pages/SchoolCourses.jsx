import React from 'react';
import SchoolCTA from '../components/SchoolCTA';
import './school-pages.css';

const ACADEMIC_LEVELS = [
  {
    grade: 'Pre-Primary / Kindergarten',
    subtitle: 'Nursery, LKG & UKG',
    description: 'Foundational learning focused on sensory exploration, phonics, early vocabulary, arithmetic readiness, and joyful play.',
    features: [
      'Child-centred, play-way and activity-based learning approach',
      'English phonics, vocabulary building, and storytelling',
      'Arithmetic & mental ability through manipulatives and games',
      'Color, craft, motor skills, and sensory discovery',
      'Safe, inclusive, joyful, and supportive learning environment'
    ],
    highlight: 'Nurturing curiosity & individual talent from day one'
  },
  {
    grade: 'Primary School',
    subtitle: 'Grades 1 to 5',
    description: 'Establishing solid foundations across languages, mathematics, environmental science, and creative critical thinking.',
    features: [
      'CBSE and State curriculum pathways',
      'English Language Development: vocabulary, writing, comprehension & spoken fluency',
      'Arithmetic & mental ability: speed, numerical logic, and reasoning',
      'Hands-on science experiments and introduction to coding & robotics',
      'Smart classrooms, digital learning resources, and library reading sessions'
    ],
    highlight: 'Building strong foundations in literacy, logic & science'
  },
  {
    grade: 'Middle School',
    subtitle: 'Grades 6 to 8',
    description: 'Deepening analytical inquiry, conceptual understanding, competitive foundation, and disciplined study habits.',
    features: [
      'Early IIT-JEE & NEET foundation coaching and analytical reasoning',
      'AI, Robotics, Coding & Makers Space Lab projects',
      'Segregated sciences: Physics, Chemistry & Biology laboratory practice',
      'Arithmetic & mental ability: competitive examination problem-solving',
      'Life skills, communication skills, personality development & sports'
    ],
    highlight: 'Fostering analytical thinking, AI innovation & inquiry'
  },
  {
    grade: 'Secondary School',
    subtitle: 'Grades 9 & 10',
    description: 'Rigorous Board examination preparation coupled with advanced IIT-JEE / NEET foundation coaching and career readiness.',
    features: [
      'Targeted CBSE and State Board syllabus mastery and high scoring strategies',
      'Intensive IIT-JEE & NEET foundation coaching by expert faculty',
      'Hands-on STEM and science laboratory practicals and project work',
      'Continuous assessments, mock test series, and personalized mentoring',
      'Discipline, leadership development, and preparation for life beyond school'
    ],
    highlight: 'Board excellence, competitive readiness & leadership'
  }
];

export default function SchoolCourses() {
  return (
    <>
      {/* Inner Hero */}
      <section className="school-inner-hero">
        <div className="school-inner-hero-container">
          <span className="school-inner-hero-tag">SRI BASARA LEADS INTERNATIONAL SCHOOL</span>
          <h1 className="school-inner-hero-title">Academic Programs (Nursery to Grade X)</h1>
          <p className="school-inner-hero-desc">
            Discover Potential. Develop Excellence. Lead the Future. — CBSE & State curriculum pathways integrating AI, Robotics, STEM, and IIT-JEE/NEET foundation.
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-section-header">
            <span className="school-section-subtitle">Academic Structure</span>
            <h2 className="school-section-title">Our Learning Pathways</h2>
            <p className="school-section-desc">
              Carefully structured stages that evolve alongside your child's cognitive, emotional, and social development.
            </p>
          </div>

          <div className="school-cards-grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))' }}>
            {ACADEMIC_LEVELS.map((level, idx) => (
              <div key={idx} className="school-feature-box">
                <div className="school-feature-icon" style={{ backgroundColor: 'rgba(185, 83, 8, 0.1)', color: 'var(--color-accent, #B95308)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                </div>
                <h3>{level.grade}</h3>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-accent, #B95308)', marginBottom: '0.75rem', display: 'block' }}>
                  {level.subtitle}
                </span>
                <p>{level.description}</p>
                <ul className="school-feature-list">
                  {level.features.map((item, fIdx) => (
                    <li key={fIdx}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holistic & Co-Curricular Enrichment */}
      <section className="school-page-section">
        <div className="school-page-container">
          <div className="school-section-header">
            <span className="school-section-subtitle">Beyond Textbooks</span>
            <h2 className="school-section-title">Co-Curricular Enrichment Programs</h2>
            <p className="school-section-desc">
              Holistic growth encompasses AI innovation, physical agility, competitive reasoning, and interpersonal confidence.
            </p>
          </div>

          <div className="school-cards-grid-3">
            <div className="school-feature-box">
              <div className="school-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path></svg>
              </div>
              <h3>AI, Robotics & Makers Space</h3>
              <p>Hands-on learning through robotics kits, coding, scientific experiments, and maker innovation projects.</p>
            </div>

            <div className="school-feature-box">
              <div className="school-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg>
              </div>
              <h3>Sports & Physical Education</h3>
              <p>Encouraging physical fitness, teamwork, discipline, sportsmanship, and leadership through daily sports, cricket, and yoga.</p>
            </div>

            <div className="school-feature-box">
              <div className="school-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
              </div>
              <h3>Life Skills & Personality Development</h3>
              <p>Developing confidence, communication skills, emotional intelligence, creativity, collaboration, and social responsibility.</p>
            </div>
          </div>
        </div>
      </section>

      <SchoolCTA />
    </>
  );
}
