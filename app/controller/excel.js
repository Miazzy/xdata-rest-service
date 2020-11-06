/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;
const readXlsxFile = require('read-excel-file/node');
// const excel = require('excel');


class ExcelController extends Controller {

    async parse() {
        const { ctx } = this;

        // const query = ctx.query;
        // const title = query.title || ctx.params.title;
        const data = await readXlsxFile('/Users/yunwisdom/Desktop/one.xlsx');

        ctx.body = data;
    }
}


module.exports = ExcelController;