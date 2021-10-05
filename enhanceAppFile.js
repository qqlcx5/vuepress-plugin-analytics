/* global cnzz */
import cnzzAnalytics from './cnzzAnalytics.vue'
import reqCnzz from './request-cnzz'
export default ({ Vue, router }) => {
  if (CNZZ_ID && typeof window !== 'undefined') {
    reqCnzz()
    // 注册组件
    Vue.component('CnzzAnalytics', cnzzAnalytics)
    // 路由
    function decode(url) {
      return router.app.$withBase(decodeURIComponent(url))
    }
    router.afterEach(function(to, from) {
      if (typeof _czc != 'undefined') {
        _czc.push(['_setAutoPageview', false])
        _czc.push(['_trackPageview', decode(to.fullPath), decode(from.fullPath)])
        ISDEBUG && console.log('上报cnzz统计', decode(to.fullPath))
      }
    })
  }
}
