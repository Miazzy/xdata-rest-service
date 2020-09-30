/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;

/**
 * @abstract 定义数据库相关处理类
 */
class BussinessController extends Controller {

    async queryGroupLimits() {

        const { ctx, app } = this;

        // 缓存控制器
        const store = app.cache.store('redis');

        // 获取部门编号
        const username = ctx.query.username || ctx.params.username || '';

        // 获取动态token
        const userinfo = await store.get(`wxConfig.enterprise.grouplimits.username@${username}`);

        if (userinfo) {
            // console.log(` userinfo : ${userinfo}`);
            ctx.body = JSON.parse(userinfo);
        } else {
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
            ctx.body = result;
        }


    }

}

module.exports = BussinessController;