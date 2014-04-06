var http = require("http");
var url = require("url");
var querystring = require("querystring");

function parseISO(params, response){
	// console.log("inside parseISO");
	var isoTime = params.iso;
	var isoDate = new Date(isoTime);
	var obj = { hour : isoDate.getHours(), minute: isoDate.getMinutes(), second : isoDate.getSeconds()};
	var value = JSON.stringify(obj);
	// console.log("returning : " + value);
	return value;
}

function parseUnix(params, response){
	// console.log("inside parseUnix");
	var isoTime = params.iso;
	var isoDate = new Date(isoTime);
	var obj = { unixtime: isoDate.getTime() };
	var value = JSON.stringify(obj);
	// console.log("returning : " + value);
	return value;
}

var handler = {};
handler["/api/parsetime"] = parseISO;
handler["/api/unixtime"] = parseUnix;

function processRequest(path, params, response){
	// console.log("processRequest path : " + path.toString());
	// console.log("handler : " + handler);
	
	if( typeof handler[path.toString()] === 'function'){
		// console.log("calling " + handler[path]);
		return handler[path](params,response);
	}else {
		// console.log("no path found.");
		return "Illegal query path";
	}
}

var port = Number(process.argv[2]);

// var port = 8888; //Number(process.argv[2]);

var server = http.createServer(function( request , response ){

	var thisUrl = url.parse(request.url);
	var path = thisUrl.pathname;
	var params = querystring.parse(thisUrl.query);
	var jsonData = processRequest(path,params,response);
	// console.log("sending : jsonData : " + jsonData);
	response.writeHead(200, {"Content-type": "application/json"});
	response.write(jsonData);
	response.end();
});

server.listen(port);