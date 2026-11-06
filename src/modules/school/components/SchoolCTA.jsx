import React from 'react';
import { Link } from 'react-router-dom';
import './SchoolCTA.css';

export default function SchoolCTA() {
  return (
    <section className="school-cta-section">
      <div className="school-cta-container">
        <span className="school-cta-badge">Admissions Open</span>
        <h2 className="school-cta-heading">Shape Your Child's Future with International Standards</h2>
        <p className="school-cta-text">
          Experience an inspiring learning community dedicated to academic rigor, strong character, and creative innovation. Schedule a campus tour or apply today.
        </p>
        <div className="school-cta-actions">
          <Link to="/school/admissions" className="school-btn-cta-primary">
            Apply for Admission
          </Link>
          <Link to="/school/contact" className="school-btn-cta-secondary">
            Contact Admissions Desk
          </Link>
        </div>
      </div>
    </section>
  );
}

