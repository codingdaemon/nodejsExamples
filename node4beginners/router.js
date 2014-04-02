function route(handle, pathname, response) {
	console.log("route: received pathname : " + pathname);
	if( typeof handle[pathname] === 'function'){
		handle[pathname](response);
	}else{
		response.writeHead(404, {"Content-Type":"text/plain"});
		response.writeHead("404 not found");
		response.end();
	}
}

exports.route = route;