var express = require('express');
var app = express();
var http=require('http');
var socketio=require('socket.io');
var apiai=require('apiai');
var port = process.env.PORT || 8080;
var server = http.Server(app);
var websocket = socketio(server);
app.use(express.static(__dirname + '/public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.listen(port, function(){
    console.log('Our app is running on http://localhost:' + port);
});
app.get('/',(req,res)=>{
res.send('hey');
});
 var apps = apiai("6206cd24076c499db50cda82dbd05422");
app.post('/',(req,res)=>{
var request = apps.textRequest(req.body.query,{
    sessionId: '12345dksahdk'
});
request.on('response', function(response) {
    console.log(response);
	res.send(response);
});
	
 
request.on('error', function(error) {
    console.log(error);
});
request.end();
});
 
// request.on('error', function(error) {
//     console.log(error);
// });
// request.end();	
// 	});
// });

// var express = require('express');
// var http = require('http')
// var socketio = require('socket.io');
// var apiai = require('apiai');
// var app = express();
// server.listen(port, () => console.log('listening on *:3000'));
// var app = apiai("6206cd24076c499db50cda82dbd05422");
// app.get('/', function(req, res) {
//     res.send('hey');
// });


