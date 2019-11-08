const TULING = require('tuling');

const aiTuling = new TULING({
    key: '3580e919bf9e4754b493562ca882a1b9',
});
// 立即执行函数
(async () => {
    //机器人
    // console.log('arrow function')
    const result = await aiTuling.send({
        userid:1,
        info:'你有女朋友吗？',
        loc:'南昌市'
    });
    console.log(result);
})()
// console.log(func);
// func();