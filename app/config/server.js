const port = 3000;
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const allowCors = require('./cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(allowCors);

app.listen(port, function () {
	console.log(`API listening on port: ${port}`);
});

app.get('/', function (req, res) {
	res.status(200).send({
		message: 'Todo API'
	});
});

module.exports = app;