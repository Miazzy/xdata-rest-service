// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDatabase = require('../../../app/controller/database');
import ExportFilebase = require('../../../app/controller/filebase');

declare module 'egg' {
  interface IController {
    database: ExportDatabase;
    filebase: ExportFilebase;
  }
}
