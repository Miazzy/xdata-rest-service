/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

/**
 * @function init
 * @description Set up btoa/atob function with NodeJS
 */
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

    //查询MSSQL数据库信息
    router.get('/api/v1/:table/:order', controller.database.where);

    //新增MSSQL数据库记录
    router.post('/api/v1/:table/:node', controller.database.insert);

    //更新MSSQL数据库记录
    router.patch('/api/v1/:table/:node', controller.database.update);

    //删除MSSQL数据库记录
    router.delete('/api/v1/:table/:node', controller.database.delete);

    //查询文件信息，并进行下载
    router.get('/api/v1/filebase/:file/:path', controller.filebase.query);

};