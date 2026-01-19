const fs = require('fs');
const requestLogger = ((req,res,next)=>{
    let message=req.method+" is made on url "+req.url+" at "+new Date();;
    fs.appendFileSync("./logs.txt",message+"\n");
    fs.appendFileSync("./log.txt","\n");
    // console.log(message);
    next();
})

module.exports=requestLogger;
