/* global cnzz */
import cnzzAnalytics from './cnzzAnalytics.vue'
export default ({ Vue, router }) => {
  // console.log(process.env.NODE_ENV === 'production');
  if (ID && typeof window !== 'undefined') {
    // 注册组件
    Vue.component('cnzz-analytics', cnzzAnalytics)
    // 请求脚本
      const MAP = {
        pic1: '&show=pic',
        pic2: '&show=pic1',
        pic3: '&show=pic2',
        line: '',
        line1: '&online=1',
        line2: '&online=1',
        line3: '&online=1&show=line',
      }
      let mode = MAP[TYPE] ? MAP[TYPE] : ''
    ;(function(a, b, c) {
      const script = a.createElement(b)
      script.src = `${c}${ID}${mode}`
      script.id = 'CNZZ'
      script.language = 'JavaScript'
      a.body.appendChild(script)
    })(document, 'script', 'https://s9.cnzz.com/z_stat.php?id=')
    // 路由
    router.afterEach(function(to, from) {
      if (typeof _czc != 'undefined') {
        console.log(to.fullPath, 'cnzzAnalytics')
        _czc.push(['_setAutoPageview', false])
        _czc.push(['_trackPageview', router.app.$withBase(to.fullPath), router.app.$withBase(from.fullPath)])
      }
    })
  }
}
