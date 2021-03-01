import Startup from './Startup'
var CONFIG =  require('./config.json')

const serverObj = new Startup();
serverObj.setup();
serverObj.run(CONFIG.port);