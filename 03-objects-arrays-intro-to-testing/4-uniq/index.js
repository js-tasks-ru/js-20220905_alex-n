/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  let newArr = [];

  if (!arr) return newArr;

  for (const elem of arr) {
      if ( !newArr.includes(elem) ) {
        newArr.push(elem)
      }
  }
  return newArr;
}
