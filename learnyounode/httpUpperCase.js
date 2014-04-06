var http = require("http");
var map = require("through2-map");


var port = Number(process.argv[2]);
var convertToUpperCase = map(function( chunk ){
	return chunk.toString().toUpperCase();
});

var server = http.createServer( function (request, response){
	if( request.method != "POST"){
		return res.end('send me a POST\n');
	}

	request.pipe(convertToUpperCase).pipe(response);
});

server.listen(port); 

// var http = require('http')
// var map = require('through2-map')
 
// var port = process.argv[2]
 
// http.createServer(function (request, response) {
//     request
//         .pipe(map(function (chunk) {
//             return chunk.toString().toUpperCase()
//         }))
//         .pipe(response)
// }).listen(port)