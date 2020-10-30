/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;

class MySQLController extends Controller {

    /**
     * @function 数据库serialID按时间进行排序
     */
    async updateSerialID() {

        const { ctx, app } = this;

        // 获取部门编号
        const tablename = ctx.query.tablename || ctx.params.tablename || '';
        // 获取部门编号
        const fieldID = ctx.query.fieldid || ctx.params.fieldid || 'serialid';
        // 获取部门编号
        const id = ctx.query.id || ctx.params.id || 'id';

        // 设置排序号
        await app.mysql.query('set @rank= 0;', []);
        // 执行排序过程
        const response = await app.mysql.query(`update ${tablename} t set t.${fieldID} = @rank:=@rank + 1 order by t.${id} asc;`, []);

        ctx.body = response;
    }

    /**
     * @function 数据库serialID按时间进行排序
     */
    async patchSerialID() {

        const { ctx, app } = this;

        // 获取部门编号
        const tablename = ctx.query.tablename || ctx.params.tablename || '';
        // 获取部门编号
        const fieldid = ctx.query.fieldid || ctx.params.fieldid || 'serialid';
        // 获取部门编号
        const id = ctx.query.id || ctx.params.id || 'id';

        // 设置排序号
        await app.mysql.query(`select @rankids = '${fieldid}' from ${tablename} where ${fieldid} in (select max(${fieldid}) from ${tablename}) ;`, []);
        // 执行排序过程
        const response = await app.mysql.query(`update ${tablename} t set t.${fieldid} = @rankids:=@rankids + 1 WHERE t.id !='' and t.${fieldid} is null order by t.${id} asc;`, []);

        ctx.body = response;
    }

    /**
     * @function 用印数据定时更新
     */
    async updateSealInfo() {

        const { ctx, app } = this;

        // 执行更新SQL
        const response = await app.mysql.query('update bs_seal_regist set front = seal where (front = \'\' or front is null) and seal is not null ; ', []);
        await app.mysql.query('update bs_seal_regist set finance = seal where (finance = \'\' or finance is null) and seal is not null ;', []);
        await app.mysql.query('update bs_seal_regist set record = seal where (record = \'\' or record is null) and seal is not null ;', []);
        await app.mysql.query('update bs_seal_regist set archive = seal where (archive = \'\' or archive is null) and seal is not null ;', []);
        await app.mysql.query('update bs_seal_regist set front_name = seal_man where (front_name = \'\' or front_name is null) and seal is not null ;', []);
        await app.mysql.query('update bs_seal_regist set record_name = seal_man where (record_name = \'\' or record_name is null) and seal is not null ;', []);
        await app.mysql.query('update bs_seal_regist set finance_name = seal_man where (finance_name = \'\' or finance_name is null) and seal is not null ;', []);
        await app.mysql.query('update bs_seal_regist set archive_name = seal_man where (archive_name = \'\' or archive_name is null) and seal is not null ;', []);

        ctx.body = response;
    }
}


module.exports = MySQLController;