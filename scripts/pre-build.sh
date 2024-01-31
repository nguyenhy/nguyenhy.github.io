#!/bin/bash
set -e
node ./vite/build/style.js
node ./vite/build/meta.js
