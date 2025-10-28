/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', 
    reactStrictMode: false,
  
        async redirects() {
          return [
            {
              source: '/',
              destination: '/Home',
              permanent: true,
            },
          ]
        },
      
};

export default nextConfig;