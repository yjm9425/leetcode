// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let str = Math.abs(x).toString().split("").reverse().join("");
  if (str > 2147483647) return 0;
  return x > 0 ? str : "-" + str;
};

console.log(reverse(-321));
