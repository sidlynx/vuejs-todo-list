const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')


if (process.env.NODE_ENV !== 'testp') {
    module.exports.mode = "none";
    module.exports.externals = [require('webpack-node-externals')()];
    module.exports.devtool = 'inline-cheap-module-source-map';
    module.exports.module = {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    };
    module.exports.resolve = {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('src'),
        }
    };
    //*
    module.exports.externals.plugins = [
        new VueLoaderPlugin()
    ];
    //*/
    module.exports.plugins = [
        new VueLoaderPlugin()
    ]
}