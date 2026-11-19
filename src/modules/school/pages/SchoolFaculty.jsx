import React from 'react';
import SchoolCTA from '../components/SchoolCTA';
import './school-pages.css';

const DEPARTMENTS = [
  {
    dept: 'Mathematics & Computing',
    desc: 'Passionate educators focusing on analytical reasoning, Vedic math techniques, logical problem-solving, and computer coding fundamentals.',
    teachers: ['Advanced Math Mentors', 'Foundation Olympiad Trainers', 'ICT & Robotics Specialists']
  },
  {
    dept: 'Sciences (Physics, Chemistry, Biology)',
    desc: 'Experienced science masters providing experiential laboratory guidance, curiosity-driven demonstrations, and environmental education.',
    teachers: ['Physical Sciences Faculty', 'Biological Sciences Faculty', 'Lab Demonstrators']
  },
  {
    dept: 'Languages & Literature',
    desc: 'Dedicated linguists fostering reading fluencies, grammatical accuracy, creative writing, and public elocution in English, Telugu, and Hindi.',
    teachers: ['English Communication Mentors', 'Telugu Literary Experts', 'Hindi Language Specialists']
  },
  {
    dept: 'Social Sciences & Humanities',
    desc: 'Engaging storytellers bridging historical knowledge, geographic awareness, democratic civics, and global cultural appreciation.',
    teachers: ['History & Civics Masters', 'Geography Specialists', 'Value Education Teachers']
  },
  {
    dept: 'Physical Education & Athletics',
    desc: 'Certified coaches and trainers guiding physical fitness drills, track events, team sports, yoga postures, and martial arts discipline.',
    teachers: ['Senior Physical Directors (PET)', 'Yoga Instructors', 'Sports Track Mentors']
  },
  {
    dept: 'Fine Arts, Music & Cultural Coaches',
    desc: 'Creative mentors helping children discover their aesthetic imagination through painting, clay sculpting, vocal music, and classical dance.',
    teachers: ['Visual Arts Masters', 'Vocal Music Trainers', 'Dance & Theater Choreographers']
  }
];

export default function SchoolFaculty() {
  return (
    <>
      {/* Inner Hero */}
      <section className="school-inner-hero">
        <div className="school-inner-hero-container">
          <span className="school-inner-hero-tag">Dedicated Educators</span>
          <h1 className="school-inner-hero-title">Our Faculty & Academic Team</h1>
          <p className="school-inner-hero-desc">
            Guided by mentorship, patience, and professional expertise to bring out the finest potential in every student.
          </p>
        </div>
      </section>

      {/* Leadership Overview */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-section-header">
            <span className="school-section-subtitle">Academic Direction</span>
            <h2 className="school-section-title">Committed Academic Leadership</h2>
            <p className="school-section-desc">
              Our faculty members undergo regular pedagogical workshops, CBSE updates, and child psychology seminars to deliver empathetic and modern education.
            </p>
          </div>

          <div className="school-cards-grid-3">
            {DEPARTMENTS.map((d, idx) => (
              <div key={idx} className="school-feature-box">
                <div className="school-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3>{d.dept}</h3>
                <p>{d.desc}</p>
                <ul className="school-feature-list">
                  {d.teachers.map((t, tIdx) => (
                    <li key={tIdx}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy of Mentorship */}
      <section className="school-page-section">
        <div className="school-page-container">
          <div className="school-narrative-grid">
            <div className="school-narrative-text">
              <span className="school-section-subtitle">Student-Centric Pedagogy</span>
              <h2>Nurturing Mentors, Not Just Instructors</h2>
              <p>
                At Sri Basara Leads International School, our teachers act as guides and mentors who understand that each child learns differently. By maintaining an optimal teacher-student ratio, we ensure that no child gets left behind.
              </p>
              <p>
                Special remedial support is offered for students needing reinforcement in foundational subjects, while accelerated challenges are provided for students excelling in specific areas.
              </p>
            </div>
            <div className="school-narrative-img-wrap">
              <img src="/assets/school/academics.png" alt="Sri Basara Academic Excellence" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <SchoolCTA />
    </>
  );
}

