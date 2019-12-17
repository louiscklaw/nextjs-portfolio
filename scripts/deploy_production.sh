#!/usr/bin/env sh

firebase deploy --only hosting:production --token $FIREBASE_TOKEN --non-interactive
firebase deploy --only functions:production_next --token $FIREBASE_TOKEN --non-interactive


cd $TRAVIS_BUILD_DIR/_ref/travis-broadcast
pipenv run python3 travis-broadcast.py \#travis-build-result "publish to production plant done"