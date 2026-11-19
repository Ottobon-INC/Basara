import React from 'react';
import { Link } from 'react-router-dom';
import './defense-about.css';

// 7 Core Training Pillars
const DEFENCE_APPROACHES = [
  {
    num: '01',
    title: 'Defence Career Orientation',
    desc: 'Comprehensive guidance and career pathway mapping across the Indian Army, Navy, Air Force, Coast Guard, and Paramilitary forces.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
      </svg>
    )
  },
  {
    num: '02',
    title: 'NDA Preparation',
    desc: 'Rigorous academic coaching for National Defence Academy entrance with dedicated focus on Mathematics, General Ability, and English.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    )
  },
  {
    num: '03',
    title: 'Written Examination Preparation',
    desc: 'Systematic coaching for CDS, AFCAT, CAPF, SSC GD, and state police recruitment with regular mock tests and doubt resolution.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )
  },
  {
    num: '04',
    title: 'SSB Orientation',
    desc: 'Personalized mentoring for Service Selection Board (SSB) interviews, Stage-I Screening, Psychology tests, GTO tasks, and personal interview drills.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    num: '05',
    title: 'Physical Fitness',
    desc: 'Structured daily conditioning, endurance drills, obstacle course navigation, stamina building, and physical efficiency assessments.',
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
    num: '06',
    title: 'Personality Development',
    desc: 'Cultivating Officer-Like Qualities (OLQs), communication fluency, situational decision-making, and emotional intelligence under pressure.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <path d="M12 8h.01"></path>
      </svg>
    )
  },
  {
    num: '07',
    title: 'Discipline & Leadership',
    desc: 'Instilling regimental discipline, time management, military drill decorum, teamwork, and an unwavering commitment to serve the nation.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    )
  }
];

// 5 Defence Facilities
const DEFENCE_FACILITIES = [
  {
    tag: 'Fitness Grounds',
    title: 'Physical Training Area',
    desc: 'Fully equipped conditioning ground designed for military calisthenics, rope climbing, chin-up bars, beam balancing, and stamina training supervised by certified trainers.',
    image: '/assets/defenseacademy/basara defnse training.png'
  },
  {
    tag: 'Speed & Stamina',
    title: 'Running Track',
    desc: 'Dedicated athletic running track configured for timed endurance runs (1.6 km / 5 km), sprint conditioning, interval workouts, and aerobic stamina building.',
    image: '/assets/defenseacademy/basara defense running.png'
  },
  {
    tag: 'Strength Conditioning',
    title: 'Fitness Training',
    desc: 'Modern gym facilities equipped with weight machines, free weights, functional strength gear, and tailored body-conditioning regimens for defence candidates.',
    image: '/assets/defenseacademy/basara defense train.png'
  },
  {
    tag: 'Parade & Discipline',
    title: 'Drill Area',
    desc: 'Spacious military parade ground dedicated to squad movements, marching formations, cadence synchronization, salute precision, and ceremonial drill decorum.',
    image: '/assets/defenseacademy/basara defnse jumping.png'
  },
  {
    tag: 'Field Tactics',
    title: 'Outdoor Activities',
    desc: 'Real-world outdoor obstacle courses, tactical team challenges, cross-country trekking, survival camps, and adventure drills that forge unyielding camaraderie.',
    image: '/assets/defenseacademy/sribasara defense training.png'
  }
];

