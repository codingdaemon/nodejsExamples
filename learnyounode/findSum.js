//console.log("all params : " + process.argv);

if (process.argv.length <= 2) {
	console.log("ERROR : Insufficient arguments");
	return;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && 	(n);
}

var sum = 0;
try {
	for (var i = 2; i < process.argv.length; i++) {
		if(isNumber(process.argv[i])){
			sum +=  Number(process.argv[i]);
		}
		else{
			throw "'" + process.argv[i] + "' is not a number.";
		}
	}

	console.log(sum);
} catch (e) {
	console.log("exception occured during calculation : " + e);
}
