import * as express from 'express'
import messageBiz from '../Biz/MessageBiz'

const router = express.Router();

//GET
router.get('/', async(req,res)=>{
    try
    {
        var biz = new messageBiz();
        var messages = await biz.getAllMessages();
        res.json(messages);
    }
    catch(err)
    {
        res.send('Error ' + err );
    }
})

//GET with PARAMS
router.get('/:id', async(req,res)=>{
    try
    {
        var biz = new messageBiz();
        var message = await biz.getMessage(req.params.id);
        res.json(message);
    }
    catch(err)
    {
        res.send('Error ' + err );
    }
})

//POST
router.post('/', async(req,res)=>{   
    try
    {
        var biz = new messageBiz();
        var response = await biz.insertMessage(req.body.message);        
        res.send(response);
    }
    catch(err)
    {
        res.send('Error ' + err);
    }
})


export default router;


