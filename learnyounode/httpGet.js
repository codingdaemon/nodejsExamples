var http = require("http");

var url = process.argv[2];

http.get(url, function(responseStream){
	var completeData = "";
	responseStream.setEncoding("utf8");

	responseStream.on("data", function(dataChunk){
		//completeData += dataChunk;
		console.log(dataChunk );
	});
	
	responseStream.on("end", function(){
		//console.log(completeData );
	});
	
	responseStream.on("error", function(error){
		console.log("error : " + error.message);
	});
});

