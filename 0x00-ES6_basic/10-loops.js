export default function appendToEachArrayValue(array, appendString) {
  for (let idx of [...Array(array.length).keys()]) {
    array[idx] = appendString + array[idx];
  }

  return array;
}
