const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        port: 5000,
        hot: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                products: "products@http://localhost:8081/remoteEntry.js",
                cart: "cart@http://localhost:8082/remoteEntry.js",
                feedback: "feedback@http://localhost:8083/remoteEntry.js",
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js",
    },
};
