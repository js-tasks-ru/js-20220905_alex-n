/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */

export const pick = (obj, ...fields) => {
  const arr = Object.entries(obj);
  let sortedObj = {};

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i][0];

    for (let j = 0; j < fields.length; j++) {
      if (key === fields[j]) {
        sortedObj[key] = arr[i][1];
      };
    };
  };
  return sortedObj;
};
