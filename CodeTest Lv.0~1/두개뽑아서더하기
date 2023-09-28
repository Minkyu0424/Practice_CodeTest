function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j <= numbers.length - 1; j++) {
      if (!answer.includes(numbers[i] + numbers[j]))
        answer.push(numbers[i] + numbers[j]);
    }
  }
  console.log(answer.sort());
}
solution([2, 1, 3, 4, 1]);
