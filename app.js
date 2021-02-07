const nacos = require('nacos');
const os = require('os');
const FlowRuleManager = require('xdata-sentinel/lib/core/flow/rule_manager');
const Sentinel = require('xdata-sentinel/lib');

const logger = console;
logger.write = console.log;
const sentinelClient = new Sentinel({
    appName: 'sentinel-test',
    async: true,
    logger: console,
    blockLogger: console,
});

const Constants = Sentinel.Constants;

function loadFlowRules() {
    FlowRuleManager.loadRules([
        { resource: 'flowrule', count: 2, maxQueueingTimeMs: 3000, controlBehavior: 0, durationInSec: 1, warmUpPeriodSec: 1, metricType: 1 }
    ]);
}

function doLimitTask(taskName, fn = () => {}) {
    let entry;
    try {
        entry = sentinelClient.entry(taskName);
        fn();
    } catch (e) {
        console.log('exec code error ... ', e);
    } finally {
        if (entry) {
            entry.exit();
        }
    }
}

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

        loadFlowRules();

        try {
            app.sentinel = sentinelClient;
            app.sentinel.doLimitTask = doLimitTask;
        } catch (e) {
            console.error(e);
        } finally {
            console.log(Constants.ROOT.toString());
        }

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