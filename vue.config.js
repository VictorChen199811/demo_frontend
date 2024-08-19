module.exports ={
    transpileDependencies: [
        'babel-polyfill',
        'vuex-module-decorators'
    ],
    devServer: {
        host: '0.0.0.0',  // 設置為 '0.0.0.0' 以允許外部訪問，或設置為特定的 IP 地址
        port: 8001,       // 這是你希望的端口號，可以根據需要更改
    },
    configureWebpack: {
        resolve: {
            fallback: {
                "querystring": require.resolve("querystring-es3")
            }
        }
    }
}
