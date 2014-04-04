var fs = require("fs");

var path = process.argv[2];
//console.log("path : " + path);

fs.readFile(path, {
	encoding: "utf8",
	flag: "r"
}, function(error, data) {
	if (error) throw Error();
	var lines = data.split("\n");
	var lineCount = lines.length;
	if (data[data.length - 1] != '\n') {
		lineCount--;
	}
	console.log(lineCount);
});