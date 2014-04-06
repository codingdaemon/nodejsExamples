var http = require("http");
var bl = require("bl");


var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

// var url1 = "http://www.google.co.in"
// var url2 = "http://in.yahoo.com";
// var url3 = "http://www.video-one.com";

var data_1 = null;
var data_2 = null; 
var data_3 = null;

http.get(url1, function(response1){
	response1.pipe(bl(function(error1, data1){
		if( error1 ) throw error1;

		// console.log("received : 1");
		data_1 = data1;
	}));
});

http.get(url2, function(response2){
	response2.pipe(bl(function(error2,data2){
		if( error2 ) throw error2;

		// console.log("received 2");
		data_2 = data2;
	}));
});


http.get(url3, function(response3){
	response3.pipe(bl(function(error3, data3){
		if( error3 ) throw error3;

		// console.log("received 3");
		data_3 = data3;
	}));
});

var i = 0 ;
function someDelay(){
	if( data_1 == null || data_2 == null || data_3 == null){
		setTimeout(function(){
			someDelay();
		},1000);
	}else {
		console.log(data_1.toString());
		console.log(data_2.toString());
		console.log(data_3.toString());
	}
}
someDelay();


