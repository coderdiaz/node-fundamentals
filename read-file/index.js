const fs = require('fs');
var myNumber = undefined;

function addOne() {
  const data = fs.readFileSync('./number.txt');
  myNumber = parseInt(data);
  myNumber++;
}

addOne();
console.log(myNumber);