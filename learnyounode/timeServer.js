var net = require("net");
var strftime = require("strftime");

var port = process.argv[2];

var server = net.createServer(function(socket){
	//  "YYYY-MM-DD hh:mm"
	var strDate = strftime( "%Y-%m-%d %I:%M", new Date() );
	socket.write(strDate);
	socket.end();
});

server.listen(Number(port));