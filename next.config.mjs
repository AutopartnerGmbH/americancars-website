/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/fahrzeugangebote', destination: '/fahrzeuge', permanent: true },
      { source: '/fahrzeugueberblick', destination: '/fahrzeuge', permanent: true },
    ];
  },
};
export default nextConfig;
