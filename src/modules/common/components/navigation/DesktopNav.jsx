import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function DesktopNav({ links }) {
  return (
    <nav className="desktop-nav" aria-label="Main Navigation">
      <ul className="nav-list">
        {links.map((link, idx) => (
          <li key={idx}>
            {link.isPlaceholder ? (
              <span className="nav-placeholder" title={link.placeholderTitle}>
                {link.label}
              </span>
            ) : link.path.includes('#') ? (
              <a href={link.path} className="nav-link">
                {link.label}
              </a>
            ) : (
              <NavLink 
                to={link.path} 
                end={link.path.endsWith('/') || link.path.endsWith('degree') || link.path.endsWith('school') || link.path.endsWith('juniorcollege') || link.path.endsWith('defenseacademy')}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
