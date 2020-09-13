//导入 path 模块
const path = require('path');

//导入html-webpack-plugin'，生成预览页面的插件，得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 导入vue-loader  VueLoaderPlugins是构造函数需new
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const vl = new VueLoaderPlugin();

//创建插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    //设置生成预览页面的模板文件
    template: './src/index.html',
    //设置生成的预览页面名称
    filename: 'index.html', //(可以省略) 该文件存在于内存中，在目录不显示
});

module.exports = {
    //.TODO: 编译模式
    mode: 'development', // development(开发模式) production(发布模式)
    // mode: 'production',
    //.TODO: 打包模式
    entry: path.join(__dirname, './src/index.js'), // 设置入口文件路径
    output: {
        // 设置出口文件
        path: path.join(__dirname, './dist'), //输出文件存放的路径
        filename: 'bundle.js', //输出文件的名称
    },
    //.TODO:  插件节点
    plugins: [htmlPlugin, vl],
    module: {
        rules: [{
                test: /\.css$/, //后缀名 现右后左
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', "less-loader", 'postcss-loader'],
            },
            {
                test: /\.scss$/, // 后缀 scss 包名 sass
                use: ['style-loader', 'css-loader', "sass-loader", 'postcss-loader'],
            },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, // 
                use: 'url-loader?limit=1581910', // ？号之后的是loader的参数项
                // limit 用来指定图片的大小，单位是字节(byte),只有小于limit大小的图片，才会被转为base64图片
            }, {
                test: /\.js$/,
                use: "babel-loader", //语法降级
                //exclude为排除项，意思是不要处理node_modules中的js文件
                exclude: /node_modules/
            }, {
                test: /\.vue$/,
                use: 'vue-loader',
            },
        ],
    },
};