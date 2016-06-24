  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
var users = require('./../controllers/users.js');
var lists = require('./../controllers/lists.js');

  
module.exports = function(app) {
// verb: get, plural of target as the URI is the RESTful index method (it returns all users)
	app.get('/users', function(req, res) {
		users.show(req, res);
	})
	app.post('/users', function(req, res) {
		users.create(req, res);
	})

	app.get('/users/:username', function(req, res){
		users.showOne(req, res);
	})
	
	app.get('/lists', function(req, res){
		lists.show(req, res);
	})

	app.post('/lists', function(req, res) {
		lists.create(req, res);
	})
}