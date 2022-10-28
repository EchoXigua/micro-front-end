const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:"development",
  entry:'./src/index.js',
  output:{
    filename:'index.js',
    path: path.join(__dirname,'build')
  },
  devtool:'source-map',
  devServer: {
    port:'9000',
    contentBase: path.join(__dirname,'build'),
    historyApiFallback: true  //browserRouter 刷新页面会失效，true之后不会
  },
  module: {
    rules: [
      {
        test: /\.js$/, //匹配.js文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            //转化js高级语法   转化react jsx语法
            presets: ["@babel/preset-env","@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      inject:false //默认会将打包后的js通过script引入,改为false，通过systemjs来引用
    })
  ],
  //告诉webpack
  externals: []
}