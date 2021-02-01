/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {

    // static: {
    //   enable: true,
    // }

    cors: {
        enable: true,
        package: 'egg-cors',
    },

    mailer: {
        enable: true,
        package: 'egg-mailer',
    },

    oss: {
        enable: false,
        package: 'egg-oss',
    },

    cache: {
        enable: true,
        package: 'egg-cache',
    },

    mysql: {
        enable: true,
        package: 'egg-mysql',
    },

    oracle: {
        enable: false,
        package: 'egg-oracle',
    },

    mssql: {
        enable: true,
        package: 'egg-mssql',
    },

    proxy: {
        enable: false,
        package: 'egg-proxy',
    },

    httpProxy: {
        enable: true,
        package: 'egg-http-proxy',
    },

    httpproxy: {
        enable: false,
        package: 'egg-http-proxy2',
    },

    redis: {
        enable: true,
        package: 'egg-redis',
    },

    // sequelize: {
    //     enable: true,
    //     package: 'egg-sequelize',
    // },


};