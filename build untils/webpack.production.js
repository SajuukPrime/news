const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require("path")
module.exports = {
    output: {
        filename: "[name]-[chunkhash].product.js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, 'css-loader', "sass-loader"],
        }, {
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, "css-loader"]
        }]
    },
    plugins: [new MiniCssExtractPlugin()],
}