   //fileSystem  内置模块
   const fs = require('fs');
   const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;

//    console.log('hello node');
   const image = fs.readFileSync("car.jpg").toString("base64");
//    console.log(image);
   const client = new AipImageClassifyClient('17711764','YPVL0aFpPag8Q5hyYkMXpztE','OmyhsCWOy0lWoGSHBxBZ2cqIosn2aMKU');
   client
     .carDetect(image)
     .then(function(result){
       console.log(result);
   })        //提交之后怎么样
//    AipimageClassifyClient
//    回调函数
//    文件在哪里?   磁盘里
//    js 在哪里运行?   内存   I/O操作
//    fs.readFile('./text.txt',function(err,data){
//        if(err){
//            return console.error(err);
//        }
//     console.log(data.toString());
//    })