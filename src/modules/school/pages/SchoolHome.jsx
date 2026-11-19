import React, { useEffect } from 'react';
import { InstitutionHero, FeatureCards, SplitShowcase, ContactMapSection } from '../../common/components/InstitutionComponents';
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
        tagline="Discover Potential. Develop Excellence. Lead the Future."
        title="Sri Basara Leads International School"
        description="Meaningful, child-centred, and future-focused education from Nursery to Grade X with CBSE and State pathways, AI, Robotics, and IIT-JEE/NEET foundation."
        video="/assets/school/basara-school.mp4"
        ctaText="Apply Now"
        ctaHref="/school/admissions"
        secondaryCtaText="Explore Programs"
        secondaryCtaHref="/school/courses"
        trustText="Motto: <strong>LEARN. LEAD. EXCEL.</strong><br/>Every Child Deserves Excellence"
      />

      <SchoolAboutSection />

      <FeatureCards
        id="features"
        title="Our Unique Learning Approach"
        description="Blending strong academic foundations with modern methodologies, AI, robotics, competitive exam foundation, and value-based education."
        features={[
          {
            icon: 'Book',
            title: 'Academic & Language Excellence',
            description: 'Strong subject foundations, continuous assessment, and special focus on English communication, vocabulary, and reading.'
          },
          {
            icon: 'Star',
            title: 'AI, Robotics & STEM Education',
            description: 'Hands-on learning through coding, robotics kits, scientific experiments, and our Makers Space Lab.'
          },
          {
            icon: 'GraduationCap',
            title: 'IIT-JEE & NEET Foundation',
            description: 'Early exposure to analytical thinking, mathematical reasoning, mental ability, and competitive examination skills.'
          },
          {
            icon: 'Trophy',
            title: 'Sports & Life Skills',
            description: 'Encouraging physical fitness, teamwork, discipline, emotional intelligence, and leadership through sports and games.'
          }
        ]}
      />

      <SplitShowcase
        id="academics"
        tagline="LEARN. LEAD. EXCEL."
        title="Future-Focused Learning Pathways"
        description="Our educational approach blends strong academic foundations with modern teaching methodologies, technology-enabled learning, innovative activities, and value-based education from Nursery to Grade X."
        image="/assets/school/academics.png"
        list={[
          'CBSE & State Curriculum Pathways',
          'IIT-JEE & NEET Analytical Foundation',
          'AI, Robotics & Makers Space STEM Lab',
          'Arithmetic & Mental Ability Coaching'
        ]}
        ctaText="Explore Curriculum"
        ctaHref="/school/courses"
      />

      <SplitShowcase
        id="campus"
        reverse={true}
        tagline="World-Class Infrastructure"
        title="Our Learning Environment"
        description="We provide a stimulating, supportive educational environment with smart classrooms, science and computer learning facilities, Makers Space Lab, sports grounds, and individual student mentoring."
        image="/assets/school/campus.png"
        iconGrid={[
          { icon: 'Trophy', label: 'Sports & Fitness' },
          { icon: 'Star', label: 'Robotics & STEM' },
          { icon: 'Users', label: 'Makers Space' },
          { icon: 'User', label: 'Individual Mentoring' }
        ]}
        ctaText="Explore Facilities"
        ctaHref="/school/facilities"
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
