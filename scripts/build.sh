#!/bin/bash
set -e
./scripts/pre-build.sh
./scripts/lint.sh
npx qwik build
