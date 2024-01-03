export default function appendToEachArrayValue(array, appendString) {
  var i = 0;
  for (let idx of array) {
    let value = idx;
    array[i++] = appendString + value;
  }

  return array;
}
