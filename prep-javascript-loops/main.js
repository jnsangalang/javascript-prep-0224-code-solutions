// create your loops here.
function whileLoop1() {
  let i = 0;
  let newArray = [0];

  while (i < 9) {
    i++;
    newArray.push(i);
  }
  return newArray;
}

let whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  let i = 0;
  let newArray1 = [0];

  while (i < 18) {
    i += 2;
    newArray1.push(i);
  }
  return newArray1;
}

let whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

function forLoop1() {
  let i = 0;
  let newArray2 = [];

  for (i = 0; i < 10; i++) {
    newArray2.push(i);
  }
  return newArray2;
}

let forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  let i = 100;
  for (i = 100; i >= 0; i--) {
    console.log('Time to explosion:' + i, '!');
  }
}

let forLoop2Result = forLoop2();
console.log(forLoop2Result);

function forInLoop1(object) {
  let i = 0;
  let newArray3 = [];

  for (let i = 0; i < 1; i++) {
    newArray3.push('name', 'age', 'hobby', 'invention');
  }
  return newArray3;
  console.log(newArray3);
}

forInLoop1Result = forInLoop1();
console.log(forInLoop1Result);

function forInLoop2(object) {
  let i = 0;
  let newArray4 = [];
  let person = {
    name: 'Johan',
    age: '30',
    hobby: 'gym',
    invention: 'fun',
  };
  for (let value in person) {
    newArray4.push(person[value]);
  }
  return newArray4;
}

let forInLoop2Result = forInLoop2();
console.log(forInLoop2Result);
