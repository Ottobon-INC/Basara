import React, { useState, useEffect, useCallback } from 'react';
import SchoolCTA from '../components/SchoolCTA';
import './school-pages.css';

const GALLERY_CATEGORIES = ['All', 'Celebrations', 'Sports', 'Activities', 'Campus Life', 'Academics'];

const GALLERY_PHOTOS = [
  // --- CELEBRATIONS ---
  {
    src: '/assets/school/gallery/vinayakachavithi-pic/vinayakachavithi-pic-2.jpeg',
    title: 'Vinayaka Chavithi Puja & Festival Celebration',
    category: 'Celebrations'
  },
  {
    src: '/assets/school/gallery/vinayakachavithi-pic/vinayakachavithi-pic-4.jpeg',
    title: 'Eco-Friendly Ganesha Crafting & Student Gathering',
    category: 'Celebrations'
  },
  {
    src: '/assets/school/gallery/diwali-pic/diwali-pic-2.jpeg',
    title: 'Diwali Festival Celebrations & Colorful Rangoli',
    category: 'Celebrations'
  },
  {
    src: '/assets/school/gallery/diwali-pic/diwali-pic-3.jpeg',
    title: 'Diwali Traditional Festivities & Cultural Joy',
    category: 'Celebrations'
  },
  {
    src: '/assets/school/gallery/krishnasatamii-pic/krishnasatamii-pic-1.jpeg',
    title: 'Sri Krishna Janmashtami Traditional Puja',
    category: 'Celebrations'
  },
  {
    src: '/assets/school/gallery/krishnasatamii-pic/krishnasatamii-pic-2.jpeg',
    title: 'Gopika & Krishna Costume & Cultural Dress',
    category: 'Celebrations'
  },
  {
    src: '/assets/school/gallery/indepenceday-pics/indepenceday-pics-2.jpeg',
    title: 'Independence Day Tricolor Flag Hoisting Ceremony',
    category: 'Celebrations'
  },
  {
    src: '/assets/school/gallery/indepenceday-pics/indepenceday-pics-3.jpeg',
    title: 'Patriotic Cultural Performances & Salutation',
    category: 'Celebrations'
  },
  {
    src: '/assets/school/gallery/indepenceday-pics/indepenceday-pics-5.jpeg',
    title: 'Student Parade & National Flag Tribute',
    category: 'Celebrations'
  },
  {
    src: '/assets/school/gallery/childrens-day/childrens-day-1.jpeg',
    title: "Children's Day Celebrations & Joyful Performances",
    category: 'Celebrations'
  },
  {
    src: '/assets/school/gallery/childrens-day/childrens-day-2.jpeg',
    title: "Children's Day Special Assembly & Fun Events",
    category: 'Celebrations'
  },
  {
    src: '/assets/school/gallery/christmas-day/christmas-day-1.jpeg',
    title: 'Christmas Day Festive Celebration & Joy',
    category: 'Celebrations'
  },

  // --- SPORTS ---
  {
    src: '/assets/school/gallery/cricket-pics/cricket-pics-1.jpeg',
    title: 'Annual Interschool Cricket Tournament Match',
    category: 'Sports'
  },
  {
    src: '/assets/school/gallery/cricket-pics/cricket-pics-2.jpeg',
    title: 'Cricket Team Match Action on Campus Grounds',
    category: 'Sports'
  },
  {
    src: '/assets/school/gallery/cricket-pics/cricket-pics-3.jpeg',
    title: 'Fielding, Bowling & Batting Practice Drills',
    category: 'Sports'
  },
  {
    src: '/assets/school/gallery/cricket-pics/cricket-pics-4.jpeg',
    title: 'Cricket Trophy Celebration & Sportsmanship',
    category: 'Sports'
  },
  {
    src: '/assets/school/gallery/yoga-day/yoga-day-1.jpeg',
    title: 'International Yoga Day Asanas & Wellness Session',
    category: 'Sports'
  },
  {
    src: '/assets/school/gallery/yoga-day/yoga-day-2.jpeg',
    title: 'Student Mass Yoga Practice & Mindfulness',
    category: 'Sports'
  },
  {
    src: '/assets/school/gallery/yoga-day/yoga-day-3.jpeg',
    title: 'Morning Yoga Postures & Health Discipline',
    category: 'Sports'
  },

  // --- ACTIVITIES ---
  {
    src: '/assets/school/gallery/filed-trip/filed-trip-1.jpeg',
    title: 'Experiential Outdoor Field Trip & Nature Tour',
    category: 'Activities'
  },
  {
    src: '/assets/school/gallery/filed-trip/filed-trip-3.jpeg',
    title: 'Student Exploration & Heritage Field Visit',
    category: 'Activities'
  },
  {
    src: '/assets/school/gallery/filed-trip/filed-trip-4.jpeg',
    title: 'Group Excursion & Educational Discovery Trip',
    category: 'Activities'
  },
  {
    src: '/assets/school/gallery/activity-book-2-1-/activity-book-2-1--14.jpeg',
    title: 'Creative Activity Book Showcase & Artwork',
    category: 'Activities'
  },
  {
    src: '/assets/school/gallery/activity-book-2-1-/activity-book-2-1--3.jpeg',
    title: 'Hands-on Science & Creative Craft Projects',
    category: 'Activities'
  },
  {
    src: '/assets/school/gallery/activity-book-2-1-/activity-book-2-1--8.jpeg',
    title: 'Interactive Project Displays & Student Exhibits',
    category: 'Activities'
  },
  {
    src: '/assets/school/gallery/red-day/red-day-1.jpeg',
    title: 'Kindergarten & Primary Red Day Color Celebration',
    category: 'Activities'
  },
  {
    src: '/assets/school/gallery/red-day/red-day-2.jpeg',
    title: 'Creative Red Day Crafts & Theme Costumes',
    category: 'Activities'
  },
  {
    src: '/assets/school/gallery/give-away-pic/give-away-pic-1.jpeg',
    title: 'Academic Merit & Competition Prize Distribution',
    category: 'Activities'
  },
  {
    src: '/assets/school/gallery/give-away-pic/give-away-pic-2.jpeg',
    title: 'Student Recognition Ceremony & Gift Giveaways',
    category: 'Activities'
  },

  // --- CAMPUS LIFE ---
  {
    src: '/assets/school/gallery/first-day-school/first-day-school-2.jpeg',
    title: 'Welcoming Students on the First Day of School',
    category: 'Campus Life'
  },
  {
    src: '/assets/school/gallery/first-day-school/first-day-school-8.jpeg',
    title: 'Excited Learners Entering Campus for New Session',
    category: 'Campus Life'
  },
  {
    src: '/assets/school/gallery/first-day-school/first-day-school-9.jpeg',
    title: 'Classroom Welcoming & Cheerful Induction',
    category: 'Campus Life'
  },
  {
    src: '/assets/school/gallery/ptm-pic/ptm-pic-7.jpeg',
    title: 'Parent-Teacher Meeting & Academic Performance Review',
    category: 'Campus Life'
  },
  {
    src: '/assets/school/gallery/ptm-pic/ptm-pic-1.jpeg',
    title: 'One-on-One Parent Faculty Consultation',
    category: 'Campus Life'
  },
  {
    src: '/assets/school/gallery/ptm-pic/ptm-pic-3.jpeg',
    title: 'Collaborative Parent-Educator Progress Discussion',
    category: 'Campus Life'
  },
  {
    src: '/assets/school/collegge.png',
    title: 'Main School Campus & Dedicated GPS Bus Fleet',
    category: 'Campus Life'
  },

  // --- ACADEMICS ---
  {
    src: '/assets/school/academics.png',
    title: 'Interactive Smart Classrooms & Academic Instruction',
    category: 'Academics'
  },
  {
    src: '/assets/umbrella/student_robotics.jpg',
    title: 'STEM, Robotics & Science Innovation Lab',
    category: 'Academics'
  },
  {
    src: '/assets/umbrella/student_reading.jpg',
    title: 'Knowledge Resource Library & Reading Circle',
    category: 'Academics'
  },
  {
    src: '/assets/umbrella/student_laptop.jpg',
    title: 'Digital Computer & IT Laboratory Sessions',
    category: 'Academics'
  },
  {
    src: '/assets/degree/facilities/10.jpeg',
    title: 'Natural Sciences & Biology Discovery Laboratory',
    category: 'Academics'
  }
];

