/*const HtmlWebpackPlugin = require("html-webpack-plugin")
let path = require("path")

// always explicitly define this webpack configuration file in the webpack cli i.e webpack --config webpack.config.js
module.exports = {
    entry : "./src/index.js",
    mode : "development",
    output : {
        path : path.join(__dirname,"public/webpackCompiled"),
        filename : "index_bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                // ensure you always specify the loader attribute keyword for the loader to be used.
                use : "babel-loader"
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.join(__dirname,"public/webpackHtmlTest/index.html")
        })
    ]
} */

// This is a new configuration directly from the web
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
var dotenvWebpack = require("dotenv-webpack")
//const webpack = require("webpack")
// I'm usingg the resolve.fallback so this is a bit invalid here.
// Remember that this polyfillwebpackPlugin copies the same style of adding fallbacks.
//const nodePolyfillWebPackPlugin = require("node-polyfill-webpack-plugin")

/*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve. 
After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/

module.exports={
    /** "mode"
     * the environment - development, production, none. tells webpack 
     * to use its built-in optimizations accordingly. default is production 
     */
    mode: "development", 
    /** "entry"
     * the entry point 
     */
    entry: {
        //teacher: "./teacher.js"
        //student : "./student.js"
        //listener: "./listener.js"
        //presenter : "./presenter.js"
        // use the index for gitChat
        index : "./src/index.js",
        //Login: "./src/Login.js"
        // I was done with testing the context and found out it couldn't replace the normal context since javascript has no way of declaring globals, if a way is found then it will definitely work.
        //reactContext : "./src/reactContextTest.js"
        //reduxTest : "./src/reactReduxTest.js"
        //reduxRender : "./src/reduxRender.js"
        //socketTest : "./src/socketTest.js"
    },
    output: {
        /** "path"
         * the folder path of the output file 
         */
        path: path.resolve(__dirname, "public/webpackCompiled"),
        /** "filename"
         * the name of the output file 
         */
        filename: "[name]main_bundle.js"
    },
    /** "target"
     * setting "node" as target app (server side), and setting it as "web" is 
     * for browser (client side). Default is "web"
     */
    // it should remain to web since I wanna use the ECMA standard not the commonjs
    target: "web",
    devServer: {
        /** "port" 
         * port of dev server
        */
        port: "9508",
        /** "static" 
         * This property tells Webpack what static file it should serve
        */
        static: ["./public/webpackCompiled/"],
        /** "open" 
         * opens the browser after server is successfully started
        */
        open: true,
        /** "hot"
         * enabling and disabling HMR. takes "true", "false" and "only". 
         * "only" is used if enable Hot Module Replacement without page 
         * refresh as a fallback in case of build failures
         */
        hot: true ,
        /** "liveReload"
         * disable live reload on the browser. "hot" must be set to false for this to work
        */
        liveReload: true
    },
    resolve: {
        // alias is for paths alone, i.e for custom modules that have long names so you kind of shorten the names here using an alias
        // however whatever I did here wasn't the correct thing since path and fs are the same as the alias and defining an alias is just repeating the same thing,
        // further more aliases work with custom modules not the ones in the node_modules, I mean it would work but aint that useless to use the node_modules path explicitly when you can simply quote it.
        /*alias : {
            path : "path",
            fs: "fs"
        },*/
        //note that for fallbacks you have to install even inbuilt nodejs core modules like fs and url
        /* // The fallback worked perfectly fine for all the other modules except the fs module.
        // actually that's why I was forced to look for another alternative apart from the dotenv module.
        fallback : {
            url : require.resolve("url"),
            fs: require.resolve("fs"),
            assert: require.resolve('assert'),
            crypto: require.resolve("crypto-browserify"),
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            os: require.resolve("os-browserify"),
            buffer: require.resolve('buffer'),
            stream: require.resolve("stream-browserify"),
            path : require.resolve("path")
        },*/
        /** "extensions" 
         * If multiple files share the same name but have different extensions, webpack will 
         * resolve the one with the extension listed first in the array and skip the rest. 
         * This is what enables users to leave off the extension when importing
         */
        extensions: ['.js','.jsx','.json'] 
        // this one below is an example of using pollyfills for nodejs core modules
    },
    module:{
        /** "rules"
         * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx' 
         * file inside of a require()/import statement, use the babel-loader to transform it before you 
         * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from 
         * being searched"
         */
        rules: [
            {
                test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
                exclude: /node_modules/, //folder to be excluded
                use: {
                    loader : 'babel-loader', //loader which we are going to use
                    options :{
                        "presets" : [
                            "@babel/preset-env","@babel/preset-react"
                        ]
                    }         
                }
            },
            {
                // for my imported css in preproom
                test: /\.css$/,
                exclude: /node_modules/,
                // wepack has another funny format for including multiple loaders in the use part.
                // notice how here  the use is an array instead of an object
                // also do notice how the loaders have been called as part of different anonymous objects.
                // this is the new way of adding multiple files I guess
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }
        ]
    },
    plugins : [
        /* // This plugin is for providing the nodejs core global variables like process.
        // It however wasn't useful since the fs module in the resolve fallback was not functioning.
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer','Buffer']
        }),*/
        new dotenvWebpack(),
        new HtmlWebpackPlugin({
            template : path.join(__dirname,"public/webpackHtmlTest/index.html")
        })
    ]

}