function solution(n, lost, reserve) {
  let answer = n;
  let reserveX = reserve.filter(num => !lost.includes(num)).sort((a,b)=>a-b)
  let lostX = lost = lost.filter(num => !reserve.includes(num)).sort((a,b)=>a-b)
  
  for (let i of lostX) {
    const num = reserveX.find((n) => n === i - 1 || n === i + 1);
    if (num) {
      reserveX = reserveX.filter((n) => num !== n);
    } else {
      answer--;
    }
  }
  return answer;
}
