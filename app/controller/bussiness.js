/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;

/**
 * @abstract 定义数据库相关处理类
 */
class BussinessController extends Controller {

    async queryGroupLimits() {

        const { ctx } = this;
        // 获取用户信息
        const username = ctx.query.username || ctx.params.username || '';
        // 设置返回结果
        ctx.body = await ctx.service.bussiness.queryGroupLimits(username);
    }

}

module.exports = BussinessController;