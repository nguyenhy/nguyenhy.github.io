#!/bin/bash
set -e
./scripts/pre-build.sh
if [ "$1" == "--mobile" ]; then
  ip=$(ipconfig getifaddr $(route -n get default | grep 'interface:' | awk '{print $2}'))
  npx vite --mode ssr --host $ip
else
  npx vite --mode ssr
fi
