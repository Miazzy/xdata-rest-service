/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const init = () => {

    global.Buffer = global.Buffer || require('buffer').Buffer;

    if (typeof btoa === 'undefined') {
        global.btoa = function(str) {
            return new Buffer(str, 'binary').toString('base64');
        };
    }

    if (typeof atob === 'undefined') {
        global.atob = function(b64Encoded) {
            return new Buffer(b64Encoded, 'base64').toString('binary');
        };
    }

    console.log(` global install btoa and atob function ... `);

};

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

    const { router, controller } = app;

    init();

    router.get('/api/v1/:table', controller.database.index);
    router.get('/api/v1/:table/query', controller.database.query);
    router.get('/api/v1/:table/:order', controller.database.where);

};