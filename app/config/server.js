const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.listen(port, function () {
	console.log(`API listening on port: ${port}`);
});

app.get('/', function (req, res) {
	res.status(200).send({
		message: 'Hello World'
	});
});

module.exports = app;