var express= require('express');
var app=express();
app.get('/order',(req,res)=>{
	res.sendFile(__dirname+'/speech.html');
});
app.listen(process.env.PORT || 2000,()=>{
	console.log("roboServer Working properly");
});
