var url = require("url");
var http = require("http");


function start(handle, route) {

	function onRequest(request, response) {
		
		console.log("received a request");
		var pathname = url.parse(request.url).pathname;
		route(handle,pathname,response, request);
	
	}

	var httpServer = http.createServer(onRequest);

	httpServer.listen(8888);
}

exports.start = start;