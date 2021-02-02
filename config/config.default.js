/* eslint valid-jsdoc: "off" */
/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const redisStore = require('cache-manager-ioredis');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_0000_0000';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true,
        },
        domainWhiteList: ['*'],
    };

    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };

    config.dbconfig = {
        user: 'meeting',
        password: 'meeting',
        server: '172.18.1.11',
        database: 'newecology',
        port: 1433,
        options: {
            encrypt: false,
            enableArithAbort: false,
        },
        pool: {
            min: 0,
            max: 10,
            idleTimeoutMillis: 3000,
        },
    };

    config.mailer = {
        host: 'smtp.exmail.qq.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'zhaoziyu@yunwisdom.club', // generated ethereal user
            pass: 'Miazzy@163.com', // generated ethereal password
        },
    };

    config.oss = {
        client: {
            accessKeyId: 'your access key',
            accessKeySecret: 'your access secret',
            bucket: 'your bucket name',
            endpoint: 'oss-cn-hongkong.aliyuncs.com',
            timeout: '60s',
        },
    };

    // 缓存配置
    config.cache = {
        default: 'memory',
        stores: {
            memory: {
                driver: 'memory',
                max: 100,
                ttl: 0,
            },
            redis: { // full config: https://github.com/dabroek/node-cache-manager-ioredis#single-store
                driver: redisStore,
                host: '172.18.254.95',
                port: 6379,
                password: '',
                db: 0,
                ttl: 600,
                valid: _ => _ !== null,
            },
        },
    };

    // oracle数据库连接配置
    config.oracle = {
        client: {
            user: 'user',
            password: 'password',
            connectString: 'localhost/orcl',
        },
    };

    /** 类似sentinel的限流工具qps限流 */
    config.ratelimiter = {
        router: [{
                path: '/apis/**', //请注意匹配优先级，放在前面优先级越高，越先匹配
                max: 100000,
                time: '1s', //时间单位 s m h d y ...
                message: 'Custom request overrun error message path:/apis ' //自定义请求超限错误信息
            },
            {
                path: '/api/**',
                max: 100000,
                time: '1s', //时间单位 s m h d y ...
                message: 'Custom request overrun error message path:/api ' //自定义请求超限错误信息
            }
        ]
    }

    // mysql数据库连接配置
    config.mysql = {
        // database configuration
        client: {
            // host
            host: '172.18.254.95',
            // port
            port: '3309',
            // username
            user: 'zhaoziyun',
            // password
            password: 'ziyequma',
            // database
            database: 'jeecg-boot',
        },
        // load into app, default is open
        app: true,
        // load into agent, default is close
        agent: false,
    };

    // mssql数据库连接配置
    config.mssql = {

        // Single Database
        // client: {
        //     server: '172.18.1.11',
        //     port: '1433',
        //     user: 'meeting',
        //     password: 'meeting',
        //     database: 'newecology',
        // },

        // Multi Databases
        clients: {
            db1: {
                server: '172.18.1.11',
                port: '1433',
                user: 'meeting',
                password: 'meeting',
                database: 'newecology',
            },
            db2: {
                server: '172.18.1.60',
                port: '1433',
                user: 'sa',
                password: 'Leading888',
                database: 'ecology',
            },
        },
    };

    // 反向代理配置
    // config.proxy = [{
    //     host: 'host1',
    //     match: /\/assets1/,
    // }, {
    //     host: 'host2',
    //     match: /\/assets2/,
    // }];

    // 网关代理配置
    config.httpProxy = {
        '/apis': {
            target: 'http://172.18.254.95:3000',
            pathRewrite: { '^/apis': '/api' },
        },
    };

    // 网关代理配置
    config.httpproxy = {
        proxyTable: [{
                path: '/risws/',
                proxy: { target: 'http://t.vy01.com/MedTechWebService/', changeOrigin: true },
            },
            {
                path: '/zsapi/',
                proxy: { target: 'http://a.vy01.com/api/', changeOrigin: true },
            },
        ],
    };

    config.multipart = {
        // 设置支持的上传文件类型
        whitelist: ['.apk', '.pptx', '.docx', '.xlsx', '.csv', '.doc', '.ppt', '.xls', '.pdf', '.pages', '.wav', '.mov', '.txt', '.png', '.jpeg', '.jpg', '.gif', '.tar.gz', '.tar', '.zip', '.mp3', '.mp4', '.avi'],
        // 设置最大可以上传300M
        fileSize: '1024mb',
    };

    config.redis = {
        client: {
            port: 6379, // Redis port
            host: '172.18.254.95', // Redis host
            password: '',
            db: 0,
        },
    };

    config.nacos = {
        logger: console,
        serverList: ['172.18.1.50:8848', '172.18.1.50:8849', '172.18.1.50:8850'], // replace to real nacos serverList
        namespace: 'public',
        serviceName: 'xdata-rest-service',
    };

    // 示例代码，具体配置项参考ts声明文件
    // config.nacos = {
    //     serverList: ['172.18.1.50:8848', '172.18.1.50:8849', '172.18.1.50:8850'],
    //     namespace: 'public',
    //     // subscribers: { // 需要监听的服务，不配置不监听
    //     //     messageService: {
    //     //         serviceName: 'xdata-rest-service',
    //     //     },
    //     // },
    //     // configCenter: { // 配置中心相关配置
    //     //     clientOptions: {},
    //     //     configList: {
    //     //         baseConfig: {
    //     //             dataId: 'xdata-rest-config.yml',
    //     //             groupName: 'DEFAULT_GROUP',
    //     //         },
    //     //     },
    //     // },
    //     providers: {
    //         accountService: {
    //             serviceName: 'xdata-rest-service',
    //             instance: {
    //                 ip: '127.0.0.1',
    //                 port: 7001,
    //             },
    //             groupName: 'DEFAULT_GROUP',
    //         },
    //     },
    // };

    // config.sequelize = {
    //     dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    //     database: 'jeecg-boot',
    //     host: '172.18.254.95',
    //     port: 3309,
    //     username: 'zhaoziyun',
    //     password: 'ziyequma',
    //     // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    //     // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    //     // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    //     // more sequelize options
    // };

    return {
        ...config,
        ...userConfig,
    };
};