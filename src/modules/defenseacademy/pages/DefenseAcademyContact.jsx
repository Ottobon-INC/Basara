import React, { useState } from 'react';
import './defense-pages.css';

export default function DefenseAcademyContact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="da-inner-hero">
        <div className="da-inner-hero-container">
          <span className="da-inner-hero-tag">GET IN TOUCH</span>
          <h1 className="da-inner-hero-title">Contact Sri Basara Defence Academy</h1>
          <p className="da-inner-hero-desc">
            Reach out to our campus administration, academic counselors, or visit our training grounds in Tagarapuvalasa.
          </p>
        </div>
      </section>

      <section className="da-page-section">
        <div className="da-page-container">
          <div className="da-contact-grid">
            {/* Contact Details Card */}
            <div className="da-contact-card">
              <span className="da-section-subtitle">CAMPUS INFORMATION</span>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary, #15803d)', margin: '8px 0 20px 0' }}>
                Visit or Call Our Office
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(21, 128, 61, 0.1)', color: '#15803d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem' }}>Campus Address</strong>
                    <span style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      #7-44-194/1, Ward No.8, Balaji Nagar, Tagarapuvalasa, Bheemunipatnam(M), Visakhapatnam Dist., Andhra Pradesh - 531162
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(21, 128, 61, 0.1)', color: '#15803d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem' }}>Direct Helpline & WhatsApp</strong>
                    <a href="tel:+919985577636" style={{ color: '#15803d', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
                      +91 99855 77636
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(21, 128, 61, 0.1)', color: '#15803d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem' }}>Official Email</strong>
                    <a href="mailto:info@sribasara.in" style={{ color: '#15803d', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
                      info@sribasara.in
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(21, 128, 61, 0.1)', color: '#15803d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem' }}>Office Visiting Hours</strong>
                    <span style={{ color: '#475569', fontSize: '0.9rem' }}>
                      Monday – Saturday: 08:00 AM to 07:00 PM<br />
                      Sunday: 09:00 AM to 01:00 PM (Admissions Desk Open)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Message Form */}
            <div className="da-contact-card">
              <span className="da-section-subtitle">SEND A MESSAGE</span>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary, #15803d)', margin: '8px 0 20px 0' }}>
                Leave an Inquiry
              </h2>

              {sent ? (
                <div style={{ textAlign: 'center', padding: '36px 16px', background: 'rgba(21, 128, 61, 0.08)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>✉️</div>
                  <h3 style={{ color: '#15803d', fontWeight: 800, margin: '0 0 6px 0' }}>Message Dispatched!</h3>
                  <p style={{ color: '#334155', fontSize: '0.92rem', margin: 0 }}>
                    We have received your message. Our staff will respond to you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.92rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter your 10-digit phone number"
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.92rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>Message / Query *</label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Write your message or inquiry here..."
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.92rem' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="da-btn-primary"
                    style={{ border: 'none', cursor: 'pointer', textAlign: 'center', width: '100%', padding: '12px', marginTop: '6px' }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
