import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../common/components/Container';
import Section from '../../common/components/Section';
import Button from '../../common/components/Button';
import ChairmanMessage from '../../common/components/ChairmanMessage';
import './umbrella-about.css';

export default function UmbrellaAbout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ──────────────── Hero Banner ──────────────── */}
      <section className="about-hero">
        <img
          src="/assets/umbrella/college.jpg"
          alt="Sri Basara Campus"
          className="about-hero-bg"
          loading="eager"
        />
        <div className="about-hero-overlay"></div>
        <Container>
          <div className="about-hero-content">
            <span className="about-hero-tagline">About Us</span>
            <h1 className="about-hero-title">Sri Basara Educational Society</h1>
            <p className="about-hero-subtitle">
              Building Foundations. Shaping Futures. Creating Leaders.
            </p>
          </div>
        </Container>
      </section>

      {/* ──────────────── Chairman Message (Replaces old intro/vision/quote) ──────────────── */}
      <ChairmanMessage />

      {/* ──────────────── Footer CTA ──────────────── */}
      <Section bg="surface">
        <div className="about-footer-info">
          <h2>Sri Basara Educational Society</h2>
          <p className="about-footer-tagline">Where Education Builds the Future.</p>
          <div className="about-footer-institutions">
            <Link to="/school">Sri Basara Leads School with International Standards</Link>
            <span className="about-footer-divider">|</span>
            <Link to="/juniorcollege">Sri Basara Junior Colleges</Link>
            <span className="about-footer-divider">|</span>
            <Link to="/degree">Sri Basara Degree College</Link>
            <span className="about-footer-divider">|</span>
            <Link to="/defenseacademy">Sri Basara Defence Academy</Link>
          </div>
          <p className="about-footer-location">
            📍 Tagarapuvalasa, Visakhapatnam District, Andhra Pradesh.
          </p>
          <Button variant="primary" theme="umbrella" href="/#institutions">
            Explore Our Institutions
          </Button>
        </div>
      </Section>
    </>
  );
}
