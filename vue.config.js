module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'testoo') {
            config.externals = "[require('webpack-node-externals')()]";
            config.devtool = "'inline-cheap-module-source-map'";
        } else {

        }
    }
}