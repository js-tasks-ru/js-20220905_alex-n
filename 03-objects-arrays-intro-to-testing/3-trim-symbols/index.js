/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let newStr = '';
  let counter = 0;

  if (size === undefined) return string;

  for (let i = 0; i < string.length; i++) {
    if (counter < size) {
      newStr += string[i];
      counter++;
    };

    if (string[i] !== string[i+1]) {
      counter = 0;
    };
  };
  return newStr;
};
