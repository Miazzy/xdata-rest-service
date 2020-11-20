/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const sql = require('mssql');

// 泛微OA数据库链接配置(领地公司)
const config = {
    user: 'meeting',
    password: 'meeting',
    server: '172.18.1.11',
    database: 'newecology',
    port: 1433,
    options: {
        encrypt: false,
    },
    pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 3000,
    },
};

// 泛微OA数据库链接配置(创达公司)
const configcd = {
    user: 'sa',
    password: 'Leading888',
    server: '172.18.1.60',
    database: 'ecology',
    port: 1433,
    options: {
        encrypt: false,
    },
    pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 3000,
    },
};

// MySQL数据库连接配置(Jeecg-Boot)
const mysql = {
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

/**
 * @function 初始化数据库连接池
 */
const init = async() => {
    if (global.mssqlpool == null || typeof global.mssqlpool === 'undefined' || !this.mssqlpool) {
        global.mssqlpool = await new sql.ConnectionPool(config).connect();
        console.log('connect pool init over ... ');
    }
};

module.exports = {
    ...config,
    config,
    configcd,
    mysql,
    init,
};