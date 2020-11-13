/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;

class WeworkMessageController extends Controller {

    /**
     * @function 数据库serialID按时间进行排序
     */
    async message() {

        const { ctx, app } = this;

        // 获取电话号码
        const mobile = ctx.query.mobile || ctx.params.mobile || '';
        // 获取电话号码
        const message = ctx.query.message || ctx.params.message || '';
        // 获取电话号码
        const url = ctx.query.url || ctx.params.url || '';

        // 查询电话号码对应的一条至多条企业微信账号数据，获取到userid,company，不同的compay对应不同的企业agentid,secret
        const response = await app.mysql.query(`select id , userid , company from bs_wework_user where mobile = '${mobile}';`, []);

        // 遍历用户数据，然后找到此用户数据的企业微信的agentid,secret，获取token，调用推送消息API
        for (const item of response) {
            // 根据item的userid, company获取agentid,secret,token

            // 根据token推送企业微信消息

            console.log(`userid:${item.userid}, company:${item.company}`);
        }

        ctx.body = { errcode: 0, message: '' };
    }

}


module.exports = WeworkMessageController;