/** *****

curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=56ab5fc0-568b-4593-b3a5-810fcb6cc233' \
   -H 'Content-Type: application/json' \
   -d '
   {
        "msgtype": "text",
        "text": {
            "content": "hello world"
        }
   }'

curl 'https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=fECc0Xkj5_Tht5VEUoWLELfwhnCp0I4Zvo0-wwN245FURHy8QoclF74lE5qSichl-wcvfX3quVi5uNevVb-VA3mlvTdVaE0tcsQbmi1ed27Dv9tG3q-Vas6fdu3xUH1ZZlWKaqr8RVC6E4RIwAw4K10eXgaaFeKFC161Go2DhTVusJR3J8veGXmCzqpmSQVEBlKrOLOZzufuxn-lP-CF9Q' \
 -H 'Content-Type: application/json' \
   -d '{
   "touser" : "zhaoziyu",
   "msgtype" : "text",
   "agentid" : 1000002,
   "text" : {
       "content" : "你的快递已到，请携带工卡前往邮件中心领取。\n出发前可查看<a href=\"http://work.weixin.qq.com\">邮件中心视频实况</a>，聪明避开排队。"
   },
   "safe":0,
   "enable_id_trans": 0,
   "enable_duplicate_check": 0,
   "duplicate_check_interval": 1800
}'

curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=181fbd10-47c5-4c61-ba2d-3c4762d5a64f' \
   -H 'Content-Type: application/json' \
   -d '
   {
        "msgtype": "text",
        "text": {
            "content": "大家好，我是智能印章机器人‘小张’，以后将由我向大家推送用印申请消息😁"
        }
   }'

curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=07b69342-4b35-4b2e-ad69-249e23c57c21' \
   -H 'Content-Type: application/json' \
   -d '
   {
        "msgtype": "text",
        "text": {
            "content": "大家好，我是智能印章机器人‘小张’，以后将由我向大家推送用印申请消息😁"
        }
   }'

 */