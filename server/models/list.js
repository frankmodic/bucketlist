// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListSchema = new mongoose.Schema({
	_user: [{type: Schema.Types.ObjectId, ref: 'User'}],
	name: { type: String, min: 5, max: 25, required: true},
	desc: { type: String, min: 10, max: 50, required: true},
 	user: { type: String, required: true},
}, {timestamps: true})
// register the schema as a model
var List = mongoose.model('List', ListSchema);