import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import Sidebar from './Sidebar';
import BackToTop from './BackToTop';
import Breadcrumb from './Breadcrumb';

const Layout = ({ children, currentPath = [] }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4">
        <Breadcrumb paths={currentPath} />
        <div className="flex flex-col lg:flex-row gap-8 py-8">
          <main className="flex-1">{children}</main>
          {/* <Sidebar /> */}
        </div>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;