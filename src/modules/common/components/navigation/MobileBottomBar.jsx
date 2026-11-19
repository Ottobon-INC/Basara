import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MobileBottomBar.css';

export default function MobileBottomBar({
  phone = '+919985577636',
  whatsappNumber = '919985577636',
  whatsappText = 'Hello Sri Basara, I would like to enquire about admissions.',
  enquiryHref = '#admissions',
  applyHref = '/defenseacademy/admissions'
}) {
  useEffect(() => {
    document.body.classList.add('has-mobile-bar');
    return () => {
      document.body.classList.remove('has-mobile-bar');
    };
  }, []);

  const cleanPhone = phone.replace(/[^0-9+]/g, '');
  const encodedWaText = encodeURIComponent(whatsappText);
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedWaText}`;

  return (
    <nav className="mobile-bottom-bar" aria-label="Quick Mobile Actions">
      {/* 1. Call */}
      <a href={`tel:${cleanPhone}`} className="mobile-bottom-item item-call" aria-label="Call Sri Basara">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <span>Call</span>
      </a>

      {/* 2. WhatsApp */}
      <a 
        href={waUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mobile-bottom-item item-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        <span>WhatsApp</span>
      </a>

      {/* 3. Enquiry */}
      {enquiryHref.startsWith('/') ? (
        <Link to={enquiryHref} className="mobile-bottom-item item-enquiry" aria-label="Enquire for Admissions">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span>Enquiry</span>
        </Link>
      ) : (
        <a href={enquiryHref} className="mobile-bottom-item item-enquiry" aria-label="Enquire for Admissions">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span>Enquiry</span>
        </a>
      )}

      {/* 4. Apply */}
      {applyHref.startsWith('/') ? (
        <Link to={applyHref} className="mobile-bottom-item item-apply" aria-label="Apply for Admissions">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
          <span>Apply</span>
        </Link>
      ) : (
        <a href={applyHref} className="mobile-bottom-item item-apply" aria-label="Apply for Admissions">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
          <span>Apply</span>
        </a>
      )}
    </nav>
  );
}
