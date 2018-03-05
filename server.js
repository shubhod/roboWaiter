var express = require('express');
var http = require('http')
var socketio = require('socket.io');
var app = express();
var server = http.Server(app);
var websocket = socketio(server);
var port = process.env.PORT || 8080;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.sendFile(__dirname+"/index.html");
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

