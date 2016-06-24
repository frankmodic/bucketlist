var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	show: function(req, res) {
		User.find({}, function(err, results) {
			if (err){
				console.log('you fucking suck')
			}
			else{
				res.json(results);
			}

		})
	},
	create: function(req, res) {
		User.findOne({name: req.body.name}, function(err, user){
			if(user){
					var error_msg = {error: 'This user already exists'};
					console.log(error_msg)
					res.json(error_msg)
			}
			else{
					var user = new User({name: req.body.name});
					user.save(function(err, results){
							if(err) {
									console.log('User was not added');
							} else {
									console.log(results);
									res.json(results)
							}
					})
			}
		})
	},

	showOne: function(req, res){
		console.log(req.params)
		User.findOne({name: req.params.username}).populate('_lists').exec(function(err, results){
			if(err){
				console.log('Did not grab one, dumbass. TRY AGAIN!')
			} else {
				res.json(results);
			}
		})
	},

}



