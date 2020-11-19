// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBussiness = require('../../../app/controller/bussiness');
import ExportDatabase = require('../../../app/controller/database');
import ExportDatabasecd = require('../../../app/controller/databasecd');
import ExportDatasync = require('../../../app/controller/datasync');
import ExportExcel = require('../../../app/controller/excel');
import ExportFilebase = require('../../../app/controller/filebase');
import ExportMail = require('../../../app/controller/mail');
import ExportMysql = require('../../../app/controller/mysql');
import ExportRedis = require('../../../app/controller/redis');
import ExportUpload = require('../../../app/controller/upload');
import ExportWework = require('../../../app/controller/wework');
import ExportWeworkcd = require('../../../app/controller/weworkcd');
import ExportWeworkmessage = require('../../../app/controller/weworkmessage');

declare module 'egg' {
  interface IController {
    bussiness: ExportBussiness;
    database: ExportDatabase;
    databasecd: ExportDatabasecd;
    datasync: ExportDatasync;
    excel: ExportExcel;
    filebase: ExportFilebase;
    mail: ExportMail;
    mysql: ExportMysql;
    redis: ExportRedis;
    upload: ExportUpload;
    wework: ExportWework;
    weworkcd: ExportWeworkcd;
    weworkmessage: ExportWeworkmessage;
  }
}
