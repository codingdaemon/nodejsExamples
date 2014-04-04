var fs = require("fs");

var path = process.argv[2];
//console.log("path : " + path);
var buffer = fs.readFileSync(path);
var content = buffer.toString();
var lines = content.split("\n");
var numberOfLines = lines.length;
if( content[content.lenght-1] != '\n'){
	numberOfLines--;
}

console.log(numberOfLines);