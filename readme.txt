webpack是打包工具
作用 
1.打包（把多个文件打包成一个js文件，减少服务器压力、带宽）
2.转化（比如less sass ts）需要loader
3.优化 （spa越来越盛行，前端项目复杂度高，webpack可以对项目进行优化）
webpack 构成
1.引入 entry
2.出口 output
3.loaders转化器
4.devServer开发服务器
5.mode
___________________________________
安装webpack
npm install webpack-cli -g OR yarn add webpack-cli - g
package.js是项目的主要依赖配置文件
开发环境：（develepment） mpn i jquery --save-dev  简写 -D
就是平时编写代码的环境
成产环境：（production）  npm i jquery --save 简写 -S
项目开发环境完毕，部署上线

npm  init 生成package  npm init -y 是直接生成package
安装淘宝景象
npm install -g cnpm --registry=https://registry.npm.taobao.org
打包
webpack src\index.js --output dist/bundle.js

