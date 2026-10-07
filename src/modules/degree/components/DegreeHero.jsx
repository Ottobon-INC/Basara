import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, GraduationCap, Users, Building, TrendingUp, BookOpen, UserPlus, Trophy } from 'lucide-react';
import './DegreeHero.css';

export default function DegreeHero() {
  return (
    <section className="degree-hero-section">
      <div className="degree-hero-container">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="degree-hero-left">
          
          <div className="hero-eyebrow">
            <span>SRI BASARA EDUCATIONAL INSTITUTIONS</span>
            <div className="eyebrow-line"></div>
          </div>

          <h1 className="hero-main-title">
            Building<br />
            Brighter Futures<br />
            Together<span className="title-dot">.</span>
          </h1>

          <p className="hero-description">
            Quality education. Strong values. Successful careers.
            Join Sri Basara Degree College and take the next step towards
            a brighter tomorrow.
          </p>

          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon"><GraduationCap size={24} /></div>
              <h4>UG Programs</h4>
              <p>Science & Commerce</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Users size={24} /></div>
              <h4>Experienced<br/>Faculty</h4>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Building size={24} /></div>
              <h4>Modern<br/>Facilities</h4>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><TrendingUp size={24} /></div>
              <h4>1000+ Alumni<br/>Success Stories</h4>
            </div>
          </div>

          <div className="hero-cta-group">
            <Link to="/degree/admissions" className="btn btn-red">
              APPLY NOW &rarr;
            </Link>
            <Link to="/degree/courses" className="btn btn-outline">
              VIEW COURSES &rarr;
            </Link>
          </div>

        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="degree-hero-right">
          
          {/* Background Image Area */}
          <div className="hero-image-container">
            <img 
              src="/assets/degree/college.jpg" 
              alt="Sri Basara Campus" 
              className="hero-bg-image" 
            />
            {/* The white fade overlay */}
            <div className="hero-image-fade"></div>
          </div>

        </div>
      </div>

    </section>
  );
}
