export default ({ router }) => {
    function decode(url) {
        return router.app.$withBase(decodeURIComponent(url))
    }
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
        // 谷歌分析
        if (GA_ID) {
            ;(function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r
                i[r] =
                    i[r] ||
                    function () {
                        ;(i[r].q = i[r].q || []).push(arguments)
                    }
                i[r].l = 1 * new Date()
                a = s.createElement(o)
                m = s.getElementsByTagName(o)[0]
                a.async = 1
                a.src = g
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')
            ga('create', GA_ID, 'auto')
            ga('set', 'anonymizeIp', true)
        }
        // 百度分析
        if (BA_ID) {
            window._hmt = window._hmt || []
            ;(function () {
                var hm = document.createElement('script')
                hm.src = `https://hm.baidu.com/hm.js?${BA_ID}`
                var s = document.getElementsByTagName('script')[0]
                s.parentNode.insertBefore(hm, s)
            })()
        }

        router.afterEach(function (to) {
            if (GA_ID) {
                ga('set', 'page', decode(to.fullPath))
                ga('send', 'pageview')
            }
            if(BA_ID){
                _hmt.push(['_trackPageview', decode(to.fullPath)])
            }
        })
    }
}
