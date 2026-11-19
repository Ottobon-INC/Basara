import React from 'react';
import { Outlet } from 'react-router-dom';
import SchoolNavbar from '../components/SchoolNavbar';
import MobileBottomBar from '../../common/components/navigation/MobileBottomBar';
import Footer from '../../common/components/footer/Footer';
import { institutions } from '../../common/config/institution';
import { navigation } from '../../common/config/navigation';

export default function SchoolLayout() {
  const config = institutions.school;
  const navLinks = navigation.school;

  return (
    <div className="theme-school" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <SchoolNavbar />
      <main style={{ flex: '1 0 auto' }}>
        <Outlet />
      </main>
      <Footer institutionConfig={config} navigationLinks={navLinks} />
      <MobileBottomBar 
        phone="9985577636"
        whatsappNumber="919985577636"
        whatsappText="Hello Sri Basara Leads International School, I would like to enquire about school admissions."
        enquiryHref="/school/admissions"
        applyHref="/school/admissions"
      />
    </div>
  );
}

