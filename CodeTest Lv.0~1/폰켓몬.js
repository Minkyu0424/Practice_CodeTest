function solution(nums) {
  let type = new Set(nums);
  return nums.length / 2 > type.size ? type.size : nums.length / 2;
}
