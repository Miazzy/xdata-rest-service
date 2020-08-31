/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;
const axios = require('axios');
const fileConfig = require('../../config/fileconfig');


/**
 * @abstract 定义数据库相关处理类
 */
class WeworkController extends Controller {

    async send() {

        const { ctx } = this;

        const query = ctx.query;
        const title = query.title || ctx.params.title;
        const description = query.description || ctx.params.description;
        const id = query.id || ctx.params.id;
        const userid = query.userid || ctx.params.userid;
        const type = query.type || ctx.params.type;

        const messageurl = {
            ...fileConfig,
        };

        const node = {
            msgtype: 'news',
            news: {
                articles: [{
                    title,
                    description,
                    url: 'www.qq.com',
                    picurl: fileConfig.imageurl,
                }],
            },
        };

        const result = await axios.post(messageurl[type], node);

        ctx.body = result.data;
    }

}

module.exports = WeworkController;