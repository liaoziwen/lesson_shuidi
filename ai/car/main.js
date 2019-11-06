const fs = require('fs');
const image = fs.readFileSync('./cp.jpg').toString("base64");

const AipOcrClient = require("baidu-aip-sdk").ocr;
const client = new AipOcrClient('17712437','hDBCZjZSQjK5xhP81MdCDByk','RhxkF92kIrLm5KdIDG7i6e7da2a3blLn')
const options = {};
options["multi_detect"] = "true";
client.licensePlate(image,options)
.then(function(result){
    console.log(result);
})