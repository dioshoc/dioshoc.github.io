import React from 'react';
import Footer from '@app/layout/footer';
import Header from '@app/layout/header';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
