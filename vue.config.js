const path = require('path');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
const resolve = dir => {
    return path.join(__dirname, dir)
}
// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
    // 当使用基于 HTML5 history.pushState 的路由时；
    // 当使用 pages 选项构建多页面应用时。
    publicPath: BASE_URL,

    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
    outputDir: process.env.outputDir,

    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',

    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps?
        modules: false, // 启用 CSS modules for all css / pre-processor files.
        loaderOptions: {
            // css moudle 配置：https://www.jianshu.com/p/125f33c35446
            css: {
                localIdentName: '[name]__[local]-[hash:base64:5]',
                camelCase: true
            },

            sass: {
                // 给 sass-loader 传递选项，@/ 是 src/ 的别名，引入相对路径
            },
            less: {
                javascriptEnabled: true
            }
        } // css预设器配置项
    },

    lintOnSave: false,

    // 配置 webpack-dev-server 行为。
    devServer: {
        compress: true, //一切服务都启用 gzip 压缩
        host: '0.0.0.0',
        port: 8080,
        https: false,
        open: true,
        proxy: {
            '/api': {
                // 目标 API 地址
                target: 'http://localhost:3000/',
                // ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        // before: app => {}
    },

    chainWebpack: config => {
        /**
         * 删除懒加载模块的prefetch，降低带宽压力
         * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
         * 而且预渲染时生成的prefetch标签是modern版本的，低版本浏览器是不需要的
         */
        config.plugins
            .delete('prefetch');
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                options.limit = 10000;
                return options
            });
    },

    configureWebpack: (config) => {
        // vue骨架屏插件配置
        config.plugins.push(new SkeletonWebpackPlugin({
            webpackConfig: {
                entry: {
                    app: resolve('./src/config/skeleton.js')
                },
            },
            minimize: true,
            quiet: true,
        }))
    },

    // 第三方插件的选项
    pluginOptions: {},

    runtimeCompiler: false,
    productionSourceMap: false,
    parallel: undefined,

    pwa: {
        name: 'Sean Blog',
        themeColor: '#F04848',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        /*
        * 两个模式，GenerateSW（默认）和 InjectManifest
        * GenerateSW 在我们build项目时候，每次都会新建一个service worker文件
        * InjectManifest 可以让我们编辑一个自定义的service worker文件，实现更多的功能，并且可以
        * 拿到预缓存列表
        */
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // 自定义的service worker文件的位置
            swSrc: 'service-worker.js',
            // ...other Workbox options...
        }
    }
};
