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

    /**
     * @function 发送群机器人消息
     */
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

    /**
     * @function 发送message消息
     */
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
        // 打印日志信息
        console.log(`appmessage generated sql : ${sql}`);
        // 获取查询后的用户ID
        const resdata = await this.pool.query(sql);

        // 查询MySQL, 排出由于OA与企业微信不匹配的异常
        const msql = `select account id , name , mobile , loginid from v_resource where loginid in (${users});`;
        // 获取查询返回结果
        const resinfo = await app.mysql.query(msql, null);

        console.log('message: ' + JSON.stringify(resinfo));

        // userID
        let userID = userid;
        let userlist = [];

        if (resdata && resdata.recordset && resdata.recordset.length > 0) {
            userlist = userlist.concat(resdata.recordset);
        }

        if (resinfo && resinfo.length > 0) {
            userlist = userlist.concat(resinfo);
        }

        if (userlist && userlist.length === 1) {
            userID = userlist[0].id;
        } else if (userlist && userlist.length > 1) {
            userID = userlist.map(obj => { return obj.id; }).join('|');
        }

        console.log(`userid : ${userID}`);

        // 发送信息URL
        const queryAPI = wxConfig.enterprise.message.api + token;

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

        console.log(`${queryAPI}:${message}:${userid}:${userID}:${redirectUrl}:${JSON.stringify(node)}`);

        const result = await axios.post(queryAPI, node);

        ctx.body = result.data;
    }

    /**
     * @function 获取企业微信token
     */
    async queryToken() {

        const { ctx, app } = this;

        await this.init();

        // 缓存控制器
        const store = app.cache.store('redis');

        const query = ctx.query;
        const agentid = query.agentid || ctx.params.agentid || wxConfig.enterprise.agentid;

        // 获取TokenURL
        const tokenAPI = `${wxConfig.enterprise.message.gettoken}?corpid=${wxConfig.enterprise.id}&corpsecret=${wxConfig.enterprise.agent[agentid]}`;
        // 获取动态token
        let token = await store.get(`wxConfig.enterprise.access_token@${agentid}`);

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

        return token;
    }

    /**
     * @function 获取用户信息 queryWechatWorkUserInfo
     * @description https://qyapi.weixin.qq.com/cgi-bin/user/get?access_token=ACCESS_TOKEN&userid=USERID
     */
    async queryWeWorkUserInfo() {

        const { ctx, app } = this;

        // 缓存控制器
        const store = app.cache.store('redis');
        const userid = ctx.query.userid || ctx.params.userid || '';

        console.log(` userid : ${userid} `);

        // 获取动态token
        const userinfo = await store.get(`wxConfig.enterprise.user.userinfo@${userid}`);

        if (userinfo) {
            // console.log(` userinfo : ${userinfo}`);
            ctx.body = JSON.parse(userinfo);
        } else {
            // 获取token
            const token = await this.queryToken();
            // 获取URL
            const queryURL = wxConfig.enterprise.user.queryAPI.replace('ACCESS_TOKEN', token).replace('USERID', userid);
            // 获取返回结果
            const result = await axios.get(queryURL);
            // 保存用户信息
            store.set(`wxConfig.enterprise.user.userinfo@${userid}`, JSON.stringify(result.data), 3600 * 24 * 3);
            // 设置返回信息
            ctx.body = result.data;
        }

    }

    /**
     * @function 获取用户信息 queryWechatWorkUserInfo
     * @description https://qyapi.weixin.qq.com/cgi-bin/user/list?access_token=ACCESS_TOKEN&department_id=DEPARTMENT_ID&fetch_child=FETCH_CHILD
     */
    async queryWeWorkDepartUser() {

        const { ctx, app } = this;

        // 缓存控制器
        const store = app.cache.store('redis');
        const departid = ctx.query.departid || ctx.params.departid || '2';
        const fetch = ctx.query.fetch || ctx.params.fetch || '1';

        console.log(` departid : ${departid} fetch : ${fetch}`);

        // 获取动态token
        const userlist = await store.get(`wxConfig.enterprise.user.queryDepartUserAPI_FETCH_CHILD#${fetch}@${departid}`);

        if (userlist) {
            // console.log(` userinfo : ${userinfo}`);
            ctx.body = JSON.parse(userlist);
        } else {
            // 获取token
            const token = await this.queryToken();
            // 获取URL
            const queryURL = wxConfig.enterprise.user.queryDepartUserAPI.replace('ACCESS_TOKEN', token).replace('DEPARTMENT_ID', departid).replace('FETCH_CHILD', fetch);
            // 获取返回结果
            const result = await axios.get(queryURL);
            // 保存用户信息
            store.set(`wxConfig.enterprise.user.queryDepartUserAPI_FETCH_CHILD#${fetch}@${departid}`, JSON.stringify(result.data), 3600 * 24 * 3);

            // 遍历数据，每个用户ID，存一个用户信息
            result.data.userlist.map(item => {
                return store.set(`wxConfig.enterprise.user.userinfo@${item.userid}`, JSON.stringify(item), 3600 * 24 * 3);
            });

            // 设置返回信息
            ctx.body = result.data;
        }

    }

    /**
     * @function 获取用户信息 queryWechatWorkUserInfo
     * @description https://qyapi.weixin.qq.com/cgi-bin/user/list?access_token=ACCESS_TOKEN&department_id=DEPARTMENT_ID&fetch_child=FETCH_CHILD
     */
    async queryWeWorkSimpleDepartUser() {

        const { ctx, app } = this;

        // 缓存控制器
        const store = app.cache.store('redis');
        const departid = ctx.query.departid || ctx.params.departid || '2';
        const fetch = ctx.query.fetch || ctx.params.fetch || '1';

        console.log(` departid : ${departid} fetch : ${fetch}`);

        // 获取动态token
        const userlist = await store.get(`wxConfig.enterprise.user.querySimpleDepartUserAPI_FETCH_CHILD#${fetch}@${departid}`);

        if (userlist) {
            // console.log(` userinfo : ${userinfo}`);
            ctx.body = JSON.parse(userlist);
        } else {
            // 获取token
            const token = await this.queryToken();
            // 获取URL
            const queryURL = wxConfig.enterprise.user.querySimpleDepartUserAPI.replace('ACCESS_TOKEN', token).replace('DEPARTMENT_ID', departid).replace('FETCH_CHILD', fetch);
            // 获取返回结果
            const result = await axios.get(queryURL);
            // 保存用户信息
            store.set(`wxConfig.enterprise.user.querySimpleDepartUserAPI_FETCH_CHILD#${fetch}@${departid}`, JSON.stringify(result.data), 3600 * 24 * 3);
            // 遍历数据，每个用户ID，存一个用户信息
            result.data.userlist.map(item => {
                return store.set(`wxConfig.enterprise.user.userinfo.simple@${item.userid}`, JSON.stringify(item), 3600 * 24 * 3);
            });
            // 设置返回信息
            ctx.body = result.data;
        }

    }

    /**
     * @function 获取用户信息 queryWechatWorkUserInfo
     * @description https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token=ACCESS_TOKEN
     */
    async queryWeWorkDepartlist() {

        const { ctx, app } = this;

        // 缓存控制器
        const store = app.cache.store('redis');

        let departid = ctx.query.departid || ctx.params.departid || '';
        let params = '';

        departid = departid === '-1' ? '' : departid;

        // 获取动态token
        const userinfo = await store.get(`wxConfig.enterprise.department.queryALL@${departid}`);

        if (departid) {
            params = `&id=${departid}`;
        }

        console.log(` departid : ${departid} params : ${params}`);

        if (userinfo) {
            // console.log(` userinfo : ${userinfo}`);
            ctx.body = JSON.parse(userinfo);
        } else {
            // 获取token
            const token = await this.queryToken();
            // 获取URL
            const queryURL = wxConfig.enterprise.department.queryALL.replace('ACCESS_TOKEN', token) + params;
            // 获取返回结果
            const result = await axios.get(queryURL);
            // 保存用户信息
            store.set(`wxConfig.enterprise.department.queryALL@${departid}`, JSON.stringify(result.data), 3600 * 24 * 3);

            // 遍历数据，每个用户ID，存一个用户信息
            result.data.department.map(item => {
                return store.set(`wxConfig.enterprise.department.single@${item.id}`, JSON.stringify(item), 3600 * 24 * 3);
            });

            // 打印字符串
            console.log('queryURL : ' + queryURL);
            // 设置返回信息
            ctx.body = result.data;
        }

    }

    /**
     * @function 获取部门信息 queryWechatWorkUserInfo
     * @description https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token=ACCESS_TOKEN
     */
    async queryWeWorkDepartInfo() {

        const { ctx, app } = this;

        // 缓存控制器
        const store = app.cache.store('redis');
        // 获取部门编号
        const departid = ctx.query.departid || ctx.params.departid || '1';

        // 获取动态token
        const userinfo = await store.get(`wxConfig.enterprise.department.single@${departid}`);

        if (userinfo) {
            // console.log(` userinfo : ${userinfo}`);
            ctx.body = JSON.parse(userinfo);
        } else {
            // 设置返回信息
            await this.queryWeWorkDepartlist();
        }

    }

    /**
     * @function 获取部门信息 queryWechatWorkUserInfo
     * @description https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token=ACCESS_TOKEN
     */
    async queryWeWorkUserByCode() {

        const { ctx, app } = this;

        // 缓存控制器
        const store = app.cache.store('redis');
        // 获取部门编号
        const code = ctx.query.code || ctx.params.code || '';

        // 获取动态token
        const userinfo = await store.get(`wxConfig.enterprise.user.code@${code}`);

        if (userinfo) {
            // console.log(` userinfo : ${userinfo}`);
            ctx.body = JSON.parse(userinfo);
        } else {
            // 获取token
            const token = await this.queryToken();
            // 获取URL
            const queryURL = wxConfig.enterprise.user.queryCodeAPI.replace('ACCESS_TOKEN', token).replace('CODE', code);
            // 获取返回结果
            const result = await axios.get(queryURL);

            console.log(JSON.stringify(result.data));

            if (result.data.UserId) {
                await this.queryIpList();
                await this.queryWeWorkDepartInfo();
                await this.queryWeWorkDepartlist();
                await this.queryWeWorkSimpleDepartUser();
                await this.queryWeWorkDepartUser();
                const openinfo = await this.queryOpenIDByUserID(result.data.UserId);

                // 获取动态token
                result.data.userinfo = await store.get(`wxConfig.enterprise.user.userinfo@${result.data.UserId}`);

                // 解析字符串为json对象
                if (result.data.userinfo) {
                    result.data.userinfo = JSON.parse(result.data.userinfo);
                    result.data.userinfo.realname = result.data.userinfo.name;
                    result.data.userinfo.phone = result.data.userinfo.mobile;
                    result.data.userinfo.openid = openinfo.openid;

                    if (result.data.userinfo.userid) {
                        // 获取用户信息
                        const user = await store.get(`wxConfig.enterprise.user.sysuserinfo#id@${result.data.userinfo.userid}`);
                        result.data.userinfo.systemuserinfo = JSON.parse(user);
                        result.data.userinfo.username = result.data.userinfo.systemuserinfo.username;
                        result.data.userinfo.grouplimits = await ctx.service.bussiness.queryGroupLimitsByID(result.data.userinfo.systemuserinfo.username); // 用户管理组权限
                    }
                }

                // 保存用户信息
                store.set(`wxConfig.enterprise.user.code@${code}`, JSON.stringify(result.data), 3600 * 24 * 3);

                // 保存用户信息
                store.set(`wxConfig.enterprise.user.code#openid#@${openinfo.openid}`, JSON.stringify(result.data), 3600 * 24 * 3);
            }

            // 设置返回信息
            ctx.body = result.data;
        }

    }

    /**
     * @function 获取企业微信服务器IP列表信息 queryIpList
     * @description https://qyapi.weixin.qq.com/cgi-bin/get_api_domain_ip?access_token=ACCESS_TOKEN
     */
    async queryIpList() {

        const { ctx, app } = this;

        // 缓存控制器
        const store = app.cache.store('redis');

        // 获取动态token
        const userinfo = await store.get('wxConfig.enterprise.ip.queryIpListAPI');

        if (userinfo) {
            // console.log(` userinfo : ${userinfo}`);
            ctx.body = JSON.parse(userinfo);
        } else {
            // 获取token
            const token = await this.queryToken();
            // 获取URL
            const queryURL = wxConfig.enterprise.ip.queryIpListAPI.replace('ACCESS_TOKEN', token);
            // 获取返回结果
            const result = await axios.get(queryURL);
            // 保存用户信息
            store.set('wxConfig.enterprise.ip.queryIpListAPI', JSON.stringify(result.data), 3600 * 24 * 3);
            // 设置返回信息
            ctx.body = result.data;
        }

    }

    /**
     * @function 获取企业微信服务器IP列表信息 queryIpList
     * @description https://qyapi.weixin.qq.com/cgi-bin/get_api_domain_ip?access_token=ACCESS_TOKEN
     * @param {*} id
     */
    async queryOpenIDByUserID(id) {

        const { ctx, app } = this;

        // 缓存控制器
        const store = app.cache.store('redis');

        // 获取部门编号
        const userid = ctx.query.userid || ctx.params.userid || id || '';

        // 获取动态token
        const userinfo = await store.get(`wxConfig.enterprise.openid#userid#@${userid}`);

        if (userinfo) {
            // console.log(` userinfo : ${userinfo}`);
            ctx.body = JSON.parse(userinfo);
        } else {
            // 获取token
            const token = await this.queryToken();
            // 获取URL
            const queryURL = wxConfig.enterprise.openid.queryOpenIDByUserIdAPI.replace('ACCESS_TOKEN', token);
            // 获取返回结果
            const result = await axios.post(queryURL, { userid });

            console.log(`queryURL: ${queryURL} \n\r result: ` + JSON.stringify(result.data));
            // 保存用户信息
            store.set(`wxConfig.enterprise.openid#userid#@${userid}`, JSON.stringify(result.data), 3600 * 24 * 3);
            // 设置返回信息
            ctx.body = result.data;
        }

        return ctx.body;
    }

}

module.exports = WeworkController;