#!/usr/bin/env sh

firebase deploy -f --project nextjs-projects --only hosting:staging --token $FIREBASE_TOKEN --non-interactive
firebase deploy -f --project nextjs-projects --only functions:staging --token $FIREBASE_TOKEN --non-interactive