/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  let invertedObj = {};

  if (!obj) return undefined;

  for (const key in obj) {
    const value = obj[key];
    invertedObj[value] = key;
  }
  return invertedObj;
}
