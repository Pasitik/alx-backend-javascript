export default function appendToEachArrayValue(array, appendString) {
  let arr;
  for (const value of array) {
    arr.push(appendString + value);
  }

  return arr;
}
