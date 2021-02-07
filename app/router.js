/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const base64Config = require('../config/base64.config');
const dbConfig = require('../config/dbconfig');

/**
 * @function init 执行初始化
 * @description Set up btoa/atob function with NodeJS
 */
const init = () => {
    base64Config.init();
    dbConfig.init();
};

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

    const { router, controller } = app;

    // 执行初始化
    init();

    /** ******************** 领地Wework(数据库操作) ******************** */

    /** **************** v1 版 **************** */

    // 查询MSSQL数据库信息
    router.get('/api/v1/:table/:order', controller.database.where);

    // 新增MSSQL数据库记录
    router.post('/api/v1/:table/:node', controller.database.insert);

    // 更新MSSQL数据库记录
    router.patch('/api/v1/:table/:node', controller.database.update);

    // 删除MSSQL数据库记录
    router.delete('/api/v1/:table/:node', controller.database.delete);

    // 查询员工数据
    router.get('/api/v1/employee', controller.database.employee);

    // 查询员工数据
    router.get('/api/v1/queryemployee/:id', controller.database.queryEmployeeByID);

    // 查询员工数据
    router.get('/api/v1/employeewid/:id', controller.database.queryEmployeeByWID);

    /** **************** v2 版 **************** */

    // 查询MSSQL数据库信息
    // router.get('/api/v2/:table/:order', controller.database.where);

    // 新增MSSQL数据库记录
    // router.post('/api/v2/:table/:node', controller.database.insert);

    // 更新MSSQL数据库记录
    // router.patch('/api/v2/:table/:node', controller.database.update);

    // 删除MSSQL数据库记录
    // router.delete('/api/v2/:table/:node', controller.database.delete);

    // 查询员工数据
    // router.get('/api/v2/employee', controller.database.employee);

    // 查询员工数据
    // router.get('/api/v2/queryemployee/:id', controller.database.queryEmployeeByID);

    // 查询员工数据
    // router.get('/api/v2/employeewid/:id', controller.database.queryEmployeeByWID);

    /** **************** v1_cd 创达版 **************** */

    // 查询MSSQL数据库信息
    // router.get('/api/v1_cd/:table/:order', controller.databasecd.where);

    // 新增MSSQL数据库记录
    // router.post('/api/v1_cd/:table/:node', controller.databasecd.insert);

    // 更新MSSQL数据库记录
    // router.patch('/api/v1_cd/:table/:node', controller.databasecd.update);

    // 删除MSSQL数据库记录
    // router.delete('/api/v1_cd/:table/:node', controller.databasecd.delete);

    // 查询员工数据
    // router.get('/api/v1_cd/employee', controller.databasecd.employee);

    // 查询员工数据
    // router.get('/api/v1_cd/queryemployee/:id', controller.databasecd.queryEmployeeByID);

    // 查询员工数据
    // router.get('/api/v1_cd/employeewid/:id', controller.databasecd.queryEmployeeByWID);

    /** ******************** 领地Wework(数据库操作) ******************** */

    // 查询文件信息，并进行下载
    router.get('/api/v1/filebase/:file/:path', controller.filebase.query);

    // 查询文件信息，并进行下载(根据FileID)
    router.get('/api/v1/file/query/:file', controller.filebase.queryByFileID);

    // 推送EMAIL机器消息
    router.get('/api/v1/mail/:title/:description/:receiver', controller.mail.send);

    /** ******************** 领地Wework ******************** */

    /** **************** v1 版 **************** */

    // 查询员工OpenID
    router.get('/api/v1/wework/openid/:userid', controller.wework.queryOpenIDByUserID);

    // 推送企业微信机器消息
    router.get('/api/v1/wework/:title/:description', controller.wework.send);

    // 查询企业微信用户信息
    router.get('/api/v1/wework_user/:userid', controller.wework.queryWeWorkUserInfo);

    // 查询企业微信用户信息
    router.get('/api/v1/wework_mobile/:mobile', controller.wework.queryWeWorkUserInfoByMobile);

    // 查询企业微信部门成员信息
    router.get('/api/v1/wework_user_page/:page/:size', controller.wework.queryWeWorkDepartUser);

    // 查询企业微信部门成员信息
    router.get('/api/v1/wework_depart_user/:departid/:fetch', controller.wework.queryWeWorkDepartUser);

    // 查询企业微信部门成员信息(simple)
    router.get('/api/v1/wework_sdepart_user/:departid/:fetch', controller.wework.queryWeWorkSimpleDepartUser);

    // 查询企业微信部门列表信息
    router.get('/api/v1/wework_depart_list/:departid', controller.wework.queryWeWorkDepartlist);

    // 查询企业微信部门列表信息
    router.get('/api/v1/wework_depart/:departid', controller.wework.queryWeWorkDepartInfo);

    // 查询企业微信用户信息 行政智能模块获取消息 (网页授权)
    router.get('/api/v1/wework_user_code/:code', controller.wework.queryWeWorkUserByCode);

    // 查询企业微信用户信息(网页授权)
    router.get('/api/v1/wework_ip_list', controller.wework.queryIpList);

    /** **************** v2 版 **************** */

    // 查询员工OpenID
    router.get('/api/v2/wework/openid/:userid', controller.wework.queryOpenIDByUserID);

    // 推送企业微信机器消息
    router.get('/api/v2/wework/:title/:description', controller.wework.send);

    // 查询企业微信用户信息
    router.get('/api/v2/wework_user/:userid', controller.wework.queryWeWorkUserInfo);

    // 查询企业微信用户信息
    router.get('/api/v2/wework_mobile/:mobile', controller.wework.queryWeWorkUserInfoByMobile);

    // 查询企业微信部门成员信息
    router.get('/api/v2/wework_user_page/:page/:size', controller.wework.queryWeWorkDepartUser);

    // 查询企业微信部门成员信息
    router.get('/api/v2/wework_depart_user/:departid/:fetch', controller.wework.queryWeWorkDepartUser);

    // 查询企业微信部门成员信息(simple)
    router.get('/api/v2/wework_sdepart_user/:departid/:fetch', controller.wework.queryWeWorkSimpleDepartUser);

    // 查询企业微信部门列表信息
    router.get('/api/v2/wework_depart_list/:departid', controller.wework.queryWeWorkDepartlist);

    // 查询企业微信部门列表信息
    router.get('/api/v2/wework_depart/:departid', controller.wework.queryWeWorkDepartInfo);

    // 查询企业微信用户信息 行政智能模块获取消息 (网页授权)
    router.get('/api/v2/wework_user_code/:code', controller.wework.queryWeWorkUserByCode);

    // 查询企业微信用户信息(网页授权)
    router.get('/api/v2/wework_ip_list', controller.wework.queryIpList);

    /** **************** v3 版 **************** */

    // 查询员工OpenID
    router.get('/api/v3/wework/openid/:userid', controller.wework.queryOpenIDByUserID);

    // 推送企业微信机器消息
    router.get('/api/v3/wework/:title/:description', controller.wework.send);

    // 查询企业微信用户信息
    router.get('/api/v3/wework_user/:userid', controller.wework.queryWeWorkUserInfo);

    // 查询企业微信用户信息
    router.get('/api/v3/wework_mobile/:mobile', controller.wework.queryWeWorkUserInfoByMobile);

    // 查询企业微信部门成员信息
    router.get('/api/v3/wework_user_page/:page/:size', controller.wework.queryWeWorkDepartUser);

    // 查询企业微信部门成员信息
    router.get('/api/v3/wework_depart_user/:departid/:fetch', controller.wework.queryWeWorkDepartUser);

    // 查询企业微信部门成员信息(simple)
    router.get('/api/v3/wework_sdepart_user/:departid/:fetch', controller.wework.queryWeWorkSimpleDepartUser);

    // 查询企业微信部门列表信息
    router.get('/api/v3/wework_depart_list/:departid', controller.wework.queryWeWorkDepartlist);

    // 查询企业微信部门列表信息
    router.get('/api/v3/wework_depart/:departid', controller.wework.queryWeWorkDepartInfo);

    // 查询企业微信用户信息 奖惩模块获取消息 (网页授权)
    router.get('/api/v3/wework_user_code/:code', controller.wework.queryWeWorkUserByCodeRewardSystem);

    // 根据用户账号、手机号、身份证后六位，校验用户是否存在
    router.get('/api/v3/user/checkinfo_mobile_certno/:username/:mobile/:certno', controller.user.queryUserInfoByUserMobileCertNO);

    // 查询企业微信用户信息(网页授权)
    router.get('/api/v3/wework_ip_list', controller.wework.queryIpList);

    // 查询企业微信部门成员信息
    router.get('/api/v3/employee', controller.wework.queryWeWorkDepartUserSim);

    /** ******************** 创达Wework ******************** */

    // 查询员工OpenID
    router.get('/api/v1_cd/wework/openid/:userid', controller.weworkcd.queryOpenIDByUserID);

    // 推送企业微信机器消息
    router.get('/api/v1_cd/wework/:title/:description', controller.weworkcd.send);

    // 查询企业微信用户信息
    router.get('/api/v1_cd/wework_user/:userid', controller.weworkcd.queryWeWorkUserInfo);

    // 查询企业微信用户信息
    router.get('/api/v1_cd/wework_mobile/:mobile', controller.weworkcd.queryWeWorkUserInfoByMobile);

    // 查询企业微信部门成员信息
    router.get('/api/v1_cd/wework_user_page/:page/:size', controller.weworkcd.queryWeWorkDepartUser);

    // 查询企业微信部门成员信息
    router.get('/api/v1_cd/wework_depart_user/:departid/:fetch', controller.weworkcd.queryWeWorkDepartUser);

    // 查询企业微信部门成员信息
    router.get('/api/v1_cd/employee', controller.weworkcd.queryWeWorkDepartUserSim);

    // 查询企业微信部门成员信息(simple)
    router.get('/api/v1_cd/wework_sdepart_user/:departid/:fetch', controller.weworkcd.queryWeWorkSimpleDepartUser);

    // 查询企业微信部门列表信息
    router.get('/api/v1_cd/wework_depart_list/:departid', controller.weworkcd.queryWeWorkDepartlist);

    // 查询企业微信部门列表信息
    router.get('/api/v1_cd/wework_depart/:departid', controller.weworkcd.queryWeWorkDepartInfo);

    // 查询企业微信用户信息 行政智能模块获取消息 (网页授权)
    router.get('/api/v1_cd/wework_user_code/:code', controller.weworkcd.queryWeWorkUserByCode);

    // 查询企业微信用户信息(网页授权)
    router.get('/api/v1_cd/wework_ip_list', controller.weworkcd.queryIpList);

    // 查询企业微信用户信息 奖惩模块获取消息 (网页授权)
    router.get('/api/v3_cd/wework_user_code/:code', controller.weworkcd.queryWeWorkUserByCodeRewardSystem);

    /** ******************** 创达Wework ******************** */

    /** ******************** 推送企业微信消息 ******************** */

    router.post('/api/v5/wework_message/:mobile', controller.weworkmessage.message);

    // 推送企业微信应用消息
    router.get('/api/v1/weappms/:mobile/:message', controller.weworkmessage.message);

    // 推送企业微信应用消息
    router.get('/api/v2/weappms/:mobile/:message', controller.weworkmessage.message);

    // 推送企业微信应用消息
    router.get('/api/v3/weappms/:mobile/:message', controller.weworkmessage.message);

    // 推送企业微信应用消息
    router.get('/api/v1_cd/weappms/:mobile/:message', controller.weworkmessage.message);

    /** ******************** 推送企业微信消息 ******************** */

    // 数据库表serialid自动排序
    router.get('/api/v2/mysql/serial/:tablename/:fieldid/:id', controller.mysql.autoSerialID);

    // 数据库表serialid自动排序
    router.get('/api/v2/mysql/serial_update/:tablename/:fieldid/:id', controller.mysql.updateSerialID);

    // 将超过N天未领取办公用品的申请状态修改为已完成
    router.get('/api/v2/mysql/goods_complete', controller.mysql.goodsComplete);

    // 数据库表serialid自动排序(增量)
    router.get('/api/v2/mysql/patchserial/:tablename/:fieldid/:id', controller.mysql.patchSerialID);

    // 数据库表serialid自动排序
    router.get('/api/v2/mysql/serial/update_seal_info', controller.mysql.updateSealInfo);

    // 数据库表Row权限更新
    router.get('/api/v3/mysql/:tablename/:username/:ids/:groupfieldname/:fieldname', controller.mysql.updateRowLimits);

    // 数据库表Row权限更新
    router.get('/api/v3/mysql/backup', controller.mysql.backupDatabase);

    // 数据库表迁移数据
    router.get('/api/v3/mysql/mtdata', controller.mysql.moveTableData);

    // 数据库表更新zonename
    router.get('/api/v2/mysql/updata_zonename', controller.mysql.updateSealZoneName);

    // 查询用印管理用户管理组信息
    router.get('/api/v2/bussiness/grouplimits/:username', controller.bussiness.queryGroupLimits);

    // 查询用印管理用户管理组信息
    router.get('/api/v2/bussiness/grouplimitsbyid/:username', controller.bussiness.queryGroupLimitsByID);

    // 查询企业微信部门成员信息
    router.get('/api/v5/excel/:title', controller.excel.parse);

    // 上传文档附件
    router.post('/api/v1/upload', controller.upload.upload);

    // 同步人事数据
    router.get('/api/v1/datasync', controller.datasync.syncHRM);

    // elasticsearch 新增
    router.get('/api/es/elasticsearch/index', controller.elasticsearch.index);

    // elasticsearch 新增
    router.post('/api/es/elasticsearch/index', controller.elasticsearch.index);

    // elasticsearch 查询
    router.get('/api/es/elasticsearch/search', controller.elasticsearch.search);

    // elasticsearch 查询
    router.post('/api/es/elasticsearch/search', controller.elasticsearch.search);

    // elasticsearch 删除
    router.delete('/api/es/elasticsearch/delete', controller.elasticsearch.delete);

    // 同步签到数据
    router.get('/api/v1/datasync_schedule_sign', controller.datasync.syncHRMScheduleSign);

    // 同步签到数据（按日期）
    router.get('/api/v1/datasync_schedule_sign_date', controller.datasync.syncHRMScheduleSignDate);

};