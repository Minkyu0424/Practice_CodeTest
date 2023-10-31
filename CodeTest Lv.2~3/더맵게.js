function solution(scoville, K) {
  let cnt = 0;
  scoville.sort((a,b)=> a-b);
  while (scoville[0] < K) {
    let mix = scoville[0] + scoville[1] * 2;
    scoville.splice(0, 2, mix);
    cnt++;
    scoville.sort((a,b)=> a-b);
  }
  console.log(cnt);
  console.log(scoville);
}
solution([1, 2, 3, 9, 10, 12], 7);
