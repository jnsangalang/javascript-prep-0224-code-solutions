/* Your JS goes in this file */
function isAdult(age) {
  if (age >= 18) return true;
  else return false;
}

let isAdultResult = isAdult(24);
console.log('Is this an adult?', isAdultResult);

function didStudentPass(score) {
  if (score >= 70) return true;
  else return false;
}

let didStudentPassResult = didStudentPass(72);
console.log('Did the student pass?', didStudentPassResult);

function gradeCalculator(score) {
  if (score < 60 && score > 0) return console.log('F');
  else if (score < 70 && score > 60) return console.log('D');
  else if (score < 80 && score > 70) return console.log('C');
  else if (score < 90 && score > 80) return console.log('B');
  else if (score < 100 && score > 90) return console.log('A');
  else if (score > 100) return console.log('A++');
}
let gradeCalculatorResult = gradeCalculator(88);

function seasonMessenger(season) {
  if (season === 'summer') return console.log('It is hot today');
  else if (season === 'spring') return console.log('the flowers are blooming');
  else if (season === 'autumn')
    return console.log('the leaves are changing colors');
  else if (season === 'winter') return console.log('it is cold today');
  else return console.log('Please enter a valid season');
}

let seasonMessengerResult = seasonMessenger('summer');

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday')
    return console.log('Have a good weekend');
  else if (
    dayOfTheWeek === 'monday' ||
    dayOfTheWeek === 'tuesday' ||
    dayOfTheWeek === 'wednesday' ||
    dayOfTheWeek === 'thursday' ||
    dayOfTheWeek === 'friday'
  )
    return console.log('It is a weekday');
}

let dayDetectorResult = dayDetector('friday');
