var connection = require("../config/connect");
module.exports.insert=function(obj,cb){
  connection.init(function(err,client){
    var db = client.db('creativecomp');
db.collection("contact_us").insert(obj,cb)
});
}
module.exports.find=function(cb){
	connection.init(function(err, client){
		var db = client.db('creativecomp');
		db.collection('contact_us').find().toArray(cb);
	});
}
module.exports.findWhere=function(obj, cb){
	connection.init(function(err, client){
		var db = client.db('creativecomp');
		db.collection('contact_us').find(obj).toArray(cb);
	});
}
module.exports.update=function(where,obj,cb){
	connection.init(function(err,client){
		var db=client.db('creativecomp');
  db.collection("contact_us").updateOne(where,{$set:obj},cb)
});
}
module.exports.delete=function(obj,cb){
	connection.init(function(err,client){
		var db=client.db('creativecomp');
		db.collection("contact_us").deleteOne(obj,cb)
	})
}
