const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const debug = require('debug')('webpack.config.common');

// env is passed in via npm scripts(e.g., webpack --env.isProduction)
module.exports = (env = {}) => {
    debug(env);
    console.log('env in common: ' + env);

    let config = {
        entry: {
            polyfills: './src/public/js/polyfills.js',
            main: './src/public/js/main.js'
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader?cacheDirectory',
                    options: {
                        presets: ['env']
                    }
                }
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }, {
                test: /\.(cvs|tsv)$/,
                use: ['cvs-loader']
            }, {
                test: /\.xml$/,
                use: ['xml-loader']
            }]
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                template: 'src/public/index.html'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common' // name the bundle for common modules across different bundles
            }),
            new ExtractTextPlugin(env.isProduction ? "[chunkhash]styles.css" : "styles.css"), // see webpack --env parameter
            new webpack.ProvidePlugin({
                lodash: 'lodash',
                jquery: 'jquery'
            })
        ]
    };

    return config;
};