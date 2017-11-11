'use strict';

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    output: { filename: 'build/index.js' },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    }
};