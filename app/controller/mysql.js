/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;

class MySQLController extends Controller {

    async updateSerialID() {

        const { ctx, app } = this;

        // 获取部门编号
        const tablename = ctx.query.tablename || ctx.params.tablename || '';
        // 获取部门编号
        const fieldID = ctx.query.fieldid || ctx.params.fieldid || '';
        // 获取部门编号
        const id = ctx.query.id || ctx.params.id || '';

        // 设置排序号
        await app.mysql.query('set @rank= 0;', []);
        // 执行排序过程
        const response = await app.mysql.query(`update ${tablename} t set t.${fieldID} = @rank:=@rank + 1 order by t.${id} asc;`, []);

        ctx.body = response;
    }
}


module.exports = MySQLController;