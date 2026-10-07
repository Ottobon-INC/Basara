import React, { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './MobileNav.css';

export default function MobileNav({ isOpen, onClose, links, logo }) {
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      // Focus management: focus the close button when opened
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="mobile-nav-overlay active" 
      role="dialog" 
      aria-modal="true" 
      aria-label="Mobile Navigation Menu"
      ref={overlayRef}
    >
      <div className="mobile-nav-header">
        <img src={logo} alt="Institution Logo" className="mobile-nav-logo" />
        <button 
          className="mobile-menu-close" 
          aria-label="Close mobile menu"
          onClick={onClose}
          ref={closeBtnRef}
        >
          {/* Using a simple text X or an SVG for no-dependency */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <nav aria-label="Mobile Navigation">
        <ul className="mobile-nav-list">
          {links.map((link, idx) => (
            <li key={idx}>
              {link.isPlaceholder ? (
                <span className="mobile-nav-placeholder">
                  {link.label} ({link.placeholderTitle})
                </span>
              ) : link.path.includes('#') ? (
                <a href={link.path} className="mobile-nav-link" onClick={onClose}>
                  {link.label}
                </a>
              ) : (
                <NavLink 
                  to={link.path} 
                  end={link.path.endsWith('/') || link.path.endsWith('degree') || link.path.endsWith('school') || link.path.endsWith('juniorcollege') || link.path.endsWith('defenseacademy')}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={onClose}
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
          <li style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
            <a href="/" className="mobile-nav-link" style={{ fontSize: '1rem', color: 'var(--color-muted)' }}>
              &larr; Main Website
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
