#!/bin/bash
set -e
./scripts/pre-build.sh
./scripts/lint.sh
./scripts/test.sh
npx qwik build
