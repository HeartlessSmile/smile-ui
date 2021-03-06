// const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule('js')
  //     .include
  //     .add(path.resolve(__dirname, 'packages/')).end()
  //     .user('babel')
  //     .loader('babel-loader')
  //     .tap(options => {
  //       return options
  //     })
  // }
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages/')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
