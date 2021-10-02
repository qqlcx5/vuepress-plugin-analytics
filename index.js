const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
  define () {
    const { siteConfig = {}} = context
    const id = options.id || siteConfig.id
    const type = options.type || siteConfig.type
    const ID = id || false
    const TYPE = type || 'none'
    return { ID, TYPE }
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
})
