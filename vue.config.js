module.exports = {
    publicPath: '/',    // 启动页地址,vue4.0更新
    outputDir: 'dist', // 打包的目录
    lintOnSave: true, // 在保存时校验格式
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        host: '0.0.0.0',
        port: 8088, // 服务端口
        https: false,
        hotOnly: false,
        // 在这里设置代理服务器
 proxy: {
             // 对象中键是本地请求地址,值是代理服务器配置对象
             // 注意: vue/cli已经安装并配置了代理模块,可以直接用
             "/mydouyu": {
                 target: "http://open.douyucdn.cn/api/RoomApi",
                 changeOrigin: true,
                 pathRewrite: {
                     "^/mydouyu": ""
                 }
             }
         },

        before: app => { }
    }
}