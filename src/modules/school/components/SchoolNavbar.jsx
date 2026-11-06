import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './SchoolNavbar.css';

const SCHOOL_NAV_LINKS = [
  { label: 'Home', path: '/school', end: true },
  { label: 'About Us', path: '/school/about', end: false },
  { label: 'Courses', path: '/school/courses', end: false },
  { label: 'Admissions', path: '/school/admissions', end: false },
  { label: 'Facilities', path: '/school/facilities', end: false },
  { label: 'Faculty', path: '/school/faculty', end: false },
  { label: 'Gallery', path: '/school/gallery', end: false },
  { label: 'Contact Us', path: '/school/contact', end: false }
];

export default function SchoolNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const toggleBtnRef = useRef(null);

  // Close mobile menu on route change
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
      <div className="school-top-bar">
        <div className="school-nav-container school-top-bar-inner">
          <Link to="/" className="school-back-hub-link" title="Return to Sri Basara Educational Institutions">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Main Hub</span>
          </Link>

          <div className="school-top-contact-info">
            <a href="tel:9985577636" className="school-top-contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>9985577636</span>
            </a>
            <a href="mailto:info@sribasara.in" className="school-top-contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>info@sribasara.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main School Navigation Bar */}
      <header className="school-main-header">
        <div className="school-nav-container school-main-header-inner">
          {/* Logo on the left */}
          <div className="school-header-logo-wrap">
            <Link to="/school" className="school-logo-link" aria-label="Sri Basara Leads School Home">
              <img 
                src="/assets/school/SRI BASARA.png" 
                alt="Sri Basara Leads School" 
                className="school-site-logo" 
              />
            </Link>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="school-desktop-nav" aria-label="School Navigation">
            <ul className="school-nav-list">
              {SCHOOL_NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.end}
                    className={({ isActive }) => 
                      `school-nav-item-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action CTA & Mobile Hamburger */}
          <div className="school-header-actions">
            <Link to="/school/admissions" className="school-apply-btn">
              APPLY NOW
            </Link>

            <button
              type="button"
              className="school-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open School navigation menu"
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
        className={`school-mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      <aside 
        className={`school-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation Drawer"
      >
        <div className="school-mobile-drawer-header">
          <img 
            src="/assets/school/SRI BASARA.png" 
            alt="Sri Basara Leads School" 
            className="school-mobile-drawer-logo" 
          />
          <button 
            type="button"
            className="school-mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="school-mobile-nav-body">
          <ul className="school-mobile-nav-list">
            {SCHOOL_NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.end}
                  className={({ isActive }) => 
                    `school-mobile-nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="school-mobile-actions">
            <Link 
              to="/school/admissions" 
              className="school-mobile-apply-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              APPLY NOW
            </Link>

            <Link 
              to="/" 
              className="school-mobile-hub-link"
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

