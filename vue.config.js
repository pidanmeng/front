module.exports = {
    devServer: {
        proxy: {
            '/blogApi': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/blogApi': ''
                }
            },
            '/smms': {
                target: 'https://sm.ms:443/api/v2',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/smms': ''
                },
                secure: false,
                headers: {
                    Referer: 'https://sm.ms'
                }

            }
        },
        host: 'localhost',
        port: 8080
    },
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store;
        oneOfsMap.forEach(item => {
            item.use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    resources: './src/assets/common.scss'
                })
                .end()
        })
    }
};
