import React from 'react';
import DegreeCTA from './components/DegreeCTA';
import './degree-faculty.css';

export default function DegreeFaculty() {
  return (
    <>
      {/* Inner Hero */}
      <section className="inner-hero-section">
        <div className="inner-hero-container">
          <h1 className="inner-hero-title">Faculty & Academic Team</h1>
        </div>
      </section>
      
      {/* Faculty Directory Section */}
      <section className="faculty-directory-section">
        <div className="faculty-directory-container">
          
          <div className="faculty-intro">
            <p>
              Sri Basara Degree College is proud of its dedicated and highly qualified academic staff. 
              Our faculty members are committed to fostering a rigorous, supportive, and engaging learning environment for every student.
            </p>
          </div>

          <div className="faculty-grid">
            {/* Faculty 1 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <img src="/assets/degree/principal1.jpeg" alt="Shri CH Suresh, Principal" loading="lazy" />
              </div>
              <h2 className="faculty-name">CH Suresh</h2>
              <p className="faculty-designation">Principal</p>
              <p className="faculty-department">Chemistry</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.Sc., B.Ed.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 15+ Years</p>
              </div>
            </div>

            {/* Faculty 2 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">MS</span>
              </div>
              <h2 className="faculty-name">M Srinivasa Rao</h2>
              <p className="faculty-designation">Vice-Principal</p>
              <p className="faculty-department">Mathematics</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.Sc., B.Ed.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 10+ Years</p>
              </div>
            </div>

            {/* Faculty 3 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">PN</span>
              </div>
              <h2 className="faculty-name">P Naga Sravanthi</h2>
              <p className="faculty-designation">HOD of Physics</p>
              <p className="faculty-department">Physics</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.Sc., M.Tech.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 8+ Years</p>
              </div>
            </div>

            {/* Faculty 4 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">GJ</span>
              </div>
              <h2 className="faculty-name">G Jagadessh</h2>
              <p className="faculty-designation">HOD of Mathematics</p>
              <p className="faculty-department">Mathematics</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.Sc., B.Ed.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 10+ Years</p>
              </div>
            </div>

            {/* Faculty 5 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">KG</span>
              </div>
              <h2 className="faculty-name">K Gowri Shankar</h2>
              <p className="faculty-designation">Lecturer in Maths</p>
              <p className="faculty-department">Mathematics</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.Sc., B.Ed.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 5+ Years</p>
              </div>
            </div>

            {/* Faculty 6 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">SD</span>
              </div>
              <h2 className="faculty-name">S Dhana Revathi</h2>
              <p className="faculty-designation">Lecturer in Chemistry</p>
              <p className="faculty-department">Chemistry</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.Sc.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 5+ Years</p>
              </div>
            </div>

            {/* Faculty 7 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">SR</span>
              </div>
              <h2 className="faculty-name">SK Raffi</h2>
              <p className="faculty-designation">HOD of Computer Science</p>
              <p className="faculty-department">Computer Science</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.Sc., B.Ed.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 10+ Years</p>
              </div>
            </div>

            {/* Faculty 8 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">MS</span>
              </div>
              <h2 className="faculty-name">M Sai Jyothi</h2>
              <p className="faculty-designation">Lecturer in Computer Science</p>
              <p className="faculty-department">Computer Science</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.Sc.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 5+ Years</p>
              </div>
            </div>

            {/* Faculty 9 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">DA</span>
              </div>
              <h2 className="faculty-name">D Anuradha</h2>
              <p className="faculty-designation">HOD of Botany</p>
              <p className="faculty-department">Botany</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.Sc.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 8+ Years</p>
              </div>
            </div>

            {/* Faculty 10 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">NL</span>
              </div>
              <h2 className="faculty-name">N Lalitha</h2>
              <p className="faculty-designation">Lecturer in Botany</p>
              <p className="faculty-department">Botany</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.Sc.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 5+ Years</p>
              </div>
            </div>

            {/* Faculty 11 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">VS</span>
              </div>
              <h2 className="faculty-name">V Sowjanya</h2>
              <p className="faculty-designation">HOD of Zoology</p>
              <p className="faculty-department">Zoology</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.Sc.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 10+ Years</p>
              </div>
            </div>

            {/* Faculty 12 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">BS</span>
              </div>
              <h2 className="faculty-name">B S N S Jyothi</h2>
              <p className="faculty-designation">HOD of Commerce</p>
              <p className="faculty-department">Commerce</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.Com.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 10+ Years</p>
              </div>
            </div>

            {/* Faculty 13 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">PK</span>
              </div>
              <h2 className="faculty-name">P Kalyani</h2>
              <p className="faculty-designation">Lecturer in Commerce</p>
              <p className="faculty-department">Commerce</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.Com.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 5+ Years</p>
              </div>
            </div>

            {/* Faculty 14 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">MK</span>
              </div>
              <h2 className="faculty-name">M Kiranmayi</h2>
              <p className="faculty-designation">HOD of English</p>
              <p className="faculty-department">English</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.A.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 10+ Years</p>
              </div>
            </div>

            {/* Faculty 15 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">TS</span>
              </div>
              <h2 className="faculty-name">T Srinivas</h2>
              <p className="faculty-designation">HOD of Telugu</p>
              <p className="faculty-department">Telugu</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.A., B.Ed., NET., TPT.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 15+ Years</p>
              </div>
            </div>

            {/* Faculty 16 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">CS</span>
              </div>
              <h2 className="faculty-name">CH Swathi</h2>
              <p className="faculty-designation">Lecturer in Telugu</p>
              <p className="faculty-department">Telugu</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.A.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 5+ Years</p>
              </div>
            </div>

            {/* Faculty 17 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">PN</span>
              </div>
              <h2 className="faculty-name">P Nooka Raju</h2>
              <p className="faculty-designation">Library Science</p>
              <p className="faculty-department">Library</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.L.I.Sc.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 8+ Years</p>
              </div>
            </div>

            {/* Faculty 18 */}
            <div className="faculty-card">
              <div className="faculty-avatar">
                <span className="avatar-placeholder">BA</span>
              </div>
              <h2 className="faculty-name">B Appala Raju</h2>
              <p className="faculty-designation">Physical Director</p>
              <p className="faculty-department">Sports</p>
              <div className="faculty-details">
                <p className="faculty-info-item"><strong>Qualification:</strong> M.P.Ed.</p>
                <p className="faculty-info-item"><strong>Experience:</strong> 5+ Years</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <DegreeCTA />
    </>
  );
}
