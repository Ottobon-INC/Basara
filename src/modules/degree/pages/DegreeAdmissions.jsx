import React from 'react';
import './degree-admissions.css';

export default function DegreeAdmissions() {
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
            <form action="https://sribasara.in/mail.php" method="post" className="admissions-form-wrapper">
              <div className="admissions-form-title">
                <h2>Admissions Enquiry</h2>
                <p>Please provide your details below and our team will be in touch.</p>
              </div>
              
              <fieldset className="form-group">
                <legend>Personal Information</legend>
                <div className="form-row-split">
                  <div className="form-field">
                    <label htmlFor="name" className="form-label">Full Name<span className="required-asterisk">*</span></label>
                    <input type="text" id="name" name="name" className="form-input" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="mobile" className="form-label">Mobile Number<span className="required-asterisk">*</span></label>
                    <input type="tel" id="mobile" name="mobile" className="form-input" required />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="form-label">Email Address<span className="required-asterisk">*</span></label>
                  <input type="email" id="email" name="email" className="form-input" required />
                </div>
              </fieldset>
  
              <fieldset className="form-group">
                <legend>Enquiry Details</legend>
                <div className="form-row-split">
                  <div className="form-field">
                    <label htmlFor="subject" className="form-label">Subject<span className="required-asterisk">*</span></label>
                    <input type="text" id="subject" name="subject" className="form-input" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="experience" className="form-label">Prior Experience / Qualification<span className="required-asterisk">*</span></label>
                    <input type="text" id="experience" name="experience" className="form-input" required />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="message" className="form-label">Message<span className="required-asterisk">*</span></label>
                  <textarea id="message" name="message" className="form-input" required></textarea>
                </div>
              </fieldset>
  
              <div className="form-submit-wrapper">
                <button type="submit" name="submit" className="btn-submit-enquiry">Submit Enquiry</button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
