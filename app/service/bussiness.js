/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Service = require('egg').Service;

class BussinessService extends Service {

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
}


module.exports = BussinessService;