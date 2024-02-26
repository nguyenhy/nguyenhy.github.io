#!/bin/bash
set -e
./scripts/lint.sh
./scripts/pre-build.sh
npx qwik build
