const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var { SubresourceIntegrityPlugin } = require("webpack-subresource-integrity");
const { dependencies } = require("./package.json");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        port: 8083,
        hot: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "feedback",
            filename: "remoteEntry.js",
            exposes: {
                "./FeedbackComponent": "./src/components/Feedback",
            },
            // shared: {
            //     ...dependencies,
            //     react: {
            //         singleton: true,
            //         requiredVersion: dependencies["react"],
            //     },
            //     "react-dom": {
            //         singleton: true,
            //         requiredVersion: dependencies["react-dom"],
            //     },
            // },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new SubresourceIntegrityPlugin({
            hashFuncNames: ["sha256"],
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js",
    },
};
