/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;

const tools = require('../utils/tools');

class MailController extends Controller {

    async send() {
        const { ctx, app } = this;

        const query = ctx.query;
        const title = query.title || ctx.params.title;
        const description = query.description || ctx.params.description;
        const receiver = query.receiver || ctx.params.receiver;
        const rurl = query.rurl || ctx.params.rurl;
        const link = rurl ? `<div>链接：${rurl}</div>` : '';

        console.log(title + ':' + description + ':' + receiver + ':' + rurl);

        // sync
        const res = await app.mailer.send({
            to: receiver, // list of receivers
            subject: title, // Subject line
            text: description, // plain text body
            html: `<b>${description}</b>${link}`, // html body
        });

        console.log(res.response);

        ctx.body = res;
    }

    async postData() {

        const { ctx, app } = this;
        const query = ctx.query;

        const companyInfo = query.company || ctx.params.company;
        const stocks = query.stocks || ctx.params.stocks;
        const qualification = query.qualification || ctx.params.qualification;

        const res = await tools.postMainDataInfoInc(companyInfo, stocks, qualification);

        ctx.body = res;
    }
}


module.exports = MailController;