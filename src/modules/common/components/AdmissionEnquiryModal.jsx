import React, { useState, useEffect, useRef } from 'react';
import { useEnquiryModal } from '../context/EnquiryModalContext';
import './AdmissionEnquiryModal.css';

const INSTITUTIONS_LIST = [
  'Sri Basara Leads International School',
  'Sri Basara Junior College',
  'Sri Basara Degree College',
  'Sri Basara Defence Academy'
];

const PROGRAMMES_LIST = [
  'Day Scholar',
  'Semi-Residential',
  'Residential / Hostel',
  'IIT-JEE & NEET Foundation',
  'NDA Defence Training Batch',
  'Degree Regular (B.Sc / B.Com / BBA / BCA)',
  'Other / General Enquiry'
];

export default function AdmissionEnquiryModal() {
  const { isOpen, closeEnquiryModal, targetInstitution } = useEnquiryModal();
  const [sameAsMobile, setSameAsMobile] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    mobile: '',
    whatsapp: '',
    courseGrade: '',
    institution: '',
    previousSchool: '',
    location: '',
    preferredProgramme: 'Day Scholar',
    message: ''
  });

  const cardRef = useRef(null);

  // Sync targetInstitution when opened
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
      setLoading(false);

      let matchedInst = 'Sri Basara Leads International School';
      const target = (targetInstitution || '').toLowerCase();
      if (target.includes('defense') || target.includes('defence') || window.location.pathname.includes('defense')) {
        matchedInst = 'Sri Basara Defence Academy';
      } else if (target.includes('degree') || window.location.pathname.includes('degree')) {
        matchedInst = 'Sri Basara Degree College';
      } else if (target.includes('junior') || target.includes('jc') || window.location.pathname.includes('juniorcollege')) {
        matchedInst = 'Sri Basara Junior College';
      }

      setFormData((prev) => ({
        ...prev,
        institution: matchedInst
      }));
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, targetInstitution]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeEnquiryModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeEnquiryModal]);

  if (!isOpen) return null;

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

  const handleSameAsMobileToggle = (e) => {
    const checked = e.target.checked;
    setSameAsMobile(checked);
    if (checked) {
      setFormData((prev) => ({ ...prev, whatsapp: prev.mobile }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending enquiry (or posting to backend)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div 
      className="enquiry-modal-overlay"
      onClick={(e) => {
        if (cardRef.current && !cardRef.current.contains(e.target)) {
          closeEnquiryModal();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-heading"
    >
      <div className="enquiry-modal-card" ref={cardRef}>
        
        {/* Modal Header */}
        <div className="enquiry-modal-header">
          <div className="enquiry-modal-header-brand">
            <img 
              src="/assets/umbrella/SRI BASARA.png" 
              alt="Sri Basara Logo" 
              className="enquiry-modal-logo" 
            />
            <div>
              <h2 id="enquiry-modal-heading" className="enquiry-modal-title">
                Admission Enquiry Form
              </h2>
              <p className="enquiry-modal-subtitle">
                Sri Basara Educational Institutions
              </p>
            </div>
          </div>

          <button 
            type="button" 
            className="enquiry-modal-close-btn"
            onClick={closeEnquiryModal}
            aria-label="Close Enquiry Form"
          >
            &times;
          </button>
        </div>

        {/* Modal Content */}
        <div className="enquiry-modal-body">
          {submitted ? (
            <div className="enquiry-success-view">
              <div className="enquiry-success-icon">✓</div>
              <h3 className="enquiry-success-title">Enquiry Submitted Successfully!</h3>
              <p className="enquiry-success-msg">
                Thank you, <strong>{formData.parentName || formData.studentName}</strong>. Your enquiry for <strong>{formData.studentName}</strong> ({formData.courseGrade} at {formData.institution}) has been recorded. Our admissions counselor will connect with you within 24 hours.
              </p>

              <div className="enquiry-success-contact-box">
                <a 
                  href="tel:9985577636" 
                  className="enquiry-success-action-btn"
                  style={{ background: '#0284c7', color: '#ffffff' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>Call: 9985577636</span>
                </a>

                <a 
                  href={`https://wa.me/919985577636?text=${encodeURIComponent(`Hello Sri Basara, I have submitted an admission enquiry for ${formData.studentName} (${formData.courseGrade}).`)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="enquiry-success-action-btn"
                  style={{ background: '#16a34a', color: '#ffffff' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <button 
                type="button" 
                className="enquiry-btn-cancel" 
                onClick={closeEnquiryModal}
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="enquiry-modal-intro">
                <p>
                  Please fill in the recommended details below. Our admissions desk will promptly contact you with prospectus, fee schedule, and enrollment steps.
                </p>
                <a href="tel:9985577636" className="enquiry-modal-helpline">
                  <span>Helpline: 9985577636</span>
                </a>
              </div>

              <div className="enquiry-form-grid">
                
                {/* 1. Student Name */}
                <div className="enquiry-form-field">
                  <label className="enquiry-form-label">
                    <span>Student Name<span className="enquiry-required-star">*</span></span>
                  </label>
                  <input 
                    type="text" 
                    name="studentName"
                    required 
                    placeholder="Enter student's full name"
                    value={formData.studentName}
                    onChange={handleChange}
                    className="enquiry-form-input"
                  />
                </div>

                {/* 2. Parent Name */}
                <div className="enquiry-form-field">
                  <label className="enquiry-form-label">
                    <span>Parent / Guardian Name<span className="enquiry-required-star">*</span></span>
                  </label>
                  <input 
                    type="text" 
                    name="parentName"
                    required 
                    placeholder="Enter parent's full name"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="enquiry-form-input"
                  />
                </div>

                {/* 3. Mobile Number */}
                <div className="enquiry-form-field">
                  <label className="enquiry-form-label">
                    <span>Mobile Number<span className="enquiry-required-star">*</span></span>
                  </label>
                  <input 
                    type="tel" 
                    name="mobile"
                    required 
                    pattern="[0-9]{10}"
                    maxLength="10"
                    placeholder="10-digit mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="enquiry-form-input"
                  />
                </div>

                {/* 4. WhatsApp Number */}
                <div className="enquiry-form-field">
                  <label className="enquiry-form-label">
                    <span>WhatsApp Number</span>
                    <label className="enquiry-same-wa">
                      <input 
                        type="checkbox" 
                        checked={sameAsMobile} 
                        onChange={handleSameAsMobileToggle} 
                      />
                      <span>Same as mobile</span>
                    </label>
                  </label>
                  <input 
                    type="tel" 
                    name="whatsapp"
                    disabled={sameAsMobile}
                    pattern="[0-9]{10}"
                    maxLength="10"
                    placeholder="WhatsApp contact number"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="enquiry-form-input"
                  />
                </div>

                {/* 5. Class / Course */}
                <div className="enquiry-form-field">
                  <label className="enquiry-form-label">
                    <span>Class / Course Applying For<span className="enquiry-required-star">*</span></span>
                  </label>
                  <input 
                    type="text" 
                    name="courseGrade"
                    required 
                    placeholder="e.g. Nursery, Grade 5, Inter MPC, NDA, B.Sc"
                    value={formData.courseGrade}
                    onChange={handleChange}
                    className="enquiry-form-input"
                  />
                </div>

                {/* 6. Institution */}
                <div className="enquiry-form-field">
                  <label className="enquiry-form-label">
                    <span>Institution<span className="enquiry-required-star">*</span></span>
                  </label>
                  <select 
                    name="institution"
                    required
                    value={formData.institution}
                    onChange={handleChange}
                    className="enquiry-form-select"
                  >
                    {INSTITUTIONS_LIST.map((inst, idx) => (
                      <option key={idx} value={inst}>{inst}</option>
                    ))}
                  </select>
                </div>

                {/* 7. Previous School / College */}
                <div className="enquiry-form-field">
                  <label className="enquiry-form-label">
                    <span>Previous School / College</span>
                  </label>
                  <input 
                    type="text" 
                    name="previousSchool"
                    placeholder="Name of current/previous institution"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    className="enquiry-form-input"
                  />
                </div>

                {/* 8. Location */}
                <div className="enquiry-form-field">
                  <label className="enquiry-form-label">
                    <span>Location / Town / Village<span className="enquiry-required-star">*</span></span>
                  </label>
                  <input 
                    type="text" 
                    name="location"
                    required
                    placeholder="e.g. Tagarapuvalasa, Bheemili, Vizag, Anandapuram"
                    value={formData.location}
                    onChange={handleChange}
                    className="enquiry-form-input"
                  />
                </div>

                {/* 9. Preferred Programme */}
                <div className="enquiry-form-field">
                  <label className="enquiry-form-label">
                    <span>Preferred Programme<span className="enquiry-required-star">*</span></span>
                  </label>
                  <select 
                    name="preferredProgramme"
                    required
                    value={formData.preferredProgramme}
                    onChange={handleChange}
                    className="enquiry-form-select"
                  >
                    {PROGRAMMES_LIST.map((prog, idx) => (
                      <option key={idx} value={prog}>{prog}</option>
                    ))}
                  </select>
                </div>

                {/* 10. Message / Any Questions */}
                <div className="enquiry-form-field full-width">
                  <label className="enquiry-form-label">
                    <span>Message / Specific Queries</span>
                  </label>
                  <textarea 
                    name="message"
                    rows="3"
                    placeholder="Any specific questions regarding hostel, transport, scholarships, or timings..."
                    value={formData.message}
                    onChange={handleChange}
                    className="enquiry-form-textarea"
                  />
                </div>

              </div>

              {/* Form Action Buttons */}
              <div className="enquiry-modal-footer">
                <button 
                  type="button" 
                  className="enquiry-btn-cancel" 
                  onClick={closeEnquiryModal}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="enquiry-btn-submit"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit Admission Enquiry'}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
