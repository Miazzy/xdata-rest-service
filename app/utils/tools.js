/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const dayjs = require('dayjs');

/**
 * @function 获取对象中属性
 * @param {*} obj 
 * @param {*} arr 
 */
exports.pick = (obj, arr) =>
    arr.reduce((iter, val) => (val in obj && (iter[val] = obj[val]), iter), {});

/**
 * @function 合成唯一编码
 * @param {*} length
 */
exports.queryUniqueID = (length = 32) => {
    // 日期格式化
    const timestamp = new Date().getTime();
    // 定义动态编码
    let id = dayjs().format('YYYYMMDDhhmmssSSS');
    // 打印日志
    // console.log('动态编号 :' + id);
    // 定义随机编码
    const random = (Math.floor(Math.random() * 100000000000000000000) + '') + (Math.floor(Math.random() * 100000000000000000000) + '');
    // 打印随机编码
    // console.log('随机编号 :' + random);
    // 合成动态编码
    id = (id + random).replace(/\./g, '').substring(0, length);
    // 返回唯一编码
    return id;
};