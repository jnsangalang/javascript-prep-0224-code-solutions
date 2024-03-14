/* exported reverseWord */
function reverseWord(word) {
  let inverseWord = '';
  let i = word.length - 1;
  while (i >= 0) {
    inverseWord += word.substring(i, i + 1);
    i--;
  }
  return inverseWord;
}
