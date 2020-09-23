// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let returnPrefix = "";
  if (strs.length > 0) {
    for (let i = 0; i < strs[0].length; i++) {
      let equel = true;
      for (let j = 0; j < strs.length; j++) {
        if (!strs[j].startsWith(strs[0].substring(0, i + 1))) equel = false;
      }
      if (equel) {
        returnPrefix += strs[0][i];
      }
    }
  }
  return returnPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
