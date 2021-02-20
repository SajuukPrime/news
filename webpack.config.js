const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const webpackMerge = require('webpack-merge');
const configMode = (mode) => {
    return require(`./build untils/webpack.${mode}.js`)
}

module.exports = ({ mode }) => {
    return webpackMerge.merge({
        mode,
        entry: {
            index: ["babel-polyfill", "./src/index.js"]
        },
        devServer: {
            clientLogLevel: 'warning',
            hot: true,
            inline: true,
            open: true,
            //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html (解决histroy mode 404)
            historyApiFallback: true,
            compress: true,
            disableHostCheck: true
        },
        output: {
            path: __dirname + './dist',
            filename: 'index_bundle.js'
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: "babel-loader",
                        options: {
                            plugins: ["@babel/plugin-transform-runtime"],
                            presets: ["@babel/preset-env"],
                            plugins: ["@babel/plugin-syntax-dynamic-import"],
                            plugins: ["@babel/plugin-proposal-class-properties"]
                        }
                    }]
                },
                {
                    test: /\.(png|jpe?g|gif)$/,
                    use: [{
                        loader: "url-loader",
                        options: {
                            limit: 4 * 1024,
                            esModule: false,
                        }
                    }]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./plate/index.html",
                minify: {
                    removeComments: false,
                    collapseWhitespace: false
                }
            }),
            new webpack.ProgressPlugin()
        ]
    }, configMode(mode))
}