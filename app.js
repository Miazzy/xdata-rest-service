module.exports = app => {
    // 开始前执行
    app.beforeStart(async() => {
        console.log('start');
    });
    // 准备好执行
    app.ready(async() => {
        console.log('ready');
    });
    // 关闭前执行
    app.beforeClose(async() => {
        console.log('close');
    });
};