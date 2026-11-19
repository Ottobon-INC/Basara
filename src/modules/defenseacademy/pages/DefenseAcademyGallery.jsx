import React, { useState } from 'react';
import './defense-pages.css';

const GALLERY_IMAGES = [
  {
    category: 'training',
    title: 'Morning Physical Conditioning Drill',
    src: '/assets/defenseacademy/basara defense train.png',
    tag: 'Physical Training'
  },
  {
    category: 'training',
    title: 'Speed & Endurance Track Drills',
    src: '/assets/defenseacademy/basara defense running.png',
    tag: 'Running Track'
  },
  {
    category: 'obstacles',
    title: 'High Ditch & Obstacle Jump Training',
    src: '/assets/defenseacademy/basara defnse jumping.png',
    tag: 'Obstacle Course'
  },
  {
    category: 'training',
    title: 'Formation Foot Drills on Main Ground',
    src: '/assets/defenseacademy/basara defnse training.png',
    tag: 'Military Drills'
  },
  {
    category: 'academics',
    title: 'Interactive Defence Coaching Classroom',
    src: '/assets/defenseacademy/defense class rooms.png',
    tag: 'Academics'
  },
  {
    category: 'academics',
    title: 'Digital Study Rooms & Library Hall',
    src: '/assets/defenseacademy/defense rooms.png',
    tag: 'Study Halls'
  },
  {
    category: 'campus',
    title: 'Sri Basara Defence Academy Campus',
    src: '/assets/defenseacademy/basara defense academy.png',
    tag: 'Campus Grounds'
  },
  {
    category: 'training',
    title: 'Endurance & Core Calisthenics Routine',
    src: '/assets/defenseacademy/sribasara defense training.png',
    tag: 'Fitness Routine'
  },
  {
    category: 'training',
    title: 'Tactical Agility & Combat Drills',
    src: '/assets/defenseacademy/basara defensee training.png',
    tag: 'Tactical Drills'
  }
];

export default function DefenseAcademyGallery() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <>
      <section className="da-inner-hero">
        <div className="da-inner-hero-container">
          <span className="da-inner-hero-tag">LIFE AT BASARA</span>
          <h1 className="da-inner-hero-title">Cadet Life & Training Gallery</h1>
          <p className="da-inner-hero-desc">
            A visual window into the intense training, academic dedication, and camaraderie that defines everyday life at Sri Basara Defence Academy.
          </p>
        </div>
      </section>

      <section className="da-page-section">
        <div className="da-page-container">
          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
            {['all', 'training', 'obstacles', 'academics', 'campus'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '20px',
                  border: '1px solid #cbd5e1',
                  background: filter === cat ? 'var(--color-primary, #15803d)' : '#ffffff',
                  color: filter === cat ? '#ffffff' : '#475569',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textTransform: 'capitalize'
                }}
              >
                {cat === 'all' ? 'All Photos' : cat}
              </button>
            ))}
          </div>

          <div className="da-gallery-grid">
            {filtered.map((item, idx) => (
              <div key={idx} className="da-gallery-item">
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="da-gallery-overlay">
                  <div style={{ fontSize: '0.75rem', color: '#fed7aa', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                    {item.tag}
                  </div>
                  <div>{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
