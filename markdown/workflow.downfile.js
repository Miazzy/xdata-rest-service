//检查本网站端口
const port = window.location.port ? window.location.port : window.location.protocol == 'https:' ? 443 : 80;
//API调用接口
var apiURL = window.location.protocol + `//` + window.location.host.split(':')[0] + `:` + port + `/jeecg-boot/api/v1`;
//下载调用通用接口
var downApiURL = window.location.protocol + `//` + window.location.host.split(':')[0] + `:` + port + `/jeecg-boot/sys/common/officefile/`;
//允许拦截视图标题 //允许拦截标题 const titleArray = ['通用审批单', '内部留言', '会议室申请单', '共享服务', '集团总裁工作部署通知'];
const viewArray = ['【融量】通用审批', 'RC01.通用审批', 'RC02.内部留言', 'RC03.会议室申请', 'RC04.共享服务', 'RC05.集团总裁工作部署通知', 'RC06.行政处罚单批量发送', 'RC07.会议通知/纪要', 'RC08.工作联系函', 'RC09.工作说明/汇报(单职能)'];
//是否开启检查标题 false: 开启 ， true: 所有标题都放行
const checkTitleFlag = false;
//流程标题
const viewTitle = $('#view_page #view_title').html().trim();
//检查企业微信UA
const userAgent = navigator.userAgent;

//如果是IP,则换成域名
if (isValidIP(window.location.host.split(':')[0])) {
    apiURL = "http://wework.yunwisdom.club:8083/jeecg-boot/api/v1";
    downApiURL = "http://wework.yunwisdom.club:8083/jeecg-boot/sys/common/officefile/";
}

/**
 * @function 定时任务数组执行器
 */
function setTimeouts(callback, ...timestamps) {
    timestamps.map((timestamp) => {
        setTimeout(function() {
            callback();
        }, timestamp);
    })
}

/**
 * @function 验证IP函数
 */
function isValidIP(ip) {
    var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    return reg.test(ip);
}

/**
 * @function 添加下载按钮函数
 */
