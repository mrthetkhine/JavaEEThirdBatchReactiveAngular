const fs = require('fs');

console.log("Before reading file");
fs.readFile("./async_pro.js",'utf-8',(err,data)=>{
    if(err)
    {   
        console.log("error ",err);
        return;        
    }
    console.log("Data >>",data ,"<<end");
});
console.log("After reading file");