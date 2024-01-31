#!/bin/bash
set -e
./scripts/pre-build.sh
npx vite --mode ssr
