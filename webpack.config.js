module.exports = {

    entry: './src/index.jsx',
    output: {
        path: './dist',
        filename: 'index.js'
    },

    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },

    resolve: {
      extensions: ['', '.js', '.jsx']
    }

}
