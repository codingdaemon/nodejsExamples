var uglifyJs = require("uglify-js");
var fs = require("fs");

var statementNodes = {};
function getCodeSnippet(code, node){
    var startPos = node.start.pos;
    var endPos = node.end.pos;
    process.stdout.write("startPos: " + startPos + "\t endPos: " + endPos + "\n");
    var snippet = code.substr(startPos,endPos-startPos +1);
    return snippet;
}

function printNodes(code){
	console.log("code = " + code + "\n\n\n");
	var ast = uglifyJs.parse(code);
	 var i = 0 ; 
    ast.walk(new uglifyJs.TreeWalker(function(node){
            if( node instanceof uglifyJs.AST_SimpleStatement || node instanceof  uglifyJs.AST_Definitions){
                var snippet = getCodeSnippet(code, node);
                console.log(i++ + ". statement : " + snippet);
            }
    }));
}

// function testFunc(){
// console.log("hello");
// console.log("world");
// }

fs.readFile("test.js" ,function(error, dataChunk){
	if(error) throw error;
	var data = dataChunk.toString().replace(/\r\n/g, '\n');
	for( var i = 0 ; i < data.length ; i++){
		process.stdout.write(i + ":" + data.charCodeAt(i) + '\t');
	}
	printNodes(data);
});

// var codeStr = testFunc.toString();
// var code = codeStr.replace(/\r\n/g, '\n');
// console.log("codeStr.length = " + codeStr.length + "\t code.length = " + code.length);
// printNodes(code);

