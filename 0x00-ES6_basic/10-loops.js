export default function appendToEachArrayValue(array, appendString) {
  let new arr;
  for (let value of array) {
    arr.push( appendString + value);
  }

  return arr;
}
