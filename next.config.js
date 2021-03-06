/** @type {import('next').NextConfig} */

const withFonts = require('next-fonts');
module.exports = withFonts({
  webpack(config, options) {
    return config;
  },
});

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = {
      fs: false,
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      process: require.resolve('process/browser'),
    };
    return config;
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.ELROND_CUSTOM_API}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
