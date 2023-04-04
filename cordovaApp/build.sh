#!/bin/bash
set -x #echo on


npm i
rm -rf ./platforms
rm -rf ./plugins

rm -rf ./www

cd ../angular_web
npm i
npm run build

cd ../cordovaApp

cp -r ../angular_web/dist/angular_web ./www

npx cordova prepare
npx cordova platform rm android --nosave
npx cordova platform add android

npx cordova platform rm ios --nosave
npx cordova platform add ios
