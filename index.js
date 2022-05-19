const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
  define() {
    const { siteConfig = {} } = context
    const { ba, ga } = options || siteConfig
    const BA_ID = ba || false
    const GA_ID = ga || false
    return { BA_ID, GA_ID }
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js'),
})
