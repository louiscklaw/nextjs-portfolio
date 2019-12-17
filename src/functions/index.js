const path = require('path')
const functions = require('firebase-functions')
const next = require('next')


var production_distDir = `${path.relative(process.cwd(), __dirname)}/next`
var staging_distDir = `${path.relative(process.cwd(), __dirname)}/next-staging`

// NOTE: the dev: false is related to https://github.com/zeit/next.js/issues/8893
var production_app = next({ dev: false, conf: { distDir: production_distDir } })

var production_handle = production_app.getRequestHandler()

exports.production_next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl) // log the page.js file that is being requested
  return production_app.prepare().then(() => production_handle(req, res))
})

var staging_app = next({ dev: false, conf: { distDir: staging_distDir } })
var staging_handle = production_app.getRequestHandler()
exports.staging_next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl) // log the page.js file that is being requested
  return staging_app.prepare().then(() => staging_handle(req, res))
})
