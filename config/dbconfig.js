/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const config = {
    user: 'sa',
    password: '123',
    server: '192.168.2.52',
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

module.exports = {
    ...config,
};