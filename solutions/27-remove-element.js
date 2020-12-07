const removeElement = function (nums, val) {
  while (nums.indexOf(val) !== -1) {
    nums.splice(nums.indexOf(val), 1);
  }
  return nums.length;
};

// 오답
// 아래와 같이 풀면 element를 remove하고 이후시점에 인덱스가 꼬여서 제대로 삭제를 수행할 수 없다.
// ex) [0,1,2,2,3,0,4,2] 상황에서 i가 2일때 2를 삭제하면 그다음 배열은 [0,1,2,3,0,4,2]가 되고 index는 3을 넘어가 nums[i]는 3이 된다. 따라서 2번째에 위치한 2는 남게 된다.
const removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

// 올바르게 인덱스 순회를 하는 방법
const removeElement = function (nums, val) {
  let i = 0;

  while (i === nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  return nums.length;
};
