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
        const fieldID = ctx.query.fieldID || ctx.params.fieldID || '';
        // 获取部门编号
        const id = ctx.query.id || ctx.params.id || '';

        const response = await app.mysql.query(`set @rank= 0;
                        update ${tablename} t set t.${fieldID} = @rank:=@rank + 1 order by t.${id} asc;`, []); // you can access to simple database instance by using app.mysql.

        ctx.body = response;
    }
}


module.exports = MySQLController;