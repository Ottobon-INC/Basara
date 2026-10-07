import React, { useEffect } from 'react';
import { InstitutionHero, StatsBar, FeatureCards, SplitShowcase, AdmissionsBanner, ProgramsGrid } from '../../common/components/InstitutionComponents';

export default function DefenseAcademyHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="theme-defense">
      <InstitutionHero
        tagline="Sri Basara Educational Institutions"
        title="Sri Basara Defense Academy"
        description="Rigorous physical training combined with exceptional academic coaching to forge the nation's future defenders."
        image={[
          "/assets/defenseacademy/basara defense train.png",
          "/assets/defenseacademy/basara defnse training.png",
          "/assets/defenseacademy/basara defnse jumping.png"
        ]}
        ctaText="Enquire Now"
        ctaHref="#admissions"
        secondaryCtaText="Our Programs"
        secondaryCtaHref="#programs"
        trustText="Join <strong>500+</strong> Cadets<br/>Serving the Nation with Pride"
      />

      <StatsBar
        stats={[
          { icon: 'Users', value: '500+', label: 'Cadets Trained' },
          { icon: 'Shield', value: '95%+', label: 'Selection Success Rate' },
          { icon: 'Star', value: '20+', label: 'Expert Trainers' },
          { icon: 'Trophy', value: '', label: 'Years of Excellence In Defense Training' },
        ]}
      />

      <ProgramsGrid
        id="programs"
        tagline="OUR TRAINING PROGRAMS"
        title="Pathways to Serve the Nation"
        description="Comprehensive training for various defense forces and government services."
        ctaText="View All Programs"
        ctaHref="#programs"
        programs={[
          {
            icon: 'Shield',
            title: 'Army',
            description: 'Physical, written & SSB training for Army recruitments.'
          },
          {
            icon: 'Star',
            title: 'Navy',
            description: 'Specialized coaching for Navy SSR, AA & Nursing entrance.'
          },
          {
            icon: 'Send',
            title: 'Air Force',
            description: 'AFCAT & Airmen preparation with expert guidance.'
          },
          {
            icon: 'Check',
            title: 'Coast Guard',
            description: 'Complete training for Coast Guard GD & DB entry.'
          },
          {
            icon: 'Book',
            title: 'Other Exams',
            description: 'Preparation for SSC GD, State Police & other defense exams.'
          }
        ]}
      />

      <FeatureCards
        id="about"
        title="Why Choose Us Building Future Defenders"
        description=""
        features={[
          {
            icon: 'User',
            title: 'Expert Faculty',
            description: 'Trainers with defense background and years of experience.'
          },
          {
            icon: 'Trophy',
            title: 'Physical Excellence',
            description: 'Advanced fitness training to build strength, stamina & endurance.'
          },
          {
            icon: 'Star',
            title: 'SSB Guidance',
            description: 'Personalized SSB interview training by retired officers.'
          },
          {
            icon: 'Shield',
            title: 'Modern Facilities',
            description: 'Best-in-class infrastructure with hostels, gym & training grounds.'
          },
          {
            icon: 'Check',
            title: 'Proven Results',
            description: 'Consistent track record of selections in various defense forces.'
          }
        ]}
      />

      <AdmissionsBanner
        id="admissions"
        title="Admissions Open for 2025–26"
        description="Start your journey to serve the nation with pride."
        ctaText="Enquire Now"
        ctaHref="#admissions"
        bgImage="/assets/defenseacademy/basara defense running.png"
      />
    </div>
  );
}
