import React from 'react';
import DegreeCTA from './components/DegreeCTA';
import './degree-facilities.css';

export default function DegreeFacilities() {
  return (
    <>
      {/* Inner Hero */}
      <section className="inner-hero-section">
        <div className="inner-hero-container">
          <h1 className="inner-hero-title">Campus & Facilities</h1>
        </div>
      </section>
      
      {/* Institutional Highlights Section */}
      <section className="facilities-highlights-section">
        <div className="facilities-highlights-container">
          <div className="highlight-card">
            <h3>Academic & Infrastructure</h3>
            <p>Excellent infrastructure and academic facilities designed to support a rigorous and focused educational environment.</p>
          </div>
          <div className="highlight-card">
            <h3>Student Development</h3>
            <p>Training in essential communication skills, helping students build confidence and readiness for the professional world.</p>
          </div>
          <div className="highlight-card">
            <h3>Campus Activities</h3>
            <p>Extracurricular activities, sports, and games that encourage holistic development and a healthy campus life.</p>
          </div>
          <div className="highlight-card">
            <h3>Career Support</h3>
            <p>Dedicated placement programmes and career support to guide students toward successful postgraduate opportunities.</p>
          </div>
        </div>
      </section>

      {/* Photography Gallery Section */}
      <section className="facilities-gallery-section">
        <div className="facilities-gallery-container">
          <div className="facilities-gallery-header">
            <h2>Campus Gallery</h2>
          </div>
          
          <div className="editorial-gallery-grid">
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/1.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/2.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/3.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/4.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/5.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/6.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/7.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/8.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/9.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/10.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/11.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/12.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/13.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/14.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/15.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/16.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/17.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
            <div className="gallery-image-wrapper">
              <img src="/assets/degree/facilities/18.jpeg" alt="[Requires Confirmation: Sri Basara Facility Photo]" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <DegreeCTA />
    </>
  );
}
