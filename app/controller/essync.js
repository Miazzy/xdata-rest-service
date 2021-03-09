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
            const sql = config.sql.replace(/\${index}/g, config.index).replace(/\${type}/g, config.type).replace(/\${params}/g, config.params);
            console.log(`sql:`, JSON.stringify(sql));
            const response = await app.esMySQL.query(sql, { pindex: config.pindex });
            console.log(`response:`, JSON.stringify(response));

            if (response && response.length > 0) {
                //记录最后处理的pindex，下次同步查询从此pindex开始
                app.config.elasticsearchsync[taskName].pindex = response[response.length - 1][config.params];
                console.log(`last pindex:`, app.config.elasticsearchsync[taskName].pindex);
                for (const element of response) {
                    console.log(`id:`, element.id, ` type:`, config.type, ` index`, config.index);
                    //app.esSearch.index(config.index, config.type, element, element.id, ).on('data', function(data) { console.log(data) }).exec();
                    app.elasticsearch.index({
                        index: config.index,
                        type: config.type,
                        id: element.id,
                        body: element,
                    });
                }
            }

            ctx.body = { err: 0, code: 0, success: true, pindex: config.pindex };

        } catch (error) {
            console.log(error);
        }

    }

}


module.exports = EsSyncController;