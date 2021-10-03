const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
  define() {
    const { siteConfig = {} } = context
    const { id, type, isComp, isDebug } = options || siteConfig
    const GA_ID = id || false
    const TYPE = type || 'line2'
    const ISCOMP = isComp || false
    const ISDEBUG = isDebug || false
    return { GA_ID, TYPE, ISCOMP, ISDEBUG }
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js'),
})
