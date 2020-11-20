# xdata-rest-service

### Development

```bash
$ npm i       // 安装依赖
$ npm run dev // 启动项目(调试)
```

### Deploy

```bash
$ npm start  // 启动项目
$ npm stop   // 停止项目
```

### MySQL backup user info

- 备份脚本
```# 执行备份脚本
/root/mysqldump/backupmysql.sh;

# 执行备份数据版本控制
cd /root/backups/mysql;
git add . ; git commit -m 'init';

# 提交备份数据至git仓库
git push --force;
```

- 备份参数
```
DBNAMES[0]="jeecg-boot" # databases you want to backup, separated by a space; leave empty to backup all databases on this host
DBUSER[0]="mysqldumpuser"  # MySQL username
DBPASS[0]="mysqldumpuser"  # MySQL password
DBHOST[0]="172.18.254.95"  # your MySQL server's location (IP address is best)
DBPORT[0]="3309"  # MySQL port
DBTABLES[0]="" # tables you want to backup or exclude, separated by a space; leave empty to back up all tables
DBTABLESMATCH[0]="include" # include will backup ONLY the tables in DBTABLES, exclude will backup all tables BUT those in DBTABLES
DBOPTIONS[0]="--quick --single-transaction"
```