export default function DefenseAcademyAbout() {
  return (
    <>
      {/* 1. Inner Hero */}
      <section className="defense-inner-hero">
        <div className="defense-inner-hero-container">
          <span className="defense-inner-hero-tag">About Our Academy</span>
          <h1 className="defense-inner-hero-title">Sri Basara Defence Academy</h1>
          <p className="defense-inner-hero-desc">
            Discipline. Valour. Excellence. Forging courageous, disciplined, and visionary youth dedicated to the service of the nation.
          </p>

          <div className="defense-hero-motto-box">
            <div className="defense-hero-motto-title">
              HONOUR. COURAGE. DISCIPLINE.
            </div>
            <div className="defense-hero-motto-sub">
              Every Cadet Has Potential. Every Defender Deserves Excellence.
            </div>
          </div>
        </div>
      </section>

      {/* 2. Message From The Management */}
      <section className="defense-page-section alt-bg">
        <div className="defense-page-container">
          <div className="defense-section-header" style={{ marginBottom: '35px' }}>
            <span className="defense-section-subtitle">Leadership</span>
            <h2 className="defense-section-title">Message From The Management</h2>
          </div>

          <div className="defense-narrative-grid">
            <div className="defense-narrative-img-wrap">
              <img
                src="/assets/degree/11.jpeg"
                alt="Shri Pudi Ramesh Garu, Chairman"
                loading="lazy"
              />
            </div>
            <div className="defense-narrative-text">
              <h2>Shri Pudi Ramesh Garu</h2>
              <p className="defense-chairman-role">
                Chairman, Sri Basara Educational Institutions
              </p>
              <div className="defense-quote-box">
                <p className="defense-quote-text">
                  "At Sri Basara Defence Academy, our mission is to forge courageous, disciplined, and visionary youth dedicated to the service of the nation. We believe true military and defence education combines relentless physical conditioning, mental fortitude, and strong moral leadership to prepare young patriots for the armed forces and beyond."
                </p>
              </div>
              <p className="defense-quote-motto">
                Every Cadet Has Potential. Every Defender Deserves Excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission (Clean 2-Column Grid) */}
      <section className="defense-page-section">
        <div className="defense-page-container">
          <div className="defense-vision-mission-grid">
            {/* Vision Card */}
            <div className="defense-vision-card">
              <div className="defense-card-header">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h3 className="defense-card-title" style={{ color: '#ffffff' }}>
                  Our Vision
                </h3>
              </div>
              <div className="defense-card-subtitle" style={{ color: '#fbbf24' }}>
                Honour. Valour. National Service.
              </div>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: '#f1f5f9', margin: 0 }}>
                To develop Sri Basara Defence Academy into a premier national training ground, empowering passionate young men and women with the courage, stamina, mental agility, and character required to lead and excel in India's armed forces and public security services.
              </p>
            </div>

            {/* Mission Card */}
            <div className="defense-mission-card">
              <div className="defense-card-header">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent, #ea580c)" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                <h3 className="defense-card-title" style={{ color: 'var(--color-primary, #14532d)' }}>
                  Our Mission
                </h3>
              </div>
              <div className="defense-card-subtitle" style={{ color: 'var(--color-accent, #ea580c)' }}>
                Moulding Patriots into Armed Forces Leaders
              </div>
              <ul className="defense-check-list">
                {[
                  'Comprehensive defence career orientation, NDA coaching, and written examination preparation',
                  'Rigorous daily physical fitness conditioning, obstacle training, and military drill mastery',
                  'Structured SSB interview orientation, psychological assessment, and personality development',
                  'Fostering unyielding regimental discipline, moral integrity, leadership, and national pride'
                ].map((item, idx) => (
                  <li key={idx} className="defense-check-item">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent, #ea580c)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
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

      {/* 4. Core Training Approach (The 7 Pillars) */}
      <section className="defense-page-section alt-bg">
        <div className="defense-page-container">
          <div className="defense-section-header">
            <span className="defense-section-subtitle">Holistic Framework</span>
            <h2 className="defense-section-title">Our Unique Training Approach</h2>
            <p className="defense-section-desc">
              Seven foundational pillars designed to build academic excellence, physical endurance, tactical acumen, and officer-like qualities.
            </p>
          </div>

          <div className="defense-approach-grid">
            {DEFENCE_APPROACHES.map((item) => (
              <div key={item.num} className="defense-approach-card">
                <div className="defense-approach-header">
                  <span className="defense-approach-num">{item.num}</span>
                  <div className="defense-approach-icon">{item.icon}</div>
                </div>
                <h3 className="defense-approach-title">{item.title}</h3>
                <p className="defense-approach-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Defence Facilities Section */}
      <section className="defense-page-section">
        <div className="defense-page-container">
          <div className="defense-section-header">
            <span className="defense-section-subtitle">Infrastructure</span>
            <h2 className="defense-section-title">Defence Facilities</h2>
            <p className="defense-section-desc">
              Specialized infrastructure and training grounds crafted to meet standard defence physical efficiency and discipline benchmarks.
            </p>
          </div>

          <div className="defense-facilities-grid">
            {DEFENCE_FACILITIES.map((facility, idx) => (
              <div key={idx} className="defense-facility-card">
                <div className="defense-facility-img-wrap">
                  <img src={facility.image} alt={facility.title} loading="lazy" />
                </div>
                <div className="defense-facility-body">
                  <span className="defense-facility-tag">{facility.tag}</span>
                  <h3 className="defense-facility-title">{facility.title}</h3>
                  <p className="defense-facility-desc">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Commitment Section */}
      <section className="defense-page-section alt-bg">
        <div className="defense-page-container">
          <div className="defense-commitment-block">
            <span className="defense-section-subtitle">Our Promise</span>
            <h2 className="defense-section-title" style={{ marginBottom: '16px' }}>Our Commitment</h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.75', maxWidth: '820px', margin: '0 auto 14px auto' }}>
              At <strong>Sri Basara Defence Academy</strong>, we believe that education in defence is a journey of discovering possibilities, forging courage, and transforming potential into valorous service to the nation.
            </p>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.75', maxWidth: '820px', margin: '0 auto 20px auto' }}>
              We are committed to providing every cadet with the right skills, physical strength, moral values, mentorship, and opportunities to excel in the Armed Forces and security services.
            </p>
            <div className="defense-commitment-quote" style={{ margin: '15px auto 0 auto' }}>
              "We do not simply prepare cadets for examinations; <span>we prepare them to lead with honour.</span>"
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA / Admissions */}
      <section className="defense-cta-section">
        <div className="defense-cta-container">
          <h2 className="defense-cta-title">Begin Your Journey in Defence Services</h2>
          <p className="defense-cta-desc">
            Admissions open for NDA coaching, CDS, AFCAT, SSC GD, and comprehensive defence physical training batches.
          </p>
          <div className="defense-cta-btns">
            <a href="tel:+919985577636" className="defense-btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Call +91 99855 77636
            </a>
            <Link to="/defenseacademy#admissions" className="defense-btn-secondary">
              Admissions Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
