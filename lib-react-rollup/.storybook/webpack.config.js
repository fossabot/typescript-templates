module.exports = async ({ config }) => {
    config.module.rules.push(
        {
            test: /\.(ts|tsx)$/,
            use: ['ts-loader']
        },
        {
            test: /\.less$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        });

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
}