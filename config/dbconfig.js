/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

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

module.exports = {
    ...config,
};