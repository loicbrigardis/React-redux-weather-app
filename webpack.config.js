module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader!sass-loader"
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx','.css']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
