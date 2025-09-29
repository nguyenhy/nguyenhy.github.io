#!/bin/bash


if [[ "$1" == "true" ]];
then
    CURRENT_DIR=$(pwd)

    cd ../packages/playground-core
    npm run pack
    cd $CURRENT_DIR

    path_to_bundle="../packages/playground-core/bundle"
    package_filename=$(cat $path_to_bundle/recent.txt)

    npm i "playground-core@file:$path_to_bundle/$package_filename"

    DEV_BUNDLE=true npx vite
else
    path_to_dist="../packages/playground-core/dist"

    npm i playground-core@file:$path_to_dist

    npx vite
fi
