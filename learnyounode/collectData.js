var bl = require("bl");
var http = require("http");

var url = process.argv[2];
http.get(url, function( response ){
	response.pipe( bl( function (error, data){
		if( error ) throw error;
		var dataStr = data.toString();
		console.log(dataStr.length);
		console.log(dataStr);
	}));
	// response.on("data", function ( data ){

	// });

	// response.on("end", function(){

	// });

	// response.on("error", function(error){

	// });
});