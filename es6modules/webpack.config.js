const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const nodeEnv = process.env.NODE_ENV || 'production'; // 可能不需要了

module.exports = {
    devtool: 'source-map',
    entry: {
        filename: './app.js',
    },
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        //env plugin（可能不需要了）
        new webpack.DefinePlugin({
            'proccess.env': { NODE_ENV: JSON.stringify(nodeEnv) },
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};
