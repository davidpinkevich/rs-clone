const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
// const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    // target,
    devtool,
    entry: path.resolve(__dirname, 'src/ts/index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.js',
        assetModuleFilename: 'assets/[name][ext]',

    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: 'ts-loader',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),  
        new EslintPlugin({
            extensions: 'ts',
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/assets", to: "assets" },
            ],
        }),
    ],
    devServer: {
        open: true,
    },
};