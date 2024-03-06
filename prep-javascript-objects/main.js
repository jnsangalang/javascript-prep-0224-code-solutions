const person = {
  firstName: 'Johan',
  lastName: 'Sangalang',
  hobby: 'Videogames',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("This person's name is:", fullName);

person.job = 'disaster';
console.log("This person's job is:", person.job);

person['previousJob'] = 'Occupational Therapy Assistant';
console.log("This person's previous job was:", person['previousJob']);

console.log('All information of this person:', person);
