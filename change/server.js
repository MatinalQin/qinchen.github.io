/**
 * Created by qinchen on 2017/5/16.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: "./dist"
});

var port = 3000;
var ip = 'localhost';

server.listen(port, ip, function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('listening at ' + ip + ':' + port);
});