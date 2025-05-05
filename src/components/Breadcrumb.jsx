import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';

const Breadcrumb = ({ paths }) => {
  const location = useLocation();
  
  // Don't render breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="py-4 mb-2">
      <ol className="flex items-center flex-wrap text-sm">
        <li className="flex items-center">
          <Link 
            to="/" 
            className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors font-medium"
          >
            <FaHome />
          </Link>
        </li>
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            <FaChevronRight className="mx-2 text-neutral-400 dark:text-neutral-500 text-xs" />
            {index === paths.length - 1 ? (
              <span className="text-neutral-800 dark:text-neutral-200 font-medium" aria-current="page">
                {path.label}
              </span>
            ) : (
              <Link
                to={path.url}
                className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {path.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;