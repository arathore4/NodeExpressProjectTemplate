import  messageModel from '../Model/Message';
import { connect, connection } from 'mongoose'
var CONFIG =  require('../../config.json')

export default class messageBiz {

    constructor()
    {
        //intialize cassandra
        connect(CONFIG.dbUrl, {useUnifiedTopology:true, useNewUrlParser:true})
        //open Cassandra connection
        connection.on('open', ()=>{console.log('Connected...')})
    }

    public async getAllMessages()
    {        
        var messages = await messageModel.find();
        return  messages;
    }

    public async getMessage(id: String)
    {        
        var message = await messageModel.findById(id);
        return  message;
    }

    public async insertMessage(message: String)
    {        
        const messageDB = new messageModel({
            message: message,
            postDate: Date.now().toString()
        })
        var response = await messageDB.save() ;  
        return  response;
    }
}
