// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const roman = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let sum = 0;
  let i = 0;
  const romanNumeral = s.split("");
  while (i < romanNumeral.length) {
    if (roman.hasOwnProperty(romanNumeral[i] + romanNumeral[i + 1])) {
      sum += roman[romanNumeral[i] + romanNumeral[i + 1]];
      i += 2;
    } else {
      sum += roman[romanNumeral[i]];
      i++;
    }
  }
  return sum;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
