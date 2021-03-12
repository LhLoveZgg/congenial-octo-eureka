const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PluginClearDir =  require('./client/src/plugin/clear.js')
console.log(PluginClearDir)
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
              loader: require.resolve('babel-loader'),
              options: {
                  plugins: [
                      [
                          'import',
                          {
                              libraryName: 'antd',
                              style: true
                          }
                      ]
                  ]
              }
            },
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 
                      'css-loader', 
                      {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                      }
                    ],
              }
          ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    resolve: {
        alias:{
            '@': path.resolve(__dirname, 'client/src')
        },
        // 这就是使用户在导入时无需扩展名的原因
        extensions: ['.js', '.json', '.less'],
        enforceExtension: false,   //相当于配置了extensions,
        modules: [path.resolve(__dirname, 'client/src'), 'node_modules'],
        plugins:  [ new PluginClearDir('清理')]
    },
    externals: {
        jquery: 'jQuery',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'dashboard',
            // Load a custom template (lodash by default)
            template: path.resolve(__dirname) + '/client/src/public/index.ejs',
            inject: true
        }),
        new webpack.DefinePlugin({
            // Definitions...
            name: 'liangfeng'
        })
    ]
}