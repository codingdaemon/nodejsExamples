var lsFilter = require("./lsFilter.js");

var dirPath = process.argv[2];
var extension = process.argv[3];

lsFilter(dirPath,extension, function(error, list){
	if( error ) throw error;

	list.forEach(function(entry){
		console.log(entry);
	});
});