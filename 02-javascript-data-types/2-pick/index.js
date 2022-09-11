/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */

export const pick = (obj, ...fields) => {
  const arr = Object.entries(obj);
  let sortedObj = {};

  for (let item of arr) {
    if ( fields.includes(item[0]) ) {
      sortedObj[ item[0] ] = item[1];
    };
  };
  return sortedObj;
};
