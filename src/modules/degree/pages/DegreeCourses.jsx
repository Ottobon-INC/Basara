import React from 'react';
import DegreeCTA from './components/DegreeCTA';
import './degree-courses.css';

export default function DegreeCourses() {
  return (
    <>
      {/* Inner Hero */}
      <section className="inner-hero-section">
        <div className="inner-hero-container">
          <h1 className="inner-hero-title">Academic Programs</h1>
        </div>
      </section>
      
      {/* Programs Intro */}
      <section className="programs-intro-section">
        <div className="programs-intro-container">
          <p>
            Sri Basara Degree College offers comprehensive undergraduate degree programs designed to provide students with strong academic foundations and practical skills for their future careers. Explore our verified course combinations below.
          </p>
        </div>
      </section>

      {/* Ledger Section */}
      <section className="courses-ledger-section">
        <div className="courses-ledger-container">
          
          {/* B.Sc. Category */}
          <div className="course-category">
            <div className="course-category-header">
              <h2>Bachelor of Science (B.Sc.)</h2>
            </div>
            <ul className="course-combinations-list">
              <li className="course-combination-item">
                <svg className="combination-bullet" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span className="combination-text">Mathematics, Physics, Chemistry</span>
              </li>
              <li className="course-combination-item">
                <svg className="combination-bullet" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span className="combination-text">Mathematics, Physics, Computer Science</span>
              </li>
              <li className="course-combination-item">
                <svg className="combination-bullet" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span className="combination-text">Mathematics, Chemistry, Computer Science</span>
              </li>
              <li className="course-combination-item">
                <svg className="combination-bullet" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span className="combination-text">Mathematics, Statistics, Computer Science</span>
              </li>
              <li className="course-combination-item">
                <svg className="combination-bullet" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span className="combination-text">Mathematics, Electronics, Computer Science</span>
              </li>
              <li className="course-combination-item">
                <svg className="combination-bullet" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span className="combination-text">Chemistry, Micro-Biology, Bio-Technology</span>
              </li>
            </ul>
          </div>

          {/* B.Com. Category */}
          <div className="course-category">
            <div className="course-category-header">
              <h2>Bachelor of Commerce (B.Com.)</h2>
            </div>
            <ul className="course-combinations-list">
              <li className="course-combination-item">
                <svg className="combination-bullet" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span className="combination-text">General</span>
              </li>
              <li className="course-combination-item">
                <svg className="combination-bullet" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span className="combination-text">Computers</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <DegreeCTA />
    </>
  );
}
