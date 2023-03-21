//console.log(process.argv);
var res = 0;
for (let x = 2; x < process.argv.length; x++) {
	res += Number(process.argv[x]);
}
//printing the sum
console.log(res);
