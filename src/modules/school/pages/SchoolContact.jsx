import React from 'react';
import SchoolCTA from '../components/SchoolCTA';
import './school-pages.css';

export default function SchoolContact() {
  return (
    <>
      {/* Inner Hero */}
      <section className="school-inner-hero">
        <div className="school-inner-hero-container">
          <span className="school-inner-hero-tag">Get in Touch</span>
          <h1 className="school-inner-hero-title">Contact Sri Basara Leads School</h1>
          <p className="school-inner-hero-desc">
            We are here to answer your questions, arrange campus tours, and guide you through the enrollment process.
          </p>
        </div>
      </section>

      {/* Contact Cards & Map Grid */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-contact-grid">
            
            {/* Left Column: Contact Cards */}
            <div className="school-contact-card">
              <span className="school-section-subtitle">Reach Our Campus</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', fontSize: '28px', margin: '0 0 1.5rem 0' }}>
                Campus Contact Details
              </h2>

              <div className="school-contact-item">
                <div className="school-contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="school-contact-info">
                  <h4>Campus Location</h4>
                  <p>
                    D.No. 6-123/1/4, Near Electrical Sub Station, Balaji Nagar, Tagarapuvalasa, Bheemunipatnam (M), Visakhapatnam Dist., Andhra Pradesh - 531162.
                  </p>
                </div>
              </div>

              <div className="school-contact-item">
                <div className="school-contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="school-contact-info">
                  <h4>Phone Numbers</h4>
                  <p>
                    <a href="tel:9985577636">9985577636</a> <br />
                    <a href="tel:08933222888">08933-222888</a> / <a href="tel:8121299999">81212 99999</a>
                  </p>
                </div>
              </div>

              <div className="school-contact-item">
                <div className="school-contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="school-contact-info">
                  <h4>Email Address</h4>
                  <p>
                    <a href="mailto:info@sribasara.in">info@sribasara.in</a>
                  </p>
                </div>
              </div>

              <div className="school-contact-item">
                <div className="school-contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div className="school-contact-info">
                  <h4>Office Hours</h4>
                  <p>
                    Monday – Saturday: 8:30 AM – 4:30 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Google Maps Embed */}
            <div className="school-contact-card" style={{ padding: 0, overflow: 'hidden' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15181.821731677322!2d83.424364!3d17.925239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3957770e0f3167%3A0xb36fbaaf36dfa428!2sTagarapuvalasa%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                title="Sri Basara Leads School Location Map"
                className="school-map-frame"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      <SchoolCTA />
    </>
  );
}

