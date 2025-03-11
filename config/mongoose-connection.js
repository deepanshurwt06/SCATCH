const mongoose = require("mongoose"); 
const dbgr = require("debug")("development:mongoose");
const config = require("config");
 
const dbURL = config.get("MONGODB_URI"); 

mongoose.connect(`${dbURL}/scatch` )
.then(function(){
    dbgr("connected to database");
})
.catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection;