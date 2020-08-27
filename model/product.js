var connection = require("../config/connect");
module.exports.insert=function(obj,cb){
  connection.init(function(err,client){
    var db = client.db('creativecomp');
db.collection("product_details").insert(obj,cb)
});
}
module.exports.find=function(cb){
	connection.init(function(err, client){
		var db = client.db('creativecomp');
		db.collection('product_details').find().toArray(cb);
	});
}
module.exports.findWhere=function(obj, cb){
	connection.init(function(err, client){
		var db = client.db('creativecomp');
		db.collection('product_details').find(obj).toArray(cb);
	});
}
module.exports.update=function(where,obj,cb){
	connection.init(function(err,client){
		var db=client.db('creativecomp');
  db.collection("product_details").updateOne(where,{$set:obj},cb)
});
}
module.exports.delete=function(obj,cb){
	connection.init(function(err,client){
		var db=client.db('creativecomp');
		db.collection("product_details").deleteOne(obj,cb)
	})
}
