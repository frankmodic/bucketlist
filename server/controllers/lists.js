var mongoose = require('mongoose');
var List = mongoose.model('List');
var User = mongoose.model('User');

module.exports = {
	show: function(req, res) {
		List.find({}, function(err, results) {
			if (err){
				console.log('dont ever pop up!')
			}
			else{
					res.json(results);
			}

		})
	},
		create: function(req, res) {
			console.log(req.body.title, req.body.desc, req.body.user);
			User.findOne({name: req.body.user}, function(err, user){
			var list = new List({
				name: req.body.title, 
				desc: req.body.desc, 
				user: req.body.user
			});
			 list._user = user._id;
			 list.save(function(err) {
					 if(err){
							 console.log('Your list item wasnt added PUNK')
					 }
					 else{
							 console.log('success')
					 }
				})
			 user._lists.push(list);
			 user.save(function(err, results){
					 if(err){
							 console.log('didnt work bro!')
					 }
					 else{
							 console.log('tada')
							 res.json(results);
					 }
				})
			})
		},
}

