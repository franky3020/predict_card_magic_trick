#!/bin/bash
set -x #echo on



rm -rf ./platforms
rm -rf ./plugins

rm -rf ./www
cp -r ../web ./www
rm -rf ./www/node_modules

npx cordova prepare
npx cordova platform rm android --nosave
npx cordova platform add android
