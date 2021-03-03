import * as express from 'express';

var requestLoggerMiddleWare = function (req: express.Request, resp: express.Response, 
   next: express.NextFunction) {

     console.log(`${req.originalUrl} received`);

     resp.on('finish', ()=>{
        console.log(`${req.originalUrl} ${resp.statusCode} finished`);
     });
     return next();   
};


export { requestLoggerMiddleWare };