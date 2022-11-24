const path = require('path');

module.exports = {
    entry: './dist/index.ts',
    resolve: {
        extensions: [
            '.ts', 
            '.tsx', 
            '.js', 
            '.jsx',
        ]
    },
    module: {
        rules: [{
                test: /\.(ts|tsx)$/, 
                use: 'ts-loader',
                // exclude: /node_modules/
            }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // resolve: {
    //     alias: {
    //         SearchComponents: path.resolve(__dirname, 'src/View/SearchComponents/'),
    //     }
    // }
};