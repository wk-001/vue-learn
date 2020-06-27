module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common'
      }
    }
  }
}
