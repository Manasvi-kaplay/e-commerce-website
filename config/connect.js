var MongoClients=require("mongodb").MongoClient;
var url="mongodb+srv://manasvi:manasvi96@cluster0-myniq.mongodb.net/creativecomp?retryWrites=true&w=majority"
module.exports.init=function(cb){
    MongoClients.connect(url,{ useNewUrlParser: true },{ useUnifiedTopology: true }, cb);
}   //mongodb+srv://manasvi:<password>@cluster0-myniq.mongodb.net/test?retryWrites=true&w=majority