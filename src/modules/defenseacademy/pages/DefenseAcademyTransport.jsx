import React from 'react';
import { Link } from 'react-router-dom';
import './defense-pages.css';

const ROUTES = [
  {
    name: 'Route 1: Tagarapuvalasa – Bheemili Coastal Belt',
    coverage: 'Tagarapuvalasa Campus ⇄ Chittivalasa ⇄ Sangivalasa ⇄ Bheemunipatnam ⇄ INS Kalinga Road ⇄ Padmanabham',
    timing: 'Morning Pickup: 06:15 AM | Evening Drop: 06:45 PM'
  },
  {
    name: 'Route 2: Tagarapuvalasa – Madhurawada Corridor',
    coverage: 'Tagarapuvalasa Campus ⇄ Anandapuram Junction ⇄ Gambheeram ⇄ Boyapalem ⇄ Kommadi ⇄ Madhurawada',
    timing: 'Morning Pickup: 06:00 AM | Evening Drop: 07:00 PM'
  },
  {
    name: 'Route 3: Tagarapuvalasa – Vizianagaram Border',
    coverage: 'Tagarapuvalasa Campus ⇄ Natavalasa ⇄ Denkada ⇄ Jonnada ⇄ Vizianagaram Bypass Junction',
    timing: 'Morning Pickup: 06:10 AM | Evening Drop: 06:50 PM'
  },
  {
    name: 'Route 4: Tagarapuvalasa – Bhogapuram Highway',
    coverage: 'Tagarapuvalasa Campus ⇄ Polipalli ⇄ Adivivaram ⇄ Bhogapuram Airport Road ⇄ Pusapatirega',
    timing: 'Morning Pickup: 06:05 AM | Evening Drop: 06:55 PM'
  }
];

export default function DefenseAcademyTransport() {
  return (
    <>
      <section className="da-inner-hero">
        <div className="da-inner-hero-container">
          <span className="da-inner-hero-tag">CONVENIENT COMMUTE</span>
          <h1 className="da-inner-hero-title">Safe & Punctual Campus Transport</h1>
          <p className="da-inner-hero-desc">
            Extensive transport coverage connecting day-cadets from Visakhapatnam, Bheemunipatnam, Anandapuram, and Vizianagaram districts.
          </p>
        </div>
      </section>

      <section className="da-page-section">
        <div className="da-page-container">
          <div className="da-section-header">
            <span className="da-section-subtitle">Bus Transit Network</span>
            <h2 className="da-section-title">Designated Transport Routes</h2>
            <p className="da-section-desc">
              GPS-tracked fleet of institutional buses with verified drivers, first-aid equipment, and strict speed compliance for total safety.
            </p>
          </div>

          <div className="da-routes-grid">
            {ROUTES.map((route, idx) => (
              <div key={idx} className="da-route-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '1.4rem' }}>🚌</span>
                  <h3 className="da-route-title">{route.name}</h3>
                </div>
                <p className="da-route-points">
                  <strong>Pickup Points:</strong> {route.coverage}
                </p>
                <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #f1f5f9', fontSize: '0.84rem', color: '#15803d', fontWeight: 700 }}>
                  ⏰ {route.timing}
                </div>
              </div>
            ))}
          </div>

          {/* Safety Protocols */}
          <div className="da-cta-banner" style={{ background: '#ffffff', color: '#0f172a', border: '1px solid #e2e8f0', textAlign: 'left' }}>
            <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary, #15803d)', margin: '0 0 10px 0' }}>
              Safety & Punctuality Protocols
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
              <li style={{ display: 'flex', gap: '8px', fontSize: '0.92rem', color: '#334155' }}>
                <span style={{ color: '#15803d', fontWeight: 800 }}>✓</span> Real-time GPS vehicle tracking with mobile alerts
              </li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '0.92rem', color: '#334155' }}>
                <span style={{ color: '#15803d', fontWeight: 800 }}>✓</span> CCTV surveillance inside all passenger cabins
              </li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '0.92rem', color: '#334155' }}>
                <span style={{ color: '#15803d', fontWeight: 800 }}>✓</span> First aid kits and certified emergency response protocol
              </li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '0.92rem', color: '#334155' }}>
                <span style={{ color: '#15803d', fontWeight: 800 }}>✓</span> Clean, well-spaced seating with dedicated student attendants
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
