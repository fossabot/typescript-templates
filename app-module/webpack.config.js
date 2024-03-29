const path = require("path");

var baseConfig = {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            onlyCompileBundledFiles: true
                        }
                    }
                ],
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },
    resolve: { extensions: [".js", ".ts", ".tsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "index.js",
        library: "typescriptConsumerWebpack",
        libraryTarget: 'var',
    },
    externals: [
    ]
};

module.exports = (env, argv) => {
    if (argv.mode === "development")
    {
        baseConfig.devtool = "cheap-module-eval-source-map";
    }

    if (argv.mode === "production")
    {
        baseConfig.devtool = "source-map";
    }

    baseConfig.mode = argv.mode;
    return baseConfig;
}