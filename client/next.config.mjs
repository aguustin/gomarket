/** @type {import('next').NextConfig} */
const nextConfig = {
  
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
