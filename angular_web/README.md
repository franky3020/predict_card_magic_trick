## 測試方法註記

* magic page 中 如何在web中 測試兩指按下 會返回
在 angular_web/src/app/magic-page/magic-page.component.ts 的 
```ts
backToHomePage(event: TouchEvent) {
    // for dev: 將以下 改成 1, 則可在網頁版中測試效果
    if (event.touches.length === 2) {

```
