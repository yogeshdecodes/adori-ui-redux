import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <section className="section-layout">
      <Header />
      <div className="section-layout-container"> {children}</div>
      <Footer />
    </section>
  );
};

export default Layout;
