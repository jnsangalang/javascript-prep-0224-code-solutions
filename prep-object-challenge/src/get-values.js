/* exported getValues */
function getValues(object) {
  let values = [];
  for (let value in object) {
    values.push(object[value]);
  }
  return values;
}
