var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.status(200).send({
		message: 'Hello World'
	});
});
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

module.exports = app;