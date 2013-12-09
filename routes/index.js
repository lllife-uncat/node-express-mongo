
/*
 * GET home page.
 */

 var model = require("../model/collections.js");


exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.layout = function(req, res){
	res.render("layout");
};

exports.about= function(req, res){
	res.render('about');
};

exports.contact = function(req, res){
	res.render('contact');
};

exports.addUser = function(req, res){
	var user = new model.User();
	user.copy(req.body);
	user.insert(function(err){
		if(err) { throw err; }
		else {
			res.send(user);
		}
	});
};