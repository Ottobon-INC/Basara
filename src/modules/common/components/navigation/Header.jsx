import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Button from '../Button';
import './Header.css';

export default function Header({ institutionConfig, navigationLinks }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleBtnRef = useRef(null);

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
    // Return focus to toggle button for accessibility
    setTimeout(() => toggleBtnRef.current?.focus(), 50);
  };

  return (
    <>
      <div className={`top-bar theme-${institutionConfig.theme}`}>
        <Container className="top-bar-container" style={institutionConfig.id !== 'umbrella' ? { justifyContent: 'space-between' } : {}}>
          {institutionConfig.id !== 'umbrella' && (
            <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '0.875rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Back to Main Hub
            </NavLink>
          )}
          <div style={{ display: 'flex', gap: '1rem 2rem', flexWrap: 'wrap' }}>
            <a href={`tel:${institutionConfig.phone.replace(/[^0-9+]/g, '')}`}>
              {/* SVG Phone Icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:'8px'}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              {institutionConfig.phone}
            </a>
            <a href={`mailto:${institutionConfig.email}`}>
              {/* SVG Envelope Icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:'8px'}}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              {institutionConfig.email}
            </a>
          </div>
        </Container>
      </div>

      <header className={`site-header theme-${institutionConfig.theme}`}>
        <div className="main-header">
          <Container className="main-header-container">
            <div className="header-logo">
              <NavLink 
                to={institutionConfig.id === 'umbrella' ? '/' : `/${institutionConfig.id}`} 
                className="brand-logo" 
                aria-label={`${institutionConfig.name} Home`}
              >
                <img src={institutionConfig.logo} alt={`${institutionConfig.name} Logo`} className="site-logo" />
              </NavLink>
            </div>

            <div className="header-nav-center">
              <DesktopNav links={navigationLinks} />
            </div>

            <div className="header-actions">
              <Button 
                variant="primary" 
                theme={institutionConfig.theme}
                href={institutionConfig.id === 'degree' ? `/${institutionConfig.id}/admissions` : `/${institutionConfig.id}#admissions`}
              >
                {institutionConfig.id === 'degree' ? 'Apply Now' : 'Enquire Now'}
              </Button>
              <button 
                className="mobile-menu-toggle" 
                aria-expanded={mobileMenuOpen} 
                aria-controls="mobile-nav" 
                aria-label="Open mobile menu"
                onClick={() => setMobileMenuOpen(true)}
                ref={toggleBtnRef}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
            </div>
          </Container>
        </div>
      </header>

      <MobileNav 
        isOpen={mobileMenuOpen} 
        onClose={handleMobileMenuClose} 
        links={navigationLinks}
        logo={institutionConfig.logo}
      />
    </>
  );
}
