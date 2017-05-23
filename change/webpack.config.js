var path = require('path');
var webpack = require('webpack');

module.exports = {
    // webpack 进行打包的入口文件，这里 webpack 从根目录下的 index.js 开始进行打包
    entry: ['./index.jsx'],
    // webpack 打包后的输出文件的路径
    output: {
        path: path.join(__dirname, 'dist'), // 文件放至当前路径下的 dist 文件夹
        filename: 'bundle.js', // 将打包后的输出文件命名为 bundle.js
    },
    devServer: {
        publicPath: '/',
        contentBase: './dist',
        hot: true,
        devtool: 'cheap-source-map'
    },
    devtool: 'cheap-source-map',
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['es2015', 'react', 'stage-0'] }
                    }
                ]
            },
            {   test: /\.(jpe?g|png|gif|svg)$/i,
                use:[
                    {
                        loader: "file-loader",
                        options:{
                            name: '/public/image/[name].[ext]'
                        }
                    }
                ]},
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
        // new webpack.NoErrorsPlugin()
    ]
};
