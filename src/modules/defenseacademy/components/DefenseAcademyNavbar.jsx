import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useEnquiryModal } from '../../common/context/EnquiryModalContext';
import './DefenseAcademyNavbar.css';

const DA_NAV_LINKS = [
  { label: 'Home', path: '/defenseacademy', end: true },
  { label: 'About Us', path: '/defenseacademy/about', end: false },
  { label: 'Academics', path: '/defenseacademy/academics', end: false },
  { label: 'Facilities', path: '/defenseacademy/facilities', end: false },
  { label: 'Achievements', path: '/defenseacademy/achievements', end: false },
  { label: 'Admissions', path: '/defenseacademy/admissions', end: false },
  { label: 'Gallery', path: '/defenseacademy/gallery', end: false },
  { label: 'Transport', path: '/defenseacademy/transport', end: false },
  { label: 'Contact Us', path: '/defenseacademy/contact', end: false }
];

export default function DefenseAcademyNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const toggleBtnRef = useRef(null);
  const { openEnquiryModal } = useEnquiryModal();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* 1. Top Information Bar */}
      <div className="da-top-bar">
        <div className="da-nav-container da-top-bar-inner">
          <Link to="/" className="da-back-hub-link" title="Return to Sri Basara Educational Institutions">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Main Hub</span>
          </Link>

          <div className="da-top-contact-info">
            <a href="tel:+919985577636" className="da-top-contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+91 99855 77636</span>
            </a>
            <a href="mailto:info@sribasara.in" className="da-top-contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>info@sribasara.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <header className="da-main-header">
        <div className="da-nav-container da-main-header-inner">
          {/* Logo on the left */}
          <div className="da-header-logo-wrap">
            <Link to="/defenseacademy" className="da-logo-link" aria-label="Sri Basara Defence Academy Home">
              <img 
                src="/assets/defenseacademy/SRI BASARA.png" 
                alt="Sri Basara Defence Academy" 
                className="da-site-logo" 
              />
            </Link>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="da-desktop-nav" aria-label="Defence Academy Navigation">
            <ul className="da-nav-list">
              {DA_NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.end}
                    className={({ isActive }) => 
                      `da-nav-item-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action CTA & Mobile Hamburger */}
          <div className="da-header-actions">
            <button 
              type="button" 
              className="da-apply-btn" 
              onClick={() => openEnquiryModal('Sri Basara Defence Academy')}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              ENQUIRE NOW
            </button>

            <button
              type="button"
              className="da-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              ref={toggleBtnRef}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 3. Responsive Mobile Menu Drawer */}
      <div 
        className={`da-mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      <aside 
        className={`da-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation Drawer"
      >
        <div className="da-mobile-drawer-header">
          <img 
            src="/assets/defenseacademy/SRI BASARA.png" 
            alt="Sri Basara Defence Academy" 
            className="da-mobile-drawer-logo" 
          />
          <button 
            type="button"
            className="da-mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="da-mobile-nav-body">
          <ul className="da-mobile-nav-list">
            <li>
              <NavLink 
                to="/defenseacademy" 
                end 
                className={({ isActive }) => `da-mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="da-mobile-icon">🏠</span>
                <span>Home</span>
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/defenseacademy/about" 
                className={({ isActive }) => `da-mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="da-mobile-icon">🏛️</span>
                <span>About Us</span>
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/defenseacademy/academics" 
                className={({ isActive }) => `da-mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="da-mobile-icon">📚</span>
                <span>Academics</span>
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/defenseacademy/achievements" 
                className={({ isActive }) => `da-mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="da-mobile-icon">🏆</span>
                <span>Achievements</span>
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/defenseacademy/admissions" 
                className={({ isActive }) => `da-mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="da-mobile-icon">📝</span>
                <span>Admissions</span>
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/defenseacademy/gallery" 
                className={({ isActive }) => `da-mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="da-mobile-icon">🖼️</span>
                <span>Gallery</span>
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/defenseacademy/transport" 
                className={({ isActive }) => `da-mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="da-mobile-icon">🚌</span>
                <span>Transport</span>
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/defenseacademy/contact" 
                className={({ isActive }) => `da-mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="da-mobile-icon">📞</span>
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>

          <div className="da-mobile-actions">
            <button 
              type="button" 
              className="da-mobile-apply-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                openEnquiryModal('Sri Basara Defence Academy');
              }}
              style={{ border: 'none', cursor: 'pointer', width: '100%' }}
            >
              ENQUIRE NOW
            </button>

            <Link 
              to="/" 
              className="da-mobile-hub-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Main Hub</span>
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
