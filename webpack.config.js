module.exports={
    //入口
    entry:{
        a:'./src/index.js'
    },
    // 出口
    output:{
        filename:'./dist/bundle.js',
    },
    // loaders
    module:{},
    //插件
    plugins:[],
    //服务 配置
    devServer:{},
    mode:"development"
    
}