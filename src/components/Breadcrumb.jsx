import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const Breadcrumb = ({ paths }) => {
  const location = useLocation();
  
  // Don't render breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <Link 
            to="/" 
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Home
          </Link>
        </li>
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            <FaChevronRight className="mx-2 text-gray-500 text-sm" />
            {index === paths.length - 1 ? (
              <span className="text-gray-300" aria-current="page">
                {path.label}
              </span>
            ) : (
              <Link
                to={path.url}
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
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