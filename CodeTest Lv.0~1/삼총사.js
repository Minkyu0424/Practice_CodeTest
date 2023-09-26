function solution(number) {
  sum = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i; j < number.length - 2; j++) {
      for (let k = j; k < number.length - 2; k++) {
        if (number[i] + number[j + 1] + number[k + 2] === 0) sum++;
      }
    }
  }
  return sum;
}
