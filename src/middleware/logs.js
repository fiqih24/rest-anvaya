const logRequest= (req,res,next)=>{
    console.log('Telah terjadi request ke URL ',req.path);
    next();
}

module.export = {
    logRequest
}