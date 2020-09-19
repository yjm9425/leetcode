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

const isPalindrome = function (x) {
  let original = x;
  let remember;
  let reverse = 0;
  while (original > 0) {
    remember = original % 10;
    reverse = reverse * 10 + remember;
    original = Math.floor(original / 10);
  }
  return x == reverse;
};
console.log(isPalindrome(121));
