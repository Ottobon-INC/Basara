import React from 'react';
import { Link } from 'react-router-dom';
import './defense-pages.css';

const FACILITIES = [
  {
    tag: 'OUTDOOR INFRASTRUCTURE',
    title: 'Physical Training Area',
    desc: 'Sprawling outdoor training ground engineered for daily calisthenics, military conditioning, team formation drills, and physical endurance conditioning.',
    img: '/assets/defenseacademy/basara defense train.png'
  },
  {
    tag: 'CARDIO & STAMINA',
    title: 'Running Track',
    desc: 'Dedicated 400-meter all-weather running track for speed sprints, timed 1600m stamina runs, endurance testing, and cardiovascular conditioning under instructor supervision.',
    img: '/assets/defenseacademy/basara defense running.png'
  },
  {
    tag: 'STRENGTH & CONDITIONING',
    title: 'Fitness Training Ground',
    desc: 'State-of-the-art strength training zone featuring pull-up rigs, parallel bars, rope climbs, tyres, and weighted circuits designed to meet defense physical standards.',
    img: '/assets/defenseacademy/sribasara defense training.png'
  },
  {
    tag: 'MILITARY DISCIPLINE',
    title: 'Drill Area & Parade Ground',
    desc: 'Formal ceremonial drill square for march past, foot drills, ceremonial salutes, uniform inspections, and fostering unit cohesion and command adherence.',
    img: '/assets/defenseacademy/basara defnse training.png'
  },
  {
    tag: 'ENDURANCE & ADVENTURE',
    title: 'Outdoor Activities & Obstacles',
    desc: 'Full-scale replica obstacle course featuring 9-foot ditch, high wall climb, zigzag balance beam, ramp jump, and tiger leap to build raw courage and agility.',
    img: '/assets/defenseacademy/basara defnse jumping.png'
  },
  {
    tag: 'ACADEMIC EXCELLENCE',
    title: 'Modern Digital Classrooms',
    desc: 'Spacious, well-ventilated smart classrooms equipped with multimedia audiovisual teaching aids, dedicated study desks, and extensive reference library materials.',
    img: '/assets/defenseacademy/defense class rooms.png'
  }
];

export default function DefenseAcademyFacilities() {
  return (
    <>
      <section className="da-inner-hero">
        <div className="da-inner-hero-container">
          <span className="da-inner-hero-tag">CAMPUS & INFRASTRUCTURE</span>
          <h1 className="da-inner-hero-title">World-Class Defense Training Grounds</h1>
          <p className="da-inner-hero-desc">
            Purpose-built infrastructure designed to simulate real military training environments, fostering physical toughness, mental grit, and unyielding discipline.
          </p>
        </div>
      </section>

      <section className="da-page-section">
        <div className="da-page-container">
          <div className="da-section-header">
            <span className="da-section-subtitle">Training Infrastructure</span>
            <h2 className="da-section-title">Engineered for Soldierly Excellence</h2>
            <p className="da-section-desc">
              Every facility at Sri Basara Defence Academy is designed and maintained to meet strict armed forces training and physical endurance standards.
            </p>
          </div>

          <div className="da-facilities-grid">
            {FACILITIES.map((fac, idx) => (
              <div key={idx} className="da-facility-card">
                <div className="da-facility-img-wrap">
                  <img src={fac.img} alt={fac.title} loading="lazy" />
                </div>
                <div className="da-facility-body">
                  <span className="da-facility-tag">{fac.tag}</span>
                  <h3 className="da-facility-title">{fac.title}</h3>
                  <p className="da-facility-desc">{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="da-cta-banner">
            <h3 className="da-cta-title">Experience Our Campus in Person</h3>
            <p className="da-cta-desc">
              We welcome parents and students to visit Sri Basara Defence Academy, tour the obstacle grounds, interact with our coaches, and observe live training sessions.
            </p>
            <div className="da-cta-btns">
              <Link to="/defenseacademy/contact" className="da-btn-primary">
                Schedule Campus Visit
              </Link>
              <Link to="/defenseacademy/admissions" className="da-btn-secondary">
                View Admission Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
