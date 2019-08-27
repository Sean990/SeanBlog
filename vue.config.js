const path = require('path');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
    // 项目部署的基础路径

    publicPath: '/',

    // 将构建好的文件输出到哪里
    outputDir: process.env.outputDir,

    assetsDir: 'static',

    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps?
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
        }, // css预设器配置项
        modules: false // 启用 CSS modules for all css / pre-processor files.
    },

    lintOnSave: false,

    // 配置 webpack-dev-server 行为。
    devServer: {
        compress: true, //一切服务都启用 gzip 压缩
        host: '0.0.0.0',
        // host: '192.168.0.164',
        port: 8080,
        https: false,
        hotOnly: false,
        open: true,
        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
        // proxy: 'http://localhost:3001', // string | Object
        proxy: {
            '/api': {
                // 目标 API 地址
                target: 'http://127.0.0.1/myself/SeanBlogPhp/public/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
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

    configureWebpack: (config)=>{
        // vue骨架屏插件配置
        config.plugins.push(new SkeletonWebpackPlugin({
            webpackConfig: {
                entry: {
                    app: path.join(__dirname, './src/config/skeleton.js'),
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
