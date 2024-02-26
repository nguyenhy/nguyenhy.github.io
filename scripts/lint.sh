#!/bin/bash
set -e
npx eslint "./src/**/*.ts*"
npx tsc --project tsconfig.json
npx prettier --check ./src
