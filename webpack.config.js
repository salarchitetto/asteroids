const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './lib'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    entry: {
        main: './src/game.js',
    },
    plugins: [
        new CleanWebpackPlugin(['lib']),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.template.ejs'),
            filename: 'index.html'
        }),
    ],
    module: {
         rules: [{
             test: /\.(png|jpg|gif)$/,
             use: [{
                 loader: 'file-loader',
                 options: {}
             }]
         }]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'lib')
    }

};
