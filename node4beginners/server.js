var url = require("url");
var http = require("http");


function start(handle, route) {

	function onRequest(request, response) {
		var postData = "";
		console.log("received a request");
		var pathname = url.parse(request.url).pathname;
		request.setEncoding("utf8");
		request.addListener( "data", function(postDataChunk){
			postData += postDataChunk;
			console.log("postDataChunk : " + postDataChunk );
		});
		request.addListener("end" , function(){
			route(handle,pathname,response, postData);
		});
	}

	var httpServer = http.createServer(onRequest);

	httpServer.listen(8888);
}

exports.start = start;