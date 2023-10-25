function solution(nums) {
  const result = [];

  const 소수판별기 = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const num = nums[i] + nums[j] + nums[k];
        if (소수판별기(num)) {
          result.push(num);
        }
      }
    }
  }

  return result.length;
}
