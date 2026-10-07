import React, { useEffect } from 'react';
import { InstitutionHero, StatsBar, FeatureCards, SplitShowcase, AdmissionsBanner } from '../../common/components/InstitutionComponents';

export default function JuniorCollegeHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="theme-jc">
      <InstitutionHero
        tagline="Sri Basara Educational Institutions"
        title="Sri Basara Junior College"
        description="Setting the foundation for professional excellence with focused intermediate education in Science and Commerce."
        image="/assets/juniorcollege/jc-1.jpeg"
        ctaText="Enquire Now"
        ctaHref="#admissions"
        secondaryCtaText="Learn More"
        secondaryCtaHref="#about"
        trustText="Join <strong>3000+</strong> Students<br/>Achieving Top Ranks"
      />

      <StatsBar
        stats={[
          { icon: 'Users', value: '3000+', label: 'Successful Students' },
          { icon: 'Trophy', value: 'Top 10', label: 'District Ranks' },
          { icon: 'GraduationCap', value: '15+', label: 'Years of Trust' },
          { icon: 'Book', value: '96%', label: 'Pass Percentage' },
        ]}
      />

      <FeatureCards
        title="Why Choose Sri Basara Junior College?"
        description="We bridge the gap between school education and professional degrees with intensive, specialized coaching."
        features={[
          {
            icon: 'Book',
            title: 'Focused Curriculum',
            description: 'In-depth coverage of MPC, BiPC, CEC, and MEC streams.'
          },
          {
            icon: 'Trophy',
            title: 'Competitive Coaching',
            description: 'Integrated coaching for EAMCET, JEE, and NEET.'
          },
          {
            icon: 'User',
            title: 'Expert Mentorship',
            description: 'Learn from highly qualified lecturers with years of experience.'
          },
          {
            icon: 'Shield',
            title: 'Regular Assessments',
            description: 'Weekly tests and mock exams to track and improve performance.'
          }
        ]}
      />

      <SplitShowcase
        tagline="Empowering Careers"
        title="Intermediate Programs"
        description="Choose the path that leads to your dream career. Our streams are supported by well-equipped laboratories and exhaustive study materials."
        image="/assets/juniorcollege/jc-2.jpeg"
        list={[
          'MPC (Maths, Physics, Chemistry)',
          'BiPC (Biology, Physics, Chemistry)',
          'MEC (Maths, Economics, Commerce)',
          'CEC (Civics, Economics, Commerce)'
        ]}
        ctaText="View Admissions"
        ctaHref="#admissions"
      />

      <SplitShowcase
        reverse={true}
        tagline="Student Success"
        title="A Focus on Results"
        description="Our structured study hours, doubt-clearing sessions, and personalized attention ensure that every student reaches their maximum potential."
        image="/assets/juniorcollege/jc-3.jpeg"
        iconGrid={[
          { icon: 'Book', label: 'Study Hours' },
          { icon: 'User', label: 'Doubt Sessions' },
          { icon: 'Trophy', label: 'Mock Exams' },
          { icon: 'Star', label: 'Counseling' }
        ]}
      />

      <div id="admissions">
        <AdmissionsBanner
          title="Admissions Open for 2025–26"
          description="Secure your seat in our top-ranked intermediate batches."
          ctaText="Enquire Now"
          ctaHref="#admissions"
        />
      </div>
    </div>
  );
}
