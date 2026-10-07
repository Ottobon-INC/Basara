import React from 'react';
import Container from './Container';

export default function Section({ children, id, className = '', bg = 'white' }) {
  const bgClass = bg === 'surface' ? 'sb-bg-surface' : bg === 'primary' ? 'sb-bg-primary' : 'sb-bg-white';
  return (
    <section id={id} className={`sb-section-padding ${bgClass} ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}
