import HtmlWebpackPlugin from 'html-webpack-plugin';

export default env => ({
    mode: 'development',
    entry: './showcase/application.entry.tsx',
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './showcase/index.template.html'
        })
    ],
    devServer: {
        hot: true,
        open: true,
    }
});