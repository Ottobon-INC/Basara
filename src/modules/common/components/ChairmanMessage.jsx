import React from 'react';
import Container from './Container';
import './ChairmanMessage.css';

export default function ChairmanMessage() {
  return (
    <section className="chairman-section">
      {/* Faded Background College Image */}
      <img src="/assets/umbrella/college.jpg" alt="College Background" className="chairman-bg-image" />
      <div className="chairman-bg-overlay"></div>

      {/* Decorative Cursive Text in Background */}
      <div className="chairman-cursive-bg top-left">
        Education<br />Empowers<br />Lives
      </div>
      <div className="chairman-cursive-bg top-right">
        A Brighter<br />Tomorrow<br />Together
      </div>

      <Container>
        <div className="chairman-grid">
          {/* Left Column: Image and Profile Card */}
          <div className="chairman-left">
            <div className="chairman-image-wrapper">
              <div className="chairman-image-circle"></div>
              <img src="/assets/common/basara-chairman.jpg" alt="Sri Pudi Ramesh - Chairman" className="chairman-photo" />
            </div>

            <div className="chairman-card-group">
              <div className="chairman-profile-card">
                <h3 className="chairman-name">Sri Pudi Ramesh</h3>
                <p className="chairman-title">Founder & Chairman,<br/>Sri Basara Educational Institutions</p>
                
                <div className="chairman-signature">Sri Pudi Ramesh</div>
                
                <div className="chairman-motto">
                  LEARN &nbsp;|&nbsp; GROW &nbsp;|&nbsp; LEAD &nbsp;|&nbsp; SERVE
                </div>
              </div>

              <div className="chairman-quote-box">
                <div className="quote-marks top-left">“</div>
                <p>
                  Education should not merely prepare a child to earn a living; it should prepare a child to live with purpose, dignity, values, and responsibility.
                </p>
                <div className="quote-marks bottom-right">”</div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="chairman-right">
            <div className="chairman-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              CHAIRMAN'S MESSAGE
            </div>
            
            <h2 className="chairman-heading">
              My Vision. My Mission.<br/>Our Commitment.
            </h2>
            <div className="chairman-accent"></div>

            <div className="chairman-intro-text">
              <p>
                Education, to me, is not merely the process of imparting knowledge; it is the foundation upon which character, confidence, competence, and a responsible future are built.
              </p>
              <p>
                When I envisioned Sri Basara Educational Institutions, my dream was to create an educational environment where every child is recognised for their unique potential, guided with care, challenged to excel, and inspired to dream beyond boundaries.
              </p>
            </div>

            <div className="chairman-cards-grid">
              {/* Vision Card */}
              <div className="chairman-content-card">
                <div className="card-header">
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  </div>
                  <div className="card-title-group">
                    <h4>My Vision</h4>
                    <div className="card-title-accent"></div>
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    To build an institution that stands for academic excellence, strong values, innovation, discipline, and holistic development.
                  </p>
                  <p>
                    I want every student to emerge as a confident individual, compassionate human being, responsible citizen, and future leader.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="chairman-content-card">
                <div className="card-header">
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                  </div>
                  <div className="card-title-group">
                    <h4>My Mission</h4>
                    <div className="card-title-accent"></div>
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    To provide quality and value-based education supported by dedicated teachers, modern learning practices, technology, sports, creativity, and meaningful co-curricular experiences.
                  </p>
                  <p>
                    To develop the head to think, the heart to care, and the hands to serve.
                  </p>
                </div>
              </div>

              {/* Commitment Card */}
              <div className="chairman-content-card">
                <div className="card-header">
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <div className="card-title-group">
                    <h4>Our Commitment</h4>
                    <div className="card-title-accent"></div>
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    At Sri Basara, we believe that every child matters and every child has potential.
                  </p>
                  <p>
                    Our responsibility is to identify that potential, nurture it with patience and purpose, and provide the right opportunities for it to flourish.
                  </p>
                  <p>
                    We are committed to a safe, disciplined, inclusive, and inspiring learning environment for every student.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
