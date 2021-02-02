const nacos = require('nacos');
const os = require('os');

//获取本机ip
function getIpAddress() {
    /**os.networkInterfaces() 返回一个对象，该对象包含已分配了网络地址的网络接口 */
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

module.exports = app => {
    // 开始前执行
    app.beforeStart(async() => {
        console.log('egg service start :' + JSON.stringify(app.config.nacos));
        const client = new nacos.NacosNamingClient(app.config.nacos);
        await client.ready();
        await client.registerInstance(app.config.nacos.serviceName, {
            ip: getIpAddress(),
            port: app.options.port || 7001,
        });
    });
    // 准备好执行
    app.ready(async() => {
        console.log('egg service ready');
    });
    // 关闭前执行
    app.beforeClose(async() => {
        console.log('egg service close');
    });
};