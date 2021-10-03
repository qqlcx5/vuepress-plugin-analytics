const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
  define() {
    const { siteConfig = {} } = context
    const id = options.id || siteConfig.id
    const type = options.type || siteConfig.type
    const isDebug = options.isDebug || siteConfig.isDebug
    const GA_ID = id || false
    const TYPE = type || false
    const ISDEBUG = isDebug || false
    return { GA_ID, TYPE, ISDEBUG }
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js'),
})
