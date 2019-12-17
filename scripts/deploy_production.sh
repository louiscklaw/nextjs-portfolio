#!/usr/bin/env sh

firebase deploy -f --project nextjs-projects --only hosting:production --token $FIREBASE_TOKEN --non-interactive
firebase deploy -f --project nextjs-projects --only functions:production --token $FIREBASE_TOKEN --non-interactive

cd $TRAVIS_BUILD_DIR/_ref/travis-broadcast
pipenv run python3 travis-broadcast.py \#travis-build-result "publish to production plant done"