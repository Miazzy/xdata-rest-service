/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;

/**
 * @abstract 定义数据库相关处理类
 */
class BussinessController extends Controller {

    /**
     * @function 获取用户管理组信息
     */
    async queryGroupLimits() {
        // 获取用户信息
        const username = this.ctx.query.username || this.ctx.params.username || '';
        // 设置返回结果
        this.ctx.body = await this.ctx.service.bussiness.queryGroupLimits(username);
    }

}

module.exports = BussinessController;