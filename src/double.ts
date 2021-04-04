/**
 * Multiplies a value by 2.
 *
 *
 * @param value
 * @returns
 * @anotherNote
 */
function double(value: number) {
  // if (Object.prototype.toString.call(value) === '[object Number]') {
  if (value <= Number.MIN_VALUE || value >= Number.MAX_VALUE) {
    throw new Error('The number is out of range that can be represented.')
  } else {
    return value * 2
  }
  // } else {
  //   throw new Error('The value is not number.')
  // }
}

export default double
