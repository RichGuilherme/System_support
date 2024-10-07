/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard/tickets",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/dashboard/tickets",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
