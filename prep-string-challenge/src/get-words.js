/* exported getWords */
function getWords(string) {
  words = string.split(' ');
  if (words == '') {
    return [];
  } else {
    return words;
  }
}
