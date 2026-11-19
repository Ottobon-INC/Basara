import React, { useState, useMemo } from 'react';
import SchoolCTA from '../components/SchoolCTA';
import './school-pages.css';
import './school-faculty.css';

const TEACHING_STAFF = [
  {
    sno: 1,
    name: 'Smt. S K Rekha',
    designation: 'School Principal',
    qualification: 'M.Sc (Bio-Chem), M.Sc (Organic Chem), M.A (Psychology), M.Phil, B.Ed',
    phone: '89789186332',
    category: 'Leadership'
  },
  {
    sno: 2,
    name: 'Sri M Bhaskar',
    designation: 'Dean',
    qualification: 'Post Graduate',
    phone: '9985341999',
    category: 'Leadership'
  },
  {
    sno: 3,
    name: 'Sri N Kesav',
    designation: 'Head Master',
    qualification: 'M.Com, M.B.A, MHRM, B.Ed, PGDGBCA',
    phone: '9703339839',
    category: 'Leadership'
  },
  {
    sno: 4,
    name: 'Miss I Meghana',
    designation: 'PP-II Mother Teacher',
    qualification: 'B.Sc (Computers)',
    phone: '7075460159',
    category: 'Pre-Primary'
  },
  {
    sno: 5,
    name: 'Miss Seerapu Neelima',
    designation: 'PP-II Mother Teacher',
    qualification: 'MBA (Finance)',
    phone: '9182307142',
    category: 'Pre-Primary'
  },
  {
    sno: 6,
    name: 'Smt. P Ramya Krishna',
    designation: '3rd Class Teacher (Maths)',
    qualification: 'B.Com (Computers)',
    phone: '9441867815',
    category: 'Primary'
  },
  {
    sno: 7,
    name: 'Smt. Ch Prasanthi',
    designation: 'ELGA Teacher (Grades 2 & 3)',
    qualification: 'MBA (HR)',
    phone: '9014289901',
    category: 'Primary'
  },
  {
    sno: 8,
    name: 'Smt. D Ramya',
    designation: 'EVS Teacher (Grades 2 & 3)',
    qualification: 'B.Sc, D.Ed',
    phone: '7288000929',
    category: 'Primary'
  },
  {
    sno: 9,
    name: 'Smt. T Hareesha',
    designation: 'Telugu Teacher (3 to 5) & 6th Class Social',
    qualification: 'M.Com',
    phone: '9493129598',
    category: 'Languages & Social'
  },
  {
    sno: 10,
    name: 'Smt. Byreddy Pushpavathi',
    designation: 'Maths Teacher (Grades 2, 3 & 5)',
    qualification: 'MBA (HR)',
    phone: '9985992362',
    category: 'Primary'
  },
  {
    sno: 11,
    name: 'Smt. D Durga Sravani',
    designation: 'EVS Teacher (Grades 3 to 5)',
    qualification: 'M.Sc (Microbiology)',
    phone: '9731300887',
    category: 'Primary'
  },
  {
    sno: 12,
    name: 'Miss M Salomi Rani',
    designation: 'Maths Teacher (Grades 8 to 10) & IIT',
    qualification: 'M.Sc (Maths), B.Ed',
    phone: '7731951326',
    category: 'High School & IIT'
  },
  {
    sno: 13,
    name: 'Smt. V Kalpana',
    designation: 'Vice - Principal / Social Teacher (6 to 10)',
    qualification: 'M.Com',
    phone: '8309194497',
    category: 'Leadership'
  },
  {
    sno: 14,
    name: 'Smt. G Srivani',
    designation: 'Primary Teacher',
    qualification: 'B.Sc, D.Ed',
    phone: '9618426295',
    category: 'Primary'
  },
  {
    sno: 15,
    name: 'Miss K Padmavathi',
    designation: 'Primary Teacher',
    qualification: 'B.Sc (Chemistry)',
    phone: '7013653869',
    category: 'Primary'
  },
  {
    sno: 16,
    name: 'Smt. U Sunitha',
    designation: 'PP-II Mother Teacher',
    qualification: 'B.Com',
    phone: '',
    category: 'Pre-Primary'
  },
  {
    sno: 17,
    name: 'Mr. K Nageswara Rao',
    designation: 'Telugu Teacher (6 to 10) & 10th Sanskrit',
    qualification: 'M.A, T.P.T (Oriental Language)',
    phone: '8330949311',
    category: 'Languages & Social'
  },
  {
    sno: 18,
    name: 'Mr. T Dileep',
    designation: 'Art Teacher (Grades 3 to 8) & Multimedia',
    qualification: 'MBA',
    phone: '7799648715',
    category: 'Arts & Special'
  },
  {
    sno: 19,
    name: 'Smt. G Swetha',
    designation: 'Hindi Teacher (Grades 1 & 2)',
    qualification: 'B.Tech (EEE)',
    phone: '9493239424',
    category: 'Languages & Social'
  },
  {
    sno: 20,
    name: 'Miss T Varalakshmi',
    designation: 'CCS Teacher (Grades 3 to 5)',
    qualification: 'B.Sc (Computers)',
    phone: '7794053083',
    category: 'Primary'
  },
  {
    sno: 21,
    name: 'Miss K Hema',
    designation: 'Pre-Primary Teacher',
    qualification: 'B.A (Economics)',
    phone: '9391150307',
    category: 'Pre-Primary'
  },
  {
    sno: 22,
    name: 'Smt. V Radhika',
    designation: 'EVS Teacher (Primary)',
    qualification: 'B.Ed, B.Com (Computers)',
    phone: '9989776858',
    category: 'Primary'
  },
  {
    sno: 23,
    name: 'Smt. N Sunitha',
    designation: 'ELGA Teacher (Grades 4 & 5)',
    qualification: 'M.A (English)',
    phone: '9000588458',
    category: 'Primary'
  },
  {
    sno: 24,
    name: 'Miss V Venkata Siva Lakshmi',
    designation: 'Chemistry Teacher (Grades 6 to 9)',
    qualification: 'B.Sc',
    phone: '9052643462',
    category: 'High School & IIT'
  },
  {
    sno: 25,
    name: 'Miss G Padmaja',
    designation: 'Maths Teacher IIT (Grades 6, 7 & 8)',
    qualification: 'MBA (Finance)',
    phone: '6302542480',
    category: 'High School & IIT'
  },
  {
    sno: 26,
    name: 'Smt. Ch Sridevi',
    designation: 'PP-1 Teacher',
    qualification: 'B.Tech (CSE)',
    phone: '7680806671',
    category: 'Pre-Primary'
  },
  {
    sno: 27,
    name: 'Smt. G Durga Bhavani',
    designation: 'Pre-Primary Teacher',
    qualification: 'B.A (Arts)',
    phone: '8639768118',
    category: 'Pre-Primary'
  },
  {
    sno: 28,
    name: 'Smt. E Sri Lakshmi',
    designation: 'Pre-Primary Asst. Teacher',
    qualification: 'B.Tech (CSE)',
    phone: '8096956251',
    category: 'Pre-Primary'
  },
  {
    sno: 29,
    name: 'Smt. Ch Aruna',
    designation: 'Telugu Teacher (Grades 1 & 2)',
    qualification: 'Degree, D.Ed',
    phone: '9346605781',
    category: 'Languages & Social'
  },
  {
    sno: 30,
    name: 'Miss K Bhavani',
    designation: 'PP-1 Teacher',
    qualification: 'B.Com',
    phone: '7075877154',
    category: 'Pre-Primary'
  },
  {
    sno: 31,
    name: 'Smt. B Renuka',
    designation: 'Hindi Teacher (Grades 3 to 5)',
    qualification: 'M.Com',
    phone: '9494929037',
    category: 'Languages & Social'
  },
  {
    sno: 32,
    name: 'Smt. Ch Bhavani',
    designation: 'Primary Teacher',
    qualification: 'MBA (HR)',
    phone: '7093956115',
    category: 'Primary'
  },
  {
    sno: 33,
    name: 'Smt. Ch Siva Purnima',
    designation: 'Higher Hindi Teacher',
    qualification: 'M.Com, L.P.T',
    phone: '85001129372',
    category: 'Languages & Social'
  },
  {
    sno: 34,
    name: 'Miss SK Rahida Beebi',
    designation: 'Primary Teacher',
    qualification: 'B.Sc (Computers)',
    phone: '7989650374',
    category: 'Primary'
  },
  {
    sno: 35,
    name: 'Smt. T Sai Durga',
    designation: 'PP-2 Mother Teacher (Pre-Primary)',
    qualification: 'B.Com (Computers)',
    phone: '7093385459',
    category: 'Pre-Primary'
  },
  {
    sno: 36,
    name: 'Smt. S Bharathi',
    designation: 'Primary Maths Teacher',
    qualification: 'B.Tech (Electrical)',
    phone: '9553125618',
    category: 'Primary'
  },
  {
    sno: 37,
    name: 'Smt. M Lavanya',
    designation: 'Pre-Primary Math Teacher',
    qualification: 'B.Sc, B.Ed',
    phone: '9701677042',
    category: 'Pre-Primary'
  },
  {
    sno: 38,
    name: 'Smt. T Rajeswari',
    designation: 'Primary Teacher',
    qualification: 'B.Sc (Computers)',
    phone: '7893836458',
    category: 'Primary'
  },
  {
    sno: 39,
    name: 'Smt. T Nagamani',
    designation: 'PET (Physical Education Teacher)',
    qualification: 'U.G.D.P.Ed',
    phone: '7674051332',
    category: 'Physical Education'
  },
  {
    sno: 40,
    name: 'Sri J Siva',
    designation: 'PD (Physical Director)',
    qualification: 'B.Sc (Computers), PGD',
    phone: '9392643262',
    category: 'Physical Education'
  },
  {
    sno: 41,
    name: 'Sri B Ramu',
    designation: 'Higher Physics (6 to 9) & IIT (6 to 9)',
    qualification: 'B.Sc (Chemistry)',
    phone: '7287007215',
    category: 'High School & IIT'
  },
  {
    sno: 42,
    name: 'Smt. Ch Devi',
    designation: 'Primary Teacher',
    qualification: 'B.Sc (Computers)',
    phone: '7093956115',
    category: 'Primary'
  },
  {
    sno: 43,
    name: 'Miss Ch Indraja',
    designation: 'ELGA Primary Teacher',
    qualification: 'MCA',
    phone: '9866049042',
    category: 'Primary'
  },
  {
    sno: 44,
    name: 'Miss A Priyanka',
    designation: 'ELGA Primary Teacher',
    qualification: 'B.Sc (Agriculture)',
    phone: '9347500804',
    category: 'Primary'
  },
  {
    sno: 45,
    name: 'Smt. B Supriya',
    designation: 'Primary Hindi Teacher',
    qualification: 'B.Ed, B.Com',
    phone: '7981604461',
    category: 'Languages & Social'
  },
  {
    sno: 46,
    name: 'Miss M Prameela',
    designation: 'Asst. Teacher',
    qualification: 'B.Sc (Computers)',
    phone: '7995793017',
    category: 'Primary'
  },
  {
    sno: 47,
    name: 'Miss Harathi',
    designation: 'Dance Teacher',
    qualification: 'Dance Specialist',
    phone: '7330884159',
    category: 'Arts & Special'
  },
  {
    sno: 48,
    name: 'Miss S Menaka',
    designation: 'Asst. Teacher',
    qualification: 'B.Sc (Chemistry)',
    phone: '9491914105',
    category: 'Primary'
  }
];

