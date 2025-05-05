import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Breadcrumb from './Breadcrumb';
import { useTheme } from '../contexts/ThemeContext';

const Layout = ({ children, currentPath = [] }) => {
  const { isDark } = useTheme();
  const location = useLocation();

  return (
    <div className={`min-h-screen bg-neutral-50 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 transition-colors duration-300`}>
      <Header />
      <div className="mt-20">
        {location.pathname === '/' && children}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb paths={currentPath} />
        <main>{location.pathname !== '/' && children}</main>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
