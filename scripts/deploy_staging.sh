#!/usr/bin/env sh

firebase deploy

cd $TRAVIS_BUILD_DIR/_ref/travis-broadcast
pipenv sync
pipenv run python3 travis-broadcast.py \#travis-build-result "publish to staging plant done"