const CATEGORIES = [
  'All',
  'Leadership',
  'Pre-Primary',
  'Primary',
  'High School & IIT',
  'Languages & Social',
  'Physical Education',
  'Arts & Special'
];

export default function SchoolFaculty() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'cards'

  // Filtered staff list
  const filteredStaff = useMemo(() => {
    return TEACHING_STAFF.filter((staff) => {
      const matchesCategory =
        selectedCategory === 'All' || staff.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        staff.name.toLowerCase().includes(q) ||
        staff.designation.toLowerCase().includes(q) ||
        staff.qualification.toLowerCase().includes(q) ||
        staff.phone.includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Extract initials helper
  const getInitials = (fullName) => {
    const clean = fullName.replace(/^(Smt\.|Sri\.|Sri|Mr\.|Miss\.|Miss)\s*/i, '');
    const parts = clean.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return clean.slice(0, 2).toUpperCase();
  };

  return (
    <>
      {/* 1. Inner Hero */}
      <section className="school-inner-hero">
        <div className="school-inner-hero-container">
          <span className="school-inner-hero-tag">Sri Basara Leads International School</span>
          <h1 className="school-inner-hero-title">Teaching Staff & Academic Directory</h1>
          <p className="school-inner-hero-desc">
            Our qualified, compassionate, and inspiring educators nurture every student's intellectual, creative, and moral development.
          </p>

          <div className="school-faculty-stats">
            <div className="school-faculty-stat-pill">
              <strong>47+</strong> Dedicated Faculty Members
            </div>
            <div className="school-faculty-stat-pill">
              <strong>Nursery to Grade X</strong> CBSE & State Pathways
            </div>
            <div className="school-faculty-stat-pill">
              <strong>IIT-JEE & NEET</strong> Early Foundation Mentors
            </div>
          </div>
        </div>
      </section>

      {/* 2. Academic Leadership Spotlight */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-section-header">
            <span className="school-section-subtitle">Academic Direction</span>
            <h2 className="school-section-title">School Leadership Team</h2>
            <p className="school-section-desc">
              Guiding academic rigour, character building, and pedagogical innovation across all class wings.
            </p>
          </div>

          <div className="school-leadership-grid">
            {/* Principal */}
            <div className="school-leader-card">
              <div className="school-leader-avatar">SK</div>
              <span className="school-leader-badge">Academic Head</span>
              <h3 className="school-leader-name">Smt. S K Rekha</h3>
              <p className="school-leader-role">School Principal</p>
              <p className="school-leader-qual">
                M.Sc (Bio-Chem), M.Sc (Organic Chem), M.A (Psychology), M.Phil, B.Ed
              </p>
              <a href="tel:89789186332" className="school-phone-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                89789 18633
              </a>
            </div>

            {/* Dean */}
            <div className="school-leader-card">
              <div className="school-leader-avatar">MB</div>
              <span className="school-leader-badge">Institutional Guidance</span>
              <h3 className="school-leader-name">Sri M Bhaskar</h3>
              <p className="school-leader-role">Dean</p>
              <p className="school-leader-qual">Senior Academic Administration & Mentorship</p>
              <a href="tel:9985341999" className="school-phone-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                99853 41999
              </a>
            </div>

            {/* Head Master */}
            <div className="school-leader-card">
              <div className="school-leader-avatar">NK</div>
              <span className="school-leader-badge">Academic Management</span>
              <h3 className="school-leader-name">Sri N Kesav</h3>
              <p className="school-leader-role">Head Master</p>
              <p className="school-leader-qual">M.Com, M.B.A, MHRM, B.Ed, PGDGBCA</p>
              <a href="tel:9703339839" className="school-phone-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                97033 39839
              </a>
            </div>

            {/* Vice Principal */}
            <div className="school-leader-card">
              <div className="school-leader-avatar">VK</div>
              <span className="school-leader-badge">Curriculum & Social</span>
              <h3 className="school-leader-name">Smt. V Kalpana</h3>
              <p className="school-leader-role">Vice - Principal</p>
              <p className="school-leader-qual">M.Com • Social Teacher (Grades 6 to 10)</p>
              <a href="tel:8309194497" className="school-phone-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                83091 94497
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Teaching Staff Directory */}
      <section className="school-page-section">
        <div className="school-page-container">
          <div className="school-section-header">
            <span className="school-section-subtitle">Faculty Register</span>
            <h2 className="school-section-title">Teaching Staff Directory</h2>
            <p className="school-section-desc">
              Browse our faculty members across pre-primary, primary, high school, IIT foundations, and special activities.
            </p>
          </div>

          {/* Directory Toolbar */}
          <div className="school-directory-toolbar">
            <div className="school-toolbar-row-top">
              {/* Search input */}
              <div className="school-search-box">
                <svg className="school-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  placeholder="Search by staff name, subject, or qualification..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="school-search-input"
                />
              </div>

              {/* View Toggle */}
              <div className="school-view-toggle">
                <button
                  type="button"
                  className={`school-toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
                  onClick={() => setViewMode('table')}
                  title="Table Directory View"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                  Table
                </button>
                <button
                  type="button"
                  className={`school-toggle-btn ${viewMode === 'cards' ? 'active' : ''}`}
                  onClick={() => setViewMode('cards')}
                  title="Card Grid View"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  Cards
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="school-filter-pills">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`school-filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === 'All' ? `All Staff (${TEACHING_STAFF.length})` : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="school-result-count">
            Showing <strong>{filteredStaff.length}</strong> of {TEACHING_STAFF.length} faculty members
          </div>

          {/* VIEW: TABLE */}
          {viewMode === 'table' && (
            <div className="school-table-container">
              <div className="school-faculty-table-wrap">
                <table className="school-faculty-table">
                  <thead>
                    <tr>
                      <th className="col-sno">S.No</th>
                      <th>Name of the Staff</th>
                      <th>Designation</th>
                      <th>Qualification</th>
                      <th className="col-phone">Contact No</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStaff.length > 0 ? (
                      filteredStaff.map((staff) => (
                        <tr key={staff.sno}>
                          <td className="col-sno">{staff.sno}</td>
                          <td className="col-name">{staff.name}</td>
                          <td className="col-desig">
                            <span className="desig-badge">{staff.designation}</span>
                          </td>
                          <td className="col-qual">{staff.qualification || '—'}</td>
                          <td className="col-phone">
                            {staff.phone ? (
                              <a href={`tel:${staff.phone}`} className="table-phone-link">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                {staff.phone}
                              </a>
                            ) : (
                              <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Campus Office</span>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">
                          <div className="school-empty-search">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <p>No faculty members found matching "{searchQuery}".</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* VIEW: CARDS */}
          {viewMode === 'cards' && (
            <div className="school-faculty-card-grid">
              {filteredStaff.length > 0 ? (
                filteredStaff.map((staff) => (
                  <div key={staff.sno} className="school-staff-card">
                    <div className="staff-card-header">
                      <div className="staff-card-avatar">
                        {getInitials(staff.name)}
                      </div>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8' }}>
                          #{staff.sno}
                        </span>
                        <h3 className="staff-card-name">{staff.name}</h3>
                      </div>
                    </div>

                    <span className="staff-card-desig">{staff.designation}</span>

                    <div className="staff-card-qual">
                      <strong>Qualification:</strong> {staff.qualification || '—'}
                    </div>

                    {staff.phone ? (
                      <a href={`tel:${staff.phone}`} className="school-phone-btn" style={{ width: 'fit-content' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        {staff.phone}
                      </a>
                    ) : (
                      <span style={{ color: '#94a3b8', fontSize: '0.84rem' }}>Campus Office</span>
                    )}
                  </div>
                ))
              ) : (
                <div className="school-empty-search" style={{ gridColumn: '1 / -1' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  <p>No faculty members found matching "{searchQuery}".</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 4. Mentorship Philosophy */}
      <section className="school-page-section alt-bg">
        <div className="school-page-container">
          <div className="school-mentorship-wrap">
            <div className="school-narrative-text">
              <span className="school-section-subtitle">Student-Centric Pedagogy</span>
              <h2>Nurturing Mentors, Not Just Instructors</h2>
              <p>
                At <strong>Sri Basara Leads International School</strong>, our teachers mentor each child with personalized care through an optimal teacher-student ratio.
              </p>
              <p>
                We combine strong foundational support with early IIT-JEE, NEET, and Olympiad training to empower every student's future.
              </p>
            </div>
            <div className="school-mentorship-img-wrap">
              <img src="/assets/school/academics.png" alt="Sri Basara Academic Faculty" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <SchoolCTA />
    </>
  );
}
