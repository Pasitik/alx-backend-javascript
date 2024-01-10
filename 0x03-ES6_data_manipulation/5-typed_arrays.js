/* Create a function named createInt8TypedArray that returns a new ArrayBuffer with an
Int8 value at a specific position.

It should accept three arguments: length (Number), position (Number), and value (Number).

If adding the value is not possible the error Position outside range should be thrown. */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const newBuffer = new ArrayBuffer(length);
  const int8 = new Int8Array(newBuffer, 0, length);
  int8.set([value], position);
  return new DataView(newBuffer);
}
