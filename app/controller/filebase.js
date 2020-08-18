/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Controller = require('egg').Controller;
const compressing = require('compressing');
const fs = require('fs');
const fileConfig = require('../../config/fileconfig');

/**
 * @abstract 定义数据库相关处理类
 */
class FileBaseController extends Controller {

    async query() {

        const { ctx } = this;

        const query = ctx.query;
        let file = query.file || ctx.params.file;
        let path = query.path || ctx.params.path;
        
        try {
            file = global.atob(file);
            path = global.atob(path);
        } catch (error) {
            console.log(` base64 decode error ` , error);
        }
        
        const unzipfile = path.slice(0, -4);
        const filename = `${fileConfig.path}/unzip/${unzipfile}`;
        const filepath = filename.slice(0,filename.lastIndexOf('/'));

        console.log(`filename: ${filename}`);
        console.log(`filepath: ${path}`);
        console.log(`filepath: ${filepath}`);
        
        await compressing.zip.uncompress(`${fileConfig.path}/${path}`, `${filepath}`);
        
        const fileSize = fs.statSync(filename).size;

        ctx.attachment(filename, {
            fallback: true,
            type: 'attachment', // [string] attachment/inline
        });
        ctx.set('Content-Length', fileSize);
        ctx.set('Content-Disposition', `attachment; filename=${file}`);
        ctx.body = fs.createReadStream(filename);

    }

}

module.exports = FileBaseController;