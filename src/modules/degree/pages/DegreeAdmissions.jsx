import React, { useState } from 'react';
import './degree-admissions.css';

export default function DegreeAdmissions() {
  const [sameAsMobile, setSameAsMobile] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    mobile: '',
    whatsapp: '',
    courseGrade: 'B.Sc (Computer Science / Data Science)',
    institution: 'Sri Basara Degree College',
    previousSchool: '',
    location: '',
    preferredProgramme: 'Regular Degree Course',
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
      {/* Inner Hero */}
      <section className="inner-hero-section">
        <div className="inner-hero-container">
          <h1 className="inner-hero-title">Admissions & Enquiries</h1>
        </div>
      </section>
      
      {/* Admissions Hub Section */}
      <section className="admissions-hub-section">
        <div className="admissions-hub-container">
          
          {/* Left Column: Information */}
          <div className="admissions-info-panel">
            <h2>Begin Your Application</h2>
            <p>
              Submit an enquiry and the college admissions team will provide you with all necessary information regarding our undergraduate programs, eligibility requirements, and the enrollment process. We look forward to welcoming you to Sri Basara Degree College.
            </p>
            
            <div className="contact-card">
              <h3>Contact Admissions</h3>
              <ul className="contact-methods-list">
                <li>
                  <div className="contact-icon-wrapper">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Call Us</span>
                    <span className="contact-value"><a href="tel:9985577636">9985577636</a></span>
                  </div>
                </li>
                <li>
                  <div className="contact-icon-wrapper">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Email Us</span>
                    <span className="contact-value"><a href="mailto:info@sribasara.in">info@sribasara.in</a></span>
                  </div>
                </li>
                <li>
                  <div className="contact-icon-wrapper">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Campus Location</span>
                    <span className="contact-value">
                      #7-44-194/1, Ward No.8, Balaji Nagar,<br />
                      Tagarapuvalasa, Bheemunipatnam(M),<br />
                      Visakhapatnam Dist., 531162.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="admissions-form-panel">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 24px', background: '#ffffff', borderRadius: '12px', border: '1px solid #86efac', boxShadow: '0 4px 18px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '2.8rem', color: '#16a34a', marginBottom: '12px' }}>✓</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#312e81', margin: '0 0 10px 0' }}>Enquiry Received!</h3>
                <p style={{ color: '#475569', fontSize: '0.96rem', maxWidth: '480px', margin: '0 auto 20px auto', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.parentName || formData.studentName}</strong>. Your enquiry for <strong>{formData.studentName}</strong> ({formData.courseGrade}) at {formData.institution} has been submitted. Our admissions coordinator will reach out shortly at <strong>{formData.mobile}</strong>.
                </p>
                <button 
                  type="button" 
                  onClick={() => setSubmitted(false)}
                  className="btn-submit-enquiry"
                  style={{ cursor: 'pointer' }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="admissions-form-wrapper">
                <div className="admissions-form-title">
                  <h2>Admissions Enquiry Form</h2>
                  <p>Please provide your details below and our team will be in touch.</p>
                </div>
                
                <fieldset className="form-group">
                  <legend>Student & Parent Details</legend>
                  <div className="form-row-split">
                    <div className="form-field">
                      <label className="form-label">Student Name<span className="required-asterisk">*</span></label>
                      <input 
                        type="text" 
                        name="studentName" 
                        className="form-input" 
                        required 
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="Enter student's full name"
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Parent Name<span className="required-asterisk">*</span></label>
                      <input 
                        type="text" 
                        name="parentName" 
                        className="form-input" 
                        required 
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="Enter parent's full name"
                      />
                    </div>
                  </div>

                  <div className="form-row-split">
                    <div className="form-field">
                      <label className="form-label">Mobile Number<span className="required-asterisk">*</span></label>
                      <input 
                        type="tel" 
                        name="mobile" 
                        className="form-input" 
                        required 
                        pattern="[0-9]{10}"
                        maxLength="10"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>WhatsApp Number</span>
                        <span style={{ fontSize: '0.74rem', color: '#16a34a', cursor: 'pointer' }}>
                          <input type="checkbox" checked={sameAsMobile} onChange={handleSameToggle} style={{ marginRight: '4px' }} />
                          Same as mobile
                        </span>
                      </label>
                      <input 
                        type="tel" 
                        name="whatsapp" 
                        className="form-input" 
                        disabled={sameAsMobile}
                        pattern="[0-9]{10}"
                        maxLength="10"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="WhatsApp number"
                      />
                    </div>
                  </div>
                </fieldset>
    
                <fieldset className="form-group">
                  <legend>Course & Academic Information</legend>
                  <div className="form-row-split">
                    <div className="form-field">
                      <label className="form-label">Course / Degree<span className="required-asterisk">*</span></label>
                      <input 
                        type="text" 
                        name="courseGrade" 
                        className="form-input" 
                        required 
                        value={formData.courseGrade}
                        onChange={handleChange}
                        placeholder="e.g. B.Sc (MPC/Data Science), B.Com, BBA, BCA"
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Institution<span className="required-asterisk">*</span></label>
                      <select 
                        name="institution" 
                        className="form-input" 
                        required 
                        value={formData.institution}
                        onChange={handleChange}
                      >
                        <option value="Sri Basara Degree College">Sri Basara Degree College</option>
                        <option value="Sri Basara Junior College">Sri Basara Junior College</option>
                        <option value="Sri Basara Leads International School">Sri Basara Leads International School</option>
                        <option value="Sri Basara Defence Academy">Sri Basara Defence Academy</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row-split">
                    <div className="form-field">
                      <label className="form-label">Previous School / College</label>
                      <input 
                        type="text" 
                        name="previousSchool" 
                        className="form-input" 
                        value={formData.previousSchool}
                        onChange={handleChange}
                        placeholder="Junior college / Intermediate institution"
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Location / Town / Village<span className="required-asterisk">*</span></label>
                      <input 
                        type="text" 
                        name="location" 
                        className="form-input" 
                        required 
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Tagarapuvalasa, Bheemili, Vizag"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Preferred Programme<span className="required-asterisk">*</span></label>
                    <select 
                      name="preferredProgramme" 
                      className="form-input" 
                      required 
                      value={formData.preferredProgramme}
                      onChange={handleChange}
                    >
                      <option value="Regular Degree Course">Regular Degree Course (Day)</option>
                      <option value="Degree + Competitive Coaching">Degree + Competitive Coaching (UPSC/Banking)</option>
                      <option value="Degree + Campus Placement Training">Degree + Campus Placement Training</option>
                      <option value="Other / General Enquiry">Other / General Enquiry</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Message / Queries</label>
                    <textarea 
                      name="message" 
                      className="form-input" 
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific questions regarding hostel, transport, scholarships, or timings..."
                    />
                  </div>
                </fieldset>
    
                <div className="form-submit-wrapper">
                  <button type="submit" name="submit" className="btn-submit-enquiry">
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
