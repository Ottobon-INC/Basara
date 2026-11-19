import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/Header';
import Footer from '../components/footer/Footer';
import MobileBottomBar from '../components/navigation/MobileBottomBar';
import { institutions } from '../config/institution';
import { navigation } from '../config/navigation';

export default function InstitutionLayout({ institutionId }) {
  const config = institutions[institutionId];
  const navLinks = navigation[institutionId];

  if (!config) return <div>Invalid Institution</div>;

  const applyPath = institutionId === 'degree' ? '/degree/admissions' : `/${institutionId}#admissions`;

  return (
    <div className={`theme-${config.theme}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header institutionConfig={config} navigationLinks={navLinks} />
      <main style={{ flex: '1 0 auto' }}>
        <Outlet />
      </main>
      <Footer institutionConfig={config} navigationLinks={navLinks} />
      <MobileBottomBar 
        phone={config.phone}
        whatsappNumber="919985577636"
        whatsappText={`Hello ${config.name}, I would like to enquire about admissions.`}
        enquiryHref={applyPath}
        applyHref={applyPath}
      />
    </div>
  );
}
