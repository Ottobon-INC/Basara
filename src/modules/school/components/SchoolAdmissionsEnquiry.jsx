import React from 'react';
import './SchoolAdmissionsEnquiry.css';

export default function SchoolAdmissionsEnquiry() {
  return (
    <section id="admissions" className="school-admissions-hub-section">
      <div className="school-admissions-hub-container">
        
        {/* Left Column: Information */}
        <div className="school-admissions-info-panel">
          <h2>Begin Your Application</h2>
          <p>
            Submit an enquiry and our admissions team will provide you with all necessary information regarding our curriculum, eligibility requirements, and the enrollment process. We look forward to welcoming you to Sri Basara Leads School with International Standards.
          </p>
          
          <div className="school-contact-card">
            <h3>Contact Admissions</h3>
            <ul className="school-contact-methods-list">
              <li>
                <div className="school-contact-icon-wrapper">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="school-contact-details">
                  <span className="school-contact-label">Call Us</span>
                  <span className="school-contact-value"><a href="tel:08933222888">08933-222888</a></span>
                </div>
              </li>
              <li>
                <div className="school-contact-icon-wrapper">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="school-contact-details">
                  <span className="school-contact-label">Email Us</span>
                  <span className="school-contact-value"><a href="mailto:info@sribasara.in">info@sribasara.in</a></span>
                </div>
              </li>
              <li>
                <div className="school-contact-icon-wrapper">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="school-contact-details">
                  <span className="school-contact-label">Campus Location</span>
                  <span className="school-contact-value">
                    D.No. 6-123/1/4, Near Electrical Sub Station,<br />
                    Balaji Nagar, Tagarapuvalasa,<br />
                    Visakhapatnam-531162.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="school-admissions-form-panel">
          <form action="https://sribasara.in/mail.php" method="post" className="school-admissions-form-wrapper">
            <div className="school-admissions-form-title">
              <h2>Admissions Enquiry</h2>
              <p>Please provide your details below and our team will be in touch.</p>
            </div>
            
            <fieldset className="school-form-group">
              <legend>Personal Information</legend>
              <div className="school-form-row-split">
                <div className="school-form-field">
                  <label htmlFor="name" className="school-form-label">Full Name<span className="school-required-asterisk">*</span></label>
                  <input type="text" id="name" name="name" className="school-form-input" required />
                </div>
                <div className="school-form-field">
                  <label htmlFor="mobile" className="school-form-label">Mobile Number<span className="school-required-asterisk">*</span></label>
                  <input type="tel" id="mobile" name="mobile" className="school-form-input" required />
                </div>
              </div>
              <div className="school-form-field">
                <label htmlFor="email" className="school-form-label">Email Address<span className="school-required-asterisk">*</span></label>
                <input type="email" id="email" name="email" className="school-form-input" required />
              </div>
            </fieldset>

            <fieldset className="school-form-group">
              <legend>Enquiry Details</legend>
              <div className="school-form-row-split">
                <div className="school-form-field">
                  <label htmlFor="subject" className="school-form-label">Grade / Class Applying For<span className="school-required-asterisk">*</span></label>
                  <input type="text" id="subject" name="subject" className="school-form-input" required />
                </div>
                <div className="school-form-field">
                  <label htmlFor="experience" className="school-form-label">Previous School<span className="school-required-asterisk">*</span></label>
                  <input type="text" id="experience" name="experience" className="school-form-input" required />
                </div>
              </div>
              <div className="school-form-field">
                <label htmlFor="message" className="school-form-label">Message<span className="school-required-asterisk">*</span></label>
                <textarea id="message" name="message" className="school-form-input" required></textarea>
              </div>
            </fieldset>

            <div className="school-form-submit-wrapper">
              <button type="submit" name="submit" className="school-btn-submit-enquiry">Submit Enquiry</button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
