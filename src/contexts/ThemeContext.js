import React, { createContext, useState, useEffect, useContext } from 'react';

// Create context with default value
const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {}
});

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Check if user previously set a theme preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'dark' : true; // Default to dark theme
    }
    return true;
  });

  // Update theme in localStorage whenever it changes
  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    // Apply theme class to the document
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
