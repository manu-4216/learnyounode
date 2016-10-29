// Printsout the sum of the numbers provided to the program (process.argv) 

var sum = 0;
for (var i=2; i < process.argv.length; i++) {
    sum += +process.argv[i];
}

console.log(sum);