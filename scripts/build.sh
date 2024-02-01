#!/bin/bash
set -e
./scripts/pre-build.sh
npx qwik build
