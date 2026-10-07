import React from 'react';

export default function Container({ children, className = '', style, ...props }) {
  return (
    <div className={`sb-container ${className}`} style={style} {...props}>
      {children}
    </div>
  );
}
