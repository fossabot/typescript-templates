const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: "ts-loader",
                    options: {
                        onlyCompileBundledFiles: true
                    }
                }, {
                    loader: "eslint-loader"
                }],
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader", // loads CSS module into DOM
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        modules: true,
                        camelCase: true,
                        sourceMap: true
                    }
                }, {
                    loader: "less-loader", // compiles Less to CSS
                    options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    },
    devtool: "source-map",
    resolve: { extensions: [".js", ".ts", ".tsx", ".less"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "index.cjs.js",
        libraryTarget: 'commonjs2',
    },
    externals: ["react"]
}
