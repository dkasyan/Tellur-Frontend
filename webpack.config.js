const path = require('path')
const webpack = require('webpack')

/*
moduleInfo.exports = {
    mode: "production",
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    moduleInfo: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    // When importing a moduleInfo whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}
*/

module.exports = {
    mode: 'production',
    devtool: 'eval-source-map',
    entry: [
        'react-hot-loader/patch',
        path.resolve('src/index.tsx'),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: 'ts-loader'
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
}
