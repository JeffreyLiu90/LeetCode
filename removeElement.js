const removeElement = (nums, val) => {
  if (!nums) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

//Other Solution

const removeElement = (nums, val) => {
  if (!nums) return 0;
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] == nums[i];
      pointer++;
    }
  }
  return pointer;
};
