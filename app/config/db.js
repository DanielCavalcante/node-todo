const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://<user>:<user@123>@ds259586.mlab.com:59586/node-todo');