// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create the schema
// MAKE THIS A NOUN
var UserSchema = new mongoose.Schema({
  name: { type: String, required: true},
  _lists: [{type: Schema.Types.ObjectId, ref: 'List'}]
}, {timestamps: true})
// register the schema as a model
var User = mongoose.model('User', UserSchema);