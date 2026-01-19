const timeLogger = ((req,res,next)=>{
    let pre=new Date().getTime();
    next();
    let post=new Date().getTime();
    console.log(`time taken : ${post-pre} ms`);
})

module.exports=timeLogger;