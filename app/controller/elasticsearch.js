/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;
const mysqldump = require('mysqldump');
const mysqlconfig = require('../../config/dbconfig');
const dayjs = require('dayjs');

class ElasticSearchController extends Controller {

    /**
     * @function 数据库添加数据
     */
    async index() {

        const { ctx, app } = this;

        // 获取部门编号
        const index = ctx.query.index || ctx.params.index || 'workspace';
        // 获取部门编号
        const type = ctx.query.type || ctx.params.type || 'type';
        // 获取部门编号
        const body = ctx.query.body || ctx.params.body || '{}';

        try {
            const data = JSON.parse(body);
            ctx.body = await app.elasticsearch.index({
                index,
                type,
                body: data,
            });
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = ElasticSearchController;