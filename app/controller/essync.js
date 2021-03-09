/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;

class EsSyncController extends Controller {

    /**
     * @function 数据库添加数据
     */
    async index() {

        const { ctx, app } = this;

        //限流组件，限流规则flowrule
        app.sentinel.doLimitTask('flowrule', { ctx, app }, ({ ctx, app }) => { console.log('flowrule'); });

        console.log('pass flowrule!');

        // 获取任务编码
        const taskName = ctx.query.taskName || ctx.params.taskName || 'job1';

        try {

            const config = app.config.elasticsearchsync[taskName];
            console.log(`elasticsearchsync config:`, JSON.stringify(config));
            const sql = config.sql.replace('${index}', config.index).replace('${type}', config.type).replace('${params}', config.params).replace('${params}', config.params);
            console.log(`sql:`, JSON.stringify(sql));
            const response = await app.esMySQL.query(sql, { pindex: config.pindex });
            console.log(`response:`, JSON.stringify(response));

            // await app.esSearch.index({
            //     index: schema,
            //     type,
            //     id,
            //     body: { content: '' },
            // });

            ctx.body = { err: 0, code: 0, success: true };

        } catch (error) {
            console.log(error);
        }

    }

}


module.exports = EsSyncController;