/* exported compact */
function compact(array) {
  let arrayCompact = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      arrayCompact.push(array[i]);
    }
  }
  return arrayCompact;
}
