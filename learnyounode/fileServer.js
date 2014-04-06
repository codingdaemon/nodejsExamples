var http = require('http');
var fs = require("fs");

var port = Number(process.argv[2]);
var filePath = process.argv[3];

// var port = 8888;
// var filePath = "D:\\work\\rough\\test.txt";

var server = http.createServer( function (request, response ){
	try{
		var fileStream = fs.createReadStream(filePath);
		fileStream.on('error', function(error){
			console.log("error occured in fileStream : " + error );
		});
		response.writeHead(200, { 'content-type': 'text/plain' })
		// console.log("before piping..");
		fileStream.pipe(response);
	}catch( e ){
		console.log("error : " + e);
	}
});

server.listen(port);