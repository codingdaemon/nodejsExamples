var http = require("http");
var bl = require("bl");


var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

http.get(url1, function(response1){
	response1.pipe(bl(function(error1, data1){
		if( error1 ) throw error1;

		http.get(url2, function(response2){
			response2.pipe(bl(function(error2,data2){
				if( error2 ) throw error2;

				http.get(url3, function(response3){
					response3.pipe(bl(function(error3, data3){
						if( error3 ) throw error3;

						console.log(data1.toString());
						console.log(data2.toString());
						console.log(data3.toString());

					}));
				})
			}));
		});
	}));
});