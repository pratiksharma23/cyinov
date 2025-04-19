import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import Sidebar from './Sidebar';
import BackToTop from './BackToTop';
import Breadcrumb from './Breadcrumb';
import { useTheme } from '../contexts/ThemeContext';

const Layout = ({ children, currentPath = [] }) => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}>
      <Header />
      <div className="container mx-auto px-4">
        {/* <Breadcrumb paths={currentPath} /> */}
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