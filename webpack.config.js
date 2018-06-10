var path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "./webpack/App.js"),
    output: {
        path: path.resolve(__dirname, "./assets/js"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: 
                {
                    loader: 'babel-loader',
                    options: {
                       presets: ['env', 'react', 'es2015']
                    }
                }
            }
        ]
    }
};