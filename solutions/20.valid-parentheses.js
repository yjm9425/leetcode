// https://leetcode.com/problems/valid-parentheses/submissions/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  let stack = [];
  let flag = true;
  s.split("").forEach((char) => {
    if (char == "(") {
      stack.push(")");
    } else if (char == "{") {
      stack.push("}");
    } else if (char == "[") {
      stack.push("]");
    } else if (stack.length == 0 || stack.pop() != char) {
      flag = false;
    }
  });

  return !(stack.length !== 0 || !flag);
};
