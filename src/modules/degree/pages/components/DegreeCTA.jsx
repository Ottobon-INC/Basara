import React from 'react';
import { Link } from 'react-router-dom';

export default function DegreeCTA() {
  return (
    <section className="homepage-cta-section">
      <div className="homepage-cta-container">
        <h2 className="homepage-cta-heading">Explore Your Admission Options</h2>
        <p className="homepage-cta-text">
          Ready to take the next step? View detailed admission information or reach out to our team to learn more about joining Sri Basara Degree College.
        </p>
        <div className="homepage-cta-actions">
          <Link to="/degree/admissions" className="btn-cta-primary">Admissions Information</Link>
          <Link to="/degree/contact" className="btn-cta-secondary">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
