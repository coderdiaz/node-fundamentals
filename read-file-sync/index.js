const fs = require('fs');
var myNumber = undefined;

const callback = () => {
  console.log(myNumber);
}

function addOne(callback) {
  fs.readFile('./number.txt', (err, data) => {
    if (err) throw err;
    myNumber = parseInt(data);
    myNumber++;
    callback();
  });
}

addOne(callback);