import React, { createContext, useContext, useState, useEffect } from 'react';

const EnquiryModalContext = createContext();

export function EnquiryModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [targetInstitution, setTargetInstitution] = useState('');

  const openEnquiryModal = (institution = '') => {
    if (institution) {
      setTargetInstitution(institution);
    }
    setIsOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Listen for custom global event
    const handleGlobalOpen = (e) => {
      const inst = e?.detail?.institution || '';
      openEnquiryModal(inst);
    };

    // Listen for hash #enquiry
    const handleHashCheck = () => {
      if (window.location.hash === '#enquiry' || window.location.hash === '#admissions-modal') {
        openEnquiryModal();
      }
    };

    window.addEventListener('open-enquiry-modal', handleGlobalOpen);
    window.addEventListener('hashchange', handleHashCheck);
    handleHashCheck();

    return () => {
      window.removeEventListener('open-enquiry-modal', handleGlobalOpen);
      window.removeEventListener('hashchange', handleHashCheck);
    };
  }, []);

  return (
    <EnquiryModalContext.Provider value={{ isOpen, targetInstitution, openEnquiryModal, closeEnquiryModal }}>
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      isOpen: false,
      targetInstitution: '',
      openEnquiryModal: (inst) => {
        window.dispatchEvent(new CustomEvent('open-enquiry-modal', { detail: { institution: inst } }));
      },
      closeEnquiryModal: () => {}
    };
  }
  return context;
}

// Global standalone helper
export function triggerEnquiryModal(institution = '') {
  window.dispatchEvent(new CustomEvent('open-enquiry-modal', { detail: { institution } }));
}