function downloadButton() {

    var bodyLength = $('#bodyiframe').contents().find('table[_target="mainFileUploadField"]').length;
    var downloadLength = $('#rightBox').find('#null_box').find('input[title="下载"]').length;
    var fileinfo = $('td[name="appendixDatasField"]').find('div span').attr('onClick');
    var wedownloadLength = $('#wework-download-button').length;
    var viewTitle = $('#view_page #view_title').html().trim(); //var titleName = $($('.excelMainTable tbody tr')[1]).find('td div span').html().trim();

    if (viewArray.includes(viewTitle) || checkTitleFlag) {

        if (bodyLength > 0 && downloadLength <= 0) {
            let title = $('#bodyiframe').contents().find('table[_target="mainFileUploadField"]').find('div span a[onmouseover="changefileaon(this)"]').attr('title')
            let fileID = $('#bodyiframe').contents().find('table[_target="mainFileUploadField"]').find('div span a[onmouseover="changefileaon(this)"]').attr('onClick').split(';')[1].split(',')[2].replace(/\"|\'/g, "")
            $('#rightBox').find('#null_box').find('input[title="打印"]').after('<input type="button" class="e8_btn_top" value="下载" title="下载" onclick="downloadFile(\'' + title + '\',' + fileID + ')" style="max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">')
        }

        if (fileinfo != null && typeof fileinfo != 'undefined' && wedownloadLength <= 0) {

            let args = $('td[name="appendixDatasField"]').find('div span').attr('onClick').replace(/toDownload|\'/g, '').slice(1, -2).split(',');
            let title = args[1];
            let fileID = args[0];

            $($('.excelMainTable tbody tr')[1]).find('td div').css('position', 'relative').css('font-size', '14px!important');
            $($('.excelMainTable tbody tr')[1]).find('td div').append('<input id="wework-download-button" type="button" class="e8_btn_top" style="display:none;float:right;max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;font-size:12px!important;transform: scale(0.8); position: absolute;right: -10px!important; background: #007AFF;color: #fefefe!important;border: 0px solid #fefefe;border-radius: 5px; top: 15px;" value="下载" title="下载" onclick="downloadFile(\'' + title + '\',' + fileID + ')" />');

            setTimeout(function() {
                downloadFile('', '');
            }, 0);
        }
    }

}

/**
 * @function 下载文件函数
 * @param {*} title 
 * @param {*} fileID 
 */
function downloadFile(title, fileID) {

    let viewTitle = $('#view_page #view_title').html().trim();

    if (viewArray.includes(viewTitle) || checkTitleFlag) {

        $('td[name="appendixDatasField"]').find('div span').each((item, elem) => {
            let args = $(elem).attr('onClick').replace(/toDownload|\'/g, '').slice(1, -2).split(',');
            let title = args[1];
            let fileID = args[0];
            //downloadSingleFile(title, fileID);
            $(elem).click(function() {
                downloadSingleFile(`` + title + ``, `` + fileID + ``);
            });
        })

        //绑定执行下载函数（原OA下载函数）
        window.toDownload = (fileID, title) => {
            let viewTitle = $('#view_page #view_title').html().trim();

            if (viewArray.includes(viewTitle) || checkTitleFlag) {
                downloadSingleFile(title, fileID);
            }
        }
    }
}


if (viewArray.includes(viewTitle) || checkTitleFlag) {

    /**
     * @function 执行下载函数（原OA下载函数）
     * @param {*} fileID 
     * @param {*} title 
     */
    function toDownload(fileID, title) {
        let viewTitle = $('#view_page #view_title').html().trim();
        if (viewArray.includes(viewTitle) || checkTitleFlag) {
            downloadSingleFile(title, fileID);
        }
    }

}

/**
 * @function 下载单个文件函数
 * @param {*} title 
 * @param {*} fileID 
 */
function downloadSingleFile(title, f 1992 ileID) {

    let viewTitle = $('#view_page #view_title').html().trim();

    if (viewArray.includes(viewTitle) || checkTitleFlag) {

        var url = apiURL + `/imagefile?_order=imagefileid&_where=(imagefileid,eq,` + fileID + `)&_fields=TokenKey,fileSize,filerealpath,imagefilename,imagefileid,imagefiletype`;

        try {
            superagent.get(url).then((res) => {
                fileMap(res.body);
            });
        } catch (error) {
            console.log(error);
        }

        try {
            fetch(url).then(function(response) {
                return response.json();
            }).then(function(arr) {
                return fileMap(arr);
            })
        } catch (error) {
            console.log(error);
        }

        console.log(`title: , fileID:`);
    }

}

/**
 * @function 文件遍历下载函数（如果含有多个文件，则批量下载下来）
 * @param {*} arr 
 */
function fileMap(arr) {

    let key = window.btoa(window.encodeURIComponent(JSON.stringify(arr))).slice(0, 128);
    let value = window.localStorage.getItem(key);
    let timestamp = new Date().getTime();

    if (value != null && typeof value != 'undefined' && timestamp <= value) {
        return;
    }

    if (arr == null || typeof arr == 'undefined') {
        return;
    }

    window.localStorage.setItem(key, new Date().getTime() + 10000);

    arr.map(function(item) {

        let durl = downApiURL + window.btoa(window.encodeURIComponent(item.imagefilename)) + '/' + window.btoa(item.TokenKey.replace('.wfile', '.zip'));
        let name = window.decodeURIComponent(item.imagefilename);
        let suffix = name.slice(name.lastIndexOf('.'));
        let prefix = name.slice(0, name.lastIndexOf('.'));
        let pinyinName = pinyinlite(prefix).flat().join("_");
        //alert(pinyinName);
        try {
            if (userAgent.includes('Macintosh') || userAgent.includes('Mac OS X')) {
                downloadURL(durl, item.imagefilename);
            } else {
                window.saveAs(durl, item.imagefilename);
            }
        } catch (error) {
            console.log(error);
        }

    });
}

/**
 * @function 下载文件（通过A标签）
 */
function downloadURL(href, title) {

    const a = document.createElement('a');
    a.setAttribute('href', href);
    a.setAttribute('download', title);
    a.href = href;
    a.download = title;
    a.click();

}

//执行定时任务
setTimeouts(function() {
    downloadButton();
}, 300, 500, 700, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000, 30000);