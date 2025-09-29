#!/bin/bash

npx tsc -b
npx vite build
mkdir -p ./bundle
npm pack --pack-destination=./bundle > ./bundle/recent.txt
