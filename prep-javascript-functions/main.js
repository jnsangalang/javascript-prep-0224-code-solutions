function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

let addTwoNumbersResult = addTwoNumbers(5, 5);
console.log('The result of add two numbers:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

let convertHoursToMinutesResult = convertHoursToMinutes(6);
console.log('The conversion of hours to minutes:', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}

let getGreetingResult = getGreeting('Johan');
console.log('Greeting:', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

let addAndMultiplyBy5Result = addAndMultiplyBy5(6, 5);
console.log('The result of the expression:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

let multiplyAndDivideBy5Result = multiplyAndDivideBy5(10, 15);
console.log('The result of the expression:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

let subtractTwoNumbersResult = subtractTwoNumbers(25, 8);
console.log('The result of the expression is:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * 3.141592653589793 * radius;
}

let getCircleCircumferenceResult = getCircleCircumference(8);
console.log(
  'The circumference of the circle is:',
  getCircleCircumferenceResult
);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

let getFullNameResult = getFullName('Johan', 'Sangalang');
console.log('The full name of this person is:', getFullNameResult);

function cube(num) {
  return num ** 3;
}

let cubeResult = cube(20);
console.log('The cube value of this number is:', cubeResult);
