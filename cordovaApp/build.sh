#!/bin/bash
set -x #echo on



rm -rf ./platforms

rm -rf ./www
cp -r ../web ./www

npx cordova prepare

