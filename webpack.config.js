module.exports = {
    entry: {
        filename: './app.js'
    },
    output: {
        filename: 'build/bundle.js'
    },
    devtool: 'source-map',    
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015']
              }
            }
        ]
    }
};
