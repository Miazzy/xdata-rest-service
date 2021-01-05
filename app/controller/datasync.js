/* eslint-disable array-callback-return */
/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;

const sql = require('mssql');
const dayjs = require('dayjs');
const superagent = require('superagent');
const dbconfig = require('../../config/dbconfig');
const wxconfig = require('../../config/wxconfig');

// 设置数据库连接地址
const config = dbconfig;
const pool = { ld: null, cd: null };

/**
 * @abstract 定义前端业务处理相关Controller
 */
class DataSyncController extends Controller {

    /**
     * @function 初始化数据库连接池
     */
    async init() {


        if (pool.ld == null || typeof pool.ld === 'undefined' || !pool.ld) {
            pool.ld = await new sql.ConnectionPool(config.config).connect();
            console.log('connect ld pool init over ... ');
        }

        if (pool.cd == null || typeof pool.cd === 'undefined' || !pool.cd) {
            pool.cd = await new sql.ConnectionPool(config.configcd).connect();
            console.log('connect cd pool init over ... ');
        }

    }

    /**
     * @function 同步泛微OA表hrmresource到MySQL数据库bs_hrmresource中
     */
    async syncHRM() {

        await this.init();

        const { ctx, app } = this;

        let response = null;
        let sql = null;
        let maxldID = 0;
        let maxcdID = 0;
        let ldList = null;
        let cdList = null;
        let list = [];

        /** ********** 查询MySQL中领地公司的员工id最大值，及创达公司员工id最大值，将原泛微OA的数据库中大于此最大值的所有员工数据插入MySQL中 ********** */

        // 获取待同步数据的起始ID 领地 select max(id) id from bs_hrmresource where id < 2000000 ldID ;
        response = await app.mysql.query(' select max(id) id from bs_hrmresource where id < 2000000 and id > 1000000 ', []);
        maxldID = response[0].id - 1000000;

        // 获取待同步数据的起始ID 创达 select max(id) id from bs_hrmresource where id < 3000000 and id > 2000000 cdID ;
        response = await app.mysql.query(' select max(id) id from bs_hrmresource where id < 3000000 and id > 2000000 ', []);
        maxcdID = response[0].id - 2000000;

        // 查询领地表中大于ldID的所有员工数据 id + 1000000
        sql = `select * from ${config.config.database}.dbo.hrmresource  where id > ${maxldID} order by id asc offset 0 row fetch next 10000 row only `;
        response = await pool.ld.query(sql);
        ldList = response.recordset;
        ldList.map(item => { item.id = item.id + 1000000; });

        // 查询创达表中大于cdID的所有员工数据 id + 2000000
        sql = `select * from ${config.configcd.database}.dbo.hrmresource  where id > ${maxcdID} order by id asc offset 0 row fetch next 10000 row only `;
        response = await pool.cd.query(sql);
        cdList = response.recordset;
        cdList.map(item => { item.id = item.id + 2000000; });

        // 合并查询到的员工数据
        list = [...ldList, ...cdList];

        // 合并查询到的员工数据，将数据insert到MySQL的bs_hrmresourse中
        for (const node of list) {
            await this.postTableData('bs_hrmresource', node);
        }

        // 返回查询数据
        ctx.body = { maxldID, maxcdID, list };

    }

    /**
     * @function 同步泛微OA表HRMScheduleSign到MySQL数据库bs_HRMScheduleSign中
     */
    async syncHRMScheduleSign() {

        await this.init();

        const { ctx, app } = this;

        let response = null;
        let sql = null;
        let maxID = 0;
        let list = [];

        response = await app.mysql.query(' select max(id) id from bs_HrmScheduleSign ', []);
        maxID = response[0].id;

        sql = `select * from ${config.config.database}.dbo.HrmScheduleSign  where id > ${maxID} order by id asc offset 0 row fetch next 10000 row only `;
        response = await pool.ld.query(sql);
        list = response.recordset;

        // 合并查询到的员工签到数据，将数据insert到MySQL的bs_hrmschedulesign中
        for (const node of list) {
            await this.postTableData('bs_hrmschedulesign', node);
        }

        // 返回查询数据
        ctx.body = { maxID, list };

    }

    /**
     * @function 同步泛微OA表HRMScheduleSign到MySQL数据库bs_HRMScheduleSign中
     */
    async syncHRMScheduleSignDate() {

        await this.init();

        const { ctx, app } = this;

        const date = ctx.query.date || ctx.params.date || ''; // 获取电话号码

        let response = null;
        let sql = null;
        let list = [];

        sql = `select * from ${config.config.database}.dbo.HrmScheduleSign where signDate like '%${date}%' order by id asc offset 0 row fetch next 1000000 row only `;
        response = await pool.ld.query(sql);
        list = response.recordset;

        // 合并查询到的员工签到数据，将数据insert到MySQL的bs_hrmschedulesign中
        for (const node of list) {
            await this.postTableData('bs_hrmschedulesign', node);
        }

        // 返回查询数据
        ctx.body = { list };

    }

    /**
     * @function 提交并持久化数据到服务器
     * @param {*} tableName
     * @param {*} node
     */
    async postTableData(tableName, node) {

        // 大写转小写
        tableName = tableName.toLowerCase();
        // Post数据的URL地址
        const insertURL = `${wxconfig.wework.api_url}/${tableName}`;
        // 设置node为value
        const value = node;

        // 设置时间格式
        Object.keys(value).map(key => {
            value[key] = (key.includes('time') || key.includes('created') || key.includes('modified')) && value[key] ? dayjs(value[key]).format('YYYY-MM-DD HH:mm:ss') : value[key];
        });

        try {
            const res = await superagent.post(insertURL).send(node).set('accept', 'json');
            return res.body;
        } catch (err) {
            console.log(err);
        }

    }

}

module.exports = DataSyncController;