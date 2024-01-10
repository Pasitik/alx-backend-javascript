/* Create a function named hasValuesFromArray that returns a
boolean if all the elements in the array exist within the set.

It accepts two arguments: a set (Set) and an array (Array). */
const hasValuesFromArray = (set, arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (!set.has(arr[i])) {
      return false;
    }
  }
  return true;
};

export default hasValuesFromArray;
