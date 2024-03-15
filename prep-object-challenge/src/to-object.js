/* exported toObject */
function toObject(keyValuePair) {
  let object = {};

  let propname = keyValuePair[0];
  object[propname] = keyValuePair[1];

  return object;
}
