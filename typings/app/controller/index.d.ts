// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBussiness = require('../../../app/controller/bussiness');
import ExportDatabase = require('../../../app/controller/database');
import ExportExcel = require('../../../app/controller/excel');
import ExportFilebase = require('../../../app/controller/filebase');
import ExportMail = require('../../../app/controller/mail');
import ExportMysql = require('../../../app/controller/mysql');
import ExportRedis = require('../../../app/controller/redis');
import ExportUpload = require('../../../app/controller/upload');
import ExportWework = require('../../../app/controller/wework');

declare module 'egg' {
  interface IController {
    bussiness: ExportBussiness;
    database: ExportDatabase;
    excel: ExportExcel;
    filebase: ExportFilebase;
    mail: ExportMail;
    mysql: ExportMysql;
    redis: ExportRedis;
    upload: ExportUpload;
    wework: ExportWework;
  }
}
