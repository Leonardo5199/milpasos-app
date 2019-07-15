module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    productionSourceMap: false,
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },
    css: {
        extract: false
    }
}
