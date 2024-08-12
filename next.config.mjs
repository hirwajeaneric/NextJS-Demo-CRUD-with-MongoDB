/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'shecancode-website-dev.vercel.app',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
