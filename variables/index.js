// ES5
// var myNumber = 1;

// function addOne() {
//   myNumber++;
// }

// addOne();
// console.log(myNumber);

// ES6
const addOne = () => {
  let myNumber = 1;
  myNumber++;
  return myNumber;
}

const value = addOne();
console.log(value);