import React from 'react';
import { Link } from 'react-router-dom';
import './defense-pages.css';

const RECRUITMENT_RECORDS = [
  {
    wing: 'Indian Army',
    badge: 'ARMY SELECTIONS',
    desc: 'Cadets successfully inducted as Officers through NDA and CDS, as well as Soldier General Duty, Technical, Clerk, and Nursing Assistant trades.',
    icon: '🎖️',
    highlights: ['NDA 148, 149, 150 & 151 Batches', 'Army Agniveer Recruitment Rallies with 98% Physical Clearances']
  },
  {
    wing: 'Indian Navy',
    badge: 'NAVY SELECTIONS',
    desc: 'Outstanding performance in 10+2 B.Tech Cadet Entry, SSR (Senior Secondary Recruit), MR (Matric Recruit), and Artificer Apprentice entries.',
    icon: '⚓',
    highlights: ['High mathematical cut-off clearances in INS Chilka training entries', 'Regular selections in technical & communications wings']
  },
  {
    wing: 'Indian Air Force',
    badge: 'AIR FORCE SELECTIONS',
    desc: 'Selected cadets serving in Flying, Technical, and Ground Duty branches via AFCAT, and Airmen Group X and Group Y technical trades.',
    icon: '✈️',
    highlights: ['AFCAT Ground Duty & Flying Branch qualifications', 'Agniveer Vayu high-percentile written test scores']
  },
  {
    wing: 'Paramilitary & Police',
    badge: 'SECURITY FORCES',
    desc: 'Cadets commissioned into Indian Coast Guard, CRPF, CISF, BSF, ITBP, SSB, SSC GD, and Andhra Pradesh State Police recruitments.',
    icon: '🛡️',
    highlights: ['Coast Guard Navik GD & DB selections', 'Top ranks in State Police Constable & Sub-Inspector examinations']
  }
];

export default function DefenseAcademyAchievements() {
  return (
    <>
      <section className="da-inner-hero">
        <div className="da-inner-hero-container">
          <span className="da-inner-hero-tag">OUR TRACK RECORD</span>
          <h1 className="da-inner-hero-title">Proud Cadets Serving the Motherland</h1>
          <p className="da-inner-hero-desc">
            Over a decade of unmatched recruitment track records across the Tri-Services and Paramilitary forces.
          </p>
        </div>
      </section>

      <section className="da-page-section">
        <div className="da-page-container">
          <div className="da-section-header">
            <span className="da-section-subtitle">Proven Milestones</span>
            <h2 className="da-section-title">Selection Record That Speaks Volumes</h2>
            <p className="da-section-desc">
              From intense morning conditioning to written examination breakthroughs, our cadets consistently convert hard work into distinguished uniforms.
            </p>
          </div>

          <div className="da-achievements-stats">
            <div className="da-achievement-stat-card">
              <div className="da-stat-number">500+</div>
              <div className="da-stat-label">Cadets In Uniform</div>
            </div>
            <div className="da-achievement-stat-card">
              <div className="da-stat-number">95%+</div>
              <div className="da-stat-label">Physical Test Clearance</div>
            </div>
            <div className="da-achievement-stat-card">
              <div className="da-stat-number">50+</div>
              <div className="da-stat-label">Officer Entry Selections</div>
            </div>
            <div className="da-achievement-stat-card">
              <div className="da-stat-number">10+</div>
              <div className="da-stat-label">Years of Excellence</div>
            </div>
          </div>

          <div className="da-academics-grid">
            {RECRUITMENT_RECORDS.map((rec, idx) => (
              <div key={idx} className="da-academic-card">
                <div className="da-academic-card-header">
                  <div style={{ fontSize: '2rem' }}>{rec.icon}</div>
                  <span className="da-academic-badge">{rec.badge}</span>
                </div>
                <h3 className="da-academic-title">{rec.wing}</h3>
                <p className="da-academic-desc">{rec.desc}</p>
                <ul className="da-academic-points">
                  {rec.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="da-academic-point-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="da-cta-banner">
            <h3 className="da-cta-title">Your Uniform Awaits You</h3>
            <p className="da-cta-desc">
              Join the ranks of champions who transformed their dreams of serving the nation into reality at Sri Basara Defence Academy.
            </p>
            <div className="da-cta-btns">
              <Link to="/defenseacademy/admissions" className="da-btn-primary">
                Apply for Next Batch
              </Link>
              <Link to="/defenseacademy/contact" className="da-btn-secondary">
                Speak to our Dean
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
