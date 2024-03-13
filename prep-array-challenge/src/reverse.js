/* exported reverse */
function reverse(array) {
  let arrayReverse = [];
  for (let i = array.length - 1; i > -1; i--) {
    arrayReverse.push(array[i]);
  }
  return arrayReverse;
}
