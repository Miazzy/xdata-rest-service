/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;
const mysqldump = require('mysqldump');
const mysqlconfig = require('../../config/dbconfig');
const dayjs = require('dayjs');

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

    /**
     * @function 数据Row权限更新
     */
    async updateRowLimits() {

        const { ctx, app } = this;

        // 获取表单名称
        const tablename = ctx.query.tablename || ctx.params.tablename || '';
        // 组字段名
        const groupfieldname = ctx.query.groupfieldname || ctx.params.groupfieldname || '';
        // 组字段名
        const fieldname = ctx.query.fieldname || ctx.params.fieldname || '';
        // 获取用户名称
        const username = ctx.query.username || ctx.params.username || '';
        // 获取权限组名
        const ids = ctx.query.ids || ctx.params.ids || '';

        // 执行更新SQL
        const response = await app.mysql.query(`update ${tablename} set ${groupfieldname} = '${ids}'  where ${fieldname} = '${username}' and  ${groupfieldname} != '${ids}';`, []);

        ctx.body = response;
    }

    async backupDatabase() {

        const { ctx } = this;

        // 获取数据库连接信息
        const connectionConfig = {
            host: mysqlconfig.mysql.client.host,
            user: mysqlconfig.mysql.client.user,
            password: mysqlconfig.mysql.client.password,
            database: mysqlconfig.mysql.client.database,
            port: mysqlconfig.mysql.client.port,
        };

        // 数据库Dump配置
        const mysqldumpConfig = {
            connection: connectionConfig,
            dumpToFile: `./mysqldump/${dayjs().format('YYYYMMDDHHmm')}dump.sql.gz`,
            compressFile: true,
        };

        // dump the result straight to a compressed file
        mysqldump(mysqldumpConfig);

        ctx.body = { errcode: 'ok', error: false, success: true };

    }

}


module.exports = MySQLController;