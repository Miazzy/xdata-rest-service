/* eslint-disable spaced-comment */
/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const config = {
    enterprise: {
        id: 'ww24803738027151f0',
        secret: {
            contact: {
                code: 'mGEK17_5izesuLkQCgcyNadqBLK3aeU71Kp39-hWTdM',
            },
            workflowTodoItem: {
                agentid: 1000002,
                code: 'I7vkZ5jmadrP8ILEIVq7RxTkSoh8uDlyph0ZWJoWoR4',
            },
            workflowDoingItem: {
                agentid: 1000005,
                code: 'LuDc7d8Sh_mYCSkvVlBS3xKyMaBZGSHNReobDX0Ng8w',
            },
        },
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
                id: 'chenll',
                name: '陈乐丽',
                phone: '18180826191',
            }, {
                id: 'yanggc',
                name: '杨高春',
                phone: '13880556967',
            }, {
                id: 'zhouxianlei',
                name: '周贤磊',
                phone: '15184419692',
            }],
            //前台接待人员列表
            reception: [{
                id: 'zhouxianlei',
                name: '周贤磊',
                phone: '15184419692',
            }, {
                id: 'longjing',
                name: '龙菁',
                phone: '13730665046',
            }, {
                id: 'zhouxueli',
                name: '周雪丽',
                phone: '18084917627',
            }],
            //归档人员列表
            archive: [{
                id: 'zhouxianlei',
                name: '周贤磊',
                phone: '15184419692',
            }, {
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