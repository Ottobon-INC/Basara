import React, { useEffect } from 'react';
import ChairmanMessage from '../../common/components/ChairmanMessage';

export default function ChairmanMessagePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ChairmanMessage />
    </main>
  );
}
