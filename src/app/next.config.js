const withOffline = require('next-offline')

const withPlugins = require('next-compose-plugins');

var production_distDir = '../../dist/functions/next'
var staging_distDir = '../../dist/functions/next-staging'

var dev = process.env.NODE_ENV !== 'production'
var result_distDir = dev ? staging_distDir: production_distDir

const nextConfig = {
  distDir: result_distDir,
  workboxOpts: {
    swDest: 'static/service-worker.js',
  },
  experimental: {
    async rewrites() {
      return [ {
        source: '/service-worker.js',
        destination: '/_next/static/service-worker.js',
      }, ]
    },
  },
}

// module.exports = withOffline({
//   distDir: result_distDir,
//   workboxOpts: {
//     swDest: 'static/service-worker.js',
//   },
//   experimental: {
//     async rewrites() {
//       return [
//         {
//           source: '/service-worker.js',
//           destination: '/_next/static/service-worker.js',
//         },
//       ]
//     },
//   },
// })
module.exports = withPlugins(
  [
    [withOffline,
      {
        distDir: result_distDir,
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
      }
    ]
  ], nextConfig
)