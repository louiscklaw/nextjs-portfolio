#!/usr/bin/env sh
TRAVIS_BUILD_WEB_URL=http://www.example.com

firebase deploy --only hosting:staging --token $FIREBASE_TOKEN --non-interactive
firebase deploy --only functions:staging_next --token $FIREBASE_TOKEN --non-interactive

cd $TRAVIS_BUILD_DIR/_ref/travis-broadcast
pipenv sync
pipenv run python3 travis-broadcast.py \#travis-build-result "publish to staging plant done"
pipenv run python3 travis-broadcast.py \#travis-build-result "build log: $TRAVIS_BUILD_WEB_URL"
pipenv run python3 travis-broadcast.py \#travis-build-result "hosting url: https://staging-portfolio-nextjs.firebaseapp.com"
