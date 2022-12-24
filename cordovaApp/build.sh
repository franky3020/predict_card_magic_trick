#!/bin/bash
set -x #echo on



rm -rf ./platforms
rm -rf ./plugins

rm -rf ./www

## 改成angular
cp -r ../angular_web/dist/angular_web ./www

## 舊的
# cp -r ../web ./www
# rm -rf ./www/node_modules

npx cordova prepare
npx cordova platform rm android --nosave
npx cordova platform add android
