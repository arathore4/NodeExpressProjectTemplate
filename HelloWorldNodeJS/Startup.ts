import * as express from 'express'
import messageController from './Src/Controller/Message'

export default class Startup {
    app: any
    
    constructor(){
        this.app = express()
    }

    //Registers all middleware
    public setup(){
        this.app.use(express.json())

        //register controller routes
        this.app.use('/message', messageController)
    }

    //run the app on port
    public run(port){
        //starting app on server
        this.app.listen(port, ()=>{
        console.log('Server Started...')
        })
    }

}