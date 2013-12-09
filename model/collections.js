var client = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;
var url = "mongodb://localhost:27017/HelloExpressJade";

// User definitions.
var User = function() {
	this.name = "";
	this.lastname = "";
	this.email = "";
	this.password = "";
	this._id = new ObjectID()
}

User.prototype.connect = function(callback){
	client.connect(url, callback);
};

User.prototype.insert = function(callback) {
	var _this = this;
	this.connect( function(err, db) {

		var coll = db.collection("Users");
		//console.log(coll);

		var rs = coll.insert(_this, callback);
	});
};

User.prototype.copy = function(obj){
	var copy = this;
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
};

exports.User = User;
