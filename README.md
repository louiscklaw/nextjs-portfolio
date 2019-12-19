# README.md

### this repo hold the source of portfolio.louislabs.com

### spin me up
```
cd <PROJECT ROOT>
yarn
```

### deploy to staging
`yarn deploy_staging`

### deploy to production
`yarn deploy_production`

### to test
`yarn test`

### travis
- develop
[![Build Status](https://travis-ci.org/louiscklaw/nextjs-portfolio.svg?branch=develop)](https://travis-ci.org/louiscklaw/nextjs-portfolio)

- master(production)
[![Build Status](https://travis-ci.org/louiscklaw/nextjs-portfolio.svg?branch=master)](https://travis-ci.org/louiscklaw/nextjs-portfolio)

### build automation
1. build automation is achieved using Travis CI integrated with Github.
1. When a new commit is pushed to master branch Travis runs release.py script.
1. Release of the firmware happens if pushed commit has tag.
1. On successful release results (*.elf *.hex, *.bin, *.dfu, etc.) are uploaded to the Github Release
1. It is important to have the tagged commit for release