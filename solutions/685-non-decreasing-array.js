var checkPossibility = function (nums) {
  let minimumCount = 0;
  let modifyNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < modifyNum) {
      minimumCount++;
      minimum = nums[i];
    }
  }
  return minimumCount > 1;
};

console.log(checkPossibility([4, 2, 3]));
console.log(checkPossibility([4, 2, 1]));