export default function SchoolGallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredPhotos = filter === 'All' 
    ? GALLERY_PHOTOS 
    : GALLERY_PHOTOS.filter(p => p.category === filter);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1));
    }
  }, [lightboxIndex, filteredPhotos.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0));
    }
  }, [lightboxIndex, filteredPhotos.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, handleClose, handlePrev, handleNext]);

  return (
    <>
      {/* Inner Hero */}
      <section className="school-inner-hero">
        <div className="school-inner-hero-container">
          <span className="school-inner-hero-tag">Photo Showcase</span>
          <h1 className="school-inner-hero-title">School Life & Gallery</h1>
          <p className="school-inner-hero-desc">
            A glimpse into the vibrant moments, festival celebrations, sports tournaments, hands-on activities, and campus life at Sri Basara Leads School.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          {/* Filter Pills */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '0.65rem', 
              marginBottom: '2.5rem', 
              flexWrap: 'wrap' 
            }}
          >
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = filter === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setFilter(cat);
                    setLightboxIndex(null);
                  }}
                  style={{
                    padding: '0.55rem 1.45rem',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    border: '1.5px solid',
                    cursor: 'pointer',
                    borderColor: isActive ? 'var(--color-accent, #B95308)' : '#cbd5e1',
                    backgroundColor: isActive ? 'var(--color-accent, #B95308)' : '#ffffff',
                    color: isActive ? '#ffffff' : '#302F7F',
                    boxShadow: isActive ? '0 4px 14px rgba(185, 83, 8, 0.28)' : '0 2px 4px rgba(0, 0, 0, 0.03)',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Photo Grid */}
          <div className="school-gallery-grid">
            {filteredPhotos.map((photo, idx) => (
              <div 
                key={`${photo.src}-${idx}`} 
                className="school-gallery-card"
                onClick={() => setLightboxIndex(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setLightboxIndex(idx); }}
              >
                <img 
                  src={photo.src} 
                  alt={photo.title} 
                  loading="lazy" 
                />
                <div className="school-gallery-caption">
                  {photo.title}
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#64748b' }}>
              No photos found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div 
          className="school-gallery-modal-overlay"
          onClick={handleClose}
        >
          <div 
            className="school-gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="school-gallery-modal-close"
              onClick={handleClose}
              title="Close (Esc)"
              aria-label="Close"
            >
              &times;
            </button>

            <button 
              className="school-gallery-modal-nav prev"
              onClick={handlePrev}
              title="Previous Photo"
              aria-label="Previous"
            >
              &#10094;
            </button>

            <img 
              className="school-gallery-modal-img"
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].title}
            />

            <button 
              className="school-gallery-modal-nav next"
              onClick={handleNext}
              title="Next Photo"
              aria-label="Next"
            >
              &#10095;
            </button>

            <div className="school-gallery-modal-info">
              <span 
                style={{
                  display: 'inline-block',
                  background: 'var(--color-accent, #B95308)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '12px',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {filteredPhotos[lightboxIndex].category}
              </span>
              <h3>{filteredPhotos[lightboxIndex].title}</h3>
              <p>Photo {lightboxIndex + 1} of {filteredPhotos.length}</p>
            </div>
          </div>
        </div>
      )}

      <SchoolCTA />
    </>
  );
}
