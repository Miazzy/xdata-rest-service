/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;
const axios = require('axios');
const fileConfig = require('../../config/fileconfig');
const wxConfig = require('../../config/wxconfig');


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
        const redirectUrl = query.rurl || ctx.params.rurl;
        const type = query.type || ctx.params.type;
        const flag = redirectUrl.includes('?') ? '&' : '?';
        const url = redirectUrl + `${flag}id=${id}&userid=${userid}`;

        const messageurl = {
            ...fileConfig,
        };

        console.log(url);

        const node = {
            msgtype: 'news',
            news: {
                articles: [{
                    title,
                    description,
                    url,
                    picurl: fileConfig.imageurl,
                }],
            },
        };

        const result = await axios.post(messageurl[type], node);

        ctx.body = result.data;
    }

    async appmessage() {

        const { ctx } = this;

        const query = ctx.query;
        const message = query.message || ctx.params.message;
        const userid = query.userid || ctx.params.userid;
        const agentid = query.agentid || ctx.params.agentid || wxConfig.enterprise.agentid;
        const redirectUrl = query.rurl || ctx.params.rurl;
        // 获取TokenURL
        const tokenAPI = `https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${wxConfig.enterprise.id}&corpsecret=${wxConfig.enterprise.agent[agentid]}`;
        // 获取动态token
        let token = query.token || ctx.params.token;
        // 消息中的链接消息
        let messageurl = '';

        // 检查token是否存在，如果不存在，则刷新token
        if (!token) {
            const result = await axios.get(tokenAPI);
            token = result.data.access_token;
        }

        // 如果存在回调URL，则编辑消息中的链接信息
        if (redirectUrl) {
            messageurl = `，链接: <a href="${redirectUrl}">详情</a>`;
        }

        // 发送信息URL
        const queryAPI = wxConfig.enterprise.message.api + token;

        console.log(`${message}:${userid}:${redirectUrl}`);

        const node = {
            touser: userid,
            msgtype: 'text',
            agentid,
            text: {
                content: `通知：${message}${messageurl}`,
            },
            safe: 0,
            enable_id_trans: 0,
            enable_duplicate_check: 0,
            duplicate_check_interval: 1800,
        };

        const result = await axios.post(queryAPI, node);

        ctx.body = result.data;
    }

}

module.exports = WeworkController;