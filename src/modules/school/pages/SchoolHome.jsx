import React, { useEffect } from 'react';
import { InstitutionHero, StatsBar, FeatureCards, SplitShowcase, AdmissionsBanner, AboutTextSection, ContactMapSection } from '../../common/components/InstitutionComponents';
import SchoolAboutSection from '../components/SchoolAboutSection';
import SchoolAdmissionsEnquiry from '../components/SchoolAdmissionsEnquiry';

export default function SchoolHome() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="theme-school">
      <InstitutionHero
        tagline="Sri Basara Educational Institutions"
        title="Sri Basara Leads School with International Standards"
        description="Fostering academic excellence and holistic development in a warm, nurturing environment."
        video="/assets/school/basara-school.mp4"
        ctaText="Enquire Now"
        ctaHref="#admissions"
        secondaryCtaText="Explore More"
        secondaryCtaHref="#academics"
        trustText="Join <strong>2000+</strong> Happy Students<br/>Building a Brighter Future"
      />

      <SchoolAboutSection />

      <FeatureCards
        id="features"
        title="Why Choose Sri Basara?"
        description="We provide a perfect blend of academics, values, and extracurricular activities to bring out the best in every student."
        features={[
          {
            icon: 'Book',
            title: 'Academic Excellence',
            description: 'Innovative teaching methods and a structured curriculum that inspire learning.'
          },
          {
            icon: 'User',
            title: 'Holistic Development',
            description: 'Focus on physical, emotional, social, and intellectual growth of every child.'
          },
          {
            icon: 'Shield',
            title: 'Safe & Nurturing Environment',
            description: 'A secure campus where students feel valued, respected and motivated.'
          },
          {
            icon: 'Star',
            title: 'Extracurricular Activities',
            description: 'Wide range of sports, arts, culture and leadership opportunities.'
          }
        ]}
      />

      <SplitShowcase
        id="academics"
        tagline="Learning for Life"
        title="Academics That Inspire"
        description="Our curriculum is designed to stimulate curiosity, critical thinking and creativity. With well-equipped classrooms, digital learning tools and experienced faculty, we ensure every student excels."
        image="/assets/school/academics.png"
        list={[
          'CBSE Aligned Curriculum',
          'Smart Classrooms & Digital Learning',
          'Well-Equipped Labs & Library',
          'Personalized Attention'
        ]}
        ctaText="Explore Academics"
        ctaHref="#academics"
      />

      <SplitShowcase
        id="campus"
        reverse={true}
        tagline="Beyond Classrooms"
        title="Vibrant Campus Life"
        description="From sports to cultural events, we encourage students to explore their interests, discover new talents and build lifelong friendships."
        image="/assets/school/campus.png"
        iconGrid={[
          { icon: 'Trophy', label: 'Sports' },
          { icon: 'Star', label: 'Arts & Culture' },
          { icon: 'Users', label: 'Clubs & Activities' },
          { icon: 'User', label: 'Leadership' }
        ]}
      />

      <SchoolAdmissionsEnquiry />

      <ContactMapSection 
        id="contact"
        address="D.No. 6-123/1/4, Near Electrical Sub Station, Balaji Nagar, Tagarapuvalasa, Visakhapatnam-531162"
        phone="08933-222888, 81212 99999"
        email="info@sribasara.in"
        mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15181.821731677322!2d83.424364!3d17.925239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3957770e0f3167%3A0xb36fbaaf36dfa428!2sTagarapuvalasa%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
      />
    </div>
  );
}
