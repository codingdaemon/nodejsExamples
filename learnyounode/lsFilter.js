var fs = require("fs");
var path = require("path");

function filterFiles(dirPath,extension,callback){
	fs.readdir(dirPath, function(error, list){
		if( error ) return callback(error);
		var fiteredList = new Array();
		var index = 0 ;
		list.forEach( function(fileName){
			if( path.extname(fileName) == "." + extension )
				fiteredList[index++] = fileName;
		});

		callback(null, fiteredList);
	});
}

module.exports = filterFiles;