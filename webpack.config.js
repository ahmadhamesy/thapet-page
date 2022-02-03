var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var NounProject = require('the-noun-project'),
nounProject = new NounProject({
    key: 'foo',
    secret: 'bar'
});

module.exports ={
    entry: {
        app:'./src/index.js'
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath:'',
        filename: "main.js"
    },
     mode: "development",


     devServer:{
        port:1122,
        open:true,
        static: path.join(__dirname, '/dist'),
        devMiddleware: {
            writeToDisk: true,
  },
},

     module: {
         rules: [
             {
                 test: /\.html$/,
                 use:[
                     {
                         loader: "html-loader",
                         options: {
                         minimize:true,
                         }
                     }
                 ]
             },
             {
                 test:/\.css$/,
                 use:[
                     'style-loader',
                     'css-loader'
                 ]
             },
              ],
     },
     plugins:[
         new HtmlWebpackPlugin({
             filename: "index.html",
             template:"./src/index.html",
         })
     ],
};