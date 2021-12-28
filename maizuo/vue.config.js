module.exports = {
    lintOnSave:false,//暂时关闭代码格式检测,
    devServer:{
        port:3001,
        //代理操作
        proxy:{
            //接头小暗号
            '/dev':{
                target:'http://m.maizuo.com',//目标地址
                changeOrigin:true,
                pathRewrite:{
                    '^/dev':''
                }
            }
        }
    },
}