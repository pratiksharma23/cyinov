import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Breadcrumb = ({ paths }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <a 
            href="/" 
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Home
          </a>
        </li>
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            <FaChevronRight className="mx-2 text-gray-400 text-sm" />
            {index === paths.length - 1 ? (
              <span className="text-gray-600" aria-current="page">
                {path.label}
              </span>
            ) : (
              <a
                href={path.url}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {path.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;