/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */

export const omit = (obj, ...fields) => {
  const arr = Object.entries(obj);
  let sortedObj = {};

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i][0];
    let isMatch = false;

    for (let j = 0; j < fields.length; j++) {
      if (key === fields[j]) {
        isMatch = true;
        break;
      }
    };

    if (!isMatch) {
      sortedObj[key] = arr[i][1];
    }
  };
  return sortedObj;
};
