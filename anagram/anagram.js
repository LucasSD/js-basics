// simple but inefficient for time complexity
// function anagram (txt1, txt2) {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?';
//   for (const char of characters) {
//     if (txt1.split(char).length - 1 !== txt2.split(char).length - 1) {
//       return false
//     }
//
//   }
//   return true
// }


// more efficient solution
function anagram(str1, str2) {
  // Early return if the lengths of the strings are not equal
  if (str1.length !== str2.length) {
    return false;
  }

  const aCharMap = buildCharMap(str1);
  const bCharMap = buildCharMap(str2);

  // Comparing character maps
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagram




