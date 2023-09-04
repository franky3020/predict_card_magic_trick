# Predict Card Magic Trick (iOS, Android)

此為一個魔術app, 效果為預言出觀眾所選的卡牌,

使用 Angular + p5.js + Cordova 製作而成

效果展示影片:
https://www.youtube.com/watch?v=ppQnhk8IS2I

[iOS](https://apps.apple.com/us/app/predict-card-magic-trick/id6445894214)

[Android](https://play.google.com/store/apps/details?id=tw.franky.predict_card)

## 打包步驟

確認node版本為: node 18.12.1

1. cd `cordovaApp`
2. bash build.sh


## 版本檢查server 部署方法
會同時運行兩個server, 可 ,防止替換過程中,版本檢查失效
1. cd back-server
2. bash deploy_docker.sh
3. 檢查一下有沒有問題 再部署第二的備份用server
4. bash deploy_docker_2.sh



## app id
iOS: tw.franky.predictcard

Android: tw.franky.predict_card

## 開發時的問題修正紀錄

### 2022/4/5
使用  preference name="Fullscreen" value="true"  可達到全螢幕模式

### 2021/12/5
發現如果編譯不過, 則把 .idea 跟 .gradle 都刪掉, 則然後再重開 Android studio 則可以正常編譯

### 2021/12/4 有發生過一次無法編譯, 結果用以下方是能解決, 但之後不加也沒事
需在 platform/android 中加入 local.properties 檔案
且內容為以下部分, 才能正常執行
sdk.dir=C\:\\Users\\username\\AppData\\Local\\Android\\Sdk

