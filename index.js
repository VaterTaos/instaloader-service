var express = require('express');
var child_process = require('child_process');
var fs = require('fs-extra');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
	var args = req.query.args;
	console.log(path.resolve());
	var command = `python ${path.join(path.resolve(), 'app/instaloader.py')} +data/args/${args}.txt`;
	var cp = child_process.exec(command)
	
	cp.stdout.on('data', function (data) {
	  console.log('stdout: ' + data.toString());
	});

	cp.stderr.on('data', function (data) {
	  console.log('stderr: ' + data.toString());
	});

	cp.on('exit', function (code) {
	  console.log('child process exited with code ' + code.toString());
	});
	
	res.send(command);
});

app.get('/showall', async function (req, res) {
	var files = await fs.readdir(path.join(path.resolve(), 'data/args'));
	res.send(files);
});

app.listen(8080, function () {
	console.log('services started!');
});