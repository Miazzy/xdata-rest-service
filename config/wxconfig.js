/* eslint-disable spaced-comment */
/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const config = {
    enterprise: {
        id: 'wx3b01d8bf4c588933',
        agentid: 1000077,
        secret: {
            contact: {
                code: 'mGEK17_5izesuLkQCgcyNadqBLK3aeU71Kp39-hWTdM',
            },
            workflowTodoItem: {
                agentid: 1000077,
                code: 'tEyLB2-JfFLDu5enDRlMDWss4DvfAeKuzztZTWYvluc',
            },
        },
        agent: {
            1000077: 'tEyLB2-JfFLDu5enDRlMDWss4DvfAeKuzztZTWYvluc',
            1000079: 'LIFpDJwSpcQfqRJ5RXe8HANfj4Tx-9b7gdII6qCGVGg',
        },
        reward: {
            agentid: 1000079,
            secret: 'LIFpDJwSpcQfqRJ5RXe8HANfj4Tx-9b7gdII6qCGVGg',
        },
        message: {
            gettoken: 'https://qyapi.weixin.qq.com/cgi-bin/gettoken',
            api: 'https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=',
        },
        ip: {
            queryIpListAPI: 'https://qyapi.weixin.qq.com/cgi-bin/get_api_domain_ip?access_token=ACCESS_TOKEN ',
        },
        user: {
            queryAPI: 'https://qyapi.weixin.qq.com/cgi-bin/user/get?access_token=ACCESS_TOKEN&userid=USERID',
            queryCodeAPI: 'https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=ACCESS_TOKEN&code=CODE',
            queryDepartUserAPI: 'https://qyapi.weixin.qq.com/cgi-bin/user/list?access_token=ACCESS_TOKEN&department_id=DEPARTMENT_ID&fetch_child=FETCH_CHILD',
            querySimpleDepartUserAPI: 'https://qyapi.weixin.qq.com/cgi-bin/user/simplelist?access_token=ACCESS_TOKEN&department_id=DEPARTMENT_ID&fetch_child=FETCH_CHILD',
        },
        openid: {
            queryOpenIDByUserIdAPI: 'https://qyapi.weixin.qq.com/cgi-bin/user/convert_to_openid?access_token=ACCESS_TOKEN',
        },
        department: {
            queryALL: 'https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token=ACCESS_TOKEN',
            queryAPI: 'https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token=ACCESS_TOKEN&id=ID',
        },
        access_token: null,
    },
    enterpriseCD: {
        id: 'ww3806b33a15a7d3fc',
        agentid: 1000013,
        secret: {
            contact: {
                code: 'XAXnndDttZ5Lm859TSAarV9U86Heyr-M0wfXCyOSsgc',
            },
            workflowTodoItem: {
                agentid: 1000013,
                code: 'L1zd6Cn5leUOfmWWSiq0rn6lnWtddzdbo3XgV-6SxEA',
            },
        },
        agent: {
            1000013: 'L1zd6Cn5leUOfmWWSiq0rn6lnWtddzdbo3XgV-6SxEA',
            1000015: 'jVlphxrx3rPnnsT9y3gl8iTU3kIkoNbiNraJ_Culv9I',
        },
        reward: {
            agentid: 1000015,
            secret: 'jVlphxrx3rPnnsT9y3gl8iTU3kIkoNbiNraJ_Culv9I',
        },
        message: {
            gettoken: 'https://qyapi.weixin.qq.com/cgi-bin/gettoken',
            api: 'https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=',
        },
        ip: {
            queryIpListAPI: 'https://qyapi.weixin.qq.com/cgi-bin/get_api_domain_ip?access_token=ACCESS_TOKEN ',
        },
        user: {
            queryAPI: 'https://qyapi.weixin.qq.com/cgi-bin/user/get?access_token=ACCESS_TOKEN&userid=USERID',
            queryCodeAPI: 'https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=ACCESS_TOKEN&code=CODE',
            queryDepartUserAPI: 'https://qyapi.weixin.qq.com/cgi-bin/user/list?access_token=ACCESS_TOKEN&department_id=DEPARTMENT_ID&fetch_child=FETCH_CHILD',
            querySimpleDepartUserAPI: 'https://qyapi.weixin.qq.com/cgi-bin/user/simplelist?access_token=ACCESS_TOKEN&department_id=DEPARTMENT_ID&fetch_child=FETCH_CHILD',
        },
        openid: {
            queryOpenIDByUserIdAPI: 'https://qyapi.weixin.qq.com/cgi-bin/user/convert_to_openid?access_token=ACCESS_TOKEN',
        },
        department: {
            queryALL: 'https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token=ACCESS_TOKEN',
            queryAPI: 'https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token=ACCESS_TOKEN&id=ID',
        },
        access_token: null,
    },
    wework: {
        message: {
            gettoken: 'https://qyapi.weixin.qq.com/cgi-bin/gettoken',
            api: 'https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=',
        },
        ip: {
            queryIpListAPI: 'https://qyapi.weixin.qq.com/cgi-bin/get_api_domain_ip?access_token=ACCESS_TOKEN ',
        },
        user: {
            queryAPI: 'https://qyapi.weixin.qq.com/cgi-bin/user/get?access_token=ACCESS_TOKEN&userid=USERID',
            queryCodeAPI: 'https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=ACCESS_TOKEN&code=CODE',
            queryDepartUserAPI: 'https://qyapi.weixin.qq.com/cgi-bin/user/list?access_token=ACCESS_TOKEN&department_id=DEPARTMENT_ID&fetch_child=FETCH_CHILD',
            querySimpleDepartUserAPI: 'https://qyapi.weixin.qq.com/cgi-bin/user/simplelist?access_token=ACCESS_TOKEN&department_id=DEPARTMENT_ID&fetch_child=FETCH_CHILD',
        },
        openid: {
            queryOpenIDByUserIdAPI: 'https://qyapi.weixin.qq.com/cgi-bin/user/convert_to_openid?access_token=ACCESS_TOKEN',
        },
        department: {
            queryALL: 'https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token=ACCESS_TOKEN',
            queryAPI: 'https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token=ACCESS_TOKEN&id=ID',
        },
        access_token: null,
    },
    seal: {
        group: {
            management: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=2da6821a-36d3-495b-8092-7220066a0cd8',
            reception: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=181fbd10-47c5-4c61-ba2d-3c4762d5a64f',
            archive: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=07b69342-4b35-4b2e-ad69-249e23c57c21',
        },
        users: {
            //印章管理人员列表
            management: [{
                id: 'yanggc',
                name: '杨高春',
                phone: '13880556967',
            }],
            //前台接待人员列表
            reception: [{
                id: 'zhouxueli',
                name: '周雪丽',
                phone: '18084917627',
            }],
            //归档人员列表
            archive: [{
                id: 'chenyl0929',
                name: '陈雅兰',
                phone: '18628105773',
            }],
        },
    },
};

module.exports = {
    ...config,
};