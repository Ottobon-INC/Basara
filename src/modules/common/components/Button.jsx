import React from 'react';
import './Button.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  theme = 'umbrella', 
  href,
  onClick,
  disabled,
  className,
  ...props
}) {
  const btnClass = `btn btn-${variant} theme-${theme} ${className || ''}`.trim();
  
  if (href) {
    return (
      <a href={href} className={btnClass} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={btnClass} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
