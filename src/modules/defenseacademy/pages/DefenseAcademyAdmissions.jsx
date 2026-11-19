import React, { useState } from 'react';
import './defense-pages.css';

export default function DefenseAcademyAdmissions() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    qualification: '',
    targetExam: 'NDA (National Defence Academy)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="da-inner-hero">
        <div className="da-inner-hero-container">
          <span className="da-inner-hero-tag">ADMISSIONS 2026 - 2027</span>
          <h1 className="da-inner-hero-title">Enrol at Sri Basara Defence Academy</h1>
          <p className="da-inner-hero-desc">
            Take the first step toward an honourable career in the Armed Forces. Admissions are now open for NDA, CDS, AFCAT, Coast Guard, and Police batches.
          </p>
        </div>
      </section>

      <section className="da-page-section">
        <div className="da-page-container">
          <div className="da-section-header">
            <span className="da-section-subtitle">Admission Guidelines</span>
            <h2 className="da-section-title">Step-by-Step Enrolment Procedure</h2>
            <p className="da-section-desc">
              We ensure transparent, merit-driven admissions with comprehensive initial medical and physical fitness screenings.
            </p>
          </div>

          <div className="da-steps-grid" style={{ marginBottom: '50px' }}>
            <div className="da-step-card">
              <div className="da-step-num">1</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 8px 0', color: '#0f172a' }}>Online / Campus Enquiry</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55 }}>
                Submit the enquiry form below or visit our Tagarapuvalasa campus with academic certificates for counselling.
              </p>
            </div>
            <div className="da-step-card">
              <div className="da-step-num">2</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 8px 0', color: '#0f172a' }}>Physical Screening</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55 }}>
                Height, weight, vision, and basic mobility evaluation by our PT instructors to establish candidate readiness.
              </p>
            </div>
            <div className="da-step-card">
              <div className="da-step-num">3</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 8px 0', color: '#0f172a' }}>Diagnostic Written Assessment</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55 }}>
                Short diagnostic test in Mathematics, English, and Reasoning to determine academic baseline for customized coaching.
              </p>
            </div>
            <div className="da-step-card">
              <div className="da-step-num">4</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 8px 0', color: '#0f172a' }}>Batch Induction & Uniform</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55 }}>
                Completion of admission formalities, issue of training kits/uniforms, and hostel room allotment for residential cadets.
              </p>
            </div>
          </div>

          {/* Admission Enquiry Form */}
          <div className="da-contact-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <span className="da-section-subtitle">QUICK ADMISSION FORM</span>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary, #15803d)', margin: '6px 0' }}>
                Register Your Interest
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>
                Fill out the details below and our Admissions Officer will call you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '36px 20px', background: 'rgba(21, 128, 61, 0.08)', borderRadius: '12px', border: '1px solid #86efac' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>✅</div>
                <h3 style={{ fontSize: '1.3rem', color: '#15803d', fontWeight: 800, margin: '0 0 8px 0' }}>Enquiry Submitted Successfully!</h3>
                <p style={{ color: '#334155', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto' }}>
                  Thank you, <strong>{formData.name}</strong>. Our admissions counselor will contact you at <strong>{formData.phone}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter cadet's full name"
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10-digit mobile number"
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="cadet@example.com"
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>Target Exam / Program *</label>
                  <select
                    name="targetExam"
                    value={formData.targetExam}
                    onChange={handleChange}
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                  >
                    <option value="NDA (National Defence Academy)">NDA (National Defence Academy)</option>
                    <option value="CDS (Combined Defence Services)">CDS (Combined Defence Services)</option>
                    <option value="AFCAT (Air Force Entry)">AFCAT (Air Force Entry)</option>
                    <option value="Indian Coast Guard">Indian Coast Guard</option>
                    <option value="Indian Army Agniveer">Indian Army Agniveer</option>
                    <option value="Navy SSR / MR">Navy SSR / MR</option>
                    <option value="SSC GD & Paramilitary">SSC GD & Paramilitary</option>
                    <option value="State Police Recruitment">State Police Recruitment</option>
                  </select>
                </div>

                <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>Highest Educational Qualification</label>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    placeholder="e.g. 10th Appearing / Intermediate MPC / Degree final year"
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>Any Questions or Queries?</label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your defence career goals or hostel inquiry..."
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '10px' }}>
                  <button
                    type="submit"
                    className="da-btn-primary"
                    style={{ border: 'none', cursor: 'pointer', fontSize: '1rem', padding: '14px 38px' }}
                  >
                    Submit Admission Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
