const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});


reader.question("Enter a number", function(answer)){
  console.log(`lets add the number ${answer}`)
});

const addNumbers(sum, leftnum, callback) {


}
