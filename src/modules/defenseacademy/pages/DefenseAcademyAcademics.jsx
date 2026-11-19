import React from 'react';
import { Link } from 'react-router-dom';
import './defense-pages.css';

const ACADEMIC_SUBJECTS = [
  {
    badge: 'Flagship Program',
    title: 'NDA (National Defence Academy)',
    desc: 'Intensive coaching for UPSC NDA written examination covering Army, Navy, and Air Force wings with continuous mock testing, time management drills, and foundational conceptual mastery.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    points: [
      'Comprehensive coverage of NDA Mathematics & General Ability Test (GAT)',
      'Previous 15 years chapter-wise question paper solving',
      'Daily 2-hour speed problem-solving sessions',
      'Bilingual doubt resolution & personal mentorship'
    ]
  },
  {
    badge: 'Armed Forces Entry',
    title: 'Defence Entrance Examinations',
    desc: 'Systematic coaching for CDS (Combined Defence Services), AFCAT (Air Force Common Admission Test), Indian Coast Guard (Navik GD/DB), SSC GD Constable, and Paramilitary forces.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    points: [
      'Specialized curriculum for CDS, AFCAT, Coast Guard & CAPF entries',
      'Weekly full-length computer-based & pen-paper mock tests',
      'Physical efficiency test (PET) alignment with written test syllabus',
      'Targeted strategies for Indian Army Agniveer & technical trades'
    ]
  },
  {
    badge: 'Core Subject',
    title: 'General Ability',
    desc: 'Deep conceptual preparation in History, Geography, Indian Polity, General Science (Physics, Chemistry, Biology), and Defence Awareness according to UPSC and defence exam blueprints.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    points: [
      'Indian history, freedom movement, and military history milestones',
      'Physical & world geography with interactive map pointing',
      'Indian Constitution, governance, and national security mechanisms',
      'Practical everyday science applications and formula sheets'
    ]
  },
  {
    badge: 'Core Subject',
    title: 'Mathematics',
    desc: 'Focus on higher analytical thinking, shortcut calculations, trigonometry, calculus, algebra, statistics, coordinate geometry, and vector algebra designed specifically for NDA & technical entries.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    ),
    points: [
      '300-mark NDA syllabus mastery with speed shortcut techniques',
      'Daily formula revision and timed sectional mock drills',
      'Individual attention for non-maths background candidates',
      'Geometry, Matrices, Trigonometry, and Calculus masterclasses'
    ]
  },
  {
    badge: 'Language & Communication',
    title: 'English',
    desc: 'Strengthening vocabulary, grammar fundamentals, reading comprehension, idioms, error spotting, sentence sequencing, and précis writing to maximize scores in written exams and SSB interviews.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
    points: [
      'Extensive vocabulary builder with root words, synonyms & antonyms',
      'Rules of English grammar, spot the error, and sentence improvement',
      'Spoken English and pronunciation drills for confidence building',
      'Reading comprehension speed reading and analytical interpretation'
    ]
  },
  {
    badge: 'Dynamic Scoring',
    title: 'Current Affairs',
    desc: 'Daily curated news analysis, national security updates, international geopolitics, defense acquisitions, military exercises, awards, and monthly current affairs compilations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
      </svg>
    ),
    points: [
      'Daily 45-minute defence & national news briefing',
      'Monthly Current Affairs digest booklet provided to all cadets',
      'Weekly current affairs quiz competitions with prizes',
      'Focus on multilateral summits, military exercises, and weapon systems'
    ]
  },
  {
    badge: 'Officer Selection',
    title: 'SSB Preparation',
    desc: 'Comprehensive 5-day Service Selection Board conditioning covering Screening (OIR & PPDT), Psychology battery (TAT, WAT, SRT, SD), GTO ground obstacles, and personal interview simulations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    points: [
      'Officer-Like Qualities (OLQ) development by experienced defence mentors',
      'Outdoor GTO ground obstacle simulation and Command Tasks',
      'Psychology dossier evaluation and customized feedback',
      'One-on-one mock interview sessions with video playback review'
    ]
  },
  {
    badge: 'Endurance & Fitness',
    title: 'Physical Training',
    desc: 'Daily military-style physical training, cross-country runs, stamina building, calisthenics, obstacle clearance, push-ups, chin-ups, rope climbing, and physical standard verification.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.45 1-1 1s-1-.45-1-1v-2.34"></path>
        <path d="M14 14.66V17c0 .55.45 1 1 1s1-.45 1-1v-2.34"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path>
      </svg>
    ),
    points: [
      'Morning 5:30 AM conditioning and 1600-meter timed sprint drills',
      'Standard obstacle course navigation: 9-foot ditch, zigzag balance, ramp',
      'Strength development: chin-ups, push-ups, sit-ups, and rope climb',
      'Regular physical efficiency assessments aligned to Indian Armed Forces tests'
    ]
  }
];

export default function DefenseAcademyAcademics() {
  return (
    <>
      {/* 1. Inner Hero */}
      <section className="da-inner-hero">
        <div className="da-inner-hero-container">
          <span className="da-inner-hero-tag">DEFENCE ACADEMY ACADEMICS</span>
          <h1 className="da-inner-hero-title">Rigorous Coaching & Officer Preparation</h1>
          <p className="da-inner-hero-desc">
            Equipping aspiring defenders with unmatched academic mastery, analytical sharpness, and disciplined physical stamina to triumph in NDA, CDS, AFCAT, Coast Guard, and Armed Forces entrance exams.
          </p>
        </div>
      </section>

      {/* 2. Academics Subjects Grid */}
      <section className="da-page-section">
        <div className="da-page-container">
          <div className="da-section-header">
            <span className="da-section-subtitle">Academic Curriculum</span>
            <h2 className="da-section-title">8 Pillars of Academic & Physical Excellence</h2>
            <p className="da-section-desc">
              Structured daily curriculum led by experienced academic masters and defence mentors, combining theoretical depth with competitive exam speed and tactical discipline.
            </p>
          </div>

          <div className="da-academics-grid">
            {ACADEMIC_SUBJECTS.map((subject, idx) => (
              <div key={idx} className="da-academic-card">
                <div className="da-academic-card-header">
                  <div className="da-academic-icon-wrap">
                    {subject.icon}
                  </div>
                  <span className="da-academic-badge">{subject.badge}</span>
                </div>
                <h3 className="da-academic-title">{subject.title}</h3>
                <p className="da-academic-desc">{subject.desc}</p>
                <ul className="da-academic-points">
                  {subject.points.map((pt, pIdx) => (
                    <li key={pIdx} className="da-academic-point-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Daily Schedule Banner */}
          <div className="da-cta-banner">
            <h3 className="da-cta-title">A Day in the Life of a Basara Cadet</h3>
            <p className="da-cta-desc">
              05:30 AM PT & Running &nbsp;|&nbsp; 08:30 AM Academic Classrooms &nbsp;|&nbsp; 01:30 PM Study & Doubt Clearing &nbsp;|&nbsp; 04:30 PM Obstacles & Sports &nbsp;|&nbsp; 07:30 PM Guided Study & Current Affairs
            </p>
            <div className="da-cta-btns">
              <Link to="/defenseacademy/admissions" className="da-btn-primary">
                Enquire for Batch Admissions
              </Link>
              <Link to="/defenseacademy/facilities" className="da-btn-secondary">
                Explore Facilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
