import React from 'react';
import DegreeCTA from './components/DegreeCTA';
import './degree-about.css';

export default function DegreeAbout() {
  return (
    <>
      {/* Inner Hero */}
      <section className="inner-hero-section">
        <div className="inner-hero-container">
          <h1 className="inner-hero-title">About Sri Basara Degree College</h1>
        </div>
      </section>
      
      {/* Narrative Section */}
      <section className="about-narrative-section">
        <div className="about-narrative-container">
          <div className="about-narrative-content">
            <h2>Our Institutional Commitment</h2>
            <p>
              In order to reach the coveted academic heights the management
              and the team of Basara Educational Society have been incessantly
              striving to carve out appropriate means. There has been no
              compromise regarding infrastructure and other facilities.
              Congenial academic atmosphere has been provided.
            </p>
          </div>
          <div className="about-narrative-image">
            <img src="/assets/degree/college-2.jpeg" alt="Sri Basara Degree College Campus" loading="lazy" />
          </div>
        </div>
      </section>
      
      {/* Leadership Section */}
      <section className="about-leadership-section">
        <div className="about-leadership-container">
          <div className="about-leadership-header">
            <h2>Our Leadership</h2>
          </div>
          <div className="about-leadership-grid">
            <div className="leadership-card">
              <div className="leadership-image-wrapper">
                <img src="/assets/degree/11.jpeg" alt="Shri Pudi Ramesh Garu, Chairman" loading="lazy" />
              </div>
              <h3>Shri Pudi Ramesh Garu</h3>
              <p>Chairman</p>
            </div>
            <div className="leadership-card">
              <div className="leadership-image-wrapper">
                <img src="/assets/degree/principal1.jpeg" alt="Shri CH Suresh Garu, Principal" loading="lazy" />
              </div>
              <h3>Shri CH Suresh Garu</h3>
              <p>Principal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="about-initiatives-section">
        <div className="about-initiatives-container">
          <h2>Academic & Student Initiatives</h2>
          <ul className="initiatives-list">
            <li>Awareness Programs on relevant social issues.</li>
            <li>Celebration of National festivals and significant days.</li>
            <li>Hosting, organizing, and participating in inter-collegiate competitions.</li>
            <li>Organizing spiritual and service activities.</li>
            <li>Training in soft skills and personality development.</li>
            <li>Career counselling and recruitment drives.</li>
            <li>Patronizing the meritorious with scholarships.</li>
          </ul>
        </div>
      </section>

      <DegreeCTA />
    </>
  );
}
