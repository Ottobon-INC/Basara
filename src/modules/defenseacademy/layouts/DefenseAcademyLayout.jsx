import React from 'react';
import { Outlet } from 'react-router-dom';
import DefenseAcademyNavbar from '../components/DefenseAcademyNavbar';
import MobileBottomBar from '../../common/components/navigation/MobileBottomBar';
import Footer from '../../common/components/footer/Footer';
import { institutions } from '../../common/config/institution';
import { navigation } from '../../common/config/navigation';

export default function DefenseAcademyLayout() {
  const config = institutions.defenseacademy;
  const navLinks = navigation.defenseacademy;

  return (
    <div className="theme-defense" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <DefenseAcademyNavbar />
      <main style={{ flex: '1 0 auto' }}>
        <Outlet />
      </main>
      <Footer institutionConfig={config} navigationLinks={navLinks} />
      <MobileBottomBar 
        phone="+919985577636"
        whatsappNumber="919985577636"
        whatsappText="Hello Sri Basara Defence Academy, I would like to enquire about admissions and cadet training programs."
        enquiryHref="/defenseacademy/admissions"
        applyHref="/defenseacademy/admissions"
      />
    </div>
  );
}
