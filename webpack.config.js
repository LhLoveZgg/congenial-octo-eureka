const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './client/src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
        filename: "bundle.js" // 打包后输出文件的文件名
    },
    module: {
        rules: [              
            {
              test: /\.(mjs|js|jsx)$/,
              exclude: /node_modules/,
              use: ['babel-loader'],
            }
          ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'dashboard',
        // Load a custom template (lodash by default)
        template: path.resolve(__dirname) + '/client/src/public/index.ejs',
        inject: true
    })]
}