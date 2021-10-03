/* global cnzz */
import cnzzAnalytics from './cnzzAnalytics.vue'
import reqCnzz from './request-cnzz'
export default ({ Vue, router }) => {
  if (GA_ID && typeof window !== 'undefined') {
    // 注册组件
    ISCOMP ? Vue.component('CnzzAnalytics', cnzzAnalytics) : reqCnzz()
    // 路由
    router.afterEach(function(to, from) {
      if (typeof _czc != 'undefined') {
        _czc.push(['_setAutoPageview', false])
        _czc.push(['_trackPageview', router.app.$withBase(to.fullPath), router.app.$withBase(from.fullPath)])
        ISDEBUG && console.log('上报cnzz统计', router.app.$withBase(to.fullPath))
      }
    })
  }
}
