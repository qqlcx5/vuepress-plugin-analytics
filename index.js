const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
  define () {
    const { siteConfig = {}} = context
    const ga = options.ga || siteConfig.ga
    const src = options.src || siteConfig.src
    const GA_ID = ga || false
    const SRC = src || false
    return { GA_ID, SRC }
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
})
