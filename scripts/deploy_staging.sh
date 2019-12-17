#!/usr/bin/env sh

cd $TRAVIS_BUILD_DIR

firebase deploy -f --project nextjs-projects --only hosting:staging --token $FIREBASE_TOKEN --non-interactive
firebase deploy -f --project nextjs-projects --only functions:staging --token $FIREBASE_TOKEN --non-interactive

cd $TRAVIS_BUILD_DIR/_ref/travis-broadcast
pipenv sync
pipenv run python3 travis-broadcast.py \#travis-build-result "publish to staging plant done"
