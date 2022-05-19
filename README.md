# vuepress-plugin-analytics

A plugin for adding Baidu analytics to VuePress.
## 安装

```bash
yarn add vuepress-plugin-analytics
# or
npm install vuepress-plugin-analytics
```
### 使用
```js

module.exports = {
  plugins: [
    [
      'vuepress-plugin-analytics',{
          ba: '', // 662dade0b3fe9911e80442e86935e233
          ga: '' // UA-00000000-0
      }
    ]
  ]
}
```