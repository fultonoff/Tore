/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = {
//   images: {
//     domains: ['images.unsplash.com'],
    
//   }
// }


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',

      },
      
      {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      
    }, 
    
  
  ],
  },
}