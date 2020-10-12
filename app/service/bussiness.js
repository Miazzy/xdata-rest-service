/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const mssql = require('mssql');
const dbconfig = require('../../config/dbconfig');
const wxConfig = require('../../config/wxconfig');
const axios = require('axios');
const Service = require('egg').Service;

class BussinessService extends Service {

    /**
     * @function 初始化数据库连接池
     */
    async init() {
        if (this.pool == null || typeof this.pool === 'undefined' || !this.pool) {
            this.pool = await new mssql.ConnectionPool(dbconfig).connect();
            console.log('connect pool init over ... ');
        }
    }

    /**
     * @function 获取用户管理组信息
     * @param {*} username
     */
    async queryGroupLimits(username) {

        const { ctx, app } = this;

        // 缓存控制器
        const store = app.cache.store('redis');

        // 获取动态token
        const userinfo = await store.get(`wxConfig.enterprise.grouplimits.username@${username}`);

        // 如果获取到缓存数据，设置返回结果
        if (userinfo) {
            return userinfo;
        }

        // 构建查询SQL
        const sealmansql = ` select distinct seal_man from bs_seal_regist where seal_man is not null and seal_man != '' and seal_man like '%${username}%'  ; `;
        const frontmansql = ` select distinct front_name from bs_seal_regist where front_name is not null and front_name != '' and front_name like '%${username}%'  ; `;
        const archivemansql = ` select distinct archive_name from bs_seal_regist where archive_name is not null and archive_name != '' and archive_name like '%${username}%'  ; `;

        // 查询印章人员
        const seal = await app.mysql.query(sealmansql, []);
        // 查询前端人员
        const front = await app.mysql.query(frontmansql, []);
        // 查询前端人员
        const archive = await app.mysql.query(archivemansql, []);
        // 设置结果
        const result = { seal, front, archive };
        // 设置缓存
        await store.set(`wxConfig.enterprise.grouplimits.username@${username}`, result, 3600 * 24 * 3);

        // 设置返回结果
        return result;
    }

    /**
     * @function 获取用户管理组信息
     * @param {*} username
     */
    async queryGroupLimitsByID(username) {

        const { ctx, app } = this;

        // 缓存控制器
        const store = app.cache.store('redis');

        // 获取动态token
        const userinfo = await store.get(`wxConfig.enterprise.grouplimits.username#userid#@${username}`);

        // 如果获取到缓存数据，设置返回结果
        if (userinfo) {
            return userinfo;
        }

        // 构建查询SQL
        const sealmansql = ` select distinct seal from bs_seal_regist where seal is not null and seal != '' and seal like '%${username}%'  ; `;
        const frontmansql = ` select distinct front from bs_seal_regist where front is not null and front != '' and front like '%${username}%'  ; `;
        const archivemansql = ` select distinct archive from bs_seal_regist where archive is not null and archive != '' and archive like '%${username}%'  ; `;

        // 查询印章人员
        const seal = await app.mysql.query(sealmansql, []);
        // 查询前端人员
        const front = await app.mysql.query(frontmansql, []);
        // 查询前端人员
        const archive = await app.mysql.query(archivemansql, []);
        // 设置结果
        const result = { seal, front, archive };
        // 设置缓存
        await store.set(`wxConfig.enterprise.grouplimits.username#userid#@${username}`, result, 3600 * 24 * 3);

        // 设置返回结果
        return result;
    }

    /**
     * @function 查询所有员工数据，并保持至数据库中
     * @param {*} id
     */
    async queryEmployeeByID(id) {

        await this.init();

        const { ctx, app } = this;

        // 缓存控制器
        const store = app.cache.store('redis');

        const sql = `select id , dsporder wid , loginid username , lastname realname , sex , mobile , joblevel level, textfield1 , certificatenum cert, status from newecology.dbo.hrmresource  where (status != 5) and  id = ${id} order by id asc offset 0 row fetch next 10000 row  only  `;

        const result = await this.pool.query(sql);

        // 遍历数据，每个用户ID，存一个用户信息
        result.recordset.map(item => {
            store.set(`wxConfig.enterprise.user.sysuserinfo#id@${item.id}`, JSON.stringify(item), 3600 * 24 * 31);
            store.set(`wxConfig.enterprise.user.sysuserinfo#wid@${item.wid}`, JSON.stringify(item), 3600 * 24 * 31);
            store.set(`wxConfig.enterprise.user.sysuserinfo@${item.username}`, JSON.stringify(item), 3600 * 24 * 31);
            return true;
        });

        return result.recordset[0];

    }

    /**
     * @function 查询部门信息
     * @param {*} departid
     */
    async queryDepartmentByID(departid) {

        const { ctx, app } = this;

        // 缓存控制器
        const store = app.cache.store('redis');
        // 查询参数
        let params = '';
        // 部门编号
        departid = departid === '-1' ? '' : departid;

        // 获取动态token
        const userinfo = await store.get(`wxConfig.enterprise.department.single@${departid}`);

        if (departid) {
            params = `&id=${departid}`;
        }

        console.log(` departid : ${departid} params : ${params}`);

        if (userinfo) {
            // console.log(` userinfo : ${userinfo}`);
            return JSON.parse(userinfo);
        }

        // 获取token
        const token = await this.queryToken();
        // 获取URL
        const queryURL = wxConfig.enterprise.department.queryALL.replace('ACCESS_TOKEN', token) + params;
        // 获取返回结果
        const result = await axios.get(queryURL);
        // 保存用户信息
        store.set(`wxConfig.enterprise.department.queryALL@${departid}`, JSON.stringify(result.data), 3600 * 24 * 3);

        // 遍历数据，每个用户ID，存一个用户信息
        result.data.department.map(item => {
            return store.set(`wxConfig.enterprise.department.single@${item.id}`, JSON.stringify(item), 3600 * 24 * 3);
        });

        const resp = result.data.department.find(item => {
            return item.id === departid;
        });

        console.log(`departid : ${departid} #resp: ${JSON.stringify(resp)}`);

        // 设置返回信息
        return resp;

    }
}


module.exports = BussinessService;