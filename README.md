# vuepress-plugin-cnzz-analytics

## 配置
```js

module.exports = {
  plugins: [
    [
      'vuepress-plugin-cnzz-analytics',
      {
        id: '' // 00000000,
        isDebug: false, // 打印上报router信息
        type: ''
        // pic1 图标1
        // pic2 图标2
        // pic3 图标3 
        // line  站长统计
        // line1 竖向排列 站长统计 PV ...
        // line2 站长统计 在线人数
        // line3 横向排列 站长统计 PV ...

      }
    ]
  ]
}
```

## 使用

```js
// 全局组件 需要的地方引用展示文字，默认不展示
<cnzz-analytics />
```