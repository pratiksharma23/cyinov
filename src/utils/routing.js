/**
 * Utility functions for handling routing in different environments
 */

/**
 * Determines if the app is running in production environment
 * @returns {boolean} True if in production, false otherwise
 */
export const isProduction = process.env.NODE_ENV === 'production';

/**
 * Creates a route path that works in both local and production environments
 * In production: prepends "#" to routes for HashRouter
 * In local dev: uses clean routes for BrowserRouter
 * 
 * @param {string} path - The route path (should start with "/")
 * @returns {string} - Properly formatted route for current environment
 */
export const getRoutePath = (path) => {
  if (!path) return '/';
  
  // Ensure path starts with "/"
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // If in production, prepend "#" for HashRouter
  return isProduction ? `/#${cleanPath}` : cleanPath;
};