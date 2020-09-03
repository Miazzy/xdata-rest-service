/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;
const axios = require('axios');
const sql = require('mssql');

const fileConfig = require('../../config/fileconfig');
const wxConfig = require('../../config/wxconfig');
const dbconfig = require('../../config/dbconfig');

// 设置数据库连接地址
const config = dbconfig;


/**
 * @abstract 定义数据库相关处理类
 */
class WeworkController extends Controller {

    /**
     * @function 初始化数据库连接池
     */
    async init() {
        if (this.pool == null || typeof this.pool === 'undefined' || !this.pool) {
            this.pool = await new sql.ConnectionPool(config).connect();
            console.log('connect pool init over ... ');
        }
    }

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

        const { ctx, app } = this;

        await this.init();

        // 缓存控制器
        const store = app.cache.store('redis');

        const query = ctx.query;
        const message = query.message || ctx.params.message;
        const userid = query.userid || ctx.params.userid;
        const agentid = query.agentid || ctx.params.agentid || wxConfig.enterprise.agentid;
        const redirectUrl = query.rurl || ctx.params.rurl;

        // 获取TokenURL
        const tokenAPI = `${wxConfig.enterprise.message.gettoken}?corpid=${wxConfig.enterprise.id}&corpsecret=${wxConfig.enterprise.agent[agentid]}`;
        // 获取动态token
        let token = await store.get(`wxConfig.enterprise.access_token@${agentid}`);
        // 消息中的链接消息
        let messageurl = '';

        console.log(token);

        // 检查token是否存在，如果不存在，则刷新token
        if (!token) {
            const result = await axios.get(tokenAPI);
            token = result.data.access_token;
            store.set(`wxConfig.enterprise.access_token@${agentid}`, token, 3600);
            console.log('get token from wechat rest api :' + token);
        } else {
            // 打印token值
            console.log('get token from redis :' + token);
        }

        console.log('redirect');

        // 如果存在回调URL，则编辑消息中的链接信息
        if (redirectUrl) {
            messageurl = `，链接: <a href="${redirectUrl}">详情</a>`;
        }

        const users = userid.split(',').map(item => { return `'${item}'`; }).join(',');

        // 根据userid(OA账户)获取对应企业微信ID
        const sql = `select id , loginid , lastname from ${config.database}.dbo.hrmresource where loginid in (${users});`;

        console.log(`appmessage generated sql : ${sql}`);

        // 获取查询后的用户ID
        const resdata = await this.pool.query(sql);
        // userID
        let userID = userid;

        if (resdata && resdata.recordset && resdata.recordset.length === 1) {
            userID = resdata.recordset[0].id;
        } else if (resdata && resdata.recordset && resdata.recordset.length > 1) {
            userID = resdata.recordset.map(obj => { return obj.id; }).join('|');
        }

        // 发送信息URL
        const queryAPI = wxConfig.enterprise.message.api + token;

        console.log(`${message}:${userid}:${redirectUrl}`);

        const node = {
            touser: userID,
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