// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBussiness = require('../../../app/controller/bussiness');
import ExportDatabase = require('../../../app/controller/database');
import ExportDatabasecd = require('../../../app/controller/databasecd');
import ExportDatasync = require('../../../app/controller/datasync');
import ExportElasticsearch = require('../../../app/controller/elasticsearch');
import ExportEssync = require('../../../app/controller/essync');
import ExportEtcd = require('../../../app/controller/etcd');
import ExportExcel = require('../../../app/controller/excel');
import ExportFilebase = require('../../../app/controller/filebase');
import ExportMail = require('../../../app/controller/mail');
import ExportMysql = require('../../../app/controller/mysql');
import ExportRedis = require('../../../app/controller/redis');
import ExportUpload = require('../../../app/controller/upload');
import ExportUser = require('../../../app/controller/user');
import ExportWework = require('../../../app/controller/wework');
import ExportWeworkcd = require('../../../app/controller/weworkcd');
import ExportWeworkmessage = require('../../../app/controller/weworkmessage');

declare module 'egg' {
  interface IController {
    bussiness: ExportBussiness;
    database: ExportDatabase;
    databasecd: ExportDatabasecd;
    datasync: ExportDatasync;
    elasticsearch: ExportElasticsearch;
    essync: ExportEssync;
    etcd: ExportEtcd;
    excel: ExportExcel;
    filebase: ExportFilebase;
    mail: ExportMail;
    mysql: ExportMysql;
    redis: ExportRedis;
    upload: ExportUpload;
    user: ExportUser;
    wework: ExportWework;
    weworkcd: ExportWeworkcd;
    weworkmessage: ExportWeworkmessage;
  }
}
