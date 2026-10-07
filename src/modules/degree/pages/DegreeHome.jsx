import React, { useEffect } from 'react';
import { StatsBar, FeatureCards, SplitShowcase, AdmissionsBanner } from '../../common/components/InstitutionComponents';
import DegreeHero from '../components/DegreeHero';

export default function DegreeHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="theme-degree">
      <DegreeHero />

      <FeatureCards
        title="Why Choose Sri Basara Degree College?"
        description="We provide a robust academic environment designed to equip students with critical skills for their careers."
        features={[
          {
            icon: 'Book',
            title: 'Academic Rigor',
            description: 'Comprehensive curricula in B.Sc. and B.Com. updated with industry standards.'
          },
          {
            icon: 'Shield',
            title: 'State-of-the-Art Labs',
            description: 'Modern laboratories for Physics, Chemistry, and Computer Science.'
          },
          {
            icon: 'User',
            title: 'Experienced Faculty',
            description: 'Dedicated professors committed to student success and mentorship.'
          },
          {
            icon: 'Star',
            title: 'Career Support',
            description: 'Active placement cell, skill training, and industry connections.'
          }
        ]}
      />

      <SplitShowcase
        tagline="Academic Excellence"
        title="Diverse Undergraduate Programs"
        description="Whether your passion lies in Science or Commerce, our specialized degree tracks offer deep insights, practical knowledge, and a strong foundation for your future."
        image="/assets/degree/college-2.jpeg"
        list={[
          'B.Sc. (Maths, Physics, Chemistry)',
          'B.Sc. (Maths, Physics, Computer Science)',
          'B.Sc. (Chemistry, Micro-Biology, Bio-Technology)',
          'B.Com. (General & Computers)'
        ]}
        ctaText="Explore All Courses"
        ctaHref="/degree/courses"
      />

      <SplitShowcase
        reverse={true}
        tagline="Beyond Academics"
        title="Dynamic Campus Life"
        description="A college experience that goes beyond lectures. Engage in seminars, cultural fests, sports meets, and skill development workshops."
        image="/assets/degree/college-3.jpeg"
        iconGrid={[
          { icon: 'Users', label: 'Seminars' },
          { icon: 'Trophy', label: 'Sports Meets' },
          { icon: 'Star', label: 'Cultural Fests' },
          { icon: 'GraduationCap', label: 'Workshops' }
        ]}
      />

      <div id="admissions">
        <AdmissionsBanner
          title="Admissions Open for 2025–26"
          description="Take the next step in your academic journey. Enroll today."
          ctaText="Apply Now"
          ctaHref="/degree/admissions"
        />
      </div>
    </div>
  );
}
