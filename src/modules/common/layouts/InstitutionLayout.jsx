import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/Header';
import Footer from '../components/footer/Footer';
import { institutions } from '../config/institution';
import { navigation } from '../config/navigation';

export default function InstitutionLayout({ institutionId }) {
  const config = institutions[institutionId];
  const navLinks = navigation[institutionId];

  if (!config) return <div>Invalid Institution</div>;

  return (
    <div className={`theme-${config.theme}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header institutionConfig={config} navigationLinks={navLinks} />
      <main style={{ flex: '1 0 auto' }}>
        <Outlet />
      </main>
      <Footer institutionConfig={config} navigationLinks={navLinks} />
    </div>
  );
}
