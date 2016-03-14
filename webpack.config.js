var webpack = require('webpack');

module.exports = {
    entry: './src/Router.jsx',

    output: {
        filename: 'js/app.js',
        path: 'public/assets/'
    },

    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    },

    plugins: process.env.NODE_ENV === 'prod' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : [],

    // devtool: 'source-map'
    devtool: 'eval'
};
