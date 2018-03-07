// var express = require('express');
// var app = express();
// var http=require('http');
// var io=require('socket.io');
// var apiai=require('apiai');
// set the port of our application
// process.env.PORT lets the port be set by Heroku


// set the view engine to ejs
// app.set('view engine', 'ejs');

// // make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + '/public'));

// // set the home page route
// app.get('/', function(req, res) {

//     // ejs render automatically looks in the views folder
//     res.send('hey');
// });

// app.listen(port, function() {
//     console.log('Our app is running on http://localhost:' + port);
// });
var port = process.env.PORT || 8080;
var express = require('express');
var http = require('http')
var socketio = require('socket.io');
var apiai = require('apiai');
var app = express();
var server = http.Server(app);
var websocket = socketio(server);
server.listen(port, () => console.log('listening on *:3000'));
var app = apiai("6206cd24076c499db50cda82dbd05422");
app.get('/', function(req, res) {
    res.send('hey');
});
 websocket.on('connection', (socket) => {
  console.log('A client just joined on', socket.id);
	socket.on("message",(data)=>{
	console.log(data);
    var request = app.textRequest(data, {
    sessionId: '12345dksahdk'
});
request.on('response', function(response) {
    console.log(response);
	socket.emit('response',response);
});
 
request.on('error', function(error) {
    console.log(error);
});
request.end();	
	});
});

