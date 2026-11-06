import React from 'react';
import SchoolCTA from '../components/SchoolCTA';
import './school-pages.css';

const ACADEMIC_LEVELS = [
  {
    grade: 'Pre-Primary / Kindergarten',
    subtitle: 'Nursery, LKG & UKG',
    description: 'Foundational learning focused on sensory exploration, language acquisition, social confidence, and joyful creative play.',
    features: [
      'Play-way and activity-based learning approach',
      'Phonics, early vocabulary, and storytelling',
      'Numeracy concepts through manipulatives and games',
      'Color, craft, music, and motor skill enhancement',
      'Caring and attentive teacher-to-student ratio'
    ],
    highlight: 'Nurturing curiosity from day one'
  },
  {
    grade: 'Primary School',
    subtitle: 'Grades 1 to 5',
    description: 'Building strong fundamental competencies across literacy, numeracy, environmental sciences, and creative expression.',
    features: [
      'Comprehensive CBSE-aligned curriculum',
      'English, Mathematics, EVS / General Science & Social Studies',
      'Second Language (Telugu / Hindi)',
      'Smart classroom digital interactive sessions',
      'Introduction to computer basics and library reading habits'
    ],
    highlight: 'Solid foundation for independent thinking'
  },
  {
    grade: 'Middle School',
    subtitle: 'Grades 6 to 8',
    description: 'Deepening analytical understanding, scientific inquiry, critical thinking, and disciplined study habits.',
    features: [
      'Segregated sciences: Physics, Chemistry & Biology laboratory exposure',
      'Advanced Mathematics with problem-solving focus',
      'Social Sciences (History, Civics, Geography)',
      'Information & Communication Technology (ICT) and coding basics',
      'Early foundation coaching for Science & Math Olympiads'
    ],
    highlight: 'Fostering analytical and inquiry skills'
  },
  {
    grade: 'Secondary School',
    subtitle: 'Grades 9 & 10',
    description: 'Rigorous academic preparation for Board examinations coupled with specialized competitive foundation coaching.',
    features: [
      'Targeted CBSE board examination preparation and syllabus mastery',
      'Comprehensive laboratory practicals and project work',
      'Integrated foundation coaching for IIT-JEE, NEET, and NTSE',
      'Regular mock tests, continuous performance analysis, and remedial mentoring',
      'Career orientation, guidance, and stress-management counseling'
    ],
    highlight: 'Excellence in board & competitive examinations'
  }
];

export default function SchoolCourses() {
  return (
    <>
      {/* Inner Hero */}
      <section className="school-inner-hero">
        <div className="school-inner-hero-container">
          <span className="school-inner-hero-tag">Academic Programs</span>
          <h1 className="school-inner-hero-title">Curriculum & Courses</h1>
          <p className="school-inner-hero-desc">
            A progressive, CBSE-aligned academic pathway nurturing every student from early childhood through secondary graduation.
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
              Holistic growth encompasses creative arts, physical agility, scientific innovation, and interpersonal confidence.
            </p>
          </div>

          <div className="school-cards-grid-3">
            <div className="school-feature-box">
              <div className="school-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <h3>STEM & Robotics</h3>
              <p>Hands-on experimentation introducing robotics, logical coding concepts, and real-world science models.</p>
            </div>

            <div className="school-feature-box">
              <div className="school-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg>
              </div>
              <h3>Sports & Physical Fitness</h3>
              <p>Daily physical education, yoga, athletics, cricket, football, and martial arts led by experienced coaches.</p>
            </div>

            <div className="school-feature-box">
              <div className="school-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3>Public Speaking & Arts</h3>
              <p>Debates, elocution, theater, drawing, music, and dance programs fostering expressive eloquence.</p>
            </div>
          </div>
        </div>
      </section>

      <SchoolCTA />
    </>
  );
}

