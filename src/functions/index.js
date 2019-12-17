const path = require('path')
const functions = require('firebase-functions')
const next = require('next')


var dev = process.env.NODE_ENV !== 'production'
var production_distDir = `${path.relative(process.cwd(), __dirname)}/next`
var staging_distDir = `${path.relative(process.cwd(), __dirname)}/next-staging`
var result_distDir = dev ? staging_distDir: production_distDir

var app = next({
  dev: false,
  conf: { distDir: result_distDir },
})
var handle = app.getRequestHandler()

exports.next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl) // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res))
})
