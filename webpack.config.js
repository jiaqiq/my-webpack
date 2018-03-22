const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                //用正则去匹配要用该loader转换的css文件
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract({
                    use: ['css-loader'],
                }),
                // use: ['style-loader', 'css-loader?minimize'],
                
            }
        ]
    },
    //cnpm i -D extract-text-webpack-plugin 报错解决办法 cnpm i -D extract-text-webpack-plugin@next
    plugins: [
        new ExtractTextPlugin({
            filename: `[name]_[contenthash:8].css`,
        }),
    ]
};