# magic_poker


## 相關設定
使用 <preference name="Fullscreen" value="true" /> 可達到全螢幕模式


## 打包android 步驟

### 12/5
發現如果編譯不過, 則把 .idea 跟 .gradle 都刪掉, 則然後再重開 Android studio 則可以正常編譯


### 12/4 有發生過一次無法編譯, 結果用以下方是能解決, 但之後不加也沒事
需在 platform/android 中加入 local.properties 檔案
且內容為以下部分, 才能正常執行
sdk.dir=C\:\\Users\\franky\\AppData\\Local\\Android\\Sdk

