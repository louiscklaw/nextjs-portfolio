#!/usr/bin/env sh

firebase deploy -f --project nextjs-projects --only hosting:production --token $FIREBASE_TOKEN --non-interactive
firebase deploy -f --project nextjs-projects --only functions:production --token $FIREBASE_TOKEN --non-interactive