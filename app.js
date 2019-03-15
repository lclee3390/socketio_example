var app = require('express')()
var server = require('http').createServer(app)
var io = require('socket.io')(server)
const port = 3000;

io.on('connection', (socket) => { 
    console.log('a user connected.')
    socket.on('chat',(d)=>{
        io.emit('chat',d)
    })
    socket.on('notification',(d)=>{
    })
    // socket.broadcast.emit('')
});
 
app.get('/',function(req,res){
    res.sendFile(__dirname+"/client.html")
})

server.listen(port, function(){
    console.log(`server listening on http://localhost:${port}`);
})
