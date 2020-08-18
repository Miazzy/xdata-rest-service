/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;
const sql = require('mssql');
const dbconfig = require('../../config/dbconfig');
const whereHelp = require('../utils/where.helper');

// 设置数据库连接地址
const config = dbconfig;

/**
 * @abstract 定义数据库相关处理类
 */
class DatabaseController extends Controller {

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
     * @function 执行数据库查询操作
     */
    async query() {
        await this.where();
    }

    /**
     * @function 执行数据库查询操作
     */
    async where() {

        await this.init();

        const { ctx } = this;
        const query = ctx.query;
        const table = query.table || ctx.params.table;
        const where = query.where || ctx.params.where;
        const order = query.order || query._order || query.orderby || query._orderby || ctx.params.order;
        const fields = query.fields || query._fields;
        const page = query.page || query._page || query._p;
        const size = query.size || query._size || query._s;
        const _where = query._where;

        let wheresql = '';
        let orderby = '';
        let columns = '*';
        let limits = '';

        if (query && !table) {

            ctx.body = ' tablename is null ';

        } else {

            if (query && where) {
                wheresql = ` ${global.atob(where)} `;
            }

            if (query && _where) {
                wheresql = whereHelp.getWhereSQL(_where, ' where ');

                console.log(` wheresql : ${JSON.stringify(wheresql)} `);
            }

            if (query && order) {
                orderby = order.startsWith('-') ? ` order by ${order.slice(1)} desc ` : ` order by ${order} asc `;
            }

            if (query && fields) {
                columns = ` ${fields} `;
            }

            if (query && page && size) {
                const offset = page * size + 1;
                const next = (page + 1) * size;
                limits = ` offset ${offset} row fetch next ${next} row `;
            }

            console.log(` table : ${table} & columns : ${columns} & wheresql : ${wheresql} & orderby : ${orderby}`);

            const sql = ` select TOP 1001 ${columns} from ${config.database}.dbo.${table} ${wheresql} ${orderby} ${limits} `;
            const result = await this.pool.query(sql);

            console.log(` sql : ${sql} `);

            ctx.body = result.recordset;
        }

    }

    /**
     * @function 执行数据库新增操作
     */
    async insert() {

        await this.init();

        const { ctx } = this;
        const query = ctx.query;
        let table = query.table || ctx.params.table;
        let node = query.node || ctx.params.node;

        if (query && table) {
            try {
                table = global.atob(table);
            } catch (error) {
                console.log(error);
            }
        }

        if (query && node) {
            try {
                node = JSON.parse(global.atob(node));
            } catch (error) {
                console.log('JSON.parse(global.atob(node)) : ', error);
            }
        }

        //遍历node,获取keys字符串和values字符串
        let keys = `(${Object.keys(node).toString()})`; //(column1, column2, column3, ...)
        let values = `(${Object.values(node).toString()})`; //(value1, value2, value3, ...)

        let sql = `INSERT INTO ${config.database}.dbo.${table} ${keys} values ${values} `;

        const result = await this.pool.query(sql);

        console.log(` sql : ${sql} `);

        ctx.body = result;

    }

    /**
     * @function 执行数据库更新操作
     */
    async update() {

        await this.init();

        const { ctx } = this;
        const query = ctx.query;
        let table = query.table || ctx.params.table;
        let node = query.node || ctx.params.node;
        const _where = query._where;

        if (query && table) {
            try {
                table = global.atob(table);
            } catch (error) {
                console.log(error);
            }
        }

        if (query && node) {
            try {
                node = JSON.parse(global.atob(node));
            } catch (error) {
                console.log('JSON.parse(global.atob(node)) : ', error);
            }
        }

        if (query && _where) {
            try {
                wheresql = whereHelp.getWhereSQL(_where, ' where ');
            } catch (error) {
                console.log(`whereHelp.getWhereSQL(_where, ' where ')`, error);
            }
            console.log(` wheresql : ${JSON.stringify(wheresql)} `);
        }

        //SQL执行语句
        let statement = ``; //column1 = value1, column2 = value2, ...
        //SQL执行条件
        let condition = _where; //where condition

        //遍历待更新的对象属性
        Object.entries(node).map((item) => {
            statement += ` ${item[0]} = '${item[1]}' ,`;
        })

        //去掉结尾的逗号
        statement = statement.slice(0, -1);

        let sql = `UPDATE ${config.database}.dbo.${table} SET ${statement} ${condition} ; `

        const result = await this.pool.query(sql);

        console.log(` sql : ${sql} `);

        ctx.body = result;
    }

    /**
     * @function 执行数据库删除操作
     */
    async delete() {

        await this.init();

        const { ctx } = this;
        const query = ctx.query;
        let table = query.table || ctx.params.table;
        let node = query.node || ctx.params.node;
        const _where = query._where;

        if (query && table) {
            try {
                table = global.atob(table);
            } catch (error) {
                console.log(error);
            }
        }

        if (query && node) {
            try {
                node = JSON.parse(global.atob(node));
            } catch (error) {
                console.log('JSON.parse(global.atob(node)) : ', error);
            }
        }

        if (query && _where) {
            try {
                wheresql = whereHelp.getWhereSQL(_where, ' where ');
            } catch (error) {
                console.log(`whereHelp.getWhereSQL(_where, ' where ')`, error);
            }
            console.log(` wheresql : ${JSON.stringify(wheresql)} `);
        }

        //SQL执行语句
        let statement = ``; //column1 = value1, column2 = value2, ...
        //SQL执行条件
        let condition = _where; //where condition

        //遍历待更新的对象属性
        Object.entries(node).map((item) => {
            statement += ` AND ${item[0]} = '${item[1]}' `;
        })

        let sql = `DELETE FROM ${config.database}.dbo.${table} ${condition} ${statement}  ; `

        const result = await this.pool.query(sql);

        console.log(` sql : ${sql} `);

        ctx.body = result;

    }


}

module.exports = DatabaseController;