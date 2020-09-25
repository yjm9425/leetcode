// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let findIndex = nums.indexOf(nums[i], i + 1);
    if (findIndex == -1) {
      i++;
    } else {
      nums.splice(findIndex, 1);
    }
  }

  return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
