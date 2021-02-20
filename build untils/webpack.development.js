module.exports = {
    devtool: "source-map",
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/build"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    }
}