/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */

export const omit = (obj, ...fields) => {
  const arr = Object.entries(obj);
  let sortedObj = {};

  for (let item of arr) {
    if( !fields.includes(item[0]) ) {
      sortedObj[ item[0] ] = item[1];
    };
  };
  return sortedObj;
};


