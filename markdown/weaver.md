
1. 数据库登录账户
    192.168.2.52:1433/@username:sa/@password:123/@database:newecology

2. 获取文档ID
    $('table[_target="mainFileUploadField"]').find('div span a[onmouseover="changefileaon(this)"]').attr('onClick').split(';')[1].split(',')[2].replace(/\"|\'/g, "")

3. 获取文档名称
    $('table[_target="mainFileUploadField"]').find('div span a[onmouseover="changefileaon(this)"]').attr('title')

4. 泛微联系
   李冉冉/@phone:1391065217

5. 测试环境
    http://172.18.1.202:90/@username:sysadmin/@password:1

6. 堡垒服务
    https://172.18.254.236/@username:zhaozy/@password:Miazzy@163.com

7. wifi账户
    leading-office/leading123

8. 查询文档
    /api/v1/imagefile?_order=imagefileid&_where=(imagefileid,eq,1085461)~and(imagefilename,like,%27one.pdf%27)&_fields=TokenKey,fileSize,filerealpath,imagefilename,imagefileid,imagefiletype

9. switchhost
    https://github.com/oldj/SwitchHosts/releases

10. 执行cmd下载文档服务
    mkdir -p /Users/yunwisdom/Workspace/jeecg-boot-v2.1.3/202008/S/;
    mkdir -p /Users/yunwisdom/Workspace/jeecg-boot-v2.1.3/unzip/202008/S/;
    curl -XGET http://172.18.1.202:8000/202008/S/c3581392-515d-4ac0-a87a-2e34b15e52e9.zip --output /Users/yunwisdom/Workspace/jeecg-boot-v2.1.3/202008/S/c3581392-515d-4ac0-a87a-2e34b15e52e9.zip ;
    unzip /Users/yunwisdom/Workspace/jeecg-boot-v2.1.3/202008/S/c3581392-515d-4ac0-a87a-2e34b15e52e9.zip -d /Users/yunwisdom/Workspace/jeecg-boot-v2.1.3/202008/S/;
    mv /Users/yunwisdom/Workspace/jeecg-boot-v2.1.3/202008/S/c3581392-515d-4ac0-a87a-2e34b15e52e9 /Users/yunwisdom/Workspace/jeecg-boot-v2.1.3/202008/S/one.pptx;
    cp /Users/yunwisdom/Workspace/jeecg-boot-v2.1.3/202008/S/one.pptx /Users/yunwisdom/Workspace/jeecg-boot-v2.1.3/unzip/202008/S/one.pptx;
