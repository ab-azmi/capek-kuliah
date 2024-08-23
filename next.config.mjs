/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {protocol: 'https', hostname: 'simpeg2.unnes.ac.id'},
        ]
    }
};

export default nextConfig;
