import React, { useState } from 'react';
import './defense-pages.css';

export default function DefenseAcademyAdmissions() {
  const [sameAsMobile, setSameAsMobile] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    mobile: '',
    whatsapp: '',
    courseGrade: 'NDA (National Defence Academy)',
    institution: 'Sri Basara Defence Academy',
    previousSchool: '',
    location: '',
    preferredProgramme: 'Residential / Hostel Cadet',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'mobile' && sameAsMobile) {
        updated.whatsapp = value;
      }
      return updated;
    });
  };

  const handleSameToggle = (e) => {
    const checked = e.target.checked;
    setSameAsMobile(checked);
    if (checked) {
      setFormData((prev) => ({ ...prev, whatsapp: prev.mobile }));
    }
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
          <div className="da-contact-card" style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <span className="da-section-subtitle">ADMISSION ENQUIRY FORM</span>
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
                <p style={{ color: '#334155', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 18px auto' }}>
                  Thank you, <strong>{formData.parentName || formData.studentName}</strong>. Your enquiry for <strong>{formData.studentName}</strong> ({formData.courseGrade}) at {formData.institution} has been received. Our admissions officer will contact you at <strong>{formData.mobile}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="da-btn-primary"
                  style={{ border: 'none', cursor: 'pointer' }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                
                {/* 1. Student Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>
                    Student Name <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="Enter student's full name"
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.92rem' }}
                  />
                </div>

                {/* 2. Parent Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>
                    Parent / Guardian Name <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Enter parent's full name"
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.92rem' }}
                  />
                </div>

                {/* 3. Mobile Number */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>
                    Mobile Number <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    pattern="[0-9]{10}"
                    maxLength="10"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.92rem' }}
                  />
                </div>

                {/* 4. WhatsApp Number */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>WhatsApp Number</label>
                    <label style={{ fontSize: '0.74rem', color: '#16a34a', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <input type="checkbox" checked={sameAsMobile} onChange={handleSameToggle} />
                      Same as mobile
                    </label>
                  </div>
                  <input
                    type="tel"
                    name="whatsapp"
                    disabled={sameAsMobile}
                    pattern="[0-9]{10}"
                    maxLength="10"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="WhatsApp number"
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.92rem' }}
                  />
                </div>

                {/* 5. Class / Course */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>
                    Class / Course <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="courseGrade"
                    required
                    value={formData.courseGrade}
                    onChange={handleChange}
                    placeholder="e.g. NDA, CDS, AFCAT, Coast Guard, Police"
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.92rem' }}
                  />
                </div>

                {/* 6. Institution */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>
                    Institution <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <select
                    name="institution"
                    required
                    value={formData.institution}
                    onChange={handleChange}
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.92rem' }}
                  >
                    <option value="Sri Basara Defence Academy">Sri Basara Defence Academy</option>
                    <option value="Sri Basara Leads International School">Sri Basara Leads International School</option>
                    <option value="Sri Basara Junior College">Sri Basara Junior College</option>
                    <option value="Sri Basara Degree College">Sri Basara Degree College</option>
                  </select>
                </div>

                {/* 7. Previous School / College */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>Previous School / College</label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    placeholder="Current or previous school/college"
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.92rem' }}
                  />
                </div>

                {/* 8. Location */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>
                    Location / Town / Village <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Tagarapuvalasa, Bheemili, Vizianagaram"
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.92rem' }}
                  />
                </div>

                {/* 9. Preferred Programme */}
                <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>
                    Preferred Programme <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <select
                    name="preferredProgramme"
                    required
                    value={formData.preferredProgramme}
                    onChange={handleChange}
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.92rem' }}
                  >
                    <option value="Residential / Hostel Cadet">Residential / Hostel Cadet (Boarding + Training)</option>
                    <option value="Day Scholar Cadet">Day Scholar Cadet (Commuting)</option>
                    <option value="Weekend Special Crash Course">Weekend Special Crash Course</option>
                    <option value="SSB Interview Intensive Batch">SSB Interview Intensive Batch</option>
                  </select>
                </div>

                {/* 10. Message */}
                <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>Message / Queries</label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your defence career goals or hostel inquiry..."
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.92rem' }}
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
