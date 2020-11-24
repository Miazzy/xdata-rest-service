/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;
const wxConfig = require('../../config/wxconfig');
const axios = require('axios');

class WeworkMessageController extends Controller {

    /**
     * @function 数据库serialID按时间进行排序
     */
    async message() {

        const { ctx, app } = this;

        // 获取电话号码
        const mobile = ctx.query.mobile || ctx.params.mobile || '';
        // 获取推送消息
        const message = ctx.query.message || ctx.params.message || '';
        // 获取详情链接
        const url = this.queryRedirectURL(ctx.query.url || ctx.params.url || '');

        // 查询电话号码对应的一条至多条企业微信账号数据，获取到userid,company，不同的compay对应不同的企业agentid,secret
        const response = await app.mysql.query(`select * from v_hrmresource where mobile = '${mobile}';`, []);

        // 遍历用户数据，然后找到此用户数据的企业微信的agentid,secret，获取token，调用推送消息API
        for (const item of response) {
            await this.sendMessage(item.cname, wxConfig.company[item.cname].agentid, item.userid, message, url);
            console.log(`userid:${item.userid}, company:${item.company}, message: ${message}, url: ${url}`);
        }

        ctx.body = { errcode: 0, message: '' };
    }

    /**
     * @function 获取企业微信token
     * @param {*} cname 企业名称
     * @param {*} agentid 应用编号
     * @param {*} userID 用户编号
     * @param {*} message 推送消息
     * @param {*} messageurl 推送链接
     */
    async sendMessage(cname = '', agentid, userID, message, messageurl) {

        const { app } = this;

        // 缓存控制器
        const store = app.cache.store('redis');

        // 根据item的userid, company获取agentid,secret,token
        agentid = agentid ? agentid : wxConfig.company[cname].agentid;
        messageurl = messageurl ? `，链接: <a href="${messageurl}">详情</a>` : '';

        // 获取TokenURL
        const tokenAPI = `${wxConfig.wework.message.gettoken}?corpid=${wxConfig.company[cname].id}&corpsecret=${wxConfig.company[cname][agentid]}`;

        // 获取动态token
        let token = await store.get(`wxConfig.wework.access_token_company@${cname}@${agentid}`);

        // 检查token是否存在，如果不存在，则刷新token
        if (!token) {
            const result = await axios.get(tokenAPI);
            token = result.data.access_token;
            store.set(`wxConfig.wework.access_token_company@${cname}@${agentid}`, token, 3600);
            console.log('get token from wechat rest api :' + token);
        } else {
            // 打印token值
            console.log('get token from redis :' + token);
        }

        // 发送信息URL 根据token推送企业微信消息
        const queryAPI = wxConfig.wework.message.api + token;

        const node = {
            touser: `${userID}`,
            msgtype: 'text',
            agentid,
            text: {
                content: messageurl ? `${message}${messageurl}` : message,
            },
            safe: 0,
            enable_id_trans: 0,
            enable_duplicate_check: 0,
            duplicate_check_interval: 1800,
        };

        console.log(JSON.stringify(node));

        const result = await axios.post(queryAPI, node);

        return result;
    }

    /**
     * @function 获取添加微信跳转的URL
     * @param {*} redirectUrl
     */
    queryRedirectURL(redirectUrl) {
        try {
            if (redirectUrl && !redirectUrl.includes('open.weixin.qq.com')) {
                redirectUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wxConfig.enterpriseCD.id}&response_type=code&scope=snsapi_base&state=STATE&redirect_uri=REDIRECT_URL#wechat_redirect`.replace('REDIRECT_URL', encodeURIComponent(redirectUrl));
            }
        } catch (error) {
            if (redirectUrl && !redirectUrl.includes('open.weixin.qq.com')) {
                redirectUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wxConfig.enterpriseCD.id}&response_type=code&scope=snsapi_base&state=STATE&redirect_uri=REDIRECT_URL#wechat_redirect`.replace('REDIRECT_URL', redirectUrl);
            }
            console.log(error);
        }
        return redirectUrl;
    }

}


module.exports = WeworkMessageController;