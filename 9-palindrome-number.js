// https://leetcode.com/problems/palindrome-number

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const integerArr = x.toString().split("");
  const middleIndex =
    integerArr.length % 2 === 1
      ? integerArr.length / 2 + 1
      : integerArr.length / 2;
  for (let i = 0; i < middleIndex; i++) {
    if (integerArr[i] != integerArr[integerArr.length - 1 - i]) return false;
  }
  return true;
};

console.log(isPalindrome("121"));
console.log(isPalindrome("-121"));
console.log(isPalindrome("10"));
