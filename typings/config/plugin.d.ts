// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import 'egg-onerror';
import 'egg-session';
import 'egg-i18n';
import 'egg-watcher';
import 'egg-multipart';
import 'egg-security';
import 'egg-development';
import 'egg-logrotator';
import 'egg-schedule';
import 'egg-static';
import 'egg-jsonp';
import 'egg-view';
import 'egg-cors';
import 'egg-mailer';
import 'egg-cache';
import 'egg-mysql';
import 'egg-mssql';
import 'egg-gateway-proxy';
import 'egg-redis';
import 'egg-nacos';
import 'egg-rate-limiters';
import 'egg-es';
import 'egg-etcd';
import { EggPluginItem } from 'egg';
declare module 'egg' {
  interface EggPlugin {
    onerror?: EggPluginItem;
    session?: EggPluginItem;
    i18n?: EggPluginItem;
    watcher?: EggPluginItem;
    multipart?: EggPluginItem;
    security?: EggPluginItem;
    development?: EggPluginItem;
    logrotator?: EggPluginItem;
    schedule?: EggPluginItem;
    static?: EggPluginItem;
    jsonp?: EggPluginItem;
    view?: EggPluginItem;
    cors?: EggPluginItem;
    mailer?: EggPluginItem;
    oss?: EggPluginItem;
    cache?: EggPluginItem;
    mysql?: EggPluginItem;
    oracle?: EggPluginItem;
    mssql?: EggPluginItem;
    httpProxy?: EggPluginItem;
    redis?: EggPluginItem;
    nacos?: EggPluginItem;
    ratelimiter?: EggPluginItem;
    elasticsearch?: EggPluginItem;
    elasticsearch2?: EggPluginItem;
    eggEtcd?: EggPluginItem;
  }
}