// var express = require('express');
// var app = express();
// var http=require('http');
// var socketio=require('socket.io');
// var apiai=require('apiai');
// var port = process.env.PORT || 3000;
// var server = http.Server(app);
// var websocket = socketio(server);
// app.use(express.static(__dirname + '/public'));
// var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// app.listen(port, function(){
//     console.log('Our app is running on http://localhost:' + port);
// });
//  var apps = apiai("6206cd24076c499db50cda82dbd05422");
// app.get('/',(req,res)=>{
// 	res.send('hey');
// });
// app.post('/',(req,res)=>{
// var request = apps.textRequest(req.body.query,{
//     sessionId: '12345dksahdk'
// });
// request.on('response', function(response) {
//     console.log(response);
// 	res.send(response);
// });
	
 
// request.on('error', function(error) {
//     console.log(error);
// });
	
// request.end();
// });


var myArgs = process.argv.slice(2);
var socketio=require('socket.io');
var http=require('http');
var express= require('express');
var app= express();
var port = process.env.PORT || 3000;
var server=app.listen(port,()=>{ 
console.log("server is up",port); 
});
var io=socketio(server);
io.on('connection',(socket)=>{
	console.log("connected");
	socket.emit('log',"dfsdfsdfsdf");
});
