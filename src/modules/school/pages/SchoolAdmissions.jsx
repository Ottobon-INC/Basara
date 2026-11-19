import React from 'react';
import SchoolAdmissionsEnquiry from '../components/SchoolAdmissionsEnquiry';
import './school-pages.css';

const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Submit Online Enquiry',
    desc: 'Fill out the admissions enquiry form below or visit our school admissions desk in Tagarapuvalasa.'
  },
  {
    step: '02',
    title: 'Campus Tour & Interaction',
    desc: 'Schedule a visit to tour our smart classrooms, labs, and play areas, and meet our academic counselor.'
  },
  {
    step: '03',
    title: 'Application & Documents',
    desc: 'Submit the registration form along with student birth certificate, transfer certificate, and past academic records.'
  },
  {
    step: '04',
    title: 'Admission Confirmation',
    desc: 'Complete fee payment and formal enrollment to receive the student kit, uniform details, and academic calendar.'
  }
];

export default function SchoolAdmissions() {
  return (
    <>
      {/* Inner Hero */}
      <section className="school-inner-hero">
        <div className="school-inner-hero-container">
          <span className="school-inner-hero-tag">Enrollment Open</span>
          <h1 className="school-inner-hero-title">Admissions 2026 - 2027</h1>
          <p className="school-inner-hero-desc">
            Take the first step toward securing your child's future-focused educational journey at Sri Basara Leads International School.
          </p>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-section-header">
            <span className="school-section-subtitle">How To Apply</span>
            <h2 className="school-section-title">Seamless 4-Step Admission Process</h2>
            <p className="school-section-desc">
              We make the admissions process smooth, transparent, and parent-friendly.
            </p>
          </div>

          <div className="school-cards-grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {ADMISSION_STEPS.map((item, idx) => (
              <div key={idx} className="school-feature-box">
                <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-accent, #B95308)', display: 'block', marginBottom: '0.5rem', lineHeight: 1 }}>
                  {item.step}
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents & Guidelines */}
      <section className="school-page-section">
        <div className="school-page-container">
          <div className="school-narrative-grid">
            <div className="school-narrative-text">
              <span className="school-section-subtitle">Documentation</span>
              <h2>Documents Required for Admission</h2>
              <p>
                Parents are requested to submit copies of the following documents along with the completed enrollment form:
              </p>
              <ul className="school-feature-list" style={{ marginTop: '1.25rem', gap: '12px' }}>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Copy of Student Birth Certificate (Municipal / Gram Panchayat)</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Original Transfer Certificate (TC) from Previous School (Grade 1 upwards)</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Copy of Previous Year Report Card / Marks Memo</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Student & Parent Aadhar Card Photocopies</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>4 Passport Size Photographs of the Student</li>
              </ul>
            </div>

            <div className="school-contact-card" style={{ height: 'fit-content' }}>
              <span className="school-section-subtitle">Need Help?</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', fontSize: '24px', margin: '0.25rem 0 1rem 0' }}>
                Contact Admissions Desk
              </h3>
              <p style={{ color: '#475569', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Have questions regarding fees, bus routes, or age criteria? Our admissions team is available Monday through Saturday.
              </p>
              
              <div className="school-contact-item">
                <div className="school-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="school-contact-info">
                  <h4>Helpline Phone</h4>
                  <a href="tel:9985577636">9985577636</a> / <a href="tel:08933222888">08933-222888</a>
                </div>
              </div>

              <div className="school-contact-item">
                <div className="school-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="school-contact-info">
                  <h4>Email Admissions</h4>
                  <a href="mailto:info@sribasara.in">info@sribasara.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Enquiry Form Block */}
      <SchoolAdmissionsEnquiry />
    </>
  );
}

