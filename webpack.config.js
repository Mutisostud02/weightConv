const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const json5 = require('json5');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
      watchFiles: ["./src/template.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/template.html",
        }),
      ],
    module: {  
        rules: [  
          {  
            test: /\.js$/,  
            exclude: /node_modules/,  
            use: {  
              loader: 'babel-loader',  
              options: {  
                presets: ['@babel/preset-env']  
              }  
            }  
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
             test: /\.json5$/i,
             type: 'json',
             parser: {
              parse: json5.parse,
             },
           },
                    
        ]  
      } 
}