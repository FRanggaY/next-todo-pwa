const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);

// export default nextConfig;


// const withPWA = require('next-pwa')({
//   dest: 'public',               // Specify the destination for the service worker files
//   register: true,               // Register the service worker automatically in production mode
//   skipWaiting: true,            // Enable skipWaiting to activate a new service worker faster
//   disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
// });

// // Export the Next.js configuration along with PWA
// module.exports = withPWA({
//   reactStrictMode: true,  // This is a Next.js specific property, and it will stay here correctly
// });
