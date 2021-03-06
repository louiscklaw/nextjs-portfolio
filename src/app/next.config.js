const withOffline = require('next-offline')

module.exports = withOffline({
  distDir: '../../dist/functions/next',
  workboxOpts: {
    swDest: 'static/service-worker.js',
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js',
        },
      ]
    },
  },
})
