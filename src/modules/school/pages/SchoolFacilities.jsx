import React from 'react';
import SchoolCTA from '../components/SchoolCTA';
import './school-pages.css';

const FACILITIES_LIST = [
  {
    title: 'Smart Digital Classrooms',
    desc: 'Spacious, well-ventilated, and acoustically treated learning studios equipped with modern desks, natural lighting, and digital learning tools.',
    image: '/assets/defenseacademy/defense class rooms.png',
    category: 'Classroom Infrastructure',
    tags: ['Spacious Classrooms', 'Ergonomic Desks', 'Audio-Visual Ready'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    title: 'Advanced Science Laboratories',
    desc: 'Fully equipped Physics, Chemistry, and General Science laboratories adhering to strict safety protocols, enabling experiential scientific inquiry and hands-on discovery.',
    image: '/assets/degree/facilities/1.jpeg',
    category: 'Science Laboratory',
    tags: ['Chemistry & Physics', 'Apparatus & Reagents', 'Safety Standards'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31L4.2 18.4A2 2 0 0 0 5.8 21h12.4a2 2 0 0 0 1.6-2.6L14 9.31V2"></path>
        <line x1="8" y1="2" x2="16" y2="2"></line>
        <line x1="8" y1="15" x2="16" y2="15"></line>
      </svg>
    )
  },
  {
    title: 'Computer & IT Laboratory',
    desc: 'Dedicated computing lab with individual workstations, internet connectivity, and educational software empowering digital literacy from early grades.',
    image: '/assets/degree/facilities/5.jpeg',
    category: 'Digital Literacy',
    tags: ['Workstation Desks', 'Computer Systems', 'Digital Education'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="2" y1="20" x2="22" y2="20"></line>
      </svg>
    )
  },
  {
    title: 'Knowledge Resource Library',
    desc: 'A vast repository of reference books, illustrated storybooks, periodicals, encyclopedias, and educational literature fostering a lifelong reading culture.',
    image: '/assets/umbrella/student_reading.jpg',
    category: 'Resource Center',
    tags: ['Reference Books', 'Children Storybooks', 'Quiet Study Zone'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    )
  },
  {
    title: 'Sports & Athletic Arena',
    desc: 'Expansive outdoor grounds and activity areas supporting athletics, cricket, basketball, volleyball, yoga drills, and physical fitness development.',
    image: '/assets/school/campus.png',
    category: 'Sports & Fitness',
    tags: ['Outdoor Play Area', 'Athletic Drills', 'Sports Mentorship'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path>
      </svg>
    )
  },
  {
    title: 'GPS-Tracked Transport Fleet',
    desc: 'Dedicated fleet of modern school buses covering Tagarapuvalasa, Bheemunipatnam, Anandapuram, and neighboring routes with GPS tracking and bus attendants.',
    image: '/assets/school/collegge.png',
    category: 'Safe Transport',
    tags: ['GPS Live Tracking', 'Trained Drivers', 'Bus Attendants'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="15" rx="3"></rect>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <circle cx="7.5" cy="15.5" r="1.5"></circle>
        <circle cx="16.5" cy="15.5" r="1.5"></circle>
      </svg>
    )
  },
  {
    title: 'Biology & Life Sciences Lab',
    desc: 'Dedicated observation laboratory equipped with compound microscopes, botanical specimens, and anatomical charts fostering curiosity in natural sciences.',
    image: '/assets/degree/facilities/10.jpeg',
    category: 'Life Sciences',
    tags: ['Microscopes Lab', 'Botanical Specimens', 'Anatomy Charts'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    )
  },
  {
    title: 'STEM & Robotics Studio',
    desc: 'Hands-on experiential learning environment where students explore robotics kits, scientific models, and collaborative experimental projects.',
    image: '/assets/umbrella/student_robotics.jpg',
    category: 'STEM & Innovation',
    tags: ['Robotics Kits', 'STEM Experiments', 'Collaborative Learning'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    )
  }
];

export default function SchoolFacilities() {
  return (
    <>
      {/* Inner Hero */}
      <section className="school-inner-hero">
        <div className="school-inner-hero-container">
          <span className="school-inner-hero-tag">World-Class Infrastructure</span>
          <h1 className="school-inner-hero-title">Campus & Facilities</h1>
          <p className="school-inner-hero-desc">
            A state-of-the-art campus environment designed to nurture physical health, intellectual curiosity, and creative excellence.
          </p>
        </div>
      </section>

      {/* Facilities Showcase with Visual Photography Cards */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-section-header">
            <span className="school-section-subtitle">Infrastructure</span>
            <h2 className="school-section-title">Designed for Modern Learning</h2>
            <p className="school-section-desc">
              Every facility at Sri Basara Leads International School is constructed with student safety, comfort, and interactive engagement in mind.
            </p>
          </div>

          <div className="school-facilities-grid">
            {FACILITIES_LIST.map((fac, idx) => (
              <article key={idx} className="school-facility-card">
                {/* Visual Image Header */}
                <div className="school-facility-img-wrap">
                  <img 
                    src={fac.image} 
                    alt={fac.title} 
                    className="school-facility-img" 
                    loading="lazy" 
                  />
                  <span className="school-facility-badge">{fac.category}</span>
                </div>

                {/* Card Content Body */}
                <div className="school-facility-content">
                  <div className="school-facility-header">
                    <div className="school-facility-icon-wrap" aria-hidden="true">
                      {fac.icon}
                    </div>
                    <h3 className="school-facility-title">{fac.title}</h3>
                  </div>

                  <p className="school-facility-desc">{fac.desc}</p>

                  <div className="school-facility-tags">
                    {fac.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="school-facility-tag-item">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / Campus Narrative Section */}
      <section className="school-page-section">
        <div className="school-page-container">
          <div className="school-narrative-grid">
            <div className="school-narrative-img-wrap">
              <img src="/assets/school/campus.png" alt="Sri Basara Campus Activity" loading="lazy" />
            </div>
            <div className="school-narrative-text">
              <span className="school-section-subtitle">Vibrant Campus Life</span>
              <h2>A Safe, Inspiring Second Home for Students</h2>
              <p>
                From morning school assemblies and interactive classroom debates to after-school sports and cultural club rehearsals, our campus buzzes with life, enthusiasm, and purpose.
              </p>
              <p>
                We believe that physical spaces significantly impact learning outcomes. That is why our classrooms are flooded with natural light, our sports zones are curated for injury prevention, and our common spaces inspire collaborative projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SchoolCTA />
    </>
  );
}
