const path = require('path');

module.exports = {
    entry: './dist/index.ts',
    resolve: {
        extensions: [
            '.ts', 
            '.tsx', 
            '.js', 
            '.jsx',
        ],
        alias: {
            SearchComponent: path.resolve(__dirname, 'src/View/SearchComponents.tsx')
        },
    },
    module: {
        rules: [{
                test: /\.(ts|tsx)$/, 
                use: 'ts-loader',
                // exclude: /node_modules/
            }]
    },
    output: {
        filename: 'bundle.tsx',
        path: path.resolve(__dirname, 'dist'),
    },
};